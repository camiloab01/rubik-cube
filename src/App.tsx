import { useState } from 'react'
import './App.css'
import ActionController from './components/actionController'
import Cube from './components/cube'
import FaceEnum from './types/faceEnum'

function App() {
  const [isRotateClockwise, setIsRotateClockwise] = useState<boolean>()
  const [faceToRotate, setFaceToRotate] = useState<FaceEnum>()

  console.log(isRotateClockwise, faceToRotate)

  return (
    <>
      <div className="p-2">
        <h1>Rubik Cube Simulation</h1>
        <h3 className="flex justify-end">By Camilo A.</h3>
      </div>
      <div className="absolute right-0 mr-5 border-[1px] border-white p-4">
        <ActionController
          setFaceToRotate={setFaceToRotate}
          setIsRotateClockwise={setIsRotateClockwise}
        />
      </div>
      <div className="flex justify-center mt-20">
        <Cube />
      </div>
    </>
  )
}

export default App
