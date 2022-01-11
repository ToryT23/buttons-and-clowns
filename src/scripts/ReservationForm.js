// Build the HTML that contains input fields for all of the information that needs to be collected
// for a person to reserve a clown for a birthday party. 
// Keep referring back to your ERD to make sure you have an input field for each property.

export const ReservationForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" placeholder="First and Last Name" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" placeholder="First Name Here" class="input" />
    </div>
    <div class="field">
        <label class="label" for="HowManyChildrenWillAttendParty"># Of Children</label>
        <input type="number" name="HowManyChildrenWillAttendParty" placeholder="Enter a Number Here" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="addressOfTheParty" placeholder="Enter Address"  class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservation">Reservation Date</label>
        <input type="date" name="date" placeholder="Enter Date"  class="input" />
    </div>
    <div class="field">
        <label class="label" for="length">Time of Reservation</label>
       <input type="number" name="lengthOfReservation" placeholder="Length of Reservation" class="input" />
    
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
`

return html


}