declare namespace cocoascript {
/**
 * Properties that affect the list content configuration’s image.
 * doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties
 */
interface UIListContentImageProperties extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3600558-preferredsymbolconfiguration
  preferredSymbolConfiguration(): cocoascript.UIImageSymbolConfiguration;
  setPreferredSymbolConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3600560-tintcolor
  tintColor(): cocoascript.UIColor;
  setTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3606377-tintcolortransformer
  tintColorTransformer(): cocoascript.UIConfigurationColorTransformer;
  setTintColorTransformer(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3606376-resolvedtintcolorfortintcolor
  resolvedTintColorForTintColor(tintColor: cocoascript.UIColor):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3600556-cornerradius
  cornerRadius(): cocoascript.CGFloat;
  setCornerRadius(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3600557-maximumsize
  maximumSize(): cocoascript.CGSize;
  setMaximumSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3600559-reservedlayoutsize
  reservedLayoutSize(): cocoascript.CGSize;
  setReservedLayoutSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentimageproperties/3667733-accessibilityignoresinvertcolors
  accessibilityIgnoresInvertColors(): cocoascript.BOOL;
  setAccessibilityIgnoresInvertColors(): void;
  // 
  alloc():cocoascript.UIListContentImageProperties;
  // 
  init():cocoascript.UIListContentImageProperties;
}
}
declare const UIListContentImageProperties: cocoascript.UIListContentImageProperties;

