
import './App.css';
import SignupForm from './components/SignupForm'; // Import the new component

function App() {
  return (
    <div style={{ width: '100%', maxWidth: '500px', padding: '20px' }}>
      <h1>DayBrief Signup</h1>
      <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '-5px' }}>
        Sign up to receive 1-2 daily motivational text messages at times you choose.
      </p>
      
      <SignupForm /> {/* Use the component here */}

    </div>
  );
}

export default App;