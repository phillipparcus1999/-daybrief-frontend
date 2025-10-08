// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProtectedPaidRoute from "./components/ProtectedPaidRoute.jsx";
import SiteBanner from "./components/SiteBanner.jsx";
import HeadTags from "./components/HeadTags.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Lines from "./pages/Lines.jsx";
import AccountBilling from "./pages/AccountBilling.jsx";
import OrgBroadcast from "./pages/OrgBroadcast.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Contact from "./pages/Contact.jsx";
import Waitlist from "./pages/Waitlist.jsx";
import Paywall from "./pages/Paywall.jsx";
import NotFound from "./pages/NotFound.jsx";

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
