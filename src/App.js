import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { PerfumeList } from "./components/PerfumeList/PerfumesList";
import { Header } from "./components/Header/Header";
import { FavoritesList } from "./components/FavoritesList/FavoritesList";
import { getPerfumesAPI } from "./api/getPerfumesAPI";
import { getFavoritesAPI } from "./api/getFavoritesAPI";
import { addFavoriteAPI } from "./api/addFavoriteAPI";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState("perfumes");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getPerfumesAPI().then(setPerfumes).catch(console.log);
    getFavoritesAPI().then(setFavorites).catch(console.log);
  }, []);

  const handleAddToFavorites = async (perfume) => {
    try {
      await addFavoriteAPI(perfume);
      const updatedFavorites = await getFavoritesAPI();
      setFavorites(updatedFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    if (!email) {
      alert("Enter your email before closing the form!");
      return;
    }
    setShowModal(false);
  };

  const totalQuantity = favorites.reduce(
    (sum, item) => Number(sum) + (item.quantity || 1),
    0
  );
  const totalPrice = favorites.reduce(
    (sum, item) => sum + (item.quantity || 1) * parseFloat(item.price),
    0
  );

  return (
    <div className="App">
      <Header onPageChange={setCurrentPage} onOpenModal={handleOpenModal} />
      {currentPage === "perfumes" ? (
        <PerfumeList
          perfumes={perfumes}
          onAddToFavorites={handleAddToFavorites}
        />
      ) : (
        <FavoritesList />
      )}
      {showModal && (
        <Modal
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          email={email}
          setEmail={setEmail}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
