import Link from "next/link";
import { students } from "@/data/students";

export default function WebDevelopmentDepartmentPage() {
  const trackStudents = students.filter(
    (student) => student.department === "Computer Science"
  );

  const subtopics: Record<string, string> = {
    "stu-1042": "Full-Stack Architecture",
    "stu-1155": "Reactive UI Design",
    "stu-1310": "Distributed Web Systems",
    "stu-1388": "Progressive Web Apps",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/departments" className="hover:text-blue-600 transition">
            Departments
          </Link>
          <span>/</span>
          <Link href="/departments" className="hover:text-blue-600 transition">
            Computer Science
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Web Development</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Link
            href="/departments"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            <span>←</span>
            <span>Return to Computer Science Department</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            <span>View all students</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Web Development
              </h1>
              <span className="rounded border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                Specialization under Computer Science
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-600">
              Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Department Track
            </span>
            <span className="mt-1 rounded border border-slate-300 bg-slate-50 px-3 py-1 font-mono text-xs font-bold text-slate-700">
              CS-SPEC-04
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-4">
          <div>
            <span className="text-[11px] font-medium text-slate-500">
              Academic Lead
            </span>
            <p className="mt-1 text-xs font-bold text-slate-900">
              Prof. Elena Vance
            </p>
          </div>

          <div>
            <span className="text-[11px] font-medium text-slate-500">
              Primary Core Lab
            </span>
            <p className="mt-1 text-xs font-bold text-slate-900">
              Turing Hall 408
            </p>
          </div>

          <div>
            <span className="text-[11px] font-medium text-slate-500">
              Total Enrollment
            </span>
            <p className="mt-1 text-xs font-bold text-slate-900">
              4 Active Enrollees
            </p>
          </div>

          <div>
            <span className="text-[11px] font-medium text-slate-500">
              Curriculum Cycle
            </span>
            <p className="mt-1 text-xs font-bold text-slate-900">
              2024–2025 Revised
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">
              Students in this Specialization
            </h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
              {trackStudents.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Filtered by Track:</span>
            <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
              Web Development
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {trackStudents.map((student) => (
            <div
              key={student.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
                      {getInitials(student.name)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {student.name}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">
                        {student.rollNumber}
                      </span>
                    </div>
                  </div>

                  <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    {student.studyYear}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                <span className="text-slate-500">
                  {subtopics[student.id] || student.specialization}
                </span>

                <Link
                  href={`/students/${student.id}`}
                  className="font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  View profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 sm:flex-row">
        <span>Campus Directory © Academic Informatics Core</span>
        <div className="flex items-center gap-1.5">
          <span>Path: /departments/computer-science/web-development</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}
