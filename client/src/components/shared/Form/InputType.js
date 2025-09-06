import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
  placeholder = "",
  required = false,
  autoComplete = "off"
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        id={labelFor}
        type={inputType}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputType;


// <InputType
//   labelText="Email"
//   labelFor="forEmail"
//   inputType="email"
//   name="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   placeholder="Enter your email"
// />
