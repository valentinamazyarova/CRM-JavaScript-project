export default class ViewForm {
    elements = {
        form: document.querySelector('#form'),
        name: document.querySelector('#name'),
        phone: document.querySelector('#phone'),
        email: document.querySelector('#email'),
        product: document.querySelector('#product')
    }

    getInputs() {
        return [this.elements.name.value, this.elements.phone.value, this.elements.email.value, this.elements.product.value,]
    }

    clearInputs() {
        this.elements.name.value = "",
        this.elements.phone.value = "",
        this.elements.email.value = ""
    }
}