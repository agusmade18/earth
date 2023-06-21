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

import Company from "../user/new-template/menus/Company";
import ActualIntro from "../user/new-template/menus/ActualIntro";
import Inquiry from "../user/new-template/menus/Inquiry";
import QA from "../user/new-template/menus/QA";
import RecruitmenInfo from "../user/new-template/menus/RecruitmenInfo";
import RecruitmentPartner from "../user/new-template/menus/RecruitmentPartner";
import Service from "../user/new-template/menus/Service";
import Home from "../user/new-template/menus/Home";

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

      {/* <Route path="/" exact element={<Dashboard />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/constructions" exact element={<Constructions />} />
      <Route path="/qa" exact element={<QaPage />} />
      <Route path="/contact" exact element={<Contact />} /> */}

      {/* ---------------------------------------------- */}
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/company" exact element={<Company />} />
      <Route path="/service" exact element={<Service />} />
      <Route path="/actual-introduction" exact element={<ActualIntro />} />
      <Route
        path="/recruitment-information"
        exact
        element={<RecruitmenInfo />}
      />
      <Route
        path="/recruitment-partner"
        exact
        element={<RecruitmentPartner />}
      />
      <Route path="/QA" exact element={<QA />} />
      <Route path="/inquiry" exact element={<Inquiry />} />
    </Routes>
  );
}
export default PublicRoutes;
