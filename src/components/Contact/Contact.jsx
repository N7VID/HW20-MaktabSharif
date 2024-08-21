import React from "react";
import { Link } from "react-router-dom";

export default function Contact({ contact }) {
  return (
    <div className="tablet:col-span-6 col-span-8 flex flex-col desktop:flex-row gap-3 items-center glassCard p-4 rounded-md cursor-default">
      <div>
        <img
          src={contact.imgSrc}
          alt="contactImage"
          className="w-40 rounded-md"
        />
      </div>
      <div className="flex flex-col bg-[#f8feff] gap-2 p-2 rounded-md text-sm">
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
        <div className="flex items-center justify-between gap-2">
          <span>ایمیل</span>
          <span
            className="ltr text-sm overflow-hidden whitespace-nowrap text-ellipsis w-44"
            title={contact.email}
          >
            {contact.email}
          </span>
        </div>
      </div>
      <div className="flex flex-row desktop:flex-col justify-center items-center gap-2">
        <Link to={`${contact.id}`}>
          <img
            src="/eye-open-2.svg"
            alt="eye-icon"
            className="w-7 bg-white hover:bg-[#B2E4FA] transition duration-300 p-[5px] rounded-md cursor-pointer"
          />
        </Link>
        <Link to={`edit/${contact.id}`}>
          <img
            src="/edit.svg"
            alt="edit-icon"
            className="w-7 bg-white hover:bg-[#C7E9B0] transition duration-300 p-[5px] rounded-md cursor-pointer"
          />
        </Link>
        <img
          src="/bin.svg"
          alt="bin-icon"
          className="w-7 bg-white hover:bg-[#FFCCCB] transition duration-300 p-[5px] rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}
