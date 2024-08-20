import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";

export default function ContactsPage() {
  return (
    <div className="flex flex-col justify-center items-center font-yekan relative">
      <Header />
      <div className="w-full min-h-[calc(100vh-60px)] bg-hero-homepage bg-cover bg-center">
        <div className="grid grid-cols-12 mx-auto my-16 max-w-[1200px] overflow-y-scroll max-h-[calc(100vh-190px)] gap-x-6 gap-y-4 py-7 px-4">
          {Array.from(Array(9)).map(() => (
            <Contact />
          ))}
        </div>
      </div>
    </div>
  );
}
