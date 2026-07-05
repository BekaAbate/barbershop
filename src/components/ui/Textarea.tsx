interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, ...props }: TextareaProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <label>{label}</label>

      <textarea
        {...props}
        className="px-4 py-2 outline-none bg-white text-black font-sans resize-y min-h-28"
      />

      {error && (
        <p className="absolute top-full text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
