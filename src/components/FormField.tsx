import "../styles/FormField.css";

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
}

export default function FormField({ name, type, placeholder }: FormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{placeholder}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={5}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}
