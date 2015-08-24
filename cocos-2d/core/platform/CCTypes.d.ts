declare module cc {
    /**
     * Generate a color object based on multiple forms of parameters
     * @example
     *
     * // 1. All channels seperately as parameters
     * var color1 = cc.color(255, 255, 255, 255);
     *
     * // 2. Convert a hex string to a color
     * var color2 = cc.color("#000000");
     *
     * // 3. An color object as parameter
     * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
     *
     * Alpha channel is optional. Default value is 255
     *
     * @param {Number|String|cc.Color} r
     * @param {Number} g
     * @param {Number} b
     * @param {Number} [a=255]
     * @return {cc.Color}
     */
    export function color(): IColor;
    export function color(color: IColor): IColor;
    export function color(hex: string): IColor;
    export function color(r: number, g: number, b: number, a?: number): IColor;
    

    /**
     * the device accelerometer reports values for each axis in units of g-force
     */
    export class Acceleration{
        constructor(x: number, y: number, z: number, timestamp: number);
        x: number;
        y: number;
        z: number;
        timestamp: number;
    }

    export class Vertex2F {
        constructor(x1: number, y1: number)
        x: number;
        y:number;
    }

    /**
     * Helper macro that creates an Vertex2F type composed of 2 floats: x, y
     */
    export function vertex2(x: number, y: number): Vertex2F;

    export class Vertex3F {
        constructor(x1: number, y1: number, z1: number)
        x: number;
        y: number;
        z: number;
    }

    /**
     * Helper macro that creates an Vertex3F type composed of 3 floats: x, y, z
     */
    export function vertex3(x: number, y: number, z: number): Vertex3F;

    export class Tex2F {
        constructor(u1: number, v1: number);
        u: number;
        v: number;
    }

    /**
     * Helper macro that creates an Tex2F type: A texcoord composed of 2 floats: u, y
     */
    export function tex2(u:number, v: number): Tex2F;

    export class BlendFunc {
        constructor(src1: number, dst1: number);
        src: number;
        dst: number;
    }

    export function blendFuncDisable(): BlendFunc;

    /**
     * convert a string of color for style to Color.
     * e.g. "#ff06ff"  to : cc.color(255,6,255)
     */
    export function hexToColor(hex: string): Color;

    /**
     * convert Color to a string of color for style.
     * e.g.  cc.color(255,6,255)  to : "#ff06ff"
     */
    export function colorToHex(color: Color):string;

    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_LEFT: number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_CENTER: number;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_RIGHT: number;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_TOP: number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_CENTER: number;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_BOTTOM: number;

    /**
     * Common usage:
     *
     * var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = 12;
     * ...
     *
     * OR using inline definition usefull for constructor injection
     *
     * var fontDef = new cc.FontDefinition({
     *  fontName: "Arial",
     *  fontSize: 12
     * });
     *
     *
     *
     * @class cc.FontDefinition
     * @param {Object} properties - (OPTIONAL) Allow inline FontDefinition
     * @constructor
     */
    export class FontDefinition {
        constructor(properies: FontDefinitionProperties);
    }

    export interface FontDefinitionProperties {
        fontName?: string;
        fontSize?: number;
        textAlign?: number;
        verticalAlign?: number;
        fillStyle?: Color;
        boundingWidth?: number;
        boundingHeight?: number;

        strokeEnabled?: boolean;
        strokeStyle?: Color;
        lineWidth?: number;
        lineHeight?: string;
        fontStyle?: string;
        fontWeight?: string;

        shadowEnabled?: boolean;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        shadowBlur?: number;
        shadowOpacity?: number;
    }

    export interface IColor {
        r: number;
        g: number;
        b: number;
        a?: number;
    }
}