import { useState, useEffect } from 'react';

const PuppyList = ({listOfPuppies, setListOfPuppies, setSinglePuppySelected, setSinglePuppyUrl}) => {

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
						<div className="card" key={singlePup.id} onClick={() => {
							setSinglePuppySelected(true);
							setSinglePuppyUrl(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/${singlePup.id}`)
						}
						}>
							<h3>{singlePup.name}</h3>
							<img className="card-image" src={singlePup.imageUrl} alt={singlePup.name}></img>
							<p>{singlePup.name} is a {singlePup.breed}</p>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default PuppyList