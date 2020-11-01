export class CarList{
    constructor(){
        this.carArray = new Array(); 
    }
    addCar = (newCar) =>{
        this.carArray.push(newCar); 
    }
    renderCar = () => {
      return this.carArray.map((data, index) => {
        return `<div onClick="changeNewCar(event)" data-img=${data.srcImg} data-id=${data.id}
        class="row border border-link p-2">
        <div className="col-4">
            <img  class="car-color p-2" src=${data.img} alt=${data.title}></img>
        </div>
        <div class="col-8">
            <h4>${data.title}</h4>
            <p>${data.type}</p>
        </div>
    </div>`
        }); 

    }
   
}