import { state } from "./App"

export default function Component2() {
  console.log("rendered Component2")
  return (
    <div>Component2 state {state.value ? 'true' : 'false'}</div>
  )
}