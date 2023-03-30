import { useLocation, useRoutes, useNavigate } from "react-router-dom"
import router from './router/index2';
import { useEffect } from 'react';
import { message } from 'antd';


function ToPage1() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/page1");
  }, [])
  return <div></div>
}

function ToLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    message.warning("你还没有登录,请登录后再访问!");
  }, [])
  return <div></div>
}

function BeforReRouterEnter() {
  const outlet = useRoutes(router as any);

  const location = useLocation();

  let token = localStorage.getItem("management-token");

  if (location.pathname === "/login" && token) {
    return <ToPage1 />
  }

  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }


  return outlet;
}


function App() {



  return (
    <div className="App">
      {/* <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link> */}
      {/* {outlet} */}
      <BeforReRouterEnter />
    </div>
  )
}

export default App
