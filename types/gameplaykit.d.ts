declare namespace cocoascript {
  /**
   * Implement this protocol to synchronize the state of an agent with its visual representation in your game.
   * doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate
   */
  interface GKAgentDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate/1501232-agentwillupdate
    agentWillUpdate(agent: GKAgent):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate/1501131-agentdidupdate
    agentDidUpdate(agent: GKAgent):void;
  }
}
declare namespace cocoascript {
  /**
   * Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelupdate
   */
  interface GKGameModelUpdate extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelupdate/1490280-value
    value(): NSInteger;
    setValue(): void;
  }
}
declare namespace cocoascript {
  /**
   * Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelplayer
   */
  interface GKGameModelPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelplayer/1490272-playerid
    playerId(): NSInteger;
    setPlayerId(): void;
  }
}
declare namespace cocoascript {
  /**
   * Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel
   */
  interface GKGameModel extends NSCopying {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490287-players
    players(): GKGameModelPlayer;
    setPlayers(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490293-activeplayer
    activePlayer(): GKGameModelPlayer;
    setActivePlayer(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490288-gamemodelupdatesforplayer
    gameModelUpdatesForPlayer(player: GKGameModelPlayer):GKGameModelUpdate;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490281-scoreforplayer
    scoreForPlayer(player: GKGameModelPlayer):NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490286-islossforplayer
    isLossForPlayer(player: GKGameModelPlayer):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490271-iswinforplayer
    isWinForPlayer(player: GKGameModelPlayer):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490278-applygamemodelupdate
    applyGameModelUpdate(gameModelUpdate: GKGameModelUpdate):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490276-unapplygamemodelupdate
    unapplyGameModelUpdate(gameModelUpdate: GKGameModelUpdate):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490267-setgamemodel
    setGameModel(gameModel: GKGameModel):void;
  }
}
declare namespace cocoascript {
  /**
   * Identifies scene classes from other frameworks that support embedded GameplayKit information.
   * doc://com.apple.documentation/documentation/gameplaykit/gkscenerootnodetype
   */
  interface GKSceneRootNodeType extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
   * doc://com.apple.documentation/documentation/gameplaykit/gkstrategist
   */
  interface GKStrategist extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkstrategist/1501231-gamemodel
    gameModel(): GKGameModel;
    setGameModel(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstrategist/1501317-randomsource
    randomSource(): GKRandom;
    setRandomSource(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstrategist/1501118-bestmoveforactiveplayer
    bestMoveForActivePlayer():GKGameModelUpdate;
  }
}
declare namespace cocoascript {
  /**
   * A set of goals that together influence the movement of an agent.
   * doc://com.apple.documentation/documentation/gameplaykit/gkbehavior
   */
  interface GKBehavior extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388733-behaviorwithgoal
    behaviorWithGoal_weight(goal: GKGoal, weight: number):GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388725-behaviorwithgoals
    behaviorWithGoals(goals: GKGoal):GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388727-behaviorwithgoals
    behaviorWithGoals_andWeights(goals: GKGoal, weights: NSNumber):GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388712-behaviorwithweightedgoals
    behaviorWithWeightedGoals(weightedGoals: NSNumber):GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388731-setweight
    setWeight_forGoal(weight: number, goal: GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388729-weightforgoal
    weightForGoal(goal: GKGoal):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388714-removegoal
    removeGoal(goal: GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388716-removeallgoals
    removeAllGoals():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388721-goalcount
    goalCount(): NSInteger;
    setGoalCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388723-objectforkeyedsubscript
    objectForKeyedSubscript(goal: GKGoal):NSNumber;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388735-setobject
    setObject_forKeyedSubscript(weight: NSNumber, goal: GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388710-objectatindexedsubscript
    objectAtIndexedSubscript(idx: NSUInteger):GKGoal;
    //
    alloc():GKBehavior;
    //
    init():GKBehavior;
  }
}

declare const GKBehavior: cocoascript.GKBehavior;
declare namespace cocoascript {
  /**
   * The superclass for all basic randomization classes in GameplayKit.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource
   */
  interface GKRandomSource extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501135-init
    init():GKRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501128-arraybyshufflingobjectsinarray
    arrayByShufflingObjectsInArray(array: NSArray):NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501123-sharedrandom
    sharedRandom():GKRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501216-initwithcoder
    initWithCoder(aDecoder: NSCoder):GKRandomSource;
    //
    alloc():GKRandomSource;
    //
    init():GKRandomSource;
  }
}

declare const GKRandomSource: cocoascript.GKRandomSource;
declare namespace cocoascript {
  /**
   * A collection of nodes that describes the navigability of a game world and provides
   * doc://com.apple.documentation/documentation/gameplaykit/gkgraph
   */
  interface GKGraph extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501315-initwithnodes
    initWithNodes(nodes: GKGraphNode):GKGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1556415-graphwithnodes
    graphWithNodes(nodes: GKGraphNode):GKGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501040-addnodes
    addNodes(nodes: GKGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501152-connectnodetolowestcostnode
    connectNodeToLowestCostNode_bidirectional(node: GKGraphNode, bidirectional: BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501303-removenodes
    removeNodes(nodes: GKGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501223-nodes
    nodes(): GKGraphNode;
    setNodes(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501270-findpathfromnode
    findPathFromNode_toNode(startNode: GKGraphNode, endNode: GKGraphNode):GKGraphNode;
    //
    alloc():GKGraph;
    //
    init():GKGraph;
  }
}

declare const GKGraph: cocoascript.GKGraph;
declare namespace cocoascript {
  /**
   * An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
   * doc://com.apple.documentation/documentation/gameplaykit/gkentity
   */
  interface GKEntity extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501143-init
    init():GKEntity;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1571499-entity
    entity():GKEntity;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501182-components
    components(): GKComponent;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1571498-componentforclass
    componentForClass(componentClass: Class):GKComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501312-addcomponent
    addComponent(component: GKComponent):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501258-removecomponentforclass
    removeComponentForClass(componentClass: Class):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501228-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    //
    alloc():GKEntity;
    //
    init():GKEntity;
  }
}

declare const GKEntity: cocoascript.GKEntity;
declare namespace cocoascript {
  /**
   * The abstract superclass for creating objects that add specific gameplay functionality to an entity.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcomponent
   */
  interface GKComponent extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1501218-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1501250-entity
    entity(): GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1687601-didaddtoentity
    didAddToEntity():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1640914-willremovefromentity
    willRemoveFromEntity():void;
    //
    alloc():GKComponent;
    //
    init():GKComponent;
  }
}

declare const GKComponent: cocoascript.GKComponent;
declare namespace cocoascript {
  /**
   * An influence that motivates the movement of one or more agents.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgoal
   */
  interface GKGoal extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501217-goaltoseekagent
    goalToSeekAgent(agent: GKAgent):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501248-goaltofleeagent
    goalToFleeAgent(agent: GKAgent):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501070-goaltoreachtargetspeed
    goalToReachTargetSpeed(targetSpeed: number):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501052-goaltowander
    goalToWander(speed: number):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501236-goaltoavoidagents
    goalToAvoidAgents_maxPredictionTime(agents: GKAgent, maxPredictionTime: NSTimeInterval):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501098-goaltoavoidobstacles
    goalToAvoidObstacles_maxPredictionTime(obstacles: GKObstacle, maxPredictionTime: NSTimeInterval):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501219-goaltointerceptagent
    goalToInterceptAgent_maxPredictionTime(target: GKAgent, maxPredictionTime: NSTimeInterval):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501049-goaltoseparatefromagents
    goalToSeparateFromAgents_maxDistance_maxAngle(agents: GKAgent, maxDistance: number, maxAngle: number):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501134-goaltoalignwithagents
    goalToAlignWithAgents_maxDistance_maxAngle(agents: GKAgent, maxDistance: number, maxAngle: number):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501170-goaltocoherewithagents
    goalToCohereWithAgents_maxDistance_maxAngle(agents: GKAgent, maxDistance: number, maxAngle: number):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501166-goaltostayonpath
    goalToStayOnPath_maxPredictionTime(path: GKPath, maxPredictionTime: NSTimeInterval):GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501095-goaltofollowpath
    goalToFollowPath_maxPredictionTime_forward(path: GKPath, maxPredictionTime: NSTimeInterval, forward: BOOL):GKGoal;
    //
    alloc():GKGoal;
    //
    init():GKGoal;
  }
}

declare const GKGoal: cocoascript.GKGoal;
declare namespace cocoascript {
  /**
   * A container for associating GameplayKit objects with a SpriteKit scene.
   * doc://com.apple.documentation/documentation/gameplaykit/gkscene
   */
  interface GKScene extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640935-scenewithfilenamed
    sceneWithFileNamed(filename: string | cocoascript.NSString):GKScene;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640947-rootnode
    rootNode(): GKSceneRootNodeType;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640795-entities
    entities(): GKEntity;
    setEntities(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640954-addentity
    addEntity(entity: GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640686-removeentity
    removeEntity(entity: GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640940-graphs
    graphs(): GKGraph;
    setGraphs(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640663-removegraph
    removeGraph(name: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/2873253-scenewithfilenamed
    sceneWithFileNamed_rootNode(filename: string | cocoascript.NSString, rootNode: GKSceneRootNodeType):GKScene;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/2143063-addgraph
    addGraph_name(graph: GKGraph, name: string | cocoascript.NSString):void;
    //
    alloc():GKScene;
    //
    init():GKScene;
  }
}

declare const GKScene: cocoascript.GKScene;
declare namespace cocoascript {
  /**
   * A single node in a navigation graph for use in pathfinding.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode
   */
  interface GKGraphNode extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427535-connectednodes
    connectedNodes(): GKGraphNode;
    setConnectedNodes(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427554-addconnectionstonodes
    addConnectionsToNodes_bidirectional(nodes: GKGraphNode, bidirectional: BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427548-removeconnectionstonodes
    removeConnectionsToNodes_bidirectional(nodes: GKGraphNode, bidirectional: BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427531-costtonode
    costToNode(node: GKGraphNode):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427556-estimatedcosttonode
    estimatedCostToNode(node: GKGraphNode):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427544-findpathtonode
    findPathToNode(goalNode: GKGraphNode):GKGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427552-findpathfromnode
    findPathFromNode(startNode: GKGraphNode):GKGraphNode;
    //
    alloc():GKGraphNode;
    //
    init():GKGraphNode;
  }
}

declare const GKGraphNode: cocoascript.GKGraphNode;
declare namespace cocoascript {
  /**
   * A polygon-shaped impassable area in a 2D game world.
   * doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle
   */
  interface GKPolygonObstacle extends GKObstacle {
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1501100-initwithpoints
    initWithPoints_count(points: vector_float2, numPoints: any):GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1525962-obstaclewithpoints
    obstacleWithPoints_count(points: vector_float2, numPoints: any):GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1501150-vertexcount
    vertexCount(): NSUInteger;
    setVertexCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1501068-vertexatindex
    vertexAtIndex(index: NSUInteger):vector_float2;
    //
    alloc():GKPolygonObstacle;
    //
    init():GKPolygonObstacle;
  }
}

declare const GKPolygonObstacle: cocoascript.GKPolygonObstacle;
declare namespace cocoascript {
  /**
   * An agent that operates in a two-dimensional space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkagent2d
   */
  interface GKAgent2D extends GKAgent {
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501043-position
    position(): vector_float2;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501045-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501242-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501186-velocity
    velocity(): vector_float2;
    setVelocity(): void;
    //
    alloc():GKAgent2D;
    //
    init():GKAgent2D;
  }
}

declare const GKAgent2D: cocoascript.GKAgent2D;
declare namespace cocoascript {
  /**
   * A component that moves a game entity according to a set of goals and realistic constraints.
   * doc://com.apple.documentation/documentation/gameplaykit/gkagent
   */
  interface GKAgent extends GKComponent {
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501272-behavior
    behavior(): GKBehavior;
    setBehavior(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501080-mass
    mass(): number;
    setMass(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501224-maxacceleration
    maxAcceleration(): number;
    setMaxAcceleration(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501323-maxspeed
    maxSpeed(): number;
    setMaxSpeed(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501066-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501215-delegate
    delegate(): GKAgentDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501038-speed
    speed(): number;
    setSpeed(): void;
    //
    alloc():GKAgent;
    //
    init():GKAgent;
  }
}

declare const GKAgent: cocoascript.GKAgent;
declare namespace cocoascript {
  /**
   * A data structure that models a set of specific questions, their possible answers, and the actions that follow from a series of answers.
   * doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree
   */
  interface GKDecisionTree extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640933-initwithattribute
    initWithAttribute(attribute: NSObject):GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640655-rootnode
    rootNode(): GKDecisionNode;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640769-initwithexamples
    initWithExamples_actions_attributes(examples: NSObject, actions: NSObject, attributes: NSObject):GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640891-findactionforanswers
    findActionForAnswers(answers: NSObject):NSObject;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640654-randomsource
    randomSource(): GKRandomSource;
    setRandomSource(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/2865877-initwithurl
    initWithURL_error(url: NSURL, error: NSError):GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/2865878-exporttourl
    exportToURL_error(url: NSURL, error: NSError):BOOL;
    //
    alloc():GKDecisionTree;
    //
    init():GKDecisionTree;
  }
}

declare const GKDecisionTree: cocoascript.GKDecisionTree;
declare namespace cocoascript {
  /**
   * An agent that operates in a three-dimensional space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkagent3d
   */
  interface GKAgent3D extends GKAgent {
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640702-position
    position(): vector_float3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640665-rotation
    rotation(): matrix_float3x3;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640645-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640961-velocity
    velocity(): vector_float3;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/2143064-righthanded
    rightHanded(): BOOL;
    setRightHanded(): void;
    //
    alloc():GKAgent3D;
    //
    init():GKAgent3D;
  }
}

declare const GKAgent3D: cocoascript.GKAgent3D;
declare namespace cocoascript {
  /**
   * A component that manages a SpriteKit node.
   * doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent
   */
  interface GKSKNodeComponent extends GKComponent {
    // doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent/1640983-componentwithnode
    componentWithNode(node: SKNode):GKSKNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent/1640693-initwithnode
    initWithNode(node: SKNode):GKSKNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent/1640728-node
    node(): SKNode;
    setNode(): void;
    //
    alloc():GKSKNodeComponent;
    //
    init():GKSKNodeComponent;
  }
}

declare const GKSKNodeComponent: cocoascript.GKSKNodeComponent;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent
   */
  interface GKSCNNodeComponent extends GKComponent {
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873248-initwithnode
    initWithNode(node: any):GKSCNNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873245-node
    node(): any;
    setNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873247-componentwithnode
    componentWithNode(node: any):GKSCNNodeComponent;
    //
    alloc():GKSCNNodeComponent;
    //
    init():GKSCNNodeComponent;
  }
}

declare const GKSCNNodeComponent: cocoascript.GKSCNNodeComponent;
declare namespace cocoascript {
  /**
   * A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior
   */
  interface GKCompositeBehavior extends GKBehavior {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640636-behaviorwithbehaviors
    behaviorWithBehaviors(behaviors: GKBehavior):GKCompositeBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640948-behaviorwithbehaviors
    behaviorWithBehaviors_andWeights(behaviors: GKBehavior, weights: NSNumber):GKCompositeBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640713-setweight
    setWeight_forBehavior(weight: number, behavior: GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640732-weightforbehavior
    weightForBehavior(behavior: GKBehavior):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640706-removebehavior
    removeBehavior(behavior: GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640639-removeallbehaviors
    removeAllBehaviors():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640881-behaviorcount
    behaviorCount(): NSInteger;
    setBehaviorCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640719-objectforkeyedsubscript
    objectForKeyedSubscript(behavior: GKBehavior):NSNumber;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1646643-setobject
    setObject_forKeyedSubscript(weight: NSNumber, behavior: GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640637-objectatindexedsubscript
    objectAtIndexedSubscript(idx: NSUInteger):GKBehavior;
    //
    alloc():GKCompositeBehavior;
    //
    init():GKCompositeBehavior;
  }
}

declare const GKCompositeBehavior: cocoascript.GKCompositeBehavior;
declare namespace cocoascript {
  /**
   * A polygonal path that can be followed by an agent.
   * doc://com.apple.documentation/documentation/gameplaykit/gkpath
   */
  interface GKPath extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501048-initwithpoints
    initWithPoints_count_radius_cyclical(points: vector_float2, count: any, radius: number, cyclical: BOOL):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1574695-pathwithpoints
    pathWithPoints_count_radius_cyclical(points: vector_float2, count: any, radius: number, cyclical: BOOL):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778297-initwithfloat3points
    initWithFloat3Points_count_radius_cyclical(points: vector_float3, count: any, radius: number, cyclical: BOOL):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1779559-pathwithfloat3points
    pathWithFloat3Points_count_radius_cyclical(points: vector_float3, count: any, radius: number, cyclical: BOOL):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501138-initwithgraphnodes
    initWithGraphNodes_radius(graphNodes: GKGraphNode, radius: number):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1574696-pathwithgraphnodes
    pathWithGraphNodes_radius(graphNodes: GKGraphNode, radius: number):GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501281-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501244-cyclical
    cyclical(): BOOL;
    setCyclical(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501071-numpoints
    numPoints(): NSUInteger;
    setNumPoints(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778285-float2atindex
    float2AtIndex(index: NSUInteger):vector_float2;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778310-float3atindex
    float3AtIndex(index: NSUInteger):vector_float3;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501172-pointatindex
    pointAtIndex(index: NSUInteger):vector_float2;
    //
    alloc():GKPath;
    //
    init():GKPath;
  }
}

declare const GKPath: cocoascript.GKPath;
declare namespace cocoascript {
  /**
   * An AI that chooses moves in turn-based games using a
   * doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist
   */
  interface GKMinmaxStrategist extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist/1501226-maxlookaheaddepth
    maxLookAheadDepth(): NSInteger;
    setMaxLookAheadDepth(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist/1501137-bestmoveforplayer
    bestMoveForPlayer(player: GKGameModelPlayer):GKGameModelUpdate;
    // doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist/1501140-randommoveforplayer
    randomMoveForPlayer_fromNumberOfBestMoves(player: GKGameModelPlayer, numMovesToConsider: NSInteger):GKGameModelUpdate;
    //
    alloc():GKMinmaxStrategist;
    //
    init():GKMinmaxStrategist;
  }
}

declare const GKMinmaxStrategist: cocoascript.GKMinmaxStrategist;
declare namespace cocoascript {
  /**
   * An AI that chooses moves in turn-based games using a
   * doc://com.apple.documentation/documentation/gameplaykit/gkmontecarlostrategist
   */
  interface GKMonteCarloStrategist extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkmontecarlostrategist/1640936-budget
    budget(): NSUInteger;
    setBudget(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmontecarlostrategist/1640679-explorationparameter
    explorationParameter(): NSUInteger;
    setExplorationParameter(): void;
    //
    alloc():GKMonteCarloStrategist;
    //
    init():GKMonteCarloStrategist;
  }
}

declare const GKMonteCarloStrategist: cocoascript.GKMonteCarloStrategist;
declare namespace cocoascript {
  /**
   * A generator for random numbers that fall within a specific range and that exhibit a specific distribution over multiple samplings.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution
   */
  interface GKRandomDistribution extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495632-initwithrandomsource
    initWithRandomSource_lowestValue_highestValue(source: GKRandom, lowestInclusive: NSInteger, highestInclusive: NSInteger):GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495636-distributionwithlowestvalue
    distributionWithLowestValue_highestValue(lowestInclusive: NSInteger, highestInclusive: NSInteger):GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495634-d6
    d6():GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495649-d20
    d20():GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495651-distributionfordiewithsidecount
    distributionForDieWithSideCount(sideCount: NSInteger):GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495635-nextint
    nextInt():NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495638-nextintwithupperbound
    nextIntWithUpperBound(upperBound: NSUInteger):NSUInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495645-nextuniform
    nextUniform():number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495624-nextbool
    nextBool():BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495648-lowestvalue
    lowestValue(): NSInteger;
    setLowestValue(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495640-highestvalue
    highestValue(): NSInteger;
    setHighestValue(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495646-numberofpossibleoutcomes
    numberOfPossibleOutcomes(): NSUInteger;
    setNumberOfPossibleOutcomes(): void;
    //
    alloc():GKRandomDistribution;
    //
    init():GKRandomDistribution;
  }
}

declare const GKRandomDistribution: cocoascript.GKRandomDistribution;
declare namespace cocoascript {
  /**
   * A basic random number generator implementing the ARC4 algorithm, which is suitable for most gameplay mechanics.
   * doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource
   */
  interface GKARC4RandomSource extends GKRandomSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501230-init
    init():GKARC4RandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501056-initwithseed
    initWithSeed(seed: NSData):GKARC4RandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501260-seed
    seed(): NSData;
    setSeed(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501132-dropvalueswithcount
    dropValuesWithCount(count: NSUInteger):void;
    //
    alloc():GKARC4RandomSource;
    //
    init():GKARC4RandomSource;
  }
}

declare const GKARC4RandomSource: cocoascript.GKARC4RandomSource;
declare namespace cocoascript {
  /**
   * A basic random number generator implementing the linear congruential generator algorithm, which is faster but less random than the default random source.
   * doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource
   */
  interface GKLinearCongruentialRandomSource extends GKRandomSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource/1501074-init
    init():GKLinearCongruentialRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource/1501164-initwithseed
    initWithSeed(seed: number):GKLinearCongruentialRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource/1501103-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():GKLinearCongruentialRandomSource;
    //
    init():GKLinearCongruentialRandomSource;
  }
}

declare const GKLinearCongruentialRandomSource: cocoascript.GKLinearCongruentialRandomSource;
declare namespace cocoascript {
  /**
   * A basic random number generator implementing the Mersenne Twister algorithm, which is more random, but slower than the default random source.
   * doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource
   */
  interface GKMersenneTwisterRandomSource extends GKRandomSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource/1501116-init
    init():GKMersenneTwisterRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource/1501253-initwithseed
    initWithSeed(seed: number):GKMersenneTwisterRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource/1501279-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():GKMersenneTwisterRandomSource;
    //
    init():GKMersenneTwisterRandomSource;
  }
}

declare const GKMersenneTwisterRandomSource: cocoascript.GKMersenneTwisterRandomSource;
declare namespace cocoascript {
  /**
   * The common interface for all randomization classes in (or usable with) GameplayKit.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrandom
   */
  interface GKRandom {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501054-nextint
    nextInt():NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501188-nextintwithupperbound
    nextIntWithUpperBound(upperBound: NSUInteger):NSUInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501036-nextuniform
    nextUniform():number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501085-nextbool
    nextBool():BOOL;
  }
}
declare namespace cocoascript {
  /**
   * A generator for random numbers that follow a
   * doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution
   */
  interface GKGaussianDistribution extends GKRandomDistribution {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495653-initwithrandomsource
    initWithRandomSource_lowestValue_highestValue(source: GKRandom, lowestInclusive: NSInteger, highestInclusive: NSInteger):GKGaussianDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495628-initwithrandomsource
    initWithRandomSource_mean_deviation(source: GKRandom, mean: number, deviation: number):GKGaussianDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495644-mean
    mean(): number;
    setMean(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495623-deviation
    deviation(): number;
    setDeviation(): void;
    //
    alloc():GKGaussianDistribution;
    //
    init():GKGaussianDistribution;
  }
}

declare const GKGaussianDistribution: cocoascript.GKGaussianDistribution;
declare namespace cocoascript {
  /**
   * A generator for random numbers that are uniformly distributed across many samplings, but where short sequences of similar values are unlikely.
   * doc://com.apple.documentation/documentation/gameplaykit/gkshuffleddistribution
   */
  interface GKShuffledDistribution extends GKRandomDistribution {
    //
    alloc():GKShuffledDistribution;
    //
    init():GKShuffledDistribution;
  }
}

declare const GKShuffledDistribution: cocoascript.GKShuffledDistribution;
declare namespace cocoascript {
  /**
   * A navigation graph for 2D game worlds where movement is constrained to an integer grid.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph
   */
  interface GKGridGraph extends GKGraph {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1640883-initfromgridstartingat
    initFromGridStartingAt_width_height_diagonalsAllowed_nodeClass(position: vector_int2, width: number, height: number, diagonalsAllowed: BOOL, nodeClass: Class):GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1644761-graphfromgridstartingat
    graphFromGridStartingAt_width_height_diagonalsAllowed_nodeClass(position: vector_int2, width: number, height: number, diagonalsAllowed: BOOL, nodeClass: Class):GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501289-initfromgridstartingat
    initFromGridStartingAt_width_height_diagonalsAllowed(position: vector_int2, width: number, height: number, diagonalsAllowed: BOOL):GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1556416-graphfromgridstartingat
    graphFromGridStartingAt_width_height_diagonalsAllowed(position: vector_int2, width: number, height: number, diagonalsAllowed: BOOL):GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501287-nodeatgridposition
    nodeAtGridPosition(position: vector_int2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501192-connectnodetoadjacentnodes
    connectNodeToAdjacentNodes(node: GKGridGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501179-diagonalsallowed
    diagonalsAllowed(): BOOL;
    setDiagonalsAllowed(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501194-gridorigin
    gridOrigin(): vector_int2;
    setGridOrigin(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501291-gridwidth
    gridWidth(): NSUInteger;
    setGridWidth(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501184-gridheight
    gridHeight(): NSUInteger;
    setGridHeight(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1640837-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: NSUInteger):Class;
    //
    alloc():GKGridGraph;
    //
    init():GKGridGraph;
  }
}

declare const GKGridGraph: cocoascript.GKGridGraph;
declare namespace cocoascript {
  /**
   * A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
   * doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph
   */
  interface GKObstacleGraph extends GKGraph {
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1640694-initwithobstacles
    initWithObstacles_bufferRadius_nodeClass(obstacles: GKPolygonObstacle, bufferRadius: number, nodeClass: Class):GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1644731-graphwithobstacles
    graphWithObstacles_bufferRadius_nodeClass(obstacles: GKPolygonObstacle, bufferRadius: number, nodeClass: Class):GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501299-initwithobstacles
    initWithObstacles_bufferRadius(obstacles: GKPolygonObstacle, bufferRadius: number):GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1556417-graphwithobstacles
    graphWithObstacles_bufferRadius(obstacles: GKPolygonObstacle, bufferRadius: number):GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501213-obstacles
    obstacles(): GKPolygonObstacle;
    setObstacles(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501073-addobstacles
    addObstacles(obstacles: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501058-removeobstacles
    removeObstacles(obstacles: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501297-removeallobstacles
    removeAllObstacles():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501285-nodesforobstacle
    nodesForObstacle(obstacle: GKPolygonObstacle):NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501129-connectnodeusingobstacles
    connectNodeUsingObstacles(node: NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501075-connectnodeusingobstacles
    connectNodeUsingObstacles_ignoringObstacles(node: NodeType, obstaclesToIgnore: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501220-connectnodeusingobstacles
    connectNodeUsingObstacles_ignoringBufferRadiusOfObstacles(node: NodeType, obstaclesBufferRadiusToIgnore: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501119-bufferradius
    bufferRadius(): number;
    setBufferRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501060-lockconnectionfromnode
    lockConnectionFromNode_toNode(startNode: NodeType, endNode: NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501093-unlockconnectionfromnode
    unlockConnectionFromNode_toNode(startNode: NodeType, endNode: NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501126-isconnectionlockedfromnode
    isConnectionLockedFromNode_toNode(startNode: NodeType, endNode: NodeType):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1640659-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: NSUInteger):Class;
    //
    alloc():GKObstacleGraph;
    //
    init():GKObstacleGraph;
  }
}

declare const GKObstacleGraph: cocoascript.GKObstacleGraph;
declare namespace cocoascript {
  /**
   * A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
   * doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph
   */
  interface GKMeshGraph extends GKGraph {
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640725-initwithbufferradius
    initWithBufferRadius_minCoordinate_maxCoordinate_nodeClass(bufferRadius: number, min: vector_float2, max: vector_float2, nodeClass: Class):GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1644763-graphwithbufferradius
    graphWithBufferRadius_minCoordinate_maxCoordinate_nodeClass(bufferRadius: number, min: vector_float2, max: vector_float2, nodeClass: Class):GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640735-initwithbufferradius
    initWithBufferRadius_minCoordinate_maxCoordinate(bufferRadius: number, min: vector_float2, max: vector_float2):GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1644762-graphwithbufferradius
    graphWithBufferRadius_minCoordinate_maxCoordinate(bufferRadius: number, min: vector_float2, max: vector_float2):GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640684-obstacles
    obstacles(): GKPolygonObstacle;
    setObstacles(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640689-addobstacles
    addObstacles(obstacles: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640677-removeobstacles
    removeObstacles(obstacles: GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640849-connectnodeusingobstacles
    connectNodeUsingObstacles(node: NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640945-bufferradius
    bufferRadius(): number;
    setBufferRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640683-triangulate
    triangulate():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640674-triangulationmode
    triangulationMode(): GKMeshGraphTriangulationMode;
    setTriangulationMode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640709-triangleatindex
    triangleAtIndex(index: NSUInteger):GKTriangle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1687602-trianglecount
    triangleCount(): NSUInteger;
    setTriangleCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640740-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: NSUInteger):Class;
    //
    alloc():GKMeshGraph;
    //
    init():GKMeshGraph;
  }
}

declare const GKMeshGraph: cocoascript.GKMeshGraph;
declare namespace cocoascript {
  /**
   * A node in a navigation graph, associated with a position on a discrete two-dimensional grid.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode
   */
  interface GKGridGraphNode extends GKGraphNode {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode/1427527-initwithgridposition
    initWithGridPosition(gridPosition: vector_int2):GKGridGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode/1427537-nodewithgridposition
    nodeWithGridPosition(gridPosition: vector_int2):GKGridGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode/1427533-gridposition
    gridPosition(): vector_int2;
    setGridPosition(): void;
    //
    alloc():GKGridGraphNode;
    //
    init():GKGridGraphNode;
  }
}

declare const GKGridGraphNode: cocoascript.GKGridGraphNode;
declare namespace cocoascript {
  /**
   * A node in a navigation graph, associated with a point in continuous 2D space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d
   */
  interface GKGraphNode2D extends GKGraphNode {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d/1427547-initwithpoint
    initWithPoint(point: vector_float2):GKGraphNode2D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d/1427545-nodewithpoint
    nodeWithPoint(point: vector_float2):GKGraphNode2D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d/1427539-position
    position(): vector_float2;
    setPosition(): void;
    //
    alloc():GKGraphNode2D;
    //
    init():GKGraphNode2D;
  }
}

declare const GKGraphNode2D: cocoascript.GKGraphNode2D;
declare namespace cocoascript {
  /**
   * A node in a navigation graph, associated with a point in continuous 3D space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d
   */
  interface GKGraphNode3D extends GKGraphNode {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d/1640778-initwithpoint
    initWithPoint(point: vector_float3):GKGraphNode3D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d/1640907-nodewithpoint
    nodeWithPoint(point: vector_float3):GKGraphNode3D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d/1640786-position
    position(): vector_float3;
    setPosition(): void;
    //
    alloc():GKGraphNode3D;
    //
    init():GKGraphNode3D;
  }
}

declare const GKGraphNode3D: cocoascript.GKGraphNode3D;
declare namespace cocoascript {
  /**
   * Manages periodic update messages for all component objects of a specified class.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem
   */
  interface GKComponentSystem extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501293-initwithcomponentclass
    initWithComponentClass(cls: Class):GKComponentSystem;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501190-componentclass
    componentClass(): Class;
    setComponentClass(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501083-components
    components(): ComponentType;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501034-addcomponent
    addComponent(component: ComponentType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501176-addcomponentwithentity
    addComponentWithEntity(entity: GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501064-removecomponent
    removeComponent(component: ComponentType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501162-removecomponentwithentity
    removeComponentWithEntity(entity: GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501051-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501037-objectatindexedsubscript
    objectAtIndexedSubscript(idx: NSUInteger):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1640904-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: NSUInteger):Class;
    //
    alloc():GKComponentSystem;
    //
    init():GKComponentSystem;
  }
}

declare const GKComponentSystem: cocoascript.GKComponentSystem;
declare namespace cocoascript {
  /**
   * The abstract base class for objects representing impassable areas in a game world.
   * doc://com.apple.documentation/documentation/gameplaykit/gkobstacle
   */
  interface GKObstacle extends NSObject {
    //
    alloc():GKObstacle;
    //
    init():GKObstacle;
  }
}

declare const GKObstacle: cocoascript.GKObstacle;
declare namespace cocoascript {
  /**
   * A circular impassable area to be avoided by agents.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle
   */
  interface GKCircleObstacle extends GKObstacle {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1501072-initwithradius
    initWithRadius(radius: number):GKCircleObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1525966-obstaclewithradius
    obstacleWithRadius(radius: number):GKCircleObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1501283-position
    position(): vector_float2;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1501112-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():GKCircleObstacle;
    //
    init():GKCircleObstacle;
  }
}

declare const GKCircleObstacle: cocoascript.GKCircleObstacle;
declare namespace cocoascript {
  /**
   * A spherical impassable volume to be avoided by agents.
   * doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle
   */
  interface GKSphereObstacle extends GKObstacle {
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1778308-initwithradius
    initWithRadius(radius: number):GKSphereObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1779558-obstaclewithradius
    obstacleWithRadius(radius: number):GKSphereObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1778313-position
    position(): vector_float3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1778325-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():GKSphereObstacle;
    //
    init():GKSphereObstacle;
  }
}

declare const GKSphereObstacle: cocoascript.GKSphereObstacle;
declare namespace cocoascript {
  /**
   * A node for use in manually creating decision trees, representing a specific question and possible answers, or an action that follows from answering other questions.
   * doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode
   */
  interface GKDecisionNode extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode/1640673-createbranchwithvalue
    createBranchWithValue_attribute(value: NSNumber, attribute: NSObject):GKDecisionNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode/1640764-createbranchwithpredicate
    createBranchWithPredicate_attribute(predicate: NSPredicate, attribute: NSObject):GKDecisionNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode/1640671-createbranchwithweight
    createBranchWithWeight_attribute(weight: NSInteger, attribute: NSObject):GKDecisionNode;
    //
    alloc():GKDecisionNode;
    //
    init():GKDecisionNode;
  }
}

declare const GKDecisionNode: cocoascript.GKDecisionNode;
declare namespace cocoascript {
  /**
   * The abstract superclass for defining state-specific logic as part of a state machine.
   * doc://com.apple.documentation/documentation/gameplaykit/gkstate
   */
  interface GKState extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501156-init
    init():GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1520390-state
    state():GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501041-statemachine
    stateMachine(): GKStateMachine;
    setStateMachine(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501221-isvalidnextstate
    isValidNextState(stateClass: Class):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501076-didenterwithpreviousstate
    didEnterWithPreviousState(previousState: GKState):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501136-updatewithdeltatime
    updateWithDeltaTime(seconds: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501127-willexitwithnextstate
    willExitWithNextState(nextState: GKState):void;
    //
    alloc():GKState;
    //
    init():GKState;
  }
}

declare const GKState: cocoascript.GKState;
declare namespace cocoascript {
  /**
   * A finite-state machine—a collection of state objects that each define logic for a particular state of gameplay and rules for transitioning between states.
   * doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine
   */
  interface GKStateMachine extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385744-initwithstates
    initWithStates(states: GKState):GKStateMachine;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385746-statemachinewithstates
    stateMachineWithStates(states: GKState):GKStateMachine;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385750-currentstate
    currentState(): GKState;
    setCurrentState(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385752-canenterstate
    canEnterState(stateClass: Class):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385753-enterstate
    enterState(stateClass: Class):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385739-stateforclass
    stateForClass(stateClass: Class):GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385748-updatewithdeltatime
    updateWithDeltaTime(sec: NSTimeInterval):void;
    //
    alloc():GKStateMachine;
    //
    init():GKStateMachine;
  }
}

declare const GKStateMachine: cocoascript.GKStateMachine;
declare namespace cocoascript {
  /**
   * A data structure for organizing objects based on their locations in a two-dimensional space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkquadtree
   */
  interface GKQuadtree extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778321-initwithboundingquad
    initWithBoundingQuad_minimumCellSize(quad: GKQuad, minCellSize: number):GKQuadtree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1779583-quadtreewithboundingquad
    quadtreeWithBoundingQuad_minimumCellSize(quad: GKQuad, minCellSize: number):GKQuadtree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778303-addelement
    addElement_withPoint(element: ElementType, point: vector_float2):GKQuadtreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778320-addelement
    addElement_withQuad(element: ElementType, quad: GKQuad):GKQuadtreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778286-removeelement
    removeElement_withNode(data: ElementType, node: GKQuadtreeNode):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778294-removeelement
    removeElement(element: ElementType):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778327-elementsatpoint
    elementsAtPoint(point: vector_float2):NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778279-elementsinquad
    elementsInQuad(quad: GKQuad):NSArray;
    //
    alloc():GKQuadtree;
    //
    init():GKQuadtree;
  }
}

declare const GKQuadtree: cocoascript.GKQuadtree;
declare namespace cocoascript {
  /**
   * A helper class for managing the objects you organize in a quadtree.
   * doc://com.apple.documentation/documentation/gameplaykit/gkquadtreenode
   */
  interface GKQuadtreeNode extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtreenode/1778318-quad
    quad(): GKQuad;
    setQuad(): void;
    //
    alloc():GKQuadtreeNode;
    //
    init():GKQuadtreeNode;
  }
}

declare const GKQuadtreeNode: cocoascript.GKQuadtreeNode;
declare namespace cocoascript {
  /**
   * A data structure for organizing objects based on their locations in a three-dimensional space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkoctree
   */
  interface GKOctree extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640712-initwithboundingbox
    initWithBoundingBox_minimumCellSize(box: GKBox, minCellSize: number):GKOctree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1644791-octreewithboundingbox
    octreeWithBoundingBox_minimumCellSize(box: GKBox, minCellSize: number):GKOctree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640958-addelement
    addElement_withPoint(element: ElementType, point: vector_float3):GKOctreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640833-addelement
    addElement_withBox(element: ElementType, box: GKBox):GKOctreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640653-removeelement
    removeElement_withNode(element: ElementType, node: GKOctreeNode):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640873-removeelement
    removeElement(element: ElementType):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640859-elementsatpoint
    elementsAtPoint(point: vector_float3):NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640941-elementsinbox
    elementsInBox(box: GKBox):NSArray;
    //
    alloc():GKOctree;
    //
    init():GKOctree;
  }
}

declare const GKOctree: cocoascript.GKOctree;
declare namespace cocoascript {
  /**
   * A helper class for managing the objects you organize in an octree.
   * doc://com.apple.documentation/documentation/gameplaykit/gkoctreenode
   */
  interface GKOctreeNode extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctreenode/1640729-box
    box(): GKBox;
    setBox(): void;
    //
    alloc():GKOctreeNode;
    //
    init():GKOctreeNode;
  }
}

declare const GKOctreeNode: cocoascript.GKOctreeNode;
declare namespace cocoascript {
  /**
   * A data structure that adaptively organizes objects based on their locations in a two-dimensional space.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrtree
   */
  interface GKRTree extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640256-initwithmaxnumberofchildren
    initWithMaxNumberOfChildren(maxNumberOfChildren: NSUInteger):GKRTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640257-treewithmaxnumberofchildren
    treeWithMaxNumberOfChildren(maxNumberOfChildren: NSUInteger):GKRTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640262-addelement
    addElement_boundingRectMin_boundingRectMax_splitStrategy(element: ElementType, boundingRectMin: vector_float2, boundingRectMax: vector_float2, splitStrategy: GKRTreeSplitStrategy):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640259-removeelement
    removeElement_boundingRectMin_boundingRectMax(element: ElementType, boundingRectMin: vector_float2, boundingRectMax: vector_float2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640264-elementsinboundingrectmin
    elementsInBoundingRectMin_rectMax(rectMin: vector_float2, rectMax: vector_float2):NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640267-queryreserve
    queryReserve(): NSUInteger;
    setQueryReserve(): void;
    //
    alloc():GKRTree;
    //
    init():GKRTree;
  }
}

declare const GKRTree: cocoascript.GKRTree;
declare namespace cocoascript {
  /**
   * The abstract superclass for procedural noise generators.
   * doc://com.apple.documentation/documentation/gameplaykit/gknoisesource
   */
  interface GKNoiseSource extends NSObject {
    //
    alloc():GKNoiseSource;
    //
    init():GKNoiseSource;
  }
}

declare const GKNoiseSource: cocoascript.GKNoiseSource;
declare namespace cocoascript {
  /**
   * A representation of procedural noise, generated by a noise source, that you can use to process, transform, or combine noise.
   * doc://com.apple.documentation/documentation/gameplaykit/gknoise
   */
  interface GKNoise extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778291-initwithnoisesource
    initWithNoiseSource(noiseSource: GKNoiseSource):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778287-initwithnoisesource
    initWithNoiseSource_gradientColors(noiseSource: GKNoiseSource, gradientColors: UIColor):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1779741-noisewithnoisesource
    noiseWithNoiseSource(noiseSource: GKNoiseSource):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1779743-noisewithnoisesource
    noiseWithNoiseSource_gradientColors(noiseSource: GKNoiseSource, gradientColors: UIColor):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778280-noisewithcomponentnoises
    noiseWithComponentNoises_selectionNoise(noises: GKNoise, selectionNoise: GKNoise):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778283-noisewithcomponentnoises
    noiseWithComponentNoises_selectionNoise_componentBoundaries_boundaryBlendDistances(noises: GKNoise, selectionNoise: GKNoise, componentBoundaries: NSNumber, blendDistances: NSNumber):GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778278-gradientcolors
    gradientColors(): UIColor;
    setGradientColors(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778317-applyabsolutevalue
    applyAbsoluteValue():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778306-invert
    invert():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778288-raisetopower
    raiseToPower(power: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778331-clampwithlowerbound
    clampWithLowerBound_upperBound(lowerBound: number, upperBound: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1823487-remapvaluestocurvewithcontrolpoi
    remapValuesToCurveWithControlPoints(controlPoints: NSNumber):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1823486-remapvaluestoterraceswithpeaks
    remapValuesToTerracesWithPeaks_terracesInverted(peakInputValues: NSNumber, inverted: BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778324-addwithnoise
    addWithNoise(noise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778332-multiplywithnoise
    multiplyWithNoise(noise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778300-raisetopowerwithnoise
    raiseToPowerWithNoise(noise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778304-maximumwithnoise
    maximumWithNoise(noise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778305-minimumwithnoise
    minimumWithNoise(noise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778298-displacexwithnoise
    displaceXWithNoise_yWithNoise_zWithNoise(xDisplacementNoise: GKNoise, yDisplacementNoise: GKNoise, zDisplacementNoise: GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778323-applyturbulencewithfrequency
    applyTurbulenceWithFrequency_power_roughness_seed(frequency: number, power: number, roughness: number, seed: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778309-moveby
    moveBy(delta: vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778289-rotateby
    rotateBy(radians: vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778290-scaleby
    scaleBy(factor: vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1823485-init
    init():GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/2138321-valueatposition
    valueAtPosition(position: vector_float2):number;
    //
    alloc():GKNoise;
    //
    init():GKNoise;
  }
}

declare const GKNoise: cocoascript.GKNoise;
declare namespace cocoascript {
  /**
   * A sample of procedural noise data from which you can read noise values directly or create noise textures.
   * doc://com.apple.documentation/documentation/gameplaykit/gknoisemap
   */
  interface GKNoiseMap extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823706-initwithnoise
    initWithNoise(noise: GKNoise):GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823704-initwithnoise
    initWithNoise_size_origin_sampleCount_seamless(noise: GKNoise, size: vector_double2, origin: vector_double2, sampleCount: vector_int2, seamless: BOOL):GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823702-init
    init():GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1827529-noisemapwithnoise
    noiseMapWithNoise(noise: GKNoise):GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1827530-noisemapwithnoise
    noiseMapWithNoise_size_origin_sampleCount_seamless(noise: GKNoise, size: vector_double2, origin: vector_double2, sampleCount: vector_int2, seamless: BOOL):GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823698-valueatposition
    valueAtPosition(position: vector_int2):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823703-interpolatedvalueatposition
    interpolatedValueAtPosition(position: vector_float2):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823699-setvalue
    setValue_atPosition(value: number, position: vector_int2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823700-size
    size(): vector_double2;
    setSize(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823696-origin
    origin(): vector_double2;
    setOrigin(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823697-samplecount
    sampleCount(): vector_int2;
    setSampleCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1640681-seamless
    seamless(): BOOL;
    setSeamless(): void;
    //
    alloc():GKNoiseMap;
    //
    init():GKNoiseMap;
  }
}

declare const GKNoiseMap: cocoascript.GKNoiseMap;
declare namespace cocoascript {
  /**
   * The abstract superclass for procedural noise generators that create coherent noise.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource
   */
  interface GKCoherentNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1823695-frequency
    frequency(): number;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1778299-octavecount
    octaveCount(): NSInteger;
    setOctaveCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1778292-lacunarity
    lacunarity(): number;
    setLacunarity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1778293-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():GKCoherentNoiseSource;
    //
    init():GKCoherentNoiseSource;
  }
}

declare const GKCoherentNoiseSource: cocoascript.GKCoherentNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is a type of fractal coherent noise with smooth features.
   * doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource
   */
  interface GKBillowNoiseSource extends GKCoherentNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource/1644029-billownoisesourcewithfrequency
    billowNoiseSourceWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: NSInteger, persistence: number, lacunarity: number, seed: number):GKBillowNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource/1640893-initwithfrequency
    initWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: NSInteger, persistence: number, lacunarity: number, seed: number):GKBillowNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource/1640650-persistence
    persistence(): number;
    setPersistence(): void;
    //
    alloc():GKBillowNoiseSource;
    //
    init():GKBillowNoiseSource;
  }
}

declare const GKBillowNoiseSource: cocoascript.GKBillowNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is a type of fractal coherent noise resembling natural phenomena such as clouds and terrain.
   * doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource
   */
  interface GKPerlinNoiseSource extends GKCoherentNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource/1640305-initwithfrequency
    initWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: NSInteger, persistence: number, lacunarity: number, seed: number):GKPerlinNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource/1640309-perlinnoisesourcewithfrequency
    perlinNoiseSourceWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: NSInteger, persistence: number, lacunarity: number, seed: number):GKPerlinNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource/1640299-persistence
    persistence(): number;
    setPersistence(): void;
    //
    alloc():GKPerlinNoiseSource;
    //
    init():GKPerlinNoiseSource;
  }
}

declare const GKPerlinNoiseSource: cocoascript.GKPerlinNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is a type of multifractal coherent noise with sharply defined features.
   * doc://com.apple.documentation/documentation/gameplaykit/gkridgednoisesource
   */
  interface GKRidgedNoiseSource extends GKCoherentNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkridgednoisesource/1640658-initwithfrequency
    initWithFrequency_octaveCount_lacunarity_seed(frequency: number, octaveCount: NSInteger, lacunarity: number, seed: number):GKRidgedNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkridgednoisesource/1646493-ridgednoisesourcewithfrequency
    ridgedNoiseSourceWithFrequency_octaveCount_lacunarity_seed(frequency: number, octaveCount: NSInteger, lacunarity: number, seed: number):GKRidgedNoiseSource;
    //
    alloc():GKRidgedNoiseSource;
    //
    init():GKRidgedNoiseSource;
  }
}

declare const GKRidgedNoiseSource: cocoascript.GKRidgedNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output (also called Worley noise or cellular noise) divides space into discrete cells surrounding random seed points.
   * doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource
   */
  interface GKVoronoiNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640726-initwithfrequency
    initWithFrequency_displacement_distanceEnabled_seed(frequency: number, displacement: number, distanceEnabled: BOOL, seed: number):GKVoronoiNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640771-voronoinoisewithfrequency
    voronoiNoiseWithFrequency_displacement_distanceEnabled_seed(frequency: number, displacement: number, distanceEnabled: BOOL, seed: number):GKVoronoiNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640711-frequency
    frequency(): number;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640682-displacement
    displacement(): number;
    setDisplacement(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640789-distanceenabled
    distanceEnabled(): BOOL;
    setDistanceEnabled(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640938-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():GKVoronoiNoiseSource;
    //
    init():GKVoronoiNoiseSource;
  }
}

declare const GKVoronoiNoiseSource: cocoascript.GKVoronoiNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is a 3D field of concentric cylindrical shells.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource
   */
  interface GKCylindersNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource/1640886-initwithfrequency
    initWithFrequency(frequency: number):GKCylindersNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource/1640644-cylindersnoisewithfrequency
    cylindersNoiseWithFrequency(frequency: number):GKCylindersNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource/1640822-frequency
    frequency(): number;
    setFrequency(): void;
    //
    alloc():GKCylindersNoiseSource;
    //
    init():GKCylindersNoiseSource;
  }
}

declare const GKCylindersNoiseSource: cocoascript.GKCylindersNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is a 3D field of concentric spherical shells.
   * doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource
   */
  interface GKSpheresNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource/1640802-initwithfrequency
    initWithFrequency(frequency: number):GKSpheresNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource/1640830-spheresnoisewithfrequency
    spheresNoiseWithFrequency(frequency: number):GKSpheresNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource/1640716-frequency
    frequency(): number;
    setFrequency(): void;
    //
    alloc():GKSpheresNoiseSource;
    //
    init():GKSpheresNoiseSource;
  }
}

declare const GKSpheresNoiseSource: cocoascript.GKSpheresNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator whose output is an alternating square pattern.
   * doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource
   */
  interface GKCheckerboardNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource/1823701-initwithsquaresize
    initWithSquareSize(squareSize: number):GKCheckerboardNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource/1823707-checkerboardnoisewithsquaresize
    checkerboardNoiseWithSquareSize(squareSize: number):GKCheckerboardNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource/1823705-squaresize
    squareSize(): number;
    setSquareSize(): void;
    //
    alloc():GKCheckerboardNoiseSource;
    //
    init():GKCheckerboardNoiseSource;
  }
}

declare const GKCheckerboardNoiseSource: cocoascript.GKCheckerboardNoiseSource;
declare namespace cocoascript {
  /**
   * A procedural noise generator that outputs a field of a single constant value.
   * doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource
   */
  interface GKConstantNoiseSource extends GKNoiseSource {
    // doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource/1640714-initwithvalue
    initWithValue(value: number):GKConstantNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource/1640720-constantnoisewithvalue
    constantNoiseWithValue(value: number):GKConstantNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource/1640959-value
    value(): number;
    setValue(): void;
    //
    alloc():GKConstantNoiseSource;
    //
    init():GKConstantNoiseSource;
  }
}

declare const GKConstantNoiseSource: cocoascript.GKConstantNoiseSource;
declare namespace cocoascript {
  /**
   * A rule to be used in the context of a rule system, with a predicate to be tested and an action to be executed when the test succeeds.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrule
   */
  interface GKRule extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501122-rulewithpredicate
    ruleWithPredicate_assertingFact_grade(predicate: NSPredicate, fact: NSObject, grade: number):GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501212-rulewithpredicate
    ruleWithPredicate_retractingFact_grade(predicate: NSPredicate, fact: NSObject, grade: number):GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501102-rulewithblockpredicate
    ruleWithBlockPredicate_action(predicate: GKRuleSystem, action: GKRuleSystem):GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501148-salience
    salience(): NSInteger;
    setSalience(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501234-evaluatepredicatewithsystem
    evaluatePredicateWithSystem(system: GKRuleSystem):BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501111-performactionwithsystem
    performActionWithSystem(system: GKRuleSystem):void;
    //
    alloc():GKRule;
    //
    init():GKRule;
  }
}

declare const GKRule: cocoascript.GKRule;
declare namespace cocoascript {
  /**
   * A rule for use in a rule system that uses a Foundation
   * doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule
   */
  interface GKNSPredicateRule extends GKRule {
    // doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule/1501319-initwithpredicate
    initWithPredicate(predicate: NSPredicate):GKNSPredicateRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule/1501107-predicate
    predicate(): NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule/1501307-evaluatepredicatewithsystem
    evaluatePredicateWithSystem(system: GKRuleSystem):BOOL;
    //
    alloc():GKNSPredicateRule;
    //
    init():GKNSPredicateRule;
  }
}

declare const GKNSPredicateRule: cocoascript.GKNSPredicateRule;
declare namespace cocoascript {
  /**
   * A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.
   * doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem
   */
  interface GKRuleSystem extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501090-init
    init():GKRuleSystem;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501238-state
    state(): NSMutableDictionary;
    setState(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501114-rules
    rules(): GKRule;
    setRules(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501274-addrule
    addRule(rule: GKRule):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501130-addrulesfromarray
    addRulesFromArray(rules: GKRule):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501113-removeallrules
    removeAllRules():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501077-evaluate
    evaluate():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501078-agenda
    agenda(): GKRule;
    setAgenda(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501057-executed
    executed(): GKRule;
    setExecuted(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501301-reset
    reset():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501276-facts
    facts(): NSArray;
    setFacts(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501109-assertfact
    assertFact(fact: NSObject):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501079-assertfact
    assertFact_grade(fact: NSObject, grade: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501262-retractfact
    retractFact(fact: NSObject):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501159-retractfact
    retractFact_grade(fact: NSObject, grade: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501177-gradeforfact
    gradeForFact(fact: NSObject):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501211-minimumgradeforfacts
    minimumGradeForFacts(facts: NSArray):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501081-maximumgradeforfacts
    maximumGradeForFacts(facts: NSArray):number;
    //
    alloc():GKRuleSystem;
    //
    init():GKRuleSystem;
  }
}

declare const GKRuleSystem: cocoascript.GKRuleSystem;
// doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelminscore
declare const GKGameModelMinScore: NSInteger;
// doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelmaxscore
declare const GKGameModelMaxScore: NSInteger;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraphtriangulationmode
  type GKMeshGraphTriangulationMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  interface GKTriangle {
  }
}
declare namespace cocoascript {
  interface GKQuad {
  }
}
declare namespace cocoascript {
  interface GKBox {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/gameplaykit/gkrtreesplitstrategy
  type GKRTreeSplitStrategy = cocoascript.NSInteger;
}
