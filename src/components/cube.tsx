// u1 u2 u3    u7 u4 u1    +6 +2 -2
// u4 u5 u6 => u8 u5 u2 => +4  = -4
// u7 u8 u9    u9 u6 u3    +2 -2 -6

import CubeFace from './cubeFace'

// Yellow: U(Upper)
// Red: F(Front)
// Blue: L(Left)
// Green: R(Right)
// White: D(Debs)
// Orange: B(Back)

// Yellow: [Blue, Red, Green, Orange]
// Blue: [Yellow, Orange, White, Red]
// Red: [Blue, White, Green, Yellow]
// Green: [Yellow, Red, White, Orange]
// White: [Blue, Orange, Green, Red]
// Orange: [White, Blue, Yellow, Green]

const Cube = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <CubeFace color="rgb(250 204 21)" position="U" />
      </div>
      <div className="flex gap-2">
        <CubeFace color="rgb(29 78 216)" position="L" />
        <CubeFace color="rgb(185 28 28)" position="F" />
        <CubeFace color="rgb(21 128 61)" position="R" />
      </div>
      <div className="flex justify-center">
        <CubeFace color="rgb(255 255 255)" position="D" />
      </div>
      <div className="flex justify-center">
        <CubeFace color="rgb(249 115 22)" position="B" />
      </div>
    </div>
  )
}

export default Cube
