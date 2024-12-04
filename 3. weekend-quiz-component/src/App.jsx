import Button from "./components/Button";
import CardLayout from "./components/CardLayout";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center px-12 py-8 gap-10">
      <h1 className="font-bold text-4xl">React Component</h1>
      <div className="flex flex-col gap-5">
        <Button>Primary</Button>
        <Button disabled>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
      </div>
      <CardLayout disabled>
        <div className="w-[224px] h-[112px] flex justify-center items-center">
          Content area
        </div>
      </CardLayout>
      <CardLayout>
        <div className="w-[112px] h-[180px] flex justify-center items-center">
          Content area
        </div>
      </CardLayout>
    </div>
  );
}

export default App;
