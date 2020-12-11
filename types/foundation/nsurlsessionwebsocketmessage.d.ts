declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage
   */
  interface NSURLSessionWebSocketMessage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181191-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181194-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181195-type
    type(): cocoascript.NSURLSessionWebSocketMessageType;
    setType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181192-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSURLSessionWebSocketMessage;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181193-initwithstring
    initWithString(string: cocoascript.NSString):cocoascript.NSURLSessionWebSocketMessage;
    //
    alloc():cocoascript.NSURLSessionWebSocketMessage;
    //
    init():cocoascript.NSURLSessionWebSocketMessage;
  }
}

declare const NSURLSessionWebSocketMessage: cocoascript.NSURLSessionWebSocketMessage;
