import CubeBoxType from '../types/cubeBox'

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'u' clockwise
// [u7,u4,u1,u8,u5,u2,u9,u6,u3,f1,f2,f3,l4,l5,l6,l7,l8,l9,r1,r2,r3,f4,f5,f6,f7,f8,f9,b1,b2,b3,r4,r5,r6,r7,r8,r9,l1,l2,l3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
export const uClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const firstItem = cubeBoxList[6]
  const secondItem = cubeBoxList[3]
  const thirdItem = cubeBoxList[0]
  const fourthItem = cubeBoxList[7]
  const fifthItem = cubeBoxList[4]
  const sixthItem = cubeBoxList[1]
  const seventhItem = cubeBoxList[8]
  const eigthItem = cubeBoxList[5]
  const ninethItem = cubeBoxList[2]
  permutatedList.push(firstItem)
  permutatedList.push(secondItem)
  permutatedList.push(thirdItem)
  permutatedList.push(fourthItem)
  permutatedList.push(fifthItem)
  permutatedList.push(sixthItem)
  permutatedList.push(seventhItem)
  permutatedList.push(eigthItem)
  permutatedList.push(ninethItem)
  const firstRange = cubeBoxList.slice(18, 21)
  const secondRange = cubeBoxList.slice(12, 18)
  const thirdRange = cubeBoxList.slice(27, 30)
  const fourthRange = cubeBoxList.slice(21, 27)
  const fithRange = cubeBoxList.slice(36, 39)
  const sixthRange = cubeBoxList.slice(30, 36)
  const seventhRange = cubeBoxList.slice(9, 12)
  const eigthRange = cubeBoxList.slice(39, 45)
  const ninethRange = cubeBoxList.slice(45, 54)
  permutatedList.push(...firstRange)
  permutatedList.push(...secondRange)
  permutatedList.push(...thirdRange)
  permutatedList.push(...fourthRange)
  permutatedList.push(...fithRange)
  permutatedList.push(...sixthRange)
  permutatedList.push(...seventhRange)
  permutatedList.push(...eigthRange)
  permutatedList.push(...ninethRange)
  return permutatedList
}

export const shuffleCube = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  return cubeBoxList.sort(() => Math.random() - 0.5)
}
