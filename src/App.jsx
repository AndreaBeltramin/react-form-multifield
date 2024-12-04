import { useState } from "react";

function App() {
	const [list, setList] = useState([]);
	const [addTitle, setAddTitle] = useState("");

	const handleInputChange = (e) => {
		setAddTitle(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// console.log("hai aggiunto " + addTitle);
		const newList = [...list, addTitle];

		if (!addTitle) {
			alert("Inserisci un titolo!");
			return;
		}
		setList(newList);
		setAddTitle("");
	};

	const removeTitle = (i) => {
		const updatedList = list.filter((el, index) => {
			return index !== i;
		});
		setList(updatedList);
	};
	return (
		<>
			<div className="container mt-5">
				<h1>Blog </h1>
				<form onSubmit={handleFormSubmit}>
					<input type="text" value={addTitle} onChange={handleInputChange} />
					<button className="btn btn-primary ms-2">
						Aggiungi titolo alla lista
					</button>
				</form>
				<ul>
					{list.map((el, i) => (
						<li key={i}>
							{el}
							<i
								className="fa-solid fa-trash ms-2"
								onClick={() => removeTitle(i)}
							></i>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
