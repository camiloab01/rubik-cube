import CubeBoxType from '../types/cubeBox'

// ***********************************************************************************************
// These are the functions that transform the cube
// from its solved state to the different permutations.
// They take an array, and transform it based on the rotation. Taking as a base the solved state
// ***********************************************************************************************

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'u' clockwise 👇🏻
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

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'u' counter clockwise 👇🏻
// [u3,u6,u9,u2,u5,u8,u1,u4,u7,b1,b2,b3,l4,l5,l6,l7,l8,l9,l1,l2,l3,f4,f5,f6,f7,f8,f9,f1,f2,f3,r4,r5,r6,r7,r8,r9,r1,r2,r3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
export const uCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const firstItem = cubeBoxList[2]
  const secondItem = cubeBoxList[5]
  const thirdItem = cubeBoxList[8]
  const fourthItem = cubeBoxList[1]
  const fifthItem = cubeBoxList[4]
  const sixthItem = cubeBoxList[7]
  const seventhItem = cubeBoxList[0]
  const eigthItem = cubeBoxList[3]
  const ninethItem = cubeBoxList[6]
  permutatedList.push(firstItem)
  permutatedList.push(secondItem)
  permutatedList.push(thirdItem)
  permutatedList.push(fourthItem)
  permutatedList.push(fifthItem)
  permutatedList.push(sixthItem)
  permutatedList.push(seventhItem)
  permutatedList.push(eigthItem)
  permutatedList.push(ninethItem)
  const firstRange = cubeBoxList.slice(36, 39)
  const secondRange = cubeBoxList.slice(12, 18)
  const thirdRange = cubeBoxList.slice(9, 12)
  const fourthRange = cubeBoxList.slice(21, 27)
  const fithRange = cubeBoxList.slice(18, 21)
  const sixthRange = cubeBoxList.slice(30, 36)
  const seventhRange = cubeBoxList.slice(27, 30)
  const eigthRange = cubeBoxList.slice(39, 54)
  permutatedList.push(...firstRange)
  permutatedList.push(...secondRange)
  permutatedList.push(...thirdRange)
  permutatedList.push(...fourthRange)
  permutatedList.push(...fithRange)
  permutatedList.push(...sixthRange)
  permutatedList.push(...seventhRange)
  permutatedList.push(...eigthRange)
  console.log(permutatedList)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'l' clockwise 👇🏻
