import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthUser } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-full py-4 px-12 cursor-default flex justify-between items-center text-[#2C3E50]">
      <Link to={"/contacts"}>
        <div className="flex items-center gap-4">
          <img src="/users.svg" alt="users-icon" className="w-7" />
          <h1 className="text-lg font-semibold">
            وب اپلیکیشن مدیریت <span className="text-blue-500">مخاطبین</span>
          </h1>
        </div>
      </Link>
      <h2 className="text-xl font-bold">{children}</h2>
      <div className="flex items-center justify-center gap-3">
        <p className="font-semibold">{user.fullName}</p>
        <img
          src="/logout.svg"
          alt="logout-icon"
          className="w-7 cursor-pointer"
          title="Log Out"
          onClick={() => dispatch(logout())}
        />
      </div>
    </div>
  );
}
