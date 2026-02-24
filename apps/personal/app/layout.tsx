import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white dark:bg-black text-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
