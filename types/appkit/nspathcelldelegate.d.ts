declare namespace cocoascript {
  /**
   * A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to
   * doc://com.apple.documentation/documentation/appkit/nspathcelldelegate
   */
  interface NSPathCellDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspathcelldelegate/1526099-pathcell
    pathCell_willDisplayOpenPanel(pathCell: cocoascript.NSPathCell, openPanel: cocoascript.NSOpenPanel):void;
    // doc://com.apple.documentation/documentation/appkit/nspathcelldelegate/1525005-pathcell
    pathCell_willPopUpMenu(pathCell: cocoascript.NSPathCell, menu: cocoascript.NSMenu):void;
  }
}
