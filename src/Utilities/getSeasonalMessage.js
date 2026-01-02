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
    };
  }

  // 🎉 New Year (Jan 1–20)
  if (month === 1 && day <= 20) {
    return {
      text: " Happy New Year! Let’s Build Something Amazing Together in 2026",
      icon1: "/Christmaswreath.svg",
      icon2: "/Christmasbell.svg",
      icon3: "/mistletoe.svg",
      bg: "#EC0C0C",
    };
  }

  // ❤️ Valentine (Feb 14)
  if (month === 2 && day === 14) {
    return "❤️ Happy Valentine’s Day — We Love Building Products People Love";
  }

  // Default (no banner)
  return null;
}
