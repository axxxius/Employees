export interface EmployeeCompany {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: Gender[];
  position: Position[];
  stack: Technology[];
  birthdate: string;
  dateOfEmployment: string;
}

type Gender = 'Male' | 'Female';

type Position = 'Frontend' | 'Backend' | 'Analyst' | 'Manager' | 'Designer';

type Technology = 'CSharp' | 'React' | 'Java' | 'PHP' | 'Figma' | 'Word';
