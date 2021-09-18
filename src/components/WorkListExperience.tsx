import { Experience } from "../models/Experience";
import WorkExperience from "./WorkExperience";

interface WorkList {
    items?: Experience[]
}

const WorkListExperience = (props: WorkList) => {
    return (
        <div>
            {
                props.items?.map((wo) => {
                    return (
                        <WorkExperience
                            experience={wo}
                        />
                    )
                })
            }
        </div>
    )
}

export default WorkListExperience