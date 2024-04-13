import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

export const Display = () => {
  const dayPassed = dayjs(new Date()).dayOfYear();
  const isLeapYear = dayjs(new Date()).isLeapYear();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        gap: 0,
        userSelect: "none",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          height: "450px",
          width: "450px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <h2>อยากปีใหม่แล้ว อีกกี่วันน้อ!</h2>
        <h1>
          ผ่านมาแล้ว <span style={{ color: "#10b981" }}>{dayPassed}</span> วัน
        </h1>
        <h3>
          อีก{" "}
          {isLeapYear ? (
            <b style={{ color: "#ef4444" }}>{366 - dayPassed}</b>
          ) : (
            <b style={{ color: "#ef4444" }}>{366 - dayPassed}</b>
          )}{" "}
          วัน ก็จะปีใหม่แล้วเธอ
        </h3>
      </div>
    </main>
  );
};
