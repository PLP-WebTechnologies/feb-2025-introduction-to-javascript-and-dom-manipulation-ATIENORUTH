const addDishButton = document.getElementById("addDishButton");
const menuList = document.getElementById("menu-list");

addDishButton.addEventListener("click", () => {
    const newDish = document.createElement("li");
    newDish.textContent = "Chef's Special: Herb-Crusted Lamb Chops";
    menuList.appendChild(newDish);
});