import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleContact, selectUser } from "../../redux/slices/contactsSlice";

export default function ContactsSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getSingleContact(id));
  }, [dispatch, id]);

  return (
    <div className="bg-hero-main-2 min-h-[calc(100vh-60px)] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center font-yekan cursor-default">
      <div className="flex-grow flex-col glassCard flex justify-center gap-8 items-center my-[40px] w-[430px]">
        <h1 className="text-xl font-bold">اطلاعات مخاطب</h1>
        <div className="w-[375px] relative">
          <img src={user?.imgSrc} alt="user-image" className="rounded-lg" />
          <Link to={"/contacts"}>
            <img
              src="/back.svg"
              className="w-10 absolute top-1 left-1"
              alt="back-icon"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <div className="flex gap-4 bg-white py-2 px-6 rounded-md justify-between w-[380px]">
            <span className="font-semibold min-w-fit">نام و نام خانوادگی</span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {user?.fullName}
            </span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-6 rounded-md justify-between w-[380px]">
            <span className="font-semibold">شماره موبایل</span>
            <span>{user?.phoneNumber}</span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-6 rounded-md justify-between w-[380px]">
            <span className="font-semibold min-w-fit">ایمیل</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-6 rounded-md justify-between w-[380px]">
            <span className="font-semibold">شغل</span>
            <span>{user?.job}</span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-6 rounded-md justify-between w-[380px]">
            <span className="font-semibold">گروه</span>
            <span>{user?.relative}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
