import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";
import Watch from "./pages/Watch/Watch";
import Tv from "./pages/Tv/Tv";
import Music from "./pages/Music/Music";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Cart";
import Four04 from "./pages/Four04/Four04";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import SingleAppleProduct from "./pages/SingleAppleProduct/SingleAppleProduct";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<SingleAppleProduct />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
