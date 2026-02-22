export const metadata = {
  title: 'Coolin\' with Colin',
};

export default function ChillinOutPage() {
  return (
    <html lang="en">
        <body className={`antialiased bg-white dark:bg-black text-black dark:text-white`}>
            <main
                className="flex flex-col items-center justify-center min-h-screen py-2 bg-repeat"
                style={{ backgroundImage: "url('/fun/turtwig.png')", backgroundSize: "150px auto", height: "100vh" }}
            >
                <h1 className="text-4xl font-bold">Chillin' Out</h1>
                <p className="mt-4 text-lg">We out here.</p>
            </main>
        </body>
    </html>
  );
}
