import Button from "./components/atoms/Button";
import ButtonPrimary from "./components/atoms/ButtonPrimary"
import ButtonSecondary from "./components/atoms/ButtonSecondary"

function App() {
  const message = 'Javascript Developer Class';

  return (
    <div className="p-10 flex flex-col items-center h-screen gap-5">
      <h1 className='text-3xl font-bold underline'>{ message }</h1>
      <ButtonPrimary caption={'Hey you!'} />
      <ButtonSecondary>Hawayu</ButtonSecondary>
      <Button message={'Next'} variant="primary">Next</Button>
      <Button message={'Prev'} variant="secondary">Prev</Button>
      <Button message={'Wiuu wiuu'} type="alert">Submit</Button>
      <Button message={'Button Clicked'}>Submit</Button>
    </div>
  )
}

export default App
