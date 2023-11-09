export default function Component2({ state }: { state: boolean}) {
  console.log("rendered Component2")
  return (
    <div>Component2 state {state ? 'true' : 'false'}</div>
  )
}