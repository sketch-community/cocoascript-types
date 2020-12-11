declare namespace cocoascript {
  /**
   * A connection between two nibs.
   * doc://com.apple.documentation/documentation/appkit/nsnibconnector
   */
  interface NSNibConnector extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsnibconnector/1387482-destination
    destination(): cocoascript.id;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/appkit/nsnibconnector/1387493-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsnibconnector/1387484-source
    source(): cocoascript.id;
    setSource(): void;
    // doc://com.apple.documentation/documentation/appkit/nsnibconnector/1387491-establishconnection
    establishConnection():void;
    // doc://com.apple.documentation/documentation/appkit/nsnibconnector/1387489-replaceobject
    replaceObject_withObject(oldObject: cocoascript.NSNibConnector, newObject: cocoascript.NSNibConnector):void;
    //
    alloc():cocoascript.NSNibConnector;
    //
    init():cocoascript.NSNibConnector;
  }
}

declare const NSNibConnector: cocoascript.NSNibConnector;
