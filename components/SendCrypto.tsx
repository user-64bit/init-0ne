"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";
import { toast } from "sonner";
import { GenerateExplorerLink } from "./GenerateExplorerLink";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const SendCrypto = () => {
  const [signature, setSignature] = useState("");
  const [crypto, setCrypto] = useState("sol");
  const [amount, setAmount] = useState(0.5);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const handleSendCrypto = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!connection || !publicKey) {
      toast.error("Wallet isn't connected... :(");
      return;
    }
    const transaction = new Transaction();
    // Hard coded public key
    const toPublicKey = new PublicKey(
      "EnF96GhoTp1PASkXsif9k5qjR7yabNw351dJe6ToSBB7",
    );

    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: toPublicKey,
      lamports: LAMPORTS_PER_SOL * amount,
    });
    transaction.add(sendSolInstruction);
    // @ts-ignore
    sendTransaction(transaction, connection).then((data) => {
      setSignature(data);
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="border float-end mb-2 mx-16 font-sans"
        >
          Send Crypto & Support us
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/40">
        <DialogHeader>
          <DialogTitle>Support Us</DialogTitle>
        </DialogHeader>
        {signature ? (
          <GenerateExplorerLink transaction={signature} />
        ) : (
          <>
            <div className="grid gap-4 py-4">
              <div className="">
                <Select onValueChange={setCrypto} value={crypto}>
                  <SelectTrigger>
                    <SelectValue placeholder="select crypto currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Crypto Currencies</SelectLabel>
                      {/* <SelectItem value="btc">BTC</SelectItem> */}
                      {/* <SelectItem value="eth">ETH</SelectItem> */}
                      <SelectItem value="sol">SOL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  className="col-span-3"
                  placeholder="i.e 0.5"
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  value={amount}
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant={"secondary"}
                onClick={(e) => handleSendCrypto(e)}
              >
                Send
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
