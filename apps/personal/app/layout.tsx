import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <a
          href="/funhouse"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
          }}
        >
          .
        </a>
        {children}
      </body>
    </html>
  );
}
