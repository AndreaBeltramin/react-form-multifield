import { useState } from "react";

function App() {
	const [list, setList] = useState({
		title: "",
		image: "",
		content: "",
		category: "",
	});
	const [addTitle, setAddTitle] = useState("");

	function handleInputChange(e) {
		setList((list) => ({ ...list, [e.target.name]: e.target.value }));
	}

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
				<h1 className="mb-3">Blog </h1>
				<form onSubmit={handleFormSubmit}>
					{/* input titolo */}
					<label htmlFor="title" className="form-label">
						Titolo
					</label>
					<input
						id="title"
						className="form-control mb-3"
						type="text"
						name="name"
						value={list.title}
						onChange={handleInputChange}
						placeholder="Inserisci un titolo"
					/>

					{/* input immagine */}
					<label htmlFor="image" className="form-label">
						Immagine
					</label>
					<input
						id="image"
						className="form-control mb-3"
						type="text"
						name="image"
						value={list.image}
						onChange={handleInputChange}
						placeholder="Inserisci un' immagine"
					/>

					{/* input contenuto */}
					<label htmlFor="content" className="form-label">
						Contenuto
					</label>
					<input
						id="content"
						className="form-control mb-3"
						type="text"
						name="content"
						value={list.content}
						onChange={handleInputChange}
						placeholder="Inserisci un contenuto"
					/>

					{/* input categoria */}
					<label htmlFor="category" className="form-label">
						Categoria
					</label>
					<select
						className="form-select mb-3"
						id="category"
						name="category"
						onChange={handleInputChange}
					>
						<option>Seleziona una categoria</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<button className="btn btn-primary">Aggiungi alla lista</button>
				</form>
				{/* 
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
				</ul> */}
			</div>
		</>
	);
}

export default App;
