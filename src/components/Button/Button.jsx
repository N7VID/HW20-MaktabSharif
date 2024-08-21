export default function Button({ variant, children, ...props }) {
  let variantClasses;
  switch (variant) {
    case "solid":
      variantClasses = "bg-[#FFCCCB]";
      break;
    case "outline":
      variantClasses = "border-4 border-[#FFCCCB] bg-white";
      break;
    case "secondary":
      variantClasses = "bg-[#007BFF] text-white hover:bg-[#0056b3] transition";
      break;
    case "main":
      variantClasses = "bg-[#546E7A] text-white hover:bg-[#37474F] transition";
      break;

    default:
      variantClasses = "border-2 border-black bg-white";
      break;
  }
  return (
    <button
      className={`${variantClasses} py-2 px-2 rounded-md w-full text-lg`}
      {...props}
    >
      {children}
    </button>
  );
}
