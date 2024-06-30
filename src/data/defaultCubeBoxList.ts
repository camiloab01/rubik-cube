import CubeBoxType from '../types/cubeBox'
import { ColorsEnum } from '../types/enums'

// ***********************************************************************************************
// This is the default or solved state of the cube.
// We will use this state to permutate or rotate the
// other cube states (see: ./util/cubeBoxListHelper.ts)
// ***********************************************************************************************

const defaultCubeBoxList: Array<CubeBoxType> = [
  { id: 'U1', color: ColorsEnum.Yellow },
  { id: 'U2', color: ColorsEnum.Yellow },
  { id: 'U3', color: ColorsEnum.Yellow },
  { id: 'U4', color: ColorsEnum.Yellow },
  { id: 'U5', color: ColorsEnum.Yellow },
  { id: 'U6', color: ColorsEnum.Yellow },
  { id: 'U7', color: ColorsEnum.Yellow },
  { id: 'U8', color: ColorsEnum.Yellow },
  { id: 'U9', color: ColorsEnum.Yellow },
  { id: 'L1', color: ColorsEnum.Blue },
  { id: 'L2', color: ColorsEnum.Blue },
  { id: 'L3', color: ColorsEnum.Blue },
  { id: 'L4', color: ColorsEnum.Blue },
  { id: 'L5', color: ColorsEnum.Blue },
  { id: 'L6', color: ColorsEnum.Blue },
  { id: 'L7', color: ColorsEnum.Blue },
  { id: 'L8', color: ColorsEnum.Blue },
  { id: 'L9', color: ColorsEnum.Blue },
  { id: 'F1', color: ColorsEnum.Red },
  { id: 'F2', color: ColorsEnum.Red },
  { id: 'F3', color: ColorsEnum.Red },
  { id: 'F4', color: ColorsEnum.Red },
  { id: 'F5', color: ColorsEnum.Red },
  { id: 'F6', color: ColorsEnum.Red },
  { id: 'F7', color: ColorsEnum.Red },
  { id: 'F8', color: ColorsEnum.Red },
  { id: 'F9', color: ColorsEnum.Red },
  { id: 'R1', color: ColorsEnum.Green },
  { id: 'R2', color: ColorsEnum.Green },
  { id: 'R3', color: ColorsEnum.Green },
  { id: 'R4', color: ColorsEnum.Green },
  { id: 'R5', color: ColorsEnum.Green },
  { id: 'R6', color: ColorsEnum.Green },
  { id: 'R7', color: ColorsEnum.Green },
  { id: 'R8', color: ColorsEnum.Green },
  { id: 'R9', color: ColorsEnum.Green },
  { id: 'B1', color: ColorsEnum.Orange },
  { id: 'B2', color: ColorsEnum.Orange },
  { id: 'B3', color: ColorsEnum.Orange },
  { id: 'B4', color: ColorsEnum.Orange },
  { id: 'B5', color: ColorsEnum.Orange },
  { id: 'B6', color: ColorsEnum.Orange },
  { id: 'B7', color: ColorsEnum.Orange },
  { id: 'B8', color: ColorsEnum.Orange },
  { id: 'B9', color: ColorsEnum.Orange },
  { id: 'D1', color: ColorsEnum.White },
  { id: 'D2', color: ColorsEnum.White },
  { id: 'D3', color: ColorsEnum.White },
  { id: 'D4', color: ColorsEnum.White },
  { id: 'D5', color: ColorsEnum.White },
  { id: 'D6', color: ColorsEnum.White },
  { id: 'D7', color: ColorsEnum.White },
  { id: 'D8', color: ColorsEnum.White },
  { id: 'D9', color: ColorsEnum.White },
]

export default defaultCubeBoxList
