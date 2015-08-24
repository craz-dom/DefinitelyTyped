///<reference path="CCClass.d.ts"/>

declare module cc {
    /**
     * A SAX Parser
     * @class
     * @name cc.saxParser
     * @extends cc.Class
     */
    export class SAXParser extends cc.Class {
        /**
         * Constructor of cc.SAXParser
         */
        constructor();

       /**
         * @function
         * @param {String} xmlTxt
         * @return {Document}
         */
        parse(xmlTxt: string):Document;
    }

    /**
     *
     * cc.plistParser is a singleton object for parsing plist files
     * @class
     * @name cc.plistParser
     * @extends cc.SAXParser
     */
    export class PlistParser extends SAXParser {
        /**
         * parse a xml string as plist object.
         * @param {String} xmlTxt plist xml contents
         * @return {*} plist object
         */
        parse(xmlTxt: string): any;
    }
}