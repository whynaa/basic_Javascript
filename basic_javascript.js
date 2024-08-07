// persegi

class persegi {
    constructor(sisi){
        this.sisi = sisi
    }

    luas = () => {
        return this.sisi * this.sisi
    }

    keliling = () => {
        return 4 * this.sisi
    }
}

let kotak = new persegi(5)
console.log("Luas : " + kotak.luas())
console.log("Keliling : " + kotak.keliling())

console.log("add class kubus")
