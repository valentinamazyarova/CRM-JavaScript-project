export default class Model {
    constructor() {
        this.requests = [];
        this.loadFromLocalStorage(); 

    }

    addData(name, phone, email, product) {

        let year = new Date().getFullYear()
        let day = new Date().getDate()
        let month = new Date().getMonth()

        let currentDate;

        if (day < 10) {
            currentDate = `0${day}.${month}.${year}`
        } else if (month < 10) {
            currentDate = `${day}.0${month}.${year}`
        } else if (day >= 10 && month >= 10) {
            currentDate = `${day}.${month}.${year}`
        }

        let id = 1;

        if(this.requests.length > 0){
            id = this.requests[this.requests.length - 1]["id"] + 1
        }

        const dataFromForm = {
            id: id,
            date: currentDate,
            status: "new",
            name: name,
            phone: phone,
            email: email,
            product: product
        }

        this.requests.push(dataFromForm);
        this.saveToLocalStorage();

        return dataFromForm
    }

    filter = {
        product: "all",
        status: "all"
    }

    filterProduct(prop, value){
        this.filter[prop] = value;
        return this.filter
    }

    filterRequests(filter){


        let filterRequests;

        if(filter.product !== "all"){
            filterRequests = this.requests.filter(request => filter.product == request.product);
        } else {
            filterRequests = [...this.requests]
        }

        if(filter.status !== "all"){
            filterRequests = filterRequests.filter(request => filter.status == request.status)
        }
        localStorage.setItem("filter", JSON.stringify(filterRequests))
        return filterRequests    
    }

    saveToLocalStorage() {
        localStorage.setItem("dataRequest", JSON.stringify(this.requests))
    }

    loadFromLocalStorage() {
        let dataFromLS = localStorage.getItem("dataRequest");
        if (dataFromLS) {
            this.requests = JSON.parse(dataFromLS)
        } 
        
    }

    loadFilter() {
        if(localStorage.getItem("filter")){
            this.requests = JSON.parse(localStorage.getItem("filter"))
        }
    }

    saveRequestToLS(id){
        const curentItemObj = this.requests.find( item => id == item.id);
        localStorage.setItem("currentRequest", JSON.stringify(curentItemObj))
    }

    getRequestFromLS(){
        return JSON.parse(localStorage.getItem("currentRequest"))
    }

    saveUpdateRequest(request){
        const currentRequest = this.getRequestFromLS();
        const updateRequest = {
            id: currentRequest.id,
            date: currentRequest.date,
            status: request.status,
            name: request.name,
            phone: request.phone,
            email: request.email,
            product: request.product
        }

        const updateToRequest = this.requests.find(item => updateRequest.id == item.id)
        updateToRequest.name = updateRequest.name;
        updateToRequest.phone = updateRequest.phone;
        updateToRequest.email = updateRequest.email;
        updateToRequest.product = updateRequest.product;
        updateToRequest.status = updateRequest.status;

        this.saveToLocalStorage()

    }

}