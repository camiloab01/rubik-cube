import CubeBoxType from '../types/cubeBox'
import CubeBox from './cubeBox'

interface ICubeFaceProps {
  cubeBoxList: Array<CubeBoxType>
}

const CubeFace = (props: ICubeFaceProps) => {
  const { cubeBoxList } = props

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {cubeBoxList.slice(0, 3).map((cubeBox) => {
          return (
            <CubeBox key={cubeBox.id} color={cubeBox.color} id={cubeBox.id} />
          )
        })}
      </div>
      <div className="flex gap-2">
        {cubeBoxList.slice(3, 6).map((cubeBox) => {
          return (
            <CubeBox key={cubeBox.id} color={cubeBox.color} id={cubeBox.id} />
          )
        })}
      </div>
      <div className="flex gap-2">
        {cubeBoxList.slice(6, 9).map((cubeBox) => {
          return (
            <CubeBox key={cubeBox.id} color={cubeBox.color} id={cubeBox.id} />
          )
        })}
      </div>
    </div>
  )
}

export default CubeFace
