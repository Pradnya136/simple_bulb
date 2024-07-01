const click_btn = document.getElementById("btn-wrap");
const main_img = document.getElementById("main-img");


let isOn = false;

const onClick_Fn = () => {

   main_img.src = isOn ? 'off.png': 'on.png';
   isOn = !isOn;
}


click_btn.addEventListener("click", onClick_Fn)


