import { useEffect, useState } from 'react'
import './App.css'
import ActionController from './components/actionController'
import Cube from './components/cube'
import { FaceEnum } from './types/enums'
import CubeBoxType from './types/cubeBox'
import defaultCubeBoxList from './data/defaultCubeBoxList'
import {
  shuffleCube,
  uClockwisePermutation,
  uCounterClockwisePermutation,
} from './util/cubeBoxListHelper'

function App() {
  const [isRotateClockwise, setIsRotateClockwise] = useState<boolean>()
  const [faceToRotate, setFaceToRotate] = useState<FaceEnum>()
  const [cubeBoxList, setCubeBoxList] =
    useState<Array<CubeBoxType>>(defaultCubeBoxList)

  const handleShuffleCube = () => {
    const listToShuffle = [...cubeBoxList]
    setCubeBoxList(shuffleCube(listToShuffle))
  }

  const handleResetCube = () => {
    setCubeBoxList(defaultCubeBoxList)
  }

  useEffect(() => {
    const listToPermutate = [...cubeBoxList]
    switch (faceToRotate) {
      case FaceEnum.Upper:
        setCubeBoxList(
          isRotateClockwise
            ? uClockwisePermutation(listToPermutate)
            : uCounterClockwisePermutation(listToPermutate)
        )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceToRotate, isRotateClockwise])

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
        <Cube cubeBoxList={cubeBoxList} />
      </div>
    </>
  )
}

export default App
