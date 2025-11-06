import React from 'react'

export const Card = () => {
   console.log();
     const user1=[
    {
      id:1,
      name:'Democratize Access',
      para:'Take investors and capital closer to founders in Tier 2 & 3 cities'
    },
    {
      id:2,
      name:'Spot Untapped Talent:',
      para:'Discover founders solving real India problems with scalable models.'
    },
    {
      id:3,
      name:'Create Local Impact:',
      para:'Boost regional ecosystems, jobs, and industries through startup success.'
    },
    {
      id:4,
      name:'Build a National Movement: ',
      para:'Connect 2000+ startups and 1000+ investors intoone powerful network of opportunity'
    }
  ]
  return (
    <div className='text-center' >
      <h1>Why 40 citie?</h1>
      <p>Invest Time</p>
        <div className='Card grid grid-cols-2  mt-14 gap-y-4'>
{user1.map((item,index)=>{
  return(
    <div className='bg-blue-300 ml-16 rounded grid grid-cols-[20%_80%] gap-5'>
      <div className='text-center p-9 col-span-[20%]'>
        {item.id}
      </div>
      <div className=' gap-0 m-0 p-4 col-span-[80%] text-left'>
      <h1 className=''> {item.name}</h1>
      <p className=''> {item.para}</p>
      </div>
      
     </div>
  )
})}
     </div>
     

    
 
 
</div>
     
    
  )
}
// export default Card