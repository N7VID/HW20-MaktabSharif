export default function Button({ variant, children, ...props }) {
  let variantClasses;
  switch (variant) {
    case "solid":
      variantClasses = "bg-[#FFCCCB] hover:scale-95 transition";

      break;
    case "outline":
      variantClasses =
        "border-4 border-[#FFCCCB] bg-white hover:scale-95 transition";

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
