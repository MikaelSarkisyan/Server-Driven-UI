export type GeneratorProps = {
  schema: SchemaType[];
};

export type ComponentType = {
  [key: string]: (props: SchemaType) => object;
};
export type SchemaType = {
  label?: string;
  name?: string;
  fieldType: string;
  text?: string;
  multiple?: boolean;
  options?: string[];
  placeholder?: string;
  required?: string;
  minLength?: number;
};

export type FieldType = {
  fieldData: SchemaType;
};
