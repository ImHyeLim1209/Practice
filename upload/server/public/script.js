console.log("??");

let img;
const input = document.querySelector(".register-file");
const btn = document.querySelector(".submit-btn");

function fileChange(event) {
  alert("change!");
  console.log(event.target.files);
  img = event.target.files[0];
}

function onClick() {
  if (!img) {
    alert("select one picture");
    return;
  }
  const formData = new FormData();
  formData.append('file', img);
  formData.append("filename", img.name);
  formData.append("title", "ihl");
  console.log(formData);
    //const res = await axios.post("http://localhost:4000/api/upload", formData);
    //console.log(res);
}

input.addEventListener("change", fileChange);
btn.addEventListener("click", onClick);