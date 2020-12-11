declare namespace cocoascript {
  /**
   * A proposed configuration for the behavior of a text drop interaction.
   * doc://com.apple.documentation/documentation/uikit/uitextdropproposal
   */
  interface UITextDropProposal extends UIDropProposal {
    // doc://com.apple.documentation/documentation/uikit/uitextdropproposal/2891037-dropaction
    dropAction(): cocoascript.UITextDropAction;
    setDropAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdropproposal/2919992-dropperformer
    dropPerformer(): cocoascript.UITextDropPerformer;
    setDropPerformer(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdropproposal/2890989-dropprogressmode
    dropProgressMode(): cocoascript.UITextDropProgressMode;
    setDropProgressMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdropproposal/2891034-usefastsameviewoperations
    useFastSameViewOperations(): cocoascript.BOOL;
    setUseFastSameViewOperations(): void;
    //
    alloc():cocoascript.UITextDropProposal;
    //
    init():cocoascript.UITextDropProposal;
  }
}

declare const UITextDropProposal: cocoascript.UITextDropProposal;
