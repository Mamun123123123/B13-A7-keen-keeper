import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-black">

      <div className="text-center max-w-md">

        <h1 className="text-6xl font-extrabold text-gray-900">
          404
        </h1>

    
        <h2 className="text-xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

    
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-[#1a3c2a] text-white rounded-xl hover:bg-[#145a3a] transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}