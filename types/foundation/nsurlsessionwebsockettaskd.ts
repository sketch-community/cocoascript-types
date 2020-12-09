declare namespace cocoascript {
/**
 * A URL session task that communicates over the WebSockets protocol standard.
 * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask
 */
interface NSURLSessionWebSocketTask extends NSURLSessionTask {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181205-sendmessage
  sendMessage_completionHandler(message: cocoascript.NSURLSessionWebSocketMessage, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181204-receivemessagewithcompletionhand
  receiveMessageWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181203-maximummessagesize
  maximumMessageSize(): cocoascript.NSInteger;
  setMaximumMessageSize(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181206-sendpingwithpongreceivehandler
  sendPingWithPongReceiveHandler(pongReceiveHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181200-cancelwithclosecode
  cancelWithCloseCode_reason(closeCode: cocoascript.NSURLSessionWebSocketCloseCode, reason: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181201-closecode
  closeCode(): cocoascript.NSURLSessionWebSocketCloseCode;
  setCloseCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181202-closereason
  closeReason(): cocoascript.NSData;
  setCloseReason(): void;
  // 
  alloc():cocoascript.NSURLSessionWebSocketTask;
  // 
  init():cocoascript.NSURLSessionWebSocketTask;
}
}
declare const NSURLSessionWebSocketTask: cocoascript.NSURLSessionWebSocketTask;

