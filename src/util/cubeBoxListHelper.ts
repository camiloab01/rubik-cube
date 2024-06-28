import CubeBoxType from '../types/cubeBox'

export const shuffleCube = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  return cubeBoxList.sort(() => Math.random() - 0.5)
}
