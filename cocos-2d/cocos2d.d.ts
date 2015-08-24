declare module cc {
    export module loader {
     /**
     * Load binary data by url.
     */
        export function loadBinary(url: string, cb: Function);

     /**
     * Load binary data by url synchronously
     */
        export function loadBinarySync(url: string): Uint8Array;
    }

    export class Class {
        id: number;
        implement(prop: Object): void;
    }
    
    /**
     * Common getter setter configuration function
     * @function
     * @param {Object}   proto      A class prototype or an object to config<br/>
     * @param {String}   prop       Property name
     * @param {function} getter     Getter function for the property
     * @param {function} setter     Setter function for the property
     * @param {String}   getterName Name of getter function for the property
     * @param {String}   setterName Name of setter function for the property
     */
    export function defineGetterSetter(proto: Object, prop: string, getter: () => any, setter: (value: any) => void, getterName: string, setterName: string): void;

    /**
     * Create a new object and copy all properties in an exist object to the new object
     * @function
     * @param {object|Array} obj The source object
     * @return {Array|object} The created object
     */
    export function clone(obj: Object): Object;
    export function clone(obj: Array<any>): Array<any>;

    export function inject(srcPrototype: Object, destPrototype: Object);

    /**
     * Function added for JS bindings compatibility. Not needed in cocos2d-html5.
     */
    export function associateWithNative(jsObj: Object, superclass: Object): void;

    /**
     * Key map for keyboard event
     *
     * @constant
     * @type {Object}
     * @example
        export var eventManager.addListener({
            event: export var EventListener.KEYBOARD,
            onKeyPressed:  function(keyCode, event){
                if (export var KEY["a"] == keyCode) {
                    export var log("A is pressed");
                }
            }
        }, this);
     */
    export var KEY: Object;

    /**
     * Image Format:JPG
     */
    export var FMT_JPG: number;

    /**
     * Image Format:PNG
     */
    export var FMT_PNG: number;

    /**
     * Image Format:TIFF
     */
    export var FMT_TIFF: number;

    /**
     * Image Format:RAWDATA
     */
    export var FMT_RAWDATA: number;

    /**
     * Image Format:WEBP
     */
    export var FMT_WEBP: number;

    /**
     * Image Format:UNKNOWN
     */
    export var FMT_UNKNOWN: number;

    /**
     * get image format by image data
     */
    export function getImageFormatByData(imgData: Array<number>): number;

    /**
     * Another way to subclass: Using Google Closure.
     * The following code was copied + pasted from goog.base / goog.inherits
     */
    export function inherits(childCtor: Function, parentCtor: Function);

    /**
     * export function Point is the class for point object, please do not use its constructor to create points, use export function p() alias function instead.
     */
    export class Point {
        x: number;
        y: number;
        constructor(x: number, y: number);
    }

    /**
     * Helper function that creates a export function Point.
     * @example
     * var point1 = export function p();
     * var point2 = export function p(100, 100);
     * var point3 = export function p(point2);
     * var point4 = export function p({x: 100, y: 100});
     */
    export function p(x: number, y: number): Point;

    /**
     * Check whether a point's value equals to another
     */
    export function pointEqualToPoint(point1: Point, point2: Point): boolean;
    
    /**
     * export function Size is the class for size object, please do not use its constructor to create sizes, use export function size() alias function instead.
     */
    export class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
    }

    /**
     * Helper function that creates a export function Size.
     * var size1 = export function size();
     * var size2 = export function size(100,100);
     * var size3 = export function size(size2);
     * var size4 = export function size({width: 100, height: 100});
     */
    export function size(w: number, h: number): Size;

    /**
     * Check whether a point's value equals to another
     */
    export function sizeEqualToSize(size1: Size, size2: Size): boolean;


    /**
     * export function Rect is the class for rect object, please do not use its constructor to create rects, use export function rect() alias function instead.
     */
    export class Rect {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
    }

    /**
     * Helper function that creates a export function Rect.
     * @example
     * var rect1 = export function rect();
     * var rect2 = export function rect(100,100,100,100);
     * var rect3 = export function rect(rect2);
     * var rect4 = export function rect({x: 100, y: 100, width: 100, height: 100});
     */
    export function rect(x: number, y: number, w: number, h: number): Rect;

    /**
     * Check whether a rect's value equals to another
     */
    export function rectEqualToRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * Check whether the rect1 contains rect2
     */
    export function rectContainsRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * Returns the rightmost x-value of a rect
     */
    export function rectGetMaxX(rect: Rect): number;

    /**
     * Return the midpoint x-value of a rect
     */
    export function rectGetMidX(rect: Rect): number;
    /**
     * Returns the leftmost x-value of a rect
     */
    export function rectGetMinX(rect: Rect): number;

    /**
     * Return the topmost y-value of a rect
     */
    export function rectGetMaxY(rect: Rect): number;

    /**
     * Return the midpoint y-value of `rect'
     */
    export function rectGetMidY(rect: Rect): number;

    /**
     * Return the bottommost y-value of a rect
     */
    export function rectGetMinY(rect: Rect): number;

    /**
     * Check whether a rect contains a point
     */
    export function rectContainsPoint(rect: Rect, point: Point): boolean;

    /**
     * Check whether a rect intersect with another
     */
    export function rectIntersectsRect(ra: Rect, rb: Rect): boolean;

    /**
     * Check whether a rect overlaps another
     */
    export function rectOverlapsRect(rectA: Rect, rectB: Rect): boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     */
    export function rectUnion(rectA: Rect, rectB: Rect): Rect;

    /**
     * Returns the overlapping portion of 2 rectangles
     */
    export function rectIntersection(rectA: Rect, rectB: Rect): Rect;
}