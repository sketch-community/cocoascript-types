declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/ciareahistogram
 */
interface CIAreaHistogram extends CIAreaReductionFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciareahistogram/3547092-count
  count(): cocoascript.NSInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciareahistogram/3547093-scale
  scale(): number;
  setScale(): void;
}
}

