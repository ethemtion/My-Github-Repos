let ppUrl = "https://api.github.com/users/ethemtion";
let url = "https://api.github.com/users/ethemtion/repos";

$(document).ready(function () {
  getPP();
  getData();
});

async function getPP() {
  const response = await fetch(ppUrl);
  const data = await response.json();
  let avatar = data.avatar_url;
  $("#avatar").attr("src", avatar);
}

let repoName, repoUrl, repoLastUpdated, repoDesc;
let day, month, year;
let counter = -1;
async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  data.reverse().forEach((repo) => {
    repoName = repo.name;
    repoUrl = repo.html_url;
    repoLastUpdated = repo.updated_at;
    const date = new Date(repoLastUpdated);
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    repoDesc = repo.description;
    makeTab();
    makeTabContent();
  });

  //   TEST
  $("#profile-tab").html(repoName);
  $("#profile-tab-pane").html(`
  <div class="tabContent text-center">
                <p class="pt-3 text-end">Last updated: ${day}.${
    month + 1
  }.${year}</p>
                <a href="${repoUrl}" class="btn btn-primary m-2 w-25 text-wrap mx-auto" target="_blank">${repoName} Github </a>
                  <p class="pt-3">
                    ${repoDesc}
                  </p>

                </div>
                `);
}

function makeTab() {
  let html = `<li class="nav-item`;
  if (++counter == 0) html += ` ms-5`;
  html += `" role="presentation"><button
  class="nav-link" id="${repoName}-tab" data-bs-toggle="tab" data-bs-target="#${repoName}-tab-pane" type="button" role="tab" aria-controls="${repoName}-tab-pane" aria-selected="false">${repoName}</button></li>`;

  $(".nav").append(html);
}

function makeTabContent() {
  let html = `<div class="tab-pane fade" id="${repoName}-tab-pane" role="tabpanel" aria-labelledby="${repoName}-tab" tabindex="0">`;
  html += `<div class="tabContent text-center">
  <p class="pt-3 text-end">Last updated: ${day}.${month + 1}.${year}</p>
  <a href="${repoUrl}" class="btn btn-primary m-2 w-25 text-wrap mx-auto" target="_blank">${repoName} Github </a>
    <p class="pt-3">
      ${repoDesc}
    </p>
  </div>
  `;

  $(".tab-content").append(html)
}
