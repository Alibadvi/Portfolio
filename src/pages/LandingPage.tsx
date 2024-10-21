import React, {useEffect, useRef} from "react";
import bg1 from "../assets/6.webp";
import star from "../assets/sun-svgrepo-com.png";
import idehHost from "../assets/3.jpg";
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import Soton from "../Soton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {motion} from "framer-motion";
import CountUp from "react-countup";


function LandingPage() {


    const marqueeVariants = {
        animate: {
            x:          [0, -1035],
            transition: {
                x: {
                    repeat:     Infinity,
                    repeatType: "loop",
                    duration:   8,
                    ease:       "linear",
                },
            },
        },
    };

    const marqueeVariants2 = {
        animate: {
            x:          [-1035, 0],
            transition: {
                x: {
                    repeat:     Infinity,
                    repeatType: "loop",
                    duration:   8,
                    ease:       "linear",
                },
            },
        },
    };

    const [lettersRef, setLettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef<HTMLSpanElement[]>([]);
        lettersRef.current = [];

        return [lettersRef, (ref: HTMLSpanElement) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);

    const text = "I'M A PASSIONATE FRONTEND DEVELOPER WITH MANY YEARS OF EXPERIENCE IN CREATING VISUALLY STUNNING AND HIGHLY FUNCTIONAL WEB APPLICATIONS. MY JOURNEY IN WEB DEVELOPMENT BEGAN WITH A FASCINATION FOR HOW THE WEB WORKS, AND IT HAS EVOLVED INTO A CAREER WHERE I BRING IDEAS TO LIFE THROUGH CODE. I'M ALWAYS EXCITED TO CONNECT WITH FELLOW DEVELOPERS, DESIGNERS, AND POTENTIAL COLLABORATORS. FEEL FREE TO REACH OUT VIA EMAIL OR CONNECT WITH ME ON LINKEDIN/GITHUB. "


    useEffect(() => {

        // @ts-ignore
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub:   true,
                    start:   "top center",
                    end:     "bottom 80%"

                },
                color:         "#fff",
                duration:      5,
                stagger:       1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const d = new Date();
    const name = month[d.getMonth()];
    useEffect(() => {

        // columnCanvasRef.current?.ondrag()

        // columnCanvasRef.current?.addEventListener('gesturechange', function() {});
        // columnCanvasRef.current?.addEventListener("touchmove", function() {});
        // columnCanvasRef.current?.addEventListener("scroll", function() {});

        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {

                if (section.getAttribute('data-color') !== null) {


                    const colorAttr = section.getAttribute('data-color');


                    gsap.to(".wrap", {
                        backgroundColor: colorAttr === "dark" ? gsap.getProperty("html", "--dark") : gsap.getProperty("html", "--light"),
                        immediateRender: false,
                        scrollTrigger:   {
                            trigger: section,
                            scrub:   true,
                            start:   'top bottom',
                            end:     '+=100%'
                        }
                    });

                }
            });
        }, 1000);


    }, [])


    const columnCanvasRef = useRef<HTMLCanvasElement | null>(null);

    // columnCanvasRef.current.

    return (
        <div className="flex justify-center flex-col relative">
            <div className='polygon-wrap overflow-x-hidden'>
                <motion.img
                    // initial={{opacity: 1, scale: 0.3}}
                    // animate={{opacity: 1, scale: 1,rotate: [30,0],}}
                    initial={{clipPath: "polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%)", opacity: 0}}
                    animate={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1}}
                    transition={{duration: 1.2, delay: 0.9}}
                    className=" top-0 h-[120vh] w-[100vw] object-cover hidden md:fixed md:block"
                    alt="bg"
                    src={bg1}
                />
                <motion.img
                    // initial={{opacity: 1, scale: 0.3}}
                    // animate={{opacity: 1, scale: 1,rotate: [30,0],}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.4, delay: 1}}
                    className=" h-[100vh] w-full object-cover fixed top-0 left-0 md:hidden"
                    alt="bg"
                    src={bg1}
                />
            </div>
            <section className="wrap z-10 absolute top-0 left-0 w-full overflow-x-hidden">

                <div id='landing'
                     className="section h-[100vh] color-dark relative flex flex-col-reverse sm:flex-row container mx-auto w-full gap-12 sm:justify-between sm:items-center !justify-end"
                     data-color="dark">
                    <div className='sm:hidden flex flex-col gap-2 justify-end items-end relative overflow-hidden'>
                        <motion.h1 initial={{opacity: 0, x: -60, y: 50}}
                                   animate={{opacity: 1, x: 0, y: 0}}
                                   transition={{duration: 1, delay: 1.7}}
                                   className=" text-white text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] xl:text-[1.6rem] font-anton text-left leading-12">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I
                            am a frontend developer based in Iran. I have many
                            years of experience in developing websites in
                            all areas of digital. I love minimal
                            and brutalist design. I love nature,
                            food and art.
                        </motion.h1>
                        <motion.a href="#contact" initial={{opacity: 0, x: 200}}
                                  animate={{opacity: 1, x: 0}}
                                  transition={{duration: 1, delay: 1.9}}
                                  className='button flex justify-start !w-[4em] sm:mt-12 sm:pt-3 lg:!w-[4.5em]'
                                  type="button">
                            <span className='font-anton !text-2xl'>CONTACT ME</span>
                            <span className='font-anton !text-2xl' aria-hidden="true">CONTACT ME</span>
                        </motion.a>

                    </div>
                    <div className='flex flex-col items-start sm:gap-10 justify-center '>
                        {/*<h1 className='text-white text-4xl font-anton'>creative</h1>*/}
                        <h2 className='text-3xl font-mikh text-white md:pb-12'>creative</h2>
                        <motion.div initial={{opacity: 0, scale: 0.5, x: -200}}
                                    animate={{opacity: 1, scale: 1, x: 0}}
                                    transition={{duration: 1, delay: 0.2}}
                                    className='flex flex-col h-[5rem] md:h-[9rem] lg:h-[14.3rem] overflow-hidden items-baseline text-white text-[4.1rem] sm:text-[5rem] lg:text-[8rem] 2xl:text-[12rem] font-anton'>
                            <h1>FRONTEND</h1>
                            {/*<h2 className='text-3xl font-mikh text-white pb-12'>WomanLifeFreedom</h2>*/}
                        </motion.div>
                        <motion.div initial={{opacity: 0, scale: 0.7, x: -200}}
                                    animate={{opacity: 1, scale: 1, x: 0}}
                                    transition={{duration: 1, delay: 0.6}}
                                    className='text-white h-[5rem] md:h-[9rem] lg:h-[14.3rem] overflow-hidden flex flex-col justify-start items-baseline text-[4.1rem] sm:text-[5rem] lg:text-[8rem] 2xl:text-[12rem] z-20 font-anton'>
                            <h1 className='flex items-end'>DEVELOPER</h1>
                            {/*<h2 className='text-3xl font-mikh text-white pb-12'>WomanLifeFreedom</h2>*/}
                        </motion.div>
                    </div>

                    <div className='flex flex-col w-full sm:h-full gap-32 items-end justify-center mt-20 sm:mt-0'>
                        <motion.div initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay: 2.6}}
                                    className='flex gap-2 items-center relative z-10 h-[7rem] sm:h-[17rem]'>
                            <motion.img initial={{rotate: 0,}}
                                        animate={{rotate: 360}}
                                        transition={{duration: 5.5, delay: 0.6, repeat: Infinity}}
                                        className='w-16 h-16 sm:w-20 sm:h-20 p-4 fill-black z-30 absolute top-4 xl:-top-[1.5rem] 2xl:-top-10 -left-12 sm:-left-20'
                                        alt='star'
                                        src={star}/>
                            <CountUp
                                className="text-white font-anton text-[5rem] sm:text-[11rem] 2xl:text-[19rem] flex items-start"
                                start={0}
                                end={d.getDate()}
                                duration={2.3} delay={4.2}/>
                            <div className='flex flex-col items-start h-full justify-end'>
                                <h1 className="text-white font-Caveat text-3xl">{name}</h1>
                                <h1 className="text-white font-Caveat text-3xl">available for work</h1>
                            </div>

                        </motion.div>
                        <div className='sm:flex hidden flex-col gap-2 justify-end items-end relative overflow-hidden'>
                            <motion.h1 initial={{opacity: 0, x: -60, y: 50}}
                                       animate={{opacity: 1, x: 0, y: 0}}
                                       transition={{duration: 1, delay: 1.7}}
                                       className=" text-white text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] xl:text-[1.6rem] font-anton text-left leading-12">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I
                                am a frontend developer

                                based in Iran. I have many
                                years of experience in developing websites in
                                all areas of digital. I love minimal
                                and brutalist design. I love nature,
                                food and art.
                            </motion.h1>
                            <motion.a href="#contact" initial={{opacity: 0, x: 200}}
                                      animate={{opacity: 1, x: 0}}
                                      transition={{duration: 1, delay: 1.9}}
                                      className='button flex justify-start !w-[4em] mt-3 xl:mt-10 lg:!w-[4.3em]'
                                      type="button">
                                <span className='font-anton !text-2xl'>CONTACT ME</span>
                                <span className='font-anton !text-2xl' aria-hidden="true">CONTACT ME</span>
                            </motion.a>

                        </div>
                    </div>


                </div>
                <div id='about'
                     className="section relative overflow-hidden mx-auto container w-full flex flex-col md:flex-row items-center md:justify-between md:gap-3 h-[220vh] sm:h-[200vh] md:h-[100vh] color-light md:mt-32"
                     data-color="light">
                    <div className='w-full flex flex-col gap-3 h-full'>
                        <h1 className='font-anton text-5xl text-white mt-36 mb-1 flex sm:hidden'>HELLO.I AM ALI</h1>
                        <div className="spacing-small"></div>
                        <div className="reveal">
                            <div ref={triggerRef}>

                                {text.split("").map((letter, index) => (
                                    <span ref={setLettersRef}
                                          className="reveal-text font-anton text-center md:text-justify text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl !leading-[3.3rem] sm:!leading-[4.5rem] md:!leading-[4rem] xl:!leading-[3rem] 2xl:!leading-[5.9rem]"
                                          key={index}>
                            {letter}
                        </span>
                                ))}
                            </div>
                        </div>
                        <div className="spacing"></div>
                    </div>
                    <div className='w-full relative flex items-center justify-center h-full '>

                        <div className='flex w-full !items-center !justify-center '>
                            <Canvas ref={columnCanvasRef}
                                    className="!w-full !h-[95rem] sm:!h-[100rem] md:!h-[135rem] !flex !items-center !justify-center overflow-hidden m-auto md:mt-[26rem]">
                                <ambientLight/>
                                <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={9} enableRotate={false}/>
                                <Suspense fallback={'Loading...'}>
                                    <Soton/>
                                </Suspense>
                                <Environment preset="sunset"/>
                            </Canvas>
                        </div>
                        <div className='w-full h-full absolute top-0 left-0 z-30'></div>
                    </div>

                </div>
                <div className=''>
                    <div className="marquee">
                        {/* 3. Using framer motion */}
                        <motion.div
                            className="track"
                            variants={marqueeVariants}
                            animate="animate"
                        >
                            <h1 className='font-anton'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Let's Work Together. Let's Work Together. Let's Work Together. Let's
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Work Together. Let's Work Together. Let's Work Together. Let's Work
                                Together
                            </h1>
                        </motion.div>
                    </div>
                </div>
                <div id='works'
                     className="section mx-auto container w-full h-[130vh] md:h-[128vh] flex flex-col color-dark gap-16 "
                     data-color="light">
                    <div className='w-full p-5 flex items-center justify-start h-fit'>
                        <motion.img initial={{rotate: 0,}}
                                    animate={{rotate: 360}}
                                    transition={{duration: 8.5, delay: 0.6, repeat: Infinity}}
                                    className='w-20 h-20 p-4 fill-black z-30' alt='star'
                                    src={star}/>
                        <h1 className='font-anton text-white text-3xl'>Selected cases</h1>
                    </div>

                    <motion.div
                        initial={{
                            x:       -50,
                            opacity: 0,
                        }}
                        whileInView={{
                            x:          0,
                            opacity:    1,
                            transition: {
                                duration: 1,
                                delay:    0.4
                            }
                        }}
                        className='w-full overflow-hidden '>
                        <div className='grid md:grid-cols-2 gap-10 w-full md:justify-end overflow-hidden'>
                            <motion.div whileHover={{scale: 0.9}} transition={{type: 'tween', stiffness: 200}}
                                        className='overflow-hidden rounded-3xl relative'>
                                {/*<motion.div className="bg-gray-700 z-10 opacity-95 w-full h-full absolute top-0 left-0"></motion.div>*/}
                                <motion.img alt='webIdeh' whileHover={{scale: 1.1}}
                                            transition={{type: 'tween', stiffness: 200}} src={idehHost}
                                            className='object-cover grayscale hover:grayscale-0 transition duration-500 h-[18rem] md:h-[25rem] w-full'/>
                            </motion.div>
                            <div className='flex flex-col gap-4 justify-start items-start'>
                                <h1 className='font-semibold text-3xl text-white'>Ideh Host Provider</h1>
                                <h1 className='font-semibold text-lg text-white'>Frontend Development</h1>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            x:       50,
                            opacity: 0,
                        }}
                        whileInView={{
                            x:          0,
                            opacity:    1,
                            transition: {
                                duration: 1,
                                delay:    0.4
                            }
                        }}
                        className='w-full overflow-hidden '>
                        <div className='grid md:grid-cols-2 gap-10 w-full md:justify-start overflow-hidden'>
                            <div className='flex flex-col gap-4 justify-start items-end'>
                                <h1 className='font-semibold text-3xl text-white'>WebIdeh Holding</h1>
                                <h1 className='font-semibold text-lg text-white'>Frontend Development</h1>
                            </div>
                            <motion.div whileHover={{scale: 0.9}} transition={{type: 'tween', stiffness: 200}}
                                        className='overflow-hidden rounded-3xl relative'>
                                {/*<motion.div className="bg-gray-700 z-10 opacity-95 w-full h-full absolute top-0 left-0"></motion.div>*/}
                                <motion.img alt='webIdeh' whileHover={{scale: 1.1}}
                                            transition={{type: 'tween', stiffness: 200}} src={idehHost}
                                            className='object-cover grayscale hover:grayscale-0 transition duration-500 h-[18rem] md:h-[25rem] w-full'/>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className=''>
                    <div className="marquee">
                        {/* 3. Using framer motion */}
                        <motion.div
                            className="track"
                            variants={marqueeVariants2}
                            animate="animate"
                        >
                            <h1 className='font-anton'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Let's Work Together. Let's Work Together. Let's Work Together. Let's
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Work Together. Let's Work Together. Let's Work Together. Let's Work
                                Together
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div id='contact'
                     className="section relative mx-auto container w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-between h-[115vh] sm:h-[100vh]  color-light !bg-transparent"
                     data-color="dark">
                    <div className='hidden sm:contents'>
                        <div className='p-4'></div>
                        <div className=' left-0 bottom-0 absolute w-full'>
                            <div className='flex flex-col items-start gap-10 justify-center '>
                                <motion.div initial={{
                                    x:       -50,
                                    opacity: 0,
                                }}
                                            whileInView={{
                                                x:          0,
                                                opacity:    1,
                                                transition: {
                                                    duration: 1,
                                                    delay:    0.4
                                                }
                                            }}
                                            className='flex flex-col h-[7rem] md:h-[10rem] lg:h-[14.3rem] overflow-hidden items-baseline text-white text-[5rem] lg:text-[9rem] xl:text-[12rem] font-anton'>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <h1>LET'S</h1>
                                </motion.div>
                                <motion.div initial={{
                                    x:       -50,
                                    opacity: 0,
                                }}
                                            whileInView={{
                                                x:          0,
                                                opacity:    1,
                                                transition: {
                                                    duration: 1,
                                                    delay:    0.6
                                                }
                                            }}
                                            className='text-white h-[7rem] md:h-[10rem] lg:h-[14.3rem] overflow-hidden flex flex-col justify-start items-baseline text-[5rem] lg:text-[9rem] xl:text-[12rem] z-20 font-anton'>
                                    <h1 className='flex items-end'>CONNECT</h1>
                                </motion.div>
                            </div>
                        </div>

                        <div className='flex flex-col w-full relative h-full justify-between'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity:    1,
                                    transition: {
                                        duration: 1,
                                        delay:    1
                                    }
                                }}
                                viewport={{once: true}}
                                className=' overflow-hidden flex flex-col justify-center z-20 mt-[11rem]'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1 className='flex items-end font-anton text-white text-3xl my-5'>I'm always interested
                                    about</h1>
                                <div className='flex flex-wrap gap-6 items-center'>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.2
                                                  }
                                              }} className='button flex justify-start !w-[6em] md:!w-[6.7em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>FRONTEND DEVELOPEMENT</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">FRONTEND </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.4
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> POLITICS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> POLITICS</span>
                                    </motion.a>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.6
                                                  }
                                              }} className='button flex justify-start !w-[3.8em] md:!w-[4.4em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>NATURE LOVER </span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">NATURE LOVER </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.8
                                                  }
                                              }} className='button flex justify-start !w-[5.7em] md:!w-[6.6em]'
                                              type="button">
                                        <span
                                            className='font-anton !text-xl md:!text-2xl '>artificial intelligence</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">artificial intelligence</span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2
                                                  }
                                              }} className='button flex justify-start !w-[4.5em] md:!w-[5.3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>NEW TECHNOLOGIES </span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">NEW TECHNOLOGIES </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.2
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> SPORTS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> SPORTS</span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.4
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>MOVIES</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">MOVIES</span>
                                    </motion.a>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.6
                                                  }
                                              }} className='button flex justify-start !w-[3.8em] md:!w-[4.5em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> NEW DESIGNS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> NEW DESIGNS</span>
                                    </motion.a>

                                </div>
                            </motion.div>
                            <motion.div initial={{opacity: 0, x: 50}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 1, delay: 1.9}}
                                        className='flex gap-8 pb-20 items-center'>
                                <h1 className='font-anton text-white text-sm md:text-[1rem] lg:text-[1.5rem] xl:text-3xl whitespace-nowrap'>Are
                                    you minding
                                    a project?</h1>
                                <a href="mailto: alibadvi96@gmail.com"
                                   className='button !py-1 w-[2.5em] md:w-[4.4em] lg:w-[5em] !bg-gray-200 !text-gray-700 !h-[2.5rem] md:!h-[3rem] lg:!h-[3.1rem] xl:!h-[3.4rem]'
                                   type="button">
                                <span
                                    className='font-anton  text-[0.9rem] md:text-[1.6rem] lg:text-3xl'>CONTACT ME</span>
                                    <span className='font-anton  text-[0.9rem] md:text-[1.6rem] lg:text-3xl'
                                          aria-hidden="true">CONTACT ME</span>
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    // y:       160
                                }}
                                whileInView={{
                                    // y:          0,
                                    opacity:    1,
                                    transition: {
                                        duration: 1,
                                        delay:    0.4
                                    }
                                }}
                                className="footer w-full absolute bottom-0 right-0 py-4  z-50 ">
                                <div
                                    className="w-full flex justify-between container items-center z-10 !blur-none mx-auto border-t-[1px] border-gray-400 py-1">
                                    {/*<div className='w-[6rem]'>*/}
                                    {/*    <img className='object-scale-down' src={logo} alt={logo}/>*/}
                                    {/*</div>*/}

                                    <div className='flex gap-8'>
                                        <a target='_blank' rel="noreferrer"
                                           href='https://www.linkedin.com/in/ali-badvi-5534aa15b/'
                                           className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">Linkedin</a>
                                        <a target='_blank' rel="noreferrer" href='https://github.com/Alibadvi'
                                           className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">Github</a>
                                        <a className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">CV</a>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                    <div className='flex sm:hidden flex-col h-full'>
                        <div className='flex flex-col items-start h-full gap-2 justify-end'>
                            <motion.div initial={{
                                x:       -50,
                                opacity: 0,
                            }}
                                        whileInView={{
                                            x:          0,
                                            opacity:    1,
                                            transition: {
                                                duration: 1,
                                                delay:    0.4
                                            }
                                        }}
                                        className='flex flex-col h-[7rem] md:h-[10rem] lg:h-[14.3rem] overflow-hidden items-baseline text-white text-[3.7rem] lg:text-[9rem] xl:text-[12rem] font-anton'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1>LET'S</h1>
                            </motion.div>
                            <motion.div initial={{
                                x:       -50,
                                opacity: 0,
                            }}
                                        whileInView={{
                                            x:          0,
                                            opacity:    1,
                                            transition: {
                                                duration: 1,
                                                delay:    0.6
                                            }
                                        }}
                                        className='text-white h-[7rem] md:h-[10rem] lg:h-[14.3rem] overflow-hidden flex flex-col justify-start items-baseline text-[3.7rem] lg:text-[9rem] xl:text-[12rem] z-20 font-anton'>
                                <h1 className='flex items-end'>CONNECT</h1>
                            </motion.div>
                        </div>
                        <div className='flex flex-col w-full relative h-full justify-between'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity:    1,
                                    transition: {
                                        duration: 1,
                                        delay:    1
                                    }
                                }}
                                viewport={{once: true}}
                                className=' overflow-hidden flex flex-col justify-center z-20 w-full'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1 className='flex items-end font-anton text-white text-2xl my-5'>I'm always interested
                                    about</h1>
                                <div className='flex flex-wrap gap-6 items-center'>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.2
                                                  }
                                              }} className='button flex justify-start !w-[6em] md:!w-[6.7em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>FRONTEND DEVELOPEMENT</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">FRONTEND </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.4
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> POLITICS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> POLITICS</span>
                                    </motion.a>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.6
                                                  }
                                              }} className='button flex justify-start !w-[3.8em] md:!w-[4.4em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>NATURE LOVER </span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">NATURE LOVER </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    1.8
                                                  }
                                              }} className='button flex justify-start !w-[5.7em] md:!w-[6.6em]'
                                              type="button">
                                        <span
                                            className='font-anton !text-xl md:!text-2xl '>artificial intelligence</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">artificial intelligence</span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2
                                                  }
                                              }} className='button flex justify-start !w-[4.5em] md:!w-[5.3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>NEW TECHNOLOGIES </span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">NEW TECHNOLOGIES </span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.2
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> SPORTS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> SPORTS</span>
                                    </motion.a>

                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.4
                                                  }
                                              }} className='button flex justify-start !w-[2.2em] md:!w-[3em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '>MOVIES</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true">MOVIES</span>
                                    </motion.a>
                                    <motion.a href="mailto: alibadvi96@gmail.com" initial={{
                                        opacity: 0,
                                    }}
                                              whileInView={{
                                                  opacity:    1,
                                                  transition: {
                                                      duration: 1,
                                                      delay:    2.6
                                                  }
                                              }} className='button flex justify-start !w-[3.8em] md:!w-[4.5em]'
                                              type="button">
                                        <span className='font-anton !text-xl md:!text-2xl '> NEW DESIGNS</span>
                                        <span className='font-anton !text-xl md:!text-2xl '
                                              aria-hidden="true"> NEW DESIGNS</span>
                                    </motion.a>

                                </div>
                            </motion.div>
                            <motion.div initial={{opacity: 0, x: 50}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 1, delay: 1.9}}
                                        className='flex gap-8 pb-20 items-center'>
                                <h1 className='font-anton text-white text-sm md:text-[1rem] lg:text-[1.5rem] xl:text-3xl whitespace-nowrap'>Are
                                    you minding
                                    a project?</h1>
                                <a href="mailto: alibadvi96@gmail.com"
                                   className='button !py-1 w-[2.5em] md:w-[4.4em] lg:w-[5em] !bg-gray-200 mt-4 !text-gray-700 !h-[2.5rem] md:!h-[3rem] lg:!h-[3.1rem] xl:!h-[3.4rem]'
                                   type="button">
                                <span
                                    className='font-anton  text-[0.9rem] md:text-[1.6rem] lg:text-3xl'>CONTACT ME</span>
                                    <span className='font-anton  text-[0.9rem] md:text-[1.6rem] lg:text-3xl'
                                          aria-hidden="true">CONTACT ME</span>
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    // y:       160
                                }}
                                whileInView={{
                                    // y:          0,
                                    opacity:    1,
                                    transition: {
                                        duration: 1,
                                        delay:    0.4
                                    }
                                }}
                                className="footer w-full absolute bottom-0 right-0 py-4  z-50 ">
                                <div
                                    className="w-full flex justify-between container items-center z-10 !blur-none mx-auto border-t-[1px] border-gray-400 py-1">
                                    {/*<div className='w-[6rem]'>*/}
                                    {/*    <img className='object-scale-down' src={logo} alt={logo}/>*/}
                                    {/*</div>*/}

                                    <div className='flex gap-8'>
                                        <a target='_blank' rel="noreferrer"
                                           href='https://www.linkedin.com/in/ali-badvi-5534aa15b/'
                                           className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">Linkedin</a>
                                        <a target='_blank' rel="noreferrer" href='https://github.com/Alibadvi'
                                           className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">Github</a>
                                        <a className="text-lg text-white font-semibold cursor-pointer hover:text-gray-300 transition">CV</a>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                </div>


            </section>


        </div>
    );
}

export default LandingPage;
