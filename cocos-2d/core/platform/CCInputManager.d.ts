declare module cc {
    /**
     * @constant
     * @type {number}
     */
    export var UIInterfaceOrientationLandscapeLeft: number;

    /**
     * @constant
     * @type {number}
     */
    export var UIInterfaceOrientationLandscapeRight: number;

    /**
     * @constant
     * @type {number}
     */
    export var UIInterfaceOrientationPortraitUpsideDown: number;

    /**
     * @constant
     * @type {number}
     */
    export var UIInterfaceOrientationPortrait: number;

    /**
     * <p>
     *  This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
     * </p>
     * @class
     * @name cc.inputManager
     */
    export class inputManager {
        /**
         * @function
         * @param {Array} touches
         */
        handleTouchesBegin(touches: cc.Touch[]): void;

        /**
         * @function
         * @param {Array} touches
         */
        handleTouchesMove(touches: cc.Touch[]): void;

        /**
         * @function
         * @param {Array} touches
         */
        handleTouchesEnd(touches: cc.Touch[]): void;

        /**
         * @function
         * @param {Array} touches
         */
        handleTouchesCancel(touches: cc.Touch[]): void;

        /**
         * @function
         * @param {Array} touches
         * @returns {Array}
         */
        getSetOfTouchesEndOrCancel(touches: cc.Touch[]): void;

        /**
         * @function
         * @param {HTMLElement} element
         * @return {Object}
         */
        getHTMLElementPosition(element: HTMLElement): { left: number;top: number;width: number;height: number };

        /**
         * @function
         * @param {cc.Touch} touch
         * @return {cc.Touch}
         */
        getPreTouch(touch: cc.Touch): cc.Touch;

        /**
         * @function
         * @param {cc.Touch} touch
         */
        setPreTouch(touch: cc.Touch): cc.Touch;

        /**
         * @function
         * @param {Number} tx
         * @param {Number} ty
         * @param {cc.Point} pos
         * @return {cc.Touch}
         */
        getTouchByXY(tx: number, ty: number, pos: cc.Point): cc.Touch;

        /**
         * @function
         * @param {cc.Point} location
         * @param {cc.Point} pos
         * @param {Number} eventType
         * @returns {cc.EventMouse}
         */
        getMouseEvent(location: cc.Point, pos: cc.Point, eventType: number): cc.EventMouse;

        /**
         * @function
         * @param {Touch} event
         * @param {cc.Point} pos
         * @return {cc.Point}
         */
        getPointByEvent(event: MouseEvent, pos: cc.Point): cc.Point;

        /**
         * @function
         * @param {Touch} event
         * @param {cc.Point} pos
         * @returns {Array}
         */
        getTouchesByEvent(event: MouseEvent, pos: cc.Point): cc.Touch[];

        /**
         * @function
         * @param {HTMLElement} element
         */
        registerSystemEvent(element: HTMLElement): void;

        /**
         * @function
         * @param {Number} dt
         */
        update(dt: number): void;

        /**
         * whether enable accelerometer event
         * @function
         * @param {Boolean} isEnable
         */
        setAccelerometerEnabled(isEnable: boolean): void;

        /**
         * set accelerometer interval value
         * @function
         * @param {Number} interval
         */
        setAccelerometerInterval(interval: number): void;

        didAccelerate(eventData: Object): void;
    }
}