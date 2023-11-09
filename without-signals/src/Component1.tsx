export default function Component1({ state }: { state: boolean}) {
  console.log("rendered Component1")
  return (
    <div>Component1 state {state ? 'true' : 'false'}</div>
  )
}