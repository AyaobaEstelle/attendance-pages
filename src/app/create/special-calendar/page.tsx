"use client";
import Sidebar from "@/components/Sidebar";
import styles from "./styles.module.css";
import SpecialCalendarView from "@/app/calendar/special-calendar/page";

const CalendarPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <SpecialCalendarView />
    </div>
  );
};

export default CalendarPage;
