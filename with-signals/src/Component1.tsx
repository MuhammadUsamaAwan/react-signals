import { state } from "./App"

export default function Component1() {
  console.log("rendered Component1")
  return (
    <div>Component1 state {state.value ? 'true' : 'false'}</div>
  )
}