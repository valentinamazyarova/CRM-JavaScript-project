export default class ViewTable {
    constructor(data){
        data.forEach((item) => {
            this.renderApplication(item);
        })
    }

    elements = {
        tableApplications: document.querySelector('#table-applications'),
        tbody: document.querySelector('#tbody'),
        statusBar: document.querySelector('#topStatusBar'),
        productSelect: document.querySelector('#productSelect'),
        leftStatusBar: document.querySelector('#leftStatusBar')
    }

    renderApplication(dataObj){

        let status = "danger";
        let textStatus = "Новый"

        if(dataObj.status === "inwork"){
            status = "warning";
            textStatus = "В работе"
        } else if (dataObj.status === "complete"){
            status = "success";
            textStatus = "Завершенный"
        }


        let application = ` <tr data-application>
                                <th scope="row">${dataObj.id}</th>
                                <td>${dataObj.date}</td>
                                <td>${dataObj.product}</td>
                                <td>${dataObj.name}</td>
                                <td>${dataObj.email}</td>
                                <td>${dataObj.phone}</td>
                                <td>
                                    <div class="badge badge-pill badge-${status}" data-status >${textStatus}</div>
                                </td>
                                <td>
                                    <a href="edit.html" data-edit = "${dataObj.id}" >Редактировать</a>
                                </td>
                            </tr>
                          ` 

        this.elements.tbody.insertAdjacentHTML("beforeend", application)

    
        
    }

    getId(target){
        return target.getAttribute("data-edit")
    }


    filterRender(filterRequests){

        // document.querySelectorAll('[data-application]').forEach((item) => {
        //     item.style.display = "none"
        // })

        this.elements.tbody.innerHTML = ""

        filterRequests.forEach((item) => {
            this.renderApplication(item);
        })

    }

    renderNumNewApplication(data){
        let el = this.elements.leftStatusBar.querySelector("#badge-new");
        
        let counterNew = 0;
        data.forEach((item) => {
            if(item.status == "new"){
                counterNew += 1;
            }
        })

        el.textContent = counterNew;
 
    }


    renderStatusBar(target){
        let elLeft, elTop , currentActivElLeft, currentActivElTop; 

        elLeft = this.elements.leftStatusBar;
        elTop = this.elements.statusBar;

        currentActivElLeft = elLeft.querySelector('.active');
        elLeft.querySelector(`[data-value ='${target.dataset.value}']`).classList.add('active')
        currentActivElLeft.classList.remove('active');

        currentActivElTop = elTop.querySelector('.active');
        currentActivElTop.classList.remove('active');
        elTop.querySelector(`[data-value ='${target.dataset.value}']`).classList.add('active')
        
    }
}


