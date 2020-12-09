declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qccompositionpickerpanel
 */
interface QCCompositionPickerPanel extends NSPanel {
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerpanel/1459648-compositionpickerview
  compositionPickerView():cocoascript.QCCompositionPickerView;
  // doc://com.apple.documentation/documentation/quartz/qccompositionpickerpaneldidselectcompositionnotification
  QCCompositionPickerPanelDidSelectCompositionNotification(): cocoascript.const;
  setQCCompositionPickerPanelDidSelectCompositionNotification(): void;
  // 
  alloc():cocoascript.QCCompositionPickerPanel;
  // 
  init():cocoascript.QCCompositionPickerPanel;
}
}
declare const QCCompositionPickerPanel: cocoascript.QCCompositionPickerPanel;