// [b9,u2,u3,b6,u5,u6,b3,u8,u9,l7,l4,l1,l8,l5,l2,l9,l6,l3,u1,f2,f3,u4,f5,f6,u7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,d7,b4,b5,d4,b7,b8,d1,f1,d2,d3,f4,d5,d6,f7,d8,d9]
export const lClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const item1 = cubeBoxList[44] //b9
  permutatedList.push(item1)
  const range1 = cubeBoxList.slice(1, 3) //u2 u3
  permutatedList.push(...range1)
  const item2 = cubeBoxList[41] //b6
  permutatedList.push(item2)
  const range2 = cubeBoxList.slice(4, 6) //u5 u6
  permutatedList.push(...range2)
  const item3 = cubeBoxList[38] //b3
  permutatedList.push(item3)
  const range3 = cubeBoxList.slice(7, 9) //u8 u9
  permutatedList.push(...range3)
  const item4 = cubeBoxList[15] //l7
  permutatedList.push(item4)
  const item5 = cubeBoxList[12] //l4
  permutatedList.push(item5)
  const item6 = cubeBoxList[9] //l1
  permutatedList.push(item6)
  const item7 = cubeBoxList[16] //l8
  permutatedList.push(item7)
  const item8 = cubeBoxList[13] //l5
  permutatedList.push(item8)
  const item9 = cubeBoxList[10] //l2
  permutatedList.push(item9)
  const item10 = cubeBoxList[17] //l9
  permutatedList.push(item10)
  const item11 = cubeBoxList[14] //l6
  permutatedList.push(item11)
  const item12 = cubeBoxList[11] //l3
  permutatedList.push(item12)
  const item14 = cubeBoxList[0] //u1
  permutatedList.push(item14)
  const range4 = cubeBoxList.slice(19, 21) //f2 f3
  permutatedList.push(...range4)
  const item15 = cubeBoxList[3] //u4
  permutatedList.push(item15)
  const range5 = cubeBoxList.slice(22, 24) //f5 f6
  permutatedList.push(...range5)
  const item16 = cubeBoxList[6] //u7
  permutatedList.push(item16)
  const range6 = cubeBoxList.slice(25, 27) //f8 f9
  permutatedList.push(...range6)
  const range7 = cubeBoxList.slice(27, 38) //r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2
  permutatedList.push(...range7)
  const item17 = cubeBoxList[51] //d7
  permutatedList.push(item17)
  const range8 = cubeBoxList.slice(39, 41) //b4 b5
  permutatedList.push(...range8)
  const item18 = cubeBoxList[48] //d4
  permutatedList.push(item18)
  const range9 = cubeBoxList.slice(42, 44) //b7 b8
  permutatedList.push(...range9)
  const item19 = cubeBoxList[45] //d1
  permutatedList.push(item19)
  const item20 = cubeBoxList[18] //f1
  permutatedList.push(item20)
  const range10 = cubeBoxList.slice(46, 48) //d2,d3
  permutatedList.push(...range10)
  const item21 = cubeBoxList[21] //f4
  permutatedList.push(item21)
  const range11 = cubeBoxList.slice(49, 51) //d5,d6
  permutatedList.push(...range11)
  const item22 = cubeBoxList[24] //f7
  permutatedList.push(item22)
  const range12 = cubeBoxList.slice(52, 54) //d8,d9
  permutatedList.push(...range12)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'l' counter clockwise 👇🏻
// [f1,u2,u3,f4,u5,u6,f7,u8,u9,l3,l6,l9,l2,l5,l8,l1,l4,l7,d1,f2,f3,d4,f5,f6,d7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,u7,b4,b5,u4,b7,b8,u1,b9,d2,d3,b6,d5,d6,b3,d8,d9]
export const lCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const item1 = cubeBoxList[18] //f1
  permutatedList.push(item1)
  const range1 = cubeBoxList.slice(1, 3) //u2 u3
  permutatedList.push(...range1)
  const item2 = cubeBoxList[21] //f4
  permutatedList.push(item2)
  const range2 = cubeBoxList.slice(4, 6) //u5 u6
  permutatedList.push(...range2)
  const item3 = cubeBoxList[24] //f7
  permutatedList.push(item3)
  const range3 = cubeBoxList.slice(7, 9) //u8 u9
  permutatedList.push(...range3)
  const item4 = cubeBoxList[11] //l3
  permutatedList.push(item4)
  const item5 = cubeBoxList[14] //l6
  permutatedList.push(item5)
  const item6 = cubeBoxList[17] //l9
  permutatedList.push(item6)
  const item7 = cubeBoxList[10] //l2
  permutatedList.push(item7)
  const item8 = cubeBoxList[13] //l5
  permutatedList.push(item8)
  const item9 = cubeBoxList[16] //l8
  permutatedList.push(item9)
  const item10 = cubeBoxList[9] //l1
  permutatedList.push(item10)
  const item11 = cubeBoxList[12] //l4
  permutatedList.push(item11)
  const item12 = cubeBoxList[15] //l7
  permutatedList.push(item12)
  const item14 = cubeBoxList[45] //d1
  permutatedList.push(item14)
  const range4 = cubeBoxList.slice(19, 21) //f2 f3
  permutatedList.push(...range4)
  const item15 = cubeBoxList[48] //d4
  permutatedList.push(item15)
  const range5 = cubeBoxList.slice(22, 24) //f5 f6
  permutatedList.push(...range5)
  const item16 = cubeBoxList[51] //d7
  permutatedList.push(item16)
  const range6 = cubeBoxList.slice(25, 27) //f8 f9
  permutatedList.push(...range6)
  const range7 = cubeBoxList.slice(27, 38) //r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2
  permutatedList.push(...range7)
  const item17 = cubeBoxList[6] //u7
  permutatedList.push(item17)
  const range8 = cubeBoxList.slice(39, 41) //b4 b5
  permutatedList.push(...range8)
  const item18 = cubeBoxList[3] //u4
  permutatedList.push(item18)
  const range9 = cubeBoxList.slice(42, 44) //b7 b8
  permutatedList.push(...range9)
  const item19 = cubeBoxList[0] //u1
  permutatedList.push(item19)
  const item20 = cubeBoxList[44] //b9
  permutatedList.push(item20)
  const range10 = cubeBoxList.slice(46, 48) //d2,d3
  permutatedList.push(...range10)
  const item21 = cubeBoxList[41] //b6
  permutatedList.push(item21)
  const range11 = cubeBoxList.slice(49, 51) //d5,d6
  permutatedList.push(...range11)
  const item22 = cubeBoxList[38] //b3
  permutatedList.push(item22)
  const range12 = cubeBoxList.slice(52, 54) //d8,d9
  permutatedList.push(...range12)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'f' clockwise 👇🏻
