declare namespace cocoascript {
  /**
   * Your proposed solution for handling a drop in a table view.
   * doc://com.apple.documentation/documentation/uikit/uitableviewdropproposal
   */
  interface UITableViewDropProposal extends UIDropProposal {
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropproposal/2897298-initwithdropoperation
    initWithDropOperation_intent(operation: cocoascript.UIDropOperation, intent: cocoascript.UITableViewDropIntent):cocoascript.UITableViewDropProposal;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropproposal/2897495-intent
    intent(): cocoascript.UITableViewDropIntent;
    setIntent(): void;
    //
    alloc():cocoascript.UITableViewDropProposal;
    //
    init():cocoascript.UITableViewDropProposal;
  }
}

declare const UITableViewDropProposal: cocoascript.UITableViewDropProposal;
