/* eslint-disable react/prop-types */

const Checkbox = ({
  register,
  errors,
  type,
  name,
  id,
  rules,
  checkboxText,
}) => {
  const checkbox = [
    { id: "checkList1", checkboxText: "item1" },
    { id: "checkList2", checkboxText: "item2" },
    {
      id: "checkList3",
      checkboxText: "item3",
      rules: {
        required: {
          value: true,
          message: "至少勾選一項",
        },
      },
    },
  ];
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
      {errors.like && id === `checkList${checkbox.length}` && (
        <div className="invalid-feedback">{errors?.like?.message}</div>
      )}
    </div>
  );
};

export default Checkbox;
