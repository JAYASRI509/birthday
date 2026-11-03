const CONFIG = {
  name: "Rajesh",
  age: "21",
  lead: "Imagine opening this on your birthday ♥",
  photos: [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg"
],
  messages: {}
};
$('lead').textContent=CONFIG.lead;
document.querySelectorAll('.photo').forEach((p,i)=>{
  const src=(CONFIG.photos||[])[i];
  if(src){p.style.backgroundImage='url("'+src+'")';p.classList.add('has');}
});
