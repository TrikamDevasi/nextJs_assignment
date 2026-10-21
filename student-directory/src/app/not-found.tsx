import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
        404 · Route Not Found
      </span>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Student or department not found
      </h1>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition"
        >
          Return to Students Directory
        </Link>
        <Link
          href="/departments"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
        >
          Browse All Departments
        </Link>
      </div>

      <div className="mt-12 w-full max-w-lg rounded-xl border border-slate-200 bg-white text-left shadow-xs">
        <div className="border-b border-slate-100 px-4 py-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
          Suggested Starting Points
        </div>
        <div className="divide-y divide-slate-100 text-xs">
          <Link
            href="/"
            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
          >
            <span>All Active Enrolled Students</span>
            <span>→</span>
          </Link>
          <Link
            href="/departments"
            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
          >
            <span>Academic Departments & Faculties</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
