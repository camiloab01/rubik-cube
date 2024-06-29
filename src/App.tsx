import { useState } from 'react'
import './App.css'
import ActionController from './components/actionController'
import Cube from './components/cube'
import CubeBoxType from './types/cubeBox'
import defaultCubeBoxList from './data/defaultCubeBoxList'
import {
  fClockwisePermutation,
  fCounterClockwisePermutation,
  lClockwisePermutation,
  lCounterClockwisePermutation,
  shuffleCube,
  uClockwisePermutation,
  uCounterClockwisePermutation,
} from './util/cubeBoxListHelper'

function App() {
  const [cubeBoxList, setCubeBoxList] =
    useState<Array<CubeBoxType>>(defaultCubeBoxList)

  const handleShuffleCube = () => {
    const listToShuffle = [...cubeBoxList]
    setCubeBoxList(shuffleCube(listToShuffle))
  }

  const handleResetCube = () => {
    setCubeBoxList(defaultCubeBoxList)
  }

  const handleUCounterClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(uCounterClockwisePermutation(listToPermutate))
  }

  const handleUClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(uClockwisePermutation(listToPermutate))
  }

  const handleLClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(lClockwisePermutation(listToPermutate))
  }

  const handleLCounterClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(lCounterClockwisePermutation(listToPermutate))
  }

  const handleFClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(fClockwisePermutation(listToPermutate))
  }

  const handleFCounterClockwise = () => {
    const listToPermutate = [...cubeBoxList]
    setCubeBoxList(fCounterClockwisePermutation(listToPermutate))
  }

  return (
    <>
      <div className="p-2">
        <h1>Rubik Cube Simulation</h1>
        <h3 className="flex justify-end">By Camilo A.</h3>
      </div>
      <div className="absolute right-0 mr-5 border-[1px] border-white p-4">
        <ActionController
          handleResetCube={handleResetCube}
          handleShuffleCube={handleShuffleCube}
          handleUClockwise={handleUClockwise}
          handleUCounterClockwise={handleUCounterClockwise}
          handleLClockwise={handleLClockwise}
          handleLCounterClockwise={handleLCounterClockwise}
          handleFClockwise={handleFClockwise}
          handleFCounterClockwise={handleFCounterClockwise}
        />
      </div>
      <div className="flex justify-center mt-20">
        <Cube cubeBoxList={cubeBoxList} />
      </div>
    </>
  )
}

export default App
