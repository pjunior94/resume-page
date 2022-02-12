import { useState, useEffect } from 'react';

import ImageProfile from '../../components/ImageProfile';
import ImageListExperience from '../../components/ImageListExperience';
import WorkListExperience from '../../components/WorkListExperience';
import EducationListExperience from '../../components/EducationListExperience';
import LanguageListExperience from '../../components/LanguageListExperience';

import { getResumeData } from "../../services/ResumeService";
import { Resume } from '../../models/Resume';


const PageIndex = () => {

    /// Set initial value to resume object.
    const [resume, setResumeData] = useState <Resume> (new Resume());

    /// Set initial call to resume data service. 
    useEffect(() => {
        getResumeData()
            .then((resume: Resume) => {
                console.log("resume: ", resume)
                setResumeData(resume);
            })
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex flex-grow items-center justify-center">
                <div className="flex flex-col flex-grow-0 shadow-2xl rounded-lg bg-white w-auto h-auto m-28">
                    <div className="flex flex-grow-0 justify-center">
                        <ImageProfile src={resume.photo} alt="Paul's profile picture" />
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
                        <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col justify-center sm:justify-center md:justify-center lg:justify-start flex-grow pl-2 sm:pl-2 md:pl-2 lg:pl-2">
                            <p className="font-sans text-xl sm:text-2xl md:text-2xl lg:text-3xl font-normal text-gray-800">{resume.name}</p>
                        </div>

                        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col flex-grow pr-2 sm:pr-2 md:pr-2 lg:pr-2">
                            <div className="flex flex-grow sm:flex-grow md:flex-grow-0 lg:flex-grow-0 flex-row sm:flex-row md:flex-col lg:flex-col">
                                <div className="flex flex-grow sm:flex-grow md:flex-grow lg:flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end">
                                    <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600" href="https://www.google.com/maps/search/Porto,%20Portugal?hl=en&source=opensearch" target="_blank" rel="noreferrer"> 🌍 {resume.location}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
                        <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600" href={`mailto:${resume.email}`}>📥 {resume.email}</a>
                    </div>
                    <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
                        <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600"
                            href={`https://wa.me/${resume.phone?.replaceAll(' ', '')}`} target="_blank" rel="noreferrer">📱 {resume.phone}</a>
                    </div>

                    <div className="flex flex-col flex-grow p-4">
                        <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
                            Work Experiences 👨🏻‍💻
                        </p>
                        <WorkListExperience items={resume.experiences}></WorkListExperience>
                    </div>

                    <div className="flex flex-col flex-grow p-4">
                        <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
                            Education 📚
                        </p>
                        <EducationListExperience items={resume.educations}></EducationListExperience>
                    </div>

                    <div className="flex flex-col flex-grow p-4">
                        <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
                            Languages 🇬🇧
                        </p>
                        <LanguageListExperience items={resume.languages} ></LanguageListExperience>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col flex-grow">
                            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
                                International Experience ✈️
                            </p>
                        </div>
                        <ImageListExperience items={resume.internationalExperiences}></ImageListExperience>

                        {/* <div className="flex flex-row justify-center sm:justify-center md:justify-center lg:justify-start m-3">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download CV</span>
          </button>
        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageIndex