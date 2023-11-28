import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./Home";
import About from "./About";
import Components from "./Components";
import Vacation from "./Vacation";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/components",
				element: <Components />,
			},
			{
				path: "/vacation",
				element: <Vacation />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
