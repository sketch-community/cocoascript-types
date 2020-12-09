declare namespace cocoascript {
/**
 * The interface a net service uses to inform its delegate about the state of the service it offers.
 * doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate
 */
interface NSNetServiceDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1414277-netservicewillpublish
  netServiceWillPublish(sender: cocoascript.NSNetService):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1417101-netservice
  netService_didNotPublish(sender: cocoascript.NSNetService, errorDict: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1416802-netservicedidpublish
  netServiceDidPublish(sender: cocoascript.NSNetService):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1416022-netservicewillresolve
  netServiceWillResolve(sender: cocoascript.NSNetService):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1414161-netservice
  netService_didNotResolve(sender: cocoascript.NSNetService, errorDict: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1408457-netservicedidresolveaddress
  netServiceDidResolveAddress(sender: cocoascript.NSNetService):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1413199-netservice
  netService_didUpdateTXTRecordData(sender: cocoascript.NSNetService, data: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1409726-netservicedidstop
  netServiceDidStop(sender: cocoascript.NSNetService):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1407489-netservice
  netService_didAcceptConnectionWithInputStream_outputStream(sender: cocoascript.NSNetService, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
}
}

