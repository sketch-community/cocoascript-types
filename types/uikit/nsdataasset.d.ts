declare namespace cocoascript {
  /**
   * An object from a data set type stored in an asset catalog.
   * doc://com.apple.documentation/documentation/uikit/nsdataasset
   */
  interface NSDataAsset extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nsdataasset/1403439-initwithname
    initWithName(name: cocoascript.NSDataAssetName):cocoascript.NSDataAsset;
    // doc://com.apple.documentation/documentation/uikit/nsdataasset/1403436-initwithname
    initWithName_bundle(name: cocoascript.NSDataAssetName, bundle: cocoascript.NSBundle):cocoascript.NSDataAsset;
    // doc://com.apple.documentation/documentation/uikit/nsdataasset/1403437-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdataasset/1403435-name
    name(): cocoascript.NSDataAssetName;
    setName(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdataasset/1403434-typeidentifier
    typeIdentifier(): cocoascript.NSString;
    setTypeIdentifier(): void;
    //
    alloc():cocoascript.NSDataAsset;
    //
    init():cocoascript.NSDataAsset;
  }
}

declare const NSDataAsset: cocoascript.NSDataAsset;
