"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

export const Header = () => {
  return (
    <div className="flex justify-start items-center gap-x-4">
      <div role="button" onClick={() => redirect("/")}>
        <Image
          src={"/logo.png"}
          width={60}
          height={60}
          alt="Init 0ne Logo"
          className="object-cover p-3"
        />
      </div>
      <div
        role="button"
        onClick={() => redirect("/our-team")}
        className="py-4 px-5 hover:underline"
      >
        <h1>Our Team</h1>
      </div>
      {/* <div
        role="button"
        onClick={() => redirect("/our-work")}
        className="border py-4 px-5"
      >
        <h1>Our Work</h1>
      </div> */}
      <div
        role="button"
        onClick={() => redirect("/contact-us")}
        className="py-4 px-5 hover:underline"
      >
        <h1>Contact Us</h1>
      </div>
      {/* <div
        role="button"
        onClick={() => redirect("/hire-us")}
        className="border py-4 px-5"
      >
        <h1>Hire Us</h1>
      </div> */}
    </div>
  );
};
