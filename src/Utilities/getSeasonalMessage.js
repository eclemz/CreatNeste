export function getSeasonalMessage() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // 🎄 Christmas (Dec 15–31)
  if (month === 12 && day >= 15) {
    return {
      text: "Merry Christmas!!! from all of us at Creatneste",
      icons: ["/Christmaswreath.svg", "/Christmasbell.svg", "/mistletoe.svg"],
      bg: "#EC0C0C",
      color: "#FFFFFF",
    };
  }

  // 🎉 New Year (Jan 1–20)
  if (month === 1 && day <= 20) {
    return {
      text: "Happy New Year! Let’s Build Something Amazing Together in 2026",
      icons: [
        "/newyear1.png",
        "/newyear2.png",
        "/newyear3.png",
        "/newyear4.png",
        "/newyear5.png",
      ],
      bg: "#EC0C0C",
      color: "#FFFFFF",
    };
  }

  // ❤️ Valentine (Feb 14)
  if (month === 2 && day === 14) {
    return {
      text: "Happy Valentine’s Day!! We Love Building Products People Love",
      icons: [
        "/flower.png",
        "/roses.png",
        "/heart.png",
        "/cupid1.png",
        "/cupid2.png",
      ],
      bg: "#EC0C0C",
      color: "#FFFFFF",
    };
  }

  // 🌙 Eid al-Fitr (Mar 19)
  if (month === 3 && day === 19) {
    return {
      text: "Eid Mubarak!! From Creatneste to you and your family, wishing you a joyous Eid.",
      icons: [
        "/present.png",
        "/bedug.png",
        "/woman.png",
        "/ketupat.png",
        "/mosque.png",
      ],
      bg: "#50C878",
      color: "#FFFFEE",
    };
  }

  // 🐣 Easter (Apr 6)
  if (month === 4 && day === 6) {
    return {
      text: "Happy Easter!! Today we are Springing into a season of abundance.",
      icons: [
        "/crown.png",
        "/cross1.png",
        "/cross2.png",
        "/cross3.png",
        "/easter.png",
      ],
      bg: "#078802",
      color: "#FFFFEE",
    };
  }

  // 🌙 Eid al-Fitr (May 27)
  if (month === 5 && day === 27) {
    return {
      text: "Barka Da Sallah!! From Creatneste to you and your family, wishing you a joyous Eid.",
      icons: [
        "/present.png",
        "/bedug.png",
        "/eid1.png",
        "/eid2.png",
        "/mosque.png",
      ],
      bg: "#009000",
      color: "#FFFFEE",
    };
  }

  // 🇳🇬 Independence Day (Oct 1)  ⚠️ fixed date bug
  if (month === 10 && day === 1) {
    return {
      text: "Happy Independence Nigeria!! At Creatneste, we celebrate the Giant of Africa.",
      icons: [
        "/nigeria1.png",
        "/nigeria2.png",
        "/nigeria3.png",
        "/nigeria4.png",
        "/coatofarm.png",
      ],
      bg: "#E9FAFC",
      color: "#008751",
    };
  }

  return null;
}
