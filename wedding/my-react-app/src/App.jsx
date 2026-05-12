import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Aboutpage from "./Components/AboutPage/Aboutpage";
import Wedding from "./Components/Weddingpage/Wedding";
import Gallery from "./Components/Gallery/Gallery";
import Costume from "./Components/Costumes/Costume";
import Login from "./Components/Login/Login";
import Sign from "./Components/Sign/Sign";
import { Routes, Route } from "react-router-dom";
import FaqSection from "./Components/Faqpage/Faqq";
import Faqcontent from "./Components/Faqpage/Faqcontent";
import Hostsec from "./Components/Host/Hostsec";
import Blogpage from "./Components/Blogpage/Blogpage";
import Subblog from "./Components/Subblog/Subblog";
import Subblogss from "./Components/Subblogs/Subblogss";
import Christianweds from "./Components/Celebrations/Choose";
import Christians from "./Components/Celebrations/Celebrations";
import Contacted from "./Components/Contacting/Contacted";
import Howhost from "./Components/Host/Howhost";
import Howtohost from "./Components/Howhost/Howtohost";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/faqqq" element={<Faqcontent />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/costumes" element={<Costume />} /> */}
        <Route path="/host" element={<Hostsec />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blogs" element={<Subblog />} />
        <Route path="/blogss" element={<Subblogss />} />
        <Route path="/christ" element={<Christians />} />
        <Route path="/contact" element={<Contacted />} />
        <Route path="/howhost" element={<Howtohost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
