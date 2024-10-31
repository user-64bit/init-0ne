"use client";

import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const GenerateExplorerLink = ({
  transaction,
}: {
  transaction: string;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-y-2 justify-center items-center h-24">
      {loading ? (
        <>
          <Spinner size="icon" />
          <h4>Generating Explorer link for your Transaction...</h4>
        </>
      ) : (
        <>
          <BadgeCheck className="w-12 h-12 text-green-400" />
          <Button variant={"ghost"} className="">
            <a
              target="_blank"
              href={`https://solscan.io/account/${transaction}`}
              className="flex gap-x-2"
            >
              Check Transaction Status
              <ExternalLink />
            </a>
          </Button>
        </>
      )}
    </div>
  );
};
