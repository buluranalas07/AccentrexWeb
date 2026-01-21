import React, { useEffect, lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// Lazy Load Components
const About = lazy(() => import("./components/About"));
const Contacts = lazy(() => import("./components/Contacts"));
const Programs = lazy(() => import("./components/Programs"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const HomeSection = lazy(() => import("./components/HomeSection"));

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 10); // Small delay to ensure rendering before scrolling
    }
  }, [location]);

  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="cursor-default min-h-[calc(100vh-1in)] scroll-mt-[2in] px-4 sm:px-8"
      >
        <HomeSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mt-10 min-h-[calc(100vh-1in)] scroll-mt-[1in] px-4 sm:px-8"
      >
        <About />
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="min-h-[calc(100vh-2in)] scroll-mt-[1in] px-4 sm:px-8"
      >
        <Programs />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-[calc(100vh-1in)] scroll-mt-[.2in] px-4 sm:px-8"
      >
        <Contacts />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/pages/inquiry"
            element={
              <Suspense>
                <Inquiry />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
