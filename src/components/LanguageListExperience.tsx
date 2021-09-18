import { Language } from "../models/Language"
import LanguageExperience from "./LanguageExperience"

interface LanguageList {
    items?: Language[]
}

const LanguageListExperience = (propsLanguageList: LanguageList) => {
    return (
        <div>
            {
                propsLanguageList.items?.map(la => {
                    return (
                        <LanguageExperience
                            name={la.name}
                            level={la.level}
                        />
                    )
                })
            }
        </div>
    )
}

export default LanguageListExperience