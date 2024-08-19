import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-hero-homepage bg-center bg-cover cursor-default font-yekan">
      <div className="flex flex-col gap-14">
        <h1 className="flex justify-center items-center font-bold text-5xl text-[#2C3E50]">
          وب اپلیکیشن مدیریت مخاطبین
        </h1>
        <p className="text-center text-lg text-[#2C3E50] font-semibold leading-8">
          مدیریت تماس‌ها و اطلاعات دوستان و همکاران خود را به سادگی انجام دهید.
          <br />
          همه چیز در یک جا، همیشه در دسترس.
        </p>
        <div className="flex gap-5 justify-around px-32">
          <Button variant={"outline"}>ثبت نام</Button>
          <Button variant={"solid"} onClick={() => navigate("/login")}>
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
}
