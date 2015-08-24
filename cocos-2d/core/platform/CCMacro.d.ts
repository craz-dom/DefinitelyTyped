///<reference path="../cocoa/CCGeometry.d.ts"/>

declare module cc {
    /**
     * @constant
     * @type Number
     */
    export var INVALID_INDEX: number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    export var PI: number;

    /**
     * @constant
     * @type Number
     */
    export var FLT_MAX: number;

    /**
     * @constant
     * @type Number
     */
    export var FLT_MIN: number;

    /**
     * @constant
     * @type Number
     */
    export var RAD: number;

    /**
     * @constant
     * @type Number
     */
    export var DEG: number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    export var UINT_MAX: number;

    /**
     * <p>
     * simple macro that swaps 2 variables<br/>
     *  modified from c++ macro, you need to pass in the x and y variables names in string, <br/>
     *  and then a reference to the whole object as third variable
     * </p>
     * @param {String} x
     * @param {String} y
     * @param {Object} ref
     * @function
     * @deprecated since v3.0
     */
    export function swap(x:string, y:string, ref: Object):void;

    /**
     * <p>
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * </p>
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6<br/>
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    export function lerp(a: number, b: number, r:number): number;

    /**
     * get a random number from 0 to 0xffffff
     * @function
     * @returns {number}
     */
    export function rand():number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    export function randomMinus1To1():number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    export function random0To1():number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function degreesToRadians(angle: number): number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function radiansToDegrees(angle: number): number;

    /**
     * @constant
     * @type Number
     */
    export var REPEAT_FOREVER: number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    export var BLEND_SRC: number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    export var BLEND_DST: number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    export function nodeDrawSetup(node: cc.Node):void;

    /**
     * <p>
     *     GL states that are enabled:<br/>
     *       - GL_TEXTURE_2D<br/>
     *       - GL_VERTEX_ARRAY<br/>
     *       - GL_TEXTURE_COORD_ARRAY<br/>
     *       - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    export function enableDefaultGLStates():void;

    /**
     * <p>
     *   Disable default GL states:<br/>
     *     - GL_TEXTURE_2D<br/>
     *     - GL_TEXTURE_COORD_ARRAY<br/>
     *     - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    export function disableDefaultGLStates(): void;
    
    /**
     * <p>
     *  Increments the GL Draws counts by one.<br/>
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
     * </p>
     * @param {Number} addNumber
     * @function
     */
    export function incrementGLDraws(addNumber:number):void;

    /**
     * @constant
     * @type Number
     */
    export var FLT_EPSILON:number;

    /**
     * <p>
     *     On Mac it returns 1;<br/>
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * </p>
     * @return {Number}
     * @function
     */
    export function contentScaleFactor(): number;

    /**
     * Converts a Point in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    export function pointPointsToPixels(points: Point):Point;

    /**
     * Converts a Point in pixels to points
     * @param {cc.Rect} pixels
     * @return {cc.Point}
     * @function
     */
    export function pointPixelsToPoints(pixels: Rect):Point;

    /**
     * Converts a Size in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    export function sizePointsToPixels(sizeInPoints: Size): Size;

    /**
     * Converts a size in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    export function sizePixelsToPoints(sizeInPixels: Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @return {cc.Rect}
     * @function
     */
    export function rectPixelsToPoints(pixel:Rect):Rect;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @return {cc.Rect}
     * @function
     */
    export function rectPointsToPixels(point: Rect): Rect;
    
    //some gl constant variable
    /**
     * @constant
     * @type Number
     */
    export var ONE: number;

    /**
     * @constant
     * @type Number
     */
    export var ZERO: number;

    /**
     * @constant
     * @type Number
     */
    export var SRC_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var SRC_ALPHA_SATURATE: number;

    /**
     * @constant
     * @type Number
     */
    export var SRC_COLOR: number;

    /**
     * @constant
     * @type Number
     */
    export var DST_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var DST_COLOR: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_SRC_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_SRC_COLOR: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_DST_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_DST_COLOR: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_CONSTANT_ALPHA: number;

    /**
     * @constant
     * @type Number
     */
    export var ONE_MINUS_CONSTANT_COLOR: number;

    /**
     * the constant variable equals gl.LINEAR for texture
     * @constant
     * @type Number
     */
    export var LINEAR: number;

    /**
     * the constant variable equals gl.REPEAT for texture
     * @constant
     * @type Number
     */
    export var REPEAT: number;

    /**
     * the constant variable equals gl.CLAMP_TO_EDGE for texture
     * @constant
     * @type Number
     */
    export var CLAMP_TO_EDGE: number;

    /**
     * the constant variable equals gl.MIRRORED_REPEAT for texture
     * @constant
     * @type Number
     */
    export var MIRRORED_REPEAT: number;

    /**
     * Check webgl error.Error will be shown in console if exists.
     * @function
     */
    export function checkGLErrorDebug();

    //Possible device orientations
    /**
     * Device oriented vertically, home button on the bottom (UIDeviceOrientationPortrait)
     * @constant
     * @type Number
     */
    export var DEVICE_ORIENTATION_PORTRAIT: number;

