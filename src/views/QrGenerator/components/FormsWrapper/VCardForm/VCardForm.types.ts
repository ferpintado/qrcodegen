export type VCardFormProps = {
  onSubmit: (values: VCardFormValues) => void;
};

export type VCardFormValues = {
  firstName: string;
  lastName: string;
  homePhone: string[];
  workPhone: string[];
  email: string[];
};
