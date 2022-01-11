import { ButtonTheClown } from "./ButtonTheClown.js"
import { fetchRequests } from "./dataAccess.js"
import { sendRequest } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildrenAttending = document.querySelector("input[name='HowManyChildrenWillAttendParty']").value
        const userLengthOfTime = document.querySelector("input[name='lengthOfReservation']").value
        const userAddressOfParty = document.querySelector("input[name='addressOfTheParty']").value
        const userDate = document.querySelector("input[name='date']").value
        
        // below is a truthy statement used to avoid a user from submitting an incomplete form
        if (userParentName && userChildName && userChildrenAttending && userAddressOfParty &&
             userLengthOfTime && userDate){
           
         // Send the data to the API for permanent storage
            const dataToSendToAPI = {
                parentName: userParentName,
                childName:userChildName,
                HowManyChildrenWillAttendParty: userChildrenAttending,
                addressOftheParty: userAddressOfParty,
                lengthOfReservation: userLengthOfTime,
                dateOfReservation: userDate
            }

            // Send the data to the API for permanent storage
            sendRequest(dataToSendToAPI)
        }

    }
})

// this click addEventListener will delete the request after it is
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonTheClown()
        }
    )
}
render()

// this mainContainer.addEventListener is use to render() the function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)