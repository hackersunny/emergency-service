// // --- Favourite Counter --- 
// document.addEventListener("DOMContentLoaded", () => {
//   // const counterEl = document.getElementById("counter");
//   const coinElement = document.getElementById("coinCount");
//   let count = 0;

//   // --- Favourites (hearts) ---
//   const hearts = document.querySelectorAll(".fa-heart");
//   hearts.forEach(heart => {
//     heart.addEventListener("click", () => {
//       count++;
//       counterEl.textContent = count;

//       // Optional toggle style
//       heart.classList.toggle("fa-regular");
//       heart.classList.toggle("fa-solid");
//       heart.classList.toggle("text-red-500");
//     });
//   });

//   // --- Copy Buttons ---
//   const copyButtons = document.querySelectorAll(".card .button-copy");
//   copyButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".card");
//       const serviceNumber = card.querySelector("p.font-bold").textContent.trim();
//       const serviceName = card.querySelector("h3").textContent.trim();

//       navigator.clipboard.writeText(serviceNumber).then(() => {
//         // Increment the SAME counter
//         count++;
//         counterEl.textContent = count;

//         alert(`Copied ${serviceName} number: ${serviceNumber}`);
//       }).catch(() => {
//         alert("Failed to copy number. Please try again.");
//       });
//     });
//   });
 




// // --- Coin system & Call buttons ---
//   let coins = 100; // starting coins
//   const coinEl = document.querySelector(".fa-coin")?.previousElementSibling 
//                 || document.querySelector("p.font-bold"); // coin number element
//   coinEl.textContent = coins;

//   const callButtons = document.querySelectorAll(".card button.bg-green-500");
//   const callHistory = document.querySelector(".col-span-1 ul"); // history list

//   callButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".card"); // find parent card
//       const serviceName = card.querySelector("h3").textContent.trim();
//       const serviceNumber = card.querySelector("p.font-bold").textContent.trim();

//       if (coins < 20) {
//         alert("Not enough coins to make a call. Please earn more coins.");
//         return;
//       }

//       // Deduct 20 coins
//       coins -= 20;
//       coinEl.textContent = coins;

//       // Alert
//       alert(`Calling ${serviceName} at ${serviceNumber}...`);

//       // Add to call history
//       const li = document.createElement("li");
//       const time = new Date().toLocaleTimeString();
//       li.innerHTML = `<span>${serviceName} ${serviceNumber}</span><br><span>${time}</span>`;
//       callHistory.prepend(li); // newest first
//     });
//   });


//  // --- Clear Call History ---
//   const clearBtn = document.querySelector("button[aria-label='Clear call history']")

//   clearBtn.addEventListener("click", () => {
//     callHistory.innerHTML = ""; // remove all <li>
//     alert("Call history cleared!");
//   });
//  });

 
// document.addEventListener("DOMContentLoaded", () => {
//   // --- Counter ---
//   const counterEl = document.getElementById("counter");
//   let count = 0;

//   // --- Favourites (hearts) ---
//   const hearts = document.querySelectorAll(".fa-heart");
//   hearts.forEach(heart => {
//     heart.addEventListener("click", () => {
//       // If you want toggle count instead of always ++
//       if (heart.classList.contains("fa-solid")) {
//         count--;
//       } else {
//         count++;
//       }
//       counterEl.textContent = count;

//       heart.classList.toggle("fa-regular");
//       heart.classList.toggle("fa-solid");
//       heart.classList.toggle("text-red-500");
//     });
//   });

//   // --- Copy Buttons ---
//   const copyButtons = document.querySelectorAll(".card .button-copy");
//   copyButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".card");
//       const serviceNumber = card.querySelector("p.font-bold").textContent.trim();
//       const serviceName = card.querySelector("h3").textContent.trim();

//       navigator.clipboard.writeText(serviceNumber).then(() => {
//         count++;
//         counterEl.textContent = count;
//         alert(`Copied ${serviceName} number: ${serviceNumber}`);
//       }).catch(() => {
//         alert("Failed to copy number. Please try again.");
//       });
//     });
//   });

//   // --- Coin system & Call buttons ---
//   let coins = 100; 
//   const coinEl = document.getElementById("coinCount"); // more reliable
//   coinEl.textContent = coins;

//   const callButtons = document.querySelectorAll(".card button.bg-green-500");
//   const callHistory = document.querySelector("ul");

//   callButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".card");
//       const serviceName = card.querySelector("h3").textContent.trim();
//       const serviceNumber = card.querySelector("p.font-bold").textContent.trim();

//       if (coins < 20) {
//         alert("Not enough coins to make a call. Please earn more coins.");
//         return;
//       }

//       coins -= 20;
//       coinEl.textContent = coins;

//       alert(`Calling ${serviceName} at ${serviceNumber}...`);

//       const li = document.createElement("li");
//       const time = new Date().toLocaleTimeString();
//       li.innerHTML = `<span>${serviceName} ${serviceNumber}</span><span>${time}</span>`;
//       callHistory.prepend(li);
//     });
//   });

//   // --- Clear Call History ---
// const clearBtn = document.querySelector("button[aria-label='Clear call history']");
// if (clearBtn) {
//   clearBtn.addEventListener("click", () => {
//     // Find the UL inside the same card as the button
//     const historyCard = clearBtn.closest(".card");
//     const callHistoryList = historyCard ? historyCard.querySelector("ul") : null;

//     if (!callHistoryList) {
//       console.warn("Call history <ul> not found.");
//       alert("Couldn't find the call history list.");
//       return;
//     }

