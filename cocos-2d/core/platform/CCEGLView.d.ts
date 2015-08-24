declare module cc {
    export var DENSITYDPI_DEVICE: string;
    export var DENSITYDPI_HIGH: string;
    export var DENSITYDPI_MEDIUM: string;
    export var DENSITYDPI_LOW: string;

    /**
     * cc.view is the singleton object which represents the game window.<br/>
     * It's main task include: <br/>
     *  - Apply the design resolution policy<br/>
     *  - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
     *  - Manage the game view port which can be different with the window<br/>
     *  - Manage the content scale and translation<br/>
     * <br/>
     * Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
     * the standard way to use it is by calling:<br/>
     *  - cc.view.methodName(); <br/>
     * @class
     * @name cc.view
     * @extend cc.Class
     */
    export class EGLView extends Class { /** @lends cc.view# */
        /**
         * Constructor of cc.EGLView
         */
        constructor();

        /**
         * <p>
         * Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
         *   1. cc.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
         *   2. cc.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
         *   3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
         *   4. cc.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
         *   5. Custom value, e.g: "480"                                                         <br/>
         * </p>
         * @param {String} densityDPI
         */
        setTargetDensityDPI(densityDPI: "device-dpi"): void;

        setTargetDensityDPI(densityDPI: "high-dpi"): void;

        setTargetDensityDPI(densityDPI: "medium-dpi"): void;

        setTargetDensityDPI(densityDPI: "low-dpi"): void;

        setTargetDensityDPI(densityDPI: string): void;


        /**
         * Returns the current target-densitydpi value of cc.view.
         * @returns {String}
         */
        getTargetDensityDPI(): string;

        /**
         * Sets whether resize canvas automatically when browser's size changed.<br/>
         * Useful only on web.
         * @param {Boolean} enabled Whether enable automatic resize with browser's resize event
         */
        resizeWithBrowserSize(enabled: boolean);

        /**
         * Sets the callback function for cc.view's resize action,<br/>
         * this callback will be invoked before applying resolution policy, <br/>
         * so you can do any additional modifications within the callback.<br/>
         * Useful only on web.
         * @param {Function|null} callback The callback function
         */
        setResizeCallback(callback: () => void);

        initialize(): void;

        /**
         * Sets whether the engine modify the "viewport" meta in your web page.<br/>
         * It's enabled by default, we strongly suggest you not to disable it.<br/>
         * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
         * Only useful on web
         * @param {Boolean} enabled Enable automatic modification to "viewport" meta
         */
        adjustViewPort(enabled: boolean): void;

        /**
         * Retina support is enabled by default for Apple device but disabled for other devices,<br/>
         * it takes effect only when you called setDesignResolutionPolicy<br/>
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable retina display
         */
        enableRetina(enabled: boolean): void;

        /**
         * Check whether retina display is enabled.<br/>
         * Only useful on web
         * @return {Boolean}
         */
        isRetinaEnabled(): boolean;

        /**
         * If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
         * You can pass true as parameter to enable it and disable it by passing false.<br/>
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable auto full screen on mobile devices
         */
        enableAutoFullScreen(enabled: boolean): void;

        /**
         * Check whether auto full screen is enabled.<br/>
         * Only useful on web
         * @return {Boolean} Auto full screen enabled or not
         */
        isAutoFullScreenEnabled(): boolean;

        /**
         * Force destroying EGL view, subclass must implement this method.
         */
        end(): void;

        /**
         * Get whether render system is ready(no matter opengl or canvas),<br/>
         * this name is for the compatibility with cocos2d-x, subclass must implement this method.
         * @return {Boolean}
         */
        isOpenGLReady(): boolean;

        /*
         * Set zoom factor for frame. This method is for debugging big resolution (e.g.new ipad) app on desktop.
         * @param {Number} zoomFactor
         */
        setFrameZoomFactor(zoomFactor: number): void;

        /**
         * Exchanges the front and back buffers, subclass must implement this method.
         */
        swapBuffers(): void;

        /**
         * Open or close IME keyboard , subclass must implement this method.
         * @param {Boolean} isOpen
         */
        setIMEKeyboardState(isOpen: boolean): void

        /**
         * Sets the resolution translate on EGLView
         * @param {Number} offsetLeft
         * @param {Number} offsetTop
         */
        setContentTranslateLeftTop(offsetLeft: number, offsetTop: number): void;

        /**
         * Returns the resolution translate on EGLView
         * @return {cc.Size|Object}
         */
        getContentTranslateLeftTop(): cc.Size;

        /**
         * Returns the frame size of the view.<br/>
         * On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
         * On web, it returns the size of the canvas's outer DOM element.
         * @return {cc.Size}
         */
        getFrameSize(): cc.Size;

        /**
         * On native, it sets the frame size of view.<br/>
         * On web, it sets the size of the canvas's outer DOM element.
         * @param {Number} width
         * @param {Number} height
         */
        setFrameSize(width: number, height: number): void;

        /**
         * Empty function
         */
        centerWindow(): void;

        /**
         * Returns the visible area size of the view port.
         * @return {cc.Size}
         */
        getVisibleSize(): cc.Size;

        /**
         * Returns the visible origin of the view port.
         * @return {cc.Point}
         */
        getVisibleOrigin(): cc.Point;

        /**
         * Returns whether developer can set content's scale factor.
         * @return {Boolean}
         */
        canSetContentScaleFactor(): boolean;

        /**
         * Returns the current resolution policy
         * @see cc.ResolutionPolicy
         * @return {cc.ResolutionPolicy}
         */
        getResolutionPolicy(): cc.ResolutionPolicy;

        /**
         * Sets the current resolution policy
         * @see cc.ResolutionPolicy
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy
         */
        setResolutionPolicy(resolutionPolicy: cc.ResolutionPolicy): void;

        setResolutionPolicy(resolutionPolicy: number): void;

        /**
         * Sets the resolution policy with designed view size in points.<br/>
         * The resolution policy include: <br/>
         * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
         * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
         * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
         * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
         * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
         * [cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
         */
        setDesignResolutionSize(width: number, height: number, resolutionPolicy: cc.ResolutionPolicy): void;

        setDesignResolutionSize(width: number, height: number, resolutionPolicy: number): void;

        /**
         * Returns the designed size for the view.
         * Default resolution size is the same as 'getFrameSize'.
         * @return {cc.Size}
         */
        getDesignResolutionSize(): cc.Size;

        /**
         * Sets view port rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w width
         * @param {Number} h height
         */
        setViewPortInPoints(x: number, y: number, w: number, h: number): void;

        /**
         * Sets Scissor rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        setScissorInPoints(x: number, y: number, w: number, h: number): void;

        /**
         * Returns whether GL_SCISSOR_TEST is enable
         * @return {Boolean}
         */
        isScissorEnabled(): boolean;

        /**
         * Returns the current scissor rectangle
         * @return {cc.Rect}
         */
        getScissorRect(): cc.Rect;

        /**
         * Sets the name of the view
         * @param {String} viewName
         */
        setViewName(viewName: string): void;

        /**
         * Returns the name of the view
         * @return {String}
         */
        getViewName(): string;

        /**
         * Returns the view port rectangle.
         * @return {cc.Rect}
         */
        getViewPortRect(): cc.Rect;

        /**
         * Returns scale factor of the horizontal direction (X axis).
         * @return {Number}
         */
        getScaleX(): number;

        /**
         * Returns scale factor of the vertical direction (Y axis).
         * @return {Number}
         */
        getScaleY(): number;

        /**
         * Returns device pixel ratio for retina display.
         * @return {Number}
         */
        getDevicePixelRatio(): number;

        /**
         * Returns the real location in view for a translation based on a related position
         * @param {Number} tx The X axis translation
         * @param {Number} ty The Y axis translation
         * @param {Object} relatedPos The related position object including "left", "top", "width", "height" informations
         * @return {cc.Point}
         */
        convertToLocationInView(tx: number, ty: number, relatedPos: { left: number;top: number;width: number;height: number; }): cc.Point;
    }

    /**
     * <p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,
     * it controls the behavior of how to scale the cc.container and cc._canvas object</p>
     *
     * @class
     * @extends cc.Class
     */
    export class ContainerStrategy extends Class /** @lends cc.ContainerStrategy# */ {
        /**
         * Manipulation before appling the strategy
         * @param {cc.view} The target view
         */
        preApply(view: cc.EGLView): void;

        /**
         * Function to apply this strategy
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         */
        apply(view: cc.EGLView, designedResolution: cc.Size): void;

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view  The target view
         */
        postApply(view: cc.EGLView): void;
    }

    /**
     * <p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
     * it controls the behavior of how to scale the scene and setup the viewport for the game</p>
     *
     * @class
     * @extends cc.Class
     */
    export class ContentStrategy extends Class/** @lends cc.ContentStrategy# */{
        preApply(view: cc.EGLView);

        /**
         * Function to apply this strategy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         * @return {object} scaleAndViewportRect
         */
        apply(view: cc.EGLView, designedResolution: cc.Size): {scale: number[];};

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view The target view
         */
        postApply(view: cc.EGLView): void;
    }

    export module ContainerStrategy {
        export var EQUAL_TO_FRAME: cc.ContainerStrategy;
        export var PROPORTION_TO_FRAME: cc.ContainerStrategy;
        export var ORIGINAL_CONTAINER: cc.ContainerStrategy;
        export var EXACT_FIT: cc.ContentStrategy;
        export var SHOW_ALL: cc.ContentStrategy;
        export var NO_BORDER: cc.ContentStrategy;
        export var FIXED_HEIGHT: cc.ContentStrategy;
        export var FIXED_WIDTH: cc.ContentStrategy;
    }
    
    /**
     * <p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
     * its main task is to maintain the compatibility with Cocos2d-x</p>
     *
     * @class
     * @extends cc.Class
     * @param {cc.ContainerStrategy} containerStg The container strategy
     * @param {cc.ContentStrategy} contentStg The content strategy
     */
    export class ResolutionPolicy extends Class/** @lends cc.ResolutionPolicy# */{
       /**
         * Constructor of cc.ResolutionPolicy
         * @param {cc.ContainerStrategy} containerStg
         * @param {cc.ContentStrategy} contentStg
         */
       constructor(containerStg: ContainerStrategy, contentStg: ContentStrategy);

        /**
         * Manipulation before applying the resolution policy
         * @param {cc.view} view The target view
         */
        preApply(view: cc.EGLView): void;

        /**
         * Function to apply this resolution policy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view The target view
         * @param {cc.Size} designedResolution The user defined design resolution
         * @return {object} An object contains the scale X/Y values and the viewport rect
         */
        apply(view: cc.EGLView, designedResolution: cc.Size) : {scale: number[]; viewport: number;};

        /**
         * Manipulation after appyling the strategy
         * @param {cc.view} view The target view
         */
        postApply(view: cc.EGLView): void;

        /**
         * Setup the container's scale strategy
         * @param {cc.ContainerStrategy} containerStg
         */
        setContainerStrategy(containerStg: cc.ContainerStrategy): void;

        /**
         * Setup the content's scale strategy
         * @param {cc.ContentStrategy} contentStg
         */
        setContentStrategycontentStg: cc.ContentStrategy): void;
    }

    export module ResolutionPolicy {
        /**
     * @memberOf cc.ResolutionPolicy#
     * @name EXACT_FIT
     * @constant
     * @type Number
     * @static
     * The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
     * Distortion can occur, and the application may appear stretched or compressed.
     */
        export var EXACT_FIT: number;

        /**
     * @memberOf cc.ResolutionPolicy#
     * @name NO_BORDER
     * @constant
     * @type Number
     * @static
     * The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
     * while maintaining the original aspect ratio of the application.
     */
        export var NO_BORDER: number;

        /**
     * @memberOf cc.ResolutionPolicy#
     * @name SHOW_ALL
     * @constant
     * @type Number
     * @static
     * The entire application is visible in the specified area without distortion while maintaining the original<br/>
     * aspect ratio of the application. Borders can appear on two sides of the application.
     */
        export var SHOW_ALL: number;

        /**
     * @memberOf cc.ResolutionPolicy#
     * @name FIXED_HEIGHT
     * @constant
     * @type Number
     * @static
     * The application takes the height of the design resolution size and modifies the width of the internal<br/>
     * canvas so that it fits the aspect ratio of the device<br/>
     * no distortion will occur however you must make sure your application works on different<br/>
     * aspect ratios
     */
        export var FIXED_HEIGHT: number;

        /**
     * @memberOf cc.ResolutionPolicy#
     * @name FIXED_WIDTH
     * @constant
     * @type Number
     * @static
     * The application takes the width of the design resolution size and modifies the height of the internal<br/>
     * canvas so that it fits the aspect ratio of the device<br/>
     * no distortion will occur however you must make sure your application works on different<br/>
     * aspect ratios
     */
        export var FIXED_WIDTH: number;

        /**
     * @memberOf cc.ResolutionPolicy#
     * @name UNKNOWN
     * @constant
     * @type Number
     * @static
     * Unknow policy
     */
        export var UNKNOWN: number;
    }
}