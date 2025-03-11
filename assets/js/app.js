document.addEventListener("DOMContentLoaded", function () {
    const formworkList = document.querySelectorAll(".formwork-list-fmw li");
    const formworkTitle = document.getElementById("formwork-title-fmw");
    const formworkImage = document.getElementById("formwork-image-fmw");
    const formworkSize = document.getElementById("formwork-size-fmw");
    const formworkPrice = document.getElementById("formwork-price-fmw");
    const formworkWeight = document.getElementById("formwork-weight-fmw");
    const formworkPurpose = document.getElementById("formwork-purpose-fmw");

    const formworkData = {
        1: { name: "Formwork 1", size: "Large", price: "$100", weight: "20kg", purpose: "Construction", image: "placeholder.jpg" },
        2: { name: "Formwork 2", size: "Medium", price: "$80", weight: "15kg", purpose: "Scaffolding", image: "placeholder.jpg" },
        3: { name: "Formwork 3", size: "Small", price: "$60", weight: "10kg", purpose: "Temporary Structures", image: "placeholder.jpg" },
        4: { name: "Formwork 4", size: "X-Large", price: "$120", weight: "25kg", purpose: "Heavy Duty", image: "placeholder.jpg" },
        5: { name: "Formwork 5", size: "Custom", price: "$150", weight: "30kg", purpose: "Special Projects", image: "placeholder.jpg" },
        6: { name: "Formwork 6", size: "Adjustable", price: "$90", weight: "18kg", purpose: "Versatile Usage", image: "placeholder.jpg" },
    };

    formworkList.forEach(item => {
        item.addEventListener("click", function () {
            const formworkId = this.getAttribute("data-formwork");
            
            formworkList.forEach(li => li.classList.remove("active-fmw"));
            this.classList.add("active-fmw");

            formworkTitle.textContent = formworkData[formworkId].name;
            formworkImage.src = formworkData[formworkId].image;
            formworkSize.textContent = formworkData[formworkId].size;
            formworkPrice.textContent = formworkData[formworkId].price;
            formworkWeight.textContent = formworkData[formworkId].weight;
            formworkPurpose.textContent = formworkData[formworkId].purpose;
        });
    });
});
