import { useState } from 'react';

const Form = ({listOfPuppies, setListOfPuppies}) => {
	const [dogName, setDogName] = useState(``);
	const [dogImageUrl, setDogImageUrl] = useState(``);
	const [dogBreed, setDogBreed] = useState(``);
	const [dogStatus, setDogStatus] = useState(``);

	return (
		<>
			<h3> Add a Pup!</h3>
			<form>
				<label> Dog Name:
					<input name="dogName" onChange={(event) => setDogName(event.target.value)}/>
				</label>
				<label> Dog Image Url:
					<input name="dogImageUrl" onChange={(event) => setDogImageUrl(event.target.value)}/>
				</label>
				<label> Dog Breed:
					<input name="dogBreed" onChange={(event) => setDogBreed(event.target.value)}/>
				</label>
				<label> Dog Status:
					<input name="dogStatus" onChange={(event) => setDogStatus(event.target.value)}/>
				</label>
				<button onClick={
					(event) => {
						event.preventDefault();
						setListOfPuppies([...listOfPuppies, {name: dogName, imageUrl: dogImageUrl, breed: dogBreed, status: dogStatus}])
						console.log(dogBreed);
						console.log(dogName);
					}
				}>Submit</button>
			</form>
		</>
	)
}

export default Form;