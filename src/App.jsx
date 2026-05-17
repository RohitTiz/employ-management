import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard';
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';





const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
    
    }
    
  }, [authData]);

  const handleLogin = (email , password) => {
    if (email == "admin@me.com" && password == "123"){
      
      setUser({ email, role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'admin' }));
    } else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      setUser({ email, role: 'employee' });
      localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'employee' }));
    } else {
      alert('Invalid credentials');
    }
  }
      

   useEffect(() => {
    console.log(authData);
  }, [authData]);

 
  
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ""}
    {user && user.role === 'employee' && <EmployDashboard />}
    {user && user.role === 'admin' && <AdminDashBoard />}

    </>
  )
}

export default App