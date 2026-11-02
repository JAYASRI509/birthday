const CONFIG = {
  name: "Rajesh",
  age: "21",
  lead: "Imagine opening this on your birthday ♥",
  photos: [
    "photos/1.jpeg",
    "photos/2.jpeg",
    "photos/3.jpeg",
    "photos/4.jpeg",
    "photos/5.jpeg",
    "photos/6.jpeg",
    "photos/7.jpeg",
    "photos/8.jpeg",
    "photos/9.jpeg"
  ],
  messages: {}
};
$('lead').textContent=CONFIG.lead;
document.querySelectorAll('.photo').forEach((p,i)=>{
  const src=(CONFIG.photos||[])[i];
  if(src){p.style.backgroundImage='url("'+src+'")';p.classList.add('has');}
});