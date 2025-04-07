
interface rewardI{
    name : string,
    descript : string,
    count : string,
    cell : string,
}

interface ProjectState {
    name: string;
    smallDescript: string;
    totalSum: number;
    date: string;
    bigDescript: string;
    rewards: rewardI[];
    image : string
}

export function CreateProject(project : ProjectState, file : File){
    const formData = new FormData();
    
    formData.append('name', project.name);
    formData.append('description_small', project.smallDescript);
    formData.append('description_full', project.bigDescript);
    formData.append('sum', project.totalSum.toString());
    formData.append('current_sum', '0');
    formData.append('date', project.date);
    formData.append('file', file.file); // Файл
    formData.append('rewards', JSON.stringify(project.rewards));

    fetch('http://localhost:7777/api/project/create', {
       method : "POST" ,
       body : formData
    })
    .then(response => response.json())
    .then(data => console.log('Success'))
    .catch(error => console.error('Error'));
}