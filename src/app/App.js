import logo from '../Frame.svg';
import './App.css';
import {LandingPageHeader} from './components/LandingPageHeader'
import {HeroSection} from './components/HeroSection'

export function App() {
  return (
    <div>
      <LandingPageHeader />
      <HeroSection />
    </div>
  );
}

// returns JSX, and the naming is PascalCase
// This is a functional component
// Component name must be written in PascalCase
// NavigationBar

// not navigationbar, navigation-bar, navigation_bar


