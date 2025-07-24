let impactActivities = [
  {
    image: "../assets/images/impact_1.jpg",
    title:
      "Working where it counts: UNESCO leads local initiatives and develops tools to safeguard World Heritage",
    content:
      "The UNESCO designation plays a vital role in protecting and celebrating sites of exceptional cultural and natural value around the world. The recognition helps preserve these treasures for future generations, but also promotes sustainable tourism, education and international cooperation. In recent years, UNESCO has been part of a broader push to strengthen Africa’s presence on World Heritage List, and highlight the continent’s rich history, diverse cultures and unique ecosystems. Since 2018, 15 new sites across 8 countries in sub-Saharan Africa have joined the World Heritage List.",
  },
  {
    image: "../assets/images/impact_2.jpg",
    title:
      "Bangkok sets the pace for AI Ethics: Highlights from UNESCO’s 3rd Global Forum on the Ethics of AI",
    content:
      "With over 1,200 participants from 88 different countries, 35+ ministers, and 13 intergovernmental bodies, the 3rd Global Forum on the Ethics of AI relayed a clear message: ethics is not at odds with innovation, it is instrumental to its advancement. With 22 thematic sessions and 11 side-events, the Global Forum covered essential topics such as gender, environment, health, disaster risk reduction, disabilities, education, culture, neurotechnology, quantum computing, and judicial systems. With 33 representatives from Small Island Developing States (SIDS), the event amplified voices from Asia, Africa and Latin America for equitable, human-centered AI to help address national and regional challenges. ",
  },
  {
    image: "../assets/images/adg-ed-thinkpiece-esd_0.jpg",
    title:
      "Record number of higher education students highlights global need for recognition of qualifications",
    content:
      "Since entering into force in March 2023, the number of countries having ratified has nearly doubled, up to 38 States Parties. The Convention establishes shared principles to facilitate the recognition of qualifications, including partial studies and prior learning, while upholding academic integrity and quality. The Global Convention on Higher Education works closely with the five regional conventions which also strive to enhance cooperation between countries within regions. Between them, the 38 States Parties are home to some 2 million students studying outside their home countries, or 29% of the world’s estimated 6.9 million mobile students. When including the nearly 100 States Parties to all the Conventions – both global and regional – this rises to 5 million or 72% of the global total of internationally mobile students. In total, these States Parties include 131 million students, or 50% of global tertiary enrolment. ",
  },
  {
    image: "../assets/images/story_whc_mafagascar.JPG.webp",
    title:
      "Caribbean cuisine transcends borders thanks to UNESCO’s Transcultura programme",
    content:
      "Samson Faboye, from Nigeria, is one of these mentees. “The UNESCO mentorship Programme for African heritage professionals has given me deeper insights into the intrigues of nominating heritage sites,” he said.  Beyond new inscriptions, UNESCO programmes bring greater visibility and protection to these African sites. The purpose of heritage management is not just to keep it in isolation. We need to talk about it and tell it and educate people about it, declared Fatma Twahir, site manager of Fort Jesus, Mombasa, a UNESCO World Heritage property in Kenya. These efforts are yielding real results: in July 2025, two nominations from non-represented countries will be presented to the World Heritage Committee: the Réserve de Biosphère de l’Archipel des Bijagos in Guinea-Bissau, and the Gola Tiwai Complex in Sierra Leone. Seven more are expected to submit their first nominations by 2027.",
  },
];

const impactTitle = document.querySelector(".title");
const impactContent = document.querySelector(".news-details");
const impactDate = document.querySelector(".date");
const impactImage = document.querySelector(".hero");
const goBackLink = document.querySelector(".back");

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const impactId = params.get("id");

  if (impactId !== null && impactActivities[impactId]) {
    const selectedImpact = impactActivities[impactId];
    impactTitle.textContent = selectedImpact.title;
    impactDate.textContent = selectedImpact.date;
    impactImage.style.backgroundImage = `url(${selectedImpact.image})`;
    impactImage.style.backgroundRepeat = "no-repeat";
    impactImage.style.backgroundSize = "cover";
    impactImage.style.backgroundPosition = "center";
    impactContent.textContent = selectedImpact.content;
  }
});

goBackLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "impacts.html";
});
