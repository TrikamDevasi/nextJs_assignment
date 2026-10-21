import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          About Campus Directory
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Academic portal providing verified directory information for students and faculties.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          The Campus Directory is an institutional web platform designed for exploring active student cohorts, department faculties, and curriculum specializations.
        </p>
        <p>
          Built with Next.js App Router, TypeScript, and modern component architecture, the directory provides instant search, departmental filtering, and detailed student profiles.
        </p>
        <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
          >
            Browse Students
          </Link>
          <Link
            href="/departments"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Explore Departments
          </Link>
        </div>
      </div>
    </div>
  );
}
