declare namespace cocoascript {
  /**
   * The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
   * doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate
   */
  interface UIContextMenuInteractionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3295937-contextmenuinteraction
    contextMenuInteraction_configurationForMenuAtLocation(interaction: cocoascript.UIContextMenuInteraction, location: cocoascript.CGPoint):cocoascript.UIContextMenuConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3295939-contextmenuinteraction
    contextMenuInteraction_previewForHighlightingMenuWithConfiguration(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3295938-contextmenuinteraction
    contextMenuInteraction_previewForDismissingMenuWithConfiguration(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3375807-contextmenuinteraction
    contextMenuInteraction_willPerformPreviewActionForMenuWithConfiguration_animator(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionCommitAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3375805-contextmenuinteraction
    contextMenuInteraction_willDisplayMenuForConfiguration_animator(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractiondelegate/3375806-contextmenuinteraction
    contextMenuInteraction_willEndForConfiguration_animator(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
  }
}
