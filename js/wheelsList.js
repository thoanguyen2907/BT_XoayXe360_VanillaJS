export class WheelsList{
    constructor(){
        this.wheelsArray = new Array(); 
    }
    addWheels = (newWheels) =>{
        this.wheelsArray.push(newWheels); 
    }
    renderWheels = () => {
        return this.wheelsArray.map((data, index) => {
            return `<div 
            onClick="changeWheels(event)"
            data-id = ${data.idWheel}
           className="row mt-3 py-2 d-flex flex-colum align-items-center border border-color-default">
            <div className="col-2">
                <img className="p-2" src=${data.img} alt="icon-wheels" />
            </div>
            <div className="col-10">
                <h5>${data.title}</h5>
            </div>
        </div>`
        })
    }

}