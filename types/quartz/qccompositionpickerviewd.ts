declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qccompositionpickerview
 */
interface QCCompositionPickerView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447368-setbackgroundcolor
  setBackgroundColor(color: cocoascript.NSColor):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447383-backgroundcolor
  backgroundColor():cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447365-setdrawsbackground
  setDrawsBackground(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447373-drawsbackground
  drawsBackground():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447371-setdefaultvalue
  setDefaultValue_forInputKey(value: cocoascript.QCCompositionPickerView, key: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447344-resetdefaultinputvalues
  resetDefaultInputValues():void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447361-startanimation
  startAnimation(sender: cocoascript.QCCompositionPickerView):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447323-stopanimation
  stopAnimation(sender: cocoascript.QCCompositionPickerView):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447381-isanimating
  isAnimating():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447369-setmaxanimationframerate
  setMaxAnimationFrameRate(maxFPS: number):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447379-maxanimationframerate
  maxAnimationFrameRate():number;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447356-setshowscompositionnames
  setShowsCompositionNames(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447338-showscompositionnames
  showsCompositionNames():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447325-setdelegate
  setDelegate(delegate: cocoascript.QCCompositionPickerView):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447333-delegate
  delegate():cocoascript.QCCompositionPickerView;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447335-setcompositionsfromrepositorywit
  setCompositionsFromRepositoryWithProtocol_andAttributes(protocol: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447327-compositions
  compositions():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447340-setallowsemptyselection
  setAllowsEmptySelection(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447354-allowsemptyselection
  allowsEmptySelection():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447375-setcompositionaspectratio
  setCompositionAspectRatio(ratio: cocoascript.NSSize):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447336-compositionaspectratio
  compositionAspectRatio():cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447363-setselectedcomposition
  setSelectedComposition(composition: cocoascript.QCComposition):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447329-selectedcomposition
  selectedComposition():cocoascript.QCComposition;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447346-setnumberofcolumns
  setNumberOfColumns(columns: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447331-numberofcolumns
  numberOfColumns():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447350-setnumberofrows
  setNumberOfRows(rows: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447366-numberofrows
  numberOfRows():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerviewdidselectcompositionnotification
  QCCompositionPickerViewDidSelectCompositionNotification(): cocoascript.const;
  setQCCompositionPickerViewDidSelectCompositionNotification(): void;
  // 
  alloc():cocoascript.QCCompositionPickerView;
  // 
  init():cocoascript.QCCompositionPickerView;
}
}
declare const QCCompositionPickerView: cocoascript.QCCompositionPickerView;

