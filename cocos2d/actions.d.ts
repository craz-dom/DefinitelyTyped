declare module cc {
    export var ACTION_TAG_INVALID: number;
    export class Action extends cc.Class {
        originalTarget: cc.Node;
        target: cc.Node;
        tag: number;
        constructor();
        copy(): Action;
        clone(): Action;
        isDone(): boolean;
        startWithTarget(target: cc.Node): void;
        stop(): void;
        step(dt: number);
        update(dt: number);
        getTarget(): cc.Node;
        setTarget(target: cc.Node): void;
        getOriginalTarget(): cc.Node;
        setOriginalTarget(target: cc.Node): void;
        getTag(): number;
        setTag(tag: number);
        retain(): void;
        release(): void;
    }
    export function action(): Action;
    export module Action {
        export function create(): Action;
    }

    export class FiniteTimeAction extends Action {
        constructor();
        getDuration(): number;
        setDuration(duration: number): void;
        reverse(): any;
        clone(): FiniteTimeAction;
    }

    export class Speed extends Action {
        constructor(action: cc.ActionInterval, speed: number);
        getSpeed(): number;
        setSpeed(speed: number): void;
        initWithAction(action: cc.ActionInterval, speed: number): boolean;
        clone(): Speed;
        reverse(): Speed;
        setInnerAction(action: cc.ActionInterval): void;
        getInnerAction(): cc.ActionInterval);
    }
    export function speed(action: cc.ActionInterval, speed: number): Speed;
    export module Speed {
        export function create(action: cc.ActionInterval, speed: number): Speed;
    }

    export class Follow extends Action {
        leftBoundary: number;
        rightBoundary: number;
        topBoundary: number;
        bottomBoundary: number;
        constructor(followedNode: cc.Node, rect: cc.Rect);
        clone(): Follow;
        isBoundarySet(): boolean;
        setBoudarySet(value: boolean): void;
        initWithTarget(followedNode: cc.Node, rect: cc.Rect): boolean;
        initWithTarget(followedNode: cc.Node): boolean;
    }
    export function follow(followedNode: cc.Node, rect: cc.Rect): Follow;
    export module Follow {
        export function create(followedNode: cc.Node, rect: cc.Rect): Follow;
    }

    export class ActionCamera extends cc.ActionInterval {
        constructor();
        clone(): ActionCamera;
        reverse(): cc.ReverseTime;
    }

    export class OrbitCamera extends ActionCamera {
        constructor(t: number, radius: number, deltaRadius: number, angleZ: number, deltaAngleZ: number, angleX: number, deltaAngleX: number);
        initWithDuration(t: number, radius: number, deltaRadius: number, angleZ: number, deltaAngleZ: number, angleX: number, deltaAngleX: number): boolean;
        sphericalRadius(): { newRadius: number; zenith: number; azimuth: number };
        clone(): ActionCamera;
        update(dt: number);
    }
    export function orbitCamera(t: number, radius: number, deltaRadius: number, angleZ: number, deltaAngleZ: number, angleX: number, deltaAngleX: number): OrbitCamera;
    export module OrbitCamera {
        export function create(t: number, radius: number, deltaRadius: number, angleZ: number, deltaAngleZ: number, angleX: number, deltaAngleX: number): OrbitCamera;
    }

    export function cardinalSplineAt(p0: cc.Point, p1: cc.Point, p2: cc.Point, p3: cc.Point, tension: number, t: number): cc.Point;
    export function reverseControlPoints(array: Array<cc.Point>): Array<cc.Point>;
    export function cloneControlPoints(array: Array<cc.Point>): Array<cc.Point>;
    export function copyControlPoints(array: Array<cc.Point>): Array<cc.Point>;
    export function getControlPointAt(array: Array<cc.Point>, pos: number): cc.Point;
    export function reverseControlPointsInline(array: Array<cc.Point>): void;

    export class CardinalSplineTo extends cc.ActionInterval {
        constructor(duration: number, points: Array<cc.Point>, tension: number);
        initWithDuration(duration: number, points: Array<cc.Point>, tension: number): boolean;
        clone(): CardinalSplineTo;
        reverse(): CardinalSplineTo;
        updatePosition(newPos: cc.Point): void;
        getPoints(): Array<cc.Point>;
        setPoints(points: Array<cc.Point>): void;
    }
}