// [u1,u2,u3,u4,u5,u6,l9,l6,l3,l1,l2,d1,l4,l5,d2,l7,l8,d3,f7,f4,f1,f8,f5,f2,f9,f6,f3,u7,r2,r3,u8,r5,r6,u9,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,r7,r4,r1,d4,d5,d6,d7,d8,d9]
export const fClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 6) //u1,u2,u3,u4,u5,u6
  permutatedList.push(...range1)
  const item1 = cubeBoxList[17] //l9
  permutatedList.push(item1)
  const item2 = cubeBoxList[14] //l6
  permutatedList.push(item2)
  const item3 = cubeBoxList[11] //l3
  permutatedList.push(item3)
  const item4 = cubeBoxList[9] //l1
  permutatedList.push(item4)
  const item5 = cubeBoxList[10] //l2
  permutatedList.push(item5)
  const item6 = cubeBoxList[45] //d1
  permutatedList.push(item6)
  const range2 = cubeBoxList.slice(12, 14) //l4,l5
  permutatedList.push(...range2)
  const item7 = cubeBoxList[46] //d2
  permutatedList.push(item7)
  const range3 = cubeBoxList.slice(15, 17) //l7,l8
  permutatedList.push(...range3)
  const item8 = cubeBoxList[47] //d3
  permutatedList.push(item8)
  const item9 = cubeBoxList[24] //f7
  permutatedList.push(item9)
  const item10 = cubeBoxList[21] //f4
  permutatedList.push(item10)
  const item11 = cubeBoxList[18] //f1
  permutatedList.push(item11)
  const item12 = cubeBoxList[25] //f8
  permutatedList.push(item12)
  const item13 = cubeBoxList[22] //f5
  permutatedList.push(item13)
  const item14 = cubeBoxList[19] //f2
  permutatedList.push(item14)
  const item15 = cubeBoxList[26] //f9
  permutatedList.push(item15)
  const item16 = cubeBoxList[23] //f6
  permutatedList.push(item16)
  const item17 = cubeBoxList[20] //f3
  permutatedList.push(item17)
  const item18 = cubeBoxList[6] //u7
  permutatedList.push(item18)
  const range4 = cubeBoxList.slice(28, 30) //r2,r3
  permutatedList.push(...range4)
  const item19 = cubeBoxList[7] //u8
  permutatedList.push(item19)
  const range5 = cubeBoxList.slice(31, 33) //r5,r6
  permutatedList.push(...range5)
  const item20 = cubeBoxList[8] //u9
  permutatedList.push(item20)
  const range6 = cubeBoxList.slice(34, 45) //r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9
  permutatedList.push(...range6)
  const item21 = cubeBoxList[33] //r7
  permutatedList.push(item21)
  const item22 = cubeBoxList[30] //r4
  permutatedList.push(item22)
  const item23 = cubeBoxList[27] //r1
  permutatedList.push(item23)
  const range7 = cubeBoxList.slice(48, 54) //d4,d5,d6,d7,d8,d9
  permutatedList.push(...range7)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'f' counter clockwise 👇🏻
