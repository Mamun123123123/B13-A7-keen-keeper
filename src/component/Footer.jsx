import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3c2a] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-10 sm:py-12">

        
        <div className="flex flex-col items-center md:items-center justify-center gap-8 sm:gap-10 text-center">

          
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-xl text-white font-extrabold tracking-tight">
              Keen<span>Keeper</span>
            </h3>

            <p className="text-sm text-white mt-2 leading-relaxed max-w-xs sm:max-w-md">
              Your personal relationship architect — nurture the bonds that matter most.
            </p>
          </div>

          
          <div className="flex flex-col items-center">
            <p className="text-xs text-white font-semibold text-emerald-300/50 uppercase tracking-widest mb-3">
              Social Links
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">

              {[
                {
                  label: "Twitter",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-emerald-200 hover:text-white transition"
                >
                  {social.icon}
                </button>
              ))}

            </div>
          </div>

        </div>

    
        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">

            <p className="text-xs text-emerald-300/40">
              © 2026 KeenKeeper. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-5">

              <Link href="#" className="text-xs text-emerald-300/40 hover:text-emerald-200">
                Privacy Policy
              </Link>

              <Link href="#" className="text-xs text-emerald-300/40 hover:text-emerald-200">
                Terms
              </Link>

              <Link href="#" className="text-xs text-emerald-300/40 hover:text-emerald-200">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}