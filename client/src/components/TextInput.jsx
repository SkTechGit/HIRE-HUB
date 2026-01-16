import React from "react";

const TextInput = React.forwardRef(
  ({ type, placeholder, styles, label, register, name, error }, ref) => {
    return (
      <div className='flex flex-col mt-2'>
        <p className='text-gray-700 text-sm font-semibold mb-2'>{label}</p>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          className={`rounded-lg border-2 border-gray-200 focus:outline-none focus:border-[#1676CC] focus:ring-1 focus:ring-[#1676CC] text-base px-4 py-2.5 transition-all duration-300 placeholder-gray-400 ${styles} ${
            error ? "border-red-400 focus:border-red-400 focus:ring-red-400" : ""
          }`}
          {...register}
          aria-invalid={error ? "true" : "false"}
        />
        {error && <span className='text-xs text-red-500 mt-1 font-medium'>{error}</span>}
      </div>
    );
  }
);

export default TextInput;
