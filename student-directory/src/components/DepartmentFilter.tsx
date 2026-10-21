interface DepartmentFilterProps {
  selectedDepartment: string;
  departments: string[];
  onChange: (department: string) => void;
}

export default function DepartmentFilter({
  selectedDepartment,
  departments,
  onChange,
}: DepartmentFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="department-select" className="text-xs font-medium text-slate-500 whitespace-nowrap">
        Department:
      </label>
      <div className="relative">
        <select
          id="department-select"
          value={selectedDepartment}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs font-semibold text-slate-800 shadow-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="All">All departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
