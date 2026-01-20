import { createResource } from "solid-js";

function App() {
  const [resource] = createResource(async () => {
    const response = await fetch("http://localhost:3000/");
    return await response.json();
  });

  return <h1>{resource().message}</h1>;
}

export default App;