// [u1,u2,u3,u4,u5,u6,r1,r4,r7,l1,l2,u9,l4,l5,u8,l7,l8,u7,f3,f6,f9,f2,f5,f8,f1,f4,f7,d3,r2,r3,d2,r5,r6,d1,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,l3,l6,l9,d4,d5,d6,d7,d8,d9]
export const fCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 6) //u1,u2,u3,u4,u5,u6
  permutatedList.push(...range1)
  const item1 = cubeBoxList[27] //r1
  permutatedList.push(item1)
  const item2 = cubeBoxList[30] //r4
  permutatedList.push(item2)
  const item3 = cubeBoxList[33] //r7
  permutatedList.push(item3)
  const item4 = cubeBoxList[9] //l1
  permutatedList.push(item4)
  const item5 = cubeBoxList[10] //l2
  permutatedList.push(item5)
  const item6 = cubeBoxList[8] //u9
  permutatedList.push(item6)
  const range2 = cubeBoxList.slice(12, 14) //l4,l5
  permutatedList.push(...range2)
  const item7 = cubeBoxList[7] //u8
  permutatedList.push(item7)
  const range3 = cubeBoxList.slice(15, 17) //l7,l8
  permutatedList.push(...range3)
  const item8 = cubeBoxList[6] //u7
  permutatedList.push(item8)
  const item9 = cubeBoxList[20] //f3
  permutatedList.push(item9)
  const item10 = cubeBoxList[23] //f6
  permutatedList.push(item10)
  const item11 = cubeBoxList[26] //f9
  permutatedList.push(item11)
  const item12 = cubeBoxList[19] //f2
  permutatedList.push(item12)
  const item13 = cubeBoxList[22] //f5
  permutatedList.push(item13)
  const item14 = cubeBoxList[25] //f8
  permutatedList.push(item14)
  const item15 = cubeBoxList[18] //f1
  permutatedList.push(item15)
  const item16 = cubeBoxList[21] //f4
  permutatedList.push(item16)
  const item17 = cubeBoxList[24] //f7
  permutatedList.push(item17)
  const item18 = cubeBoxList[47] //d3
  permutatedList.push(item18)
  const range4 = cubeBoxList.slice(28, 30) //r2,r3
  permutatedList.push(...range4)
  const item19 = cubeBoxList[46] //d2
  permutatedList.push(item19)
  const range5 = cubeBoxList.slice(31, 33) //r5,r6
  permutatedList.push(...range5)
  const item20 = cubeBoxList[45] //d1
  permutatedList.push(item20)
  const range6 = cubeBoxList.slice(34, 45) //r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9
  permutatedList.push(...range6)
  const item21 = cubeBoxList[11] //l3
  permutatedList.push(item21)
  const item22 = cubeBoxList[14] //l6
  permutatedList.push(item22)
  const item23 = cubeBoxList[17] //l9
  permutatedList.push(item23)
  const range7 = cubeBoxList.slice(48, 54) //d4,d5,d6,d7,d8,d9
  permutatedList.push(...range7)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'r' clockwise 👇🏻
