import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
