import { Appbar } from "@/components/AppBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <Appbar title="Contact us" connectWallet={false} />

      <div className="flex md:justify-between justify-center items-center pt-10 flex-wrap px-10 gap-4">
        <Card className="bg-inherit w-72 h-80">
          <CardContent className="p-4">
            <div className="h-60 w-full relative flex items-center justify-center">
              <Image
                width={250}
                height={250}
                alt="X logo"
                src="/X_logo.jpg"
                className="object-contain"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant={"secondary"}>
              <a target="_blank" href="https://x.com/user64bit">
                Follow
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-inherit w-72 h-80">
          <CardContent className="p-4">
            <div className="h-60 w-full relative flex items-center justify-center">
              <Image
                width={250}
                height={250}
                alt="github logo"
                src="/github.png"
                className="object-contain"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant={"secondary"}>
              <a target="_blank" href="https://github.com/user-64bit">
                Follow
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-inherit w-72 h-80">
          <CardContent className="p-4">
            <div className="h-60 w-full relative flex items-center justify-center">
              <Image
                width={250}
                height={250}
                alt="instagram logo"
                src="/instagram.png"
                className="object-contain"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant={"secondary"}>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                Follow
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
