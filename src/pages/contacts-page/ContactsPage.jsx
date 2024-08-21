import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Contact from "../../components/Contact/Contact";
import { getContacts } from "../../redux/slices/contactsSlice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.users);
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center font-yekan relative">
      <div className="w-full min-h-[calc(100vh-60px)] bg-hero-homepage bg-cover bg-center">
        <div className="flex flex-col items-center">
          <div className="w-60 mt-10 -mb-6">
            <Button
              variant={"secondary"}
              onClick={() => Navigate("/contacts/add")}
            >
              <div className="flex gap-4 items-center justify-center">
                ساخت مخاطب جدید{" "}
                <img src="/add-user.svg" alt="add-user-icon" className="w-6" />
              </div>
            </Button>
          </div>
          <div className="grid grid-cols-12 mx-auto my-6 max-w-[1200px] overflow-y-scroll max-h-[calc(100vh-190px)] gap-x-6 gap-y-4 py-7 px-4">
            {contacts?.map((item) => (
              <Contact key={item.id} contact={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
