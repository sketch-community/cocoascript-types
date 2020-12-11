declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qlpreviewpanel
   */
  interface QLPreviewPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505327-currentcontroller
    currentController(): cocoascript.id;
    setCurrentController(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503825-updatecontroller
    updateController():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503465-datasource
    dataSource(): cocoascript.QLPreviewPanelDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1504075-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505151-refreshcurrentpreviewitem
    refreshCurrentPreviewItem():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503428-currentpreviewitemindex
    currentPreviewItemIndex(): cocoascript.NSInteger;
    setCurrentPreviewItemIndex(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503578-currentpreviewitem
    currentPreviewItem(): cocoascript.QLPreviewItem;
    setCurrentPreviewItem(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505195-displaystate
    displayState(): cocoascript.id;
    setDisplayState(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1504770-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503434-enterfullscreenmode
    enterFullScreenMode_withOptions(screen: cocoascript.NSScreen, options: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503669-exitfullscreenmodewithoptions
    exitFullScreenModeWithOptions(options: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503609-infullscreenmode
    inFullScreenMode(): cocoascript.BOOL;
    setInFullScreenMode(): void;
    //
    alloc():cocoascript.QLPreviewPanel;
    //
    init():cocoascript.QLPreviewPanel;
  }
}

declare const QLPreviewPanel: cocoascript.QLPreviewPanel;
