declare namespace cocoascript {
/**
 * An object that helps a user share data from one place to another within your app, and from your app to other apps. 
 * doc://com.apple.documentation/documentation/uikit/uipasteboard
 */
interface UIPasteboard extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622106-generalpasteboard
  generalPasteboard(): cocoascript.UIPasteboard;
  setGeneralPasteboard(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622083-name
  name(): cocoascript.UIPasteboardName;
  setName(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622103-changecount
  changeCount(): cocoascript.NSInteger;
  setChangeCount(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622096-setpersistent
  persistent(): cocoascript.BOOL;
  setPersistent(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/3621870-detectpatternsforpatterns
  detectPatternsForPatterns_completionHandler(patterns: cocoascript.UIPasteboardDetectionPattern, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/3621871-detectpatternsforpatterns
  detectPatternsForPatterns_inItemSet_completionHandler(patterns: cocoascript.UIPasteboardDetectionPattern, itemSet: cocoascript.NSIndexSet, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/3621872-detectvaluesforpatterns
  detectValuesForPatterns_completionHandler(patterns: cocoascript.UIPasteboardDetectionPattern, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/3621873-detectvaluesforpatterns
  detectValuesForPatterns_inItemSet_completionHandler(patterns: cocoascript.UIPasteboardDetectionPattern, itemSet: cocoascript.NSIndexSet, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622077-pasteboardtypes
  pasteboardTypes(): cocoascript.NSString;
  setPasteboardTypes(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622095-pasteboardtypesforitemset
  pasteboardTypesForItemSet(itemSet: cocoascript.NSIndexSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622070-containspasteboardtypes
  containsPasteboardTypes(pasteboardTypes: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622100-containspasteboardtypes
  containsPasteboardTypes_inItemSet(pasteboardTypes: cocoascript.NSString, itemSet: cocoascript.NSIndexSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622071-itemsetwithpasteboardtypes
  itemSetWithPasteboardTypes(pasteboardTypes: cocoascript.NSString):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622076-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622067-items
  items(): cocoascript.id;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622101-additems
  addItems(items: cocoascript.UIPasteboard):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1829417-setitems
  setItems_options(items: cocoascript.UIPasteboard, options: cocoascript.UIPasteboard):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622093-dataforpasteboardtype
  dataForPasteboardType(pasteboardType: cocoascript.NSString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622068-dataforpasteboardtype
  dataForPasteboardType_inItemSet(pasteboardType: cocoascript.NSString, itemSet: cocoascript.NSIndexSet):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622075-setdata
  setData_forPasteboardType(data: cocoascript.NSData, pasteboardType: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622099-valueforpasteboardtype
  valueForPasteboardType(pasteboardType: cocoascript.NSString):cocoascript.UIPasteboard;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622094-valuesforpasteboardtype
  valuesForPasteboardType_inItemSet(pasteboardType: cocoascript.NSString, itemSet: cocoascript.NSIndexSet):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622079-setvalue
  setValue_forPasteboardType(value: cocoascript.UIPasteboard, pasteboardType: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622092-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622091-strings
  strings(): cocoascript.NSString;
  setStrings(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622069-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622086-images
  images(): cocoascript.UIImage;
  setImages(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622081-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622097-urls
  URLs(): cocoascript.NSURL;
  setURLs(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622085-color
  color(): cocoascript.UIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1622078-colors
  colors(): cocoascript.UIColor;
  setColors(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1829413-hascolors
  hasColors(): cocoascript.BOOL;
  setHasColors(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1829411-hasimages
  hasImages(): cocoascript.BOOL;
  setHasImages(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1829416-hasstrings
  hasStrings(): cocoascript.BOOL;
  setHasStrings(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/1829410-hasurls
  hasURLs(): cocoascript.BOOL;
  setHasURLs(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/2882049-itemproviders
  itemProviders(): cocoascript.NSItemProvider;
  setItemProviders(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/2882050-setitemproviders
  setItemProviders_localOnly_expirationDate(itemProviders: cocoascript.NSItemProvider, localOnly: cocoascript.BOOL, expirationDate: cocoascript.NSDate):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/2882051-setobjects
  setObjects(objects: cocoascript.NSItemProviderWriting):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteboard/2882052-setobjects
  setObjects_localOnly_expirationDate(objects: cocoascript.NSItemProviderWriting, localOnly: cocoascript.BOOL, expirationDate: cocoascript.NSDate):void;
  // 
  alloc():cocoascript.UIPasteboard;
  // 
  init():cocoascript.UIPasteboard;
}
}
declare const UIPasteboard: cocoascript.UIPasteboard;

