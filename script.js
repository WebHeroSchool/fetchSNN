let url = window.location.toString();

function userName (url) {
let getUrl = url.split('=');
let name = getUrl[1];
if (name == undefined) {
name ='NyurgS';
}
return name;
}

fetch (`https://api.github.com/users/${userName(url)}`)
.then (response => response.json())
.then (json => {
  console.log (json.avatar_url);
  console.log (json.bio);
  console.log (json.name);

let img = new Image();
 img.src = json.avatar_url;
document.body.append(img);

let name = document.createElement('p');
if (json.name != null) {
  name.innerHTML = json.name;
} else {
  name.innerHTML ='Информация о пользователе не доступна';
};
document.body.append(name);
name.addEventListener("clik", () => window.location = `https://api.github.com/users/${userName(url)}`);

let bio = document.createElement ('p');
if (json.bio != null) {
  bio.innerHTML = json.bio;
}else{
  bio.innerHTML ='Информация о пользователе не доступна';
}
document.body.append(bio);

});