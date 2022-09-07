
let ppUrl = "https://api.github.com/users/ethemtion"
let url = "https://api.github.com/users/ethemtion/repos"

$(document).ready(function () {
    console.log("burdayım")
    getPP()
    getData()

});

async function getPP() {
    const response = await fetch(ppUrl);
     const data = await response.json();
    let avatar = data.avatar_url;
    $("#avatar").attr("src",avatar)
  }

let repoName
async function getData(){
 
 const response = await fetch(url);
 const data = await response.json();
 console.log(data)

  data.forEach(repo => {
    repoName = repo.name
  });

//   TEST
  $("#profile-tab").html(repoName)
  $("profile-tab").html()
}
