declare namespace cocoascript {
/**
 * An abstract class that you subclass to implement app-specific services. 
 * doc://com.apple.documentation/documentation/uikit/uiactivity
 */
interface UIActivity extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620656-activitycategory
  activityCategory(): cocoascript.UIActivityCategory;
  setActivityCategory(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620671-activitytype
  activityType(): cocoascript.UIActivityType;
  setActivityType(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620674-activitytitle
  activityTitle(): cocoascript.NSString;
  setActivityTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620658-activityimage
  activityImage(): cocoascript.UIImage;
  setActivityImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620677-canperformwithactivityitems
  canPerformWithActivityItems(activityItems: cocoascript.NSArray):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620668-preparewithactivityitems
  prepareWithActivityItems(activityItems: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620678-activityviewcontroller
  activityViewController(): cocoascript.UIViewController;
  setActivityViewController(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620659-performactivity
  performActivity():void;
  // doc://com.apple.documentation/documentation/uikit/uiactivity/1620679-activitydidfinish
  activityDidFinish(completed: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.UIActivity;
  // 
  init():cocoascript.UIActivity;
}
}
declare const UIActivity: cocoascript.UIActivity;

