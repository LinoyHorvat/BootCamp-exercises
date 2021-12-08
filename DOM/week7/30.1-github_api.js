const inputTxt = document.querySelector("input");
const searchBtn = document.querySelector(".search");
const container = document.querySelector(".container");
const arrOfUsers = [];

searchBtn.addEventListener("click",()=>{
  getUser();
});

inputTxt.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    getUser();
  }
});

async function getUser() {
  console.log(inputTxt.value);
  if (inputTxt.value === "") throw new Error("Please enter user name");
  else if (arrOfUsers.includes(inputTxt.value)) throw new Error("User already exists");
  else {
    try {
      const res = await fetch(`https://api.github.com/users/${inputTxt.value}`);
      if (res.status === 200) {
        const data = await res.json();
        arrOfUsers.push(inputTxt.value);
        printUser(data);
        inputTxt.value = "";
      } 
      else {
        const errData = await res.json();
        console.log(errData);
        throw new Error (res.status);
      }
    } catch (err) {
      console.log("IN CATCH!", err);
    }
  }
}

function printUser(user) {
  let userCard = document.createElement("div");
  userCard.classList = "card";
  let href = user.html_url;
  userCard.setAttribute("href", href);
  container.appendChild(userCard);
  userCard.src = href;
  userCard.style.cursor = "pointer";
  printImg(user.avatar_url, href, userCard);
  printUserName(user.login, href, userCard);
  printUserNumberOfPublicRepo(user.public_repos, href, userCard);
}
function printImg(userImgSrc, href, userCard) {
  let aLink = document.createElement("a");
  userCard.appendChild(aLink);
  aLink.href = href;
  aLink.target = "_blank";
  let userImg = document.createElement("img");
  userImg.src = userImgSrc;
  userImg.setAttribute("height", "150");
  userImg.setAttribute("width", "150");
  aLink.appendChild(userImg);
}
function printUserName(name, href, userCard) {
  let aLink = document.createElement("a");
  userCard.appendChild(aLink);
  aLink.href = href;
  aLink.target = "_blank";
  let userName = document.createElement("h1");
  aLink.appendChild(userName);
  userName.innerHTML = name;
}
function printUserNumberOfPublicRepo(repo, href, userCard) {
  let aLink = document.createElement("a");
  userCard.appendChild(aLink);
  aLink.href = href;
  aLink.target = "_blank";
  let userRepo = document.createElement("h2");
  aLink.appendChild(userRepo);
  userRepo.innerHTML = repo;
}
