class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        let sideCount = 0;
        this.sides.forEach((side) => {
            sideCount++;
        });

        return sideCount;
    }

    get perimeter() {
        let perim = 0;
        this.sides.forEach((side) => {
            perim += side;
        });
        return perim;
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0])
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3])
    }

    get perimeter() {
        if (this.isValid) {
            return this.sides[0] * 4;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2;
        }
    }
}
