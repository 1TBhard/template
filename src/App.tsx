import { useEffect } from "react";
import { Test } from "src/testFolder/Test";
import forest from "public/imgs/forest.jpg";

export const App = () => {
	useEffect(() => {
		const myImg = new Image();
		myImg.src = forest;
		window.document.body.appendChild(myImg);
	}, []);

	return (
		<div>
			<h1>App</h1>

			<div>
				<Test />
			</div>
		</div>
	);
};
