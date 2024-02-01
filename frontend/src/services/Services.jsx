import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Services.css"
export default function Services() {
    const sources=[{"id":1,"name":"Decorations","link":"https://www.homelane.com/blog/wp-content/uploads/2022/02/shutterstock_614687651.jpg","desc":"Transform your outdoor space into a captivating haven with an array of festive decorations. "},
                    {"id":2,"name":"Photography","link":"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/2756001/718310_567794.png","desc":"Capture the essence of the celebration that transforms fleeting moments into timeless memories. "},
                    {"id":3,"name":"Entertainment","link":"https://i0.wp.com/picjumbo.com/wp-content/uploads/party-dj-in-dance-music-club-free-photo.jpg?w=2210&quality=70","desc":"Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion."}
                ]

    
  return (
    <>
        <Navbar/>
        <div><center><h1 id='s-title'>SERVICES</h1></center></div>
        <div className='services'>
        
        {sources.map(serv=>
            <div className='service'>
                <img src={serv.link}/>
                <h1 id='s-name'>{serv.name}</h1>
               <i><p id='s-desc'>{serv.desc}</p></i> 
            </div>
        )}
        </div>
        <Footer/>
    </>
  )
}
