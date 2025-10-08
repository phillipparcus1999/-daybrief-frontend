// src/pages/SignUp.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SignupForm.css";
import { useAuth } from "../context/AuthContext.jsx";

// Display prices; Stripe comes later
const PRICES = {
  base:   { month: 7,  year: (7  * 12 * 0.85).toFixed(2) },
  pro:    { month: 10, year: (10 * 12 * 0.85).toFixed(2) },
  family: { month: 17, year: (17 * 12 * 0.85).toFixed(2) },
  org:    { month: 55, year: (55 * 12 * 0.85).toFixed(2) },
};

export default function SignUp() {
  const nav = useNavigate();
  const location = useLocation();
  const { signIn, setPlan } = useAuth();

  // Billing + plan (may be overridden by /pricing)
  const [billingInterval, setBillingInterval] = useState("month"); // 'month' | 'year'
  const [selectedPlan, setSelectedPlan] = useState("base");        // 'base'|'pro'|'family'|'org'
  const [showTime2, setShowTime2] = useState(false);

  // If /pricing sent state, adopt it on mount
  useEffect(() => {
    if (location.state) {
      if (location.state.plan) setSelectedPlan(location.state.plan);
      if (location.state.interval) setBillingInterval(location.state.interval);
    }
  // run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When plan changes, control messages_per_day + 2nd time visibility
  useEffect(() => {
    if (selectedPlan === "base") {
      setFormData(f => ({ ...f, messages_per_day: "1", time_2: "", custom_msg_2: "" }));
      setShowTime2(false);
    } else {
      setFormData(f => ({ ...f, messages_per_day: "2" }));
      setShowTime2(true);
    }
  }, [selectedPlan]);

  // Time picker options
  const HOURS   = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const MINUTES = useMemo(() => ["00","05","10","15","20","25","30","35","40","45","50","55"], []);
  const PERIODS = ["AM","PM"];
  const TIMEZONE_OPTIONS = [
    "America/Kentucky/Louisville", "America/New_York",
    "America/Chicago", "America/Denver",
    "America/Phoenix", "America/Los_Angeles",
    "America/Anchorage", "Pacific/Honolulu"
  ];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    nickname: "",
    phone: "",
    tz: "America/Kentucky/Louisville",
    messages_per_day: "1",
    time_1: "",
    time_2: "",
    custom_msg_1: "",
    custom_msg_2: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (name === "messages_per_day") {
      const two = value === "2";
      setShowTime2(two);
      if (!two) setFormData(p => ({ ...p, time_2: "", custom_msg_2: "" }));
    }
  };

  const parseTime = (timeString) => {
    if (!timeString) return { hour: "", minute: "00", period: "AM" };
    const match = timeString.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
    if (match) return { hour: match[1], minute: match[2], period: match[3] };
    return { hour: "", minute: "00", period: "AM" };
  };

  const handleTimeChange = (timeField, hour, minute, period) => {
    if (!hour || !minute || !period) return;
    const timeString = `${hour}:${minute} ${period}`;
    setFormData(prev => ({ ...prev, [timeField]: timeString }));
  };

  const TimePicker = ({ timeField, label, required = false }) => {
    const t = parseTime(formData[timeField]);
    return (
      <div className="form-group">
        <label>{label} {required && "*"}</label>
        <div className="time-picker">
          <select
            value={t.hour}
            onChange={(e) => handleTimeChange(timeField, e.target.value, t.minute, t.period)}
            className="time-select"
            required={required}
          >
            <option value="">Hour</option>
            {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
          </select>
          <span className="time-separator">:</span>
          <select
            value={t.minute}
            onChange={(e) => handleTimeChange(timeField, t.hour, e.target.value, t.period)}
            className="time-select"
            required={required}
          >
            {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            value={t.period}
            onChange={(e) => handleTimeChange(timeField, t.hour, t.minute, e.target.value)}
            className="time-select period-select"
            required={required}
          >
            {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <small className="help-text">
          {timeField === "time_1" ? "When should we send your first (or only) message?" : "When should we send your second message?"}
        </small>
      </div>
    );
  };

  // Basic client validation (alerts for now; inline errors can be added later)
  const validate = () => {
    if (!formData.email || !formData.password || !formData.name || !formData.phone || !formData.consent) {
      alert("Please fill in email, password, name, phone and agree to the terms.");
      return false;
    }
    const digits = formData.phone.replace(/\D/g, "");
    if (!/^[+]?1?\d{10}$/.test(digits)) {
      alert("Please enter a valid 10-digit US phone number.");
      return false;
    }
    if (!formData.time_1) {
      alert("Please select a time for your first message.");
      return false;
    }
    if (showTime2 && !formData.time_2) {
      alert("Please select a time for your second message.");
      return false;
    }
    if (formData.custom_msg_1 && formData.custom_msg_1.length > 100) {
      alert("Custom message for Time #1 must be 100 characters or less.");
      return false;
    }
    if (formData.custom_msg_2 && formData.custom_msg_2.length > 100) {
      alert("Custom message for Time #2 must be 100 characters or less.");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // Mock sign-in (works while MOCK_AUTH=true in apiClient.js)
      await signIn(formData.email, formData.password);

      // Record selected plan in context (trialing until Stripe)
      setPlan({
        plan_code: selectedPlan,
        billing_interval: billingInterval,
        status: "trialing",
      });

      // Later: POST full payload to your backend /signup
      nav("/dashboard", { replace: true });
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <main className="signup-page section-card">
      <div className="signup-header">
        <h1>Start your DayBrief trial</h1>
        <p>Choose a plan, set your times, and you’re done. Cancel anytime.</p>
      </div>

      {/* Plan + billing */}
      <div className="plan-picker">
        <div className="billing-toggle">
          <button
            type="button"
            className={billingInterval === "month" ? "toggle active" : "toggle"}
            onClick={() => setBillingInterval("month")}
          >
            Billed monthly
          </button>
          <button
            type="button"
            className={billingInterval === "year" ? "toggle active" : "toggle"}
            onClick={() => setBillingInterval("year")}
            title="15% off"
          >
            Billed yearly • 15% off
          </button>
        </div>

        <div className="plans-grid">
          {["base","pro","family","org"].map(code => (
            <label key={code} className={`plan-card ${selectedPlan === code ? "selected" : ""}`}>
              <input
                type="radio"
                name="plan"
                value={code}
                checked={selectedPlan === code}
                onChange={() => setSelectedPlan(code)}
              />
              <div className="plan-name">
                {code === "base" && "Base"}
                {code === "pro" && "Pro"}
                {code === "family" && "Family"}
                {code === "org" && "Organization"}
              </div>
              <div className="plan-price">
                ${billingInterval === "month" ? PRICES[code].month : PRICES[code].year}
                <span className="plan-interval">/{billingInterval === "month" ? "mo" : "yr"}</span>
              </div>
              <ul className="plan-points">
                {code === "base" && <>
                  <li>1 message/day</li>
                  <li>1 line</li>
                  <li>Custom or library</li>
                </>}
                {code === "pro" && <>
                  <li>2 messages/day</li>
                  <li>1 line</li>
                  <li>Custom or library</li>
                </>}
                {code === "family" && <>
                  <li>2 messages/day</li>
                  <li>Up to 3 lines</li>
                  <li>Custom or library</li>
                </>}
                {code === "org" && <>
                  <li>2 messages/day</li>
                  <li>Up to 10 lines</li>
                  <li>Coordinated sends (soon)</li>
                </>}
              </ul>
            </label>
          ))}
        </div>
      </div>

      {/* Signup form */}
      <form onSubmit={onSubmit} className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nickname</label>
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="Optional" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g., 2125551234" required />
            <small className="help-text">10-digit US number</small>
          </div>
          <div className="form-group">
            <label>Time Zone *</label>
            <select name="tz" value={formData.tz} onChange={handleChange} required>
              {TIMEZONE_OPTIONS.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
          </div>
        </div>

        <TimePicker timeField="time_1" label="Time #1" required={true} />
        {showTime2 && <TimePicker timeField="time_2" label="Time #2" required={true} />}

        <div className="form-row">
          <div className="form-group">
            <label>Custom Message for Time #1 (Optional)</label>
            <textarea
              name="custom_msg_1"
              value={formData.custom_msg_1}
              onChange={handleChange}
              placeholder="Leave blank for our daily library, or write your own"
              maxLength="100"
              rows="3"
            />
            <small className="help-text">{formData.custom_msg_1.length}/100 characters</small>
          </div>

          {showTime2 && (
            <div className="form-group">
              <label>Custom Message for Time #2 (Optional)</label>
              <textarea
                name="custom_msg_2"
                value={formData.custom_msg_2}
                onChange={handleChange}
                placeholder="Leave blank for our daily library, or write your own"
                maxLength="100"
                rows="3"
              />
              <small className="help-text">{formData.custom_msg_2.length}/100 characters</small>
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
            I agree to receive SMS messages and have read the Terms of Service and Privacy Policy *
          </label>
        </div>

        <button type="submit" className="cta-button">Start free trial</button>
      </form>
    </main>
  );
}

