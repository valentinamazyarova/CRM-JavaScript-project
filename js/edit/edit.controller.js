import Model from "../model.js";
import ViewEdit from "./edit.view.js";


let model = new Model();
let viewEdit = new ViewEdit();


viewEdit.addRequestInInputs(model.getRequestFromLS())


viewEdit.elements.form.addEventListener("submit", updateRequest);

function updateRequest(e) {
    e.preventDefault()
    let updateRequest = viewEdit.getInputs()
    model.saveUpdateRequest(updateRequest)
    window.location = "../../table.html"
}





