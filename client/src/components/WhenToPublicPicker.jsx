import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { Input } from "@material-tailwind/react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const WhenToPublicPicker = ({ selectedDate, setSelectedDate }) => {
  const [isOpen, setOpen] = useState(false);

  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    console.log(format(date, "dd/MM/yyyy"));
    setSelectedDate(date);
  };

  const hideOnClickOutside = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-fit relative">
        <Input
          variant="outlined"
          label="Published Date"
          placeholder="Published Date"
          value={format(selectedDate || new Date(), "dd/MM/yyyy")}
          onChange={(e) => {
            handleDateChange(e.target.value);
          }}
          onClick={() => setOpen(true)}
        />
        {isOpen && (
          <div ref={calendarRef}>
            <Calendar
              date={selectedDate || new Date()}
              onChange={handleDateChange}
              className="z-[999] border-[1px] rounded-lg border-black/30 absolute -top-[900%]"
              onRangeFocusChange={() => setOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
