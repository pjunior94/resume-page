import { Education } from "./Education";
import { Experience } from "./Experience";
import { InternationalExperience } from "./InternationalExperience";
import { Knowledge } from "./Knowledge";
import { Language } from "./Language";

export interface IResume {
    name: string;
    photo: string;
    location: string;
    phone: string;
    email: string;
    description: string;
    experiences: Experience[];
    educations: Education[];
    languages: Language[];
    knowledges: Knowledge[];
    internationalExperiences: InternationalExperience[];
}