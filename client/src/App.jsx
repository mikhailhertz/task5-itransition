import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Header,
    Footer,
    NotFound,
    Home
} from "./components";

function App() {
    return (
        <div className="d-flex flex-column vh-100">
            <Router>
                <Header />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
