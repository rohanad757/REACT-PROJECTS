import { useState } from 'react'
import './App.css'

function App() {
  let [height, setHeight] = useState(160);
  let [weight, setWeight] = useState(70);
  let [BMI, setBmi] = useState(0);

  let output = () => {
    const heightInMeters = height / 100; // convert cm to m
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
    output();
  }

  function onWeightChange(event) {
    setWeight(event.target.value);
    output();
  }

  return (
    <div className='Container' >
      <h1>BMI Calculator</h1>

      <div className='inputSection'>

        <p className='sliderOutput'>Weight : {weight} Kg</p>
        <input onChange={onWeightChange} className='inputSlider' type="range" step={1} min={40} max={200} />

        <p className='sliderOutput' >Height : {height} cm</p>
        <input onChange={onHeightChange} className='inputSlider' type="range" min={70} max={220} />
      </div>

      <div className='outputSection' >
        <p>Your BMI is : </p>
        <p className='output' >{BMI}</p>

      </div>
    </div>
  )
}
export default App
