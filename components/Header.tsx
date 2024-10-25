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
          alt="Athena"
          className="object-cover"
        />
      </div>
      <div
        role="button"
        onClick={() => redirect("/learn")}
        className="border py-4 px-5"
      >
        <h1>Learn</h1>
      </div>
      <div
        role="button"
        onClick={() => redirect("/join")}
        className="border py-4 px-5"
      >
        <h1>Join</h1>
      </div>
      <div
        role="button"
        onClick={() => redirect("/build")}
        className="border py-4 px-5"
      >
        <h1>Build</h1>
      </div>
      <div
        role="button"
        onClick={() => redirect("/contact")}
        className="border py-4 px-5"
      >
        <h1>Contact</h1>
      </div>
    </div>
  );
};
