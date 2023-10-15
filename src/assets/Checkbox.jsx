/* eslint-disable react/prop-types */

const Checkbox = ({
  register,
  errors,
  type,
  name,
  id,
  rules,
  checkboxText,
  checkboxLen,
}) => {
  return (
    <div className="form-check">
      <input
        type={type}
        name={name}
        id={id}
        className={`form-check-input ${errors[name] && "is-invalid"}`}
        {...register(name, rules)}
        value={checkboxText}
      />
      <label htmlFor={id} className="form-check-label">
        {checkboxText}
      </label>
      {errors.like && id === `checkList${checkboxLen}` && (
        <div className="invalid-feedback">{errors?.like?.message}</div>
      )}
    </div>
  );
};

export default Checkbox;
