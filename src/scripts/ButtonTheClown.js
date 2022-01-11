import { ReservationForm } from "./ReservationForm.js";
import { Requests } from "./request.js";


export const ButtonTheClown = () => {
    return`
     <h1>Buttons and Lollipop the Clowns</h1>
        <section class="reservationForm">
        ${ReservationForm()}

        <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `

}