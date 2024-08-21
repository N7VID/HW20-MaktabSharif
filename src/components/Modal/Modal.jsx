import Button from "../Button/Button";

export default function Modal() {
  return (
    <div className="w-full h-full overflow-auto bg-[#00000054] z-10 fixed top-0 left-0 flex justify-center cursor-default">
      <div className="bg-[#fefefe] rounded-lg m-auto h-56 w-[310px] desktop:w-96 flex text-center flex-col">
        <div className="py-4 flex flex-col justify-center">
          <h1 className="text-[30px] font-bold py-4 -mt-5 text-red-600 border-b-2">
            توجه!
          </h1>
          <p className="text-[18px] font-semibold pb-7 mt-5">
            برای حذف این مخاطب اطمینان دارید؟
          </p>
          <div className="flex gap-2 justify-center px-20">
            <Button variant={"secondary"}>حذف</Button>
            <Button variant={"main"}>بیخیال</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
