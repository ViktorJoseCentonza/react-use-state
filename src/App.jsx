import ButtonSelectionComp from "./components/MainComp"
import HeaderComp from "./components/HeaderComp"
import ButtonSelectionDynamic from "./data/ButtonSelectionDynamic"
function App() {

  return (
    <>
      <HeaderComp />
      <ButtonSelectionComp ButtonData={ButtonSelectionDynamic} />
    </>
  )
}

export default App
