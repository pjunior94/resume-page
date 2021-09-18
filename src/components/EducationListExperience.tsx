import { Education } from "../models/Education"
import EducationExperience from "./EducationExperience"

interface EducationList {
    items?: Education[]
}


const EducationListExperience = (propsEducationList: EducationList) => {
    return (
        <div>
            {
                propsEducationList.items?.map((ed) => {
                    return (
                        <EducationExperience
                            degree={ed.degree}
                            school={ed.school}
                            endYear={ed.endYear}
                        />
                    )
                })
            }
        </div>
    )
}

export default EducationListExperience