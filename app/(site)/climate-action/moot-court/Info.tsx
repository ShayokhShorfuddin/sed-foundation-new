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
const Awardees = () => <p>Awardees go here</p>;
const JudgesGuests = () => <p>Judges go here</p>;
const BenchMemorial = () => <p>I have no idea what that is lol.</p>;

const tabOptions = [
  {
    key: "participants",
    title: "Participants",
    content: <Participants />,
  },
  {
    key: "awardees",
    title: "Awardees",
    content: <Awardees />,
  },
  {
    key: "judges-guests",
    title: "Judges & guests",
    content: <JudgesGuests />,
  },
  {
    key: "bench-memorial",
    title: "Bench memorial",
    content: <BenchMemorial />,
  },
];

const comboOptions = [
  { value: "participants", label: "Participants", component: <Participants /> },
  { value: "awardees", label: "Awardees", component: <Awardees /> },
  {
    value: "judges-guests",
    label: "Judges & guests",
    component: <JudgesGuests />,
  },
  {
    value: "bench-memorial",
    label: "Bench memorial",
    component: <BenchMemorial />,
  },
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
          className="w-full max-w-[200px] justify-between"
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
