declare namespace cocoascript {
/**
 * The set of actions to perform when swiping on rows of a table.
 * doc://com.apple.documentation/documentation/uikit/uiswipeactionsconfiguration
 */
interface UISwipeActionsConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiswipeactionsconfiguration/2902360-actions
  actions(): cocoascript.UIContextualAction;
  setActions(): void;
  // doc://com.apple.documentation/documentation/uikit/uiswipeactionsconfiguration/2902361-performsfirstactionwithfullswipe
  performsFirstActionWithFullSwipe(): cocoascript.BOOL;
  setPerformsFirstActionWithFullSwipe(): void;
  // 
  alloc():cocoascript.UISwipeActionsConfiguration;
  // 
  init():cocoascript.UISwipeActionsConfiguration;
}
}
declare const UISwipeActionsConfiguration: cocoascript.UISwipeActionsConfiguration;

