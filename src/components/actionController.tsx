import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/solid'

const ActionController = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl text-left my-5">Cube actions</h2>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate upper face <span className="text-yellow-400">(U)</span>:
        </p>
        <button className="bg-yellow-400 hover:opacity-75 rounded-full">
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button className="bg-yellow-400 hover:opacity-75 rounded-full">
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate left face <span className="text-blue-600">(L)</span>:
        </p>
        <button className="bg-blue-600 hover:opacity-75 rounded-full">
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button className="bg-blue-600 hover:opacity-75 rounded-full">
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate front face <span className="text-red-600">(F)</span>:
        </p>
        <button className="bg-red-600 hover:opacity-75 rounded-full">
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button className="bg-red-600 hover:opacity-75 rounded-full">
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate bottom face <span className="text-white">(U)</span>:
        </p>
        <button className="bg-white hover:opacity-75 rounded-full">
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button className="bg-white hover:opacity-75 rounded-full">
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <p className="font-semibold">
          Rotate back face <span className="text-orange-500">(B)</span>:
        </p>
        <button className="bg-orange-500 hover:opacity-75 rounded-full">
          <ArrowUturnLeftIcon className="size-3 text-black" />
        </button>
        <button className="bg-orange-500 hover:opacity-75 rounded-full">
          <ArrowUturnRightIcon className="size-3 text-black" />
        </button>
      </div>
    </div>
  )
}

export default ActionController
