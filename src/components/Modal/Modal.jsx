import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { closeModal, selectModalName } from "../../redux/slices/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const fullName = useSelector(selectModalName);
  const handleCloseModalBtn = () => dispatch(closeModal());
  return (
    <div className="w-full h-full overflow-auto bg-[#00000054] z-10 fixed top-0 left-0 flex justify-center cursor-default">
      <div className="bg-[#fefefe] rounded-lg m-auto h-56 w-[310px] tablet:w-96 desktop:w-96 flex text-center flex-col">
        <div className="py-4 flex flex-col justify-center">
          <h1 className="text-2xl font-bold py-6 -mt-5 text-red-600 border-b-2">
            حذف مخاطب
          </h1>
          <p className="text-[18px] pb-7 mt-5">
            {`برای حذف  ${fullName} اطمینان داری؟`}
          </p>
          <div className="flex gap-2 justify-center px-20">
            <Button variant={"secondary"}>حذف</Button>
            <Button variant={"main"} onClick={handleCloseModalBtn}>
              بیخیال
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
