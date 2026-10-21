import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StudentProfilePage({ params }: PageProps) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    notFound();
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const getAvatarColor = (dept: string) => {
    if (dept === "Computer Science") {
      return "bg-blue-100 text-blue-700";
    }
    if (dept === "Design") {
      return "bg-rose-100 text-rose-700";
    }
    if (dept === "Business") {
      return "bg-amber-100 text-amber-800";
    }
    return "bg-slate-100 text-slate-700";
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition">
            Students
          </Link>
          <span>/</span>
          <span className="text-slate-800">{student.name}</span>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            <span>←</span>
            <span>Back to students</span>
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold shadow-xs ${getAvatarColor(
              student.department
            )}`}
          >
            {getInitials(student.name)}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {student.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-semibold text-slate-600">
                {student.rollNumber}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 border-y border-slate-100 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Department
            </span>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {student.department}
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Study Year
            </span>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {student.studyYear}
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Email
            </span>
            <p className="mt-1 text-sm font-semibold text-blue-600">
              <a href={`mailto:${student.email}`} className="hover:underline">
                {student.email}
              </a>
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Enrolled
            </span>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {student.enrollmentTerm}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-bold text-slate-900">About</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {student.bio}
          </p>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <h2 className="text-sm font-bold text-slate-900">Academic Details</h2>

          <div className="mt-4 flex flex-col gap-2 rounded-xl bg-slate-50 p-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium text-slate-500">Current Academic Standing</span>
            <span className="font-semibold text-slate-800">
              {student.studyYear} Undergraduate
            </span>
          </div>

          <div className="mt-6">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Enrolled Subjects
            </span>

            <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200/80 bg-white">
              {student.subjects.map((sub) => (
                <div
                  key={sub.code}
                  className="flex items-center justify-between px-4 py-3 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-slate-900">
                      {sub.code}:
                    </span>
                    <span className="text-slate-600">{sub.name}</span>
                  </div>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                    {sub.credits.toFixed(1)} Credits
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
