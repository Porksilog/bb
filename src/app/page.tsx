import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">HELLO MY BAAAABY !!!! 😝😝😝</h1>
        <p className="text-xl text-red-400 mb-8">itu po ang small gift q for valentines hihi ❤️</p>
        <Link
          href="/valentine"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          click mo q ^^
        </Link>
      </div>
    </div>
  )
}

