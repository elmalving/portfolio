import { Car } from './car';

export type Point = { x: number; y: number; offset?: number };
export type ControlType = 'AI' | 'KEYS' | 'DUMMY';
export type Polygon = Point[];
export type Traffic = Car[];
export type RoadBorder = [Point, Point];
