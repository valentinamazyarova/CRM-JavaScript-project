import Model from "../model.js";
import ViewForm from "./form.view.js";
import Test from "./form.test-data.js"

let model = new Model();
let view = new ViewForm();
let test = new Test();

test.render();

view.elements.form.addEventListener("submit", dataAddToForm);

function dataAddToForm(event){
    event.preventDefault()
    model.addData(...(view.getInputs()))
    console.log(model.requests)
    view.clearInputs()
    test.render()
}

