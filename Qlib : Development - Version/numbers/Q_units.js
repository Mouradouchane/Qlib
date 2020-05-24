
const Units = {
    Length : {
        MilliMeter : "mm",
        CentiMeter : "cm",
        Meter : "m",
        KiloMeter : "Km",
        Pixel : "px",
    },
    
    Weight :{
        MilliGram : "mg",
        Gram: "g",
        KiloGram : "Kg",
        MetricTon : "t(Mg)",
    },

    Temperature : {
        Celcius : "°C",
        Kelvin  : "°K",
        Rankine : "°Ra",
        Réaumur : "°Re"
    },

    Liquids : {
        MilliLiter : "mL",
        Liter : "L",
        CubicMetre : "m3",
    },

    Speed : {
        KilometerPerHour : "km/h",
        MeterPerSecend : "m/s",
    },

    Force : {
        Newton : "N",
    },
    
    Pressure : {
        KiloPascal : "kPa",
    },

    Power : {
        watt : "W",
        KiloWatt : "kW",
    },

    Density : {
        KilogramPerCubicMeter : "kg/m3",
    },

    Energy : {
        kiloJoule : "kJ",
        MegaJoule : "MJ",
        Kilowatt_Hour : "kW-h"
    },

    ElectricCurrent : {
        Ampere : "A",
    },

    Memory : {
        KiloByte : "KB",
        MegaByte : "MB",
        GigaByte : "GB",
        TeraByte : "TB",
        PetaByte : "PB",
    },

};

const UnitsUSA = {
    Length : {
        Inches : "in",
        Feet : "ft",
        Yards : "yd",
        Miles : "mi"
    },

    Temperature : {
        Fahrenheit : "°F",
    },

    Liquids : {
        FluidOunces : "fl oz",
        Cups : "c",
        Pints : "pt",
        Quarts : "qt",
        Gallons : "gal",
    },

    Weight : {
        Ounces : "oz",
        Pounds : "lb",
        Tons : "t"
    }
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
            return typeof(this.value);
        }

        this.isNegative = _ => {
            if(this.value < 0) return true;
            else return false;
        }
    }
}
