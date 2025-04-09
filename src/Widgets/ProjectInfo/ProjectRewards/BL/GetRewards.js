export async function GetRewards(projectID){
    try {
        const res = await fetch(`http://localhost:7777/api/project/rewards/${projectID}`)
        const result = await res.json();
        const data = result.data;
        return data;
    } catch (error) {
        return [];
    }
}