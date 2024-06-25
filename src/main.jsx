import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./font/font.css";
import GlobalStyle from "./styles/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<GlobalStyle />
		<App />
	</>,
);