//     // Empty the list
//     callHistoryList.replaceChildren(); // or: callHistoryList.innerHTML = "";
//     alert("Call history cleared!");
//   });
// }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // --- Counter ---
//   const counterEl = document.getElementById("counter");
//   let count = 0;

//   // --- Favourites (hearts) ---
//   const hearts = document.querySelectorAll(".fa-heart");
//   hearts.forEach(heart => {
//     heart.addEventListener("click", () => {
//       if (heart.classList.contains("fa-solid")) {
//         count--;
//       } else {
//         count++;
//       }
//       counterEl.textContent = count;

//       heart.classList.toggle("fa-regular");
//       heart.classList.toggle("fa-solid");
//       heart.classList.toggle("text-red-500");
//     });
//   });

//   // --- Copy Buttons ---
//   const copyButtons = document.querySelectorAll(".card .button-copy");
//   copyButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".card");
//       const serviceNumber = card.querySelector("p.font-bold").textContent.trim();
//       const serviceName = card.querySelector("h3").textContent.trim();

//       navigator.clipboard.writeText(serviceNumber).then(() => {
//         count++;
//         counterEl.textContent = count;
//         alert(`Copied ${serviceName} number: ${serviceNumber}`);
//       }).catch(() => {
//         alert("Failed to copy number. Please try again.");
//       });
//     });
//   });

//   // --- Coin system & Call buttons ---
//   let coins = 100;
//   const coinEl = document.getElementById("coinCount");
//   if (coinEl) coinEl.textContent = coins;

//   const callButtons = document.querySelectorAll(".card button.bg-green-500");

// callButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const card = btn.closest(".card");
//     const serviceName = card.querySelector("h3").textContent.trim();
//     const serviceNumber = card.querySelector("p.font-bold").textContent.trim();
//     const callHistory = card.querySelector("ul"); // ✅ always local

//     if (coins < 20) {
//       alert("Not enough coins to make a call. Please earn more coins.");
//       return;
//     }

//     coins -= 20;
//     coinEl.textContent = coins;

//     alert(`Calling ${serviceName} at ${serviceNumber}...`);

//     if (callHistory) {
//       const li = document.createElement("li");
//       const time = new Date().toLocaleTimeString();
//       li.innerHTML = `<span>${serviceName} ${serviceNumber}</span><span>${time}</span>`;
//       callHistory.prepend(li);
//     }
//   });
// });


//   // --- Clear Call History ---
//   const clearButtons = document.querySelectorAll("button[aria-label='Clear call history']");
// clearButtons.forEach(clearBtn => {
//   clearBtn.addEventListener("click", () => {
//     const historyCard = clearBtn.closest(".card");
//     const callHistoryList = historyCard ? historyCard.querySelector("ul") : null;

//     if (!callHistoryList) {
//       console.warn("Call history <ul> not found.");
//       alert("Couldn't find the call history list.");
//       return;
//     }

//     callHistoryList.replaceChildren();
//     alert("Call history cleared!");
//   });
// });

// });
document.addEventListener("DOMContentLoaded", () => {
  // --- Global Favorites Counter ---
  const counterEl = document.getElementById("counter");
  let favouritesCount = 0;

  // --- Global Coins ---
  let coins = 100;
  const coinEl = document.getElementById("coinCount");
  if (coinEl) coinEl.textContent = coins;

  // --- Global Call History ---
  const callHistory = document.querySelector("ul.global-call-history"); // Use a unique class/id for global history

  // --- Favorites (hearts) ---
  const hearts = document.querySelectorAll(".fa-heart");
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      if (heart.classList.contains("fa-solid")) {
        favouritesCount--;
      } else {
        favouritesCount++;
      }
      if (counterEl) counterEl.textContent = favouritesCount;

      heart.classList.toggle("fa-regular");
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("text-red-500");
    });
  });

  // --- Handle each Card ---
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const copyBtn = card.querySelector(".button-copy");
    const callBtn = card.querySelector("button.bg-green-500");
    const clearBtn = card.querySelector("button[aria-label='Clear call history']");

    const serviceName = card.querySelector("h3")?.textContent.trim();
    const serviceNumber = card.querySelector("p.font-bold")?.textContent.trim();

    // --- Copy Button ---
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (!serviceNumber || !serviceName) return;

        navigator.clipboard.writeText(serviceNumber).then(() => {
          favouritesCount++;
          if (counterEl) counterEl.textContent = favouritesCount;
          alert(`Copied ${serviceName} number: ${serviceNumber}`);
        }).catch(() => {
          alert("Failed to copy number. Please try again.");
        });
      });
    }

    // --- Call Button ---
    if (callBtn) {
      callBtn.addEventListener("click", () => {
        if (!serviceNumber || !serviceName) return;

        if (coins < 20) {
          alert("Not enough coins to make a call. Please earn more coins.");
          return;
        }

        coins -= 20;
        if (coinEl) coinEl.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNumber}...`);

        if (callHistory) {
          const li = document.createElement("li");
          const time = new Date().toLocaleTimeString();
          li.innerHTML = `<span>${serviceName} ${serviceNumber}</span>&nbsp;&nbsp;<span>${time}</span>`;
          callHistory.prepend(li);
        }
      });
    }

    // --- Clear Call History ---
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (!callHistory) {
          console.warn("Global call history <ul> not found.");
          alert("Couldn't find the call history list.");
          return;
        }

        callHistory.replaceChildren();
        alert("Call history cleared!");
      });
    }
  });
});
