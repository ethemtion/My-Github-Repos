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

let repoName, repoUrl, repoLastUpdated;
let day,month,year;
async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  data.reverse().forEach((repo) => {
    repoName = repo.name;
    repoUrl = repo.html_url;
    repoLastUpdated = repo.updated_at;
    const date = new Date(repoLastUpdated);
    day = date.getDate()
    month = date.getMonth()
    year = date.getFullYear()
  });

 

  //   TEST
  $("#profile-tab").html(repoName);
  $("#profile-tab-pane").html(`
  <div class="tabContent text-center">
                <p class="pt-3 text-end">Last updated: ${day}.${month}.${year}</p>
                <a href="${repoUrl}" class="btn btn-primary m-2 w-25 text-wrap mx-auto" target="_blank">${repoName} Github </a>
                  <p class="pt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus aliquam, inventore sint suscipit officia odit
                    ad, non dolore voluptate facere repellat sapiente id,
                    accusantium illo ipsam praesentium distinctio et dolorem.
                  </p>

                </div>
                `);
}
