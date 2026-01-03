export function getSeasonalMessage() {
  const today = new Date();
  const month = today.getMonth() + 1; // Jan = 1
  const day = today.getDate();

  // 🎄 Christmas (Dec 20–31)
  if (month === 12 && day >= 15) {
    return {
      text: "Merry Christmas!!! from all of us at Creatneste",
      icon1: "/Christmaswreath.svg",
      icon2: "/Christmasbell.svg",
      icon3: "/mistletoe.svg",
      bg: "#EC0C0C",
      color: "#FFFF",
    };
  }

  // 🎉 New Year (Jan 1–20)
  if (month === 1 && day <= 20) {
    return {
      text: " Happy New Year! Let’s Build Something Amazing Together in 2026",
      icon1: "/newyear1.png",
      icon2: "/newyear2.png",
      icon3: "/newyear3.png",
      icon4: "/newyear4.png",
      icon5: "/newyear5.png",
      bg: "#EC0C0C",
      color: "#FFFF",
    };
  }

  // ❤️ Valentine (Feb 14)
  if (month === 2 && day === 14) {
    return {
      text: "Happy Valentine’s Day!! We Love Building Products People Love",
      icon1: "/flower.png",
      icon2: "/roses.png",
      icon3: "/heart.png",
      icon4: "/cupid1.png",
      icon5: "/cupid2.png",
      bg: "#EC0C0C",
      color: "#FFFF",
    };
  }
  //Eid Al-fitr (Mar 19)
  if (month === 3 && day === 19) {
    return {
      text: "Eid Mubarak!! From Creatneste to you and your family, wishing you a joyous Eid.",
      icon1: "/present.png",
      icon2: "/bedug.png",
      icon3: "/woman.png",
      icon4: "/ketupat.png",
      icon5: "/mosque.png",
      bg: "#50C878",
      color: "#FFFFEE",
    };
  }
  //Easter (Apr 6)
  if (month === 4 && day === 6) {
    return {
      text: "Happy Easter!! Today we are Springing into a season of abundance. ",
      icon1: "/crown.png",
      icon2: "/cross1.png",
      icon3: "/cross2.png",
      icon4: "/cross3.png",
      icon5: "/easter.png",
      bg: "#0788022",
      color: "#FFFFEE",
    };
  }
  //Eid Al-fitr (likely May 27)
  if (month === 5 && day === 27) {
    return {
      text: "Barka Da Sallah!! From Creatneste to you and your family, wishing you a joyous Eid.",
      icon1: "/present.png",
      icon2: "/bedug.png",
      icon3: "/eid1.png",
      icon4: "/eid2.png",
      icon5: "/mosque.png",
      bg: "#009000",
      color: "#FFFFEE",
    };
  }
  //Independence Day (Oct 1)
  if (month === 1 && day === 3) {
    return {
      text: "Happy Independence Nigeria!! At Createnest, We celebrate the Great Giant of Africa.",
      icon1: "/nigeria1.png",
      icon2: "/nigeria2.png",
      icon3: "/nigeria3.png",
      icon4: "/nigeria4.png",
      icon5: "/coatofarm.png",
      bg: "#e9fafc",
      color: "#008751",
    };
  }

  // Default (no banner)
  return null;
}
