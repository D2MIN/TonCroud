interface ProjectState {
    name: string;
    image: string;
    smallDescript: string;
    totalSum: number;
    date: string;
    bigDescript: string;
    rewards: string[];
}

export function CreateProject(project : ProjectState){
    fetch('http://localhost:7777/api/project/add', {
       method : "POST" ,
       headers : {
        "Content-Type" : "application/json",
       },
       body : JSON.stringify({
        "name" : project.name,
        "description_small" : project.smallDescript,
        "description_full" : project.bigDescript,
        "img" : project.image,
        "sum" : project.totalSum,
        "current_sum" : 0,
        "date" : project.date
       })
    });
}