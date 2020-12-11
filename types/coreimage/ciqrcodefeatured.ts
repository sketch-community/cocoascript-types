declare namespace cocoascript {
  /**
   * Information about a Quick Response code (a kind of 2D barcode) detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature
   */
  interface CIQRCodeFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438153-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438035-messagestring
    messageString(): cocoascript.NSString;
    setMessageString(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/2875553-symboldescriptor
    symbolDescriptor(): cocoascript.CIQRCodeDescriptor;
    setSymbolDescriptor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437985-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438245-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437780-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437896-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
    //
    alloc():cocoascript.CIQRCodeFeature;
    //
    init():cocoascript.CIQRCodeFeature;
  }
}

declare const CIQRCodeFeature: cocoascript.CIQRCodeFeature;
