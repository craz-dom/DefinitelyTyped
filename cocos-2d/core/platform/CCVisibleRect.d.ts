declare module cc {
    /**
     * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
     * it should represent the same rect as cc.view.getViewportRect()
     *
     * @property {cc.Point}     topLeft         - Top left coordinate of the screen related to the game scene
     * @property {cc.Point}     topRight        - Top right coordinate of the screen related to the game scene
     * @property {cc.Point}     top             - Top center coordinate of the screen related to the game scene
     * @property {cc.Point}     bottomLeft      - Bottom left coordinate of the screen related to the game scene
     * @property {cc.Point}     bottomRight     - Bottom right coordinate of the screen related to the game scene
     * @property {cc.Point}     bottom          - Bottom center coordinate of the screen related to the game scene
     * @property {cc.Point}     center          - Center coordinate of the screen related to the game scene
     * @property {cc.Point}     left            - Left center coordinate of the screen related to the game scene
     * @property {cc.Point}     right           - Right center coordinate of the screen related to the game scene
     * @property {Number}       width           - Width of the screen
     * @property {Number}       height          - Height of the screen
     *
     * @class
     * @name cc.visibleRect
     */
    export class visibleRect {
        topLeft: cc.Point;
        topRight: cc.Point;
        top: cc.Point;
        bottomLeft: cc.Point;
        bottomRight: cc.Point;
        bottom: cc.Point;
        center: cc.Point;
        left: cc.Point;
        right: cc.Point;
        width:number;
        height: number;

        init(visibleRect: cc.Rect):void;
    }
}