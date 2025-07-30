"use client";

import type React from "react";
import { useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID, ID } from "../lib/appwrite";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    ministry: "",
    attendanceDays: [] as string[],
    immersionExplosive: "",
    numberOfChildren: "" as number | "", // Added for conditional input
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleCheckboxChange = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      attendanceDays: prev.attendanceDays.includes(day)
        ? prev.attendanceDays.filter((d) => d !== day)
        : [...prev.attendanceDays, day],
    }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.Name.trim()) {
      setError("Full Name is required.");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required.");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required.");
      return false;
    }
    if (!formData.gender) {
      setError("Please select your gender.");
      return false;
    }
    if (!formData.address.trim()) {
      setError("Address is required.");
      return false;
    }
    if (!formData.ministry.trim()) {
      setError("Ministry/Church field is required.");
      return false;
    }
    if (formData.attendanceDays.length === 0) {
      setError("Please select at least one attendance day.");
      return false;
    }
    if (!formData.immersionExplosive) {
      setError("Please answer the children attendance question.");
      return false;
    }
    // Conditional validation for numberOfChildren
    if (
      formData.immersionExplosive === "yes" &&
      (!formData.numberOfChildren || Number(formData.numberOfChildren) <= 0)
    ) {
      setError("Please enter a valid number of children (must be 1 or more).");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Create document in Appwrite
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          Name: formData.Name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          gender: formData.gender,
          address: formData.address.trim(),
          ministry: formData.ministry.trim(),
          attendanceDays: formData.attendanceDays,
          immersionExplosive: formData.immersionExplosive,
          numberOfChildren:
            formData.immersionExplosive === "yes"
              ? Number(formData.numberOfChildren)
              : null, // Send null if not applicable
          registrationDate: new Date().toISOString(),
        }
      );

      console.log("Document created successfully:", response);
      setIsSuccess(true);

      // Redirect to WhatsApp after 3 seconds
      setTimeout(() => {
        // Replace with your actual WhatsApp group link
        const whatsappLink =
          "https://whatsapp.com/channel/0029VbB17mtGk1FmihHB3k3g";
        window.open(whatsappLink, "_blank");

        // Close modal and reset form
        onClose();
        resetForm();
      }, 3000);
    } catch (error: any) {
      console.error("Registration failed:", error);

      // Handle specific Appwrite errors
      if (error.code === 409) {
        setError("A registration with this email already exists.");
      } else if (error.code === 401) {
        setError("Authentication failed. Please try again.");
      } else if (error.code === 400) {
        setError("Invalid data provided. Please check your information.");
      } else {
        setError("Registration failed. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      Name: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      ministry: "",
      attendanceDays: [],
      immersionExplosive: "",
      numberOfChildren: "", // Reset this field
    });
    setIsSuccess(false);
    setError("");
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      resetForm();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Register for Conference
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
              disabled={isSubmitting}
            >
              ×
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for registering for the Spirit Youth Conference.
                You'll be redirected to our WhatsApp channel shortly.
              </p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={isSubmitting}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  {/* <option value="other">Other</option> */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full address"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What Ministry/Church do you attend?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ministry"
                  value={formData.ministry}
                  onChange={handleInputChange}
                  placeholder="Enter your ministry/church or N/A"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Type "N/A" if you don't have one
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What days of spirit youth conference do you plan to attend?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    "Saturday, August 9th, 2025 (8:30 AM)",
                    "Sunday, August 10th, 2025 (3:00 PM)",
                  ].map((day) => (
                    <label key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.attendanceDays.includes(day)}
                        onChange={() => handleCheckboxChange(day)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        disabled={isSubmitting}
                      />
                      <span className="text-sm text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Select all that apply
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Will you be attending Spirit Youth Conference with your
                  children? <span className="text-red-500">*</span>
                </label>
                <select
                  name="immersionExplosive"
                  value={formData.immersionExplosive}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={isSubmitting}
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="no-children">I don't have children</option>
                </select>
              </div>

              {/* Conditional input for number of children */}
              {formData.immersionExplosive === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Children <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter number of children"
                    disabled={isSubmitting}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
