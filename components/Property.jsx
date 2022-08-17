import Link from "next/link";
import Image from "next/image";
import { faBed, faBath, faAreaChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Property({property: { price, coverPhoto, DefaultImage, location, title, baths, rooms, area}}) {return (
  <Link href={`/`} passHref>
    <div className="p-2 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="house"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium mb-5">
           <span className="text-[#6366f1] text-[1.5rem]">${price}</span>/month  
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title.split('||')[0]}
          </h1>
          <p className="leading-relaxed mb-3">
            {location[3].name}
          </p>
          <hr className="border-1" />
          <div className="flex items-center justify-between mt-3">
            <div><FontAwesomeIcon icon={faBed} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {rooms} Beds</div>
            <div><FontAwesomeIcon icon={faBath} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {baths} Bathrooms</div>
            <div><FontAwesomeIcon icon={faAreaChart} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {area.toFixed(2)} m<sup>2</sup></div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)};

