// Get references to the necessary elements
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to show saved notes from local storage
function showNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    savedNotes.forEach(noteText => {
        createNoteElement(noteText);
    });
}

// Function to create a new note element
function createNoteElement(noteText) {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = noteText;

    img.src = "images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);
}

// Function to update local storage with current notes
function updateStorage() {
    const notes = document.querySelectorAll(".input-box");
    const notesArray = [];

    notes.forEach(note => {
        notesArray.push(note.textContent);
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
}

// Event listener to create a new note when the button is clicked
createBtn.addEventListener("click", () => {
    createNoteElement("");
    updateStorage();
});

// Event listener for deleting a note
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.className === "input-box") {
        e.target.addEventListener("input", updateStorage);
    }
});

// Prevent Enter key from creating a new line in content-editable elements
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Show saved notes when the page loads
showNotes();
