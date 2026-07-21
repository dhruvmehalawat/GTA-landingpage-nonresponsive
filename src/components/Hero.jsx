import React, {useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Nav from './Nav';
import BottomBar from './BottomBar';
import Info from './Info';

function Hero() {
    const [showContent, setShowContent] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.vi-mask-group', {
            rotation: 10,
            duration: 2,
            ease: 'power4.inOut',
            transformOrigin: '50% 50%',
        })
        .to('.vi-mask-group', {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    const svg = document.querySelector('.svg');
                    svg.remove();
                    setShowContent(true);
                    this.kill();
                }
            },
        });
    });

    useGSAP(()=>{
     if(!showContent) return;
      gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-35%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });

    },[showContent]);
    return (
        <>
            <div className='svg flex items-center justify-center fixed w-full h-screen top-0 left-0 z-[3] overflow-hidden bg-black'>
                <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
                    <defs>
                        <mask id='viMask'>
                            <rect width='100%' height='100%' fill='black' />
                            <g className='vi-mask-group'>
                                <text x='50%' y='50%' fontSize='250' textAnchor='middle' fill='white' dominantBaseline='middle' fontFamily='Arial Black'>
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href='./bg.png'
                        width='100%'
                        height='100%'
                        preserveAspectRatio='xMidYMid slice'
                        mask='url(#viMask)'
                    />
                </svg>
            </div>
            {showContent && (
            <div className='main w-full rotate-[-10deg] scale-[1.7]'>
                <div className='landing overflow-hidden relative w-full h-screen bg-black'>
                    <Nav/>
                    <div className='imagediv relative w-full h-screen overflow-hidden '>
                        <img className=' sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover pointer-events-none' src='./sky.png' />
                        <img className='bg absolute scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover pointer-events-none' src='./bg.png' />
                        <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] ">
                            <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                            <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                            <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
                        </div>
                        <img className="absolute character -bottom-[180%]  h-full  left-1/2 -translate-x-3/12 pointer-events-none rotate-[-20deg] "
                            src="./girlbg.png"
                            alt=""/>
                    </div>
                    <BottomBar/>
                </div>
                <Info/>
            </div>
            )}
        </>
    );
}

export default Hero