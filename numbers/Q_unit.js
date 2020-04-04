
const units = {
    
};

class UNIT {
    constructor(value = 0 , UnitType = "x"){
        this.value = value;
        this.unit = UnitType;

        this.toString = _ => {
            return (this.value + this.unit);
        }

        this.typeof = _ => {
            return typeof(this);
        }
        this.typeofValue = _ => {
            return typeof(this.toString());
        }

    }
}
