declare namespace cocoascript {
/**
 * An object that encapsulates a cell’s state. 
 * doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate
 */
interface UICellConfigurationState extends UIViewConfigurationState {
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3600400-editing
  editing(): cocoascript.BOOL;
  setEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3600402-swiped
  swiped(): cocoascript.BOOL;
  setSwiped(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3600401-expanded
  expanded(): cocoascript.BOOL;
  setExpanded(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3601198-celldragstate
  cellDragState(): cocoascript.UICellConfigurationDragState;
  setCellDragState(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3601199-celldropstate
  cellDropState(): cocoascript.UICellConfigurationDropState;
  setCellDropState(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellconfigurationstate/3672180-reordering
  reordering(): cocoascript.BOOL;
  setReordering(): void;
  // 
  alloc():cocoascript.UICellConfigurationState;
  // 
  init():cocoascript.UICellConfigurationState;
}
}
declare const UICellConfigurationState: cocoascript.UICellConfigurationState;

