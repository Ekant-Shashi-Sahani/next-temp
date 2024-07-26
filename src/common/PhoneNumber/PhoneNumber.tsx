import React from "react";
import { IPhoneNumberProps } from "../interface";
import "./PhoneNumber.css";

const PhoneNumber: React.FC<IPhoneNumberProps> = ({
  label,
  value,
  error,
  name,
  onChange,
  errorMessage,
}) => {
  console.log("value", value);

  return (
    <div className="mx-auto max-w-2xl">
      {label && (
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2.5">
        <input
          type="tel" 
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-md border text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
            error ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-600"
          } sm:text-sm sm:leading-6`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorMessage ? `${name}-error` : undefined}
        />
        {error && errorMessage && (
          <p id={`${name}-error`} className="text-red-500 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PhoneNumber;
