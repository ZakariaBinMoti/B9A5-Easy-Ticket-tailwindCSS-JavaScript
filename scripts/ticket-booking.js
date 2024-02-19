const seats = document.querySelectorAll('#seats');
let seatsArray = [];
let availableSeats = 40;
let selectedSeats = 0;
let Total = 0;
let GrandTotal = 0;
for (const seat of seats) {
    seat.addEventListener('click', function () {

        if (!seatsArray.includes(seat.innerText)) {
            if (seatsArray.length < 4) {
                seatsArray.push(seat.innerText);
                seat.style.backgroundColor = 'green';
                setAvailableSeats();
                ticketlist();
            }
            else {
                alert('You cant add more than 4 seat');
            }
            // seat.style.backgroundColor = 'skyblue';

        }
        else {
            seat.style.backgroundColor = '';
            seatsArray.pop();
            setAvailableSeats();
            ticketlist();

        }
        console.log(seatsArray);
        console.log(seat.innerText);
    })
}
console.log(seats);

setAvailableSeats();
function setAvailableSeats() {
    document.getElementById('AvailableSeats').innerText = availableSeats - seatsArray.length;
    document.getElementById('selectedSeats').innerText = seatsArray.length;
}
ticketlist();
function ticketlist() {
    document.getElementById('ticketlist').innerHTML = ``;
    for (const element of seatsArray) {    
        const div = document.createElement('div');
        div.setAttribute('class', 'flex justify-between')
        div.innerHTML = `<p>C2</p>
    <p>Economy</p>
    <p>550</p>`;
        div.firstChild.innerText = element;
        document.getElementById('ticketlist').appendChild(div);
    }
}

function sum() {
    
}