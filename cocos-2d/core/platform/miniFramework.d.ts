declare module cc {
    export interface JQuery {
        /**
         * find and return the child wth css selector (same as jquery.find)
         * @lends cc.$#
         * @function
         * @param {HTMLElement|String} x pass in a css selector in string or the whole HTMLElement
         * @return {cc.$}
         */
        find(x: HTMLElement|string): JQuery;
        /**
         * check if a DOMNode has a specific class
         * @lends cc.$#
         * @function
         * @param {String} cls
         * @return {Boolean}
         */
        hasClass(cls:string):boolean;
        /**
         * add a class to a DOMNode, returns self to allow chaining
         * @lends cc.$#
         * @function
         * @param {String} cls
         * @return {cc.$}
         */
        addClass(cls: string): JQuery;
        /**
         * remove a specific class from a DOMNode, returns self to allow chaining
         * @lends cc.$#
         * @function
         * @param {String} cls
         * @return {cc.$}
         */
        removeClass(cls: string): JQuery;
        /**
         * detach it self from parent
         * @lends cc.$#
         * @function
         */
        remove():void;

        /**
         * add to another element as a child
         * @lends cc.$#
         * @function
         * @param {HTMLElement|cc.$} x
         * @return {cc.$}
         */
        appendTo(x: HTMLElement|JQuery):JQuery;

        /**
         * add to another element as a child and place on the top of the children list
         * @lends cc.$#
         * @function
         * @param {HTMLElement|cc.$} x
         * @return {cc.$}
         */
        prependTo(x: HTMLElement | JQuery):JQuery;

        /**
         * helper function for updating the css transform
         * @lends cc.$#
         * @function
         * @return {cc.$}
         */
        transforms(): JQuery;

       position:{x:number; y:number;};
        rotation:number;
        scale: { x: number; y: number; };
        skew: { x: number; y: number; };

        /**
         * move the element
         * @memberOf cc.$#
         * @name translates
         * @function
         * @param {Number} x in pixel
         * @param {Number} y in pixel
         * @return {cc.$}
         */
        translates(x: number, y: number): JQuery;

        /**
         * rotate the element
         * @memberOf cc.$#
         * @name rotate
         * @function
         * @param {Number} x in degrees
         * @return {cc.$}
         */
        rotate(x: number): JQuery;

        /**
         * resize the element
         * @memberOf cc.$#
         * @name resize
         * @function
         * @param {Number} x
         * @param {Number} y
         * @return {cc.$}
         */
        resize(x: number, y: number): JQuery;

        /**
         * skews the element
         * @memberOf cc.$#
         * @name setSkew
         * @function
         * @param {Number} x in degrees
         * @param {Number} y
         * @return {cc.$}
         */
        setSkew(x: number, y: number): JQuery;
    }

    export function $(x: HTMLElement|String): JQuery;

    export module $ {
        export var pfx: string;
        export var hd: boolean;
        export var trans: string;
        export function translate(a: { x: number; y: number; }): string;
        export function rotate(a: number): string;
        export function scale(a: { x: number; y: number; }): string;
        export function skew(a: { x: number; y: number; }): string;
        export function findpos(obj: HTMLElement): { x: number; y: number; };
    }

    export function $new(x: string): JQuery;
}