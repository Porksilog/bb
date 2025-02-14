import PhotoSlider from "./components/PhotoSlider"

export default function ValentinePage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Happy Valentine's Day!</h1>
        <p className="text-xl text-red-400">To my special someone ❤️</p>
      </header>

      <main className="text-center w-full max-w-2xl space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PhotoSlider />
        </div>

        <div className="flex justify-center">
          <div className="heart"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">A Message for You</h2>
          <p className="text-gray-700 mb-4">
            [Your personalized message goes here. Tell her how much she means to you!]
          </p>
          <p className="text-gray-700">
            With all my love,
            <br />
            [Your Name]
          </p>
        </div>
      </main>

      <footer className="text-center text-red-400 mt-8">
        <p>Made with love, just for you 💖</p>
      </footer>
    </div>
  )
}

