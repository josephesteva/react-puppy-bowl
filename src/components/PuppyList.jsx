import { useState, useEffect } from 'react';

const PuppyList = () => {
	const [listOfPuppies, setListOfPuppies] = useState([]);

	useEffect(() => {
		const fetchPuppies = async () => {
			const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
			const result = await response.json();
			setListOfPuppies(result.data.players);
		}
		fetchPuppies();
	}, []);


	return (
		<>
			<h2>Puppy List</h2>
			{console.log(listOfPuppies)}
			<section>
				{listOfPuppies.map((singlePup) => {
					return (
						<div className="card">{singlePup.name}</div>
					)
				})}
			</section>
		</>
	)
}

export default PuppyList