import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelector('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElem = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem > 1) {
                    state[prop] = 1;
                } else {
                    state[prop] = item.value;
                }
                console.log(state);
            });
        });
    }

    bindActionToElem('click', windowForm, 'form');   
    bindActionToElem('input', windowHeight, 'heigh');   
    bindActionToElem('input', windowWidth, 'widht');   
}

export default changeModalState;