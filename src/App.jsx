import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditActivityForm from "./components/Form/EditActivityForm";
// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editActivity" element={<EditActivityForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
