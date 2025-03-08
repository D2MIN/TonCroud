import React from "react";
import { useSelector } from "react-redux";

interface ProjectState {
    name: string;
    image: string;
    smallDescript: string;
    totalSum: number;
    date: string;
    bigDescript: string;
    rewards: string[];
}

interface RootState {
    project: ProjectState; // Добавьте другие reducers, если они есть
}

export function SectionFour(){

    const project = useSelector((state : RootState) => state.project);

    return (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>{project.smallDescript}</p>
            <p>{project.bigDescript}</p>
            <ul>
                {project.rewards.map((reward, index) => (
                    <li key={index}>{reward}</li>
                ))}
            </ul>
        </div>
    );
}