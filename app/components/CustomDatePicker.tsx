"use client";

import { useState, useRef, useEffect } from "react";
import {
  CalendarBlank,
  CaretLeft,
  CaretRight,
  XCircle,
  Sparkle,
} from "@phosphor-icons/react";

interface CustomDatePickerProps {
  value: string; // "YYYY-MM-DD"
  onChange: (dateStr: string) => void;
  placeholder?: string;
  minDate?: string;
  name?: string;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const [y, m, d] = dateStr.split("-").map(Number);
    if (!y || !m || !d) return dateStr;
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function toDateString(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export function CustomDatePicker({
  value,
  onChange,
  placeholder = "Select target date",
  minDate,
  name = "date",
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse current value or fallback to today
  const today = new Date();
  const initialDate = value
    ? (() => {
        const [y, m, d] = value.split("-").map(Number);
        return new Date(y, (m || 1) - 1, d || 1);
      })()
    : today;

  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => {
    if (!isOpen && value) {
      const [y, m] = value.split("-").map(Number);
      if (y && m) {
        setViewYear(y);
        setViewMonth(m - 1);
      }
    }
    setIsOpen((prev) => !prev);
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSelectDay = (day: number, offsetMonth = 0) => {
    let targetYear = viewYear;
    let targetMonth = viewMonth + offsetMonth;

    if (targetMonth < 0) {
      targetMonth = 11;
      targetYear -= 1;
    } else if (targetMonth > 11) {
      targetMonth = 0;
      targetYear += 1;
    }

    const dateStr = toDateString(targetYear, targetMonth, day);
    onChange(dateStr);
    setIsOpen(false);
  };

  const handleSelectToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const tYear = today.getFullYear();
    const tMonth = today.getMonth();
    const tDay = today.getDate();
    setViewYear(tYear);
    setViewMonth(tMonth);
    onChange(toDateString(tYear, tMonth, tDay));
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  // Calendar Grid Calculation
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const prevMonthDays: number[] = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevMonthDays.push(daysInPrevMonth - i);
  }

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const totalGridCells = prevMonthDays.length + currentMonthDays.length;
  const remainingCells = totalGridCells % 7 === 0 ? 0 : 7 - (totalGridCells % 7);
  const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1);

  const todayStr = toDateString(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input for standard forms */}
      <input type="hidden" name={name} value={value} />

      {/* Styled Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label="Select date"
        className={`group flex w-full items-center justify-between rounded-2xl border bg-cream/50 px-4 py-3 text-sm text-ink transition-all cursor-pointer ${
          isOpen
            ? "border-pink bg-white ring-2 ring-pink/20 shadow-sm"
            : "border-ink/10 hover:border-pink/50 hover:bg-white focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink/10 text-pink group-hover:bg-pink group-hover:text-white transition-colors">
            <CalendarBlank weight="bold" className="h-4 w-4" />
          </div>
          <span
            className={`truncate font-medium ${
              value ? "text-ink font-semibold" : "text-ink-soft/50"
            }`}
          >
            {value ? formatDisplayDate(value) : placeholder}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {value && (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              className="text-ink-soft/40 hover:text-pink transition-colors p-0.5 rounded-full"
              title="Clear date"
            >
              <XCircle weight="fill" className="h-4 w-4" />
            </span>
          )}
        </div>
      </button>

      {/* Custom Candy & More Calendar Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 sm:right-auto top-full z-50 mt-2 w-full sm:w-80 rounded-[1.75rem] border border-ink/10 bg-white p-4 shadow-[0_20px_50px_-15px_rgba(28,58,69,0.3)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          {/* Header: Month & Year Navigator */}
          <div className="flex items-center justify-between pb-3 border-b border-ink/5 px-1">
            <div className="flex items-center gap-1.5">
              <Sparkle weight="fill" className="h-3.5 w-3.5 text-pink" />
              <span className="font-display text-sm font-bold text-ink">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                aria-label="Previous month"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-ink hover:bg-pink hover:text-white transition-colors active:scale-95 cursor-pointer"
              >
                <CaretLeft weight="bold" className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-ink hover:bg-pink hover:text-white transition-colors active:scale-95 cursor-pointer"
              >
                <CaretRight weight="bold" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Days of week row */}
          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {DAYS_OF_WEEK.map((d) => (
              <span
                key={d}
                className="text-[11px] font-bold uppercase tracking-wider text-ink-soft/60"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="mt-1.5 grid grid-cols-7 gap-1">
            {/* Previous Month Days */}
            {prevMonthDays.map((day) => (
              <button
                key={`prev-${day}`}
                type="button"
                onClick={() => handleSelectDay(day, -1)}
                className="flex h-8 w-8 mx-auto items-center justify-center rounded-xl text-xs text-ink-soft/30 hover:bg-cream/80 hover:text-ink-soft transition-colors cursor-pointer"
              >
                {day}
              </button>
            ))}

            {/* Current Month Days */}
            {currentMonthDays.map((day) => {
              const currentDayStr = toDateString(viewYear, viewMonth, day);
              const isSelected = value === currentDayStr;
              const isToday = todayStr === currentDayStr;
              const isPast = minDate ? currentDayStr < minDate : false;

              return (
                <button
                  key={`curr-${day}`}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDay(day, 0)}
                  className={`flex h-8 w-8 mx-auto items-center justify-center rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-pink text-white font-bold shadow-md shadow-pink/30 scale-105"
                      : isToday
                      ? "border border-pink/60 bg-pink-light/30 text-pink font-bold hover:bg-pink hover:text-white"
                      : isPast
                      ? "text-ink-soft/30 cursor-not-allowed"
                      : "text-ink hover:bg-pink-light/40 hover:text-pink active:scale-95"
                  }`}
                >
                  {day}
                </button>
              );
            })}

            {/* Next Month Days */}
            {nextMonthDays.map((day) => (
              <button
                key={`next-${day}`}
                type="button"
                onClick={() => handleSelectDay(day, 1)}
                className="flex h-8 w-8 mx-auto items-center justify-center rounded-xl text-xs text-ink-soft/30 hover:bg-cream/80 hover:text-ink-soft transition-colors cursor-pointer"
              >
                {day}
              </button>
            ))}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-3 pt-2.5 border-t border-ink/5 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleClear}
              className="text-ink-soft hover:text-pink font-semibold transition-colors cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleSelectToday}
              className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1 font-semibold text-ink hover:bg-pink hover:text-white transition-colors cursor-pointer"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
