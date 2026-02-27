export const metadata = {
  title: 'Coolin\' with Colin',
};

export default function ChillinOutPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-personal"
      style={{ backgroundImage: "url('/fun/turtwig.png')", backgroundSize: "150px auto", height: "100vh" }}
    >
      <div className="flex flex-row">
        <div className="fading">
          <img
            src="fun/the-noid.png"
            className="max-w-[50px] h-auto"
            alt="It is the noid."
          />
          <div className="text-background">
            <p>RESPECT THE NOID</p>
          </div>
        </div>
        <div className="background flex flex-col">
          <h1 className="retro-title">Welcome to Turtwig Town</h1>
          <p className="retro-paragraph">A very serious website dedicated to our #1 lil guy</p>
          <div className="mt-auto flex">
            <img
              src="fun/bus_meme.jpg"
              className="w-full max-w-[250px] h-auto"
              alt="turtwig bus meme"
            />
            <img
              src="fun/yell_meme.jpg"
              className="w-full max-w-[350px] h-auto ml-auto"
              alt="turtwig yell meme"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
