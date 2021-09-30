import "./App.css";
import Logo from "./Components/Logo";
import Formikform from "./Components/Formikform";

function App() {
	return (
		<div className="App bg-gray-300 w-screen h-screen">
			<div className="container mx-auto bg-white w-360 ">
				<Logo />
				<Formikform />
			</div>
		</div>
	);
}

export default App;
