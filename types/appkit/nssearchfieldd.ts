declare namespace cocoascript {
/**
 * A text field optimized for performing text-based searches.
 * doc://com.apple.documentation/documentation/appkit/nssearchfield
 */
interface NSSearchField extends NSTextField {
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1528425-delegate
  delegate(): cocoascript.NSSearchFieldDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1529467-searchmenutemplate
  searchMenuTemplate(): cocoascript.NSMenu;
  setSearchMenuTemplate(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1529081-sendssearchstringimmediately
  sendsSearchStringImmediately(): cocoascript.BOOL;
  setSendsSearchStringImmediately(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1533976-sendswholesearchstring
  sendsWholeSearchString(): cocoascript.BOOL;
  setSendsWholeSearchString(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1531413-recentsearches
  recentSearches(): cocoascript.NSString;
  setRecentSearches(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1533938-maximumrecents
  maximumRecents(): cocoascript.NSInteger;
  setMaximumRecents(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1530035-recentsautosavename
  recentsAutosaveName(): cocoascript.NSSearchFieldRecentsAutosaveName;
  setRecentsAutosaveName(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/3634323-cancelbuttonbounds
  cancelButtonBounds(): cocoascript.NSRect;
  setCancelButtonBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/3634324-searchbuttonbounds
  searchButtonBounds(): cocoascript.NSRect;
  setSearchButtonBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/3634325-searchtextbounds
  searchTextBounds(): cocoascript.NSRect;
  setSearchTextBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1530644-centersplaceholder
  centersPlaceholder(): cocoascript.BOOL;
  setCentersPlaceholder(): void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1533921-rectforcancelbuttonwhencentered
  rectForCancelButtonWhenCentered(isCentered: cocoascript.BOOL):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1534482-rectforsearchbuttonwhencentered
  rectForSearchButtonWhenCentered(isCentered: cocoascript.BOOL):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nssearchfield/1529211-rectforsearchtextwhencentered
  rectForSearchTextWhenCentered(isCentered: cocoascript.BOOL):cocoascript.NSRect;
  // 
  alloc():cocoascript.NSSearchField;
  // 
  init():cocoascript.NSSearchField;
}
}
declare const NSSearchField: cocoascript.NSSearchField;

