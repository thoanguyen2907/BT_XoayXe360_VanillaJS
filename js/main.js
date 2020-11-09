import { Car } from './car.js';
import { CarList } from './carList.js';
import { Wheels } from './wheels.js';
import { WheelsList } from './wheelsList.js'
const dataFeatures = [
  {
    "id": 1,
    "title": "Crystal Black",
    "type": "Pearl",
    "img": "./images/icons/icon-black.jpg",
    "srcImg": "images-black/images-black-1/",
    "color": "Black",
    "price": "19,550",
    "engineType": "In-Line 4-Cylinder",
    "displacement": "1996 cc",
    "horsepower": "158 @ 6500 rpm",
    "torque": "138 lb-ft @ 4200 rpm",
    "redline": "6700 rpm",
    "wheels": [
      {
        "idWheel": 1,
        "srcImg": "images-black/images-black-1/"
      },
      {
        "idWheel": 2,
        "srcImg": "images-black/images-black-2/"
      },
      {
        "idWheel": 3,
        "srcImg": "images-black/images-black-3/"
      }
    ]
  },
  {
    "id": 2,
    "title": "Modern Steel",
    "type": "Metallic",
    "img": "./images/icons/icon-steel.jpg",
    "srcImg": "images-steel/images-steel-1/",
    "color": "Steel",
    "price": "20,550",
    "engineType": "In-Line 4-Cylinder",
    "displacement": "1996 cc",
    "horsepower": "158 @ 6500 rpm",
    "torque": "138 lb-ft @ 4200 rpm",
    "redline": "6700 rpm",
    "wheels": [
      {
        "idWheel": 1,
        "srcImg": "images-steel/images-steel-1/"
      },
      {
        "idWheel": 2,
        "srcImg": "images-steel/images-steel-2/"
      },
      {
        "idWheel": 3,
        "srcImg": "images-steel/images-steel-3/"
      }
    ]
  },
  {
    "id": 3,
    "title": "Lunar Silver",
    "type": "Metallic",
    "img": "./images/icons/icon-silver.jpg",
    "srcImg": "images-silver/images-silver-1/",
    "color": "Silver",
    "price": "21,550",
    "engineType": "In-Line 4-Cylinder",
    "displacement": "1996 cc",
    "horsepower": "158 @ 6500 rpm",
    "torque": "138 lb-ft @ 4200 rpm",
    "redline": "6700 rpm",
    "wheels": [
      {
        "idWheel": 1,
        "srcImg": "images-silver/images-silver-1/"
      },
      {
        "idWheel": 2,
        "srcImg": "images-silver/images-silver-2/"
      },
      {
        "idWheel": 3,
        "srcImg": "images-silver/images-silver-3/"
      }
    ]
  },
  {
    "id": 4,
    "title": "Rallye Red",
    "type": "Metallic",
    "img": "./images/icons/icon-red.jpg",
    "srcImg": "images-red/images-red-1/",
    "color": "Red",
    "price": "22,550",
    "engineType": "In-Line 4-Cylinder",
    "displacement": "1996 cc",
    "horsepower": "158 @ 6500 rpm",
    "torque": "138 lb-ft @ 4200 rpm",
    "redline": "6700 rpm",
    "wheels": [
      {
        "idWheel": 1,
        "srcImg": "images-red/images-red-1/"
      },
      {
        "idWheel": 2,
        "srcImg": "images-red/images-red-2/"
      },
      {
        "idWheel": 3,
        "srcImg": "images-red/images-red-3/"
      }
    ]
  }
]
const dataWheels = [
  {
    "idWheel": 1,
    "img": "./images/icons/icon-wheel-1.jpg",
    "title": "18-inch Alloy Wheels",
    "price": "1,600"
  },
  {
    "idWheel": 2,
    "img": "./images/icons/icon-wheel-2.jpg",
    "title": "18-inch 15-Spoke Black Alloy Wheels w/ Red Lip",
    "price": "1,700"
  },
  {
    "idWheel": 3,
    "img": "./images/icons/icon-wheel-3.jpg",
    "title": "18-inch 5-Spoke Black Alloy Wheels",
    "price": "1,600"
  }
]
const carList = new CarList();
const wheelsList = new WheelsList();
let carColorChosen = {
  "id": 1,
  "title": "Crystal Black",
  "type": "Pearl",
  "img": "./images/icons/icon-black.jpg",
  "srcImg": "images-black/images-black-1/",
  "color": "Black",
  "price": "19,550",
  "engineType": "In-Line 4-Cylinder",
  "displacement": "1996 cc",
  "horsepower": "158 @ 6500 rpm",
  "torque": "138 lb-ft @ 4200 rpm",
  "redline": "6700 rpm",
  "wheels": [
    {
      "idWheel": 1,
      "srcImg": "images-black/images-black-1/"
    },
    {
      "idWheel": 2,
      "srcImg": "images-black/images-black-2/"
    },
    {
      "idWheel": 3,
      "srcImg": "images-black/images-black-3/"
    }
  ]
};

const clearCarCurrent = () => {
  let carCurrent = document.getElementById("carCurrent");
  carCurrent.innerHTML = "";
  let tagScript = document.createElement("script");
  tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";
  document.querySelector(".appendScript").innerHTML = "";
  document.querySelector(".appendScript").appendChild(tagScript);

}

const showCarColor = () => {
  let showCarDiv = document.getElementById("show-car-color");
  dataFeatures.map((item, index) => {
    let car = new Car(item.id, item.title, item.type, item.img, item.srcImg, item.color, item.price, item.engineType, item.displacement,
      item.horsepower, item.torque, item.redline, item.wheels);
    carList.addCar(car);
  })
  showCarDiv.innerHTML = carList.renderCar();
}
showCarColor();

const showWheels = () => {
  let showWheelsDiv = document.getElementById("show-wheels");
  dataWheels.map((item, index) => {
    let wheelsItem = new Wheels(item.idWheel, item.img, item.title, item.price);
    wheelsList.addWheels(wheelsItem);
  });
  showWheelsDiv.innerHTML = wheelsList.renderWheels()
}
showWheels();

const changeNewCar = (e) => {
  let newCarId = e.currentTarget.getAttribute("data-id");
  dataFeatures.forEach((car, index) => {
    if (car.id == newCarId) {
      carColorChosen = car;
    }
  });
  showCarChosen(carColorChosen);
}
const showCarChosen = (carColorChosen) => {
  clearCarCurrent();
  let carCurrent = document.getElementById("carCurrent");
  let srcImgNew = "./images/" + carColorChosen.srcImg;
  carCurrent.setAttribute("data-folder", srcImgNew);

}
window.changeNewCar = changeNewCar;

const changeWheels = (e) => {
  let dataIdWheels = e.currentTarget.getAttribute("data-id");
  let newWheels = null;
  newWheels = carColorChosen.wheels.find(wheel => wheel.idWheel == dataIdWheels);
  if (newWheels !== null) {
    carColorChosen = { ...carColorChosen, srcImg: newWheels.srcImg };
    showCarChosen(carColorChosen);
  }


}
window.changeWheels = changeWheels; 