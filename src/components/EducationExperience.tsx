import { Education } from "../models/Education";


const EducationExperience = (propsEducationExperience: Education) => {
    return (
        <div className="flex flex-row">
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                {propsEducationExperience.endYear}, {propsEducationExperience.degree},&nbsp;
            </p>
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black justify-end sm:justify-end md:justify-end lg:justify-start">
                {propsEducationExperience.school}
            </p>
        </div>
    )
}

export default EducationExperience;