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
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="loadVidByCat(${cat.category_id})" id = "btn-${cat.category_id}" class="btn buttons">${cat.category}</button>
    `;
    container.append(div);
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
  container.innerHTML = ``;
  if (videos.length == 0) {
    console.log("zero");
    let sec = document.createElement("div");

    sec.innerHTML = `
    <h1 class="text-center text-3xl text-red-600">NO INFORMATION AVAILABLE</h1>
    `;
    container.append(sec);
    return;
  }
  container.innerHTML = ``;
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

loadVidByCat = (catId) => {
  console.log(catId);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${catId}`)
    .then((res) => res.json())
    .then((data) => {
      displayVid(data.category);
    });
};

loadVid();
loadCat();
