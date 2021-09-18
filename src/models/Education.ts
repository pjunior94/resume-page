
export class Education {
    school:string;
    degree: string;
    endYear: string;
    description?: string;

    constructor(education: Education) {
        this.school = education.school;
        this.degree = education.degree;
        this.endYear = education.endYear;
        this.description = education.description;
    }
}