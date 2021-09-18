import { Language } from "../models/Language"


const LanguageExperience = (propsLanguage: Language) => {
    return (
        <div className="flex flex-row">
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                {propsLanguage.name}, &nbsp;
            </p>
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black">
                {propsLanguage.level}
            </p>
        </div>
    )
}

export default LanguageExperience