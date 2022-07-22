import Weather from './Weather';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <div className="weather-background">
        <Weather />
      </div>
      
    </div>
  );
}

export default App;
