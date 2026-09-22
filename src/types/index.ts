export type StudentStatus = 'Ativo' | 'Inativo';

export interface Student {
  id: string;
  name: string;
  birthDate: string; // DD/MM/AAAA
  age: number;
  gender: 'Masculino' | 'Feminino' | 'Outro';
  cpf: string;
  naturalness: string;
  nationality: string;
  guardian: string;
  guardianCpf: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianRelationship: string;
  address: string;
  school: string;
  grade: string;
  period: 'Manhã' | 'Tarde' | 'Integral';
  program: string;
  status: StudentStatus;
  avatarUrl: string;
  registrationDate: string;
  observations: string;
}

export interface StatCardData {
  title: string;
  value: string;
  subtext: string;
  iconName: 'users' | 'user-check' | 'heart-handshake' | 'file-text' | 'files' | 'stethoscope';
  bgColor: string;
  iconColor: string;
  borderColor: string;
}

export interface ActivityItem {
  id: string;
  type: 'aluno' | 'documento' | 'associado' | 'atendimento';
  title: string;
  description: string;
  timestamp: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
  status: 'Válido' | 'Pendente' | 'Expirado';
}

export interface AttendanceRecord {
  id: string;
  date: string;
  professional: string;
  specialty: string;
  summary: string;
  status: 'Concluído' | 'Agendado';
}

export interface HealthData {
  bloodType: string;
  allergies: string;
  chronicDiseases: string;
  medications: string;
  disability: string;
  observations: string;
}

export interface CommitmentTermData {
  studentName: string;
  date: string;
  commitments: {
    id: string;
    text: string;
    checked: boolean;
  }[];
  guardianName: string;
  signed: boolean;
}
