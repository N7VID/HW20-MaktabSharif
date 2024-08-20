import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/slices/authSlice";

export default function Header() {
  const user = useSelector(selectAuthUser);

  return (
    <div className="bg-[#a9d9e2] w-full py-4 px-12 cursor-default flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="/users.svg" alt="" className="w-7" />
        <h1 className="text-lg font-semibold">
          وب اپلیکیشن مدیریت <span className="text-red-500">مخاطبین</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold">{JSON.parse(user).fullName}</p>
        <img
          src="/logout.svg"
          alt=""
          className="w-7 cursor-pointer"
          title="Log Out"
        />
      </div>
    </div>
  );
}
