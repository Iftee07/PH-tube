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
    div.innerHTML = `<div class="card card-compact bg-base-100 w-96 mx-auto">
  <figure>
    <img
      src="${element.thumbnail}" class="object-cover h-[250px]" 
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">${element.title}</h2>
    <div class="flex"><p>${element.authors[0].profile_name} </p> ${
      element.authors[0].verified
        ? `<img
          width="20"
          height="20"
          src="https://img.icons8.com/color/48/verified-badge.png"
          alt="verified-badge"
        />`
        : ""
    }</div>
    
    <div class="card-actions justify-end">
      <button class="btn btn-error">See More</button>
    </div>
  </div>
</div>`;
    container.append(div);
  });
};

loadVid();
loadCat();
