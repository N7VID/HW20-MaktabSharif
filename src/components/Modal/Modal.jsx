import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  closeModal,
  selectModalId,
  selectModalName,
} from "../../redux/slices/modalSlice";
import { deleteContact, getContacts } from "../../redux/slices/contactsSlice";
import { toast } from "react-toastify";

export default function Modal() {
  const dispatch = useDispatch();
  const id = useSelector(selectModalId);
  const fullName = useSelector(selectModalName);

  const handleCloseModalBtn = () => dispatch(closeModal());

  const handleDeleteBtn = () => {
    try {
      dispatch(deleteContact(id));
      dispatch(closeModal());
      dispatch(getContacts());
      toast.success(`${fullName} با موفقیت حذف شد.`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full h-full overflow-auto bg-[#00000054] z-10 fixed top-0 left-0 flex justify-center cursor-default">
      <div className="bg-[#fefefe] rounded-lg m-auto h-56 w-[310px] tablet:w-96 desktop:w-96 flex text-center flex-col">
        <div className="py-4 flex flex-col justify-center">
          <h1 className="text-2xl font-bold py-6 -mt-5 text-red-600 border-b-2">
            حذف مخاطب
          </h1>
          <p className="desktop:text-lg tablet:text-lg text-base pb-7 mt-5">
            {`برای حذف  ${fullName} اطمینان داری؟`}
          </p>
          <div className="flex gap-2 justify-center px-20">
            <Button variant={"secondary"} onClick={handleDeleteBtn}>
              حذف
            </Button>
            <Button variant={"main"} onClick={handleCloseModalBtn}>
              بیخیال
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
