export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-800 max-w-full lg:px-40 px-0">
      {children}
    </div>
  );
}
