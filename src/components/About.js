import React from 'react'

const About = () => {
  return (
    <div name ="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='text-4xl font-bold inline border-b-4 border-gray-500'>
                <p>About</p>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum ad esse totam eius dignissimos magni harum fuga aliquam consequatur ipsum hic ea fugit blanditiis distinctio autem iusto laborum saepe, alias enim aut corrupti vitae minus. Molestiae quia maiores accusamus placeat vero, dolores reiciendis reprehenderit quibusdam nulla! Nam, quibusdam possimus.
                
            </p>
            <br/>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis deserunt id fuga beatae, similique sequi amet architecto. Nihil, rerum assumenda aliquid eum facere voluptas facilis. Neque, delectus repellat facilis similique fugit sint incidunt praesentium ea aspernatur exercitationem velit sunt iste blanditiis nulla voluptates. Dolorem odit consequatur perferendis ea quam.
            </p>
        </div>
    </div>
  )
}

export default About