/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/
const button = document.getElementById('button')

button.addEventListener('click', getActivity)

function getActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        document.getElementById("activity").textContent = `${data.activity}`
    })
}




