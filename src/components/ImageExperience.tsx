import { Photo } from "../models/Photo"


const ImageExperience = (props: Photo) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">
                <img
                    className="rounded-md w-52 h-52"
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <a className="font-sans text-sm sm:text-sm md:text-lg lg:text-xl font-light text-gray-600" href={props.link} target="_blank" rel="noreferrer"> {props.name} </a>
        </div>
    )
}

export default ImageExperience