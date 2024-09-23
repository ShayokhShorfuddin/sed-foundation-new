import Image from "next/image";
import Donation from "./_images/donation.svg";

import Bkash from "./_images/bKash.svg";
import CityBank from "./_images/citybanklogo.png";
import DutchBanglaBank from "./_images/dutch-bangla-bank.png";
import Nagad from "./_images/nagad.svg";

export default function Details() {
  return (
    <section className="container flex justify-around items-center mt-14 mb-10 px-5 2xl:px-32 flex-wrap">
      <TextsAndsLogo />
      <Image src={Donation} alt="Donation" className="size-96" />
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
        <Image src={Bkash} alt="Bkash" className="object-scale-down max-w-20" />

        <Image
          src={CityBank}
          alt="City Bank"
          className="object-scale-down max-w-20"
        />

        <Image
          src={DutchBanglaBank}
          alt="Dutch Bangla Bank"
          className="object-scale-down max-w-20"
        />

        <Image src={Nagad} alt="Nagad" className="object-scale-down max-w-20" />
      </div>
    </div>
  );
}

// Please give us your enormous support to fulfill our objective and make the environment safe and healthy.

// You can support us by either by donation, moral support, provide resources or shouting out our causes.

// You can send your donation through,

// 	Bank Transfer

// Bank Account Information
// Account Name: Strategy for Environmental Development Foundation
// Account Number: 3101931931001
// Bank Name: The City Bank Limited
// Branch Name: VIP Road Branch
// City: Dhaka
// Country: Bangladesh
// SWIFT: CIBLBDDH

// 	Mobile Banking
// Bkash Number: 01954098845 (Personal)
// DBBL Mobile Service Rocket Number: 01553657919 (Personal)
// Nagad: 01778149680 (Donation)

// To get the accounts info please contact us at donation@sedbd.org, or you can reach us by phone at +880-1778-149680
