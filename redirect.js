let domains = JSON.parse(localStorage.getItem("domains")) || [];

function addDomain() {
  const input = document.getElementById("domainInput");
  const domain = input.value.trim();

  if (domain) {
    domains.push({ name: domain, clicks: 0 });
    localStorage.setItem("domains", JSON.stringify(domains));
    input.value = "";
    renderDomains();
  }
}

function renderDomains() {
  const list = document.getElementById("domainList");
  list.innerHTML = "";

  domains.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "domainItem";

    div.innerHTML = `
      <span>${item.name}</span>
      <button onclick="redirect(${index})">Test Redirect</button>
      <span>Clicks: ${item.clicks}</span>
    `;

    list.appendChild(div);
  });
}

function redirect(index) {
  domains[index].clicks += 1;
  localStorage.setItem("domains", JSON.stringify(domains));
  window.location.href = "https://" + domains[index].name;
}

renderDomains();
