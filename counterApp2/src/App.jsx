import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './feature/counterSlice';
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from 'react';
import { useEffect } from 'react';

const App = () => {
  let count  = useSelector((store)=>store.counter.value);
   const dispatch = useDispatch();

   const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const direction = count > prevCountRef.current ? 1 : -1;
  return (

 <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

  {/* Background glow */}
  <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>
  <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>
    
  {/* Main Card */}
  <div className="relative z-10 border border-cyan-400/30 bg-black/60 backdrop-blur-xl rounded-3xl px-12 py-10 flex flex-col items-center gap-8 shadow-[0_0_40px_rgba(0,255,255,0.2)]">

  <div className="flex flex-col items-center gap-4">

  <h2 className="text-xl text-cyan-400 tracking-widest uppercase 
  drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
    Counter Interface
  </h2>

  {/* your animated counter */}
  <h1>...</h1>

</div>


<h1 className="relative text-6xl font-extrabold text-cyan-300 tracking-widest 
drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] h-[80px] w-[120px] flex items-center justify-center overflow-hidden">

  <AnimatePresence mode="wait">
    <motion.span
      key={count}
      initial={{ y: direction > 0 ? 40 : -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: direction > 0 ? -40 : 40, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {count}
    </motion.span>
  </AnimatePresence>

</h1>
    {/* Buttons */}
    <div className="flex gap-6">

      <button
        onClick={() => dispatch(inc())}
        className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 
                   shadow-[0_0_15px_rgba(0,255,255,0.5)] 
                   hover:bg-cyan-400 hover:text-black 
                   hover:shadow-[0_0_25px_rgba(0,255,255,1)] 
                   transition-all duration-200 active:scale-90"
      >
        + 
      </button>

      <button
        onClick={() => dispatch(dec())}
        className="px-6 py-3 rounded-xl border border-pink-500 text-pink-400 
                   shadow-[0_0_15px_rgba(255,0,150,0.5)] 
                   hover:bg-pink-500 hover:text-black 
                   hover:shadow-[0_0_25px_rgba(255,0,150,1)] 
                   transition-all duration-200 active:scale-90"
      >
        −
      </button>

    </div>

  </div>

</div>



 
   /*  <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-400 shadow-2xl rounded-2xl p-10 flex flex-col items-center gap-6 w-80">

        <h1 className="text-5xl font-bold text-gray-800">
          {count}
        </h1>

        <div className="flex gap-4">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(inc())}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            + Increment
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(dec())}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            - Decrement
          </button>
        </div>

      </div>
    </div> */

  )
}

export default App
