console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";


const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchAndDisplayDogImages() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImagesContainer = document.getElementById("dog-image-container");

      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        // img.style.width = "200px";
        // img.style.height = "200px";
        dogImagesContainer.appendChild(img);
      });
    });
}

function fetchAndDisplayDogBreeds() {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogBreedsList = document.getElementById("dog-breeds");

      for (const breed in data.message) {
        const breedItem = document.createElement("li");
        breedItem.innerText = breed;
        dogBreedsList.appendChild(breedItem);

        breedItem.addEventListener("click", changeFontColor);
      }
    });
}


function changeFontColor(event) {
 // event.target.style.color = "blue"; 
    if (event.target.style.color === "blue") {
      event.target.style.color = "initial"; 
    } else {
      event.target.style.color = "blue";
    }
}

function filterBreedsByLetter(letter) {
  const breedItems = document.querySelectorAll("#dog-breeds li");

  breedItems.forEach((item) => {
    if (item.innerText.startsWith(letter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

window.addEventListener("load", () => {
  fetchAndDisplayDogImages();
  fetchAndDisplayDogBreeds();

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", (event) => {
    filterBreedsByLetter(event.target.value);
  });
});
