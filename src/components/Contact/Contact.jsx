import React from "react";

export default function Contact({ contact }) {
  return (
    <div className="tablet:col-span-6 col-span-8 flex gap-4 items-center glassCard p-4 rounded-md cursor-default">
      <div>
        <img
          src={contact.imgSrc}
          alt="contactImage"
          className="w-48 rounded-md"
        />
      </div>
      <div className="flex flex-col bg-[#f8feff] gap-2 py-2 px-2 rounded-md">
        <div className="flex items-center justify-between gap-2">
          <span>نام و نام خانوادگی</span>
          <span
            className="overflow-hidden whitespace-nowrap text-ellipsis"
            title={contact.fullName}
          >
            {contact.fullName}
          </span>
        </div>
        <div className="flex items-center justify-between gap-10 border-y py-2 border-gray-400">
          <span>شماره تماس</span>
          <span>{contact.phoneNumber}</span>
        </div>
        <div className="flex items-center justify-between gap-10 ">
          <span>ایمیل</span>
          <span
            className="ltr text-sm overflow-hidden whitespace-nowrap text-ellipsis w-44"
            title={contact.email}
          >
            {contact.email}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src="/eye-open-2.svg"
          alt="eye-icon"
          className="w-8 bg-white hover:bg-[#B2E4FA] transition duration-300 p-[6px] rounded-md cursor-pointer"
        />
        <img
          src="/edit.svg"
          alt="edit-icon"
          className="w-8 bg-white hover:bg-[#C7E9B0] transition duration-300 p-[6px] rounded-md cursor-pointer"
        />
        <img
          src="/bin.svg"
          alt="bin-icon"
          className="w-8 bg-white hover:bg-[#FFCCCB] transition duration-300 p-[6px] rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}
