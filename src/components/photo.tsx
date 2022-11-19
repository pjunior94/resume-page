
import empty from "../assets/empty.png";

interface PhotoProps {
    imageUrl?: string
    alt: string
}

export const Photo = (propsPhoto: PhotoProps) => {
    return (
        <div className="flex flex-grow-0 justify-center">
        <div className="rounded-full bottom-16 h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44" style={{
            display: 'block',
            borderWidth: 3,
            borderColor: '#fff'
          }}>
            <img
              className="rounded-full h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44"
              src={propsPhoto.imageUrl ?? empty}
              alt={propsPhoto.alt}
            />
          </div>
        </div>
    )
}