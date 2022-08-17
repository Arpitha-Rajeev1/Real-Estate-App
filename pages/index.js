import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

let datePick = new Date().toISOString().split('T')[0];

export default function Home({ propertyForRent }) {
  const [price, setPrice] = useState('0-10000000')
  const [rooms, setRooms] = useState(0)
  const [baths, setBaths] = useState(0)
  const [area, setArea] = useState(0)

  return (
    <>
      <Head>
        <title>Estatery - The Real Estate App</title>
        <meta name="description" content="The Real Estate App" />
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={'/logo.png'} width={40} height={40} alt="logo"></Image>
            <span className="ml-3 text-xl">Estatery</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <Link href="/"><a className="mr-5 hover:text-[#6366f1] font-bold hover:bg-[#e9e9f3] py-2 px-3 hover:cursor-pointer">Rent</a></Link>
            <Link href="/"><a className="mr-5 hover:text-[#6366f1] font-bold hover:bg-[#e9e9f3] py-2 px-3 hover:cursor-pointer">Buy</a></Link>
            <Link href="/"><a className="mr-5 hover:text-[#6366f1] font-bold hover:bg-[#e9e9f3] py-2 px-3 hover:cursor-pointer">Sell</a></Link>
            <Link href="/"><a className="hover:text-[#6366f1] font-bold hover:bg-[#e9e9f3] py-2 px-3 hover:cursor-pointer">Manage Property</a></Link>
            <svg className="mr-5 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <Link href="/"><a className="hover:text-[#6366f1] font-bold hover:bg-[#e9e9f3] py-2 px-3 hover:cursor-pointer">Resources</a></Link>
            <svg className="mr-5 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </nav>
          <button className="inline-flex items-center border border-gray-200 text-[#6366f1] font-semibold py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mx-2">Login
          </button>
          <button className="inline-flex items-center border border-[#6366f1] bg-[#6366f1] text-[white] font-semibold py-1 px-4 focus:outline-none rounded text-base mt-4 mx-2 hover:bg-[#e9e9f3] hover:text-[#6366f1]">Sign up
          </button>
        </div>
      </header>
      <hr className='border-1 ' />
      <div className='px-[10rem] py-[4rem] bg-slate-100'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-[2rem] font-bold'>Search Properties to rent</h1>
          </div>
          <div>
            <input className="inline-flex items-center border border-gray-200 font-semibold py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mx-2" placeholder='Search with Search Bar' />
          </div>
        </div>
        <div className='flex items-center justify-evenly bg-white my-5 py-3'>
          <div>
            <p>Minimum Area (m<sup>2</sup>)</p>
            <select id="area" value={area} onChange={(e)=>{setArea(e.target.value)}} className='font-bold focus:outline-none'>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
              <option value="120">120</option>
              <option value="0">All</option>
            </select>
          </div>
          <div>
            <p>Number of Bathrooms</p>
            <select id="baths" value={baths} onChange={(e)=>{setBaths(e.target.value)}} className='font-bold focus:outline-none'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="0">All</option>
            </select>
          </div>
          <div>
            <p>Price</p>
            <select id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} className='font-bold focus:outline-none'>
              <option value="0-400">Below $400</option>
              <option value="400-2000">$400-$2000</option>
              <option value="2000-5000">$2000-$5000</option>
              <option value="5000-10000">$5000-$10000</option>
              <option value="10000-15000">$10000-$15000</option>
              <option value="15000-25000">$15000-$25000</option>
              <option value="25000-50000">$25000-$50000</option>
              <option value="0-10000000">All</option>
            </select>
          </div>
          <div>
            <p>Number of Bedrooms</p>
            <select id="rooms" value={rooms} onChange={(e)=>{setRooms(e.target.value)}} className='font-bold focus:outline-none'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="0">All</option>
            </select>
          </div>
          <div>
            <button className="inline-flex items-center border border-[#6366f1] bg-[#6366f1] text-[white] font-semibold py-3 px-5 focus:outline-none rounded text-base mt-4 mx-2 hover:bg-[#e9e9f3] hover:text-[#6366f1]">Search
            </button>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {(propertyForRent.filter((e)=>{return e.price>=price.split('-')[0] && e.price<=price.split('-')[1] && (rooms!=0? e.rooms==rooms : e.rooms>=rooms) && (baths!=0? e.baths==baths : e.baths>=baths) && e.area>=area})).map((property) => <Property property={property} key={property.id} />)}
              {!(propertyForRent.filter((e)=>{return e.price>=price.split('-')[0] && e.price<=price.split('-')[1] && (rooms? e.rooms==rooms : e.rooms>=rooms) && (baths!=0? e.baths==baths : e.baths>=baths) && e.area>=area})).length && <div className='text-[3rem] font-bold w-[100%] text-center'>No results found for this filter</div>}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=21`)
  return {
    props: {
      propertyForRent: propertyForRent?.hits
    }
  }
}