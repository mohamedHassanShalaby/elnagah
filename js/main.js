let scrollTopButton = document.getElementById("scrolltopbutton");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 390) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});
scrollTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Start Sorting
var searchFilter = () => {
  let selectedColor = document.getElementById("filterByColor").value;
  console.log(selectedColor);
  const input = document.querySelector(".form-control");
  const cards = document.getElementsByClassName("col");
  console.log(cards[1]);
  let textBox = input.value.toLowerCase(); // Convert search term to lowercase

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-title");
    let secTitle = cards[i].querySelector(".card-sec-title");

    // Check for search term regardless of selectedColor
    let searchTermMatch =
      title.innerText.toLowerCase().indexOf(textBox) > -1 ||
      secTitle.innerText.toLowerCase().indexOf(textBox) > -1;

    if (
      // Show card if search term matches and color filter matches (including "الكل")
      searchTermMatch &&
      (selectedColor == "" || cards[i].classList.contains(selectedColor))
    ) {
      cards[i].classList.remove("d-none");
    } else {
      cards[i].classList.add("d-none");
    }
  }
};
// End Sorting

var cards = document.getElementsByClassName("col");
var currentPage = 1;
var cardsPerPage = 6; // Number of cards displayed per page

function updatePagination() {
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const pagination = document.querySelector(".pagination");

  // Show pagination only if there are more than 6 cards
  if (totalPages > 1) {
    pagination.classList.remove("d-none");
  } else {
    pagination.classList.add("d-none");
    return;
  }

  // Update page info
  const pageInfo = document.querySelector(".page-info");
  pageInfo.textContent = `صفحة ${currentPage} من ${totalPages}`;

  // Disable buttons if on first or last page
  const prevButton = document.querySelector(".chevron_left");
  const nextButton = document.querySelector(".chevron_right");
  const doubleLeftButton = document.querySelector(".chevron_left_double");
  const doubleRightButton = document.querySelector(".chevron_right_double");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  doubleLeftButton.disabled = currentPage === 1;
  doubleRightButton.disabled = currentPage === totalPages;
}

function displayCards() {
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, cards.length);

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("d-none"); // Hide all cards initially
  }

  for (let i = startIndex; i < endIndex; i++) {
    cards[i].classList.remove("d-none"); // Show cards for current page
  }
}

function searchFilter() {
  // ... existing search logic ...

  updatePagination();
  displayCards();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayCards();
    updatePagination();
  }
}

function nextPage() {
  if (currentPage < Math.ceil(cards.length / cardsPerPage)) {
    currentPage++;
    displayCards();
    updatePagination();
  }
}

function goToLastPage() {
  currentPage = Math.ceil(cards.length / cardsPerPage);
  displayCards();
  updatePagination();
}

// Call updatePagination on page load to handle initial display
updatePagination();
displayCards();
