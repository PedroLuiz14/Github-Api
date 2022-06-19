import { createRoot } from "react-dom/client";
import React from "react";
import Providers from "./providers"
// eslint-disable-next-line react-hooks/exhaustive-deps
// export const Teste = () => {
//   return (<h1>Que Bruxaria é essa??</h1>);
// };

const container = document.getElementById("root")
// eslint-disable-next-line react-hooks/exhaustive-deps
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
// eslint-disable-next-line react-hooks/exhaustive-deps
// const root = ReactDOM.createRoot (document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <Providers/>
//     {/* <Teste/> */}
//   </React.StrictMode>
// );



// eslint-disable-next-line react-hooks/exhaustive-deps
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Providers from "./providers";
// ReactDOM.render(
//   <React.StrictMode>
//     <Providers />
//   </React.StrictMode>,
//   document.getElementById("root")
// );