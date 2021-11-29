const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let orderLst = document.createElement("ol");
document.body.appendChild(orderLst);
users.forEach(user => {
  let fullName = user.firstName + " " + user.lastName;
  let newList = document.createElement("li");
  orderLst.appendChild(newList);
  newList.innerText = fullName;
  newList.dataset.id = user.id;
})
orderLst.style="list-style-type: none";