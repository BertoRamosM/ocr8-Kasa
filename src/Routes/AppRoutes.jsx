import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/APropos/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalStyles from "../style/GlobalStyle";
import useFetchData from "../hooks/useFetch";
useFetchData;
import FichesLogement from "../pages/FichesLogements/FichesLogement";
import { useState, useEffect } from "react";

const AppRoutes = () => {
  const { data } = useFetchData("src/data/data.json");

  const [selectedLogementId, setSelectedLogementId] = useState(null);

  //capture the id from the Cards and store in local
  const handleCardClick = (e, id) => {
    setSelectedLogementId(id);
    //store the id to persist data
    localStorage.setItem("selectedId", id);
  };

  useEffect(() => {
    //get the id on new session
    const storedId = localStorage.getItem("selectedId");
    if (storedId) {
      setSelectedLogementId(storedId);
    }
  }, []);

  //wait to the data to loaded!!!
  if (!data) {
    return null;
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleCardClick={handleCardClick}
              selectedLogementId={selectedLogementId}
            />
          }
        />

        <Route path="/logement">
          {data.map((logement) => (
            <Route
              key={logement.id}
              path={`/logement/:id`}
              element={
                <FichesLogement
                  data={data}
                  selectedLogementId={selectedLogementId}
                />
              }
            />
          ))}
        </Route>

        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<ErrorPage to="/notfound" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
