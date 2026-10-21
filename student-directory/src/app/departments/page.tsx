import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Departments
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <span>3 Active Academic Faculties</span>
        </div>
      </div>

      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Computer Science
              </h2>
            </div>
            <p className="max-w-2xl text-xs text-slate-600">
              Software engineering, artificial intelligence, algorithms, and systems infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <span>4 Specializations</span>
              <span>·</span>
              <span>320 Enrolled Students</span>
            </div>
          </div>

          <Link
            href="/departments/computer-science/web-development"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition whitespace-nowrap"
          >
            <span>View students</span>
            <span>→</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Design
              </h2>
            </div>
            <p className="max-w-2xl text-xs text-slate-600">
              User experience research, visual communication, interaction design, and product prototyping.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <span>3 Specializations</span>
              <span>·</span>
              <span>185 Enrolled Students</span>
            </div>
          </div>

          <Link
            href="/?department=Design"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition whitespace-nowrap"
          >
            <span>View students</span>
            <span>→</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Business
              </h2>
            </div>
            <p className="max-w-2xl text-xs text-slate-600">
              Strategic management, financial technology, international entrepreneurship, and analytics.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <span>3 Specializations</span>
              <span>·</span>
              <span>240 Enrolled Students</span>
            </div>
          </div>

          <Link
            href="/?department=Business"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition whitespace-nowrap"
          >
            <span>View students</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-2 text-xs text-slate-500 sm:flex-row">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
