import React from 'react';

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  isSupriseMe,
  onChangeHandler,
  onSupriseMeHandler,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={onSupriseMeHandler}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Suprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
