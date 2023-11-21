import { useState } from 'react'
import './App.css'
import PuppyList from './components/PuppyList'
import PuppyDetails from './components/PuppyDetails';
import Form from './components/Form';

function App() {
	const [singlePuppySelected, setSinglePuppySelected] = useState(null);
	const [singlePuppyUrl, setSinglePuppyUrl] = useState('');
	const [listOfPuppies, setListOfPuppies] = useState([]);

	return (
		<>
			<h1>Puppies!</h1>
			{!singlePuppySelected ?
				<>
					<PuppyList listOfPuppies={listOfPuppies} setListOfPuppies={setListOfPuppies} setSinglePuppySelected={setSinglePuppySelected} setSinglePuppyUrl={setSinglePuppyUrl} />
					<Form listOfPuppies={listOfPuppies} setListOfPuppies={setListOfPuppies}/>
				</>
				: <PuppyDetails setSinglePuppySelected={setSinglePuppySelected} singlePuppyUrl={singlePuppyUrl} />

			}
		</>
	)
}

export default App
