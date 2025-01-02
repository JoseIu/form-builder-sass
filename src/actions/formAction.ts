'use server';

import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

class UserNotFoundError extends Error {}

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
  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
};
