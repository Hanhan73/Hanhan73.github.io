// Fetch and populate the "Negara" dropdown
fetch("js/countries.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch countries.json");
    }
    return response.json();
  })
  .then((countries) => {
    const negaraSelect = document.getElementById("negara");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.toLowerCase().replace(/\s+/g, "_");
      option.textContent = country;
      negaraSelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error loading countries:", error));