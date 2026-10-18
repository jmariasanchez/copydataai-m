export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-black mb-6">Jose Sanchez</h1>

        <p className="text-xl text-gray-800 leading-relaxed mb-8">Engineer.</p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Building{" "}
          <a
            href="https://joluai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-black transition-colors"
          >
            joluAI
          </a>
          —an autonomous AI operator that runs your company's backend.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://joluai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black underline underline-offset-4 transition-colors"
          >
            joluAI.com
          </a>
          <a
            href="https://github.com/copydataai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black underline underline-offset-4 transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.87 3.16 8.99 7.55 10.45.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.27-1.23-1.6-1.23-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.14 1.68 1.14.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.19.69-1.47-2.45-.28-5.03-1.23-5.03-5.47 0-1.21.43-2.19 1.14-2.96-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.11 1.13a10.7 10.7 0 0 1 2.83-.38c.96 0 1.93.13 2.83.38 2.16-1.44 3.1-1.13 3.1-1.13.62 1.53.23 2.67.12 2.95.71.77 1.14 1.75 1.14 2.96 0 4.25-2.58 5.19-5.04 5.46.39.34.73 1 .73 2.02 0 1.46-.01 2.64-.01 3 .01.29.2.64.76.53A10.73 10.73 0 0 0 23.1 11.6C23.1 5.33 18.27.5 12 .5Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://x.com/copydataaireal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black underline underline-offset-4 transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.228 8.26 8.487 11.24H16.18l-5.35-6.99-6.12 6.99H1.4l7.73-8.83L.9 2.25h7.02l4.82 6.35 5.504-6.35Zm-1.158 19.5h1.833L6.996 4.12H5.03l12.057 17.63Z" />
            </svg>
            <span>X</span>
          </a>
          <a
            href="/blog"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black underline underline-offset-4 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <path d="M8 11h8" />
              <path d="M8 7h6" />
            </svg>
            <span>Blog</span>
          </a>
        </div>
      </div>
    </main>
  );
}
