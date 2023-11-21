import { useEffect, useState } from "react";

const PuppyDetails = ({ setSinglePuppySelected, singlePuppyUrl }) => {
	const [singlePuppy, setSinglePuppy] = useState({});

	useEffect(() => {
		const fetchSinglePuppy = async () => {
			// console.log(singlePuppyUrl);
			const response = await fetch(singlePuppyUrl);
			const result = await response.json();
			console.log(result);
			setSinglePuppy(result.data.player);
		}
		fetchSinglePuppy();
	}, []);

	return (
		<>
			<div className="single-card">
				<h1>{singlePuppy.name}</h1>
				<img className="single-card-image" src={singlePuppy.imageUrl}/>
				<h3>{singlePuppy.name} is a {singlePuppy.breed} who is on team {singlePuppy.teamId} and whose current status is {singlePuppy.status}</h3>
			</div>
			<button onClick={() => {
				setSinglePuppySelected(false)
			}}>Back</button>
		</>
	)
}

export default PuppyDetails;