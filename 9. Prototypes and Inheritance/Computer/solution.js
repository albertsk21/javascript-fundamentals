function computer() {


    class Keyboard {
        constructor(manufacturer,responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {

        constructor(manufacturer,width,height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer,expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer,processorSpeed, ram ,hardDiskSpace ) {
            if(new.target === Computer){
                throw new Error("Cannot make an instance of abstract class Computer");
            }
            this.manufacturer =manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed, ram ,hardDiskSpace,weight,color,battery) {
            super(manufacturer,processorSpeed, ram ,hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }


        set weight(value) {
            this._weight = value;
        }
        set color(value) {
            this._color = value;
        }
        set battery(value) {
            if(! (value instanceof Battery)){
                throw new TypeError("not a valid battery");
            }
            this._battery = value;
        }


        get weight() {
            return this._weight;
        }
        get color() {
            return this._color;
        }
        get battery() {
            return this._battery;
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed, ram ,hardDiskSpace, keyboard, monitor) {

            super(manufacturer,processorSpeed, ram ,hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }



        set keyboard(value) {
            if(! (value instanceof Keyboard)){
                throw new TypeError("not a valid keyboard");
            }
            this._keyboard = value;
        }
        set monitor(value) {
            if(! (value instanceof Monitor)){
                throw new TypeError("not a valid monitor");
            }
            this._monitor = value;
        }


        get keyboard() {
            return this._keyboard;
        }
        get monitor() {
            return this._monitor;
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}