declare namespace cocoascript {
/**
 * An interface for handling incoming Mach messages.
 * doc://com.apple.documentation/documentation/foundation/nsmachportdelegate
 */
interface NSMachPortDelegate extends NSPortDelegate {
  // doc://com.apple.documentation/documentation/foundation/nsmachportdelegate/1399509-handlemachmessage
  handleMachMessage(msg: void):void;
}
}

