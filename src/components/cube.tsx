import CubeBoxType from '../types/cubeBox'
import CubeFace from './cubeFace'

interface ICubeProps {
  cubeBoxList: Array<CubeBoxType>
}

const Cube = (props: ICubeProps) => {
  const { cubeBoxList } = props

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <CubeFace cubeBoxList={cubeBoxList.slice(0, 9)} />
      </div>
      <div className="flex gap-2">
        <CubeFace cubeBoxList={cubeBoxList.slice(9, 18)} />
        <CubeFace cubeBoxList={cubeBoxList.slice(18, 27)} />
        <CubeFace cubeBoxList={cubeBoxList.slice(27, 36)} />
      </div>
      <div className="flex justify-center">
        <CubeFace cubeBoxList={cubeBoxList.slice(45, 54)} />
      </div>
      <div className="flex justify-center">
        <CubeFace cubeBoxList={cubeBoxList.slice(36, 45)} />
      </div>
    </div>
  )
}

export default Cube
