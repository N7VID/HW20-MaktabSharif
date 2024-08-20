import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function ContactsSinglePage() {
  const { id } = useParams();

  return (
    <div className="bg-hero-main-2 min-h-screen bg-center bg-cover flex flex-col items-center font-yekan">
      <Header>اطلاعات مخاطب</Header>

      <div className="flex-grow flex-col glassCard flex justify-center items-center my-[70px] w-[450px]">
        <div className="glassCard w-64 h-48 mb-12"></div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 bg-white py-2 px-6 rounded-md justify-between w-80">
            <span>نام و نام خانوادگی</span>
            <span>کامبز دیرباز</span>
          </div>
          <div className="flex gap-5 bg-white py-2 px-6 rounded-md justify-between w-80">
            <span>شماره موبایل</span>
            <span>کامبز دیرباز</span>
          </div>
          <div className="flex gap-5 bg-white py-2 px-6 rounded-md justify-between w-80">
            <span>ایمیل</span>
            <span>کامبز دیرباز</span>
          </div>
          <div className="flex gap-5 bg-white py-2 px-6 rounded-md justify-between w-80">
            <span>شغل</span>
            <span>کامبز دیرباز</span>
          </div>
          <div className="flex gap-5 bg-white py-2 px-6 rounded-md justify-between w-80">
            <span>گروه</span>
            <span>کامبز دیرباز</span>
          </div>
        </div>
      </div>
    </div>
  );
}
