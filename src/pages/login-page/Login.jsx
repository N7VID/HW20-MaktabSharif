import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { login, selectAuthError } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (value) => {
    dispatch(login(value))
      .unwrap()
      .then(() => navigate("/contacts"))
      .catch((error) => {
        toast.error(error.message || authError, { rtl: false });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen p-10 desktop:p-0 font-yekan">
      <div className="relative bg-cover bg-center bg-hero-signIn w-[1200px] h-[620px] rounded-xl">
        <Link to={"/"}>
          <img
            src="/back.svg"
            className="w-10 absolute top-3 left-3"
            alt="back-icon"
          />
        </Link>

        <form
          action=""
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col justify-center items-center mx-auto my-24 gap-4 desktop:absolute max-w-[320px] desktop:left-32 tablet:absolute tablet:left-32 bg-white py-10 px-10 rounded-xl cursor-default"
        >
          <div className="text-[#2C3E50]">
            <h1 className="font-bold text-3xl mb-4">مدیریت مخاطبین</h1>
            <p className="font-semibold mb-10 text-center">
              ورود به حساب کاربری
            </p>
          </div>
          <Input
            placeholder={"ایمیل"}
            name={"email"}
            register={register("email")}
            errors={errors}
          />
          <Input
            placeholder={"رمز عبور"}
            type={"password"}
            name={"password"}
            register={register("password")}
            errors={errors}
          />
          <div className="w-28 mt-4">
            <Button variant={"solid"} type={"submit"}>
              ورود
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
