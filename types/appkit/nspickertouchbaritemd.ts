declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem
 */
interface NSPickerTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237194-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237195-collapsedrepresentationimage
  collapsedRepresentationImage(): cocoascript.NSImage;
  setCollapsedRepresentationImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237196-collapsedrepresentationlabel
  collapsedRepresentationLabel(): cocoascript.NSString;
  setCollapsedRepresentationLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237197-controlrepresentation
  controlRepresentation(): cocoascript.NSPickerTouchBarItemControlRepresentation;
  setControlRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237198-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3353055-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237202-numberofoptions
  numberOfOptions(): cocoascript.NSInteger;
  setNumberOfOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237205-selectedindex
  selectedIndex(): cocoascript.NSInteger;
  setSelectedIndex(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237206-selectioncolor
  selectionColor(): cocoascript.NSColor;
  setSelectionColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237207-selectionmode
  selectionMode(): cocoascript.NSPickerTouchBarItemSelectionMode;
  setSelectionMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237210-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237199-imageatindex
  imageAtIndex(index: cocoascript.NSInteger):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3353056-isenabledatindex
  isEnabledAtIndex(index: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237201-labelatindex
  labelAtIndex(index: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3353057-setenabled
  setEnabled_atIndex(enabled: cocoascript.BOOL, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237208-setimage
  setImage_atIndex(image: cocoascript.NSImage, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nspickertouchbaritem/3237209-setlabel
  setLabel_atIndex(label: cocoascript.NSString, index: cocoascript.NSInteger):void;
  // 
  alloc():cocoascript.NSPickerTouchBarItem;
  // 
  init():cocoascript.NSPickerTouchBarItem;
}
}
declare const NSPickerTouchBarItem: cocoascript.NSPickerTouchBarItem;

