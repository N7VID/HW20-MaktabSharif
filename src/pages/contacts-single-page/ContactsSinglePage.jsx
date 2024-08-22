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
    <div className="bg-hero-homepage min-h-[calc(100vh-60px)] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center font-yekan cursor-default">
      <div className="flex-col glassCard flex justify-center gap-6 items-center pt-5 pb-7 my-[20px] w-[300px] tablet:w-[400px] desktop:w-[400px]">
        <h1 className="text-xl font-bold">اطلاعات مخاطب</h1>
        <div className="w-[250px] desktop:w-[360px] tablet:w-[360px] relative">
          <img src={user?.imgSrc} alt="user-image" className="rounded-lg" />
          <Link to={"/contacts"}>
            <img
              src="/back.svg"
              className="w-7 desktop:w-9 tablet:w-9 absolute top-1 left-1"
              alt="back-icon"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm desktop:text-base tablet:text-base">
          <div className="flex gap-4 bg-white py-2 px-3 tablet:px-6 desktop:px-6 rounded-md justify-between w-[250px] tablet:w-[360px] desktop:w-[340px]">
            <span className="font-semibold min-w-fit">نام و نام خانوادگی</span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {user?.fullName}
            </span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-3 tablet:px-6 desktop:px-6 rounded-md justify-between w-[250px] tablet:w-[360px] desktop:w-[340px]">
            <span className="font-semibold">شماره موبایل</span>
            <span>{user?.phoneNumber}</span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-3 tablet:px-6 desktop:px-6 rounded-md justify-between w-[250px] tablet:w-[360px] desktop:w-[340px]">
            <span className="font-semibold min-w-fit">ایمیل</span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis ltr">
              {user?.email}
            </span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-3 tablet:px-6 desktop:px-6 rounded-md justify-between w-[250px] tablet:w-[360px] desktop:w-[340px]">
            <span className="font-semibold">شغل</span>
            <span>{user?.job}</span>
          </div>
          <div className="flex gap-4 bg-white py-2 px-3 tablet:px-6 desktop:px-6 rounded-md justify-between w-[250px] tablet:w-[360px] desktop:w-[340px]">
            <span className="font-semibold">گروه</span>
            <span>{user?.relative}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
