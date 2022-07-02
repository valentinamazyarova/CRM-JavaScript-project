export default class ViewEdit {
    elements = {
        number: document.querySelector('#number'),
        date: document.querySelector('#date'),
        product: document.querySelector('#product'),
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        status: document.querySelector('#status'),
        form: document.querySelector('#form'),
        btnSave: document.querySelector('#btnSave')
    }

    addRequestInInputs(objRequest){
        this.elements.number.textContent = objRequest.id;
        this.elements.date.textContent = objRequest.date;
        this.elements.product.value = objRequest.product;
        this.elements.name.value = objRequest.name;
        this.elements.email.value = objRequest.email;
        this.elements.phone.value = objRequest.phone;
        this.elements.status.value = objRequest.status;
    }

    getInputs() {
        const updateRequest = {
            name: this.elements.name.value,
            phone: this.elements.phone.value,
            email: this.elements.email.value,
            product: this.elements.product.value,
            status: this.elements.status.value
        }
        return updateRequest;
    }

}