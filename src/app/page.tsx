import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome</h1>
      <div className="flex flex-row space-x-6"> {/* Arranges buttons in a row */}
        <Link href="/drone">
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition">
            Drone
          </button>
        </Link>
        <Link href="/rpi-stats">
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition">
            RPi Stats
          </button>
        </Link>
        <Link href="/stewart-platform">
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-green-600 transition">
            Stewart Platform
          </button>
        </Link>
      </div>
    </div>
  );
}
