declare namespace cocoascript {
  /**
   * An object wrapper, or container, for an Interface Builder nib file.
   * doc://com.apple.documentation/documentation/appkit/nsnib
   */
  interface NSNib extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsnib/1547299-initwithcontentsofurl
    initWithContentsOfURL(nibFileURL: cocoascript.NSURL):cocoascript.NSNib;
    // doc://com.apple.documentation/documentation/appkit/nsnib/1533932-initwithnibnamed
    initWithNibNamed_bundle(nibName: cocoascript.NSNibName, bundle: cocoascript.NSBundle):cocoascript.NSNib;
    // doc://com.apple.documentation/documentation/appkit/nsnib/1535865-initwithnibdata
    initWithNibData_bundle(nibData: cocoascript.NSData, bundle: cocoascript.NSBundle):cocoascript.NSNib;
    // doc://com.apple.documentation/documentation/appkit/nsnib/1547297-instantiatenibwithowner
    instantiateNibWithOwner_topLevelObjects(owner: cocoascript.NSNib, topLevelObjects: cocoascript._Null_unspecified):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsnib/1547300-instantiatenibwithexternalnameta
    instantiateNibWithExternalNameTable(externalNameTable: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsnib/1527173-instantiatewithowner
    instantiateWithOwner_topLevelObjects(owner: cocoascript.NSNib, topLevelObjects: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.NSNib;
    //
    init():cocoascript.NSNib;
  }
}

declare const NSNib: cocoascript.NSNib;
