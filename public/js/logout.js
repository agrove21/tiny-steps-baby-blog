async function logout( ) {
    console.log('logout')
const res = await fetch("/api/users/logout", {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
})
if (res.ok){
    document.location.replace('/')
}
}


document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('logout').addEventListener('click', logout)

})
document.getElementById('logout').innerHTML = ""