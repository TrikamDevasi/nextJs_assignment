"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Student } from "@/types/student";
import SearchInput from "./SearchInput";
import DepartmentFilter from "./DepartmentFilter";
import StudentGrid from "./StudentGrid";
import EmptyState from "./EmptyState";

interface StudentDirectoryProps {
  initialStudents: Student[];
}

function DirectoryContent({ initialStudents }: StudentDirectoryProps) {
  const searchParams = useSearchParams();
  const initialDept = searchParams.get("department") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(initialDept);

  const departments = Array.from(
    new Set(initialStudents.map((s) => s.department))
  );

  const filteredStudents = initialStudents.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDept =
      selectedDepartment === "All" || student.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  const handleReset = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
  };

  return (
    <div>
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <DepartmentFilter
            selectedDepartment={selectedDepartment}
            departments={departments}
            onChange={setSelectedDepartment}
          />
        </div>
      </div>

      {filteredStudents.length > 0 ? (
        <StudentGrid students={filteredStudents} />
      ) : (
        <EmptyState onReset={handleReset} />
      )}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-4 sm:flex-row">
        <span className="text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-700">{filteredStudents.length}</span> of{" "}
          <span className="font-semibold text-slate-700">{initialStudents.length}</span> students
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            className="rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-400 opacity-60 cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type="button"
            disabled
            className="rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-400 opacity-60 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudentDirectory({ initialStudents }: StudentDirectoryProps) {
  return (
    <Suspense fallback={<div className="h-40 animate-pulse rounded-xl bg-slate-100" />}>
      <DirectoryContent initialStudents={initialStudents} />
    </Suspense>
  );
}
