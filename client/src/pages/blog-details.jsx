import React, { useState } from 'react'
import Fruits from '../assets/fruits.jpg';
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Im1 from '../assets/bhuna-meat.webp';
import Headers from '../components/Headers';

const BlogDetails = () => {
    const [fix, setFix] = useState(false);
    function setFixSidebar() {
        if (window.scrollY >= 500){
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll",setFixSidebar)
  return (
    <>
    <Headers/>
    <div className='bg-white'>
      <div className='my-10 flex items-start'>
        <div className='w-[75%] px-3 mr-3'>
            <main className='border-[1px] border-gray-300 rounded-md'>
                <div className='mb-8 p-3'>
                    <img className='rounded-md' src={Fruits} alt="" />
                </div>
                <div className='p-6'>
                    <div className='mb-1'>
                        <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Fresh Fruits</Link>
                        <h1 className='mb-2 text-[36px] font-sans font-semibold'>Experience The Essence Of Traditional Cuisine</h1>
                    </div>
                    <ul className='flex justify-start items-center mb-4'>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CgProfile /></i>
                            By<Link to="" className='ms-1'>Admin</Link>
                        </li>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CiCalendar /></i>
                            17.11.2023
                        </li>
                        <li className='flex justify-start items-start'>
                            <i className='pr-2 text-center'><VscComment /></i>
                            <span>0</span> <span> Comments</span>
                        </li>
                    </ul>
                    <div>
                        <p className='mb-5 text-[1rem] font-normal'>When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.</p>
                    </div>
                    <div className='mt-7'><Link className='px-6 py-4 mb-2 text-[#f7f7f7] bg-[#1bb057] rounded-3xl text-[15px] font-medium' to="">Read more</Link></div>
                </div>
            </main>

            <main className='border-[1px] border-gray-300 rounded-md'>
                <div className='mb-8 p-3'>
                    <img className='rounded-md' src={Fruits} alt="" />
                </div>
                <div className='p-6'>
                    <div className='mb-1'>
                        <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Fresh Fruits</Link>
                        <h1 className='mb-2 text-[36px] font-sans font-semibold'>Experience The Essence Of Traditional Cuisine</h1>
                    </div>
                    <ul className='flex justify-start items-center mb-4'>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CgProfile /></i>
                            By<Link to="" className='ms-1'>Admin</Link>
                        </li>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CiCalendar /></i>
                            17.11.2023
                        </li>
                        <li className='flex justify-start items-start'>
                            <i className='pr-2 text-center'><VscComment /></i>
                            <span>0</span> <span> Comments</span>
                        </li>
                    </ul>
                    <div>
                        <p className='mb-5 text-[1rem] font-normal'>When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.</p>
                    </div>
                    <div className='mt-7'><Link className='px-6 py-4 mb-2 text-[#f7f7f7] bg-[#1bb057] rounded-3xl text-[15px] font-medium' to="">Read more</Link></div>
                </div>
            </main>

            <main className='border-[1px] border-gray-300 rounded-md'>
                <div className='mb-8 p-3'>
                    <img className='rounded-md' src={Fruits} alt="" />
                </div>
                <div className='p-6'>
                    <div className='mb-1'>
                        <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Fresh Fruits</Link>
                        <h1 className='mb-2 text-[36px] font-sans font-semibold'>Experience The Essence Of Traditional Cuisine</h1>
                    </div>
                    <ul className='flex justify-start items-center mb-4'>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CgProfile /></i>
                            By<Link to="" className='ms-1'>Admin</Link>
                        </li>
                        <li className='flex justify-start items-center mr-5'>
                            <i className='pr-2'><CiCalendar /></i>
                            17.11.2023
                        </li>
                        <li className='flex justify-start items-start'>
                            <i className='pr-2 text-center'><VscComment /></i>
                            <span>0</span> <span> Comments</span>
                        </li>
                    </ul>
                    <div>
                        <p className='mb-5 text-[1rem] font-normal'>When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.</p>
                    </div>
                    <div className='mt-7'><Link className='px-6 py-4 mb-2 text-[#f7f7f7] bg-[#1bb057] rounded-3xl text-[15px] font-medium' to="">Read more</Link></div>
                </div>
            </main>
        </div>
        <div className='blog-sidebar bg-white w-[25%] h-[100%] px-3 ' id={fix?"fix":""}>
            <aside >
                <div className='text-[14px] px-10 pt-8 pb-10  mb-8 border-[1px] border-gray-300 rounded-md'>
                    <div>
                        <h3 className='mb-5 text-[18px]'>Search</h3>
                    </div>
                    <form action="">
                        <div className='flex justify-center items-center'>
                            <input type="text" placeholder='Search Here ...' className='py-2 pl-4 pr-3 rounded-l-lg bg-[#d7d7d7]'/>
                            <button className='px-3 py-2 ml-[-1px] bg-yellow-500 w-[60px] h-[37px] rounded-r-lg text-black text-[18px] flex justify-center items-center'>
                                <i className=''><IoSearchOutline /></i>
                            </button>
                        </div>
                    </form>
                    <div></div>
                </div>

                <div className='text-[14px] px-10 pt-8 pb-10  mb-8 border-[1px] border-gray-300 rounded-md'>
                    <div className=''>
                        <h3 className='mb-5 text-[18px]'>Search</h3>
                    </div>
                  
                    <ul className='flex flex-col'>
                        <li className='w-[100%] float-left text-right pb-3 mb-3 text-[14px] border-b-[1px]'><Link className='float-left' to="">Cosmetics</Link>(1)</li>
                        <li className='w-[100%] float-left text-right pb-3 mb-3 text-[14px] border-b-[1px]'><Link className='float-left' to="">Fresh Fruits</Link>(1)</li>
                        <li className='w-[100%] float-left text-right pb-3 mb-3 text-[14px] border-b-[1px]'><Link className='float-left' to="">Frozen Food</Link>(5)</li>
                        <li className='w-[100%] float-left text-right pb-3 mb-3 text-[14px] border-b-[1px]'><Link className='float-left' to="">Nutrition</Link>(4)</li>
                        <li className='w-[100%] float-left text-right pb-3 mb-3 text-[14px] border-b-[1px]'><Link className='float-left' to="">Vegetables</Link>(4)</li>
                    </ul>
                 
                    {/* <div>.</div> */}

                </div>

                <div className='text-[14px] px-10 pt-8 pb-10  mb-8 border-[1px] border-gray-300 rounded-md '>
                    <div className='mb-5 text-[18px]'>
                        <h3 >Latest Post</h3>
                    </div>
                    {/* <div className='flex justify-center items-center'>
                        <div className='w-[30%]'>
                            <div className='pb-8'>
                                <div className='mr-4 w-full'>
                                    <Link to="">
                                        <img className='rounded-lg w-[50%]' src={Im1} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mb-2'>
                                <div className='flex justify-start items-center mr-5'>
                                <i className='pr-2'><CiCalendar /></i>
                                17.11.2023
                                </div>
                            </div>
                            <h4>
                                <Link to="">Experience The Essence Of Traditional Cuisine</Link>
                            </h4>
                        </div>
                    </div> */}
                    <div className='w-[100%] flex justify-center items-center pb-8'>
                        <div className='w-[40%] mr-4'>
                            <img className='w-[100%] h-[85px]' src={Im1} alt="" />
                        </div>
                        <div className='w-[60%]'>
                            <div className='flex justify-start items-center mr-5 m-b-2'>
                                <i className='pr-2'><CiCalendar /></i>
                                17.11.2023
                            </div>
                            <h4 className='text-[14px] font-semibold'><Link to="">Experience The Essence Of Traditional Cuisine</Link></h4>
                        </div>
                    </div>

                    <div className='w-[100%] flex justify-center items-center pb-8'>
                        <div className='w-[40%] mr-4'>
                            <img className='w-[100%] h-[85px]' src={Im1} alt="" />
                        </div>
                        <div className='w-[60%]'>
                            <div className='flex justify-start items-center mr-5 m-b-2'>
                                <i className='pr-2'><CiCalendar /></i>
                                17.11.2023
                            </div>
                            <h4 className='text-[14px] font-semibold'><Link to="">Experience The Essence Of Traditional Cuisine</Link></h4>
                        </div>
                    </div>
                </div>

                <div className='text-[14px] px-10 pt-8 pb-10  mb-8 border-[1px] border-gray-300 rounded-md'>
                    <div className=''>
                        <h3 className='mb-5 text-[18px]'>Tags</h3>
                    </div>

                    <div className='flex flex-wrap gap-1'>
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Cosmetics</Link>
                        </div>
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Drinks</Link>
                        </div>
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Food</Link>
                        </div>       
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Fruits</Link>
                        </div> 
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Nutrition</Link>
                        </div>   
                        <div className='mb-3'>
                            <Link className='px-4 py-2 mb-2 text-[#1b8057] bg-[#f7f7f7] rounded-3xl' to="">Vegetables</Link>
                        </div>            
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogDetails





