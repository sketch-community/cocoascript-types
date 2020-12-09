declare namespace cocoascript {
/**
 * The properties you use to configure a PDF417 barcode generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator
 */
interface CIPDF417BarcodeGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228605-alwaysspecifycompaction
  alwaysSpecifyCompaction(): number;
  setAlwaysSpecifyCompaction(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228606-compactstyle
  compactStyle(): number;
  setCompactStyle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228607-compactionmode
  compactionMode(): number;
  setCompactionMode(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228608-correctionlevel
  correctionLevel(): number;
  setCorrectionLevel(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228609-datacolumns
  dataColumns(): number;
  setDataColumns(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228610-maxheight
  maxHeight(): number;
  setMaxHeight(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228611-maxwidth
  maxWidth(): number;
  setMaxWidth(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228612-message
  message(): cocoascript.NSData;
  setMessage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228613-minheight
  minHeight(): number;
  setMinHeight(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228614-minwidth
  minWidth(): number;
  setMinWidth(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228615-preferredaspectratio
  preferredAspectRatio(): number;
  setPreferredAspectRatio(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228616-rows
  rows(): number;
  setRows(): void;
}
}

