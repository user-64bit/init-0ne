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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SendCrypto() {
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
        <div className="grid gap-4 py-4">
          <div className="">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="select crypto currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Crypto Currencies</SelectLabel>
                  <SelectItem value="btc">BTC</SelectItem>
                  <SelectItem value="eth">ETH</SelectItem>
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant={"secondary"}>Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
