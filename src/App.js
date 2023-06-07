import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import ListsComponent from "./Components/HotelsList";
import HotelDetails from "./Components/HotelDetails";
function App() {
  return <BrowserRouter>
<Routes>
  <Route path="/" element={<HomeComponent/>}/>
  <Route path="/hotel" element={<ListsComponent/>}/>
  <Route path="/hotel/:id" element={<HotelDetails/>}/>
</Routes>
  </BrowserRouter>;
}

export default App;
