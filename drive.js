//open  modal
function openModal(message) {
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");

    modalText.textContent = message;
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when click outside
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Driver constructor function
function Driver(name, age, workExperience) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.driveMyCar = function () {
        openModal(this.name  + " is driving the car, " + this.age + " years old, " + this.workExperience + " years experience in racing.");
    };
    this.carWash = function () {
        openModal(this.name  + " is washing the car, " + this.age + " years old, " + this.workExperience + " years experience in Linis Kotse Co.");
    };
}

// Driver instances
const Richard = new Driver("Richard", 25, 3);
const Eli = new Driver("Eli", 30, 5);

// Buttons
const driveButton = document.getElementById("driveButton");
const washButton = document.getElementById("washButton");

// Event listeners
driveButton.addEventListener("click", () => {
    Richard.driveMyCar();
});

washButton.addEventListener("click", () => {
    Eli.carWash();
});
