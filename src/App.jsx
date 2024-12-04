import { useState } from "react";

const defaultFormData = {
	title: "",
	image: "",
	content: "",
	category: "",
};

function App() {
	const [list, setList] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormData);

	const handleInputChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const newList = [...list, formFields];
		setList(newList);

		// resetto il form
		setFormFields(defaultFormData);

		// if (!addTitle) {
		// 	alert("Inserisci un titolo!");
		// 	return;
		// }
		// setList(newList);
		// setAddTitle("");
	};

	// const removeTitle = (i) => {
	// 	const updatedList = list.filter((el, index) => {
	// 		return index !== i;
	// 	});
	// 	setList(updatedList);
	// };

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
						name="title"
						value={formFields.title}
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
						value={formFields.image}
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
						value={formFields.content}
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
						<option value="Categoria 1">Categoria 1</option>
						<option value="Categoria 2">Categoria 2</option>
						<option value="Categoria 3">Categoria 3</option>
					</select>
					<button className="btn btn-primary">Aggiungi Post alla lista</button>
				</form>
				<section>
					<h2 className="mt-3">Post list</h2>
					<div className="row row-cols-3 g-3">
						{list.length ? (
							list.map((el, index) => (
								<div className="col" key={index}>
									<div className="card">
										<div className="card-body">
											<h3>{el.title}</h3>
											<h3>{el.image}</h3>
											<h3>{el.content}</h3>
											<h3>{el.category}</h3>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="col-12">
								<h4>Nessun post disponibile</h4>
							</div>
						)}
					</div>
				</section>

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
