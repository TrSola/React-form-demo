/* eslint-disable react/prop-types */
const Input = ({ register, errors, id, labelText, type, rules }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        {...register(id, rules)}
        className={`form-control ${errors[id] && "is-invalid"}`}
      />

      {errors[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </div>
  );
};

export default Input;
