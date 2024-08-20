import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { getContacts } from "../../redux/slices/contactsSlice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.users);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center font-yekan relative">
      <Header />
      <div className="w-full min-h-[calc(100vh-60px)] bg-hero-homepage bg-cover bg-center">
        <div className="grid grid-cols-12 mx-auto my-16 max-w-[1200px] overflow-y-scroll max-h-[calc(100vh-190px)] gap-x-6 gap-y-4 py-7 px-4">
          {contacts[0]?.map((item) => (
            <Contact key={item.id} contact={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
