import "./App.css";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
