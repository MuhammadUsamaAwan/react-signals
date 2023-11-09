import { signal } from '@preact/signals-react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

// eslint-disable-next-line react-refresh/only-export-components
export const state = signal(true);

export default function App() {
  console.log('rendered app');

  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />
      <button onClick={() => (state.value = !state.value)}>Toggle State</button>
    </>
  );
}
