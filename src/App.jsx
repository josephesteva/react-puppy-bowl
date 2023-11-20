import { useState } from 'react'
import './App.css'
import PuppyList from './components/PuppyList'
import PuppyDetails from './components/PuppyDetails';

function App() {
const [singlePuppySelected, setSinglePuppySelected] = useState(null);
const [singlePuppyUrl,setSinglePuppyUrl] = useState('');

  return (
    <>
			<h1>Puppies!</h1>
			{!singlePuppySelected ?
			<PuppyList setSinglePuppySelected={setSinglePuppySelected} setSinglePuppyUrl={setSinglePuppyUrl}/>
			: <PuppyDetails setSinglePuppySelected={setSinglePuppySelected} singlePuppyUrl={singlePuppyUrl}/>
			
			}
    </>
  )
}

export default App
