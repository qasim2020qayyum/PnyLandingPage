import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <>
            <div>
                <br /> 
                <br />
                <div className='col-lg-12 main pb-5' >
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-1 col-md-1 col-sm-1 col-1'></div>
                                <div className='col-lg-3 col-md-4 col-sm-11 col-11 text-white mt-5'>
                                    <img src='./images/img.1.png' className=' img' />
                                    <div className='mt-3'><p className=' pny'>What They Say About Pny</p></div>
                                    <div className='mt-5'><p className=' '>More than 3000 users have been helped by
                                        our online and physical course</p></div>
                                </div>

                                <div className='col-lg-7  col-md-6 pb-5 main2'>

                                    <Swiper
                                        speed={1500}
                                        effect={"flip"}
                                        grabCursor={true}
                                        pagination={true}
                                        navigation={true}
                                        modules={[EffectFlip, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <p className='text-danger mt-4 ml-4 what'>What They Say</p></div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-10 col-md-12'>
                                                        <p className=' mt-3 pl-5 what1  '>

                                                            “Studying at PNY is fun, the curriculum is complete,the instructors are competent, and the assignments given are also relevant to the current scope of work".</p>
                                                    </div>
                                                    <div className='col-lg-2 col-md-0'></div>

                                                </div>
                                            </div>
                                            <div className='col-lg-12 ml-4 mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-1'>
                                                        <img src="./images/doc.1.png" className='borde' />
                                                    </div>
                                                    <div className='col-lg-10 '>
                                                        <div className='margibn'><span className=' mian'>Mian Asim Mansor</span>
                                                            <p className=' '>Product Designer at Systems Limited </p></div>
                                                    </div>
                                                    <div className='col-lg-1 col-md-0'></div>


                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <p className='text-danger mt-4 ml-4 what'>What They Say</p></div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-10 col-md-12'>
                                                        <p className=' mt-3 ml-5 text-primary what1'>

                                                            “Studying at PNY is fun, the curriculum is complete,the instructors are competent, and the assignments given are also relevant to the current scope of work".</p>
                                                    </div>
                                                    <div className='col-lg-2 col-md-0'></div>

                                                </div>
                                            </div>
                                            <div className='col-lg-12 ml-4 mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-1'>
                                                        <img src="doc.1.png" className='borde' />
                                                    </div>
                                                    <div className='col-lg-10 '>
                                                        <div className='margibn'><span className=' mian'>Mian Asim Mansor</span>
                                                            <p className=' '>Product Designer at Systems Limited </p></div>
                                                    </div>
                                                    <div className='col-lg-1 col-md-0'></div>


                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <p className='text-danger mt-4 ml-4 what'>What They Say</p></div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-10 col-md-12'>
                                                        <p className=' mt-3 text-danger ml-5 what1'>

                                                            “Studying at PNY is fun, the curriculum is complete,the instructors are competent, and the assignments given are also relevant to the current scope of work".</p>
                                                    </div>
                                                    <div className='col-lg-2 col-md-0'></div>

                                                </div>
                                            </div>
                                            <div className='col-lg-12 ml-4 mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-1'>
                                                        <img src="doc.1.png" className='borde' />
                                                    </div>
                                                    <div className='col-lg-10 '>
                                                        <div className='margibn'><span className=' mian'>Mian Asim Mansor</span>
                                                            <p className=' '>Product Designer at Systems Limited </p></div>
                                                    </div>
                                                    <div className='col-lg-1 col-md-0'></div>


                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <p className='text-danger mt-4 ml-4 what'>What They Say</p></div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-10 col-md-12'>
                                                        <p className=' mt-3 text-warning ml-5 what1'>

                                                            “Studying at PNY is fun, the curriculum is complete,the instructors are competent, and the assignments given are also relevant to the current scope of work".</p>
                                                    </div>
                                                    <div className='col-lg-2 col-md-0'></div>

                                                </div>
                                            </div>
                                            <div className='col-lg-12 ml-4 mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-1'>
                                                        <img src="doc.1.png" className='borde' />
                                                    </div>
                                                    <div className='col-lg-10 '>
                                                        <div className='margibn'><span className=' mian'>Mian Asim Mansor</span>
                                                            <p className=' '>Product Designer at Systems Limited </p></div>
                                                    </div>
                                                    <div className='col-lg-1 col-md-0'></div>


                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <p className='text-danger mt-4 ml-4 what'>What They Say</p></div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-10 col-md-12'>
                                                        <p className=' mt-3 text-warning ml-5 what1'>

                                                            “Studying at PNY is fun, the curriculum is complete,the instructors are competent, and the assignments given are also relevant to the current scope of work".</p>
                                                    </div>
                                                    <div className='col-lg-2 col-md-0'></div>

                                                </div>
                                            </div>
                                            <div className='col-lg-12 ml-4 mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-1'>
                                                        <img src="doc.1.png" className='borde' />
                                                    </div>
                                                    <div className='col-lg-10 '>
                                                        <div className='margibn'><span className=' mian'>Mian Asim Mansor</span>
                                                            <p className=' '>Product Designer at Systems Limited </p></div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                    <div className='col-lg-1 col-md-0'></div>


                                                </div>
                                            </div>

                                        </SwiperSlide>

                                    </Swiper>

                                </div>
                                <div className='col-lg-1'></div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
