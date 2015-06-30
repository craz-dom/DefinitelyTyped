declare module cc {
    export function newElement(x: string): HTMLElement;
    export function _addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    export function each(obj: Object, iterator: Function, context?: Object);
    export function each(obj: Array<any>, iterator: Function, context?: Object);
    export function extend(target: Object, sources: Array<Object>): Object;
    export function isFunction(obj: any): boolean;
    export function isNumber(obj: any): boolean;
    export function isString(obj: any): boolean;
    export function isArray(obj: any): boolean;
    export function isUndefined(obj: any): boolean;
    export function isObject(obj: any): boolean;
    export function isCrossOrigin(obj: any): boolean;
    export class AsyncPool {
        constructor(srcObj: Object, limit: number, iterator: Function, onEnd: Function, target: Object);
        constructor(srcObj: Array<any>, limit: number, iterator: Function, onEnd: Function, target: Object);
        size: number;
        finishedSize: number;
        onIterator(iterator: Function, target: Object);
        onEnd(endCb: Function, endCbTarget: Object);
        flow();
    }
    export module async {
        export function series(tasks: Object|Array<any>, cb?: Function, target?: Object): AsyncPool;
        export function parallel(tasks: Object|Array<any>, cb?: Function, target?: Object): AsyncPool;
        export function waterfall(tasks: Object|Array<any>, cb?: Function, target?: Object): AsyncPool;
        export function map(tasks: Object|Array<any>, iterator: Function|Object, callback?: Function, target?: Object): AsyncPool;
        export function mapLimit(tasks: Object|Array<any>, limit: number, iterator: Function|Object, callback: Function, target?: Object): AsyncPool;
    }
    export module path {
        export function join(...args: string[]): string;
        export function extname(pathStr: string): string;
        export function mainFileName(fileName: string): string;
        export function basename(pathStr: string, extname?: string): string;
        export function dirname(pathStr: string): string;
        export function changeExtname(pathStr: string, extname?: string): string;
        export function changeBasename(pathStr: string, basename: string, isSameExt?: boolean): string;
    }
    export module loader {
        export function loadBinary(url: string, cb: (info: string, array: Uint8Array) => void): void;
        export function loadBinarySync(url: string): Uint8Array;

        export var resPath: string;
        export var audioPath: string;
        export var cache: string;
        export function getXMLHttpRequest(): XMLHttpRequest;
        export function loadJs(baseDir: string, jsList: Array<string>, cb?: Function): void;
        export function loadJsWithImg(baseDir: string, jsList: Array<string>, cb?: Function): void;
        export function loadTxt(url: string, cb?: Function): void;
        export function loadCsb(url: string, cb?: Function): void;
        export function loadJson(url: string, cb?: Function): void;
        export function loadImg(url: string, option: Object, callback: Function): AsyncPool;
        export function loadImg(url: string, callback: Function): AsyncPool;
        export function getUrl(basePath: string, url?: string): string;
        export function load(url: string, option: Object, loadCallback: Function| Object): AsyncPool;
        export function load(url: string, loadCallback: Function| Object): AsyncPool;
        export function loadAliases(url: string, callback?: Function): void;
        export function register(extNames: string, loader: Function): void;
        export function getRes(url: string): any;
        export function release(url: string): void;
        export function releaseAll(): void;
    }
    export function formatStr(str: string, ...args: string[]): string;
    export function create3DContext(canvas: HTMLCanvasElement, opt_attribs: Object): WebGLRenderingContext;

    export var ORIENTATION_PORTRAIT: Number;
    export var ORIENTATION_PORTRAIT_UPSIDE_DOWN: Number;
    export var ORIENTATION_LANDSCAPE_LEFT: Number;
    export var ORIENTATION_LANDSCAPE_RIGHT: Number;

    export var game: IGame;
    interface IGame {
        DEBUG_MODE_NONE: number;
        DEBUG_MODE_INFO: number;
        DEBUG_MODE_WARN: number;
        DEBUG_MODE_ERROR: number;
        DEBUG_MODE_INFO_FOR_WEB_PAGE: number;
        DEBUG_MODE_WARN_FOR_WEB_PAGE: number;
        DEBUG_MODE_ERROR_FOR_WEB_PAGE: number;
        EVENT_HIDE: string;
        EVENT_SHOW: string;
        CONFIG_KEY: IConfigKey;
        config: Object;
        onStart: Function;
        onStop: Function;
        setFrameRate(frameRate: any): void;
        restart(): void;
        run(id: any): void;
        prepare(cb: () => void): void;
    }
    interface IConfigKey {
        engineDir: string;
        dependencies: string;
        debugMode: string;
        showFPS: string;
        frameRate: string;
        id: string;
        renderMode: string;
        jsList: string;
        classReleaseMode: string;
    }

    export module sys {
        export var LANGUAGE_ENGLISH: string;
        export var LANGUAGE_CHINESE: string;
        export var LANGUAGE_FRENCH: string;
        export var LANGUAGE_ITALIAN: string;
        export var LANGUAGE_GERMAN: string;
        export var LANGUAGE_SPANISH: string;
        export var LANGUAGE_DUTCH: string;
        export var LANGUAGE_RUSSIAN: string;
        export var LANGUAGE_KOREAN: string;
        export var LANGUAGE_JAPANESE: string;
        export var LANGUAGE_HUNGARIAN: string;
        export var LANGUAGE_PORTUGUESE: string;
        export var LANGUAGE_ARABIC: string;
        export var LANGUAGE_NORWEGIAN: string;
        export var LANGUAGE_POLISH: string;

        export var OS_IOS: string;
        export var OS_ANDROID: string;
        export var OS_WINDOWS: string;
        export var OS_MARMALADE: string;
        export var OS_LINUX: string;
        export var OS_BADA: string;
        export var OS_BLACKBERRY: string;
        export var OS_OSX: string;
        export var OS_WP8: string;
        export var OS_WINRT: string;
        export var OS_UNKNOWN: string;

        export var UNKNOWN: number;
        export var IOS: number;
        export var ANDROID: number;
        export var WIN32: number;
        export var MARMALADE: number;
        export var LINUX: number;
        export var BADA: number;
        export var BLACKBERRY: number;
        export var MACOS: number;
        export var NACL: number;
        export var EMSCRIPTEN: number;
        export var TIZEN: number;
        export var QT5: number;
        export var WP8: number;
        export var WINRT: number;
        export var MOBILE_BROWSER: number;
        export var DESKTOP_BROWSER: number;

        export var BROWSER_TYPE_WECHAT: string;
        export var BROWSER_TYPE_ANDROID: string;
        export var BROWSER_TYPE_IE: string;
        export var BROWSER_TYPE_QQ: string;
        export var BROWSER_TYPE_MOBILE_QQ: string;
        export var BROWSER_TYPE_UC: string;
        export var BROWSER_TYPE_360: string;
        export var BROWSER_TYPE_BAIDU_APP: string;
        export var BROWSER_TYPE_BAIDU: string;
        export var BROWSER_TYPE_MAXTHON: string;
        export var BROWSER_TYPE_OPERA: string;
        export var BROWSER_TYPE_OUPENG: string;
        export var BROWSER_TYPE_MIUI: string;
        export var BROWSER_TYPE_FIREFOX: string;
        export var BROWSER_TYPE_SAFARI: string;
        export var BROWSER_TYPE_CHROME: string;
        export var BROWSER_TYPE_LIEBAO: string;
        export var BROWSER_TYPE_QZONE: string;
        export var BROWSER_TYPE_SOUGOU: string;
        export var BROWSER_TYPE_UNKNOWN: string;

        export var isNative: boolean;
        export var isMobile: boolean;

        export var platform: number;
        export var language: string;
        export var browserType: string;
        export var os: string;
        export var localStorage: Object;
        export function isObjectValid(object): boolean;
        export function dump(): void;
        export function openUrl(url: string): void;
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
        constructor(x: number, y: number, width: number, height: number);
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
        parce(xmlTxt: string): any;
        parce<T>(xmlTxt: string): T;
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

    export function $(x: string): Selector;
    export function $(x: HTMLElement): Selector;
    interface Selector {
        find(x: string): Selector;
        find(x: HTMLElement): Selector;
        hasClass(cls: string): boolean;
        addClass(cls: string): Selector;
        removeClass(cls: string): Selector;
        remove(): void;
        appendTo(x: HTMLElement): Selector;
        appendTo(x: Selector): Selector;
        prependTo(x: HTMLElement): Selector;
        prependTo(x: Selector): Selector;
        transforms(): Selector;
        position: { x: number; y: number };
        rotation: number;
        scale: { x: number; y: number };
        skew: { x: number; y: number };
        translates(x: number, y: number): Selector;
        rotate(x: number): Selector;
        resize(x: number, y: number): Selector;
        setSkew(x: number, y: number): Selector;
    }
    export module $ {
        export var pfx: string;
        export var hd: boolean;
        export var trans: string;
        export function translate(a: { x: number; y: number; }): string;
        export function rotate(a: number): string;
        export function scale(a: number): string;
        export function skew(a: number): string;
        export function findpos(obj: Element): { x: number; y: number; };
    }
    export function $new(x: string): Element;

    export var INVALID_INDEX: number;
    export var PI: number;
    export var FLT_MAX: number;
    export var FLT_MIN: number;
    export var RAD: number;
    export var DEG: number;
    export var UINT_MAX: number;
    export function swap(x: string, y: string, ref: Object): void;
    export function lerp(a: number, b: number, r: number): void;
    export function rand(): number;
    export function randomMinus1To1(): number;
    export function random0To1(): number;
    export function degreesToRadians(angle: number): number;
    export function radiansToDegrees(angle: number): number;
    export function radiansToDegress(angle: number): number;
    export var REPEAT_FOREVER: number;
    export var BLEND_SRC: number;
    export var BLEND_DST: number;
    export function nodeDrawSetup(node: Node): void;
    export function enableDefaultGLStates(): void;
    export function disableDefaultGLStates(): void;
    export function incrementGLDraws(addNumber: number): void;
    export var FLT_EPSILON: number;
    export function contentScaleFactor(): number;
    export function pointPointsToPixels(points: Point): Point;
    export function pointPixelsToPoints(pixels: Point): Point;
    export function sizePointsToPixels(sizeInPoints: Size): Size;
    export function sizePixelsToPoints(sizeInPixels: Size): Size;
    export function rectPixelsToPoints(pixel: Rect): Rect;
    export function rectPointsToPixels(point: Rect): Rect;
    export var ONE: number;
    export var ZERO: number;
    export var SRC_ALPHA: number;
    export var SRC_ALPHA_SATURATE: number;
    export var SRC_COLOR: number;
    export var DST_ALPHA: number;
    export var DST_COLOR: number;
    export var ONE_MINUS_SRC_ALPHA: number;
    export var ONE_MINUS_SRC_COLOR: number;
    export var ONE_MINUS_DST_ALPHA: number;
    export var ONE_MINUS_DST_COLOR: number;
    export var ONE_MINUS_CONSTANT_ALPHA: number;
    export var ONE_MINUS_CONSTANT_COLOR: number;
    export var LINEAR: number;
    export var REPEAT: number;
    export var CLAMP_TO_EDGE: number;
    export var MIRRORED_REPEAT: number;
    export function checkGLErrorDebug(): void;
    export var DEVICE_ORIENTATION_PORTRAIT: number;
    export var DEVICE_ORIENTATION_LANDSCAPE_LEFT: number;
    export var DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN: number;
    export var DEVICE_ORIENTATION_LANDSCAPE_RIGHT: number;
    export var DEVICE_MAX_ORIENTATIONS: number;
    export var VERTEX_ATTRIB_FLAG_NONE: number;
    export var VERTEX_ATTRIB_FLAG_POSITION: number;
    export var VERTEX_ATTRIB_FLAG_COLOR: number;
    export var VERTEX_ATTRIB_FLAG_TEX_COORDS: number;
    export var VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: number;
    export var GL_ALL: number;
    export var VERTEX_ATTRIB_POSITION: number;
    export var VERTEX_ATTRIB_COLOR: number;
    export var VERTEX_ATTRIB_TEX_COORDS: number;
    export var VERTEX_ATTRIB_MAX: number;
    export var UNIFORM_PMATRIX: number;
    export var UNIFORM_MVMATRIX: number;
    export var UNIFORM_MVPMATRIX: number;
    export var UNIFORM_TIME: number;
    export var UNIFORM_SINTIME: number;
    export var UNIFORM_COSTIME: number;
    export var UNIFORM_RANDOM01: number;
    export var UNIFORM_SAMPLER: number;
    export var UNIFORM_MAX: number;
    export var UNIFORM_COSTIME: number;
    export var UNIFORM_RANDOM01: number;
    export var UNIFORM_SAMPLER: number;
    export var UNIFORM_MAX: number;
    export var SHADER_POSITION_TEXTURECOLOR: string;
    export var SHADER_POSITION_TEXTURECOLORALPHATEST: string;
    export var SHADER_POSITION_COLOR: string;
    export var SHADER_POSITION_TEXTURE: string;
    export var SHADER_POSITION_TEXTURE_UCOLOR: string;
    export var SHADER_POSITION_TEXTUREA8COLOR: string;
    export var SHADER_POSITION_UCOLOR: string;
    export var SHADER_POSITION_LENGTHTEXTURECOLOR: string;
    export var UNIFORM_PMATRIX_S: string;
    export var UNIFORM_MVMATRIX_S: string;
    export var UNIFORM_MVPMATRIX_S: string;
    export var UNIFORM_TIME_S: string;
    export var UNIFORM_SINTIME_S: string;
    export var UNIFORM_COSTIME_S: string;
    export var UNIFORM_RANDOM01_S: string;
    export var UNIFORM_SAMPLER_S: string;
    export var UNIFORM_ALPHA_TEST_VALUE_S: string;
    export var ATTRIBUTE_NAME_COLOR: string;
    export var ATTRIBUTE_NAME_POSITION: string;
    export var ATTRIBUTE_NAME_TEX_COORD: string;
    export var ITEM_SIZE: number;
    export var CURRENT_ITEM: number;
    export var ZOOM_ACTION_TAG: number;
    export var NORMAL_TAG: number;
    export var SELECTED_TAG: number;
    export var DISABLE_TAG: number;
    export function arrayVerifyType(arr: Array<any>, type: Function): boolean;
    export function arrayRemoveObject<T>(arr: Array<T>, delObj: T): void;
    export function arrayRemoveObject(arr: Array<any>, delObj: any): void;
    export function arrayRemoveArray(arr: Array<any>, minusArr: Array<any>): void;
    export function arrayRemoveArray<T>(arr: Array<T>, minusArr: Array<T>): void;
    export function arrayAppendObjectsToIndex(arr: Array<any>, addObjs: Array<any>, index: number): Array<any>;
    export function arrayAppendObjectsToIndex<T>(arr: Array<T>, addObjs: Array<T>, index: number): Array<T>;
    export function copyArray<T>(arr: Array<T>): Array<T>;
    export function copyArray(arr: Array<any>): Array<any>;

    export class Color {
        constructor(r: number, g: number, b: number, a: number, arrayBuffer: ArrayBuffer, offset: number);
        a_undefined: number;
    }
    export function color(r: number, g: number, b: number, a: number, arrayBuffer?: ArrayBuffer, offset?: number): Color;
    export function color(r: Color): Color;
    export function color(r: String): Color;
    export function color(): Color;
    export module Color {
        export var BYTES_PER_ELEMENT: number;
    }
    export class Vertex2F {
        constructor(x: number, y: number, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module Vertex2F {
        export var BYTES_PER_ELEMENT: number;
    }
    export class Vertex3F {
        constructor(x: number, y: number, z: number, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module Vertex3F {
        export var BYTES_PER_ELEMENT: number;
    }
    export class Tex2F {
        constructor(u: number, v: number, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module Tex2F {
        export var BYTES_PER_ELEMENT: number;
    }
    export class Quad2 {
        constructor(tl: Vertex2F, tr: Vertex2F, bl: Vertex2F, br: Vertex2F, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module Quad2 {
        export var BYTES_PER_ELEMENT: number;
    }
    export class Quad3 {
        constructor(bl1: Vertex3F, br1: Vertex3F, tl1: Vertex3F, tr1: Vertex3F);
        bl: Vertex3F;
        br: Vertex3F;
        tl: Vertex3F;
        tr: Vertex3F;
    }
    export class V3F_C4B_T2F {
        constructor(vertices?: Vertex3F, colors?: Color, texCoords?: Tex2F, arrayBuffer?: ArrayBuffer, offset?: Number);
    }
    export module V3F_C4B_T2F {
        export var BYTES_PER_ELEMENT: number;
    }
    export class V3F_C4B_T2F_Quad {
        constructor(tl?: V3F_C4B_T2F, tr?: V3F_C4B_T2F, bl?: V3F_C4B_T2F, br?: V3F_C4B_T2F, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module V3F_C4B_T2F_Quad {
        export var BYTES_PER_ELEMENT: number;
    }
    export function V3F_C4B_T2F_QuadZero(): V3F_C4B_T2F_Quad;
    export function V3F_C4B_T2F_QuadCopy(sourceQuad: V3F_C4B_T2F_Quad): V3F_C4B_T2F_Quad;
    export function V3F_C4B_T2F_QuadsCopy(sourceQuads: V3F_C4B_T2F_Quad[]): V3F_C4B_T2F_Quad[];
    export class V2F_C4B_T2F {
        constructor(vertices?: Vertex2F, colors?: Color, texCoords?: Tex2F, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module V2F_C4B_T2F {
        export var BYTES_PER_ELEMENT: number;
    }
    export class V2F_C4B_T2F_Triangle {
        constructor(a?: V2F_C4B_T2F, b?: V2F_C4B_T2F, c?: V2F_C4B_T2F, arrayBuffer?: ArrayBuffer, offset?: number);
    }
    export module V2F_C4B_T2F_Triangle {
        export var BYTES_PER_ELEMENT: number;
    }
}