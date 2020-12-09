declare namespace cocoascript {
/**
 * The interface for specifying the attributes of a drop request for a text view.
 * doc://com.apple.documentation/documentation/uikit/uitextdroprequest
 */
interface UITextDropRequest extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextdroprequest/2890859-dropposition
  dropPosition(): cocoascript.UITextPosition;
  setDropPosition(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdroprequest/2890844-sameview
  sameView(): cocoascript.BOOL;
  setSameView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdroprequest/2890845-suggestedproposal
  suggestedProposal(): cocoascript.UITextDropProposal;
  setSuggestedProposal(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdroprequest/2890853-dropsession
  dropSession(): cocoascript.UIDropSession;
  setDropSession(): void;
}
}

