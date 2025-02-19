type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <main className='mx-auto w-full px-4 max-w-[768px] py-6 text-baseblack flex flex-col items-center'>
      {children}
    </main>
  );
}
