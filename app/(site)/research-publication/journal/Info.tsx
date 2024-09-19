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

const tabOptions = [
  {
    key: "editorial-board",
    title: "Editorial Board",
    content: <EditorialBoard />,
  },
  {
    key: "submission-guideline",
    title: "Submission Guideline",
    content: <SubmissionGuideline />,
  },
  { key: "archive", title: "Archive", content: <Archive /> },
  { key: "call-for-paper", title: "Call for paper", content: <CallForPaper /> },
];

const comboOptions = [
  { value: "archive", label: "Archive", component: <Archive /> },
  {
    value: "editorial-board",
    label: "Editorial Board",
    component: <EditorialBoard />,
  },
  {
    value: "call-for-paper",
    label: "Call for paper",
    component: <CallForPaper />,
  },
  {
    value: "submission-guideline",
    label: "Submission Guideline",
    component: <SubmissionGuideline />,
  },
];

function EditorialBoard() {
  return <p>Editors go here</p>;
}

function SubmissionGuideline() {
  return <p>Submission stuffs go here</p>;
}

function Archive() {
  return <p>Archive goes here</p>;
}

function CallForPaper() {
  return <p>Calling for papers lol</p>;
}

function TabSection() {
  return (
    <section className="hidden sm:flex flex-col justify-center items-center mt-10">
      <Tabs aria-label="Options" size="md">
        {tabOptions.map(({ key, title, content }) => (
          <Tab key={key} title={title}>
            {content}
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
