
class testItem {
    constructor(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product
    }
}


export default class Test {
    constructor() {
        this.data =  [
            new testItem("Алекс Гросс", "+123456789", "gross@mail.com", "Курс по верстке"),
            new testItem("Иван Иванов", "8913957688", "ivan@mail.ru", "Курс по JavaScript"),
            new testItem("Iren", "8913222288", "iren_iren@mail.ru", "Курс по VUE JS"),
            new testItem("Katren Pirs", "8913953333", "KatePirs@mail.ru", "Курс по PHP"),
            new testItem("Jeck Shepard", "8913957555", "Shepard@mail.com", "Курс по WordPress"),
            new testItem("Дарья Мороз", "+123456789", "Dariiii@mail.com", "Курс по верстке"),
            new testItem("Милана", "8963953788", "Milana@mail.ru", "Курс по JavaScript"),
            new testItem("Дмитрий Круглов", "+7912367543", "Krug@mail.ru", "Курс по VUE JS"),
            new testItem("Том Соер", "8924957658", "TomSoyer@mail.ru", "Курс по PHP"),
            new testItem("Валентина Александровна", "+79139588607", "vall@mail.com", "Курс по WordPress"),
        ]
    }

    getRandomNum(max) {
        return (Math.random() * max).toFixed()
    }

    getRandomItem() {

        let randomNum = this.getRandomNum(this.data.length)
        return this.data[randomNum]
    }

    render(){
        const data = this.getRandomItem()
        document.querySelector('#name').value = data.name;
        document.querySelector('#phone').value = data.phone;
        document.querySelector('#email').value = data.email;
        document.querySelector('#product').value = data.product;
    }

           
}







