import './App.css';
import { LandingPageHeader } from './components/Header/LandingPageHeader'
import { Hero } from './components/Hero/index.jsx';
import { Features } from './components/Features/index.jsx';
import { Login } from '../Login/index.jsx';

export function Landing() {
  return (
    <div>
      <LandingPageHeader />
      <Hero 
        title="Get Premium free for 7 days"
        amount={'$232'}/>
      <Features />
      <Login />
    </div>
  );
}

// returns JSX, and the naming is PascalCase
// This is a functional component
// Component name must be written in PascalCase
// NavigationBar

// not navigationbar, navigation-bar, navigation_bar

