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
        <Tab key="participants" title="Participants">
          <p>Participants go here</p>
        </Tab>

        <Tab key="awardees" title="Awardees">
          <p>Awardees go here</p>
        </Tab>

        <Tab key="judges-guests" title="Judges & guests">
          <p>Judges go here</p>
        </Tab>

        <Tab key="bench-memorial" title="Bench memorial">
          <p>I have no idea what that is lol.</p>
        </Tab>
      </Tabs>
    </section>
  );
}

function ComboSection() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <section className="flex sm:hidden flex-col justify-center items-center">
      <ComboboxDemo onValueChange={setSelectedValue} />

      {selectedValue === "participants" && (
        <p className="mt-5">Participants go here</p>
      )}
      {selectedValue === "awardees" && <p className="mt-5">Awardees go here</p>}
      {selectedValue === "judges-guests" && (
        <p className="mt-5">Judges go here</p>
      )}
      {selectedValue === "bench-memorial" && (
        <p className="mt-5">I have no idea what that is lol.</p>
      )}
    </section>
  );
}

const options = [
  {
    value: "participants",
    label: "Participants",
  },
  {
    value: "awardees",
    label: "Awardees",
  },
  {
    value: "judges-guests",
    label: "Judges & guests",
  },
  {
    value: "bench-memorial",
    label: "Bench memorial",
  },
];

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
            ? options.find((option) => option.value === value)?.label
            : "Select option"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
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
