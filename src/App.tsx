import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/products";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/user";
import Product from "./pages/product/Product";
import Order from "./pages/Order/Order";
import Posts from "./pages/Posts/Posts";
import Form from "./components/Form/Form";
import Elements from "./pages/Elements/Elements";
import Notes from "./pages/Notes/Notes";
import Forms from "./pages/Forms/Forms";
import Calender from "./pages/Calender/Calender";
import Settings from "./pages/Settings/Settings";
import Backups from "./pages/Backups/Backups";
import Charts from "./pages/Charts/Charts";
import Logs from "./pages/Logs/Logs";
// import Order from "./pages/Order/Order";

function App() {
  
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />          
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },{
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },{
          path:"/order",
          element : <Order />
        },{
          path:"/posts",
          element : <Posts /> 
        },{
          path:"/elements",
          element : <Elements />
        },{
          path:"/notes",
          element : <Notes />
        },{
          path:"/forms",
          element : <Forms />
        },{
          path:"/calendar",
          element : <Calender />,
        },{
          path:"/settings",
          element:<Settings />,
        },{
          path:"/backups",
          element:<Backups />,
        },{
          path:'/charts',
          element:<Charts />
        },{
          path:'/logs',
          element:<Logs />
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },{
      path: "/form",
      element: <Form /> 
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
