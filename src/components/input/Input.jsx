export default function Input({
  placeholder,
  name,
  className,
  errors,
  register,
  label = true,
  type = "text",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{placeholder}</label>}
      <div className="flex flex-col">
        <input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          className={`rounded-md py-2 px-8 border ${
            errors[name] ? "border-red-500" : "border-[#2C3E50]"
          }`}
          {...register}
          {...props}
        />
        {errors[name] && (
          <span className="text-red-500 text-[12px] font-semibold pt-[6px] cursor-default">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
}
