import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchSVG from "@/assets/svg/SearchSVG";
import { Calendar } from "../ui/calendar";
import { Input } from "@/components/ui/input";

const VShareForm = ({
  handleSelectedData,
}: {
  handleSelectedData: Function;
}) => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const handleSearch = () => {
    // Create an object with selected data
    const selectedData = {
      source,
      destination,
      date: date ? format(date, "PPP") : "",
      slot,
      contact,
    };

    // Pass the selected data to the parent component
    handleSelectedData(selectedData);
    console.log(selectedData);
  };

  return (
    <div className="flex md:flex-row flex-col gap-3 m-4 p-2">
      <Select onValueChange={(value) => setSource(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select source" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="VIT">VIT</SelectItem>
            <SelectItem value="Tambaram">Tambaram</SelectItem>
            <SelectItem value="Central">Central</SelectItem>
            <SelectItem value="Airport">Airport</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setDestination(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Destination" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="VIT">VIT</SelectItem>
            <SelectItem value="Tambaram">Tambaram</SelectItem>
            <SelectItem value="Central">Central</SelectItem>
            <SelectItem value="Airport">Airport</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-[240px] justify-start text-left font-normal ${
              !date && "text-muted-foreground"
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Select onValueChange={(value) => setSlot(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Slot" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Array.from({ length: 24 }).map((_, index) => (
              <SelectItem
                key={index}
                value={`${index}:00`}
              >{`${index}:00`}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type="text"
        placeholder="contact"
        onChange={(e) => setContact(e.target.value)}
        className="w-[250px]"
      />
      <Button className="flex gap-2" onClick={handleSearch}>
        Search your travel mate <SearchSVG></SearchSVG>
      </Button>
    </div>
  );
};

export default VShareForm;
