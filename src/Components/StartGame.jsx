import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='h-[100vh] bg-slate-300 flex items-center  pt-[5rem
      justify-center'>
         <section>
            <img className='h-[25rem] w-[30rem] scale-x-[-1]' src="diceR.png" alt="Error" />
        </section>
        <section className='mt-[-20rem]'>
            <h1 className='text-[4rem] font-[700] tracking-[4px]'>Dice Game</h1>
            <button className='px-4 py-1  bg-black text-white rounded-lg
             text-[1.3rem] font-[800] ml-[6.3rem] hover:bg-pink-500 hover:text-slate-300'
             onClick={toggle}
             >Play Now</button>
        </section>
        <section>
            <img className='h-[25rem] w-[30rem]' src="diceR.png" alt="Error" />
        </section>
    </div>
  )
}

export default StartGame