declare module cc {
    export class Color {
        constructor(r: number, g: number, b: number, a: number, arrayBuffer: ArrayBuffer, offset: number);
        r: number;
        g: number;
        b: number;
        a: number;
    }
    export module Color {
        export var BYTES_PER_ELEMENT:number;
    }

    export class Vertex2F {
        constructor(x: number, y: number, arrayBuffer: ArrayBuffer, offset: number);
        x: number;
        y:number;
    }
    export module Vertex2F {
        export var BYTES_PER_ELEMENT: number;
    }

    export class Vertex3F {
        constructor(x: number, y: number, z:number, arrayBuffer: ArrayBuffer, offset: number);
        x: number;
        y: number;
        z: number;
    }
    export module Vertex3F {
        export var BYTES_PER_ELEMENT: number;
    }

    export class Tex2F {
        constructor(u: number, v: number, arrayBuffer: ArrayBuffer, offset: number);
        u: number;
        v: number;
    }
    export module Tex2F {
        export var BYTES_PER_ELEMENT: number;
    }

    export class Quad2 {
        constructor(tl: Vertex2F, tr: Vertex2F, bl: Vertex2F, br: Vertex2F, arrayBuffer: ArrayBuffer, offset: number);
        tl: Vertex2F;
        tr: Vertex2F;
        bl: Vertex2F;
        br: Vertex2F;
    }
    export module Quad2 {
        export var BYTES_PER_ELEMENT: number;
    }

    export class Quad3 {
        constructor(bl1: Vertex3F, br1: Vertex3F, tl1: Vertex3F, tr1: Vertex3F);
        tl: Vertex3F;
        tr: Vertex3F;
        bl: Vertex3F;
        br: Vertex3F;
    }
    
    export class V3F_C4B_T2F {
        constructor(vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: ArrayBuffer, offset: number);
        vertices: Vertex3F;
        colors: Color;
        texCoords: Tex2F;
    }
    export module V3F_C4B_T2F {
        export var BYTES_PER_ELEMENT: number;
    }

    export class V3F_C4B_T2F_Quad {
        constructor(tl: V3F_C4B_T2F, bl: V3F_C4B_T2F, tr: V3F_C4B_T2F, br: V3F_C4B_T2F, arrayBuffer: ArrayBuffer, offset: number);
        tl: V3F_C4B_T2F;
        bl: V3F_C4B_T2F;
        tr: V3F_C4B_T2F;
        br: V3F_C4B_T2F;
        arrayBuffer: ArrayBuffer;
    }
    export module V3F_C4B_T2F_Quad {
        export var BYTES_PER_ELEMENT: number;
    }

    export function V3F_C4B_T2F_QuadZero(): V3F_C4B_T2F_Quad;
    export function V3F_C4B_T2F_QuadCopy(sourceQuad: V3F_C4B_T2F_Quad): V3F_C4B_T2F_Quad;
    export function V3F_C4B_T2F_QuadsCopy(sourceQuad: V3F_C4B_T2F_Quad[]): V3F_C4B_T2F_Quad[];

    export class V2F_C4B_T2F {
        constructor(vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: ArrayBuffer, offset: number);
        vertices: Vertex3F;
        colors: Color;
        texCoords: Tex2F;
    }
    export module V2F_C4B_T2F {
        export var BYTES_PER_ELEMENT: number;
    }

    export class V2F_C4B_T2F_Triangle {
        constructor(a: V2F_C4B_T2F, b: V2F_C4B_T2F, c: V2F_C4B_T2F, arrayBuffer: ArrayBuffer, offset: number);
        a: V2F_C4B_T2F;
        b: V2F_C4B_T2F;
        c: V2F_C4B_T2F;
    }
    export module V2F_C4B_T2F_Triangle {
        export var BYTES_PER_ELEMENT: number;
    }
}