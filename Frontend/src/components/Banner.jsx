import React from 'react'
import bannerimg from '../../public/Banner.png'
const Banner = () => {
    return (
        <>
            <div className='mt-12 max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col-reverse'>
                <div className='md:w-1/2 w-full mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl'>
                            Book Store is an ultimate platform for reading lovers, take reading experience to another level with Book Store's ultimate deals and free book reading experiences!
                        </p>
                        <div>
                            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border dark:border-white dark:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                  <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-secondary mt-6">Subscribe</button>
                    </div>
                </div>

                {/* right */}

                <div className='md:w-1/2 w-full'>
                    <div>
                        <img src={bannerimg} alt="Banner image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
