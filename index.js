// --- Favourite Counter --- 
document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  let count = 0;

 const hearts = document.querySelectorAll(".fa-heart");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      count++;
      counterElement.textContent = count;
      heart.classList.toggle("fa-regular");
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("text-red-500"); 
    });
  });



// --- Coin system & Call buttons ---
  let coins = 100; // starting coins
  const coinEl = document.querySelector(".fa-coin")?.previousElementSibling 
                || document.querySelector("p.font-bold"); // coin number element
  coinEl.textContent = coins;

  const callButtons = document.querySelectorAll(".card button.bg-green-500");
  const callHistory = document.querySelector(".col-span-1 ul"); // history list

  callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card"); // find parent card
      const serviceName = card.querySelector("h3").textContent.trim();
      const serviceNumber = card.querySelector("p.font-bold").textContent.trim();

      if (coins < 20) {
        alert("Not enough coins to make a call. Please earn more coins.");
        return;
      }

      // Deduct 20 coins
      coins -= 20;
      coinEl.textContent = coins;

      // Alert
      alert(`Calling ${serviceName} at ${serviceNumber}...`);

      // Add to call history
      const li = document.createElement("li");
      const time = new Date().toLocaleTimeString();
      li.innerHTML = `<span>${serviceName} ${serviceNumber}</span><span>${time}</span>`;
      callHistory.prepend(li); // newest first
    });
  });

 // --- Clear Call History ---
  const clearBtn = document.querySelector(
    ".col-span-1 button[aria-label='Clear call history']"
  );

  clearBtn.addEventListener("click", () => {
    callHistory.innerHTML = ""; // remove all <li>
    alert("Call history cleared!");
  });

  });

 
