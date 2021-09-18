import { Resume } from "../models/Resume";

export const getResumeData = async (): Promise<Resume> => {
    try {
        const res = await fetch('resume.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return await res.clone().json();
    } catch (e) {
        console.error(e);
        throw new Error("Error on trying to retrieve resume data...");
    }
}
