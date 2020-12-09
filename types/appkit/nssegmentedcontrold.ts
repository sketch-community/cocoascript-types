declare namespace cocoascript {
/**
 * Display one or more buttons in a single horizontal group. 
 * doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol
 */
interface NSSegmentedControl extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1526285-trackingmode
  trackingMode(): cocoascript.NSSegmentSwitchTracking;
  setTrackingMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1528507-segmentstyle
  segmentStyle(): cocoascript.NSSegmentStyle;
  setSegmentStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1527451-segmentcount
  segmentCount(): cocoascript.NSInteger;
  setSegmentCount(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1524322-labelforsegment
  labelForSegment(segment: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1533073-setlabel
  setLabel_forSegment(label: cocoascript.NSString, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887107-setalignment
  setAlignment_forSegment(alignment: cocoascript.NSTextAlignment, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887114-alignmentforsegment
  alignmentForSegment(segment: cocoascript.NSInteger):cocoascript.NSTextAlignment;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1525540-setimage
  setImage_forSegment(image: cocoascript.NSImage, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1527623-imageforsegment
  imageForSegment(segment: cocoascript.NSInteger):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1532914-setimagescaling
  setImageScaling_forSegment(scaling: cocoascript.NSImageScaling, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1532175-imagescalingforsegment
  imageScalingForSegment(segment: cocoascript.NSInteger):cocoascript.NSImageScaling;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1528853-setmenu
  setMenu_forSegment(menu: cocoascript.NSMenu, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1525880-menuforsegment
  menuForSegment(segment: cocoascript.NSInteger):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887112-setshowsmenuindicator
  setShowsMenuIndicator_forSegment(showsMenuIndicator: cocoascript.BOOL, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887111-showsmenuindicatorforsegment
  showsMenuIndicatorForSegment(segment: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1534122-springloaded
  springLoaded(): cocoascript.BOOL;
  setSpringLoaded(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1534490-selectedsegment
  selectedSegment(): cocoascript.NSInteger;
  setSelectedSegment(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887105-indexofselecteditem
  indexOfSelectedItem(): cocoascript.NSInteger;
  setIndexOfSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1534016-selectsegmentwithtag
  selectSegmentWithTag(tag: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1528334-setselected
  setSelected_forSegment(selected: cocoascript.BOOL, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1525676-isselectedforsegment
  isSelectedForSegment(segment: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2561002-selectedsegmentbezelcolor
  selectedSegmentBezelColor(): cocoascript.NSColor;
  setSelectedSegmentBezelColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1529727-doublevalueforselectedsegment
  doubleValueForSelectedSegment(): number;
  setDoubleValueForSelectedSegment(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1534487-setwidth
  setWidth_forSegment(width: cocoascript.CGFloat, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1533866-widthforsegment
  widthForSegment(segment: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887109-segmentdistribution
  segmentDistribution(): cocoascript.NSSegmentDistribution;
  setSegmentDistribution(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2952062-activecompressionoptions
  activeCompressionOptions(): cocoascript.NSUserInterfaceCompressionOptions;
  setActiveCompressionOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2952064-compresswithprioritizedcompressi
  compressWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2952063-minimumsizewithprioritizedcompre
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1526417-setenabled
  setEnabled_forSegment(enabled: cocoascript.BOOL, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/1524542-isenabledforsegment
  isEnabledForSegment(segment: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887113-tagforsegment
  tagForSegment(segment: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887104-settag
  setTag_forSegment(tag: cocoascript.NSInteger, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887101-settooltip
  setToolTip_forSegment(toolTip: cocoascript.NSString, segment: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssegmentedcontrol/2887103-tooltipforsegment
  toolTipForSegment(segment: cocoascript.NSInteger):cocoascript.NSString;
  // 
  alloc():cocoascript.NSSegmentedControl;
  // 
  init():cocoascript.NSSegmentedControl;
}
}
declare const NSSegmentedControl: cocoascript.NSSegmentedControl;

