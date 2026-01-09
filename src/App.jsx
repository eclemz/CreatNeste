import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SeasonalMarquee from "./Components/SeasonalMarquee";
import Navbar from "./Components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";
import FaqPage from "./Pages/FaqPage";
import useGtag from "./hooks/useGtag";
import Blog from "./Pages/Blog";
import FloatingWhatsApp from "./Components/FLoatingWhatsapp";

function App() {
  const location = useLocation();
  useGtag();
  return (
    <>
      <SeasonalMarquee />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <Portfolio />
              </PageWrapper>
            }
          />

          <Route
            path="/blog"
            element={
              <PageWrapper>
                <Blog />
              </PageWrapper>
            }
          />
          <Route
            path="/faqpage"
            element={
              <PageWrapper>
                <FaqPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <FloatingWhatsApp />
      <Footer />
      <ScrollToTop />
    </>
  );
}
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);
export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
