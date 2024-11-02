// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import ShopContextProvider from "./Context/ShopContext.jsx";
import Loading from "./components/Loading.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ShopContextProvider>
      <Suspense fallback={<Loading/>}> 
        <App />
      </Suspense>
    </ShopContextProvider>
  </BrowserRouter>
  /* </StrictMode> */
);
