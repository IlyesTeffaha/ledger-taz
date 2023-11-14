
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainScreen from "../components/mainScreen/MainScreen";
import BackgroundView from "../components/backgroundView/BackgroundView";
import WindowWrapper from "../components/windowWrapper/WindowWrapper";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      {/* Home page route with SwiperImages component */}
      <Route index element={<MainScreen />} />
    <Route path="/main" element={<WindowWrapper children={<BackgroundView/>} />}/>

      {/* ... (other routes) ... */}
    </Route>
  )
);
