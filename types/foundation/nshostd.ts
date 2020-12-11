declare namespace cocoascript {
  /**
   * A representation of an individual host on the network.
   * doc://com.apple.documentation/documentation/foundation/nshost
   */
  interface NSHost extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshost/1412418-address
    address(): cocoascript.NSString;
    setAddress(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1417599-addresses
    addresses(): cocoascript.NSString;
    setAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1416949-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1409624-localizedname
    localizedName(): cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1416026-names
    names(): cocoascript.NSString;
    setNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1414786-isequaltohost
    isEqualToHost(aHost: cocoascript.NSHost):cocoascript.BOOL;
    //
    alloc():cocoascript.NSHost;
    //
    init():cocoascript.NSHost;
  }
}

declare const NSHost: cocoascript.NSHost;
