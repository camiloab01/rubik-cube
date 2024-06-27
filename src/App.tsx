import './App.css'
import Cube from './components/cube'

function App() {
  return (
    <>
      <div className="p-4">
        <h1>Rubik Cube Simulation</h1>
        <h3 className="flex justify-end">By Camilo A.</h3>
      </div>
      <div className="flex justify-center mt-10">
        <Cube />
      </div>
    </>
  )
}

export default App
