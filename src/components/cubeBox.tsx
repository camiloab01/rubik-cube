interface ICubeBoxPops {
  id: string
  color: string
}

const CubeBox = (props: ICubeBoxPops) => {
  const { id, color } = props
  return (
    <div
      className={`rounded-lg w-10 h-10 p-2`}
      style={{ backgroundColor: color }}
    >
      <p className="text-gray-900 font-medium">{id}</p>
    </div>
  )
}

export default CubeBox
