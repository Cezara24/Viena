async function includeHTML(id, file) {
  const res = await fetch(`components/${file}`);
  if (!res.ok) {
    console.error(`Eroare la încărcarea fișierului ${file}: ${res.status}`);
    return;
  }
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

includeHTML("form-search", "form-search.html");
