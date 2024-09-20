"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, Tab } from "@nextui-org/tabs";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Participants = () => <p>Participants go here</p>;
const ResidentialInstructors = () => <p>Instructors go here</p>;
const SpeakersAndGuests = () => <p>Speakers and guests go here</p>;
const Organizers = () => <p>Organizers go here</p>;
const Gallery = () => <p>Gallery go here</p>;

const tabOptions = [
  {
    key: "participants",
    title: "Participants",
    content: <Participants />,
  },
  {
    key: "residential-instructors",
    title: "Residential instructors",
    content: <ResidentialInstructors />,
  },
  {
    key: "speakers-and-guests",
    title: "Speakers and guests",
    content: <SpeakersAndGuests />,
  },
  {
    key: "organizers",
    title: "Organizers",
    content: <Organizers />,
  },
  {
    key: "gallery",
    title: "Gallery",
    content: <Gallery />,
  },
];

const comboOptions = [
  { value: "participants", label: "Participants", component: <Participants /> },
  {
    value: "residential-instructors",
    label: "Residential instructors",
    component: <ResidentialInstructors />,
  },
  {
    value: "speakers-and-guests",
    label: "Speakers and guests",
    component: <SpeakersAndGuests />,
  },
  { value: "organizers", label: "Organizers", component: <Organizers /> },
  { value: "gallery", label: "Gallery", component: <Gallery /> },
];

export default function Info() {
  return (
    <section className="container mb-20">
      <TabSection />
      <ComboSection />
    </section>
  );
}

function TabSection() {
  return (
    <section className="hidden sm:flex flex-col justify-center items-center">
      <Tabs aria-label="Options" size="md">
        {tabOptions.map((option) => (
          <Tab key={option.key} title={option.title}>
            {option.content}
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}

function ComboSection() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <section className="flex sm:hidden flex-col justify-center items-center">
      <ComboboxDemo onValueChange={setSelectedValue} />

      {selectedValue && (
        <div className="mt-5">
          {
            comboOptions.find((option) => option.value === selectedValue)
              ?.component
          }
        </div>
      )}
    </section>
  );
}

function ComboboxDemo({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[200px] justify-between mt-5"
        >
          {value
            ? comboOptions.find((option) => option.value === value)?.label
            : "Select option"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {comboOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onValueChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
