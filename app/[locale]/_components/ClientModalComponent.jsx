"use client";

import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Image from "next/image";
import popUp from "../../../public/popUp.jpeg";

const ClientModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleClose}>
      <Image src={popUp} width={600} height={800} alt="popup" />
    </Modal>
  );
};

export default ClientModalComponent;
