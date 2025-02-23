

const CrashCourse = () => {
  return (
    <>
      <div className="bg-twitter-blue p-12 container">
        <h1 className="text-5xl font-bold text-white">This is TailwindCSS v4</h1>
        <button className="animate-pulse bg-amber text-alabaster border-4 rounded text-2xl font-bold mt-12 px-6 py-4">Click here!</button>
        <input type="text" placeholder="Enter your name" className="bg-white text-lg text-amber border-2 p-4 rounded ml-4 outline" />
      </div>

      <div className="@container border p-4">
        <h2>@lg</h2>
        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4">
          <div className="bg-twitter-blue h-40"></div>
          <div className="bg-green-500 h-40"></div>
          <div className="bg-yellow-500 h-40"></div>
          <div className="bg-red-500 h-40"></div>
        </div>
      </div>

      <div className="@container border p-4">
        <h2>@max-md</h2>
        <div className="grid grid-cols-3 @max-md:grid-cols-1 gap-4">
          <div className="bg-twitter-blue h-40"></div>
          <div className="bg-green-500 h-40"></div>
          <div className="bg-yellow-500 h-40"></div>

        </div>
      </div>

      <div className="@container border p-4">
        <h2>@min-md:@max-xl</h2>
        <div className="flex gap-4">
          <div className="bg-twitter-blue h-40 w-64"></div>
          <div className="bg-green-500 h-40 w-64 @min-md:@max-xl:hidden"></div>
          <div className="bg-yellow-500 h-40 w-64"></div>

        </div>
      </div>

      <div className="@container min-h-screen flex items-center justify-center">
        <div className="bg-blue-500 size-96 flex items-center justify-center text-white text-4xl font-bold transform rotate-x-35 rotate-y-35">3D Rotate</div>

      </div>

      <div className="@container min-h-screen flex items-center justify-center perspective-1000">
        <div className="bg-green-500 size-96 flex items-center justify-center text-white text-4xl font-bold transform-style-3d transform hover:scale-150 hover:translate-z-20 transition-transform duration-300">3D Scale</div>

      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-linear-45 from-blue-500 to-green-500 p-8 rounded text-2xl font-bold text-white">Angled Gradient</div>
      </div>

      <div className="min-h-screen flex items-center space-x-2 justify-center bg-gray-100">
        <div className="size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
        <div className="bg-radial from-yellow-500 to-red-500 size-64 rounded-full"></div>
      </div>

      <div className="min-h-screen grid gap-4 place-items-center bg-twitter-blue">
        <input type="text" placeholder="Enter your name" className="inset-shadow-sm inset-shadow-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber-500 outline-none" />
        <input type="text" placeholder="Enter your name" className="inset-ring-4 inset-ring-amber-500 rounded-sm w-96 h-18 p-4 text-xl text-amber-500 outline-none" />
        <input type="text" placeholder="Enter your name" className="inset-ring-4 inset-ring-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber-500 outline-none" />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <ul className="space-y-4 text-center text-black">
          <li className="bg-gray-200 p-4 rounded text-lg not-active:bg-red-500">Item One</li>
          <li className="active bg-gray-200 p-4 rounded text-lg">Item Two (Active)</li>
          <li className="bg-gray-200 p-4 rounded text-lg not-active:bg-red-500">Item Three</li>
        </ul>
      </div>

    </>
  )
}

export default CrashCourse