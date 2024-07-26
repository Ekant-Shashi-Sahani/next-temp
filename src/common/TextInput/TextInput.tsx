"use client";

import React from "react";

const baseInputStyles = `relative w-full px-3 py-2 border rounded-md focus:outline-none`;
const normalInputStyles = `${baseInputStyles} bg-white border-gray-300 focus:border-gray-500`;
const errorInputStyles = `${baseInputStyles} bg-white border-red-500 focus:border-red-500`;
const searchInputStyles = `${baseInputStyles} bg-white border-transparent focus:border-transparent`;

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  error?:boolean;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor,error }) => (
  <label htmlFor={htmlFor} className="block font-semibold text-gray-600">
    {children}{error && <span className="text-red-500">*</span>}
  </label>
);

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  isRequired?: boolean;
  variant?: "search" | "normal";
  error?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  helperText,
  isRequired,
  variant = "normal",
  errorMessage,
  ...inputProps
}) => {
  const idStr = React.useMemo(() => {
    const random = Math.random().toString(36).substring(7);
    return `${inputProps.type}-${random}`;
  }, [inputProps.type]);

  const inputClass = error
    ? errorInputStyles
    : variant === "search"
    ? searchInputStyles
    : normalInputStyles;

  return (
    <div className="my-2 w-full">
      <Label htmlFor={idStr} error={error}>
        {label} {isRequired && <span className="text-red-500">*</span>}
      </Label>
      <input {...inputProps} id={idStr} className={inputClass} />
      {helperText && (
        <p className={`text-sm ${error ? "text-red-500" : "text-gray-500"}`}>
          {helperText}
        </p>
      )}
      {error && errorMessage && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export { Label };
export default TextInput;
