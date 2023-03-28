export type VCardFormProps = {
  firstName: string;
  lastName: string;
  homePhone: string[];
  workPhone: string[];
  email: string[];
};

export type MultipleField = 'homePhone' | 'workPhone' | 'email';
