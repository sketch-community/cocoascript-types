declare namespace cocoascript {
  /**
   * Implement this protocol to synchronize the state of an agent with its visual representation in your game.
   * doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate
   */
  interface GKAgentDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate/1501232-agentwillupdate
    agentWillUpdate(agent: cocoascript.GKAgent):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagentdelegate/1501131-agentdidupdate
    agentDidUpdate(agent: cocoascript.GKAgent):void;
  }
}
declare namespace cocoascript {
  /**
   * Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.
   * doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelupdate
   */
  interface GKGameModelUpdate extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelupdate/1490280-value
    value(): cocoascript.NSInteger;
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
    playerId(): cocoascript.NSInteger;
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
    players(): cocoascript.GKGameModelPlayer;
    setPlayers(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490293-activeplayer
    activePlayer(): cocoascript.GKGameModelPlayer;
    setActivePlayer(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490288-gamemodelupdatesforplayer
    gameModelUpdatesForPlayer(player: cocoascript.GKGameModelPlayer):cocoascript.GKGameModelUpdate;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490281-scoreforplayer
    scoreForPlayer(player: cocoascript.GKGameModelPlayer):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490286-islossforplayer
    isLossForPlayer(player: cocoascript.GKGameModelPlayer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490271-iswinforplayer
    isWinForPlayer(player: cocoascript.GKGameModelPlayer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490278-applygamemodelupdate
    applyGameModelUpdate(gameModelUpdate: cocoascript.GKGameModelUpdate):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490276-unapplygamemodelupdate
    unapplyGameModelUpdate(gameModelUpdate: cocoascript.GKGameModelUpdate):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgamemodel/1490267-setgamemodel
    setGameModel(gameModel: cocoascript.GKGameModel):void;
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
    gameModel(): cocoascript.GKGameModel;
    setGameModel(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstrategist/1501317-randomsource
    randomSource(): cocoascript.GKRandom;
    setRandomSource(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstrategist/1501118-bestmoveforactiveplayer
    bestMoveForActivePlayer():cocoascript.GKGameModelUpdate;
  }
}
declare namespace cocoascript {
  /**
   * A set of goals that together influence the movement of an agent.
   * doc://com.apple.documentation/documentation/gameplaykit/gkbehavior
   */
  interface GKBehavior extends NSObject {
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388733-behaviorwithgoal
    behaviorWithGoal_weight(goal: cocoascript.GKGoal, weight: number):cocoascript.GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388725-behaviorwithgoals
    behaviorWithGoals(goals: cocoascript.GKGoal):cocoascript.GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388727-behaviorwithgoals
    behaviorWithGoals_andWeights(goals: cocoascript.GKGoal, weights: cocoascript.NSNumber):cocoascript.GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388712-behaviorwithweightedgoals
    behaviorWithWeightedGoals(weightedGoals: cocoascript.NSNumber):cocoascript.GKBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388731-setweight
    setWeight_forGoal(weight: number, goal: cocoascript.GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388729-weightforgoal
    weightForGoal(goal: cocoascript.GKGoal):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388714-removegoal
    removeGoal(goal: cocoascript.GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388716-removeallgoals
    removeAllGoals():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388721-goalcount
    goalCount(): cocoascript.NSInteger;
    setGoalCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388723-objectforkeyedsubscript
    objectForKeyedSubscript(goal: cocoascript.GKGoal):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388735-setobject
    setObject_forKeyedSubscript(weight: cocoascript.NSNumber, goal: cocoascript.GKGoal):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbehavior/1388710-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):cocoascript.GKGoal;
    //
    alloc():cocoascript.GKBehavior;
    //
    init():cocoascript.GKBehavior;
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
    init():cocoascript.GKRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501128-arraybyshufflingobjectsinarray
    arrayByShufflingObjectsInArray(array: cocoascript.NSArray):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501123-sharedrandom
    sharedRandom():cocoascript.GKRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomsource/1501216-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.GKRandomSource;
    //
    alloc():cocoascript.GKRandomSource;
    //
    init():cocoascript.GKRandomSource;
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
    initWithNodes(nodes: cocoascript.GKGraphNode):cocoascript.GKGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1556415-graphwithnodes
    graphWithNodes(nodes: cocoascript.GKGraphNode):cocoascript.GKGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501040-addnodes
    addNodes(nodes: cocoascript.GKGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501152-connectnodetolowestcostnode
    connectNodeToLowestCostNode_bidirectional(node: cocoascript.GKGraphNode, bidirectional: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501303-removenodes
    removeNodes(nodes: cocoascript.GKGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501223-nodes
    nodes(): cocoascript.GKGraphNode;
    setNodes(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraph/1501270-findpathfromnode
    findPathFromNode_toNode(startNode: cocoascript.GKGraphNode, endNode: cocoascript.GKGraphNode):cocoascript.GKGraphNode;
    //
    alloc():cocoascript.GKGraph;
    //
    init():cocoascript.GKGraph;
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
    init():cocoascript.GKEntity;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1571499-entity
    entity():cocoascript.GKEntity;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501182-components
    components(): cocoascript.GKComponent;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1571498-componentforclass
    componentForClass(componentClass: cocoascript.Class):cocoascript.GKComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501312-addcomponent
    addComponent(component: cocoascript.GKComponent):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501258-removecomponentforclass
    removeComponentForClass(componentClass: cocoascript.Class):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkentity/1501228-updatewithdeltatime
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    //
    alloc():cocoascript.GKEntity;
    //
    init():cocoascript.GKEntity;
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
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1501250-entity
    entity(): cocoascript.GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1687601-didaddtoentity
    didAddToEntity():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponent/1640914-willremovefromentity
    willRemoveFromEntity():void;
    //
    alloc():cocoascript.GKComponent;
    //
    init():cocoascript.GKComponent;
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
    goalToSeekAgent(agent: cocoascript.GKAgent):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501248-goaltofleeagent
    goalToFleeAgent(agent: cocoascript.GKAgent):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501070-goaltoreachtargetspeed
    goalToReachTargetSpeed(targetSpeed: number):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501052-goaltowander
    goalToWander(speed: number):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501236-goaltoavoidagents
    goalToAvoidAgents_maxPredictionTime(agents: cocoascript.GKAgent, maxPredictionTime: cocoascript.NSTimeInterval):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501098-goaltoavoidobstacles
    goalToAvoidObstacles_maxPredictionTime(obstacles: cocoascript.GKObstacle, maxPredictionTime: cocoascript.NSTimeInterval):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501219-goaltointerceptagent
    goalToInterceptAgent_maxPredictionTime(target: cocoascript.GKAgent, maxPredictionTime: cocoascript.NSTimeInterval):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501049-goaltoseparatefromagents
    goalToSeparateFromAgents_maxDistance_maxAngle(agents: cocoascript.GKAgent, maxDistance: number, maxAngle: number):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501134-goaltoalignwithagents
    goalToAlignWithAgents_maxDistance_maxAngle(agents: cocoascript.GKAgent, maxDistance: number, maxAngle: number):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501170-goaltocoherewithagents
    goalToCohereWithAgents_maxDistance_maxAngle(agents: cocoascript.GKAgent, maxDistance: number, maxAngle: number):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501166-goaltostayonpath
    goalToStayOnPath_maxPredictionTime(path: cocoascript.GKPath, maxPredictionTime: cocoascript.NSTimeInterval):cocoascript.GKGoal;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgoal/1501095-goaltofollowpath
    goalToFollowPath_maxPredictionTime_forward(path: cocoascript.GKPath, maxPredictionTime: cocoascript.NSTimeInterval, forward: cocoascript.BOOL):cocoascript.GKGoal;
    //
    alloc():cocoascript.GKGoal;
    //
    init():cocoascript.GKGoal;
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
    sceneWithFileNamed(filename: string | cocoascript.NSString):cocoascript.GKScene;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640947-rootnode
    rootNode(): cocoascript.GKSceneRootNodeType;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640795-entities
    entities(): cocoascript.GKEntity;
    setEntities(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640954-addentity
    addEntity(entity: cocoascript.GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640686-removeentity
    removeEntity(entity: cocoascript.GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640940-graphs
    graphs(): cocoascript.GKGraph;
    setGraphs(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/1640663-removegraph
    removeGraph(name: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/2873253-scenewithfilenamed
    sceneWithFileNamed_rootNode(filename: string | cocoascript.NSString, rootNode: cocoascript.GKSceneRootNodeType):cocoascript.GKScene;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscene/2143063-addgraph
    addGraph_name(graph: cocoascript.GKGraph, name: string | cocoascript.NSString):void;
    //
    alloc():cocoascript.GKScene;
    //
    init():cocoascript.GKScene;
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
    connectedNodes(): cocoascript.GKGraphNode;
    setConnectedNodes(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427554-addconnectionstonodes
    addConnectionsToNodes_bidirectional(nodes: cocoascript.GKGraphNode, bidirectional: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427548-removeconnectionstonodes
    removeConnectionsToNodes_bidirectional(nodes: cocoascript.GKGraphNode, bidirectional: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427531-costtonode
    costToNode(node: cocoascript.GKGraphNode):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427556-estimatedcosttonode
    estimatedCostToNode(node: cocoascript.GKGraphNode):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427544-findpathtonode
    findPathToNode(goalNode: cocoascript.GKGraphNode):cocoascript.GKGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode/1427552-findpathfromnode
    findPathFromNode(startNode: cocoascript.GKGraphNode):cocoascript.GKGraphNode;
    //
    alloc():cocoascript.GKGraphNode;
    //
    init():cocoascript.GKGraphNode;
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
    initWithPoints_count(points: cocoascript.vector_float2, numPoints: any):cocoascript.GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1525962-obstaclewithpoints
    obstacleWithPoints_count(points: cocoascript.vector_float2, numPoints: any):cocoascript.GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1501150-vertexcount
    vertexCount(): cocoascript.NSUInteger;
    setVertexCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpolygonobstacle/1501068-vertexatindex
    vertexAtIndex(index: cocoascript.NSUInteger):cocoascript.vector_float2;
    //
    alloc():cocoascript.GKPolygonObstacle;
    //
    init():cocoascript.GKPolygonObstacle;
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
    position(): cocoascript.vector_float2;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501045-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501242-updatewithdeltatime
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent2d/1501186-velocity
    velocity(): cocoascript.vector_float2;
    setVelocity(): void;
    //
    alloc():cocoascript.GKAgent2D;
    //
    init():cocoascript.GKAgent2D;
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
    behavior(): cocoascript.GKBehavior;
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
    delegate(): cocoascript.GKAgentDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent/1501038-speed
    speed(): number;
    setSpeed(): void;
    //
    alloc():cocoascript.GKAgent;
    //
    init():cocoascript.GKAgent;
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
    initWithAttribute(attribute: cocoascript.NSObject):cocoascript.GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640655-rootnode
    rootNode(): cocoascript.GKDecisionNode;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640769-initwithexamples
    initWithExamples_actions_attributes(examples: cocoascript.NSObject, actions: cocoascript.NSObject, attributes: cocoascript.NSObject):cocoascript.GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640891-findactionforanswers
    findActionForAnswers(answers: cocoascript.NSObject):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/1640654-randomsource
    randomSource(): cocoascript.GKRandomSource;
    setRandomSource(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/2865877-initwithurl
    initWithURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.GKDecisionTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisiontree/2865878-exporttourl
    exportToURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.GKDecisionTree;
    //
    init():cocoascript.GKDecisionTree;
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
    position(): cocoascript.vector_float3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640665-rotation
    rotation(): cocoascript.matrix_float3x3;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640645-updatewithdeltatime
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/1640961-velocity
    velocity(): cocoascript.vector_float3;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkagent3d/2143064-righthanded
    rightHanded(): cocoascript.BOOL;
    setRightHanded(): void;
    //
    alloc():cocoascript.GKAgent3D;
    //
    init():cocoascript.GKAgent3D;
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
    componentWithNode(node: cocoascript.SKNode):cocoascript.GKSKNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent/1640693-initwithnode
    initWithNode(node: cocoascript.SKNode):cocoascript.GKSKNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gksknodecomponent/1640728-node
    node(): cocoascript.SKNode;
    setNode(): void;
    //
    alloc():cocoascript.GKSKNodeComponent;
    //
    init():cocoascript.GKSKNodeComponent;
  }
}

declare const GKSKNodeComponent: cocoascript.GKSKNodeComponent;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent
   */
  interface GKSCNNodeComponent extends GKComponent {
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873248-initwithnode
    initWithNode(node: any):cocoascript.GKSCNNodeComponent;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873245-node
    node(): any;
    setNode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkscnnodecomponent/2873247-componentwithnode
    componentWithNode(node: any):cocoascript.GKSCNNodeComponent;
    //
    alloc():cocoascript.GKSCNNodeComponent;
    //
    init():cocoascript.GKSCNNodeComponent;
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
    behaviorWithBehaviors(behaviors: cocoascript.GKBehavior):cocoascript.GKCompositeBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640948-behaviorwithbehaviors
    behaviorWithBehaviors_andWeights(behaviors: cocoascript.GKBehavior, weights: cocoascript.NSNumber):cocoascript.GKCompositeBehavior;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640713-setweight
    setWeight_forBehavior(weight: number, behavior: cocoascript.GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640732-weightforbehavior
    weightForBehavior(behavior: cocoascript.GKBehavior):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640706-removebehavior
    removeBehavior(behavior: cocoascript.GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640639-removeallbehaviors
    removeAllBehaviors():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640881-behaviorcount
    behaviorCount(): cocoascript.NSInteger;
    setBehaviorCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640719-objectforkeyedsubscript
    objectForKeyedSubscript(behavior: cocoascript.GKBehavior):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1646643-setobject
    setObject_forKeyedSubscript(weight: cocoascript.NSNumber, behavior: cocoascript.GKBehavior):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcompositebehavior/1640637-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):cocoascript.GKBehavior;
    //
    alloc():cocoascript.GKCompositeBehavior;
    //
    init():cocoascript.GKCompositeBehavior;
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
    initWithPoints_count_radius_cyclical(points: cocoascript.vector_float2, count: any, radius: number, cyclical: cocoascript.BOOL):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1574695-pathwithpoints
    pathWithPoints_count_radius_cyclical(points: cocoascript.vector_float2, count: any, radius: number, cyclical: cocoascript.BOOL):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778297-initwithfloat3points
    initWithFloat3Points_count_radius_cyclical(points: cocoascript.vector_float3, count: any, radius: number, cyclical: cocoascript.BOOL):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1779559-pathwithfloat3points
    pathWithFloat3Points_count_radius_cyclical(points: cocoascript.vector_float3, count: any, radius: number, cyclical: cocoascript.BOOL):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501138-initwithgraphnodes
    initWithGraphNodes_radius(graphNodes: cocoascript.GKGraphNode, radius: number):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1574696-pathwithgraphnodes
    pathWithGraphNodes_radius(graphNodes: cocoascript.GKGraphNode, radius: number):cocoascript.GKPath;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501281-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501244-cyclical
    cyclical(): cocoascript.BOOL;
    setCyclical(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501071-numpoints
    numPoints(): cocoascript.NSUInteger;
    setNumPoints(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778285-float2atindex
    float2AtIndex(index: cocoascript.NSUInteger):cocoascript.vector_float2;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1778310-float3atindex
    float3AtIndex(index: cocoascript.NSUInteger):cocoascript.vector_float3;
    // doc://com.apple.documentation/documentation/gameplaykit/gkpath/1501172-pointatindex
    pointAtIndex(index: cocoascript.NSUInteger):cocoascript.vector_float2;
    //
    alloc():cocoascript.GKPath;
    //
    init():cocoascript.GKPath;
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
    maxLookAheadDepth(): cocoascript.NSInteger;
    setMaxLookAheadDepth(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist/1501137-bestmoveforplayer
    bestMoveForPlayer(player: cocoascript.GKGameModelPlayer):cocoascript.GKGameModelUpdate;
    // doc://com.apple.documentation/documentation/gameplaykit/gkminmaxstrategist/1501140-randommoveforplayer
    randomMoveForPlayer_fromNumberOfBestMoves(player: cocoascript.GKGameModelPlayer, numMovesToConsider: cocoascript.NSInteger):cocoascript.GKGameModelUpdate;
    //
    alloc():cocoascript.GKMinmaxStrategist;
    //
    init():cocoascript.GKMinmaxStrategist;
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
    budget(): cocoascript.NSUInteger;
    setBudget(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmontecarlostrategist/1640679-explorationparameter
    explorationParameter(): cocoascript.NSUInteger;
    setExplorationParameter(): void;
    //
    alloc():cocoascript.GKMonteCarloStrategist;
    //
    init():cocoascript.GKMonteCarloStrategist;
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
    initWithRandomSource_lowestValue_highestValue(source: cocoascript.GKRandom, lowestInclusive: cocoascript.NSInteger, highestInclusive: cocoascript.NSInteger):cocoascript.GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495636-distributionwithlowestvalue
    distributionWithLowestValue_highestValue(lowestInclusive: cocoascript.NSInteger, highestInclusive: cocoascript.NSInteger):cocoascript.GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495634-d6
    d6():cocoascript.GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495649-d20
    d20():cocoascript.GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495651-distributionfordiewithsidecount
    distributionForDieWithSideCount(sideCount: cocoascript.NSInteger):cocoascript.GKRandomDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495635-nextint
    nextInt():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495638-nextintwithupperbound
    nextIntWithUpperBound(upperBound: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495645-nextuniform
    nextUniform():number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495624-nextbool
    nextBool():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495648-lowestvalue
    lowestValue(): cocoascript.NSInteger;
    setLowestValue(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495640-highestvalue
    highestValue(): cocoascript.NSInteger;
    setHighestValue(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandomdistribution/1495646-numberofpossibleoutcomes
    numberOfPossibleOutcomes(): cocoascript.NSUInteger;
    setNumberOfPossibleOutcomes(): void;
    //
    alloc():cocoascript.GKRandomDistribution;
    //
    init():cocoascript.GKRandomDistribution;
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
    init():cocoascript.GKARC4RandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501056-initwithseed
    initWithSeed(seed: cocoascript.NSData):cocoascript.GKARC4RandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501260-seed
    seed(): cocoascript.NSData;
    setSeed(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkarc4randomsource/1501132-dropvalueswithcount
    dropValuesWithCount(count: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.GKARC4RandomSource;
    //
    init():cocoascript.GKARC4RandomSource;
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
    init():cocoascript.GKLinearCongruentialRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource/1501164-initwithseed
    initWithSeed(seed: number):cocoascript.GKLinearCongruentialRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gklinearcongruentialrandomsource/1501103-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():cocoascript.GKLinearCongruentialRandomSource;
    //
    init():cocoascript.GKLinearCongruentialRandomSource;
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
    init():cocoascript.GKMersenneTwisterRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource/1501253-initwithseed
    initWithSeed(seed: number):cocoascript.GKMersenneTwisterRandomSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmersennetwisterrandomsource/1501279-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():cocoascript.GKMersenneTwisterRandomSource;
    //
    init():cocoascript.GKMersenneTwisterRandomSource;
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
    nextInt():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501188-nextintwithupperbound
    nextIntWithUpperBound(upperBound: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501036-nextuniform
    nextUniform():number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrandom/1501085-nextbool
    nextBool():cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * A generator for random numbers that follow a
   * doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution
   */
  interface GKGaussianDistribution extends GKRandomDistribution {
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495653-initwithrandomsource
    initWithRandomSource_lowestValue_highestValue(source: cocoascript.GKRandom, lowestInclusive: cocoascript.NSInteger, highestInclusive: cocoascript.NSInteger):cocoascript.GKGaussianDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495628-initwithrandomsource
    initWithRandomSource_mean_deviation(source: cocoascript.GKRandom, mean: number, deviation: number):cocoascript.GKGaussianDistribution;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495644-mean
    mean(): number;
    setMean(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgaussiandistribution/1495623-deviation
    deviation(): number;
    setDeviation(): void;
    //
    alloc():cocoascript.GKGaussianDistribution;
    //
    init():cocoascript.GKGaussianDistribution;
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
    alloc():cocoascript.GKShuffledDistribution;
    //
    init():cocoascript.GKShuffledDistribution;
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
    initFromGridStartingAt_width_height_diagonalsAllowed_nodeClass(position: cocoascript.vector_int2, width: number, height: number, diagonalsAllowed: cocoascript.BOOL, nodeClass: cocoascript.Class):cocoascript.GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1644761-graphfromgridstartingat
    graphFromGridStartingAt_width_height_diagonalsAllowed_nodeClass(position: cocoascript.vector_int2, width: number, height: number, diagonalsAllowed: cocoascript.BOOL, nodeClass: cocoascript.Class):cocoascript.GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501289-initfromgridstartingat
    initFromGridStartingAt_width_height_diagonalsAllowed(position: cocoascript.vector_int2, width: number, height: number, diagonalsAllowed: cocoascript.BOOL):cocoascript.GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1556416-graphfromgridstartingat
    graphFromGridStartingAt_width_height_diagonalsAllowed(position: cocoascript.vector_int2, width: number, height: number, diagonalsAllowed: cocoascript.BOOL):cocoascript.GKGridGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501287-nodeatgridposition
    nodeAtGridPosition(position: cocoascript.vector_int2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501192-connectnodetoadjacentnodes
    connectNodeToAdjacentNodes(node: cocoascript.GKGridGraphNode):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501179-diagonalsallowed
    diagonalsAllowed(): cocoascript.BOOL;
    setDiagonalsAllowed(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501194-gridorigin
    gridOrigin(): cocoascript.vector_int2;
    setGridOrigin(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501291-gridwidth
    gridWidth(): cocoascript.NSUInteger;
    setGridWidth(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1501184-gridheight
    gridHeight(): cocoascript.NSUInteger;
    setGridHeight(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraph/1640837-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: cocoascript.NSUInteger):cocoascript.Class;
    //
    alloc():cocoascript.GKGridGraph;
    //
    init():cocoascript.GKGridGraph;
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
    initWithObstacles_bufferRadius_nodeClass(obstacles: cocoascript.GKPolygonObstacle, bufferRadius: number, nodeClass: cocoascript.Class):cocoascript.GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1644731-graphwithobstacles
    graphWithObstacles_bufferRadius_nodeClass(obstacles: cocoascript.GKPolygonObstacle, bufferRadius: number, nodeClass: cocoascript.Class):cocoascript.GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501299-initwithobstacles
    initWithObstacles_bufferRadius(obstacles: cocoascript.GKPolygonObstacle, bufferRadius: number):cocoascript.GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1556417-graphwithobstacles
    graphWithObstacles_bufferRadius(obstacles: cocoascript.GKPolygonObstacle, bufferRadius: number):cocoascript.GKObstacleGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501213-obstacles
    obstacles(): cocoascript.GKPolygonObstacle;
    setObstacles(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501073-addobstacles
    addObstacles(obstacles: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501058-removeobstacles
    removeObstacles(obstacles: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501297-removeallobstacles
    removeAllObstacles():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501285-nodesforobstacle
    nodesForObstacle(obstacle: cocoascript.GKPolygonObstacle):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501129-connectnodeusingobstacles
    connectNodeUsingObstacles(node: cocoascript.NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501075-connectnodeusingobstacles
    connectNodeUsingObstacles_ignoringObstacles(node: cocoascript.NodeType, obstaclesToIgnore: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501220-connectnodeusingobstacles
    connectNodeUsingObstacles_ignoringBufferRadiusOfObstacles(node: cocoascript.NodeType, obstaclesBufferRadiusToIgnore: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501119-bufferradius
    bufferRadius(): number;
    setBufferRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501060-lockconnectionfromnode
    lockConnectionFromNode_toNode(startNode: cocoascript.NodeType, endNode: cocoascript.NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501093-unlockconnectionfromnode
    unlockConnectionFromNode_toNode(startNode: cocoascript.NodeType, endNode: cocoascript.NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1501126-isconnectionlockedfromnode
    isConnectionLockedFromNode_toNode(startNode: cocoascript.NodeType, endNode: cocoascript.NodeType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkobstaclegraph/1640659-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: cocoascript.NSUInteger):cocoascript.Class;
    //
    alloc():cocoascript.GKObstacleGraph;
    //
    init():cocoascript.GKObstacleGraph;
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
    initWithBufferRadius_minCoordinate_maxCoordinate_nodeClass(bufferRadius: number, min: cocoascript.vector_float2, max: cocoascript.vector_float2, nodeClass: cocoascript.Class):cocoascript.GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1644763-graphwithbufferradius
    graphWithBufferRadius_minCoordinate_maxCoordinate_nodeClass(bufferRadius: number, min: cocoascript.vector_float2, max: cocoascript.vector_float2, nodeClass: cocoascript.Class):cocoascript.GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640735-initwithbufferradius
    initWithBufferRadius_minCoordinate_maxCoordinate(bufferRadius: number, min: cocoascript.vector_float2, max: cocoascript.vector_float2):cocoascript.GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1644762-graphwithbufferradius
    graphWithBufferRadius_minCoordinate_maxCoordinate(bufferRadius: number, min: cocoascript.vector_float2, max: cocoascript.vector_float2):cocoascript.GKMeshGraph;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640684-obstacles
    obstacles(): cocoascript.GKPolygonObstacle;
    setObstacles(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640689-addobstacles
    addObstacles(obstacles: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640677-removeobstacles
    removeObstacles(obstacles: cocoascript.GKPolygonObstacle):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640849-connectnodeusingobstacles
    connectNodeUsingObstacles(node: cocoascript.NodeType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640945-bufferradius
    bufferRadius(): number;
    setBufferRadius(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640683-triangulate
    triangulate():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640674-triangulationmode
    triangulationMode(): cocoascript.GKMeshGraphTriangulationMode;
    setTriangulationMode(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640709-triangleatindex
    triangleAtIndex(index: cocoascript.NSUInteger):cocoascript.GKTriangle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1687602-trianglecount
    triangleCount(): cocoascript.NSUInteger;
    setTriangleCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkmeshgraph/1640740-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: cocoascript.NSUInteger):cocoascript.Class;
    //
    alloc():cocoascript.GKMeshGraph;
    //
    init():cocoascript.GKMeshGraph;
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
    initWithGridPosition(gridPosition: cocoascript.vector_int2):cocoascript.GKGridGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode/1427537-nodewithgridposition
    nodeWithGridPosition(gridPosition: cocoascript.vector_int2):cocoascript.GKGridGraphNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgridgraphnode/1427533-gridposition
    gridPosition(): cocoascript.vector_int2;
    setGridPosition(): void;
    //
    alloc():cocoascript.GKGridGraphNode;
    //
    init():cocoascript.GKGridGraphNode;
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
    initWithPoint(point: cocoascript.vector_float2):cocoascript.GKGraphNode2D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d/1427545-nodewithpoint
    nodeWithPoint(point: cocoascript.vector_float2):cocoascript.GKGraphNode2D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode2d/1427539-position
    position(): cocoascript.vector_float2;
    setPosition(): void;
    //
    alloc():cocoascript.GKGraphNode2D;
    //
    init():cocoascript.GKGraphNode2D;
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
    initWithPoint(point: cocoascript.vector_float3):cocoascript.GKGraphNode3D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d/1640907-nodewithpoint
    nodeWithPoint(point: cocoascript.vector_float3):cocoascript.GKGraphNode3D;
    // doc://com.apple.documentation/documentation/gameplaykit/gkgraphnode3d/1640786-position
    position(): cocoascript.vector_float3;
    setPosition(): void;
    //
    alloc():cocoascript.GKGraphNode3D;
    //
    init():cocoascript.GKGraphNode3D;
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
    initWithComponentClass(cls: cocoascript.Class):cocoascript.GKComponentSystem;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501190-componentclass
    componentClass(): cocoascript.Class;
    setComponentClass(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501083-components
    components(): cocoascript.ComponentType;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501034-addcomponent
    addComponent(component: cocoascript.ComponentType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501176-addcomponentwithentity
    addComponentWithEntity(entity: cocoascript.GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501064-removecomponent
    removeComponent(component: cocoascript.ComponentType):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501162-removecomponentwithentity
    removeComponentWithEntity(entity: cocoascript.GKEntity):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501051-updatewithdeltatime
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1501037-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcomponentsystem/1640904-classforgenericargumentatindex
    classForGenericArgumentAtIndex(index: cocoascript.NSUInteger):cocoascript.Class;
    //
    alloc():cocoascript.GKComponentSystem;
    //
    init():cocoascript.GKComponentSystem;
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
    alloc():cocoascript.GKObstacle;
    //
    init():cocoascript.GKObstacle;
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
    initWithRadius(radius: number):cocoascript.GKCircleObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1525966-obstaclewithradius
    obstacleWithRadius(radius: number):cocoascript.GKCircleObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1501283-position
    position(): cocoascript.vector_float2;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcircleobstacle/1501112-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():cocoascript.GKCircleObstacle;
    //
    init():cocoascript.GKCircleObstacle;
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
    initWithRadius(radius: number):cocoascript.GKSphereObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1779558-obstaclewithradius
    obstacleWithRadius(radius: number):cocoascript.GKSphereObstacle;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1778313-position
    position(): cocoascript.vector_float3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gksphereobstacle/1778325-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():cocoascript.GKSphereObstacle;
    //
    init():cocoascript.GKSphereObstacle;
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
    createBranchWithValue_attribute(value: cocoascript.NSNumber, attribute: cocoascript.NSObject):cocoascript.GKDecisionNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode/1640764-createbranchwithpredicate
    createBranchWithPredicate_attribute(predicate: cocoascript.NSPredicate, attribute: cocoascript.NSObject):cocoascript.GKDecisionNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkdecisionnode/1640671-createbranchwithweight
    createBranchWithWeight_attribute(weight: cocoascript.NSInteger, attribute: cocoascript.NSObject):cocoascript.GKDecisionNode;
    //
    alloc():cocoascript.GKDecisionNode;
    //
    init():cocoascript.GKDecisionNode;
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
    init():cocoascript.GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1520390-state
    state():cocoascript.GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501041-statemachine
    stateMachine(): cocoascript.GKStateMachine;
    setStateMachine(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501221-isvalidnextstate
    isValidNextState(stateClass: cocoascript.Class):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501076-didenterwithpreviousstate
    didEnterWithPreviousState(previousState: cocoascript.GKState):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501136-updatewithdeltatime
    updateWithDeltaTime(seconds: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstate/1501127-willexitwithnextstate
    willExitWithNextState(nextState: cocoascript.GKState):void;
    //
    alloc():cocoascript.GKState;
    //
    init():cocoascript.GKState;
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
    initWithStates(states: cocoascript.GKState):cocoascript.GKStateMachine;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385746-statemachinewithstates
    stateMachineWithStates(states: cocoascript.GKState):cocoascript.GKStateMachine;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385750-currentstate
    currentState(): cocoascript.GKState;
    setCurrentState(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385752-canenterstate
    canEnterState(stateClass: cocoascript.Class):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385753-enterstate
    enterState(stateClass: cocoascript.Class):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385739-stateforclass
    stateForClass(stateClass: cocoascript.Class):cocoascript.GKState;
    // doc://com.apple.documentation/documentation/gameplaykit/gkstatemachine/1385748-updatewithdeltatime
    updateWithDeltaTime(sec: cocoascript.NSTimeInterval):void;
    //
    alloc():cocoascript.GKStateMachine;
    //
    init():cocoascript.GKStateMachine;
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
    initWithBoundingQuad_minimumCellSize(quad: cocoascript.GKQuad, minCellSize: number):cocoascript.GKQuadtree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1779583-quadtreewithboundingquad
    quadtreeWithBoundingQuad_minimumCellSize(quad: cocoascript.GKQuad, minCellSize: number):cocoascript.GKQuadtree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778303-addelement
    addElement_withPoint(element: cocoascript.ElementType, point: cocoascript.vector_float2):cocoascript.GKQuadtreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778320-addelement
    addElement_withQuad(element: cocoascript.ElementType, quad: cocoascript.GKQuad):cocoascript.GKQuadtreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778286-removeelement
    removeElement_withNode(data: cocoascript.ElementType, node: cocoascript.GKQuadtreeNode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778294-removeelement
    removeElement(element: cocoascript.ElementType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778327-elementsatpoint
    elementsAtPoint(point: cocoascript.vector_float2):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkquadtree/1778279-elementsinquad
    elementsInQuad(quad: cocoascript.GKQuad):cocoascript.NSArray;
    //
    alloc():cocoascript.GKQuadtree;
    //
    init():cocoascript.GKQuadtree;
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
    quad(): cocoascript.GKQuad;
    setQuad(): void;
    //
    alloc():cocoascript.GKQuadtreeNode;
    //
    init():cocoascript.GKQuadtreeNode;
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
    initWithBoundingBox_minimumCellSize(box: cocoascript.GKBox, minCellSize: number):cocoascript.GKOctree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1644791-octreewithboundingbox
    octreeWithBoundingBox_minimumCellSize(box: cocoascript.GKBox, minCellSize: number):cocoascript.GKOctree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640958-addelement
    addElement_withPoint(element: cocoascript.ElementType, point: cocoascript.vector_float3):cocoascript.GKOctreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640833-addelement
    addElement_withBox(element: cocoascript.ElementType, box: cocoascript.GKBox):cocoascript.GKOctreeNode;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640653-removeelement
    removeElement_withNode(element: cocoascript.ElementType, node: cocoascript.GKOctreeNode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640873-removeelement
    removeElement(element: cocoascript.ElementType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640859-elementsatpoint
    elementsAtPoint(point: cocoascript.vector_float3):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkoctree/1640941-elementsinbox
    elementsInBox(box: cocoascript.GKBox):cocoascript.NSArray;
    //
    alloc():cocoascript.GKOctree;
    //
    init():cocoascript.GKOctree;
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
    box(): cocoascript.GKBox;
    setBox(): void;
    //
    alloc():cocoascript.GKOctreeNode;
    //
    init():cocoascript.GKOctreeNode;
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
    initWithMaxNumberOfChildren(maxNumberOfChildren: cocoascript.NSUInteger):cocoascript.GKRTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640257-treewithmaxnumberofchildren
    treeWithMaxNumberOfChildren(maxNumberOfChildren: cocoascript.NSUInteger):cocoascript.GKRTree;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640262-addelement
    addElement_boundingRectMin_boundingRectMax_splitStrategy(element: cocoascript.ElementType, boundingRectMin: cocoascript.vector_float2, boundingRectMax: cocoascript.vector_float2, splitStrategy: cocoascript.GKRTreeSplitStrategy):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640259-removeelement
    removeElement_boundingRectMin_boundingRectMax(element: cocoascript.ElementType, boundingRectMin: cocoascript.vector_float2, boundingRectMax: cocoascript.vector_float2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640264-elementsinboundingrectmin
    elementsInBoundingRectMin_rectMax(rectMin: cocoascript.vector_float2, rectMax: cocoascript.vector_float2):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrtree/1640267-queryreserve
    queryReserve(): cocoascript.NSUInteger;
    setQueryReserve(): void;
    //
    alloc():cocoascript.GKRTree;
    //
    init():cocoascript.GKRTree;
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
    alloc():cocoascript.GKNoiseSource;
    //
    init():cocoascript.GKNoiseSource;
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
    initWithNoiseSource(noiseSource: cocoascript.GKNoiseSource):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778287-initwithnoisesource
    initWithNoiseSource_gradientColors(noiseSource: cocoascript.GKNoiseSource, gradientColors: cocoascript.UIColor):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1779741-noisewithnoisesource
    noiseWithNoiseSource(noiseSource: cocoascript.GKNoiseSource):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1779743-noisewithnoisesource
    noiseWithNoiseSource_gradientColors(noiseSource: cocoascript.GKNoiseSource, gradientColors: cocoascript.UIColor):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778280-noisewithcomponentnoises
    noiseWithComponentNoises_selectionNoise(noises: cocoascript.GKNoise, selectionNoise: cocoascript.GKNoise):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778283-noisewithcomponentnoises
    noiseWithComponentNoises_selectionNoise_componentBoundaries_boundaryBlendDistances(noises: cocoascript.GKNoise, selectionNoise: cocoascript.GKNoise, componentBoundaries: cocoascript.NSNumber, blendDistances: cocoascript.NSNumber):cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778278-gradientcolors
    gradientColors(): cocoascript.UIColor;
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
    remapValuesToCurveWithControlPoints(controlPoints: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1823486-remapvaluestoterraceswithpeaks
    remapValuesToTerracesWithPeaks_terracesInverted(peakInputValues: cocoascript.NSNumber, inverted: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778324-addwithnoise
    addWithNoise(noise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778332-multiplywithnoise
    multiplyWithNoise(noise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778300-raisetopowerwithnoise
    raiseToPowerWithNoise(noise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778304-maximumwithnoise
    maximumWithNoise(noise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778305-minimumwithnoise
    minimumWithNoise(noise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778298-displacexwithnoise
    displaceXWithNoise_yWithNoise_zWithNoise(xDisplacementNoise: cocoascript.GKNoise, yDisplacementNoise: cocoascript.GKNoise, zDisplacementNoise: cocoascript.GKNoise):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778323-applyturbulencewithfrequency
    applyTurbulenceWithFrequency_power_roughness_seed(frequency: number, power: number, roughness: number, seed: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778309-moveby
    moveBy(delta: cocoascript.vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778289-rotateby
    rotateBy(radians: cocoascript.vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1778290-scaleby
    scaleBy(factor: cocoascript.vector_double3):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/1823485-init
    init():cocoascript.GKNoise;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoise/2138321-valueatposition
    valueAtPosition(position: cocoascript.vector_float2):number;
    //
    alloc():cocoascript.GKNoise;
    //
    init():cocoascript.GKNoise;
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
    initWithNoise(noise: cocoascript.GKNoise):cocoascript.GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823704-initwithnoise
    initWithNoise_size_origin_sampleCount_seamless(noise: cocoascript.GKNoise, size: cocoascript.vector_double2, origin: cocoascript.vector_double2, sampleCount: cocoascript.vector_int2, seamless: cocoascript.BOOL):cocoascript.GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823702-init
    init():cocoascript.GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1827529-noisemapwithnoise
    noiseMapWithNoise(noise: cocoascript.GKNoise):cocoascript.GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1827530-noisemapwithnoise
    noiseMapWithNoise_size_origin_sampleCount_seamless(noise: cocoascript.GKNoise, size: cocoascript.vector_double2, origin: cocoascript.vector_double2, sampleCount: cocoascript.vector_int2, seamless: cocoascript.BOOL):cocoascript.GKNoiseMap;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823698-valueatposition
    valueAtPosition(position: cocoascript.vector_int2):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823703-interpolatedvalueatposition
    interpolatedValueAtPosition(position: cocoascript.vector_float2):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823699-setvalue
    setValue_atPosition(value: number, position: cocoascript.vector_int2):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823700-size
    size(): cocoascript.vector_double2;
    setSize(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823696-origin
    origin(): cocoascript.vector_double2;
    setOrigin(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1823697-samplecount
    sampleCount(): cocoascript.vector_int2;
    setSampleCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknoisemap/1640681-seamless
    seamless(): cocoascript.BOOL;
    setSeamless(): void;
    //
    alloc():cocoascript.GKNoiseMap;
    //
    init():cocoascript.GKNoiseMap;
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
    octaveCount(): cocoascript.NSInteger;
    setOctaveCount(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1778292-lacunarity
    lacunarity(): number;
    setLacunarity(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcoherentnoisesource/1778293-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():cocoascript.GKCoherentNoiseSource;
    //
    init():cocoascript.GKCoherentNoiseSource;
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
    billowNoiseSourceWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, persistence: number, lacunarity: number, seed: number):cocoascript.GKBillowNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource/1640893-initwithfrequency
    initWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, persistence: number, lacunarity: number, seed: number):cocoascript.GKBillowNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkbillownoisesource/1640650-persistence
    persistence(): number;
    setPersistence(): void;
    //
    alloc():cocoascript.GKBillowNoiseSource;
    //
    init():cocoascript.GKBillowNoiseSource;
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
    initWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, persistence: number, lacunarity: number, seed: number):cocoascript.GKPerlinNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource/1640309-perlinnoisesourcewithfrequency
    perlinNoiseSourceWithFrequency_octaveCount_persistence_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, persistence: number, lacunarity: number, seed: number):cocoascript.GKPerlinNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkperlinnoisesource/1640299-persistence
    persistence(): number;
    setPersistence(): void;
    //
    alloc():cocoascript.GKPerlinNoiseSource;
    //
    init():cocoascript.GKPerlinNoiseSource;
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
    initWithFrequency_octaveCount_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, lacunarity: number, seed: number):cocoascript.GKRidgedNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkridgednoisesource/1646493-ridgednoisesourcewithfrequency
    ridgedNoiseSourceWithFrequency_octaveCount_lacunarity_seed(frequency: number, octaveCount: cocoascript.NSInteger, lacunarity: number, seed: number):cocoascript.GKRidgedNoiseSource;
    //
    alloc():cocoascript.GKRidgedNoiseSource;
    //
    init():cocoascript.GKRidgedNoiseSource;
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
    initWithFrequency_displacement_distanceEnabled_seed(frequency: number, displacement: number, distanceEnabled: cocoascript.BOOL, seed: number):cocoascript.GKVoronoiNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640771-voronoinoisewithfrequency
    voronoiNoiseWithFrequency_displacement_distanceEnabled_seed(frequency: number, displacement: number, distanceEnabled: cocoascript.BOOL, seed: number):cocoascript.GKVoronoiNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640711-frequency
    frequency(): number;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640682-displacement
    displacement(): number;
    setDisplacement(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640789-distanceenabled
    distanceEnabled(): cocoascript.BOOL;
    setDistanceEnabled(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkvoronoinoisesource/1640938-seed
    seed(): number;
    setSeed(): void;
    //
    alloc():cocoascript.GKVoronoiNoiseSource;
    //
    init():cocoascript.GKVoronoiNoiseSource;
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
    initWithFrequency(frequency: number):cocoascript.GKCylindersNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource/1640644-cylindersnoisewithfrequency
    cylindersNoiseWithFrequency(frequency: number):cocoascript.GKCylindersNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcylindersnoisesource/1640822-frequency
    frequency(): number;
    setFrequency(): void;
    //
    alloc():cocoascript.GKCylindersNoiseSource;
    //
    init():cocoascript.GKCylindersNoiseSource;
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
    initWithFrequency(frequency: number):cocoascript.GKSpheresNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource/1640830-spheresnoisewithfrequency
    spheresNoiseWithFrequency(frequency: number):cocoascript.GKSpheresNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkspheresnoisesource/1640716-frequency
    frequency(): number;
    setFrequency(): void;
    //
    alloc():cocoascript.GKSpheresNoiseSource;
    //
    init():cocoascript.GKSpheresNoiseSource;
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
    initWithSquareSize(squareSize: number):cocoascript.GKCheckerboardNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource/1823707-checkerboardnoisewithsquaresize
    checkerboardNoiseWithSquareSize(squareSize: number):cocoascript.GKCheckerboardNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkcheckerboardnoisesource/1823705-squaresize
    squareSize(): number;
    setSquareSize(): void;
    //
    alloc():cocoascript.GKCheckerboardNoiseSource;
    //
    init():cocoascript.GKCheckerboardNoiseSource;
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
    initWithValue(value: number):cocoascript.GKConstantNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource/1640720-constantnoisewithvalue
    constantNoiseWithValue(value: number):cocoascript.GKConstantNoiseSource;
    // doc://com.apple.documentation/documentation/gameplaykit/gkconstantnoisesource/1640959-value
    value(): number;
    setValue(): void;
    //
    alloc():cocoascript.GKConstantNoiseSource;
    //
    init():cocoascript.GKConstantNoiseSource;
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
    ruleWithPredicate_assertingFact_grade(predicate: cocoascript.NSPredicate, fact: cocoascript.NSObject, grade: number):cocoascript.GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501212-rulewithpredicate
    ruleWithPredicate_retractingFact_grade(predicate: cocoascript.NSPredicate, fact: cocoascript.NSObject, grade: number):cocoascript.GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501102-rulewithblockpredicate
    ruleWithBlockPredicate_action(predicate: cocoascript.GKRuleSystem, action: cocoascript.GKRuleSystem):cocoascript.GKRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501148-salience
    salience(): cocoascript.NSInteger;
    setSalience(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501234-evaluatepredicatewithsystem
    evaluatePredicateWithSystem(system: cocoascript.GKRuleSystem):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrule/1501111-performactionwithsystem
    performActionWithSystem(system: cocoascript.GKRuleSystem):void;
    //
    alloc():cocoascript.GKRule;
    //
    init():cocoascript.GKRule;
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
    initWithPredicate(predicate: cocoascript.NSPredicate):cocoascript.GKNSPredicateRule;
    // doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule/1501107-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gknspredicaterule/1501307-evaluatepredicatewithsystem
    evaluatePredicateWithSystem(system: cocoascript.GKRuleSystem):cocoascript.BOOL;
    //
    alloc():cocoascript.GKNSPredicateRule;
    //
    init():cocoascript.GKNSPredicateRule;
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
    init():cocoascript.GKRuleSystem;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501238-state
    state(): cocoascript.NSMutableDictionary;
    setState(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501114-rules
    rules(): cocoascript.GKRule;
    setRules(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501274-addrule
    addRule(rule: cocoascript.GKRule):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501130-addrulesfromarray
    addRulesFromArray(rules: cocoascript.GKRule):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501113-removeallrules
    removeAllRules():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501077-evaluate
    evaluate():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501078-agenda
    agenda(): cocoascript.GKRule;
    setAgenda(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501057-executed
    executed(): cocoascript.GKRule;
    setExecuted(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501301-reset
    reset():void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501276-facts
    facts(): cocoascript.NSArray;
    setFacts(): void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501109-assertfact
    assertFact(fact: cocoascript.NSObject):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501079-assertfact
    assertFact_grade(fact: cocoascript.NSObject, grade: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501262-retractfact
    retractFact(fact: cocoascript.NSObject):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501159-retractfact
    retractFact_grade(fact: cocoascript.NSObject, grade: number):void;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501177-gradeforfact
    gradeForFact(fact: cocoascript.NSObject):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501211-minimumgradeforfacts
    minimumGradeForFacts(facts: cocoascript.NSArray):number;
    // doc://com.apple.documentation/documentation/gameplaykit/gkrulesystem/1501081-maximumgradeforfacts
    maximumGradeForFacts(facts: cocoascript.NSArray):number;
    //
    alloc():cocoascript.GKRuleSystem;
    //
    init():cocoascript.GKRuleSystem;
  }
}

declare const GKRuleSystem: cocoascript.GKRuleSystem;
// doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelminscore
declare const GKGameModelMinScore: cocoascript.NSInteger;
// doc://com.apple.documentation/documentation/gameplaykit/gkgamemodelmaxscore
declare const GKGameModelMaxScore: cocoascript.NSInteger;
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
