'use client';
import { useEffect } from 'react';

type Props = {
  error: Error;
};

const ErrorPage = ({ error }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <div>ERROR : {error.message}</div>;
};

export default ErrorPage;
