function Device(name, power) {
    this.device = 'electric',
        this.name = name,
        this.power = power
}

Device.prototype.powerOnOff = function (power) {
    if (power > 0) {
        alert(`Прибор включен, мощность: ${power} Вт`);
    } else {
        alert('Прибор выключен');
    }
}

function TechDevice(name, power, color) {
    this.name = name,
        this.power = power,
        this.color = color
}

TechDevice.prototype = new Device();

const router = new TechDevice('router', 80, 'black');
const laptop = new TechDevice('laptop', 120, 'red');
const conditioner = new TechDevice('conditioner', 200, 'white');

router.powerOnOff(80);
laptop.powerOnOff(120);
conditioner.powerOnOff(0);

alert(`Общая мощность ${router.power + laptop.power + conditioner.power} Вт`);