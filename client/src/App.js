import { useEffect, useState } from 'react';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('garage_control_active_user'))
      setUser(JSON.parse(localStorage.getItem('garage_control_active_user')));
  }, []);

  const login_logoutHandler = usr =>
    setUser(() => {
      localStorage.setItem('garage_control_active_user', JSON.stringify(usr));
      return usr;
    });

  return (
    <div className="App">
      {(!user && <Login handler={login_logoutHandler} />) || (
        <Home user={user} handler={login_logoutHandler} />
      )}
    </div>
  );
};

export default App;
