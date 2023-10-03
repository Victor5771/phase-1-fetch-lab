function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
      return data; // Return the JSON data for testing purposes
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
