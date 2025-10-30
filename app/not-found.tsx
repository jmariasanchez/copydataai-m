import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-black mb-6">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Go Home</span>
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <path d="M8 11h8" />
              <path d="M8 7h6" />
            </svg>
            <span>View Blog</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
