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
    project: ProjectState; 
}

export function CreateProject(project : RootState){
    
}