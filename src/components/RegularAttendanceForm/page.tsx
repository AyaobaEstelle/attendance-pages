"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const RegularAttendanceForm = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <div className={styles.pageContainer}>
      {filterOpen && (
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>Special service attendance</h1>
            <div className={styles.headerIcons}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00244 18C2.45244 18 1.98177 17.8043 1.59044 17.413C1.19911 17.0217 1.00311 16.5507 1.00244 16V3H0.00244141V1H5.00244V0H11.0024V1H16.0024V3H15.0024V16C15.0024 16.55 14.8068 17.021 14.4154 17.413C14.0241 17.805 13.5531 18.0007 13.0024 18H3.00244ZM13.0024 3H3.00244V16H13.0024V3ZM5.00244 14H7.00244V5H5.00244V14ZM9.00244 14H11.0024V5H9.00244V14Z"
                  fill="black"
                />
              </svg>

              <FaTimes onClick={toggleFilter} />
            </div>
          </header>

          <hr className={styles.divider} />

          <div className={styles.flexRow}>
            <div className={styles.form}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08997H20.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0045"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <label>Sept, 12, 2024</label>
            </div>

            <div className={styles.form}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>

              <label> Offline</label>
            </div>
          </div>

          <div className={styles.flexRow}>
            <div className={styles.form}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <label>8am-11am</label>
            </div>

            <div className={styles.form}>
              <Image
                src="/images/routing.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
              <label>
                123 Main Street, Suite 456, Springfield, IL 62704, USA.
              </label>
            </div>
          </div>
          <div className={styles.formTwo}>
            <header className={styles.subHeader}>
              <h2 className={styles.subTitle}>Attendance</h2>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
                  fill="black"
                />
                <path
                  d="M20.7901 14.6999C19.6701 15.4499 18.1001 15.7299 16.6501 15.5399C17.0301 14.7199 17.2301 13.8099 17.2401 12.8499C17.2401 11.8499 17.0201 10.8999 16.6001 10.0699C18.0801 9.86991 19.6501 10.1499 20.7801 10.8999C22.3601 11.9399 22.3601 13.6499 20.7901 14.6999Z"
                  fill="black"
                />
                <path
                  d="M6.43991 7.77C6.50991 7.76 6.57991 7.76 6.64991 7.77C8.19991 7.72 9.42991 6.45 9.42991 4.89C9.42991 3.29 8.13991 2 6.53991 2C4.94991 2 3.65991 3.29 3.65991 4.89C3.65991 6.45 4.88991 7.72 6.43991 7.77Z"
                  fill="black"
                />
                <path
                  d="M6.55012 12.8501C6.55012 13.8201 6.76012 14.7401 7.14012 15.5701C5.73012 15.7201 4.26012 15.4201 3.18012 14.7101C1.60012 13.6601 1.60012 11.9501 3.18012 10.9001C4.25012 10.1801 5.76012 9.8901 7.18012 10.0501C6.77012 10.8901 6.55012 11.8401 6.55012 12.8501Z"
                  fill="black"
                />
                <path
                  d="M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.55005 14.3 8.55005 12.44C8.56005 10.54 10.09 9 12 9C13.9 9 15.44 10.54 15.44 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z"
                  fill="black"
                />
                <path
                  d="M8.87005 17.9399C7.36005 18.9499 7.36005 20.6099 8.87005 21.6099C10.59 22.7599 13.41 22.7599 15.13 21.6099C16.64 20.5999 16.64 18.9399 15.13 17.9399C13.42 16.7899 10.6 16.7899 8.87005 17.9399Z"
                  fill="black"
                />
              </svg>
            </header>

            <div className={styles.flexRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="men">
                  Men
                </label>
                <input
                  type="number"
                  id="men"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="women">
                  Women
                </label>
                <input
                  type="number"
                  id="women"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.flexRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="youth">
                  Youth
                </label>
                <input
                  type="number"
                  id="youth"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="teenagers">
                  Teenagers
                </label>
                <input
                  type="number"
                  id="teenagers"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.flexRow}>
              <div className={styles.formFieldTwo}>
                <label className={styles.formLabel} htmlFor="children">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formCat}>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 7.23306V3.86639C18.3333 2.54139 17.8 2.00806 16.475 2.00806H13.1083C11.7833 2.00806 11.25 2.54139 11.25 3.86639V7.23306C11.25 8.55806 11.7833 9.09139 13.1083 9.09139H16.475C17.8 9.09139 18.3333 8.55806 18.3333 7.23306Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.75008 7.44139V3.65806C8.75008 2.48306 8.21675 2.00806 6.89175 2.00806H3.52508C2.20008 2.00806 1.66675 2.48306 1.66675 3.65806V7.43306C1.66675 8.61639 2.20008 9.08306 3.52508 9.08306H6.89175C8.21675 9.09139 8.75008 8.61639 8.75008 7.44139Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.75008 16.8163V13.4496C8.75008 12.1246 8.21675 11.5913 6.89175 11.5913H3.52508C2.20008 11.5913 1.66675 12.1246 1.66675 13.4496V16.8163C1.66675 18.1413 2.20008 18.6746 3.52508 18.6746H6.89175C8.21675 18.6746 8.75008 18.1413 8.75008 16.8163Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0833 14.9246H17.0833"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.5833 17.4246V12.4246"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <label className={styles.formLabelCat}>add category</label>
              </div>
            </div>

            <button type="submit" className={styles.updateButton}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default RegularAttendanceForm;
