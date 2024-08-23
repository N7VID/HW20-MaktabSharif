import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Contact from "../../components/Contact/Contact";
import Modal from "../../components/Modal/Modal";
import { getContacts, searchContact } from "../../redux/slices/contactsSlice";
import { selectModalStatus } from "../../redux/slices/modalSlice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.users);
  const modalStatus = useSelector(selectModalStatus);
  const Navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     dispatch(searchContact(searchInput));
  //   }, 1000);
  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [searchInput, dispatch]);

  useEffect(() => {
    console.log("akbar");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center font-yekan relative">
      <div className="w-full min-h-[calc(100vh-60px)] bg-hero-homepage bg-cover bg-center">
        <div className="flex flex-col items-center">
          <div className="mt-10 -mb-3 justify-between flex desktop:w-[700px] gap-4 desktop:flex-row flex-col">
            <div className="w-[245px]">
              <Button
                variant={"secondary"}
                onClick={() => Navigate("/contacts/add")}
              >
                <div className="flex gap-4 items-center justify-center">
                  ساخت مخاطب جدید{" "}
                  <img
                    src="/add-user-outline-white.svg"
                    alt="add-user-icon"
                    className="w-6"
                  />
                </div>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/search icon.svg"
                alt="search-icon"
                className="w-6 absolute top-2 right-1"
              />
              <input
                placeholder={"جستجو مخاطب"}
                name={"Search"}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="rounded-md py-2 px-8 border border-[#2C3E50]"
              />
            </div>
          </div>
          {modalStatus && <Modal />}
          <div className="grid grid-cols-12 mx-auto my-6 max-w-[1200px] overflow-y-auto gap-x-5 gap-y-4 py-6 px-10 max-h-[calc(100vh-190px)]">
            {contacts?.map((item) => (
              <Contact key={item.id} contact={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
