export type WifiFormValues = {
  name: string;
  password: string;
  encryption: string;
};

export type WifiFormProps = {
  onSubmit: (values: WifiFormValues) => void;
};
