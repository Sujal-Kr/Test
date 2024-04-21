import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'


function Hero() {
    const [count,setCount]=useState(1)
    
    useEffect(()=>{
        const id =setInterval(() => {
            if(count<200){
                setCount(count+1)
            }
        }, 0);
        return ()=>{
            clearInterval(id)
        }
    })

    return (
        <div>
            <div className="bg-white pb-6 sm:pb-8 my-10 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">

                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

                            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1>

                            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <Link to="/" className="inline-block rounded bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</Link>

                                <Link to="/" className="inline-block rounded bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</Link>
                            </div>
                        </div>

                        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
                            <img src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
                        </div>

                    </section>

                    <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">

                        <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                            <div className="px-6 md:px-8">
                                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">{count}</span>
                                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">People</span>
                            </div>

                            <div className="px-6 md:px-8">
                                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">500+</span>
                                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Projects</span>
                            </div>

                            <div className="px-6 md:px-8">
                                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">250+</span>
                                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Customers</span>
                            </div>

                            <div className="px-6 md:px-8">
                                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">A couple</span>
                                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Coffee breaks</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Hero
