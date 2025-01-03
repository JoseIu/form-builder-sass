'use server';

import { formSchema, FormTypes } from '@/components/dashboard/formSchema';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

class UserNotFoundError extends Error {
  constructor() {
    super('User not found');
  }
}

export const getStatsForm = async () => {
  const user = await currentUser();
  if (!user) throw new UserNotFoundError();

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visists: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visists ?? 0;
  const submissions = stats._sum.submissions ?? 0;

  const submissionRate = visits > 0 ? (submissions / visits) * 100 : 0;
  //TODO: check if this is correct
  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
};

export const createForm = async (data: FormTypes) => {
  const isValidForm = formSchema.safeParse(data);
  if (!isValidForm.success) {
    throw new Error('Invalid form data');
  }
  const user = await currentUser();

  if (!user) throw new UserNotFoundError();

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      ...data,
    },
  });

  if (!form) throw new Error('Form not created');
  return form.id;
  console.log(data);
};

export const getForms = async () => {
  const user = await currentUser();
  if (!user) throw new UserNotFoundError();

  const forms = await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return forms;
};

export const getFormById = async (id: string) => {
  const user = await currentUser();
  if (!user) throw new UserNotFoundError();

  const form = await prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
  });

  return form;
};
