import './App.css';
import { LandingPageHeader } from './components/Header/LandingPageHeader'
import { Hero } from './components/Hero/index.jsx';

export function App() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
    </div>
  );
}

// returns JSX, and the naming is PascalCase
// This is a functional component
// Component name must be written in PascalCase
// NavigationBar

// not navigationbar, navigation-bar, navigation_bar


