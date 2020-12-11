declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell
   */
  interface IKImageBrowserCell extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500044-frame
    frame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500052-imageframe
    imageFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500074-subtitleframe
    subtitleFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500069-titleframe
    titleFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500064-imagecontainerframe
    imageContainerFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500047-indexofrepresenteditem
    indexOfRepresentedItem():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500071-representeditem
    representedItem():cocoascript.IKImageBrowserCell;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500051-isselected
    isSelected():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500070-selectionframe
    selectionFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500042-imagealignment
    imageAlignment():cocoascript.NSImageAlignment;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500060-opacity
    opacity():cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500062-cellstate
    cellState():cocoascript.IKImageBrowserCellState;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500045-layerfortype
    layerForType(type: cocoascript.NSString):cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500049-imagebrowserview
    imageBrowserView():cocoascript.IKImageBrowserView;
    //
    alloc():cocoascript.IKImageBrowserCell;
    //
    init():cocoascript.IKImageBrowserCell;
  }
}

declare const IKImageBrowserCell: cocoascript.IKImageBrowserCell;
