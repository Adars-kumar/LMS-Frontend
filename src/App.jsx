import "./App.css";

import { useEffect } from "react";
import toast from "react-hot-toast";

import Footer from "./components/footer";

function App() {
  useEffect(() => {
    toast.success("Hello");
  });

  return (
    <Footer />
  );
}

export default App;
