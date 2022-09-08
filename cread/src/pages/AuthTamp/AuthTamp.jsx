import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Login/Login.scss';
import './AuthTamp.scss';




const AuthTamp = () => {
  return (
    <>
         <div className="auth-tamp-wraper">
        
            <div className="auth-tamp-img" style={{backgroundImage:`url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')`}}>
            

            <div className="carosul-box">
            <Carousel controls= {false} pause= {false} fade indicators={false} variant= "dark"   interval={'2000'}>
                
                <Carousel.Item >
                        <img className='big-img' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className='big-img' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className='big-img' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="Forth slide" />
                    </Carousel.Item>
                 
                </Carousel>
            </div>
          
             </div>
            </div>
 

 
   


    </>
  )
}

export default AuthTamp;







