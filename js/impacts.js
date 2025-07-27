
let impactActivities = [
  {
    image: "../assets/images/impact_1.jpg",
    title:
      "Working where it counts: UNESCO leads local initiatives and develops tools to safeguard World Heritage",
  },
  {
    image: "../assets/images/impact_2.jpg",
    title:
      "Bangkok sets the pace for AI Ethics: Highlights from UNESCO’s 3rd Global Forum on the Ethics of AI",
  },
  {
    image: "../assets/images/adg-ed-thinkpiece-esd_0.jpg",
    title:
      "Record number of higher education students highlights global need for recognition of qualifications",
  },
  {
    image: "../assets/images/story_whc_mafagascar.JPG.webp",
    title:
      "Caribbean cuisine transcends borders thanks to UNESCO’s Transcultura programme",
  },
];

const impactsGrid = document.querySelector(".impact-activities");

impactActivities.forEach((item, index) => {
  const element = document.createElement("div");
  element.className = "item rounded-2xl shadow-2xl hover:cursor-pointer";
  impactsGrid.appendChild(element);

  const impactImage = document.createElement("img");
  impactImage.src = item.image;
  impactImage.alt = item.title;
  impactImage.className = "rounded-2xl w-full h-[300px] object-cover";

  const text = document.createElement("div");
  text.className = "text text-text-main";

  const impactTitle = document.createElement("p");
  impactTitle.className = "title m-5";
  impactTitle.textContent = item.title;

  const impactReadMore = document.createElement("a");
  impactReadMore.className = "read-more";
  impactReadMore.textContent = "Read more ...";
  impactReadMore.className = "float-right m-5";
  text.append(impactTitle, impactReadMore);

  element.append(impactImage, text);

  element.addEventListener("click", () => {
    const impactId = index;
    window.location.href = `pages/impact-details.html?id=${impactId}`;
  });
});
