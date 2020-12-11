declare namespace cocoascript {
  /**
   * An
   * doc://com.apple.documentation/documentation/appkit/nssegmentedcell
   */
  interface NSSegmentedCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500185-segmentcount
    segmentCount(): cocoascript.NSInteger;
    setSegmentCount(): void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500188-setselected
    setSelected_forSegment(selected: cocoascript.BOOL, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500196-selectsegmentwithtag
    selectSegmentWithTag(tag: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500190-makenextsegmentkey
    makeNextSegmentKey():void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500170-makeprevioussegmentkey
    makePreviousSegmentKey():void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500193-selectedsegment
    selectedSegment(): cocoascript.NSInteger;
    setSelectedSegment(): void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500177-isselectedforsegment
    isSelectedForSegment(segment: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500200-trackingmode
    trackingMode(): cocoascript.NSSegmentSwitchTracking;
    setTrackingMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500213-setlabel
    setLabel_forSegment(label: cocoascript.NSString, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500215-labelforsegment
    labelForSegment(segment: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500174-setimage
    setImage_forSegment(image: cocoascript.NSImage, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500204-imageforsegment
    imageForSegment(segment: cocoascript.NSInteger):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500209-setimagescaling
    setImageScaling_forSegment(scaling: cocoascript.NSImageScaling, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500217-imagescalingforsegment
    imageScalingForSegment(segment: cocoascript.NSInteger):cocoascript.NSImageScaling;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500202-setwidth
    setWidth_forSegment(width: cocoascript.CGFloat, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500211-widthforsegment
    widthForSegment(segment: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500219-setenabled
    setEnabled_forSegment(enabled: cocoascript.BOOL, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500206-isenabledforsegment
    isEnabledForSegment(segment: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500194-setmenu
    setMenu_forSegment(menu: cocoascript.NSMenu, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500175-menuforsegment
    menuForSegment(segment: cocoascript.NSInteger):cocoascript.NSMenu;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500186-settooltip
    setToolTip_forSegment(toolTip: cocoascript.NSString, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500183-tooltipforsegment
    toolTipForSegment(segment: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500181-settag
    setTag_forSegment(tag: cocoascript.NSInteger, segment: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500207-tagforsegment
    tagForSegment(segment: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500191-drawsegment
    drawSegment_inFrame_withView(segment: cocoascript.NSInteger, frame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500198-interiorbackgroundstyleforsegmen
    interiorBackgroundStyleForSegment(segment: cocoascript.NSInteger):cocoascript.NSBackgroundStyle;
    // doc://com.apple.documentation/documentation/appkit/nssegmentedcell/1500172-segmentstyle
    segmentStyle(): cocoascript.NSSegmentStyle;
    setSegmentStyle(): void;
    //
    alloc():cocoascript.NSSegmentedCell;
    //
    init():cocoascript.NSSegmentedCell;
  }
}

declare const NSSegmentedCell: cocoascript.NSSegmentedCell;
