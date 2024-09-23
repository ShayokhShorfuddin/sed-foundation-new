import Image, { StaticImageData } from "next/image";
import Donation from "./_images/donation.svg";

import Bkash from "./_images/bKash.svg";
import CityBank from "./_images/citybanklogo.png";
import DutchBanglaBank from "./_images/dutch-bangla-bank.png";
import Nagad from "./_images/nagad.svg";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

const donationImageAndContent: {
  image: StaticImageData;
  content: ReactNode;
}[] = [
  { image: Bkash, content: <BkashInfo /> },
  { image: CityBank, content: <CityBankInfo /> },
  { image: DutchBanglaBank, content: <DBBLInfo /> },
  { image: Nagad, content: <NagadInfo /> },
];

export default function Details() {
  return (
    <section className="container flex justify-around items-center mt-14 mb-10 px-5 2xl:px-32 flex-wrap">
      <TextsAndsLogo />
      <Image src={Donation} alt="Donation" className="size-96 mt-3 sm:mt-0" />
    </section>
  );
}

function TextsAndsLogo() {
  return (
    <div className="flex flex-col max-w-96">
      <h1 className="text-3xl md:text-4xl font-outfit">
        Planet <span className="text-sedGreen">Earth</span> Needs You
        <span className="text-sedGreen">.</span>
      </h1>

      <p className="mt-3">
        We kindly ask for your generous support to help us achieve our mission
        of creating a safe and healthy environment. You can assist us through
        donations, moral encouragement, providing resources, or by promoting our
        causes. Tap on a donation option below to get started.
      </p>

      <div className="flex flex-wrap justify-between mt-12">
        {donationImageAndContent.map((item, index) => (
          <DialogWrapper
            key={index}
            index={index}
            image={item.image}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

function DialogWrapper({
  index,
  image,
  content,
}: {
  index: number;
  image: StaticImageData;
  content: ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Image
          key={index}
          src={image}
          alt="Donation"
          className="object-scale-down max-w-20 pb-2 hover:border-b border-b-sedGreen"
        />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center">
              <p>Donate</p>
              <Image
                src={image}
                alt="Donation"
                className="object-scale-down w-20"
              />
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>

        {content}

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function BkashInfo() {
  return <p>Bkash Number: 01954098845 (Personal)</p>;
}

function CityBankInfo() {
  return (
    <div className="flex flex-col">
      <p>Account Name: Strategy for Environmental Development Foundation</p>
      <p>Account Number: 3101931931001</p>
      <p>Bank Name: The City Bank Limited</p>
      <p>Branch Name: VIP Road Branch</p>
      <p>City: Dhaka</p>
      <p>Country: Bangladesh</p>
      <p>SWIFT: CIBLBDDH</p>
    </div>
  );
}

function DBBLInfo() {
  return <p>DBBL Mobile Service Rocket Number: 01553657919 (Personal)</p>;
}

function NagadInfo() {
  return <p>Nagad: 01778149680 (Donation)</p>;
}

// To get the accounts info please contact us at donation@sedbd.org, or you can reach us by phone at +880-1778-149680
