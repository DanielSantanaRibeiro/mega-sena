document.addEventListener("DOMContentLoaded", () => {
    const numbersGrid = document.getElementById("numbers-grid");
    const selectionInfo = document.getElementById("selection-info");
    const submitBtn = document.getElementById("submit-btn");
    
    const maxSelection = 11;
    let selectedNumbers = [];
  
    // Cria as dezenas de 1 a 60
    for (let i = 1; i <= 60; i++) {
      const number = document.createElement("div");
      number.classList.add("number");
      number.textContent = i;
      number.addEventListener("click", () => toggleNumberSelection(i, number));
      numbersGrid.appendChild(number);
    }
  
    function toggleNumberSelection(num, element) {
      if (selectedNumbers.includes(num)) {
        // Remove a seleção
        selectedNumbers = selectedNumbers.filter(n => n !== num);
        element.classList.remove("selected");
      } else {
        // Adiciona a seleção se não tiver atingido o limite
        if (selectedNumbers.length < maxSelection) {
          selectedNumbers.push(num);
          element.classList.add("selected");
        }
      }
  
      updateUI();
    }
  
    function updateUI() {
      selectionInfo.textContent = `Dezenas selecionadas: ${selectedNumbers.join(", ")}`;
      submitBtn.disabled = selectedNumbers.length === 0;
    }
  
    submitBtn.addEventListener("click", () => {
      alert(`Dezenas confirmadas: ${selectedNumbers.join(", ")}`);
    });
  
    updateUI();
  });
  