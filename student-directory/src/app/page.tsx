import { students } from "@/data/students";
import StudentDirectory from "@/components/StudentDirectory";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Students
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Browse students and view their profiles.
        </p>
      </div>

      <StudentDirectory initialStudents={students} />
    </div>
  );
}
