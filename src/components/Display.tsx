import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

export const Display = () => {
  const dayPassed = dayjs(new Date()).dayOfYear();
  const isLeapYear = dayjs(new Date()).isLeapYear();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="font-athiti shadow border p-10 md:p-20 aspect-square rounded-full flex flex-col justify-center items-center text-zinc-800 gap-2 md:gap-4">
        <h2 className="text-xl md:text-3xl text-center">
          อยากปีใหม่แล้ว อีกกี่วันน้อ!
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold">
          ผ่านมาแล้ว <span className="text-emerald-500">{dayPassed}</span> วัน
        </h1>
        <h3 className="text-xl md:text-3xl text-center">
          อีก{" "}
          {isLeapYear ? (
            <b className="text-red-500">{366 - dayPassed}</b>
          ) : (
            <b className="text-red-500">{366 - dayPassed}</b>
          )}{" "}
          วัน ก็จะปีใหม่แล้วเธอ
        </h3>
      </div>
    </div>
  );
};
