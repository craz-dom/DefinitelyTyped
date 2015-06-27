declare module cc {
    export var ACTION_TAG_INVALID: number;
    export class Action extends Class {
        originalTarget: Node;
        target: Node;
        tag: number;
        constructor();
        copy(): Action;
        clone(): Action;
        isDone(): boolean;
        startWithTarget(target: Node): void;
        stop(): void;
        step(dt: number);
        update(dt: number);
        getTarget(): Node;
        setTarget(target: Node): void;
        getOriginalTarget(): Node;
        setOriginalTarget(target: Node): void;
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
        constructor(action: ActionInterval, speed: number);
        getSpeed(): number;
        setSpeed(speed: number): void;
        initWithAction(action: ActionInterval, speed: number): boolean;
        clone(): Speed;
        reverse(): Speed;
        setInnerAction(action: ActionInterval): void;
        getInnerAction(): ActionInterval;
    }

    export function speed(action: ActionInterval, speed: number): Speed;
    export module Speed {
        export function create(action: ActionInterval, speed: number): Speed;
    }

    export class Follow extends Action {
        leftBoundary: number;
        rightBoundary: number;
        topBoundary: number;
        bottomBoundary: number;
        constructor(followedNode: Node, rect: Rect);
        clone(): Follow;
        isBoundarySet(): boolean;
        setBoudarySet(value: boolean): void;
        initWithTarget(followedNode: Node, rect: Rect): boolean;
        initWithTarget(followedNode: Node): boolean;
    }
    export function follow(followedNode: Node, rect: Rect): Follow;
    export module Follow {
        export function create(followedNode: Node, rect: Rect): Follow;
    }

    export class ActionCamera extends ActionInterval {
        constructor();
        clone(): ActionCamera;
        reverse(): ReverseTime;
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

    export class CardinalSplineTo extends ActionInterval {
        constructor(duration: number, points: Array<cc.Point>, tension: number);
        initWithDuration(duration: number, points: Array<cc.Point>, tension: number): boolean;
        clone(): CardinalSplineTo;
        reverse(): CardinalSplineTo;
        updatePosition(newPos: cc.Point): void;
        getPoints(): Array<cc.Point>;
        setPoints(points: Array<cc.Point>): void;
    }

    export function cardinalSplineTo(duration: number, points: Array<cc.Point>, tension: number): CardinalSplineTo;

    export module CardinalSplineTo {
        export function create(duration: number, points: Array<cc.Point>, tension: number): CardinalSplineTo;
    }

    export class CardinalSplineBy extends CardinalSplineTo {
        constructor(duration: number, points: Array<cc.Point>, tension: number);

        reverse(): CardinalSplineBy;

        clone(): CardinalSplineBy;
    }

    export function cardinalSplineBy(duration: number, points: Array<cc.Point>, tension: number): CardinalSplineBy;

    export module CardinalSplineBy {
        export function create(duration: number, points: Array<cc.Point>, tension: number): CardinalSplineBy;
    }

    export class CatmullRomTo extends CardinalSplineTo {
        constructor(dt: number, points: Array<cc.Point>);

        initWithDuration(dt: number, points: Array<cc.Point>): boolean;

        clone(): CatmullRomTo;
    }
    export function catmullRomTo(dt: number, points: Array<cc.Point>): CatmullRomTo;
    export module CatmullRomTo {
        export function create(dt: number, points: Array<cc.Point>): CatmullRomTo;
    }

    export class CatmullRomBy extends CatmullRomTo {
        constructor(dt: number, points: Array<cc.Point>);
        clone(): CatmullRomBy;
    }
    export function catmullRomBy(dt: number, points: Array<cc.Point>): CatmullRomBy;
    export module CatmullRomBy {
        export function create(dt: number, points: Array<cc.Point>): CatmullRomBy;
    }

    export class ActionEase extends ActionInterval {
        constructor(action: ActionInterval);
        initWithAction(action: ActionInterval): boolean;
        clone(): ActionEase;
        reverse(): ActionEase;
        getInnerAction(): ActionInterval;
    }
    export function actionEase(action: ActionInterval): ActionEase;
    export module ActionEase {
        export function create(action: ActionInterval): ActionEase;
    }

    export class EaseRateAction extends ActionEase {
        constructor(action: ActionInterval, rate: number);
        setRate(rate: number): void;
        getRate(): number;
        initWithAction(action: ActionInterval, rate: number): boolean;
        initWithAction(action: ActionInterval): boolean;
        initWithAction(action: ActionInterval, rate?: number): boolean;
        clone(): EaseRateAction;
        reverse(): EaseRateAction;
    }
    export function easeRateAction(action: ActionInterval, rate: number): EaseRateAction;
    export module EaseRateAction {
        export function create(action: ActionInterval, rate: number): EaseRateAction;
    }

    export class EaseIn extends EaseRateAction {
        reverse(): EaseIn;
        clone(): EaseIn;
    }
    export module EaseIn {
        export function create(action: ActionInterval, rate: number): EaseIn;
    }
    export function easeIn(rate: number): { _rate: number; easing: (dt: number) => number; reverse: () => EaseIn };

    export class EaseOut extends EaseRateAction {
        reverse(): EaseOut;
        clone(): EaseOut;
    }
    export module EaseOut {
        export function create(action: ActionInterval, rate: number): EaseOut;
    }
    export function easeOut(rate: number): { _rate: number; easing: (dt: number) => number; reverse: () => EaseOut };

    export class EaseInOut extends EaseRateAction {
        reverse(): EaseInOut;
        clone(): EaseInOut;
    }
    export module EaseInOut {
        export function create(action: ActionInterval, rate: number): EaseInOut;
    }
    export function easeInOut(rate: number): { _rate: number; easing: (dt: number) => number; reverse: () => EaseInOut };

    export class EaseExponentialIn extends EaseRateAction {
        reverse(): EaseExponentialOut;
        clone(): EaseExponentialIn;
    }
    export module EaseExponentialIn {
        export function create(action: ActionInterval): EaseExponentialIn;
    }
    export function easeExponentialIn(): easeExponentialInObj;

    interface easeExponentialInObj {
        easing: (dt: number) => number;
        reverse: () => easeExponentialOutObj;
    }

    export class EaseExponentialOut extends EaseRateAction {
        reverse(): EaseExponentialIn;
        clone(): EaseExponentialOut;
    }
    export module EaseExponentialOut {
        export function create(action: ActionInterval): EaseExponentialOut;
    }
    export function easeExponentialOut(): easeExponentialOutObj;
    interface easeExponentialOutObj {
        easing: (dt: number) => number;
        reverse: () => easeExponentialInObj;
    }

    export class EaseExponentialInOut extends ActionEase {
        reverse(): EaseExponentialInOut;
        clone(): EaseExponentialInOut;
    }
    export module EaseExponentialInOut {
        export function create(action: ActionInterval): EaseExponentialOut;
    }
    interface easeExponentialInOutObj {
        easing: (dt: number) => number;
        reverse: () => easeExponentialInOutObj;
    }
    export function easeExponentialInOut(): easeExponentialInOutObj;

    export class EaseSineIn extends ActionEase {
        reverse(): EaseSineOut;
        clone(): EaseSineIn;
    }
    export module EaseSineIn {
        export function create(action: ActionInterval): EaseSineIn;
    }
    interface easeSineInObj {
        easing: (dt: number) => number;
        reverse: () => easeSineOutObj;
    }
    export function easeSineIn(): easeSineInObj;

    export class EaseSineOut extends ActionEase {
        reverse(): EaseSineIn;
        clone(): EaseSineOut;
    }
    export module EaseSineOut {
        export function create(action: ActionInterval): EaseSineOut;
    }
    interface easeSineOutObj {
        easing: (dt: number) => number;
        reverse: () => easeSineOutObj;
    }
    export function easeSineOut(): easeSineOutObj;

    export class EaseSineInOut extends ActionEase {
        reverse(): EaseSineInOut;
        clone(): EaseSineInOut;
    }
    export module EaseSineInOut {
        export function create(action: ActionInterval): EaseSineInOut;
    }
    interface easeSineInOutObj {
        easing: (dt: number) => number;
        reverse: () => easeSineInOutObj;
    }
    export function easeSineInOut(): easeSineInOutObj;

    export class EaseElastic extends ActionEase {
        constructor(action: ActionInterval, period: number);
        getPeriod(): number;
        setPeriod(period: number): void;
        initWithAction(action: ActionInterval, period: number): boolean;
        initWithAction(action: ActionInterval): boolean;
        initWithAction(action: ActionInterval, period?: number): boolean;
        clone(): EaseElastic;
    }
    export module EaseElastic {
        export function crate(action: ActionInterval, period: number): EaseElastic;
    }

    export class EaseElasticIn extends EaseElastic {
        reverse(): EaseElasticOut;
        clone(): EaseElasticIn;
    }
    export module EaseElasticIn {
        export function crate(action: ActionInterval, period: number): EaseElasticIn;
    }
    interface easeElasticInObj  {
        easing(dt: number): number;
        reverse(): easeElasticInObj;
    }
    export function easeElasticIn(period): easeElasticInObj;

    export class EaseElasticOut extends EaseElastic {
        reverse(): EaseElasticIn;
        clone(): EaseElasticOut;
    }
    export module EaseElasticOut {
        export function crate(action: ActionInterval, period: number): EaseElasticOut;
    }
    interface easeElasticOutObj {
        easing(dt: number): number;
        reverse(): easeElasticInObj;
    }
    export function easeElasticOut(period): easeElasticOutObj;

    export class EaseElasticInOut extends EaseElastic {
        reverse(): EaseElasticInOut;
        clone(): EaseElasticInOut;
    }
    export module EaseElasticInOut {
        export function crate(action: ActionInterval, period: number): EaseElasticInOut;
    }
    interface easeElasticInOutObj {
        _period: number;
        easing(dt: number): number;
        reverse(): EaseElasticInOut;
    }
    export function easeElasticInOut(period): easeElasticInOutObj;

    export class EaseBounce extends ActionEase {
        bounceTime(time1: number):number;
        clone(): EaseBounce;
        reverse(): EaseBounce;
    }
    export module EaseBounce {
        export function crate(action: ActionInterval): EaseBounce;
    }

    export class EaseBounceIn extends EaseBounce {
        reverse(): EaseBounceOut;
        clone(): EaseBounceIn;
    }
    export module EaseBounceIn {
        export function crate(action: ActionInterval): EaseBounceIn;
    }
    interface easeBounceInObj {
        easing(dt: number): number;
        reverse(): easeBounceOutObj;
    }
    export function easeBounceIn(): easeBounceInObj;

    export class EaseBounceOut extends EaseBounce {
        reverse(): EaseBounceIn;
        clone(): EaseBounceOut;
    }
    export module EaseBounceOut {
        export function crate(action: ActionInterval): EaseBounceOut;
    }
    interface easeBounceOutObj {
        easing(dt: number): number;
        reverse(): easeBounceInObj;
    }
    export function easeBounceOut(period): easeBounceOutObj;

    export class EaseBounceInOut extends EaseBounce {
        reverse(): EaseBounceInOut;
        clone(): EaseBounceInOut;
    }
    export module EaseBounceInOut {
        export function crate(action: ActionInterval): EaseBounceInOut;
    }
    interface easeBounceInOutObj {
        easing(dt: number): number;
        reverse(): EaseBounceInOut;
    }
    export function easeBounceInOut(period): easeBounceInOutObj;


    export class EaseBackIn extends ActionEase {
        reverse(): EaseBackOut;
        clone(): EaseBackIn;
    }
    export module EaseBackIn {
        export function crate(action: ActionInterval): EaseBackIn;
    }
    interface easeBackInObj {
        easing(dt: number): number;
        reverse(): easeBackOutObj;
    }
    export function easeBackIn(): easeBackInObj;

    export class EaseBackOut extends ActionEase {
        reverse(): EaseBackIn;
        clone(): EaseBackOut;
    }
    export module EaseBackOut {
        export function crate(action: ActionInterval): EaseBackOut;
    }
    interface easeBackOutObj {
        easing(dt: number): number;
        reverse(): easeBackInObj;
    }
    export function easeBackOut(): easeBackOutObj;

    export class EaseBackInOut extends ActionEase {
        reverse(): EaseBackInOut;
        clone(): EaseBackInOut;
    }
    export module EaseBackInOut {
        export function crate(action: ActionInterval): EaseBackInOut;
    }
    interface easeBackInOutObj {
        easing(dt: number): number;
        reverse(): EaseBackInOut;
    }
    export function easeBackInOut(period): easeBackInOutObj;

    export class EaseBezierAction extends ActionEase {
        constructor(action: Action);
        clone(): EaseBezierAction;
        reverse(): EaseBezierAction;
        setBezierParamer(p0: number, p1: number, p2: number, p3: number):void;
    }
    export module EaseBezierAction {
        export function crate(action: Action): EaseBezierAction;
    }
    export function easeBezierAction(p0: number, p1: number, p2: number, p3: number): easeBezierAction;
    interface easeBezierAction {
        easing: (time: number) => number;
        reverse: () => easeBezierAction;
    }





    export class ActionInterval { }
    export class Point{ }
    export class Class {
    }

    export class Node{}

    export class Rect{}

    export class ReverseTime{}
}