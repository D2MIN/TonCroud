export async function GetData(id){
    try{
        const result = await fetch(`http://localhost:7777/api/project/${id}`);
        const data = await result.json();
        return data;
    }catch(error){
        return(error);
    }
}