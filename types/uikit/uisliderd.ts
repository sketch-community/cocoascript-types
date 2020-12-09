declare namespace cocoascript {
/**
 * A control for selecting a single value from a continuous range of values.
 * doc://com.apple.documentation/documentation/uikit/uislider
 */
interface UISlider extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uislider/1621346-value
  value(): number;
  setValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621330-setvalue
  setValue_animated(value: number, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621345-minimumvalue
  minimumValue(): number;
  setMinimumValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621341-maximumvalue
  maximumValue(): number;
  setMaximumValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621340-continuous
  continuous(): cocoascript.BOOL;
  setContinuous(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621337-minimumvalueimage
  minimumValueImage(): cocoascript.UIImage;
  setMinimumValueImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621329-maximumvalueimage
  maximumValueImage(): cocoascript.UIImage;
  setMaximumValueImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621348-minimumtracktintcolor
  minimumTrackTintColor(): cocoascript.UIColor;
  setMinimumTrackTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621339-currentminimumtrackimage
  currentMinimumTrackImage(): cocoascript.UIImage;
  setCurrentMinimumTrackImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621328-minimumtrackimageforstate
  minimumTrackImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621331-setminimumtrackimage
  setMinimumTrackImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621334-maximumtracktintcolor
  maximumTrackTintColor(): cocoascript.UIColor;
  setMaximumTrackTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621343-currentmaximumtrackimage
  currentMaximumTrackImage(): cocoascript.UIImage;
  setCurrentMaximumTrackImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621335-maximumtrackimageforstate
  maximumTrackImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621338-setmaximumtrackimage
  setMaximumTrackImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621332-thumbtintcolor
  thumbTintColor(): cocoascript.UIColor;
  setThumbTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621347-currentthumbimage
  currentThumbImage(): cocoascript.UIImage;
  setCurrentThumbImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621342-thumbimageforstate
  thumbImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621336-setthumbimage
  setThumbImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621333-maximumvalueimagerectforbounds
  maximumValueImageRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621327-minimumvalueimagerectforbounds
  minimumValueImageRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621349-trackrectforbounds
  trackRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uislider/1621344-thumbrectforbounds
  thumbRectForBounds_trackRect_value(bounds: cocoascript.CGRect, rect: cocoascript.CGRect, value: number):cocoascript.CGRect;
  // 
  alloc():cocoascript.UISlider;
  // 
  init():cocoascript.UISlider;
}
}
declare const UISlider: cocoascript.UISlider;

