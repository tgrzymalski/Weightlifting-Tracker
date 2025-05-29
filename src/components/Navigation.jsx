import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home |</Link>
      <Link to="/add-exercise">  Add an Exercise</Link>
    </nav>
  );
}

export default Navigation;