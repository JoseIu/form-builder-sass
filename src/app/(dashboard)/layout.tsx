import { Header } from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default layout;
