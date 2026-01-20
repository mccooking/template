import { Suspense } from "solid-js";

export function App(props: { children: Element }) {
  return <Suspense>{props.children}</Suspense>;
}

export default App;
