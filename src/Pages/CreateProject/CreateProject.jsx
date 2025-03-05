import React, { useState } from "react";
import style from './CreateProject.module.scss';
import { SectionOne } from "../../Widgets/CreateProject/SectionOne/SectionOne.tsx";
import { SectionTwo } from "../../Widgets/CreateProject/SectionTwo/SectionTwo.tsx";

function CreateProject(){
    const [numberSection, setNumberSection] = useState('1');
    const sections = {
        '1' : <SectionOne setNumberSection={setNumberSection} />, 
        '2' : <SectionTwo setNumberSection={setNumberSection} />
    };
    return(
        <>
            {sections[numberSection]}
        </>
    );
}

export default CreateProject;