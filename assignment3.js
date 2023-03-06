function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.print = function () {
    console.log(`This Rectangle is ${this.width} width by ${this.height} height`);
}

let rectangleArray = []
for(let i=0; i< 5; i++) {
    rectangleArray[i] = new Rectangle(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
}

rectangleArray.forEach(rec => rec.print())