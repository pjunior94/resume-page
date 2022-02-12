import { Resume } from "../models/Resume";
import { doc, getDoc } from 'firebase/firestore/lite';


import db from "../firebase.config";

export const getResumeData = async (): Promise<Resume> => {
    try {
        const resumeCol = doc(db, 'resume', 'MCELH380CsxAQKh0lbZw');
        const resumeSnapshot = await getDoc(resumeCol);

        const resumeDoc = new Resume(resumeSnapshot.data());
        
        return resumeDoc;

    } catch (error) {
        console.error(error);
        throw new Error("Error on trying to retrieve resume data...");
    }
}