import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthUser } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../config/routs";

export default function Header() {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full py-4 px-12 cursor-default flex mobile:gap-4 desktop:flex-row tablet:flex-row flex-col justify-between items-center text-[#2C3E50] font-yekan">
      <Link to={AppRoutes.CONTACTS}>
        <div className="flex items-center gap-4">
          <img
            src="/users.svg"
            alt="users-icon"
            className="desktop:w-7 tablet:w-7 w-5"
          />
          <h1 className="desktop:text-lg tablet:text-lg text-sm font-semibold">
            وب اپلیکیشن مدیریت <span className="text-blue-500">مخاطبین</span>
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-3">
        <p className="font-semibold text-sm tablet:text-base desktop:text-base">
          {user?.fullName}
        </p>
        <img
          src="/logout.svg"
          alt="logout-icon"
          className="desktop:w-7 tablet:w-7 w-5 cursor-pointer"
          title="Log Out"
          onClick={() => {
            dispatch(logout());
            navigate(AppRoutes.HOME);
          }}
        />
      </div>
    </div>
  );
}
