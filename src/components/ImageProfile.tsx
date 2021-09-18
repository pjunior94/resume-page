

import { Photo } from "../models/Photo";

import empty from "../assets/empty.png";

const ImageProfile = (props: Photo) => {

    const photoProps = {...props};

    return (
        <div className="rounded-full bottom-16 h-28 w-28 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-38 lg:w-38" style={{
            display: 'block',
            position: 'relative',
            borderWidth: 3,
            borderColor: '#fff'
          }}>
            <img
              className="rounded-full h-28 w-28 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-38 lg:w-38"
              src={photoProps.src ?? empty}
              alt={photoProps.alt}
            />
          </div>
    )
}

export default ImageProfile