import { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">

      <Header
        search={search}
        setSearch={setSearch}
      />

      <Main search={search} />

      <Footer />

    </div>
  );
}

export default App;