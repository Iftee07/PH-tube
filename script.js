loadCat = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCat(data.categories);
    });
};

displayCat = (cats) => {
  const container = document.getElementById("button_container");
  for (cat of cats) {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerHTML = `${cat.category}`;
    container.append(button);
  }
};

loadVid = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      displayVid(data.videos);
    });
};

displayVid = (videos) => {
  const container = document.getElementById("vid_container");
  console.log(videos);
  videos.forEach((element) => {
    let div = document.createElement("div");
    // div.innerHTML = use card
    container.append(div);
  });
};

loadVid();
loadCat();
