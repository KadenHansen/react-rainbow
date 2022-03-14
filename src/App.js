import { useState } from "react"
import ColorBlock from "./ColorBlock"

function App() {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  }) 

  return (
    <div className="App">
      {colorMap}
    </div>
  )
}

export default App;
