import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaSignInAlt, 
  FaUserPlus, 
  FaSignOutAlt,
  FaChartLine,
  FaRocket,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change based on auth state

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", icon: HiSparkles },
    { name: "How It Works", href: "#how-it-works", icon: FaChartLine },
    { name: "Demo", href: "#demo", icon: FaRocket },
  ];

  const userMenuItems = isLoggedIn ? [
    { name: "Dashboard", href: "/dashboard", icon: FaChartLine },
    { name: "Profile", href: "/profile", icon: FaUser },
    { name: "Logout", href: "/logout", icon: FaSignOutAlt, danger: true },
  ] : [
    { name: "Login", href: "/login", icon: FaSignInAlt },
    { name: "Sign Up", href: "/register", icon: FaUserPlus },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
            : "bg-white/80 backdrop-blur-lg border-b border-gray-200/30"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3.5">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md"
            >
              <FaRocket className="text-white text-sm" />
            </motion.div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              StartupOps
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-all font-medium text-sm group rounded-lg border border-transparent hover:border-blue-100 hover:bg-blue-50/50"
              >
                <span className="flex items-center gap-2">
                  <link.icon className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3">
            
            {/* GET STARTED BUTTON - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Link
                to="/get-started"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  <HiSparkles className="text-sm" />
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>

            {/* USER MENU DROPDOWN */}
            <div className="relative user-menu-container hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isUserMenuOpen
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-2 border-blue-600 shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <FaUser className="text-base" />
              </motion.button>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {/* USER INFO - Only if logged in */}
                      {isLoggedIn && (
                        <>
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john@example.com</p>
                          </div>
                        </>
                      )}

                      {/* MENU ITEMS */}
                      {userMenuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsUserMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 transition-all ${
                              item.danger
                                ? "text-red-600 hover:bg-red-50 hover:border-l-4 hover:border-l-red-500"
                                : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:border-l-4 hover:border-l-blue-500"
                            }`}
                          >
                            <item.icon className="text-sm" />
                            <span className="text-sm font-medium">{item.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* BOTTOM ACCENT */}
                    <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* MOBILE MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* MOBILE MENU HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <FaRocket className="text-white text-sm" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    StartupOps
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>

              {/* USER INFO - Mobile */}
              {isLoggedIn && (
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <FaUser className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-600">john@example.com</p>
                    </div>
                  </div>
                </div>
              )}

              {/* MOBILE NAV LINKS */}
              <div className="py-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:border-l-4 hover:border-l-blue-500 transition-all"
                  >
                    <link.icon className="text-base" />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-gray-200 mx-6"></div>

              {/* USER MENU ITEMS - Mobile */}
              <div className="py-4">
                {userMenuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + index) * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-6 py-4 transition-all ${
                        item.danger
                          ? "text-red-600 hover:bg-red-50 hover:border-l-4 hover:border-l-red-500"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:border-l-4 hover:border-l-blue-500"
                      }`}
                    >
                      <item.icon className="text-base" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* MOBILE CTA BUTTON */}
              <div className="p-6 border-t border-gray-200">
                <Link
                  to="/get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <HiSparkles />
                  Get Started Free
                </Link>
              </div>

              {/* GRADIENT ACCENT */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;