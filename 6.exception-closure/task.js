// Задача №1

function parseCount(value) {
  let parsedValue = Number.parseFloat(value);
  if(Number.isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}  

function validateCount(value) {
  try {
    return parseCount(value);
  }
  catch(error) {
    return error;
  }
}

// Задача №2

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
      throw new Error("Треугольник с такими сторонами не существует");
       }
     }
    
    get perimeter() {
      return this.side1 + this.side2 + this.side3;
     }

    get area() {
       let halfPerimeter = (this.side1 + this.side2 + this.side3) / 2;
       return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3)).toFixed(3));
     }
    } 

  function getTriangle(side1, side2, side3) {
    try {
      return new Triangle(side1, side2, side3);
    }
    catch(error) {
      return {
        get area() {
            return "Ошибка! Треугольник не существует";
          },
          get perimeter() {
            return "Ошибка! Треугольник не существует";
        } 
      }    
    }
}
