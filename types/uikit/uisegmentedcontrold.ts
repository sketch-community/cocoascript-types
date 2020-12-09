declare namespace cocoascript {
/**
 * A horizontal control that consists of multiple segments, each segment functioning as a discrete button.
 * doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol
 */
interface UISegmentedControl extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618569-initwithitems
  initWithItems(items: cocoascript.NSArray):cocoascript.UISegmentedControl;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618582-setimage
  setImage_forSegmentAtIndex(image: cocoascript.UIImage, segment: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618579-imageforsegmentatindex
  imageForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618556-settitle
  setTitle_forSegmentAtIndex(title: cocoascript.NSString, segment: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618561-titleforsegmentatindex
  titleForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618572-insertsegmentwithimage
  insertSegmentWithImage_atIndex_animated(image: cocoascript.UIImage, segment: cocoascript.NSUInteger, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618588-insertsegmentwithtitle
  insertSegmentWithTitle_atIndex_animated(title: cocoascript.NSString, segment: cocoascript.NSUInteger, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618553-numberofsegments
  numberOfSegments(): cocoascript.NSUInteger;
  setNumberOfSegments(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618557-removeallsegments
  removeAllSegments():void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618590-removesegmentatindex
  removeSegmentAtIndex_animated(segment: cocoascript.NSUInteger, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618575-selectedsegmentindex
  selectedSegmentIndex(): cocoascript.NSInteger;
  setSelectedSegmentIndex(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618586-momentary
  momentary(): cocoascript.BOOL;
  setMomentary(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618577-segmentedcontrolstyle
  segmentedControlStyle(): cocoascript.UISegmentedControlStyle;
  setSegmentedControlStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618567-setenabled
  setEnabled_forSegmentAtIndex(enabled: cocoascript.BOOL, segment: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618591-isenabledforsegmentatindex
  isEnabledForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618574-setcontentoffset
  setContentOffset_forSegmentAtIndex(offset: cocoascript.CGSize, segment: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618580-contentoffsetforsegmentatindex
  contentOffsetForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618584-setwidth
  setWidth_forSegmentAtIndex(width: cocoascript.CGFloat, segment: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618581-widthforsegmentatindex
  widthForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618578-apportionssegmentwidthsbycontent
  apportionsSegmentWidthsByContent(): cocoascript.BOOL;
  setApportionsSegmentWidthsByContent(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618583-backgroundimageforstate
  backgroundImageForState_barMetrics(state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618571-setbackgroundimage
  setBackgroundImage_forState_barMetrics(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618593-contentpositionadjustmentforsegm
  contentPositionAdjustmentForSegmentType_barMetrics(leftCenterRightOrAlone: cocoascript.UISegmentedControlSegment, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIOffset;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618555-setcontentpositionadjustment
  setContentPositionAdjustment_forSegmentType_barMetrics(adjustment: cocoascript.UIOffset, leftCenterRightOrAlone: cocoascript.UISegmentedControlSegment, barMetrics: cocoascript.UIBarMetrics):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618565-dividerimageforleftsegmentstate
  dividerImageForLeftSegmentState_rightSegmentState_barMetrics(leftState: cocoascript.UIControlState, rightState: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618558-setdividerimage
  setDividerImage_forLeftSegmentState_rightSegmentState_barMetrics(dividerImage: cocoascript.UIImage, leftState: cocoascript.UIControlState, rightState: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618566-titletextattributesforstate
  titleTextAttributesForState(state: cocoascript.UIControlState):cocoascript.UISegmentedControl;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/1618570-settitletextattributes
  setTitleTextAttributes_forState(attributes: cocoascript.UISegmentedControl, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600578-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISegmentedControl;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600579-initwithframe
  initWithFrame(frame: cocoascript.CGRect):cocoascript.UISegmentedControl;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600580-initwithframe
  initWithFrame_actions(frame: cocoascript.CGRect, actions: cocoascript.UIAction):cocoascript.UISegmentedControl;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3335209-selectedsegmenttintcolor
  selectedSegmentTintColor(): cocoascript.UIColor;
  setSelectedSegmentTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600577-actionforsegmentatindex
  actionForSegmentAtIndex(segment: cocoascript.NSUInteger):cocoascript.UIAction;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600581-insertsegmentwithaction
  insertSegmentWithAction_atIndex_animated(action: cocoascript.UIAction, segment: cocoascript.NSUInteger, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600582-segmentindexforactionidentifier
  segmentIndexForActionIdentifier(actionIdentifier: cocoascript.UIActionIdentifier):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uisegmentedcontrol/3600583-setaction
  setAction_forSegmentAtIndex(action: cocoascript.UIAction, segment: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.UISegmentedControl;
  // 
  init():cocoascript.UISegmentedControl;
}
}
declare const UISegmentedControl: cocoascript.UISegmentedControl;

