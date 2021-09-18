import { Experience } from "../models/Experience";

interface WorkProps {
    experience: Experience
}

const WorkExperience = (propsWork: WorkProps) => {
    return (
        <div>
            <div className="flex flex-row mb-3">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                    {propsWork.experience.position}, {propsWork.experience.company.name} &nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal justify-end flex-grow sm:flex-grow md:flex-grow lg:flex-grow-0 text-black">
                    - {propsWork.experience.initialDate} - {propsWork.experience.endDate === '' ? 'present' : propsWork.experience.endDate} - {propsWork.experience.location}
                </p>
            </div>
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black pr-2">
                {propsWork.experience.company.description}
            </p>
            <div className="flex flex-row">
                <ul className="list-inside list-disc">
                    {
                        propsWork.experience.experienceDescription.map((description) => {
                            return (
                                <li className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light text-black mb-3 mt-3">
                                    {description}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience;