import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  const phoneNumber = "2349036270965";
  const message = encodeURIComponent(
    "Hello Creatneste, I’d like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Creatneste on WhatsApp"
      className="
        fixed bottom-20 md:bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        rounded-full bg-[#25D366]
        shadow-lg
        hover:scale-110 hover:shadow-xl
        transition-all duration-300 ease-out
      "
    >
      <FaWhatsapp className="text-white w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}

export default FloatingWhatsApp;
