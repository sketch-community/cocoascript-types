declare namespace cocoascript {
/**
 * The properties you use to configure an accordion fold transition filter.
 * doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition
 */
interface CIAccordionFoldTransition extends CITransitionFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228050-bottomheight
  bottomHeight(): number;
  setBottomHeight(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228051-foldshadowamount
  foldShadowAmount(): number;
  setFoldShadowAmount(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228052-numberoffolds
  numberOfFolds(): number;
  setNumberOfFolds(): void;
}
}

