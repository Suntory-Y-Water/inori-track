type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <div className='flex flex-col items-center'>{children}</div>;
}
