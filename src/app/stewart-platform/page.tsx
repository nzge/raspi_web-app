// src/app/stewartplatform/page.tsx

import Link from 'next/link';

export default function StewartPlatformPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Stewart Platform</h1>
      <p className="text-lg text-gray-600">Welcome to the Stewart Platform page!</p>

      {/* Return to Home Button */}
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
          Return to Home
        </button>
      </Link>
    </main>
  );
}
