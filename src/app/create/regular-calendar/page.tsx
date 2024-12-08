"use client";
import Sidebar from "@/components/Sidebar";
import styles from "./styles.module.css";
import RegularCalendarView from "@/app/calendar/regular-calendar/page";

const CalendarPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <RegularCalendarView />
    </div>
  );
};

export default CalendarPage;
