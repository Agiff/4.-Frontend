import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center px-12 py-8 gap-10">
      <h1 className="font-bold text-5xl">React Component</h1>
      <Button>Primary</Button>
      <Button disabled>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
    </div>
  );
}

export default App;
