declare namespace cocoascript {
  /**
   * The base class for controls, which are visual elements that convey a specific action or intention in response to user interactions.
   * doc://com.apple.documentation/documentation/uikit/uicontrol
   */
  interface UIControl extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618245-state
    state(): cocoascript.UIControlState;
    setState(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618217-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618203-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618231-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618249-contentverticalalignment
    contentVerticalAlignment(): cocoascript.UIControlContentVerticalAlignment;
    setContentVerticalAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618213-contenthorizontalalignment
    contentHorizontalAlignment(): cocoascript.UIControlContentHorizontalAlignment;
    setContentHorizontalAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/2866070-effectivecontenthorizontalalignm
    effectiveContentHorizontalAlignment(): cocoascript.UIControlContentHorizontalAlignment;
    setEffectiveContentHorizontalAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618259-addtarget
    addTarget_action_forControlEvents(target: cocoascript.UIControl, action: cocoascript.SEL, controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618248-removetarget
    removeTarget_action_forControlEvents(target: cocoascript.UIControl, action: cocoascript.SEL, controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618251-actionsfortarget
    actionsForTarget_forControlEvent(target: cocoascript.UIControl, controlEvent: cocoascript.UIControlEvents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618225-allcontrolevents
    allControlEvents(): cocoascript.UIControlEvents;
    setAllControlEvents(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618207-alltargets
    allTargets(): cocoascript.NSSet;
    setAllTargets(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618237-sendaction
    sendAction_to_forEvent(action: cocoascript.SEL, target: cocoascript.UIControl, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618211-sendactionsforcontrolevents
    sendActionsForControlEvents(controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618227-begintrackingwithtouch
    beginTrackingWithTouch_withEvent(touch: cocoascript.UITouch, event: cocoascript.UIEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618216-continuetrackingwithtouch
    continueTrackingWithTouch_withEvent(touch: cocoascript.UITouch, event: cocoascript.UIEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618234-endtrackingwithtouch
    endTrackingWithTouch_withEvent(touch: cocoascript.UITouch, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618219-canceltrackingwithevent
    cancelTrackingWithEvent(event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618210-tracking
    tracking(): cocoascript.BOOL;
    setTracking(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/1618229-touchinside
    touchInside(): cocoascript.BOOL;
    setTouchInside(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600490-addaction
    addAction_forControlEvents(action: cocoascript.UIAction, controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601216-contextmenuinteraction
    contextMenuInteraction_configurationForMenuAtLocation(interaction: cocoascript.UIContextMenuInteraction, location: cocoascript.CGPoint):cocoascript.UIContextMenuConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601217-contextmenuinteraction
    contextMenuInteraction_previewForDismissingMenuWithConfiguration(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601218-contextmenuinteraction
    contextMenuInteraction_previewForHighlightingMenuWithConfiguration(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601219-contextmenuinteraction
    contextMenuInteraction_willDisplayMenuForConfiguration_animator(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601220-contextmenuinteraction
    contextMenuInteraction_willEndForConfiguration_animator(interaction: cocoascript.UIContextMenuInteraction, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3656349-menuattachmentpointforconfigurat
    menuAttachmentPointForConfiguration(configuration: cocoascript.UIContextMenuConfiguration):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600495-removeaction
    removeAction_forControlEvents(action: cocoascript.UIAction, controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600496-removeactionforidentifier
    removeActionForIdentifier_forControlEvents(actionIdentifier: cocoascript.UIActionIdentifier, controlEvents: cocoascript.UIControlEvents):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600497-sendaction
    sendAction(action: cocoascript.UIAction):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600491-enumerateeventhandlers
    enumerateEventHandlers(iterator: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600492-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIControl;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600493-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UIControl;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3600494-initwithframe
    initWithFrame_primaryAction(frame: cocoascript.CGRect, primaryAction: cocoascript.UIAction):cocoascript.UIControl;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601215-contextmenuinteraction
    contextMenuInteraction(): cocoascript.UIContextMenuInteraction;
    setContextMenuInteraction(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601222-contextmenuinteractionenabled
    contextMenuInteractionEnabled(): cocoascript.BOOL;
    setContextMenuInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uicontrol/3601223-showsmenuasprimaryaction
    showsMenuAsPrimaryAction(): cocoascript.BOOL;
    setShowsMenuAsPrimaryAction(): void;
    //
    alloc():cocoascript.UIControl;
    //
    init():cocoascript.UIControl;
  }
}

declare const UIControl: cocoascript.UIControl;
