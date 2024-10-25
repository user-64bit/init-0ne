import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-start items-center gap-x-4">
      <div role="button">
        <Image
          src={"/logo.png"}
          width={60}
          height={60}
          alt="Athena"
          className="object-cover"
        />
      </div>
      <div role="button" className="border py-4 px-5">
        <h1>Learn</h1>
      </div>
      <div role="button" className="border py-4 px-5">
        <h1>Join</h1>
      </div>
      <div role="button" className="border py-4 px-5">
        <h1>Build</h1>
      </div>
      <div role="button" className="border py-4 px-5">
        <h1>Contact</h1>
      </div>
    </div>
  );
};
