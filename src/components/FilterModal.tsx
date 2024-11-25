import FullCalendar from "@fullcalendar/react";
import { RefObject, useState } from "react";
import styles from "./filter.module.css";

const FilterModal = ({
  calendarRef,
}: {
  calendarRef: RefObject<FullCalendar>;
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className={styles.filterModal}>
      <header className={styles.modalHeader}>
        <h2 className={styles.filter}>Filters</h2>
        <button className={styles.clearAll}>Clear all</button>
      </header>
      <hr className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.checkBox}>
          <label className={styles.input}>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
              className={styles.check}
            />
            By view
          </label>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                stroke="#545454"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.dropDown}>
          <button
            onClick={() =>
              calendarRef?.current?.getApi().changeView("dayGridWeek")
            }
            className={`active:scale-95 ${styles.view}`}
          >
            Week
          </button>
          <button
            onClick={() =>
              calendarRef?.current?.getApi().changeView("dayGridMonth")
            }
            className={`active:scale-95 ${styles.view}`}
          >
            Month
          </button>
          <button
            onClick={() =>
              calendarRef?.current?.getApi().changeView("multiMonthYear")
            }
            className={`active:scale-95 ${styles.view}`}
          >
            Year
          </button>
        </div>
        <div className={styles.dropDownView}>
          <div className={styles.checkBox}>
            <label className={styles.input}>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
                className={styles.check}
              />
              By Date
            </label>
            <select id="viewByService">
              <option value="regular">Regular Service</option>
              <option value="special">Special Service</option>
            </select>
            <button>
              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.910156 16.92L7.43016 10.4C8.20016 9.63002 8.20016 8.37002 7.43016 7.60002L0.910156 1.08002"
                  stroke="#0C5FB3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.checkBox}>
            <label className={styles.input}>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
                className={styles.check}
              />
              By Service
            </label>
            <select id="viewByService">
              <option value="regular">Regular Service</option>
              <option value="special">Special Service</option>
            </select>
            <button>
              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.910156 16.92L7.43016 10.4C8.20016 9.63002 8.20016 8.37002 7.43016 7.60002L0.910156 1.08002"
                  stroke="#0C5FB3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
