import { ControlType } from './types';

export class Controls {
    forward: number;
    left: number;
    right: number;
    reverse: number;

    constructor(type: ControlType) {
        this.forward = 0;
        this.left = 0;
        this.right = 0;
        this.reverse = 0;

        switch (type) {
            case 'KEYS':
                this.#addKeyboardListeners();
                break;
            case 'DUMMY':
                this.forward = 1;
                break;
            case 'JOYSTICK':
                this.#addJoystickListeners();
                break;
        }
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'a':
                    this.left = 1;
                    break;
                case 'd':
                    this.right = 1;
                    break;
                case 'w':
                    this.forward = 1;
                    break;
                case 's':
                    this.reverse = 1;
                    break;
            }
        };
        document.onkeyup = (event) => {
            switch (event.key) {
                case 'a':
                    this.left = 0;
                    break;
                case 'd':
                    this.right = 0;
                    break;
                case 'w':
                    this.forward = 0;
                    break;
                case 's':
                    this.reverse = 0;
                    break;
            }
        };
    }

    #addJoystickListeners() {
        const handleJoystickPress = (event: Event) => {
            const customEvent = event as CustomEvent<{
                direction: string;
                pressed: boolean;
            }>;
            const { direction, pressed } = customEvent.detail;

            const value = pressed ? 1 : 0;

            switch (direction) {
                case 'up':
                    this.forward = value;
                    break;
                case 'down':
                    this.reverse = value;
                    break;
                case 'left':
                    this.left = value;
                    break;
                case 'right':
                    this.right = value;
                    break;
            }
        };

        document.addEventListener('joystick:press', handleJoystickPress);
    }
}
