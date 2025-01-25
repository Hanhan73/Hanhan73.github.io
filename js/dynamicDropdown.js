// Select dropdown elements
const provinsiSelect = document.getElementById("provinsi");
const kabupatenSelect = document.getElementById("kabupaten");

// Populate Provinsi options
Object.keys(kabupatenkota).forEach((provinsi) => {
  const option = document.createElement("option");
  option.value = provinsi;
  option.textContent = provinsi;
  provinsiSelect.appendChild(option);
});

// Function to update Kabupaten/Kota options
function updateKabupatenOptions() {
  const selectedProvinsi = provinsiSelect.value;

  // Clear existing options
  kabupatenSelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';

  if (selectedProvinsi && kabupatenkota[selectedProvinsi]) {
    kabupatenkota[selectedProvinsi].forEach((kabupaten) => {
      const option = document.createElement("option");
      option.value = kabupaten.toLowerCase().replace(/\s+/g, "_");
      option.textContent = kabupaten;
      kabupatenSelect.appendChild(option);
    });
  }
}

// Event listener for Provinsi dropdown
provinsiSelect.addEventListener("change", updateKabupatenOptions);