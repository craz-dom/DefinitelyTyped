declare module cc {
    export module loader {
        export function loadBinary(url: string, cb: (info: string, array: Uint8Array) => void): void;

        export function loadBinarySync(url: string): Uint8Array;
    }

    export class Class {
    }

    interface ClassManager {
        id: number;
        instanceId: number;
        compileSuper(func: Function, name: string, id: number): (params: string[], str: string) => void;
        getNewId(): number;
        getNewInstanceId(): number;
    }

    export module Class {
        export function extend(props: Object): ClassManager;
    }

    export function defineGetterSetter(proto: Object, prop: string, getter: Function, setter: Function, getterName: string, setterName: string);

    export function clone(obj: Object): Object;

    export function associateWithNative(jsObj: Object, superclass: Object);
    interface IKey {
        none: number;
        // android
        back: number;
        menu: number;

        backspace: number;
        tab: number;

        enter: number;

        shift: number; //should use shiftkey instead
        ctrl: number; //should use ctrlkey
        alt: number; //should use altkey
        pause: number;
        capslock: number;

        escape: number;
        space: number;
        pageup: number;
        pagedown: number;
        end: number;
        home: number;
        left: number;
        up: number;
        right: number;
        down: number;
        select: number;

        insert: number;
        Delete: number;
        0: number;
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;

        num0: number;
        num1: number;
        num2: number;
        num3: number;
        num4: number;
        num5: number;
        num6: number;
        num7: number;
        num8: number;
        num9: number;
        '*': number;
        '+': number;
        '-': number;
        'numdel': number;
        '/': number;
        f1: number; //f1-f12 dont work on ie
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;

        numlock: number;
        scrolllock: number;

        ';': number;
        semicolon: number;
        equal: number;
        '=': number;
        ',': number;
        comma: number;
        dash: number;
        '.': number;
        period: number;
        forwardslash: number;
        grave: number;
        '[': number;
        openbracket: number;
        backslash: number;
        ']': number;
        closebracket: number;
        quote: number;

        // gamepad controll
        dpadLeft: number;
        dpadRight: number;
        dpadUp: number;
        dpadDown: number;
        dpadCenter: number;
    }
    export var KEY: IKey;
    export var FMT_JPG: number;
    export var FMT_PNG: number;
    export var FMT_TIFF: number;
    export var FMT_RAWDATA: number;
    export var FMT_WEBP: number;
    export var FMT_UNKNOWN: number;
    export function getImageFormatByData(imgData): number;
    export function inherits(childCtor: Function, parentCtor: Function);

    export class Point {
        constructor(x: number, y: number);
    }
    export function p(p: Point): Point;
    export function p(x: number, y: number): Point;
    export function pointEqualToPoint(point1: Point, point2: Point): boolean;

    export class Size {
        constructor(width: number, height: number);
    }
    export function size(size: Size): Size;
    export function size(width: number, height: number): Size;
    export function sizeEqualToPoint(size1: Size, size2: Size): boolean;

    export class Rect {
        constructor(x:number, y:number,width:number,height:number);
    }
    export function rect(rect: Rect): Rect;
    export function rect(x: number, y: number, width: number, height: number): Rect;
    export function rectEqualToPoint(rect1: Rect, rect2: Rect): boolean;
    export function rectContainsRect(rect1: Rect, rect2: Rect): boolean;
    export function rectGetMaxX(rect: Rect): number;
    export function rectGetMidX(rect: Rect): number;
    export function rectGetMinX(rect: Rect): number;
    export function rectGetMaxY(rect: Rect): number;
    export function rectGetMidY(rect: Rect): number;
    export function rectGetMinY(rect: Rect): number;
    export function rectContainsPoint(rect: Rect, point: Point): boolean;
    export function rectIntersectsRect(ra: Rect, rb: Rect): boolean;
    export function rectOverlapsRect(ra: Rect, rb: Rect): boolean;
    export function rectUnion(ra: Rect, rb: Rect): Rect;
    export function rectIntersection(ra: Rect, rb: Rect): Rect;

    export class SAXParser extends Class {
        constructor();
        parce(xmlTxt: string): Document;
    }

    export class PlistParser extends SAXParser {
        parce(xmlTxt: string): Document;
        parce(xmlTxt: string): Object;
        parce(xmlTxt: string): Array<any>;
        parce(xmlTxt: string): string;
        parce(xmlTxt: string): boolean;
        parce(xmlTxt: string): number;
    }

    export var FIX_ARTIFACTS_BY_STRECHING_TEXEL: number;
    export var DIRECTOR_STATS_POSITION: Point;
    export var DIRECTOR_FPS_INTERVAL: number;
    export var COCOSNODE_RENDER_SUBPIXEL: number;
    export var SPRITEBATCHNODE_RENDER_SUBPIXEL: number;
    export var OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA: number;
    export var TEXTURE_ATLAS_USE_TRIANGLE_STRIP: number;
    export var TEXTURE_ATLAS_USE_VAO: number;
    export var TEXTURE_NPOT_SUPPORT: number;
    export var RETINA_DISPLAY_SUPPORT: number;
    export var RETINA_DISPLAY_FILENAME_SUFFIX: string;
    export var USE_LA88_LABELS: number;
    export var SPRITE_DEBUG_DRAW: number;
    export var SPRITEBATCHNODE_DEBUG_DRAW: number;
    export var LABELATLAS_DEBUG_DRAW: number;
    export var LABELBMFONT_DEBUG_DRAW: number;
    export var IS_RETINA_DISPLAY_SUPPORTED: number;
    export var DEFAULT_ENGINE: string;
    export var ENABLE_STACKABLE_ACTIONS: number;
    export var ENABLE_GL_STATE_CACHE: number;
}