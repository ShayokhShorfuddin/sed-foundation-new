"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import Facebook from "@/public/social-media/facebook.svg";
import X from "@/public/social-media/x.svg";
import Linkedin from "@/public/social-media/linkedin.svg";
import Youtube from "@/public/social-media/youtube.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { X as XIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { PhoneCall, Location, Email } from "./BottomCard";
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container flex justify-between items-center mt-3">
      {/* For wide screen */}
      <Image src={Logo} alt="SED Logo" className="w-20 sm:w-24" />
      <Navlinks />
      <SocialMedias />

      <Button
        variant={"ghost"}
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
      </Button>

      {/* For mobile screen */}
      {isMenuOpen && (
        <div className="absolute top-16 sm:top-20 lg:top-16 lg z-20 left-0 right-0 bg-white shadow-md p-5 lg:hidden [&_li]:py-1">
          <ul className="space-y-2">
            <div className="block sm:hidden">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item">
                    <AccordionTrigger className="text-left">
                      Programs
                    </AccordionTrigger>

                    <AccordionContent className="text-left mt-4 ml-4">
                      <Link href={"/climate-action"}>Climate Action</Link>
                    </AccordionContent>

                    <AccordionContent className="text-left mt-4 ml-4">
                      <Link href={"/research-publication"}>
                        Research & Publications
                      </Link>
                    </AccordionContent>

                    <AccordionContent className="text-left mt-4 ml-4">
                      <Link href={"/environmental-autumn-school"}>
                        Environmental Autumn School
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link href={"/"}>News & Events</Link>
              </li>
              <li>
                <NavbarDialogButton />
              </li>
            </div>

            <li>
              <div className="flex mt-3">
                <Link href={"https://www.facebook.com/"}>
                  <Image src={Facebook} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://x.com/home"}>
                  <Image src={X} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://www.linkedin.com/"}>
                  <Image src={Linkedin} alt="SED Facebook" className="mr-7" />
                </Link>

                <Link href={"https://www.youtube.com/"}>
                  <Image src={Youtube} alt="SED Facebook" className="mr-7" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export function Navlinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenu className="hidden sm:block text-nowrap">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="mr-4 md:mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
          >
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="mr-4 md:mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
          >
            <Link href={"/"}>About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HoverCard>
            <HoverCardTrigger className="mr-4 md:mr-7 hover:text-sedGreen transition duration-160 ease-in-out">
              Programs
            </HoverCardTrigger>

            <HoverCardContent className="w-fit">
              <div className="z-50">
                <Link href={"/climate-action"}>
                  <p className="py-1 px-3 hover:bg-accent">Climate Action</p>
                </Link>
                <Link href={"/research-publication"}>
                  <p className="py-1 px-3 hover:bg-accent">
                    Research & Publications
                  </p>
                </Link>
                <Link href={"/environmental-autumn-school"}>
                  <p className="py-1 px-3 hover:bg-accent">
                    Environmental Autumn School
                  </p>
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="mr-4 md:mr-7 hover:text-sedGreen transition duration-160 ease-in-out"
          >
            <Link href={"/"}>News & Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavbarDialogButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavbarDialogButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="hover:cursor-pointer">Contact Us</p>
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

export function SocialMedias() {
  return (
    <div className="hidden lg:flex">
      <Link href={"https://www.facebook.com/"}>
        <Image src={Facebook} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://x.com/home"}>
        <Image src={X} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://www.linkedin.com/"}>
        <Image src={Linkedin} alt="SED Facebook" className="mr-6" />
      </Link>

      <Link href={"https://www.youtube.com/"}>
        <Image src={Youtube} alt="SED Facebook" className="mr-6" />
      </Link>
    </div>
  );
}
