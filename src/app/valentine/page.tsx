import PhotoSlider from "../components/PhotoSlider"

export default function ValentinePage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Happy Valentine's Day!</h1>
        <p className="text-xl text-red-400">to my one and only BABY !!! ❤️</p>
      </header>

      <main className="text-center w-full max-w-3xl space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PhotoSlider />
        </div>

        <div className="flex justify-center">
          <div className="heart"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">letter q for u my baby !!!!</h2>
          <p className="text-gray-700 mb-4">
          hello my baaaaby girl !!! first of all, i just wanna say HAPPY VALENTINE'S DAAAAAAAAY !!!!! hihi 😝 idk if cheesy for u pero ang cootie kz netong naisip q gawin hihi, eto kz naisip q ibigay for nayon valentine's mismo ^^ pero yun, HAPPY VALENTINE'S olit !!!! im super happy na i have someone to celebrate itong valentine's and its U !!!! ende man tayu makapag exactly nayon at least may plan naman tayu sa sunday hihi pero ket na papano, i hope ma enjoy natin etong special day na to ket ende tayu magkasama T^T next valentine's for sure macecelebrate na natin to ng same daaay !!! ayuuun lng i want u to always remember na I LOVE YOU WITH ALL MY HEART !!!! and it will never ever change no matter what happen ^^ mwuaaaaaaaaps :* 
          </p>
          <p className="text-gray-700">
            with all my love,
            <br />
            your baby ^^
          </p>
        </div>
      </main>

      <footer className="text-center text-red-400 mt-8">
        <p>Made with love, just for you !!! I LOVE YOU SO MUCHIE !!!💖</p>
      </footer>
    </div>
  )
}

