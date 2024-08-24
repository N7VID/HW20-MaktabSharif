import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/input/Input";
import { schema } from "./schema";
import { useDispatch } from "react-redux";
import { postContact } from "../../redux/slices/contactsSlice";
import { toast } from "react-toastify";
import { AppRoutes } from "../../config/routs";

export default function ContactsAddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSubmitForm(value) {
    dispatch(postContact(value));
    navigate(AppRoutes.CONTACTS);
    toast.success("مخاطب با موفقیت اضافه شد.");
  }

  function handleCancelAdd() {
    navigate(AppRoutes.CONTACTS);
  }
  return (
    <div className=" min-h-[calc(100vh-100px)] flex justify-center items-center font-yekan">
      <div className="w-[1100px] h-[540px] bg-hero-signIn bg-cover bg-center rounded-xl relative flex justify-center items-center cursor-default">
        <Link to={AppRoutes.CONTACTS}>
          <img
            src="/back.svg"
            className="w-10 absolute top-3 left-3"
            alt="back-icon"
          />
        </Link>
        <div className="bg-white/90 rounded-xl w-[850px] h-[400px] flex flex-col justify-center items-center gap-8 relative">
          <h1 className="text-xl mt-8 mb-2 font-semibold">ساخت مخاطب جدید</h1>
          <form
            action=""
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4 flex-grow"
          >
            <div className="flex gap-4">
              <Input
                name={"fullName"}
                placeholder={"نام و نام خانوادگی"}
                register={register("fullName")}
                errors={errors}
              />
              <Input
                name={"imgSrc"}
                placeholder={"آدرس تصویر"}
                register={register("imgSrc")}
                errors={errors}
              />
              <Input
                name={"phoneNumber"}
                placeholder={"شماره تماس"}
                register={register("phoneNumber")}
                errors={errors}
              />
            </div>
            <div className="flex gap-4">
              <Input
                name={"email"}
                placeholder={"آدرس ایمیل"}
                register={register("email")}
                errors={errors}
              />
              <Input
                name={"job"}
                placeholder={"شغل یا حوزه فعالیت"}
                register={register("job")}
                errors={errors}
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="relative">نسبت</label>
                <div className="flex flex-col">
                  <select
                    name="relative"
                    id="relative"
                    {...register("relative")}
                    className={`rounded-md w-[245px] py-[5px] px-8 border ${
                      errors["relative"] ? "border-red-500" : "border-[#2C3E50]"
                    }`}
                  >
                    <option value="">انتخاب نسبت</option>
                    <option value="همکار">همکار</option>
                    <option value="خانواده">خانواده</option>
                    <option value="دوست">دوست</option>
                    <option value="فامیل">فامیل</option>
                    <option value="آشنا">آشنا</option>
                  </select>
                  {errors["relative"] && (
                    <span className="text-red-500 text-[12px] font-semibold pt-[6px] cursor-default">
                      {errors["relative"].message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 absolute bottom-8 left-[295px]">
              <div className="w-32">
                <Button type={"submit"} variant={"secondary"}>
                  ساخت مخاطب
                </Button>
              </div>
              <div className="w-32">
                <Button
                  variant={"main"}
                  type={"button"}
                  onClick={handleCancelAdd}
                >
                  انصراف
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
