import { useState } from 'react'
import './App.css'
import ActionController from './components/actionController'
import Cube from './components/cube'
import { FaceEnum } from './types/enums'
import CubeBoxType from './types/cubeBox'
import defaultCubeBoxList from './data/defaultCubeBoxList'
import { shuffleCube } from './util/cubeBoxListHelper'

function App() {
  const [isRotateClockwise, setIsRotateClockwise] = useState<boolean>()
  const [faceToRotate, setFaceToRotate] = useState<FaceEnum>()
  const [cubeBoxList, setCubeBoxList] = useState<Array<CubeBoxType>>()

  const handleShuffleCube = () => {
    const listToShuffle = cubeBoxList ? cubeBoxList : defaultCubeBoxList
    setCubeBoxList(shuffleCube(listToShuffle))
  }

  const handleResetCube = () => {
    setCubeBoxList(defaultCubeBoxList)
  }

  console.log(isRotateClockwise, faceToRotate)

  // [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
  // rotate 'u' clockwise
  // [u7,u4,u1,u8,u5,u2,u9,u6,u3,f1,f2,f3,l4,l5,l6,l7,l8,l9,r1,r2,r3,f4,f5,f6,f7,f8,f9,b1,b2,b3,r4,r5,r6,r7,r8,r9,l1,l2,l3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]

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
          handleResetCube={handleResetCube}
          handleShuffleCube={handleShuffleCube}
        />
      </div>
      <div className="flex justify-center mt-20">
        <Cube cubeBoxList={cubeBoxList ? cubeBoxList : defaultCubeBoxList} />
      </div>
    </>
  )
}

export default App
