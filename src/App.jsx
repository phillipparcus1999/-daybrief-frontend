// src/App.jsx  (lives in src/)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext.jsx";

// shared UI (now in components/)
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProtectedPaidRoute from "./components/ProtectedPaidRoute.jsx";
import SiteBanner from "./components/SiteBanner.jsx";
import HeadTags from "./components/HeadTags.jsx";

// pages (now in components/)
import Home from "./components/Home.jsx";
import Pricing from "./components/Pricing.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Lines from "./components/Lines.jsx";
import AccountBilling from "./components/AccountBilling.jsx";
import OrgBroadcast from "./components/OrgBroadcast.jsx";
import Terms from "./components/Terms.jsx";
import Privacy from "./components/Privacy.jsx";
import Contact from "./components/Contact.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Paywall from "./components/Paywall.jsx";
import NotFound from "./components/NotFound.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* Pre-live banner + noindex meta */}
      <SiteBanner />
      <HeadTags />

      <AuthProvider>
        <Header />

        <div className="app">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paywall" element={<Paywall />} />

            {/* Auth-required (trial allowed while pre-live via ProtectedPaidRoute) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedPaidRoute>
                  <Dashboard />
                </ProtectedPaidRoute>
              }
            />
            <Route
              path="/lines"
              element={
                <ProtectedPaidRoute>
                  <Lines />
                </ProtectedPaidRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountBilling />
                </ProtectedRoute>
              }
            />
            <Route
              path="/broadcasts"
              element={
                <ProtectedPaidRoute>
                  <ProtectedRoute requirePlan="org">
                    <OrgBroadcast />
                  </ProtectedRoute>
                </ProtectedPaidRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
