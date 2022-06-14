import React,{Suspense} from 'react';
import './App.css';
import {NavbarContainer} from "./Containers/Navbar/navbar.container";
import {HomePage} from "./Pages/home.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoadingContainer} from "./Containers/Loading/loading.container";
import {AboutPage} from "./Pages/About/about.page";
import {FooterContainer} from "./Containers/Footer/footer.container";
import {RoadmapPage} from "./Pages/Roadmap/roadmap.page";
import {NftTableContainer} from "./Containers/Nft/nftTable.container";
import {NftPage} from "./Pages/Nft/nft.page";

function App() {
  return (
    <div className="App">

        <Router>
            <NavbarContainer />
            <Routes>
                <Route path={"/"} element={<Suspense fallback={<LoadingContainer />}><HomePage /></Suspense>}/>
                <Route path={"/home"} element={<Suspense fallback={<LoadingContainer />}><HomePage /></Suspense>}/>
                <Route path={"/about"} element={<Suspense fallback={<LoadingContainer />}><AboutPage /></Suspense>} />
                <Route path={"/road-map"} element={<Suspense fallback={<LoadingContainer />}><RoadmapPage /></Suspense>} />
                <Route path={"/nft"} element={<Suspense fallback={<LoadingContainer />}><NftPage /></Suspense>} />
            </Routes>
        </Router>
        <FooterContainer />
    </div>
  );
}

export const isInViewport = (element:any) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default App;
