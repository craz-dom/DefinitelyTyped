declare module cc {
    /**
 * The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
 * It's invalid on safari, QQbrowser and android browser
 * @class
 * @name cc.screen
 */
    export class screen {
        /**
     * initialize
     * @function
     */
        init(): void;

        /**
     * return true if it's full now.
     * @returns {Boolean}
     */
        fullScreen(): boolean;

        /**
     * change the screen to full mode.
     * @param {Element} element
     * @param {Function} onFullScreenChange
     */
        requestFullScreen(element: Element, onFullScreenChange: () => void): any;

        /**
     * exit the full mode.
     * @return {Boolean}
     */
        exitFullScreen(): boolean;

        /**
     * Automatically request full screen with a touch/click event
     * @param {Element} element
     * @param {Function} onFullScreenChange
     */
        autoFullScreen(element: Element, onFullScreenChange: () => void);
    }
}