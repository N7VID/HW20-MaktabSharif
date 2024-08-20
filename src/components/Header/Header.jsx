import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthUser } from "../../redux/slices/authSlice";

export default function Header() {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#a9d9e2] w-full py-4 px-12 cursor-default flex justify-between items-center text-[#2C3E50]">
      <div className="flex items-center gap-4">
        <img src="/users.svg" alt="" className="w-7" />
        <h1 className="text-lg font-semibold">
          وب اپلیکیشن مدیریت <span className="text-red-500">مخاطبین</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="font-semibold">{user.fullName}</p>
        <img
          src="/logout.svg"
          alt=""
          className="w-7 cursor-pointer"
          title="Log Out"
          onClick={() => dispatch(logout())}
        />
      </div>
    </div>
  );
}
