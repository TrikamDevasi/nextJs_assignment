export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  department: string;
  studyYear: string;
  email: string;
  enrollmentTerm: string;
  status: string;
  bio: string;
  specialization: string;
  subjects: Subject[];
}
