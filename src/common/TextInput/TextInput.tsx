import React from "react";
import { ITextInputProps } from "../interface";
const TextInput: React.FC<ITextInputProps> = ({
  label,
  value,
  onChange,
  error,

  ...props
}) => {
  return (
    <div className="mx-auto max-w-2xl ">
      {label && (
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2.5">
        <input
          type="text"
          className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
          {...props}
        />
        {error ? <p className="text-red-700 text-sm"></p>:null}

      </div>
    </div>
  );
};

export default TextInput;
