import { getForms } from '@/actions/formAction';
import { formatter } from '@/utils/formatter';
import Link from 'next/link';
import { IoArrowForwardOutline, IoCreateOutline, IoEyeOutline, IoFolderOutline } from 'react-icons/io5';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card';

export const FormCards = async () => {
  const forms = await getForms();
  return (
    <>
      {forms.map((form) => (
        <Card key={form.id} className="p-4">
          <CardTitle className="flex items-center justify-between">
            {form.name}

            {form.published && <Badge>Published</Badge>}
            {!form.published && <Badge variant={'destructive'}>Darf</Badge>}
          </CardTitle>

          <CardDescription>
            {formatter(form.createdAt)}

            {form.published && (
              <div>
                <span>
                  <IoEyeOutline />
                  {form.visists.toLocaleString()}
                </span>
                <span>
                  <IoFolderOutline />
                  {form.submissions.toLocaleString()}
                </span>
              </div>
            )}
          </CardDescription>

          <CardContent className="p-0">
            <p>{form.description || 'No Description'}</p>
          </CardContent>

          <CardFooter className="w-ful p-0">
            {form.published && (
              <Link
                href={`/forms/${form.id}`}
                className="w-full flex justify-center gap-4 bg-primary text-secondary p-2 rounded-md"
              >
                View sudmissions <IoArrowForwardOutline size={20} />
              </Link>
            )}
            {!form.published && (
              <Link
                href={`/forms/${form.id}`}
                className="w-full flex justify-center gap-4 bg-primary/80 text-secondary p-2 rounded-md"
              >
                Edit <IoCreateOutline size={20} />
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
