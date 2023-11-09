import { useState } from "react"
import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"

export default function App() {
  console.log("rendered app")
  const [state, setState] = useState(true)

  return (
    <>
    <Component1 state={state} />
    <Component2 state={state} />
    <Component3 />
    <button onClick={() => setState(!state)}>Toggle State</button>
    </>
  )
}