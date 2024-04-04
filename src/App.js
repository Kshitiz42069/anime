import Hero from "./Pages/Hero";
import Nav from "./Pages/Nav";
import TopWatches from "./Pages/TopWatches";
import Contact from "./Pages/Contact";
import Genre from "./Pages/Genre";
import Summary from "./Pages/Summary";
import News from "./Pages/News";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import { useState } from "react";
import Loader from "./Pages/Loader";
import Discover from "./Pages/Discover";


function App() {
  const [countcart, setCountcart] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showVideo, setShowVideo] = useState(true);


  const addToCart = (item) => {
    setCountcart(countcart+1);
    setSelectedItems([...selectedItems, item]);
  }

  const removeFromCart = (itemToRemove) => {
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setSelectedItems(updatedItems);
    setCountcart(countcart-1);
  };

  const handleVideoEnd = () => {
    setShowVideo(false); 
  };
  return (
    <Router>
      <div className="App font-ab">

        { showVideo ? (
          <Loader onvideoEnd={handleVideoEnd}/>
        ):(
          <Routes>
            <Route path="/home" element={[<Nav countcart={countcart}/>,<Hero/>,<TopWatches/>,<Genre/>,<Contact/>]}/>
            <Route path="/news" element={[<Nav countcart={countcart}/>,<News/>]}/>
            <Route path="/summary" element={[<Nav countcart={countcart}/>,<Summary/>]}/>
            <Route path="/cart" element={[<Nav countcart={countcart}/>,<Cart selectedItems={selectedItems} removeFromCart={removeFromCart}/>]}/>
            <Route path="/products" element={[<Nav countcart={countcart}/>,<Products addToCart={addToCart}/>]}/>
            <Route path="/discover" element={[<Nav countcart={countcart}/>,<Discover/>]}/>
          </Routes>
        )
        }
      </div>
    </Router>
  );
}

export default App;
