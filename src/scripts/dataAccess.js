const applicationState = {
    requests: []
   }
   
   const mainContainer = document.querySelector("#container")
   
   const API = "http://localhost:8088"

   export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map((request) => ({ ...request }));
  };


   export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
      //Remember that every time state changes, you have to generate new HTML representations of the state.
    // Now that you have the ability to generate new state and store it permanently in your API, 
    // you need to implement the stateChanged custom action again.
// sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.

return fetch(`${API}/requests`, fetchOptions)
.then(response => response.json())
.then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
})
   }

//  this function is responsible for initiating the fetch request for
// DELETE, must have the primary key sent to it as an argument.

export const deleteRequest = (id) => {
return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}