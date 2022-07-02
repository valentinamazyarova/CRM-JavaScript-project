import Model from "../model.js";
import ViewTable from "./table.view.js";

let model = new Model();
let view = new ViewTable(model.requests);


view.elements.tableApplications.addEventListener("click", updateRequest)

view.elements.statusBar.addEventListener("click", filterItems)

view.elements.leftStatusBar.addEventListener("click", filterItems)

view.elements.productSelect.addEventListener("change", filterItemsProduct)

view.renderNumNewApplication(model.requests)

function updateRequest(e){
    let currentId = view.getId(e.target);
    model.saveRequestToLS(currentId);
}

function filterItems(e){
    let filter = model.filterProduct("status", e.target.dataset.value);
    let filterRequests =  model.filterRequests(filter);
    view.filterRender(filterRequests)
    view.renderStatusBar(e.target)
}

function filterItemsProduct(){
    let filter = model.filterProduct('product', this.value);
    let filterRequests =  model.filterRequests(filter)
    view.filterRender(filterRequests)
}








   


