"use client";

import { useState } from "react";
import logo from "../assets/Logo.png";

interface NavigationProps {
  onRegisterClick: () => void;
}

export default function Navigation({ onRegisterClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    onRegisterClick();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-3 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img
            src={logo || "/placeholder.svg"}
            alt="Spirit Youth Conference Logo"
            className="h-8 w-auto inline-block"
          ></img>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home Page
          </button>
          <button
            onClick={() => scrollToSection("image-section")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About The Meeting
          </button>
          <button
            onClick={() => scrollToSection("newsletter")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onRegisterClick}
            className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors text-sm"
          >
            Register
          </button>
          <button
            onClick={() => scrollToSection("newsletter")}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm"
          >
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12M6 12l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon (Three Lines)
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            {/* Mobile Navigation Links */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left px-2 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
            >
              Home Page
            </button>
            <button
              onClick={() => scrollToSection("image-section")}
              className="text-left px-2 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
            >
              About The Meeting
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className="text-left px-2 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-left px-2 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact Us
            </button>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
              <button
                onClick={handleRegisterClick}
                className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors text-sm text-center"
              >
                Register
              </button>
              <button
                onClick={() => scrollToSection("newsletter")}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm text-center"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
