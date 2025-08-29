// --- Favourite Counter --- 
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("counter");
  let count = 0;

  // --- Favourites (hearts) ---
  const hearts = document.querySelectorAll(".fa-heart");
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      count++;
      counterEl.textContent = count;

      // Optional toggle style
      heart.classList.toggle("fa-regular");
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("text-red-500");
    });
  });

  // --- Copy Buttons ---
  const copyButtons = document.querySelectorAll(".card .button-copy");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const serviceNumber = card.querySelector("p.font-bold").textContent.trim();
      const serviceName = card.querySelector("h3").textContent.trim();

      navigator.clipboard.writeText(serviceNumber).then(() => {
        // Increment the SAME counter
        count++;
        counterEl.textContent = count;

        alert(`Copied ${serviceName} number: ${serviceNumber}`);
      }).catch(() => {
        alert("Failed to copy number. Please try again.");
      });
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
      li.innerHTML = `<span>${serviceName} ${serviceNumber}</span><br><span>${time}</span>`;
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
 
