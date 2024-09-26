"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, Tab } from "@nextui-org/tabs";

import Archive from "./Archive";

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

interface TabOption {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface ComboOption {
  value: string;
  label: string;
  component: React.ReactNode;
}

const tabOptions: TabOption[] = [
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

const comboOptions: ComboOption[] = [
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

export default function Info() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("editorial-board");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabOptions.some((option) => option.key === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    router.push(`?tab=${key}`, { scroll: false });
  };

  return (
    <section className="container mb-20">
      <TabSection activeTab={activeTab} onTabChange={handleTabChange} />
      <ComboSection activeTab={activeTab} onTabChange={handleTabChange} />
    </section>
  );
}

function EditorialBoard() {
  return <p>Editors go here</p>;
}

function SubmissionGuideline() {
  return <p>Submission stuffs go here</p>;
}

function CallForPaper() {
  return <p>Calling for papers lol</p>;
}

interface TabSectionProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

function TabSection({ activeTab, onTabChange }: TabSectionProps) {
  return (
    <section className="hidden sm:flex flex-col justify-center items-center mt-10">
      <Tabs
        aria-label="Options"
        size="md"
        selectedKey={activeTab}
        onSelectionChange={(key) => onTabChange(key as string)}
      >
        {tabOptions.map(({ key, title, content }) => (
          <Tab key={key} title={title}>
            {content}
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}

interface ComboSectionProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

function ComboSection({ activeTab, onTabChange }: ComboSectionProps) {
  return (
    <section className="flex sm:hidden flex-col justify-center items-center">
      <ComboboxDemo value={activeTab} onValueChange={onTabChange} />

      {activeTab && (
        <div className="mt-5">
          {comboOptions.find((option) => option.value === activeTab)?.component}
        </div>
      )}
    </section>
  );
}

interface ComboboxDemoProps {
  value: string;
  onValueChange: (value: string) => void;
}

function ComboboxDemo({ value, onValueChange }: ComboboxDemoProps) {
  const [open, setOpen] = useState(false);

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
