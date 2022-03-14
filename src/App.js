import { useState } from "react"
import ColorBlock from "./ColorBlock"
import ColorForm from "./ColorForm"

function App() {
  let [colors, setColors] = useState(["red", "orange", "yellow", "green", "blue", "indigo", "violet"])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  }) 

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      <ColorForm addColor={addColor} />
      {colorMap}
    </div>
  )
}

export default App;
