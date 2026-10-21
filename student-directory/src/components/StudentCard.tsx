import Link from "next/link";
import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
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
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${getAvatarColor(
              student.department
            )}`}
          >
            {getInitials(student.name)}
          </div>
          <span className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-600">
            {student.rollNumber}
          </span>
        </div>

        <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
          {student.name}
        </h3>

        <div className="mt-2 flex items-center gap-2.5">
          <span className="rounded border border-blue-200 bg-blue-50/70 px-2 py-0.5 text-xs font-medium text-blue-700">
            {student.department}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {student.studyYear}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-3.5">
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
        >
          <span>View profile</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
