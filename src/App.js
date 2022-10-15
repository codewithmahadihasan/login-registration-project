
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Main from './Components/Main';
import Registar from './Components/Registar';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: '/', element: <Home></Home> },
        { path: 'login', element: <LogIn></LogIn> },
        { path: 'signup', element: <Registar></Registar> }
      ]

    },
  ]);


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
