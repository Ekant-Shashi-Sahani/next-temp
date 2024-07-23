import React from "react";

import "./PhoneNumber.css";
import { IPhoneNumberProps } from "../interface";
const PhoneNumber: React.FC<IPhoneNumberProps> = ({
  label,
  value,
  error,
  name,
  onChange,
}) => {

  console.log('value',value)
  return (
    <div className="mx-auto max-w-2xl ">
      {label && (
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2.5">
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {error ? <p className="text-red-700 text-sm"></p> : null}
      </div>
    </div>
  );
};

export default PhoneNumber;
