import './App.css';
import { Login } from './pages/Login/index'

import Landing  from './pages/Landing'

export function App() {
  const isLogin = new URLSearchParams(window.location.search)
  if (isLogin.get('status') === 'home') {
    return (<Landing />)
  }
  
  return (
    <div>
      <Login />
    </div>
  );
}

// returns JSX, and the naming is PascalCase
// This is a functional component
// Component name must be written in PascalCase
// NavigationBar

// not navigationbar, navigation-bar, navigation_bar


