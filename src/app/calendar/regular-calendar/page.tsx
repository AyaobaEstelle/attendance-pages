"use client";

import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./styles.module.css";
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import RegularAttendanceForm from "@/components/RegularAttendanceForm/page";
import FilterModal from "@/components/FilterModal";

const RegularCalendarView = forwardRef((props, ref) => {
  const calendarRef = useRef<FullCalendar>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [shouldOpenMoreSettingsModal, setShouldOpenMoreSettingsModal] =
    useState(false);
  const [viewBy, setViewBy] = useState("month");

  useImperativeHandle(ref, () => ({
    getApi: () => calendarRef.current && calendarRef.current.getApi(),
  }));

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  const handleViewChange = (view: string) => {
    setViewBy(view);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  useLayoutEffect(() => {
    const searchButton = document.querySelector(".fc-searchButton-button");
    if (searchButton) {
      searchButton.innerHTML = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2227 20C16.1932 20 20.2227 15.9706 20.2227 11C20.2227 6.02944 16.1932 2 11.2227 2C6.25209 2 2.22266 6.02944 2.22266 11C2.22266 15.9706 6.25209 20 11.2227 20Z" stroke="#6B6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.1531 20.6898C19.6831 22.2898 20.8931 22.4498 21.8231 21.0498C22.6731 19.7698 22.1131 18.7198 20.5731 18.7198C19.4331 18.7098 18.7931 19.5998 19.1531 20.6898Z" stroke="#6B6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    }
    const filterButton = document.querySelector(".fc-filterButton-button");
    if (filterButton) {
      filterButton.innerHTML = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.4249 4.01175L25.4309 4.02047L25.4371 4.02906C26.2226 5.11051 26.6674 6.56843 26.6674 8.41335V19.5867C26.6674 21.8366 26.0002 23.5257 24.8744 24.6515C23.7487 25.7773 22.0595 26.4445 19.8096 26.4445H8.63631C8.39777 26.4445 8.15465 26.4326 7.90203 26.4193C6.39993 26.3208 5.18575 25.8974 4.25455 25.216L4.24472 25.2088L4.23471 25.2019C3.76326 24.8764 3.34664 24.4597 3.02111 23.9883L3.01509 23.9796L3.00885 23.971C2.22337 22.8895 1.77854 21.4316 1.77854 19.5867V8.41335C1.77854 6.28627 2.37602 4.66024 3.38865 3.54154C4.39795 2.42652 5.90404 1.72196 7.90644 1.59376L7.9246 1.5926L7.9427 1.59069C8.16298 1.5675 8.3985 1.55558 8.63631 1.55558H19.8096C21.6546 1.55558 23.1125 2.00041 24.1939 2.78589L24.2025 2.79212L24.2113 2.79815C24.6827 3.12368 25.0993 3.5403 25.4249 4.01175ZM20.1185 12.2925L20.1389 12.2745L20.1582 12.2552C20.4231 11.9903 20.6522 11.6347 20.8158 11.2738C20.9786 10.9149 21.1119 10.4734 21.1119 10.0267V8.48002C21.1119 7.21577 20.0872 6.19113 18.823 6.19113H15.2496C14.6648 6.19113 14.1933 6.51542 13.9234 6.92029L13.9158 6.93162L13.9086 6.94319L13.8612 7.01921C13.5987 6.54578 13.0985 6.20446 12.4763 6.20446H9.62298C8.33183 6.20446 7.33409 7.25644 7.33409 8.56002V10.16C7.33409 10.5418 7.45178 10.9331 7.59492 11.253C7.73987 11.577 7.94996 11.9152 8.21411 12.1815L8.8566 12.8502C9.198 13.2161 9.66173 13.3758 10.1118 13.3454C10.065 13.7955 10.2067 14.2574 10.5322 14.6055L10.8265 14.9243C10.8995 15.0198 10.9901 15.1743 11.063 15.3561C11.1428 15.5547 11.1741 15.7181 11.1741 15.8134V19.5067C11.1741 21.3721 13.2337 22.3491 14.6901 21.4496L14.6901 21.4497L14.6995 21.4437L15.6818 20.8198C16.0353 20.6001 16.2852 20.2598 16.4419 19.9579C16.602 19.6495 16.7252 19.2653 16.7252 18.88V15.88C16.7252 15.737 16.7637 15.5416 16.8462 15.3473C16.9304 15.149 17.0312 15.0195 17.1009 14.9611L17.1098 14.9536L17.1185 14.9459L20.1185 12.2925Z" fill="#0C5FB3" stroke="#0C5FB3" stroke-width="1.77778"/>
      </svg>
      `;
    }
  }, []);

  return (
    <div className={styles.pageContainer} data-testid="calendar">
      <div className={styles.mainContent}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              multiMonthPlugin,
              interactionPlugin,
              timeGridPlugin,
            ]}
            headerToolbar={{
              left: "today prev,next,title",
              right: "searchButton filterButton addButton",
            }}
            ref={calendarRef}
            titleFormat={{ year: "numeric", month: "long" }}
            themeSystem="bootstrap5"
            initialView={"dayGridMonth"}
            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            initialEvents={[
              {
                title: "sunday service",
                start: new Date(2024, 9, 10, 10, 0),
                resourceId: "a",
                isAllDay: false,
              },
              {
                title: "regular service",
                start: new Date(2024, 9, 1, 12, 30),
                resourceId: "b",
                isAllDay: false,
              },
              {
                title: "anointing service",
                start: new Date(2024, 9, 13, 2, 45),
                resourceId: "c",
                isAllDay: false,
              },
              {
                title: "special service",
                start: new Date(),
                isAllDay: false,
                resourceId: "d",
              },
            ]}
            customButtons={{
              searchButton: {
                click: () => {},
              },
              addButton: {
                click: toggleFilter,
                text: "Add",
              },
              filterButton: {
                click: () =>
                  setShouldOpenMoreSettingsModal(!shouldOpenMoreSettingsModal),
              },
            }}
          />
        </div>
        {filterOpen && (
          <div className={styles.filterModal}>
            <RegularAttendanceForm />
          </div>
        )}

        {shouldOpenMoreSettingsModal && (
          <section
            className={`${styles.filterModal} w-[50%] mx-auto`}
            data-testid="filter-modal-container"
          >
            <FilterModal calendarRef={calendarRef} />
          </section>
        )}
      </div>
    </div>
  );
});

RegularCalendarView.displayName = "RegularCalendarView";
export default RegularCalendarView;
