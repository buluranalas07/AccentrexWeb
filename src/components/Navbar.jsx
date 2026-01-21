import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    setMenuOpen(false);
    if (path.startsWith("#")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <motion.div
      className="sticky top-0 z-50 bg-white shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center p-3">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {["Home", "About", "Programs", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  onClick={() => handleNavigation(`/#${item.toLowerCase()}`)}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                onClick={() => handleNavigation("/pages/inquiry")}
              >
                Inquire Now
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-bold">Accentrex</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center bg-white py-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "About", "Programs", "Contact", "Inquire Now"].map(
              (item, index) => (
                <button
                  key={index}
                  className="py-2 text-lg font-medium w-full text-center border-b border-gray-200"
                  onClick={() =>
                    handleNavigation(
                      item === "Inquire Now"
                        ? "/pages/inquiry"
                        : `/#${item.toLowerCase()}`
                    )
                  }
                >
                  {item}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