// [u1,u2,f3,u4,u5,f6,u7,u8,f9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,d3,f4,f5,d6,f7,f8,d9,r7,r4,r1,r8,r5,r2,r9,r6,r3,u9,b2,b3,u6,b5,b6,u3,b8,b9,d1,d2,b7,d4,d5,b4,d7,d8,b1]
export const rClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 2) //u1,u2
  permutatedList.push(...range1)
  const item1 = cubeBoxList[20] //f3
  permutatedList.push(item1)
  const range2 = cubeBoxList.slice(3, 5) //u4,u5
  permutatedList.push(...range2)
  const item2 = cubeBoxList[23] //f6
  permutatedList.push(item2)
  const range3 = cubeBoxList.slice(6, 8) //u7,u8
  permutatedList.push(...range3)
  const item3 = cubeBoxList[26] //f9
  permutatedList.push(item3)
  const range4 = cubeBoxList.slice(9, 20) //l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2
  permutatedList.push(...range4)
  const item4 = cubeBoxList[47] //d3
  permutatedList.push(item4)
  const range5 = cubeBoxList.slice(21, 23) //f4,f5
  permutatedList.push(...range5)
  const item5 = cubeBoxList[50] //d6
  permutatedList.push(item5)
  const range6 = cubeBoxList.slice(24, 26) //f7,f8
  permutatedList.push(...range6)
  const item6 = cubeBoxList[53] //d9
  permutatedList.push(item6)
  const item7 = cubeBoxList[33] //r7
  permutatedList.push(item7)
  const item8 = cubeBoxList[30] //r4
  permutatedList.push(item8)
  const item9 = cubeBoxList[27] //r1
  permutatedList.push(item9)
  const item10 = cubeBoxList[34] //r8
  permutatedList.push(item10)
  const item11 = cubeBoxList[31] //r5
  permutatedList.push(item11)
  const item12 = cubeBoxList[28] //r2
  permutatedList.push(item12)
  const item13 = cubeBoxList[35] //r9
  permutatedList.push(item13)
  const item14 = cubeBoxList[32] //r6
  permutatedList.push(item14)
  const item15 = cubeBoxList[29] //r3
  permutatedList.push(item15)
  const item16 = cubeBoxList[8] //u9
  permutatedList.push(item16)
  const range7 = cubeBoxList.slice(37, 39) //b2,b3
  permutatedList.push(...range7)
  const item17 = cubeBoxList[5] //u6
  permutatedList.push(item17)
  const range8 = cubeBoxList.slice(40, 42) //b5,b6
  permutatedList.push(...range8)
  const item18 = cubeBoxList[2] //u3
  permutatedList.push(item18)
  const range9 = cubeBoxList.slice(43, 47) //b8,b9,d1,d2
  permutatedList.push(...range9)
  const item19 = cubeBoxList[42] //b7
  permutatedList.push(item19)
  const range10 = cubeBoxList.slice(48, 50) //d4,d5
  permutatedList.push(...range10)
  const item20 = cubeBoxList[39] //b4
  permutatedList.push(item20)
  const range11 = cubeBoxList.slice(51, 53) //d7,d8
  permutatedList.push(...range11)
  const item21 = cubeBoxList[36] //b1
  permutatedList.push(item21)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'r' counter clockwise 👇🏻
