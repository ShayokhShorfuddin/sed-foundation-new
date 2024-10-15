import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function BottomCard() {
  return (
    <section className="flex justify-center items-center mt-24 md:mt-40 mx-5 sm:mx-10">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center p-12 border border-sedGreen rounded-xl text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-outfit leading-snug md:pr-5">
          We Can Protect <span className="text-sedGreen">Nature</span>
          <br />
          Be Part Of The Change<span className="text-sedGreen">.</span>
        </h1>

        <div className="flex flex-col items-center max-w-80 mt-5 md:mt-0">
          <p className="text-sm font-sans">
            Get in touch with us to find out how you can join SED Foundation and
            be a part of a greater good.
          </p>

          <DialogButton />
        </div>
      </div>
    </section>
  );
}

function DialogButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mt-5 w-full" size={"sm"}>
          Contact Us
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Us</AlertDialogTitle>
          <AlertDialogDescription>
            Get in touch with our professional team.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <PhoneCall />
        <Location />
        <Email />

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function Location() {
  return (
    <div className="flex mt-2">
      <MapPin className="mr-2" />

      <a
        href="https://maps.app.goo.gl/HvAgd7TzznZcXjLJ6"
        className="hover:underline text-gray-600 text-sm"
      >
        803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219
      </a>
    </div>
  );
}

export function PhoneCall() {
  return (
    <div className="flex items-center mt-3">
      <Phone className="mr-2" />

      <p className="text-gray-600 text-sm">
        +880-1778-149680
        <br />
        +880-1777-436084
      </p>
    </div>
  );
}

export function Email() {
  return (
    <div className="flex mt-2">
      <Mail className="mr-2" />

      <p className="hover:underline text-gray-600 text-sm">
        <a href="mailto:info@sedbd.org">info@sedbd.org</a>
      </p>
    </div>
  );
}
