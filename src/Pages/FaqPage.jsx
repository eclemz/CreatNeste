import React from "react";
import Faq from "../Components/Faq";
import ContactPreview from "../Components/ContactPreview";

function FaqPage() {
  return (
    <main>
      {/* Pass showSearchSection prop to enable search functionality */}
      <Faq showSection={false} showSearchSection={true} />
      <ContactPreview />
    </main>
  );
}

export default FaqPage;
