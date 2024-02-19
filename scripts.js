// ----scroll button area----------------------------------------------------------------------------------------------------->
function scrollToSection() {
    const viewSection = document.getElementById("ticketArea");
    viewSection.scrollIntoView({ behavior: "smooth" });
}




// ----seat select button----------------------------------------------------------------------------------------------------->
// 
function seatSelect(button) {
    const eClassList = button.classList;
    const isSelected = eClassList.contains('selected');

    if (isSelected) {
        // Unselect the button
        eClassList.remove('selected', 'text-white', 'bg-primary');
        eClassList.add('text-[#03071280]', 'bg-[#F7F8F8]');
        updateSeatsLeft(1);
    }
    else {
        // Select the button
        eClassList.remove('text-[#03071280]', 'bg-[#F7F8F8]');
        eClassList.add('text-white', 'bg-primary', 'selected');
        updateSeatsLeft(-1);

    }
}
function updateSeatsLeft(change) {
    let seatLeftSpan = document.getElementById("seatLeft");
    let remainingSeats = parseInt(seatLeftSpan.innerText);
    remainingSeats += change;
    remainingSeats = Math.max(0, remainingSeats);
    seatLeftSpan.innerText = remainingSeats;

    // en/dis button area
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn.disabled = remainingSeats <= 3) {
        nextBtn.classList.add('text-[#6b7280]', 'bg-[#d6d3d1]');
    }
    else {
        nextBtn.classList.remove('text-[#6b7280]', 'bg-[#d6d3d1]');
    }
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