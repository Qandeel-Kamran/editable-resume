var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("father-name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var dynamicResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\" >".concat(name, "</span></p>\n    <p><b>Father Name:</b><span contenteditable=\"true\" >").concat(fathername, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\" >").concat(email, "</span></p>\n    <p><b>Phone Number:</b><span contenteditable=\"true\" >").concat(phonenumber, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\" >").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\" >").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\" >").concat(skills, "</p>\n    ");
    if (resumedisplay) {
        resumedisplay.innerHTML = dynamicResume;
    }
    else {
        console.error('This resume display element is missing.');
    }
});