// [u1,u2,b7,u4,u5,b4,u7,u8,b1,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,u3,f4,f5,u6,f7,f8,u9,r3,r6,r9,r2,r5,r8,r1,r4,r7,d9,b2,b3,d6,b5,b6,d3,b8,b9,d1,d2,f3,d4,d5,f6,d7,d8,f9]
export const rCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 2) //u1,u2
  permutatedList.push(...range1)
  const item1 = cubeBoxList[42] //b7
  permutatedList.push(item1)
  const range2 = cubeBoxList.slice(3, 5) //u4,u5
  permutatedList.push(...range2)
  const item2 = cubeBoxList[39] //b4
  permutatedList.push(item2)
  const range3 = cubeBoxList.slice(6, 8) //u7,u8
  permutatedList.push(...range3)
  const item3 = cubeBoxList[36] //b1
  permutatedList.push(item3)
  const range4 = cubeBoxList.slice(9, 20) //l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2
  permutatedList.push(...range4)
  const item4 = cubeBoxList[2] //u3
  permutatedList.push(item4)
  const range5 = cubeBoxList.slice(21, 23) //f4,f5
  permutatedList.push(...range5)
  const item5 = cubeBoxList[5] //u6
  permutatedList.push(item5)
  const range6 = cubeBoxList.slice(24, 26) //f7,f8
  permutatedList.push(...range6)
  const item6 = cubeBoxList[8] //u9
  permutatedList.push(item6)
  const item7 = cubeBoxList[29] //r3
  permutatedList.push(item7)
  const item8 = cubeBoxList[32] //r6
  permutatedList.push(item8)
  const item9 = cubeBoxList[35] //r9
  permutatedList.push(item9)
  const item20 = cubeBoxList[28] //r2
  permutatedList.push(item20)
  const item21 = cubeBoxList[31] //r5
  permutatedList.push(item21)
  const item10 = cubeBoxList[34] //r8
  permutatedList.push(item10)
  const item11 = cubeBoxList[27] //r1
  permutatedList.push(item11)
  const item12 = cubeBoxList[30] //r4
  permutatedList.push(item12)
  const item13 = cubeBoxList[33] //r7
  permutatedList.push(item13)
  const item14 = cubeBoxList[53] //d9
  permutatedList.push(item14)
  const range7 = cubeBoxList.slice(37, 39) //b2,b3
  permutatedList.push(...range7)
  const item15 = cubeBoxList[50] //d6
  permutatedList.push(item15)
  const range8 = cubeBoxList.slice(40, 42) //b5,b6
  permutatedList.push(...range8)
  const item16 = cubeBoxList[47] //d3
  permutatedList.push(item16)
  const range9 = cubeBoxList.slice(43, 47) //b8,b9,d1,d2
  permutatedList.push(...range9)
  const item17 = cubeBoxList[20] //f3
  permutatedList.push(item17)
  const range10 = cubeBoxList.slice(48, 50) //d4,d5
  permutatedList.push(...range10)
  const item18 = cubeBoxList[23] //f6
  permutatedList.push(item18)
  const range11 = cubeBoxList.slice(51, 53) //d7,d8
  permutatedList.push(...range11)
  const item19 = cubeBoxList[26] //f9
  permutatedList.push(item19)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'd' clockwise 👇🏻
// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,b7,b8,b9,f1,f2,f3,f4,f5,f6,l7,l8,l9,r1,r2,r3,r4,r5,r6,f7,f8,f9,b1,b2,b3,b4,b5,b6,r7,r8,r9,d7,d4,d1,d8,d5,d2,d9,d6,d3]
export const dClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 15) //u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6
  permutatedList.push(...range1)
  const range2 = cubeBoxList.slice(42, 45) //b7,b8,b9
  permutatedList.push(...range2)
  const range3 = cubeBoxList.slice(18, 24) //f1,f2,f3,f4,f5,f6
  permutatedList.push(...range3)
  const range4 = cubeBoxList.slice(15, 18) //l7,l8,l9
  permutatedList.push(...range4)
  const range5 = cubeBoxList.slice(27, 33) //r1,r2,r3,r4,r5,r6
  permutatedList.push(...range5)
  const range6 = cubeBoxList.slice(24, 27) //f7,f8,f9
  permutatedList.push(...range6)
  const range7 = cubeBoxList.slice(36, 42) //b1,b2,b3,b4,b5,b6
  permutatedList.push(...range7)
  const range8 = cubeBoxList.slice(33, 36) //r7,r8,r9
  permutatedList.push(...range8)
  const item1 = cubeBoxList[51] //d7
  permutatedList.push(item1)
  const item2 = cubeBoxList[48] //d4
  permutatedList.push(item2)
  const item3 = cubeBoxList[45] //d1
  permutatedList.push(item3)
  const item4 = cubeBoxList[52] //d8
  permutatedList.push(item4)
  const item5 = cubeBoxList[49] //d5
  permutatedList.push(item5)
  const item6 = cubeBoxList[46] //d2
  permutatedList.push(item6)
  const item7 = cubeBoxList[53] //d9
  permutatedList.push(item7)
  const item8 = cubeBoxList[50] //d6
  permutatedList.push(item8)
  const item9 = cubeBoxList[47] //d3
  permutatedList.push(item9)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'd' counter clockwise 👇🏻
// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,f7,f8,f9,f1,f2,f3,f4,f5,f6,r7,r8,r9,r1,r2,r3,r4,r5,r6,b7,b8,b9,b1,b2,b3,b4,b5,b6,l7,l8,l9,d3,d6,d9,d2,d5,d8,d1,d4,d7]
export const dCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const range1 = cubeBoxList.slice(0, 15) //u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6
  permutatedList.push(...range1)
  const range2 = cubeBoxList.slice(24, 27) //f7,f8,f9
  permutatedList.push(...range2)
  const range3 = cubeBoxList.slice(18, 24) //f1,f2,f3,f4,f5,f6
  permutatedList.push(...range3)
  const range4 = cubeBoxList.slice(33, 36) //r7,r8,r9
  permutatedList.push(...range4)
  const range5 = cubeBoxList.slice(27, 33) //r1,r2,r3,r4,r5,r6
  permutatedList.push(...range5)
  const range6 = cubeBoxList.slice(42, 45) //b7,b8,b9
  permutatedList.push(...range6)
  const range7 = cubeBoxList.slice(36, 42) //b1,b2,b3,b4,b5,b6
  permutatedList.push(...range7)
  const range8 = cubeBoxList.slice(15, 18) //l7,l8,l9
  permutatedList.push(...range8)
  const item1 = cubeBoxList[47] //d3
  permutatedList.push(item1)
  const item2 = cubeBoxList[50] //d6
  permutatedList.push(item2)
  const item3 = cubeBoxList[53] //d9
  permutatedList.push(item3)
  const item4 = cubeBoxList[46] //d2
  permutatedList.push(item4)
  const item5 = cubeBoxList[49] //d5
  permutatedList.push(item5)
  const item6 = cubeBoxList[52] //d8
  permutatedList.push(item6)
  const item7 = cubeBoxList[45] //d1
  permutatedList.push(item7)
  const item8 = cubeBoxList[48] //d4
  permutatedList.push(item8)
  const item9 = cubeBoxList[51] //d7
  permutatedList.push(item9)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'b' clockwise 👇🏻
