import React from 'react'

type Props = {
  value: string
  className?: string
}

const DivBorderShape = ({ value, className }: Props) => {
  console.log(className);
  return (
    <div className={`rounded-[100px] w-96 h-32 text-black font-bold text-center p-10 ${className}`}  >
      {value}
    </div>
  )
}

export default DivBorderShape