import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/solid'

interface IActionControllerProps {
  handleShuffleCube: () => void
  handleResetCube: () => void
  handleUClockwise: () => void
  handleUCounterClockwise: () => void
  handleLClockwise: () => void
  handleLCounterClockwise: () => void
  handleFClockwise: () => void
  handleFCounterClockwise: () => void
  handleRClockwise: () => void
  handleRCounterClockwise: () => void
  handleDClockwise: () => void
  handleDCounterClockwise: () => void
  handleBClockwise: () => void
  handleBCounterClockwise: () => void
}

const ActionController = (props: IActionControllerProps) => {
  const {
    handleResetCube,
    handleShuffleCube,
    handleUClockwise,
    handleUCounterClockwise,
    handleLClockwise,
    handleLCounterClockwise,
    handleFClockwise,
    handleFCounterClockwise,
    handleRClockwise,
    handleRCounterClockwise,
    handleDClockwise,
    handleDCounterClockwise,
    handleBClockwise,
    handleBCounterClockwise,
  } = props

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl text-left my-5">Cube actions</h2>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate upper face <span className="text-yellow-400">(U)</span>:
        </p>
        <button
          className="bg-yellow-400 hover:opacity-75 rounded-full"
          onClick={handleUCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-yellow-400 hover:opacity-75 rounded-full"
          onClick={handleUClockwise}
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
          onClick={handleLCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-blue-600 hover:opacity-75 rounded-full"
          onClick={handleLClockwise}
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
          onClick={handleFCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-red-600 hover:opacity-75 rounded-full"
          onClick={handleFClockwise}
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
          onClick={handleRCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-green-600 hover:opacity-75 rounded-full"
          onClick={handleRClockwise}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate bottom face <span className="text-white">(D)</span>:
        </p>
        <button
          className="bg-white hover:opacity-75 rounded-full"
          onClick={handleDCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-white hover:opacity-75 rounded-full"
          onClick={handleDClockwise}
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
          onClick={handleBCounterClockwise}
        >
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button
          className="bg-orange-500 hover:opacity-75 rounded-full"
          onClick={handleBClockwise}
        >
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex justify-center items-center my-6 gap-2">
        <button
          className="bg-purple-700 hover:opacity-75 rounded-full"
          onClick={handleShuffleCube}
        >
          <p className="font-semibold">Shuffle cube</p>
        </button>
        <button
          className="bg-purple-700 hover:opacity-75 rounded-full"
          onClick={handleResetCube}
        >
          <p className="font-semibold">Reset cube</p>
        </button>
      </div>
    </div>
  )
}

export default ActionController
