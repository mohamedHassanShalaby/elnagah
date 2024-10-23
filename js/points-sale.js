const libraryData = [
  {
    name: "مكتبة الأسراء",
    address: "عين الباشا",
    number: "06780099888",
    location: "موقع المكتبة",
  },
  {
    name: "مكتبة الأسراء",
    address: "عين الباشا",
    number: "06780099888",
    location: "موقع المكتبة",
  },
  {
    name: "مكتبة الأسراء",
    address: "عين الباشا",
    number: "06780099888",
    location: "موقع المكتبة",
  },
  {
    name: "مكتبة الأسراء",
    address: "عين الباشا",
    number: "06780099888",
    location: "موقع المكتبة",
  },
];

const tableBodies = document.querySelectorAll(".tableBody");
const searchInputs = document.querySelectorAll(".searchInput");

function displayLibraryData(data, tableBody) {
  tableBody.innerHTML = "";
  data.forEach((library) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${library.name}</td>
      <td>${library.address}</td>
      <td>${library.number}</td>
      <td>${library.location}</td>
    `;
    tableBody.appendChild(row);
  });
}

tableBodies.forEach((tableBody, index) => {
  displayLibraryData(libraryData, tableBody);
  searchInputs[index].addEventListener("input", () => {
    const searchText = searchInputs[index].value.trim().toLowerCase();
    const filteredData = libraryData.filter((library) =>
      library.name.toLowerCase().includes(searchText)
    );
    displayLibraryData(filteredData, tableBody);
  });
});
