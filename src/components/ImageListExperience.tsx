import { InternationalExperience } from "../models/InternationalExperience"
import ImageExperience from "./ImageExperience"

interface ImageList {
    items?: InternationalExperience[]
}

const ImageListExperience = (props: ImageList) => {

    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row flex-grow justify-center">
            {
                props.items?.map(e => {
                    return (
                        <ImageExperience
                            name={e.location}
                            alt={e.location}
                            src={e.image}
                            link={e.link}
                        />
                    )
                })
            }
        </div>
    )
}

export default ImageListExperience