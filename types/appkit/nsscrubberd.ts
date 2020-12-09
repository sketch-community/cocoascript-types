declare namespace cocoascript {
/**
 * A customizable item picker control for the Touch Bar. 
 * doc://com.apple.documentation/documentation/appkit/nsscrubber
 */
interface NSScrubber extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2588263-initwithframe
  initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSScrubber;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544802-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSScrubber;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544804-datasource
  dataSource(): cocoascript.NSScrubberDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544738-delegate
  delegate(): cocoascript.NSScrubberDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544773-registerclass
  registerClass_forItemIdentifier(itemViewClass: cocoascript.Class, itemIdentifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2646903-registernib
  registerNib_forItemIdentifier(nib: cocoascript.NSNib, itemIdentifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544776-makeitemwithidentifier
  makeItemWithIdentifier_owner(itemIdentifier: cocoascript.NSUserInterfaceItemIdentifier, owner: cocoascript.NSScrubber):cocoascript.NSScrubberItemView;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544850-scrubberlayout
  scrubberLayout(): cocoascript.NSScrubberLayout;
  setScrubberLayout(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544687-mode
  mode(): cocoascript.NSScrubberMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544782-itemalignment
  itemAlignment(): cocoascript.NSScrubberAlignment;
  setItemAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544694-continuous
  continuous(): cocoascript.BOOL;
  setContinuous(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544869-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544847-backgroundview
  backgroundView(): cocoascript.NSView;
  setBackgroundView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544827-showsadditionalcontentindicators
  showsAdditionalContentIndicators(): cocoascript.BOOL;
  setShowsAdditionalContentIndicators(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544865-showsarrowbuttons
  showsArrowButtons(): cocoascript.BOOL;
  setShowsArrowButtons(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2646904-floatsselectionviews
  floatsSelectionViews(): cocoascript.BOOL;
  setFloatsSelectionViews(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2588265-selectionoverlaystyle
  selectionOverlayStyle(): cocoascript.NSScrubberSelectionStyle;
  setSelectionOverlayStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2588270-selectionbackgroundstyle
  selectionBackgroundStyle(): cocoascript.NSScrubberSelectionStyle;
  setSelectionBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544712-reloaddata
  reloadData():void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544874-reloaditemsatindexes
  reloadItemsAtIndexes(indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544836-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2588262-highlightedindex
  highlightedIndex(): cocoascript.NSInteger;
  setHighlightedIndex(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2588260-selectedindex
  selectedIndex(): cocoascript.NSInteger;
  setSelectedIndex(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544867-insertitemsatindexes
  insertItemsAtIndexes(indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544864-moveitematindex
  moveItemAtIndex_toIndex(oldIndex: cocoascript.NSInteger, newIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544679-removeitemsatindexes
  removeItemsAtIndexes(indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2646906-performsequentialbatchupdates
  performSequentialBatchUpdates(updateBlock: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544724-scrollitematindex
  scrollItemAtIndex_toAlignment(index: cocoascript.NSInteger, alignment: cocoascript.NSScrubberAlignment):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubber/2544862-itemviewforitematindex
  itemViewForItemAtIndex(index: cocoascript.NSInteger):cocoascript.NSScrubberItemView;
  // 
  alloc():cocoascript.NSScrubber;
  // 
  init():cocoascript.NSScrubber;
}
}
declare const NSScrubber: cocoascript.NSScrubber;

