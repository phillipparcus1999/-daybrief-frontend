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

    // Time picker options
    const HOURS = Array.from({ length: 12 }, (_, i) => i + 1); // 1-12
    const MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    const PERIODS = ['AM', 'PM'];

    const TIMEZONE_OPTIONS = [
        "Eastern Time",
        "Central Time", 
        "Mountain Time",
        "Arizona Time",
        "Pacific Time",
        "Alaska Time",
        "Hawaii Time"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));

        // Handle conditional fields
        if (name === 'messages_per_day') {
            const showSecond = value === '2';
            setShowTime2(showSecond);
            setShowCustom2(showSecond);
            
            // Clear time_2 and custom_msg_2 if switching to 1 message
            if (value === '1') {
                setFormData(prevState => ({
                    ...prevState,
                    time_2: '',
                    custom_msg_2: ''
                }));
            }
        }
    };

    const handleTimeChange = (timeField, hour, minute, period) => {
        if (!hour || !minute || !period) return;
        
        const timeString = `${hour}:${minute} ${period}`;
        setFormData(prevState => ({
            ...prevState,
            [timeField]: timeString
        }));
    };

    const parseTime = (timeString) => {
        if (!timeString) return { hour: '', minute: '00', period: 'AM' };
        
        const match = timeString.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
        if (match) {
            return {
                hour: match[1],
                minute: match[2],
                period: match[3]
            };
        }
        return { hour: '', minute: '00', period: 'AM' };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.name || !formData.phone || !formData.consent) {
            alert('Please fill in all required fields and agree to the terms.');
            return;
        }
    
        // Validate phone number format
        const phoneRegex = /^[+]?1?\d{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
    
        // Validate time selections
        if (!formData.time_1) {
            alert('Please select a time for your first message.');
            return;
        }
    
        if (showTime2 && !formData.time_2) {
            alert('Please select a time for your second message.');
            return;
        }
    
        // Validate custom message lengths
        if (formData.custom_msg_1 && formData.custom_msg_1.length > 100) {
            alert('Custom message for Time #1 must be 100 characters or less.');
            return;
        }
        if (formData.custom_msg_2 && formData.custom_msg_2.length > 100) {
            alert('Custom message for Time #2 must be 100 characters or less.');
            return;
        }
    
        try {
            // Send data to FastAPI backend
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert(result.message);
                // Reset form
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
        } catch (error) {
            console.error('Signup error:', error);
            alert('Network error. Please try again.');
        }
    };

    const TimePicker = ({ timeField, label, required = false }) => {
        const timeData = parseTime(formData[timeField]);
        
        return (
            <div className="form-group">
                <label>{label} {required && '*'}</label>
                <div className="time-picker">
                    <select
                        value={timeData.hour}
                        onChange={(e) => handleTimeChange(timeField, e.target.value, timeData.minute, timeData.period)}
                        className="time-select"
                        required={required}
                    >
                        <option value="">Hour</option>
                        {HOURS.map(hour => (
                            <option key={hour} value={hour}>{hour}</option>
                        ))}
                    </select>
                    <span className="time-separator">:</span>
                    <select
                        value={timeData.minute}
                        onChange={(e) => handleTimeChange(timeField, timeData.hour, e.target.value, timeData.period)}
                        className="time-select"
                        required={required}
                    >
                        {MINUTES.map(minute => (
                            <option key={minute} value={minute}>{minute}</option>
                        ))}
                    </select>
                    <select
                        value={timeData.period}
                        onChange={(e) => handleTimeChange(timeField, timeData.hour, timeData.minute, e.target.value)}
                        className="time-select period-select"
                        required={required}
                    >
                        {PERIODS.map(period => (
                            <option key={period} value={period}>{period}</option>
                        ))}
                    </select>
                </div>
                <small className="help-text">
                    {timeField === 'time_1' 
                        ? 'When should we send your first (or only) message?' 
                        : 'When should we send your second message?'
                    }
                </small>
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="We'll use this if provided"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Optional - for account recovery only"
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2125551234"
                />
                <small className="help-text">10-digit US number</small>
            </div>

            <div className="form-group">
                <label htmlFor="tz">US Time Zone *</label>
                <select
                    id="tz"
                    name="tz"
                    value={formData.tz}
                    onChange={handleChange}
                    required
                >
                    {TIMEZONE_OPTIONS.map(tz => (
                        <option key={tz} value={tz}>{tz}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>How many messages per day? *</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="messages_per_day"
                            value="1"
                            checked={formData.messages_per_day === '1'}
                            onChange={handleChange}
                            required
                        />
                        1 message per day
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="messages_per_day"
                            value="2"
                            checked={formData.messages_per_day === '2'}
                            onChange={handleChange}
                        />
                        2 messages per day
                    </label>
                </div>
            </div>

            <TimePicker timeField="time_1" label="Time #1" required={true} />

            {showTime2 && (
                <TimePicker timeField="time_2" label="Time #2" required={true} />
            )}

            <div className="form-group">
                <label htmlFor="custom_msg_1">Custom Message for Time #1 (Optional)</label>
                <textarea
                    id="custom_msg_1"
                    name="custom_msg_1"
                    value={formData.custom_msg_1}
                    onChange={handleChange}
                    placeholder="Leave blank for our daily library, or write your own"
                    maxLength="100"
                    rows="3"
                />
                <small className="help-text">
                    {formData.custom_msg_1.length}/100 characters
                </small>
            </div>

            {showCustom2 && (
                <div className="form-group">
                    <label htmlFor="custom_msg_2">Custom Message for Time #2 (Optional)</label>
                    <textarea
                        id="custom_msg_2"
                        name="custom_msg_2"
                        value={formData.custom_msg_2}
                        onChange={handleChange}
                        placeholder="Leave blank for our daily library, or write your own"
                        maxLength="100"
                        rows="3"
                    />
                    <small className="help-text">
                        {formData.custom_msg_2.length}/100 characters
                    </small>
                </div>
            )}

            <div className="form-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                    />
                    I agree to receive SMS messages and have read the Terms of Service and Privacy Policy *
                </label>
            </div>

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;