import { Education } from "./Education";
import { Experience } from "./Experience";
import { InternationalExperience } from "./InternationalExperience";
import { Knowledge } from "./Knowledge";
import { Language } from "./Language";

export class Resume {
    name?: string;
    photo?: string;
    role?: string;
    location?: string;
    phone?: string;
    email?: string;
    description?: string;
    experiences?: Experience[];
    educations?: Education[];
    languages?: Language[];
    knowledges?: Knowledge[];
    internationalExperiences?: InternationalExperience[];

    constructor(resume?: Resume) {
        this.name = resume?.name;
        this.photo = resume?.photo;
        this.location = resume?.location;
        this.role = resume?.role;
        this.phone = resume?.phone;
        this.email = resume?.email;
        this.description = resume?.description;
        this.experiences = resume?.experiences;
        this.educations = resume?.educations;
        this.languages = resume?.languages;
        this.knowledges = resume?.knowledges;
        this.internationalExperiences = resume?.internationalExperiences;
    }
}