// [r3,r6,r9,u4,u5,u6,u7,u8,u9,u3,l2,l3,u2,l5,l6,u1,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,d9,r4,r5,d8,r7,r8,d7,b7,b4,b1,b8,b5,b2,b9,b6,b3,d1,d2,d3,d4,d5,d6,l1,l4,l7]
export const bClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const item1 = cubeBoxList[29] //r3
  permutatedList.push(item1)
  const item2 = cubeBoxList[32] //r6
  permutatedList.push(item2)
  const item3 = cubeBoxList[35] //r9
  permutatedList.push(item3)
  const range1 = cubeBoxList.slice(3, 9) //u4,u5,u6,u7,u8,u9
  permutatedList.push(...range1)
  const item4 = cubeBoxList[2] //u3
  permutatedList.push(item4)
  const range2 = cubeBoxList.slice(10, 12) //l2,l3
  permutatedList.push(...range2)
  const item5 = cubeBoxList[1] //u2
  permutatedList.push(item5)
  const range3 = cubeBoxList.slice(13, 15) //l5,l6
  permutatedList.push(...range3)
  const item6 = cubeBoxList[0] //u1
  permutatedList.push(item6)
  const range4 = cubeBoxList.slice(16, 29) //l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2
  permutatedList.push(...range4)
  const item7 = cubeBoxList[53] //d9
  permutatedList.push(item7)
  const range5 = cubeBoxList.slice(30, 32) //r4,r5
  permutatedList.push(...range5)
  const item8 = cubeBoxList[52] //d8
  permutatedList.push(item8)
  const range6 = cubeBoxList.slice(33, 35) //r7,r8
  permutatedList.push(...range6)
  const item9 = cubeBoxList[51] //d7
  permutatedList.push(item9)
  const item10 = cubeBoxList[42] //b7
  permutatedList.push(item10)
  const item11 = cubeBoxList[39] //b4
  permutatedList.push(item11)
  const item12 = cubeBoxList[36] //b1
  permutatedList.push(item12)
  const item13 = cubeBoxList[43] //b8
  permutatedList.push(item13)
  const item14 = cubeBoxList[40] //b5
  permutatedList.push(item14)
  const item15 = cubeBoxList[37] //b2
  permutatedList.push(item15)
  const item16 = cubeBoxList[44] //b9
  permutatedList.push(item16)
  const item17 = cubeBoxList[41] //b6
  permutatedList.push(item17)
  const item18 = cubeBoxList[38] //b3
  permutatedList.push(item18)
  const range7 = cubeBoxList.slice(45, 51) //d1,d2,d3,d4,d5,d6
  permutatedList.push(...range7)
  const item19 = cubeBoxList[9] //l1
  permutatedList.push(item19)
  const item20 = cubeBoxList[12] //l4
  permutatedList.push(item20)
  const item21 = cubeBoxList[15] //l7
  permutatedList.push(item21)

  return permutatedList
}

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'b' counter clockwise 👇🏻
// [l7,l4,l1,u4,u5,u6,u7,u8,u9,d7,l2,l3,d8,l5,l6,d9,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,u1,r4,r5,u2,r7,r8,u3,b3,b6,b9,b2,b5,b8,b1,b4,b7,d1,d2,d3,d4,d5,d6,r9,r6,r3]
export const bCounterClockwisePermutation = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  const permutatedList = []
  const item1 = cubeBoxList[15] //l7
  permutatedList.push(item1)
  const item2 = cubeBoxList[12] //l4
  permutatedList.push(item2)
  const item3 = cubeBoxList[9] //l1
  permutatedList.push(item3)
  const range1 = cubeBoxList.slice(3, 9) //u4,u5,u6,u7,u8,u9
  permutatedList.push(...range1)
  const item4 = cubeBoxList[51] //d7
  permutatedList.push(item4)
  const range2 = cubeBoxList.slice(10, 12) //l2,l3
  permutatedList.push(...range2)
  const item5 = cubeBoxList[52] //d8
  permutatedList.push(item5)
  const range3 = cubeBoxList.slice(13, 15) //l5,l6
  permutatedList.push(...range3)
  const item6 = cubeBoxList[53] //d9
  permutatedList.push(item6)
  const range4 = cubeBoxList.slice(16, 29) //l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2
  permutatedList.push(...range4)
  const item7 = cubeBoxList[0] //u1
  permutatedList.push(item7)
  const range5 = cubeBoxList.slice(30, 32) //r4,r5
  permutatedList.push(...range5)
  const item8 = cubeBoxList[1] //u2
  permutatedList.push(item8)
  const range6 = cubeBoxList.slice(33, 35) //r7,r8
  permutatedList.push(...range6)
  const item9 = cubeBoxList[2] //u3
  permutatedList.push(item9)
  const item10 = cubeBoxList[38] //b3
  permutatedList.push(item10)
  const item11 = cubeBoxList[41] //b6
  permutatedList.push(item11)
  const item12 = cubeBoxList[44] //b9
  permutatedList.push(item12)
  const item13 = cubeBoxList[37] //b2
  permutatedList.push(item13)
  const item14 = cubeBoxList[40] //b5
  permutatedList.push(item14)
  const item15 = cubeBoxList[43] //b8
  permutatedList.push(item15)
  const item16 = cubeBoxList[36] //b1
  permutatedList.push(item16)
  const item17 = cubeBoxList[39] //b4
  permutatedList.push(item17)
  const item18 = cubeBoxList[42] //b7
  permutatedList.push(item18)
  const range7 = cubeBoxList.slice(45, 51) //d1,d2,d3,d4,d5,d6
  permutatedList.push(...range7)
  const item19 = cubeBoxList[35] //r9
  permutatedList.push(item19)
  const item20 = cubeBoxList[32] //r6
  permutatedList.push(item20)
  const item21 = cubeBoxList[29] //r3
  permutatedList.push(item21)

  return permutatedList
}

export const shuffleCube = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  return cubeBoxList.sort(() => Math.random() - 0.5)
}
