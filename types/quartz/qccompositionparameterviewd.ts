declare namespace cocoascript {
/**
 * A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: 
 * doc://com.apple.documentation/documentation/quartz/qccompositionparameterview
 */
interface QCCompositionParameterView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503814-setcompositionrenderer
  setCompositionRenderer(renderer: cocoascript.QCCompositionRenderer):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503933-compositionrenderer
  compositionRenderer():cocoascript.QCCompositionRenderer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504339-hasparameters
  hasParameters():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504516-setdelegate
  setDelegate(delegate: cocoascript.QCCompositionParameterView):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503520-delegate
  delegate():cocoascript.QCCompositionParameterView;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504845-setdrawsbackground
  setDrawsBackground(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503491-drawsbackground
  drawsBackground():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504544-setbackgroundcolor
  setBackgroundColor(color: cocoascript.NSColor):void;
  // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503481-backgroundcolor
  backgroundColor():cocoascript.NSColor;
  // 
  alloc():cocoascript.QCCompositionParameterView;
  // 
  init():cocoascript.QCCompositionParameterView;
}
}
declare const QCCompositionParameterView: cocoascript.QCCompositionParameterView;

