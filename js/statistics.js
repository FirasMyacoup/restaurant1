'use strict';
const formEL= document.getElementById("formID");
const perentEL = document.getElementById("foodtable");

let foodID=0;
let food=[];


function Food(name,type,price){
    this.id= foodID++;
    this.name = name;
    this.type = type;
    this.price = price;
    food.push(this);


}

Food.prototype.render=function(){

  let trEL= document.createElement("tr");
  trEL.innerHTML=`
  <td>${this.id}</td>
  <td>${this.name}</td>
  <td>${this.type}</td>
  <td>${this.price}</td>
  `;

  perentEL.appendChild(trEL);

  

};

function savedata(){
    let strifiedData=JSON.stringify(food);
    localStorage.setItem("foods",strifiedData);
  
  
  }
  
  
  function getdata(){
    let retrivedData=localStorage.getItem("foods");
    console.log(retrivedData);
    console.log(typeof retrivedData);
    
    let parsedData=JSON.parse(retrivedData);
      console.log(parsedData);
      console.log(typeof parsedData);
      for (let i=0;i<parsedData.length;i++){
        new Food(parsedData[i].name,parsedData[i].type,parsedData[i].price);
      }
    
    for (let i=0;i<food.length;i++){
      food[i].render();
    
    
    }
    }
    getdata();
  
  
  
  
  
  
