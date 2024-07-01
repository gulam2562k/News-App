import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />

          {/* category */}
          <Route path="/category/:slug" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
