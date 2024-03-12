import { useEffect, useState } from "react";

function Header() {
  const calculateTimeLeft = () => {
    const actualDate = new Date();
    console.log(actualDate.getDate());
    const nextDayDate = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      actualDate.getDate() + 1
    );
    const difference = nextDayDate - actualDate;

    const timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="header">
      <div className="main-hd">
        <img src="" alt="" />
        <div>
            <button>Producto</button>
            <button>Descripción</button>
            <button>Compranos</button>
            <button>Reseñas</button>
        </div>
      </div>
      <div className="clockdown">
        <img src="" alt="" />

        <h2>
          Queda{" "}
          {!(
            timeLeft.hours !== null &&
            timeLeft.minutes !== null &&
            timeLeft.seconds !== null
          )
            ? ""
            : `${timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:${
                timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes
              }:${
                timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds
              }`}{" "}
          para acabar la oferta!!!
        </h2>
      </div>
    </div>
  );
}

export default Header;
