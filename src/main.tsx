import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./Home";
import About from "./About";
import Components from "./Components";
import Vacation from "./Vacation";
import CurrencyConverter from "./CurrencyConverter.tsx";
import Search from "./Search.tsx";

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
			{
				path: "/currency",
				element: <CurrencyConverter />,
			},
			{
				path: "/search",
				element: <Search />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
