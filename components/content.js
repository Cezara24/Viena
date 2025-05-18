async function loadContent(pageKey = "home") {
  const response = await fetch("../data.json");
  const data = await response.json();

  const pageData = data[pageKey];
  if (!pageData) return;

  const img = document.getElementById("dynamic-img");
  const title = document.getElementById("dynamic-title");
  const text = document.getElementById("dynamic-text");

  const imgHtml = `<img class="position-absolute w-100 h-100" src="${pageData.image}" style="object-fit: cover" />`;
  const titleHtml = `${pageData.title}`;
  const textHtml = `${pageData.paragraphs.map((p) => `<p class="mb-3">${p}</p>`).join("")}`;

  img.innerHTML = imgHtml;
  title.innerHTML = titleHtml;
  text.innerHTML = textHtml;

  const currentUrl = window.location.href;
  if (
    currentUrl !== "http://127.0.0.1:5500/" &&
    currentUrl !== "http://127.0.0.1:5500/index.html"
  ) {
    const container = document.querySelector(".d-flex.flex-column-reverse");
    if (container && !container.classList.contains("mt-5")) {
      container.classList.add("mt-5");
    }
  }
}
