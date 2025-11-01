import React from 'react'
import img2 from './assets/2.jpg'

const Webc = () => {
  const cards = [
    { id: 1, img: img2, title: 'Card One', desc: 'This is card one description.', btnText: 'Read More' },
    { id: 2, img: img2, title: 'Card Two', desc: 'This is card two description.', btnText: 'Read More' },
    { id: 3, img: img2, title: 'Card Three', desc: 'This is card three description.', btnText: 'Read More' },
    { id: 4, img: img2, title: 'Card Four', desc: 'This is card four description.', btnText: 'Read More' },
    { id: 5, img: img2, title: 'Card Five', desc: 'This is card five description.', btnText: 'Read More' },
    { id: 6, img: img2, title: 'Card Six', desc: 'This is card six description.', btnText: 'Read More' },
  ]

  return (
    <div className='text-center'>
      <h1>hello</h1>
      <p>why</p>

      <div className='grid grid-cols-3 gap-2 p-3'>
        {cards.map((item,index)=>{
            return (
                 <div className='bg-blue-300 text-center rounded pt-4 pb-4 pr-2 pl-2 grid gap-3 justify-center '>
          <div>
            <img src={img2} alt="Sample" className='mx-auto w-32 h-32 rounded' />
          </div>
        
          <div>{item.title}</div>
          <div>{item.desc}</div>

          <button onChange={() => console.log('hii')} className='rounded bg-gray-300'>
            {item.btnText}
          </button>
        </div>

            )
        })}
       
      </div>
    </div>
  )
}

export default Webc
