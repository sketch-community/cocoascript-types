declare namespace cocoascript {
/**
 * An ordered list of color objects, identified by keys.
 * doc://com.apple.documentation/documentation/appkit/nscolorlist
 */
interface NSColorList extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522140-initwithname
  initWithName(name: cocoascript.NSColorListName):cocoascript.NSColorList;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522133-initwithname
  initWithName_fromFile(name: cocoascript.NSColorListName, path: cocoascript.NSString):cocoascript.NSColorList;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522127-availablecolorlists
  availableColorLists(): cocoascript.NSColorList;
  setAvailableColorLists(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522138-name
  name(): cocoascript.NSColorListName;
  setName(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522125-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522141-allkeys
  allKeys(): cocoascript.NSColorName;
  setAllKeys(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522143-colorwithkey
  colorWithKey(key: cocoascript.NSColorName):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522137-insertcolor
  insertColor_key_atIndex(color: cocoascript.NSColor, key: cocoascript.NSColorName, loc: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522123-removecolorwithkey
  removeColorWithKey(key: cocoascript.NSColorName):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522130-setcolor
  setColor_forKey(color: cocoascript.NSColor, key: cocoascript.NSColorName):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/2269695-writetourl
  writeToURL_error(url: cocoascript.NSURL, errPtr: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522132-removefile
  removeFile():void;
  // doc://com.apple.documentation/documentation/appkit/nscolorlist/1522135-writetofile
  writeToFile(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscolorlistdidchangenotification
  NSColorListDidChangeNotification(): cocoascript.NSNotificationName;
  setNSColorListDidChangeNotification(): void;
  // 
  alloc():cocoascript.NSColorList;
  // 
  init():cocoascript.NSColorList;
}
}
declare const NSColorList: cocoascript.NSColorList;

