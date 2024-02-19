// ----scroll button area----------------------------------------------------------------------------------------------------->
function scrollToSection() {
    const viewSection = document.getElementById("ticketArea");
    viewSection.scrollIntoView({ behavior: "smooth" });
}




// ----seat select button----------------------------------------------------------------------------------------------------->
function seatSelect(button) {
    const eClassList = button.classList;
    const isSelected = eClassList.contains('selected');
    const seatLabel = button.innerText;

    if (isSelected) {
        eClassList.remove('selected', 'text-white', 'bg-primary');
        eClassList.add('text-[#03071280]', 'bg-[#F7F8F8]');
        updateSeatsLeft(1);
        updateSeatInc(-1);
        removeSeatFromPopper(seatLabel); // Remove seat label from popper
    } else {
        eClassList.remove('text-[#03071280]', 'bg-[#F7F8F8]');
        eClassList.add('text-white', 'bg-primary', 'selected');
        updateSeatsLeft(-1);
        updateSeatInc(1);
        addSeatToPopper(seatLabel);
    }
}

function addSeatToPopper(seatLabel) {
    const popper = document.getElementById('popper');
    const seatEntry = document.createElement('div');
    seatEntry.classList.add('flex', 'flex-wrap', 'gap-4', 'text-secondary', 'py-2');
    seatEntry.innerHTML = `
        <p class="py-1">${seatLabel}</p>
        <p class="py-1">Economy</p>
        <p class="py-1">550</p>
    `;
    popper.appendChild(seatEntry);
    popper.classList.remove('hidden');
}

function removeSeatFromPopper(seatLabel) {
    const popper = document.getElementById('popper');
    const seats = popper.getElementsByTagName('div');
    for (let i = 0; i < seats.length; i++) {
        const pElement = seats[i].getElementsByTagName('p')[0];
        if (pElement.innerText === seatLabel) {
            popper.removeChild(seats[i]);
            break;
        }
    }
    if (popper.childElementCount === 0) {
        popper.classList.add('hidden');
    }
}

function updateSeatsLeft(change) {
    let seatLeftSpan = document.getElementById("seatInc");
    let remainingSeats = parseInt(seatLeftSpan.innerText);
    remainingSeats = Math.max(0, remainingSeats + change);
    seatLeftSpan.innerText = remainingSeats;

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = remainingSeats <= 3;
    if (nextBtn.disabled) {
        nextBtn.classList.add('text-[#6b7280]', 'bg-[#d6d3d1]');
    } else {
        nextBtn.classList.remove('text-[#6b7280]', 'bg-[#d6d3d1]');
    }
}

function updateSeatInc(change) {
    let seatInc = document.getElementById("seatInc");
    let seatIncValue = parseInt(seatInc.innerText);
    seatIncValue += change;
    seatInc.innerText = Math.max(0, seatIncValue);
}





// -------Modal Area--------------------------------------------------------------------------------------------------------->
// show open modal event
function showMod() {
    const modalView = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modalView.classList.remove('hidden');
    overlay.classList.remove('hidden');

    overlay.showModal();
    modalView.showModal();
}
// show close modal event
document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'closeMod') {
        window.location.reload();
    }
});