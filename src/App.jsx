import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import AnimationScroll from "./components/extras/animationScroll";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import NewsContentPage from "./components/worldNews/NewsContentPage";

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);

  return (
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
          path="/news"
          element={
            <PageWrapper>
              <News />
            </PageWrapper>
          }
        />
        {/* News article content page */}

        <Route
          path="/news/:slug"
          element={
            <PageWrapper>
              <NewsContentPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimationScroll />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
