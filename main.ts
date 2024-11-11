


const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event?.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
const fathername = (document.getElementById("father-name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phonenumber = (document.getElementById("phone number") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const experience = (document.getElementById("experience") as HTMLInputElement).value;
const skills = (document.getElementById("skills") as HTMLInputElement).value;



  const dynamicResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true" >${name}</span></p>
    <p><b>Father Name:</b><span contenteditable="true" >${fathername}</span></p>
    <p><b>Email:</b><span contenteditable="true" >${email}</span></p>
    <p><b>Phone Number:</b><span contenteditable="true" >${phonenumber}</span></p>

    <h3>Education</h3>
    <p contenteditable="true" >${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true" >${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true" >${skills}</p>
    `;

    if(resumedisplay){
        resumedisplay.innerHTML = dynamicResume;
    }else{
        console.error('This resume display element is missing.');
    }
});
