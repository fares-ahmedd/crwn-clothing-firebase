import "./FormInput.styles.scss";
function FormInput({ label, id, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" id={id} {...otherProps} />

      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
