declare namespace cocoascript {
/**
 * An interface for handling pointer movements within the interaction's view.
 * doc://com.apple.documentation/documentation/uikit/uipointerinteractiondelegate
 */
interface UIPointerInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractiondelegate/3538995-pointerinteraction
  pointerInteraction_regionForRequest_defaultRegion(interaction: cocoascript.UIPointerInteraction, request: cocoascript.UIPointerRegionRequest, defaultRegion: cocoascript.UIPointerRegion):cocoascript.UIPointerRegion;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractiondelegate/3538996-pointerinteraction
  pointerInteraction_styleForRegion(interaction: cocoascript.UIPointerInteraction, region: cocoascript.UIPointerRegion):cocoascript.UIPointerStyle;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractiondelegate/3538997-pointerinteraction
  pointerInteraction_willEnterRegion_animator(interaction: cocoascript.UIPointerInteraction, region: cocoascript.UIPointerRegion, animator: cocoascript.UIPointerInteractionAnimating):void;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractiondelegate/3538998-pointerinteraction
  pointerInteraction_willExitRegion_animator(interaction: cocoascript.UIPointerInteraction, region: cocoascript.UIPointerRegion, animator: cocoascript.UIPointerInteractionAnimating):void;
}
}

