import { useState } from "react";
import ColEvents from "./events/ColEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(0);
  const [valueDate, setValueDate] = useState();

  const getCurrentWeekDays = () => {
    const daysInWeek = 7; // Số ngày trong một tuần
    const weekDays = [];
    const currentDayOfWeek = (
      valueDate ? new Date(valueDate) : currentDate
    ).getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Tính toán ngày bắt đầu của tuần
    const weekStart = new Date(valueDate || currentDate);
    weekStart.setDate(weekStart.getDate() - currentDayOfWeek);

    for (let i = 0; i < daysInWeek; i++) {
      console.log(i);
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      const isToday =
        day.toDateString() === currentDate.toDateString() && currentWeek === 0;
      const formattedDate = `${day.getDate()}/${
        day.getMonth() + 1
      }/${day.getFullYear()}`;

      const dayObj = {
        weekday: daysOfWeek[i], // Đổi từ daysInWeek thành daysOfWeek
        date: formattedDate,
        events: [
          // Thêm các sự kiện cho mỗi ngày, bạn có thể tùy chỉnh tùy ý
          { name: "Event 1", time: "10:00 AM" },
          { name: "Event 2", time: "2:00 PM" },
        ],
        color: isToday ? "bg-blue-600" : "bg-indigo-950",
      };

      weekDays.push(dayObj);
    }

    return weekDays;
  };

  // Handler cho nút Next
  const handleNextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
    setValueDate(nextWeekDate);
    setCurrentWeek(currentWeek + 1);
  };

  // Handler cho nút Prev
  const handlePrevWeek = () => {
    console.log(currentDate);
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeekDate);
    setValueDate(prevWeekDate);
    setCurrentWeek(currentWeek - 1);
  };

  const handleOnchange = (e) => {
    setValueDate(e.target.value);
    setCurrentDate(new Date(e.target.value));
    setCurrentWeek(0);
  };

  return (
    <div className="calendar border-t-2 border-gray-500">
      <div className="nav-buttons flex justify-center items-center gap-6 py-5">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200"
          onClick={handlePrevWeek}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-600 text-xl"
          />
        </button>
        <input type="date" className="mx-4 cursor-pointer" onChange={handleOnchange} />
        <button
          onClick={handleNextWeek}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-600 text-xl"
          />
        </button>
      </div>
      <ColEvents days={getCurrentWeekDays()} />
    </div>
  );
};
export default Calendar;
