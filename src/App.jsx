import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext.jsx";

// shared UI
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SiteBanner from "./components/SiteBanner.jsx";
import HeadTags from "./components/HeadTags.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProtectedPaidRoute from "./components/ProtectedPaidRoute.jsx";

// routed pages
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
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  return (
    <BrowserRouter>
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
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* Auth required */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
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
                <ProtectedRoute requirePlan="org">
                  <OrgBroadcast />
                </ProtectedRoute>
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
