import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    phone: '',
    tz: 'Eastern Time',
    messages_per_day: '1',
    time_1: '',
    time_2: '',
    custom_msg_1: '',
    custom_msg_2: '',
    consent: false,
  });

  const [showTime2, setShowTime2] = useState(false);
  const [showCustom2, setShowCustom2] = useState(false);

  // Options
  const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
  const MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  const PERIODS = ['AM', 'PM'];
  const TIMEZONE_OPTIONS = [
    'Eastern Time',
    'Central Time',
    'Mountain Time',
    'Arizona Time',
    'Pacific Time',
    'Alaska Time',
    'Hawaii Time',
  ];

  // Handle generic changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === 'messages_per_day') {
      const two = value === '2';
      setShowTime2(two);
      setShowCustom2(two);

      if (!two) {
        setFormData((prev) => ({
          ...prev,
          time_2: '',
          custom_msg_2: '',
        }));
      }
    }
  };

  // Time parsing
  const handleTimeChange = (field, hour, minute, period) => {
    if (!hour || !minute || !period) return;
    setFormData((prev) => ({
      ...prev,
      [field]: `${hour}:${minute} ${period}`,
    }));
  };

  const parseTime = (timeString) => {
    if (!timeString) return { hour: '', minute: '00', period: 'AM' };
    const match = timeString.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
    return match
      ? { hour: match[1], minute: match[2], period: match[3] }
      : { hour: '', minute: '00', period: 'AM' };
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.consent) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }
    if (!/^[+]?1?\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.time_1 || (showTime2 && !formData.time_2)) {
      alert('Please select message times.');
      return;
    }
    if (formData.custom_msg_1.length > 100 || formData.custom_msg_2.length > 100) {
      alert('Custom messages must be 100 characters or less.');
      return;
    }

    // Send data
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          name: '',
          nickname: '',
          email: '',
          phone: '',
          tz: 'Eastern Time',
          messages_per_day: '1',
          time_1: '',
          time_2: '',
          custom_msg_1: '',
          custom_msg_2: '',
          consent: false,
        });
        setShowTime2(false);
        setShowCustom2(false);
      } else {
        alert(`Error: ${result.detail || 'Signup failed'}`);
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Network error. Please try again.');
    }
  };

  // Time picker component
  const TimePicker = ({ timeField, label, required = false }) => {
    const time = parseTime(formData[timeField]);
    return (
      <div className="form-group fade-in">
        <label>{label} {required && '*'}</label>
        <div className="time-picker">
          <select
            className="time-select"
            value={time.hour}
            onChange={(e) => handleTimeChange(timeField, e.target.value, time.minute, time.period)}
            required={required}
          >
            <option value="">Hour</option>
            {HOURS.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
          <span className="time-separator">:</span>
          <select
            className="time-select"
            value={time.minute}
            onChange={(e) => handleTimeChange(timeField, time.hour, e.target.value, time.period)}
            required={required}
          >
            {MINUTES.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select
            className="time-select period-select"
            value={time.period}
            onChange={(e) => handleTimeChange(timeField, time.hour, time.minute, e.target.value)}
            required={required}
          >
            {PERIODS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <small className="help-text">
          {timeField === 'time_1'
            ? 'When should we send your first (or only) message?'
            : 'When should we send your second message?'}
        </small>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form" aria-label="Signup Form">
      {/* Personal Info */}
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="nickname">Nickname</label>
        <input id="nickname" name="nickname" type="text" value={formData.nickname} onChange={handleChange} placeholder="We'll use this if provided" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Optional - for account recovery only" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="e.g., 2125551234" />
        <small className="help-text">10-digit US number</small>
      </div>

      {/* Timezone */}
      <div className="form-group">
        <label htmlFor="tz">US Time Zone *</label>
        <select id="tz" name="tz" value={formData.tz} onChange={handleChange} required>
          {TIMEZONE_OPTIONS.map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </div>

      {/* Frequency */}
      <div className="form-group">
        <label>How many messages per day? *</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="messages_per_day" value="1" checked={formData.messages_per_day === '1'} onChange={handleChange} required />
            1 message per day
          </label>
          <label>
            <input type="radio" name="messages_per_day" value="2" checked={formData.messages_per_day === '2'} onChange={handleChange} />
            2 messages per day
          </label>
        </div>
      </div>

      {/* Time pickers */}
      <TimePicker timeField="time_1" label="Time #1" required />
      {showTime2 && <TimePicker timeField="time_2" label="Time #2" required />}

      {/* Custom messages */}
      <div className="form-group">
        <label htmlFor="custom_msg_1">Custom Message for Time #1 (Optional)</label>
        <textarea
          id="custom_msg_1"
          name="custom_msg_1"
          value={formData.custom_msg_1}
          onChange={handleChange}
          maxLength="100"
          rows="3"
          placeholder="Leave blank for our daily library, or write your own"
        />
        <small className="help-text">{formData.custom_msg_1.length}/100 characters</small>
      </div>

      {showCustom2 && (
        <div className="form-group">
          <label htmlFor="custom_msg_2">Custom Message for Time #2 (Optional)</label>
          <textarea
            id="custom_msg_2"
            name="custom_msg_2"
            value={formData.custom_msg_2}
            onChange={handleChange}
            maxLength="100"
            rows="3"
            placeholder="Leave blank for our daily library, or write your own"
          />
          <small className="help-text">{formData.custom_msg_2.length}/100 characters</small>
        </div>
      )}

      {/* Consent */}
      <div className="form-group">
        <label className="checkbox-label">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
          I agree to receive SMS messages and have read the Terms of Service and Privacy Policy *
        </label>
      </div>

      {/* Submit */}
      <button type="submit" className="submit-button">Sign Up</button>
    </form>
  );
};

export default SignupForm;
