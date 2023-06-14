//import react router dom
import { Routes, Route } from "react-router-dom";
//import component private routes
import PrivateRoute from "./PrivateRoutes";

import Dashboard from "../user/pages/Dashboard";
import Login from "../admin/Login";
import DashboardAdmin from "../admin/pages/Dashboard";
import CarouselAdmin from "../admin/pages/carousel";
import HomeAdmin from "../admin/pages/home";
import QAAdmin from "../admin/pages/QA";
import ConstructionAdmin from "../admin/pages/construction";

import Constructions from "../user/pages/Constructions";
import QaPage from "../user/pages/QaPage";
import Contact from "../user/pages/Contact";

import New from "../user/new-template";

function PublicRoutes() {
  return (
    <Routes>
      {/* Route Admin */}

      <Route path="/admin/login" exact element={<Login />} />

      {/* private route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        exact
        element={
          <PrivateRoute>
            <HomeAdmin />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        exact
        element={
          <PrivateRoute>
            <HomeAdmin />
          </PrivateRoute>
        }
      />

      {/* Carousel */}
      <Route
        path="/admin/carousel"
        exact
        element={
          <PrivateRoute>
            <CarouselAdmin />
          </PrivateRoute>
        }
      />

      {/* Home */}
      <Route
        path="/admin/home"
        exact
        element={
          <PrivateRoute>
            <HomeAdmin />
          </PrivateRoute>
        }
      />

      {/* QA */}
      <Route
        path="/admin/QA"
        exact
        element={
          <PrivateRoute>
            <QAAdmin />
          </PrivateRoute>
        }
      />

      {/* Construction */}
      <Route
        path="/admin/construction"
        exact
        element={
          <PrivateRoute>
            <ConstructionAdmin />
          </PrivateRoute>
        }
      />

      {/* ---------------------------------------------- */}

      <Route path="/" exact element={<Dashboard />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/constructions" exact element={<Constructions />} />
      <Route path="/qa" exact element={<QaPage />} />
      <Route path="/contact" exact element={<Contact />} />

      {/* ---------------------------------------------- */}
      <Route path="/new" exact element={<New />} />
    </Routes>
  );
}
export default PublicRoutes;
