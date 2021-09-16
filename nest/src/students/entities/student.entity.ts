export class Student {
  id: string;
  name: string;
  status: StudentStatus;
}

export enum StudentStatus {
  IN_REVIEW = 'IN_REVIEW',
  CREATED = 'CREATED',
  DELETED = 'DELETED',
}
