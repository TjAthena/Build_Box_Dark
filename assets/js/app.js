document.addEventListener("DOMContentLoaded", function () {
    const formworkList = document.querySelectorAll(".formwork-list li");
    const formworkTitle = document.getElementById("formwork-title");
    const formworkImage = document.getElementById("formwork-image");
    const formworkSize = document.getElementById("formwork-size");
    const formworkPrice = document.getElementById("formwork-price");
    const formworkWeight = document.getElementById("formwork-weight");
    const formworkPurpose = document.getElementById("formwork-purpose");

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
            
            formworkList.forEach(li => li.classList.remove("active"));
            this.classList.add("active");

            formworkTitle.textContent = formworkData[formworkId].name;
            formworkImage.src = formworkData[formworkId].image;
            formworkSize.textContent = formworkData[formworkId].size;
            formworkPrice.textContent = formworkData[formworkId].price;
            formworkWeight.textContent = formworkData[formworkId].weight;
            formworkPurpose.textContent = formworkData[formworkId].purpose;
        });
    });
});
