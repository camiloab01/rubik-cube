import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/solid'
import FaceEnum from '../types/faceEnum'

interface IActionControllerProp {
  setIsRotateClockwise: (isRotateClockwise: boolean) => void
  setFaceToRotate: (faceToRotate: FaceEnum) => void
}

const ActionController = (props: IActionControllerProp) => {
  const { setIsRotateClockwise, setFaceToRotate } = props

  const handleRotate = (isClockwise: boolean, faceToRotate: FaceEnum) => {
    setIsRotateClockwise(isClockwise)
    setFaceToRotate(faceToRotate)
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl text-left my-5">Cube actions</h2>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate upper face <span className="text-yellow-400">(U)</span>:
        </p>
        <button
          className="bg-yellow-400 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Upper)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-yellow-400 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Upper)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate left face <span className="text-blue-600">(L)</span>:
        </p>
        <button
          className="bg-blue-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Left)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-blue-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Left)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate front face <span className="text-red-600">(F)</span>:
        </p>
        <button
          className="bg-red-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Front)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-red-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Front)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate right face <span className="text-green-600">(R)</span>:
        </p>
        <button
          className="bg-green-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Right)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-green-600 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Right)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate bottom face <span className="text-white">(U)</span>:
        </p>
        <button
          className="bg-white hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Bottom)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-white hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Bottom)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate back face <span className="text-orange-500">(B)</span>:
        </p>
        <button
          className="bg-orange-500 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(false, FaceEnum.Back)}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-orange-500 hover:opacity-75 rounded-full"
          onClick={() => handleRotate(true, FaceEnum.Back)}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
    </div>
  )
}

export default ActionController
