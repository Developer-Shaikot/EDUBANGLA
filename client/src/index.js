import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
