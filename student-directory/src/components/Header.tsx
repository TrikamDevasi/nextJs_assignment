"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Students", href: "/" },
    { name: "Departments", href: "/departments" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </span>
            <span className="text-base font-bold text-slate-900">
              Campus Directory
            </span>
          </Link>

          <nav className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border-blue-600 text-slate-900"
                      : "border-transparent text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <span className="rounded border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}
