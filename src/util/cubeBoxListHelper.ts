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

// [u1,u2,u3,u4,u5,u6,u7,u8,u9,l1,l2,l3,l4,l5,l6,l7,l8,l9,f1,f2,f3,f4,f5,f6,f7,f8,f9,r1,r2,r3,r4,r5,r6,r7,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,d1,d2,d3,d4,d5,d6,d7,d8,d9]
// rotate 'u' counter clockwise
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
// rotate 'l' clockwise
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
// rotate 'l' counter clockwise
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
// rotate 'f' clockwise
// [u1,u2,u3,u4,u5,u6,l9,l6,l3,l1,l2,d1,l4,l5,d2,l7,l8,d3,f7,f4,f1,f8,f5,f2,f9,f6,f3,u7,r2,r3,u8,r5,r6,u9,r8,r9,b1,b2,b3,b4,b5,b6,b7,b8,b9,r7,r4,r1,d4,d5,d6,d7,d8,d9]
//  00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53
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

export const shuffleCube = (
  cubeBoxList: Array<CubeBoxType>
): Array<CubeBoxType> => {
  return cubeBoxList.sort(() => Math.random() - 0.5)
}
