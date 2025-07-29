import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onRegisterClick={openModal} />
      <Hero onRegisterClick={openModal} />
      <ImageSection />
      <Newsletter />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
