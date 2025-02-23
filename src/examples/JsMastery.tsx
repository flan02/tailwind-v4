

const JsMastery = () => {
  return (
    <>
      <div className="my-4 flex flex-col text-white ml-2">
        <label htmlFor="">
          <input type="checkbox" checked className="" />
          Browser default
        </label>

        <label htmlFor="">
          <input type="checkbox" className="accent-pink-500" />
          Customized
        </label>

        {/* Fluid Texts */}
        <p className="sm:text-7xl text-5xl">Something Nice</p>
        <p className="text-[min(10vw,70px)]">Something Fluid</p>

        {/* File */}
        <label htmlFor="" className="my-4 block">
          <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100" />
        </label>

        {/* Highlight */}
        <div className="selection:bg-green-400 selection:text-white">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <em>Quaerat</em>, pariatur laudantium sit maxime placeat dolore consequatur et, esse illum saepe consequuntur iste facere odit nesciunt eveniet laborum vel dolores ipsa.</p>
        </div>

        {/* Less Javascript */}
        <div className="max-w-lg mx-auto p-8">
          <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg open">
            <summary className="text-sm leading-6 text-slate-500 dark:text-white font-semibold select-none">
              Why do they call it Ovaltine?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it Roundtime.
              </p>
            </div>
          </details>
        </div>

        {/* Caret */}
        <textarea className="w-full caret-pink-500 p-2 white" placeholder="type something nice...">

        </textarea>

        {/* Scrollbar */}
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-accent-pink-500 scrollbar-track-accent-pink-200">
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
        </div>
      </div>
    </>
  )
}

export default JsMastery