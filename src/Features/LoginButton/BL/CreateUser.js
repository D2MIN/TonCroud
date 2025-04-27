export function CreateUser(address){
    fetch('http://localhost:7777/api/user/add', {
        method: "POST",
        headers: {"Content-type" : 'application/json'},
        body: JSON.stringify({
            address : address
        })
    })
}