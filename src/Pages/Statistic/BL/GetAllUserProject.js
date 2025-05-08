export async function GetAllUserProject(address){
    try {
        if(address != ''){
            const result = await fetch(`http://localhost:7777/api/user/${address}/projects`, {
                method: "GET",
                headers : { "Content-type" : 'application/json' },
            });

            return result.json();
        }else{
            return [];
        }   
    } catch (error) {
        return error
    }
}