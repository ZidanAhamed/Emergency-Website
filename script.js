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
<div class="border border-solid p-4 rounded-2xl mt-3">
      <p class="font-bold">${serviceName}</p>
      <p class="text-gray-500">${serviceNumber}</p>
      <p class="text-gray-400 text-sm">${time}</p>

</div>
`;

    callHistory.appendChild(historyData);
}



document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        handleCall(btn);
    });
});




