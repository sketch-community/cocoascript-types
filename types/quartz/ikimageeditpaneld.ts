declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikimageeditpanel
 */
interface IKImageEditPanel extends NSPanel {
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1504436-filterarray
  filterArray(): cocoascript.NSArray;
  setFilterArray(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1503831-datasource
  dataSource(): cocoascript.IKImageEditPanelDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1503419-reloaddata
  reloadData():void;
  // 
  alloc():cocoascript.IKImageEditPanel;
  // 
  init():cocoascript.IKImageEditPanel;
}
}
declare const IKImageEditPanel: cocoascript.IKImageEditPanel;

