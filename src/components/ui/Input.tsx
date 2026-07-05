interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, ...props }: FormInputProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <label>{label}</label>

      <input
        {...props}
        className="h-12 px-4 py-2 outline-none bg-white text-black font-sans"
      />

      {error && (
        <p className="absolute top-full text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
