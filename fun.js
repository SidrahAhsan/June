var car={
    color : "black",
    speed : 200,
    model : "BMW",
    engine: 1002,
    drive: function(){
        return this.speed;
    }

}

console.log(car.drive());