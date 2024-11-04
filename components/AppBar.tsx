"use client";

import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export const Appbar = ({
  title,
  connectWallet = true,
}: {
  title: string;
  connectWallet?: boolean;
}) => {
  const router = useRouter();
  const { publicKey, signMessage } = useWallet();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Bad Hack
    const signatures = JSON.parse(localStorage.getItem("signatures") ?? "[]");
    signatures.map((signature: any) => {
      if (signature.key === publicKey?.toBase58()) {
        setIsVerified(true);
      }
    });
  }, [isVerified, setIsVerified, publicKey]);

  const VerifySignature = async () => {
    try {
      if (!publicKey) throw new Error("Wallet not connected!");
      if (!signMessage)
        throw new Error("Wallet does not support message signing!");

      const message = new TextEncoder().encode(
        `Init 0ne wants you to sign in with your Solana account:\n${publicKey.toBase58()}\n\nPlease sign in.`,
      );
      const signature = await signMessage(message);
      const otherSigns = JSON.parse(localStorage.getItem("signatures") ?? "[]");
      localStorage.setItem(
        "signatures",
        JSON.stringify([...otherSigns, { key: publicKey, verify: signature }]),
      );

      if (!ed25519.verify(signature, message, publicKey.toBytes()))
        throw new Error("Message signature invalid!");
      toast.success(`Message Signed Successfully`);
      router.refresh();
    } catch (error: any) {
      toast.error(`Sign Message failed:`);
    }
  };

  return (
    <div className="flex justify-between py-5 xl:mx-20 mx-14">
      <div>
        <h3
          role="button"
          onClick={() => router.push("/")}
          className="p-3 hover:bg-slate-100/10 underline rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </h3>
      </div>
      <div>
        <h3 className="text-3xl underline">{title}</h3>
      </div>
      {connectWallet ? (
        <div className="flex gap-x-2">
          {publicKey && !isVerified && (
            <Button
              onClick={VerifySignature}
              className="py-6"
              variant={"secondary"}
            >
              Verify Signature
            </Button>
          )}
          {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
        </div>
      ) : (
        <div className="invisible flex gap-x-2">Nothing</div>
      )}
    </div>
  );
};
