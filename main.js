let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let gradient = document.getElementById('gradient');


let setGradient = () => {
    // =================================================================================

    //TO DO: 
    // 136. Background Generator Files
    // let gr = gradient.style.background; // WHY IT DOES NOT WORKING WITH THE VARIABLE?

    // =================================================================================

    gradient.style.background = 'linear-gradient(to right, ' 
    + color1.value 
    + ', '
    + color2.value
    + ')'; 

    css.textContent = gradient.style.background + ';';

};

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

// ANOTHER WAY OF DOING THIS WOULD BE BY ADDING A ONINPUT METHOT WITHIN THE HTML TAGS AND SET THE SETGRADIENT FUNCTION THERE INSTEAD OF ADDINT AND EVENT LISTENER. HOWEVER, IT IS NOT RECOMMENDED. ONLICK/ONINPUT AND ETC EVENTS ARE RECOMMENDED ALONGSIDE REACT.


