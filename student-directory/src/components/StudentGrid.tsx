import { Student } from "@/types/student";
import StudentCard from "./StudentCard";

interface StudentGridProps {
  students: Student[];
}

export default function StudentGrid({ students }: StudentGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