    /**
     * Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft)
     * @constant
     * @type Number
     */
    export var DEVICE_ORIENTATION_LANDSCAPE_LEFT: number;

    /**
     * Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown)
     * @constant
     * @type Number
     */
    export var DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN: number;
    /**
     * Device oriented horizontally, home button on the left (UIDeviceOrientationLandscapeRight)
     * @constant
     * @type Number
     */
    export var DEVICE_ORIENTATION_LANDSCAPE_RIGHT: number;

    /**
     * In browsers, we only support 2 orientations by change window size.
     * @constant
     * @type Number
     */
    export var DEVICE_MAX_ORIENTATIONS: number;


    // ------------------- vertex attrib flags -----------------------------
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_FLAG_NONE: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_FLAG_POSITION: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_FLAG_COLOR: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_FLAG_TEX_COORDS: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: number;

    /**
     * GL server side states
     * @constant
     * @type {Number}
     */
    export var GL_ALL: number;

    //-------------Vertex Attributes-----------
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_POSITION: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_COLOR: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_TEX_COORDS: number;
    /**
     * @constant
     * @type {Number}
     */
    export var VERTEX_ATTRIB_MAX: number;

    //------------Uniforms------------------
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_PMATRIX: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_MVMATRIX: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_MVPMATRIX: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_TIME: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_SINTIME: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_COSTIME: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_RANDOM01: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_SAMPLER: number;
    /**
     * @constant
     * @type {Number}
     */
    export var UNIFORM_MAX: number;

    //------------Shader Name---------------
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_TEXTURECOLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_TEXTURECOLORALPHATEST: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_COLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_TEXTURE: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_TEXTURE_UCOLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_TEXTUREA8COLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_UCOLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var SHADER_POSITION_LENGTHTEXTURECOLOR: string;

    //------------uniform names----------------
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_PMATRIX_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_MVMATRIX_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_MVPMATRIX_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_TIME_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_SINTIME_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_COSTIME_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_RANDOM01_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_SAMPLER_S: string;
    /**
     * @constant
     * @type {String}
     */
    export var UNIFORM_ALPHA_TEST_VALUE_S: string;

    //------------Attribute names--------------
    /**
     * @constant
     * @type {String}
     */
    export var ATTRIBUTE_NAME_COLOR: string;
    /**
     * @constant
     * @type {String}
     */
    export var ATTRIBUTE_NAME_POSITION: string;
    /**
     * @constant
     * @type {String}
     */
    export var ATTRIBUTE_NAME_TEX_COORD: string;


    /**
     * default size for font size
     * @constant
     * @type Number
     */
    export var ITEM_SIZE: number;

    /**
     * default tag for current item
     * @constant
     * @type Number
     */
    export var CURRENT_ITEM : number;
    /**
     * default tag for zoom action tag
     * @constant
     * @type Number
     */
    export var ZOOM_ACTION_TAG : number;
    /**
     * default tag for normal
     * @constant
     * @type Number
     */
    export var NORMAL_TAG: number;

    /**
     * default selected tag
     * @constant
     * @type Number
     */
    export var SELECTED_TAG: number;

    /**
     * default disabled tag
     * @constant
     * @type Number
     */
    export var DISABLE_TAG: number;


    // Array utils

    /**
     * Verify Array's Type
     * @param {Array} arr
     * @param {function} type
     * @return {Boolean}
     * @function
     */
    export function arrayVerifyType(arr: Array<any>, type: Function): boolean;
    export function arrayVerifyType<T>(arr: Array<T>, type: Function): boolean;

    /**
     * Searches for the first occurance of object and removes it. If object is not found the function has no effect.
     * @function
     * @param {Array} arr Source Array
     * @param {*} delObj  remove object
     */
    export function arrayRemoveObject<T>(arr: Array<T>, delObj: T): void;
    export function arrayRemoveObject(arr: Array<any>, delObj: any): void;

    /**
     * Removes from arr all values in minusArr. For each Value in minusArr, the first matching instance in arr will be removed.
     * @function
     * @param {Array} arr Source Array
     * @param {Array} minusArr minus Array
     */
    export function arrayRemoveArray<T>(arr: Array<T>, minusArr: Array<T>): void;
    export function arrayRemoveArray(arr: Array<any>, minusArr: Array<any>): void;

    /**
     * Inserts some objects at index
     * @function
     * @param {Array} arr
     * @param {Array} addObjs
     * @param {Number} index
     * @return {Array}
     */
    export function arrayAppendObjectsToIndex<T>(arr: Array<T>, addObjs: Array<T>, index: number): Array<T>;
    export function arrayAppendObjectsToIndex(arr: Array<any>, addObjs: Array<any>, index: number): Array<any>;

    /**
     * Copy an array's item to a new array (its performance is better than Array.slice)
     * @param {Array} arr
     * @return {Array}
     */
    export function copyArray(arr: Array<any>): Array<any>;
    export function copyArray<T>(arr: Array<T>): Array<T>;
}