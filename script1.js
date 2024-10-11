const nameValue = "Shivam Dhamejani";
const emailValue = "dhamejanishivam@gmail.com";
const numberValue = "9644971120";
const resumeLinkValue = "https://www.shivamdhamejani.in/assets/other/myresume.pdf"


const img1Link = 'https://www.shivamdhamejani.in/bg.png';
const img2Link = 'https://media.istockphoto.com/id/2165503532/photo/frame-of-leaves-green-ivy-leaves-mockup-on-a-transparent-background-a-hanging-plant-frame.jpg?s=1024x1024&w=is&k=20&c=E1Dpw8GPUNMxqjQhCu8C2z3oGHynNf9-OQVIxmotF3w=';


let aboutmevalue = "This Heart Disease Prediction System utilizes a logistic regression model trained on historical medical data to predict the risk of heart disease based on user inputs such as age and cholesterol levels. It features a machine learning model accessible via a Python script (main.py) for direct predictions, or a web interface (requiring MySQL) for user-friendly interactions. While the repository doesn't include a MySQL database or sample data, the model can be used independently without the web setup. The project structure includes the model folder, HTML templates, and assets for styling. It requires Python 3.x and libraries like pandas, scikit-learn, and Flask";


const instagramLink = "https://instagram.com";
const githubLink = "https://github.com";
const linkedinLink = "https://www.linkedin.com";
const youtubeLink = "https://www.youtube.com";





let names = document.querySelectorAll(".nameHere")
names.forEach(i => {
    i.innerHTML = nameValue
})

let emails = document.querySelectorAll(".emailHere")
emails.forEach(i => {
    console.log(i)
    i.innerHTML = emailValue
})

let numbers = document.querySelectorAll(".numberHere")
numbers.forEach(i => {
    i.innerHTML = numberValue
})




const aboutme = document.getElementById("aboutmeHere");
aboutme.innerHTML = `${aboutmevalue} <br>
                        <br>
                        <a onclick="resumeDownload()" style="--i:11" class="abtbtn-box" target="_blank">Download Resume</a>`




function resumeDownload(){
    window.open(resumeLinkValue,"_blank");
}


function openInsta(){
    window.open(instagramLink,"_blank");
}
function openGithub(){
    window.open(githubLink,"_blank");
}
function openLinkedin(){
    window.open(linkedinLink,"_blank");
}
function openYoutube(){
    window.open(youtubeLink,"_blank");
}



// Images

// Image 1
// Select the div where you want to insert the image
const divElement1 = document.querySelector('#img1Here');

// Create a new img element
const imgElement1 = document.createElement('img');

// Set the src attribute and class for the image
imgElement1.src = img1Link;
imgElement1.className = 'responsive';

// Append the img element to the div
divElement1.appendChild(imgElement1);



// Image 1
// Select the div where you want to insert the image
const divElement2 = document.querySelector('#img2Here');

// Create a new img element
const imgElement2 = document.createElement('img');

// Set the src attribute and class for the image
imgElement2.src = img2Link;
imgElement2.className = 'responsive';

// Append the img element to the div
divElement2.appendChild(imgElement2);

