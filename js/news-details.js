let news = [
  {
    image: "../assets/images/Wadi_Rum_Jordan_shutterstock_2304807863_web.jpg",
    title: "From Mars to Jordan: Pioneers illuminate geodiversity",
    date: "3 October 2023",
    content:
      "Yes, it was a wonderful honour. It's called Priscillagrewite-Y and it was discovered in Jordan, near the city of Amman. It's a garnet. Garnets are important minerals, not only for gemstones, but also because they can tell us things about the origin of rocks. The only problem is... I can't wear my garnet! It’s too tiny to be seen by the naked eye. You have to have very special equipment",
  },
  {
    image: "../assets/images/HII Event HD Photo_UNESCO.jpeg",
    title:
      "UNESCO positioned as global leader in Transforming Education at SDG Action Weekend’s High-Impact Initiative Event",
    date: "5 October 2023",
    content:
      "Dipu Moni, Bangladesh's Minister of Education, revisited the nation's 2041 vision for a smarter Bangladesh and shared how Bangladesh became successful in the aspects of foundational learning and digital learning. She recounted their experience in undergoing a National Curriculum Transformation that leans towards a more experiential learning approach for teaching. Bangladesh envisioned to make their students independent learners and, in the process, developed a masterplan for blended education and skills, and veered away from the restrictions of face-to-face classes. Another significant part of the National Curriculum Transformation is the country’s focus on the professional development for teachers and making them facilitators of lifelong learning rather than being the “sage from the stage.” The integration of artificial intelligence (AI)-assisted learning for Bangladeshi learners is another triumph for the country, with the new curricula emphasizing on digital literacy as a tool towards evidence-driven decision making. Minister Moni concluded her speech by reaffirming the government's commitment to allocating appropriate resources for these initiatives. ",
  },
  {
    image: "../assets/images/shutterstock_2285024411.jpg",
    title:
      "Vision 2030: Working Group 1 takes collaborative effort to assess and mitigate marine pollution through comprehensive roadmap",
    date: "9 October 2023",
    content:
      "As part of the Vision 2030 process launched by the UN Decade of Ocean Science for Sustainable Development 2021-2030 (‘Ocean Decade’), Working Group 1 leads the effort in tackling Ocean Decade Challenge 1. It is led by two expert co-chairs, Dr Vanessa Hatje, Professor in chemical oceanography at the Federal University of Bahia, Brazil, and Dr Rosemary Rayfuse, Emerita Scientia Professor in International Law at UNSW Sydney, Australia. Both Dr Rayfuse and Dr Hatje are members of GESAMP, the Joint Group of Experts on the Scientific Aspects of Marine Environmental Protection, which is co-sponsored by UNESCO’s Intergovernmental Oceanographic Commission, the coordinating agency of the Ocean Decade.",
  },
];


const newsTitle = document.querySelector(".title");
const newsContent = document.querySelector(".news-details");
const newsDate = document.querySelector(".date")
const newsImage = document.querySelector(".hero")
const goBackLink = document.querySelector(".back")

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const newsId = params.get("id");

  if (newsId !== null && news[newsId]) {
    const selectedNews = news[newsId];
    newsTitle.textContent = selectedNews.title
    newsDate.textContent = selectedNews.date
    newsImage.style.backgroundImage = `url(${selectedNews.image})`;
    newsImage.style.backgroundRepeat = "no-repeat";
    newsImage.style.backgroundSize = "cover"; 
    newsImage.style.backgroundPosition = "center";
    newsContent.textContent = selectedNews.content
    
  } else {
    window.location.href = "index.html";
  }
});

goBackLink.addEventListener("click", (e) => {
  e.preventDefault(); 
  window.history.back();
});
