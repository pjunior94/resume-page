import { Company } from "./Company";

export class Experience {
    company: Company;
    initialDate: string;
    endDate: string;
    location: string;
    position: boolean;
    experienceDescription: string[];

    constructor(experience: Experience) {
        this.company = experience.company;
        this.initialDate = experience.initialDate;
        this.endDate = experience.endDate;
        this.location = experience.location;
        this.position = experience.position;
        this.experienceDescription = experience.experienceDescription;
    }
}