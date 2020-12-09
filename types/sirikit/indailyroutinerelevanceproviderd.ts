declare namespace cocoascript {
/**
 * The provider class that specifies a relevant daily routine.
 * doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider
 */
interface INDailyRoutineRelevanceProvider extends INRelevanceProvider {
  // doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider/2963042-initwithsituation
  initWithSituation(situation: cocoascript.INDailyRoutineSituation):cocoascript.INDailyRoutineRelevanceProvider;
  // doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider/2963043-situation
  situation(): cocoascript.INDailyRoutineSituation;
  setSituation(): void;
  // 
  alloc():cocoascript.INDailyRoutineRelevanceProvider;
  // 
  init():cocoascript.INDailyRoutineRelevanceProvider;
}
}
declare const INDailyRoutineRelevanceProvider: cocoascript.INDailyRoutineRelevanceProvider;

