import React from 'react'
import DivBorderShape from '../components/corner-shape/DivBorderShape'

type Props = {}


// ? Useful console F12 dev command
// CSS.supports("corner-shape", "squircle") -> true/false

// npm i -D @toolwind/corner-shape

// TODO: Current props
// corner-squircle
// corner-shape
// corner-round
// corner-scoop
// corner-bevel
// corner-notch
// corner-square
// corner-superellipse/2 -> (pass any number)
const JoshTriedCoding = (props: Props) => {
  return (
    <>
      <h1 className='mb-8'>Josh Tried Coding</h1>
      <div className='grid w-screen place-items-center space-y-4'>
        <h2 className='text-center'>Using raw CSS</h2>
        <div className='squircle rounded-[100px] w-96 h-32 bg-white font-bold text-black text-center p-10' >
          .squircle
        </div>
        <h2 className='text-center'>Using Tailwind plugin "@toolwind/corner-shape"</h2>
        <DivBorderShape value="corner-squircle" className="corner-squircle bg-green-400" />
        <DivBorderShape value="corner-shape" className="corner-shape bg-blue-400" />
        <DivBorderShape value="corner-round" className="corner-round bg-red-400" />
        <DivBorderShape value="corner-scoop" className="corner-scoop bg-purple-400" />
        <DivBorderShape value="corner-bevel" className="corner-bevel bg-yellow-400" />
        <DivBorderShape value="corner-notch" className="corner-notch bg-pink-400" />
        <DivBorderShape value="corner-square" className="corner-square bg-teal-400" />
        <DivBorderShape value="corner-superellipse/2" className="corner-superellipse/2 bg-purple-400" />
      </div>

    </>
  )
}

export default JoshTriedCoding