import { Car } from './car';
import { Road } from './road';
import { ControlType, Traffic } from './types';

export const init = ({
    carCanvas,
    controlType = 'KEYS',
    // networkCanvas,
}: {
    carCanvas: HTMLCanvasElement;
    controlType: ControlType;
    // networkCanvas: HTMLCanvasElement;
}) => {
    carCanvas.width = 200;
    // networkCanvas.width = 300;

    const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
    const car = new Car(road.getLaneCenter(1), 100, 30, 50, controlType, 10);
    const traffic: Traffic = [];

    setInterval(() => {
        traffic.push(
            new Car(
                road.getLaneCenter(Math.random() * 3),
                car.y - 500,
                30,
                50,
                'DUMMY',
                5
            )
        );

        for (let i = 0; i < traffic.length; i++) {
            if (traffic[i].y > car.y + 1000) {
                traffic.splice(i, 1);
                i--;
            }
        }
    }, 1000);

    return [road, car, traffic] as const;
};

export function animate({
    canvases,
    entities: { road, car, traffic },
}: {
    canvases: {
        car: HTMLCanvasElement;
        // network: HTMLCanvasElement
    };
    entities: { road: Road; car: Car; traffic: Traffic };
}) {
    const carCtx = canvases.car.getContext('2d')!;

    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);

    canvases.car.height = window.innerHeight;
    // canvases.network.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -car.y + canvases.car.height * 0.7);

    road.draw(carCtx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, 'red');
    }
    car.draw(carCtx, 'blue');

    carCtx.restore();

    requestAnimationFrame(() => {
        animate({ canvases, entities: { road, car, traffic } });
    });
}
