import CubeBox from './cubeBox'

interface CubeFaceProps {
  color: string
  position: string
}

const CubeFace = (props: CubeFaceProps) => {
  const { color, position } = props

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <CubeBox color={color} id={`${position}1`} />
        <CubeBox color={color} id={`${position}2`} />
        <CubeBox color={color} id={`${position}3`} />
      </div>
      <div className="flex gap-2">
        <CubeBox color={color} id={`${position}4`} />
        <CubeBox color={color} id={`${position}5`} />
        <CubeBox color={color} id={`${position}6`} />
      </div>
      <div className="flex gap-2">
        <CubeBox color={color} id={`${position}7`} />
        <CubeBox color={color} id={`${position}8`} />
        <CubeBox color={color} id={`${position}9`} />
      </div>
    </div>
  )
}

export default CubeFace
