"use client";
import Image from "next/image";
import styles from "../app/styles.module.css";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="p-4">
          <Image
            src="/images/church-logo.png"
            alt="church logo"
            width={160}
            height={10}
            className="h-auto"
          />
        </div>
        <nav className="p-4">
          <ul>
            <li className="flex items-center space-x-4 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.02 2.91003C8.71003 2.91003 6.02003 5.60003 6.02003 8.91003V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>

              <span>
                <a href="#">Notifications</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 22V11"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 7V2"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22V17"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13V2"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 22V11"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 7V2"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 11H7"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 11H21"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13H14"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>
                <a href="#">Settings</a>
              </span>
            </li>
            <hr className="w-38 mb-7 mt-7"></hr>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.95 3.1125C7.95 3.255 7.83 3.375 7.6875 3.375H6.84C5.22 3.375 3.9 4.695 3.9 6.315V13.2375C3.9 13.38 3.78 13.5 3.6375 13.5H3.1125C2.22 13.5 1.5 12.78 1.5 11.8875V3.1125C1.5 2.22 2.22 1.5 3.1125 1.5H6.3375C7.23 1.5 7.95 2.22 7.95 3.1125Z"
                  fill="#333333"
                />
                <path
                  d="M16.5 3.1125V11.8875C16.5 12.78 15.78 13.5 14.8875 13.5H14.415C14.2725 13.5 14.1525 13.38 14.1525 13.2375V6.315C14.1525 4.695 12.8325 3.375 11.2125 3.375H10.3125C10.17 3.375 10.05 3.255 10.05 3.1125C10.05 2.22 10.77 1.5 11.6625 1.5H14.8875C15.78 1.5 16.5 2.22 16.5 3.1125Z"
                  fill="#333333"
                />
                <path
                  d="M11.2125 4.5H6.84002C5.83502 4.5 5.02502 5.31 5.02502 6.315V14.685C5.02502 15.69 5.83502 16.5 6.84002 16.5H8.06252C8.27252 16.5 8.43752 16.335 8.43752 16.125V14.25C8.43752 13.9425 8.69252 13.6875 9.00002 13.6875C9.30752 13.6875 9.56252 13.9425 9.56252 14.25V16.125C9.56252 16.335 9.72752 16.5 9.93752 16.5H11.22C12.2175 16.5 13.0275 15.69 13.0275 14.6925V6.315C13.0275 5.31 12.2175 4.5 11.2125 4.5ZM10.5 11.0625H7.50002C7.19252 11.0625 6.93752 10.8075 6.93752 10.5C6.93752 10.1925 7.19252 9.9375 7.50002 9.9375H10.5C10.8075 9.9375 11.0625 10.1925 11.0625 10.5C11.0625 10.8075 10.8075 11.0625 10.5 11.0625ZM10.5 8.8125H7.50002C7.19252 8.8125 6.93752 8.5575 6.93752 8.25C6.93752 7.9425 7.19252 7.6875 7.50002 7.6875H10.5C10.8075 7.6875 11.0625 7.9425 11.0625 8.25C11.0625 8.5575 10.8075 8.8125 10.5 8.8125Z"
                  fill="#333333"
                />
              </svg>

              <span>
                <a href="#">Dashboard</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0625 16.5C15.4087 16.5 16.5 15.4087 16.5 14.0625C16.5 12.7163 15.4087 11.625 14.0625 11.625C12.7163 11.625 11.625 12.7163 11.625 14.0625C11.625 15.4087 12.7163 16.5 14.0625 16.5Z"
                  fill="#333333"
                />
                <path
                  d="M14.25 6C15.4926 6 16.5 4.99264 16.5 3.75C16.5 2.50736 15.4926 1.5 14.25 1.5C13.0074 1.5 12 2.50736 12 3.75C12 4.99264 13.0074 6 14.25 6Z"
                  fill="#333333"
                />
                <path
                  d="M3.75 6C4.99264 6 6 4.99264 6 3.75C6 2.50736 4.99264 1.5 3.75 1.5C2.50736 1.5 1.5 2.50736 1.5 3.75C1.5 4.99264 2.50736 6 3.75 6Z"
                  fill="#333333"
                />
                <path
                  d="M3.6225 6.015C4.35 8.1 6.315 9.5025 8.5275 9.5025C8.535 9.5025 8.5425 9.5025 8.55 9.5025L11.1975 9.495C12.3375 9.48 13.3575 10.2525 13.665 11.3625V12.75C13.665 13.065 13.92 13.32 14.2425 13.32C14.5575 13.32 14.8125 13.065 14.8125 12.75V4.32C14.8125 4.005 14.5575 3.75 14.2425 3.75C13.9275 3.75 13.665 4.005 13.665 4.32V9.285C13.005 8.7 12.1425 8.34 11.205 8.34C11.1975 8.34 11.1975 8.34 11.19 8.34L8.5425 8.3475C8.535 8.3475 8.535 8.3475 8.5275 8.3475C6.81 8.3475 5.2725 7.26 4.71 5.6325C4.62 5.4 4.4025 5.25 4.1625 5.25C4.1025 5.25 4.035 5.265 3.975 5.28C3.675 5.385 3.5175 5.715 3.6225 6.015Z"
                  fill="#333333"
                />
              </svg>

              <span>
                <a href="#">Branch</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.125 10.3125C7.125 11.04 7.68751 11.625 8.37751 11.625H9.78749C10.3875 11.625 10.875 11.1151 10.875 10.4776C10.875 9.79505 10.575 9.54755 10.1325 9.39005L7.875 8.60255C7.4325 8.44505 7.13251 8.20505 7.13251 7.51505C7.13251 6.88505 7.61999 6.36755 8.21999 6.36755H9.63C10.32 6.36755 10.8825 6.95255 10.8825 7.68005"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 5.625V12.375"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 2.25V5.25H15.75"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 1.5L12.75 5.25"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>
                <a href="#">Offerings</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 1.5C4.785 1.5 3.1875 3.0975 3.1875 5.0625C3.1875 6.99 4.695 8.55 6.66 8.6175C6.72 8.61 6.78 8.61 6.825 8.6175C6.84 8.6175 6.8475 8.6175 6.8625 8.6175C6.87 8.6175 6.87 8.6175 6.8775 8.6175C8.7975 8.55 10.305 6.99 10.3125 5.0625C10.3125 3.0975 8.715 1.5 6.75 1.5Z"
                  fill="#1D1F2E"
                  fill-opacity="0.8"
                />
                <path
                  d="M10.56 10.6124C8.46747 9.21741 5.05497 9.21741 2.94747 10.6124C1.99497 11.2499 1.46997 12.1124 1.46997 13.0349C1.46997 13.9574 1.99497 14.8124 2.93997 15.4424C3.98997 16.1474 5.36997 16.4999 6.74997 16.4999C8.12997 16.4999 9.50997 16.1474 10.56 15.4424C11.505 14.8049 12.03 13.9499 12.03 13.0199C12.0225 12.0974 11.505 11.2424 10.56 10.6124Z"
                  fill="#1D1F2E"
                  fill-opacity="0.8"
                />
                <path
                  d="M14.9925 5.50507C15.1125 6.96008 14.0775 8.23507 12.645 8.40758C12.6375 8.40758 12.6375 8.40758 12.63 8.40758H12.6075C12.5625 8.40758 12.5175 8.40757 12.48 8.42257C11.7525 8.46007 11.085 8.22757 10.5825 7.80008C11.355 7.11007 11.7975 6.07507 11.7075 4.95007C11.655 4.34257 11.445 3.78757 11.13 3.31507C11.415 3.17257 11.745 3.08257 12.0825 3.05257C13.5525 2.92507 14.865 4.02007 14.9925 5.50507Z"
                  fill="#1D1F2E"
                  fill-opacity="0.8"
                />
                <path
                  d="M16.4925 12.4426C16.4325 13.1701 15.9675 13.8001 15.1875 14.2276C14.4375 14.6401 13.4925 14.8351 12.555 14.8126C13.095 14.3251 13.41 13.7176 13.47 13.0726C13.545 12.1426 13.1025 11.2501 12.2175 10.5376C11.715 10.1401 11.13 9.82505 10.4925 9.59255C12.15 9.11255 14.235 9.43505 15.5175 10.4701C16.2075 11.0251 16.56 11.7226 16.4925 12.4426Z"
                  fill="#1D1F2E"
                  fill-opacity="0.8"
                />
              </svg>

              <span>
                <a href="#">Membership</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1475 5.8275C13.095 5.82 13.0425 5.82 12.99 5.8275C11.8275 5.79 10.905 4.8375 10.905 3.6675C10.905 2.475 11.8725 1.5 13.0725 1.5C14.265 1.5 15.24 2.4675 15.24 3.6675C15.2325 4.8375 14.31 5.79 13.1475 5.8275Z"
                  fill="#0C5FB3"
                />
                <path
                  d="M15.5925 11.0251C14.7525 11.5876 13.575 11.7976 12.4875 11.6551C12.7725 11.0401 12.9225 10.3576 12.93 9.63756C12.93 8.88756 12.765 8.17506 12.45 7.55256C13.56 7.40256 14.7375 7.61256 15.585 8.17506C16.77 8.95506 16.77 10.2376 15.5925 11.0251Z"
                  fill="#0C5FB3"
                />
                <path
                  d="M4.83 5.8275C4.8825 5.82 4.935 5.82 4.9875 5.8275C6.15 5.79 7.0725 4.8375 7.0725 3.6675C7.0725 2.4675 6.105 1.5 4.90499 1.5C3.71249 1.5 2.745 2.4675 2.745 3.6675C2.745 4.8375 3.6675 5.79 4.83 5.8275Z"
                  fill="#0C5FB3"
                />
                <path
                  d="M4.91253 9.63746C4.91253 10.365 5.07003 11.055 5.35503 11.6775C4.29753 11.79 3.19503 11.565 2.38503 11.0325C1.20003 10.245 1.20003 8.96246 2.38503 8.17496C3.18753 7.63496 4.32003 7.41746 5.38503 7.53746C5.07753 8.16746 4.91253 8.87996 4.91253 9.63746Z"
                  fill="#0C5FB3"
                />
                <path
                  d="M9.08998 11.9025C9.02998 11.895 8.96248 11.895 8.89498 11.9025C7.51498 11.8575 6.41248 10.725 6.41248 9.33C6.41998 7.905 7.56748 6.75 8.99998 6.75C10.425 6.75 11.58 7.905 11.58 9.33C11.5725 10.725 10.4775 11.8575 9.08998 11.9025Z"
                  fill="#0C5FB3"
                />
                <path
                  d="M6.65248 13.455C5.51998 14.2125 5.51998 15.4575 6.65248 16.2075C7.94248 17.07 10.0575 17.07 11.3475 16.2075C12.48 15.45 12.48 14.205 11.3475 13.455C10.065 12.5925 7.94998 12.5925 6.65248 13.455Z"
                  fill="#0C5FB3"
                />
              </svg>

              <span>
                <a href="#">Attendance</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 11.25C16.5 14.1525 14.1525 16.5 11.25 16.5L12.0375 15.1875"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 6.75C1.5 3.8475 3.8475 1.5 6.75 1.5L5.9625 2.8125"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 3.15V3.2325C16.5 3.4425 16.335 3.6075 16.125 3.6075H9.375C9.165 3.6075 9 3.4425 9 3.2325V3.15C9 1.83 9.33 1.5 10.665 1.5H14.835C16.17 1.5 16.5 1.83 16.5 3.15Z"
                  fill="#333333"
                />
                <path
                  d="M9.375 4.35742C9.165 4.35742 9 4.52242 9 4.73242V5.48242V6.22492C9 7.54492 9.33 7.87492 10.665 7.87492H14.835C16.17 7.87492 16.5 7.54492 16.5 6.22492V5.48242V4.73242C16.5 4.52242 16.335 4.35742 16.125 4.35742H9.375Z"
                  fill="#333333"
                />
                <path
                  d="M9 11.775V11.8575C9 12.0675 8.835 12.2325 8.625 12.2325H1.875C1.665 12.2325 1.5 12.0675 1.5 11.8575V11.775C1.5 10.455 1.83 10.125 3.165 10.125H7.335C8.67 10.125 9 10.455 9 11.775Z"
                  fill="#333333"
                />
                <path
                  d="M1.875 12.9824C1.665 12.9824 1.5 13.1474 1.5 13.3574V14.1074V14.8499C1.5 16.1699 1.83 16.4999 3.165 16.4999H7.335C8.67 16.4999 9 16.1699 9 14.8499V14.1074V13.3574C9 13.1474 8.835 12.9824 8.625 12.9824H1.875Z"
                  fill="#333333"
                />
              </svg>

              <span>
                <a href="#">Staff salary</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.1875C12 4.1175 11.2425 4.875 10.3125 4.875H7.6875C7.2225 4.875 6.8025 4.6875 6.495 4.38C6.1875 4.0725 6 3.6525 6 3.1875C6 2.2575 6.7575 1.5 7.6875 1.5H10.3125C10.7775 1.5 11.1975 1.6875 11.505 1.995C11.8125 2.3025 12 2.7225 12 3.1875Z"
                  fill="#333333"
                />
                <path
                  d="M14.1225 3.77253C13.95 3.63003 13.755 3.51753 13.545 3.43503C13.3275 3.35253 13.11 3.52503 13.065 3.75003C12.81 5.03253 11.6775 6.00003 10.3125 6.00003H7.6875C6.9375 6.00003 6.2325 5.70753 5.7 5.17503C5.31 4.78503 5.04 4.29003 4.935 3.75753C4.89 3.53253 4.665 3.35253 4.4475 3.44253C3.5775 3.79503 3 4.59003 3 6.18753V13.5C3 15.75 4.3425 16.5 6 16.5H12C13.6575 16.5 15 15.75 15 13.5V6.18753C15 4.96503 14.6625 4.21503 14.1225 3.77253ZM6 9.18753H9C9.3075 9.18753 9.5625 9.44253 9.5625 9.75003C9.5625 10.0575 9.3075 10.3125 9 10.3125H6C5.6925 10.3125 5.4375 10.0575 5.4375 9.75003C5.4375 9.44253 5.6925 9.18753 6 9.18753ZM12 13.3125H6C5.6925 13.3125 5.4375 13.0575 5.4375 12.75C5.4375 12.4425 5.6925 12.1875 6 12.1875H12C12.3075 12.1875 12.5625 12.4425 12.5625 12.75C12.5625 13.0575 12.3075 13.3125 12 13.3125Z"
                  fill="#333333"
                />
              </svg>
              <span>
                <a href="#">Report</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7275 12H13.5225C12.57 12 12 12.57 12 13.5225V15.7275C12 16.68 12.57 17.25 13.5225 17.25H15.7275C16.68 17.25 17.25 16.68 17.25 15.7275V13.5225C17.25 12.57 16.68 12 15.7275 12ZM16.2225 13.8375L14.445 15.915C14.37 15.9975 14.2725 16.05 14.16 16.05C14.16 16.05 14.1525 16.05 14.145 16.05C14.0475 16.05 13.9425 16.0125 13.875 15.9375L13.05 15.1275C12.9 14.9775 12.9 14.73 13.05 14.5725C13.2 14.4225 13.4475 14.4225 13.605 14.5725L14.1225 15.09L15.63 13.335C15.765 13.17 16.0125 13.1475 16.1775 13.29C16.3425 13.4325 16.3575 13.68 16.2225 13.8375Z"
                  fill="#333333"
                />
                <path
                  d="M15.7275 12H13.5225C12.57 12 12 12.57 12 13.5225V15.7275C12 16.68 12.57 17.25 13.5225 17.25H15.7275C16.68 17.25 17.25 16.68 17.25 15.7275V13.5225C17.25 12.57 16.68 12 15.7275 12ZM16.2225 13.8375L14.445 15.915C14.37 15.9975 14.2725 16.05 14.16 16.05C14.16 16.05 14.1525 16.05 14.145 16.05C14.0475 16.05 13.9425 16.0125 13.875 15.9375L13.05 15.1275C12.9 14.9775 12.9 14.73 13.05 14.5725C13.2 14.4225 13.4475 14.4225 13.605 14.5725L14.1225 15.09L15.63 13.335C15.765 13.17 16.0125 13.1475 16.1775 13.29C16.3425 13.4325 16.3575 13.68 16.2225 13.8375Z"
                  fill="#333333"
                />
                <path
                  d="M16.4775 5.4075C16.2675 3.36 14.64 1.7325 12.5925 1.5225C12.4425 1.5075 12.2925 1.5 12.1425 1.5H5.8575C5.7075 1.5 5.5575 1.5075 5.4075 1.5225C3.36 1.7325 1.7325 3.36 1.5225 5.4075C1.5075 5.5575 1.5 5.7075 1.5 5.8575V12.1425C1.5 12.2925 1.5075 12.4425 1.5225 12.5925C1.7325 14.64 3.36 16.2675 5.4075 16.4775C5.5575 16.4925 5.7075 16.5 5.8575 16.5H10.5C10.9125 16.5 11.25 16.1625 11.25 15.75V13.5225C11.25 12.27 12.27 11.25 13.5225 11.25H15.75C16.1625 11.25 16.5 10.9125 16.5 10.5V5.8575C16.5 5.7075 16.4925 5.5575 16.4775 5.4075ZM5.8125 10.125C5.8125 10.4325 5.5575 10.6875 5.25 10.6875C4.9425 10.6875 4.6875 10.4325 4.6875 10.125V7.875C4.6875 7.5675 4.9425 7.3125 5.25 7.3125C5.5575 7.3125 5.8125 7.5675 5.8125 7.875V10.125ZM9.5625 10.125C9.5625 10.4325 9.3075 10.6875 9 10.6875C8.6925 10.6875 8.4375 10.4325 8.4375 10.125V7.875C8.4375 7.5675 8.6925 7.3125 9 7.3125C9.3075 7.3125 9.5625 7.5675 9.5625 7.875V10.125Z"
                  fill="#333333"
                />
              </svg>

              <span>
                <a href="#">Request</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5625 2.67V1.5C12.5625 1.1925 12.3075 0.9375 12 0.9375C11.6925 0.9375 11.4375 1.1925 11.4375 1.5V2.625H6.56249V1.5C6.56249 1.1925 6.30749 0.9375 5.99999 0.9375C5.69249 0.9375 5.43749 1.1925 5.43749 1.5V2.67C3.41249 2.8575 2.42999 4.065 2.27999 5.8575C2.26499 6.075 2.44499 6.255 2.65499 6.255H15.345C15.5625 6.255 15.7425 6.0675 15.72 5.8575C15.57 4.065 14.5875 2.8575 12.5625 2.67Z"
                  fill="#333333"
                />
                <path
                  d="M15 7.37988H3C2.5875 7.37988 2.25 7.71738 2.25 8.12988V12.7499C2.25 14.9999 3.375 16.4999 6 16.4999H12C14.625 16.4999 15.75 14.9999 15.75 12.7499V8.12988C15.75 7.71738 15.4125 7.37988 15 7.37988ZM6.9075 13.6574C6.87 13.6874 6.8325 13.7249 6.795 13.7474C6.75 13.7774 6.705 13.7999 6.66 13.8149C6.615 13.8374 6.57 13.8524 6.525 13.8599C6.4725 13.8674 6.4275 13.8749 6.375 13.8749C6.2775 13.8749 6.18 13.8524 6.09 13.8149C5.9925 13.7774 5.9175 13.7249 5.8425 13.6574C5.7075 13.5149 5.625 13.3199 5.625 13.1249C5.625 12.9299 5.7075 12.7349 5.8425 12.5924C5.9175 12.5249 5.9925 12.4724 6.09 12.4349C6.225 12.3749 6.375 12.3599 6.525 12.3899C6.57 12.3974 6.615 12.4124 6.66 12.4349C6.705 12.4499 6.75 12.4724 6.795 12.5024C6.8325 12.5324 6.87 12.5624 6.9075 12.5924C7.0425 12.7349 7.125 12.9299 7.125 13.1249C7.125 13.3199 7.0425 13.5149 6.9075 13.6574ZM6.9075 11.0324C6.765 11.1674 6.57 11.2499 6.375 11.2499C6.18 11.2499 5.985 11.1674 5.8425 11.0324C5.7075 10.8899 5.625 10.6949 5.625 10.4999C5.625 10.3049 5.7075 10.1099 5.8425 9.96738C6.0525 9.75738 6.3825 9.68988 6.66 9.80988C6.7575 9.84738 6.84 9.89988 6.9075 9.96738C7.0425 10.1099 7.125 10.3049 7.125 10.4999C7.125 10.6949 7.0425 10.8899 6.9075 11.0324ZM9.5325 13.6574C9.39 13.7924 9.195 13.8749 9 13.8749C8.805 13.8749 8.61 13.7924 8.4675 13.6574C8.3325 13.5149 8.25 13.3199 8.25 13.1249C8.25 12.9299 8.3325 12.7349 8.4675 12.5924C8.745 12.3149 9.255 12.3149 9.5325 12.5924C9.6675 12.7349 9.75 12.9299 9.75 13.1249C9.75 13.3199 9.6675 13.5149 9.5325 13.6574ZM9.5325 11.0324C9.495 11.0624 9.4575 11.0924 9.42 11.1224C9.375 11.1524 9.33 11.1749 9.285 11.1899C9.24 11.2124 9.195 11.2274 9.15 11.2349C9.0975 11.2424 9.0525 11.2499 9 11.2499C8.805 11.2499 8.61 11.1674 8.4675 11.0324C8.3325 10.8899 8.25 10.6949 8.25 10.4999C8.25 10.3049 8.3325 10.1099 8.4675 9.96738C8.535 9.89988 8.6175 9.84738 8.715 9.80988C8.9925 9.68988 9.3225 9.75738 9.5325 9.96738C9.6675 10.1099 9.75 10.3049 9.75 10.4999C9.75 10.6949 9.6675 10.8899 9.5325 11.0324ZM12.1575 13.6574C12.015 13.7924 11.82 13.8749 11.625 13.8749C11.43 13.8749 11.235 13.7924 11.0925 13.6574C10.9575 13.5149 10.875 13.3199 10.875 13.1249C10.875 12.9299 10.9575 12.7349 11.0925 12.5924C11.37 12.3149 11.88 12.3149 12.1575 12.5924C12.2925 12.7349 12.375 12.9299 12.375 13.1249C12.375 13.3199 12.2925 13.5149 12.1575 13.6574ZM12.1575 11.0324C12.12 11.0624 12.0825 11.0924 12.045 11.1224C12 11.1524 11.955 11.1749 11.91 11.1899C11.865 11.2124 11.82 11.2274 11.775 11.2349C11.7225 11.2424 11.67 11.2499 11.625 11.2499C11.43 11.2499 11.235 11.1674 11.0925 11.0324C10.9575 10.8899 10.875 10.6949 10.875 10.4999C10.875 10.3049 10.9575 10.1099 11.0925 9.96738C11.1675 9.89988 11.2425 9.84738 11.34 9.80988C11.475 9.74988 11.625 9.73488 11.775 9.76488C11.82 9.77238 11.865 9.78738 11.91 9.80988C11.955 9.82488 12 9.84738 12.045 9.87738C12.0825 9.90738 12.12 9.93738 12.1575 9.96738C12.2925 10.1099 12.375 10.3049 12.375 10.4999C12.375 10.6949 12.2925 10.8899 12.1575 11.0324Z"
                  fill="#333333"
                />
              </svg>

              <span>
                <a href="#">Event</a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 sidebar-footer">
        <div className="flex items-center space-x-4 mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 10.0001C12.3012 10.0001 14.1666 8.1346 14.1666 5.83342C14.1666 3.53223 12.3012 1.66675 9.99998 1.66675C7.69879 1.66675 5.83331 3.53223 5.83331 5.83342C5.83331 8.1346 7.69879 10.0001 9.99998 10.0001Z"
              stroke="#005EFF"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333"
              stroke="#005EFF"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>Olorunfemi Akintibubo</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12H3.62"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;