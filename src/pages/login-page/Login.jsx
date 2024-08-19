import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen p-10 desktop:p-0">
      <div className="relative bg-cover bg-center bg-hero-signIn w-[1200px] h-[620px] rounded-xl">
        <Link to={"/"}>
          <img
            src="/back.svg"
            className="w-10 absolute top-3 left-3"
            alt="back-icon"
          />
        </Link>
      </div>
    </div>
  );
}
