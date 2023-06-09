import Image from "next/image";

const Service = (props: { src: string, text: string, className: string, alt: string }) => {
  return (
    <div className={`flex justify-center items-center gap-5 mb-8 px-3 ${props.className} md:text-3xl md:flex-col md:justify-start`}>
      <img src={props.src} alt={props.alt} className="drop-shadow-xl w-[124px] h-[124px] md:w-[200px] md:h-[200px]" />
      <p className="w-1/2 md:w-auto text-center">{props.text}</p>
    </div>
  )
}

export default Service;