import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {

  return (
    <div className="app">
        <Router>
          <header>
            <h1>Weightlifting Tracker</h1>
            <Navigation />
          </header>
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/add-exercise" element={ <AddExercisePage />}></Route>
              <Route path="/edit-exercise/:id" element={ <EditExercisePage />}></Route>
            </Routes>
          </main>

          <footer>
            <p>© Tyler Grzymalski 2025 </p>
          </footer>
        </Router>
    </div>
  );
}

export default App;