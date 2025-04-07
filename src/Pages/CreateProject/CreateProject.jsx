import React, { useState } from "react";
import style from './CreateProject.module.scss';
import { SectionOne } from "../../Widgets/CreateProject/SectionOne/SectionOne.tsx";
import { SectionTwo } from "../../Widgets/CreateProject/SectionTwo/SectionTwo.tsx";
import { SectionTree } from "../../Widgets/CreateProject/SectionThree/SectionThree.tsx";
import { SectionFour } from "../../Widgets/CreateProject/SectionFour/UI/SectionFour.tsx";

function CreateProject(){
    const [numberSection, setNumberSection] = useState('1');
    const [file, setFile] = useState();
    const sections = {
        '1' : <SectionOne setFile={setFile} setNumberSection={setNumberSection} />, 
        '2' : <SectionTwo setNumberSection={setNumberSection} />,
        '3' : <SectionTree setNumberSection={setNumberSection} />,
        '4' : <SectionFour file={file}/>
    };
    return(
        <>
            {sections[numberSection]}
        </>
    );
}

export default CreateProject;