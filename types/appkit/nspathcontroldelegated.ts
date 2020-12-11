declare namespace cocoascript {
  /**
   * A set of methods that can be implemented by the delegate of a path control object to support dragging to and from the control.
   * doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate
   */
  interface NSPathControlDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1533453-pathcontrol
    pathControl_shouldDragPathComponentCell_withPasteboard(pathControl: cocoascript.NSPathControl, pathComponentCell: cocoascript.NSPathComponentCell, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1528554-pathcontrol
    pathControl_validateDrop(pathControl: cocoascript.NSPathControl, info: cocoascript.NSDraggingInfo):cocoascript.NSDragOperation;
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1528517-pathcontrol
    pathControl_acceptDrop(pathControl: cocoascript.NSPathControl, info: cocoascript.NSDraggingInfo):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1530012-pathcontrol
    pathControl_willDisplayOpenPanel(pathControl: cocoascript.NSPathControl, openPanel: cocoascript.NSOpenPanel):void;
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1531724-pathcontrol
    pathControl_willPopUpMenu(pathControl: cocoascript.NSPathControl, menu: cocoascript.NSMenu):void;
    // doc://com.apple.documentation/documentation/appkit/nspathcontroldelegate/1526752-pathcontrol
    pathControl_shouldDragItem_withPasteboard(pathControl: cocoascript.NSPathControl, pathItem: cocoascript.NSPathControlItem, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  }
}
