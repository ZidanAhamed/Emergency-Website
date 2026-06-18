// Card alert & coins cutting section
function handleCall(btn) {

    const remainingCoin = document.getElementById("remaining-coin");
    const newValue = parseInt(remainingCoin.innerText);

    if (newValue < 20) {
        alert("You don't have enough coin to make the call");
        return;
    }

    const card = btn.closest('.card');
    const serviceName = card.querySelector('.service-name').textContent;
    const serviceNumber = card.querySelector('.service-number').textContent;

    alert(`Calling ${serviceName} - ${serviceNumber}`);
    remainingCoin.innerText = newValue - 20;

    const callHistory = document.getElementById("call-history-container");
    const historyData = document.createElement("div");

    const now = new Date();
    const time = now.toLocaleTimeString();

    historyData.innerHTML = `
<div class="border border-solid p-4 rounded-2xl mt-3 flex justify-between items-center">
    <div class="">
      <p class="font-bold">${serviceName}</p>
      <p class="text-gray-500">${serviceNumber}</p>
      <p class="text-gray-400 text-sm">${time}</p>
    </div>
    <div>
    <i class="single-delete-btn text-[30px] fa-regular fa-rectangle-xmark"></i>
    </div>
</div>
`;

    document.getElementById("call-history-list").appendChild(historyData);

    const deleteBtn = historyData.querySelector(".single-delete-btn")
    deleteBtn.addEventListener('click', function () {
        historyData.remove();
    });
}




document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        handleCall(btn);
    });
});



// Heart section


function heartChange(id) {
    const remainingHeart = document.getElementById("remaining-heart");
    const remainingHeartConverted = parseInt(remainingHeart.innerText);
    remainingHeart.innerText = remainingHeartConverted + 1;
    document.getElementById(id).classList.add("cardHclass");

}

document.getElementById("card-heart-1").addEventListener('click', function () {
    heartChange("card-heart-1");
})
document.getElementById("card-heart-2").addEventListener('click', function () {
    heartChange("card-heart-2");
})
document.getElementById("card-heart-3").addEventListener('click', function () {
    heartChange("card-heart-3");
})
document.getElementById("card-heart-4").addEventListener('click', function () {
    heartChange("card-heart-4");
})
document.getElementById("card-heart-5").addEventListener('click', function () {
    heartChange("card-heart-5");
})
document.getElementById("card-heart-6").addEventListener('click', function () {
    heartChange("card-heart-6");
})


// Clear button section

document.getElementById("clear-button").addEventListener('click', function () {
    document.getElementById("call-history-list").innerHTML = "";


})


// copy button section
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function () {

        // Find the card containing the clicked button
        const card = btn.closest('.card');

        // Get the service number from that card
        const serviceNumber = card.querySelector('.service-number').textContent;

        // Copy the number to the clipboard
        navigator.clipboard.writeText(serviceNumber);

        // Optional: show a message
        alert(`Copied ${serviceNumber}`);
    });
});

