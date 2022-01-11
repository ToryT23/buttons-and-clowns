import { getRequests } from "./dataAccess.js"


// made a function to return a list of descriptions from my request array
// below I used dot notation and string interpolation
// <button></button> class creates the button for each individual li
const convertRequestToListElement = (request) => {
return`<li>
${request.dateOfReservation}

<button class="request__delete"
        id="request--${request.id}">
    Delete
</button>
</li>
`
}

// export request to sink repair, (SinkRepair is the holding area for html content)

export const Requests = () => {
// write a request function that contains a request that is equal to getRequest that is imported from dataAccess.js
    const requests = getRequests()
// sorts the array by date
    requests.sort()
// sorts the array by date in reverse order
    requests.reverse()


// let the html represented be an <ul></ul>, use string interpolation to map thru the request
// to return a new array of strings that are list items of the request 
// join is a method on a array, joins puts everything right next to each other without a comma.
// use this whenever you pass in an empty string and are trying to represent html without a space
    let html = `
        <ul>
            ${
                requests.map((request) => convertRequestToListElement(request)).join("")
                
               
            }
            
        </ul>
    `

    return html
    
}