/************* 
 * Test Test *
 *************/


// store info about the experiment session:
let expName = 'Test';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(BaselineSelfReportRoutineBegin());
flowScheduler.add(BaselineSelfReportRoutineEachFrame());
flowScheduler.add(BaselineSelfReportRoutineEnd());
flowScheduler.add(ReadyCheckRoutineBegin());
flowScheduler.add(ReadyCheckRoutineEachFrame());
flowScheduler.add(ReadyCheckRoutineEnd());
const TrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrialsLoopBegin(TrialsLoopScheduler));
flowScheduler.add(TrialsLoopScheduler);
flowScheduler.add(TrialsLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'PsychoPyTest.xlsx', 'path': 'PsychoPyTest.xlsx'},
    {'name': 'SPINlogo.png', 'path': 'SPINlogo.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var BaselineSelfReportClock;
var BaselineSelfReportText;
var BaselineSlider;
var BaselineDone;
var ReadyCheckClock;
var ReadyCheckButton;
var ReadyCheckText;
var StimuliClock;
var StimuliImage;
var StimuliText;
var TaskClock;
var TaskText;
var TaskReady;
var PostTaskSelfReportClock;
var SelfReportDone;
var SelfReportSlider;
var SelfReportText;
var NeutralizeClock;
var polygon;
var EndClock;
var EndText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "BaselineSelfReport"
  BaselineSelfReportClock = new util.Clock();
  BaselineSelfReportText = new visual.TextStim({
    win: psychoJS.window,
    name: 'BaselineSelfReportText',
    text: 'How are you feeling today?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  BaselineSlider = new visual.Slider({
    win: psychoJS.window, name: 'BaselineSlider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["Calm", "Agitated"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  BaselineDone = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'BaselineDone',
    text: 'Done',
    fillColor: [0.3569, 1.0, (- 0.6314)],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.1],
    depth: -2
  });
  BaselineDone.clock = new util.Clock();
  
  // Initialize components for Routine "ReadyCheck"
  ReadyCheckClock = new util.Clock();
  ReadyCheckButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ReadyCheckButton',
    text: 'Ready',
    fillColor: [0.3569, 1.0, (- 0.6314)],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.4, 0.2],
    depth: 0
  });
  ReadyCheckButton.clock = new util.Clock();
  
  ReadyCheckText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ReadyCheckText',
    text: 'Press the Ready button once you are ready to start the trials',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Stimuli"
  StimuliClock = new util.Clock();
  StimuliImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'StimuliImage', units : undefined, 
    image : 'SPINlogo.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 256.0, interpolate : true, depth : 0.0 
  });
  StimuliText = new visual.TextStim({
    win: psychoJS.window,
    name: 'StimuliText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Task"
  TaskClock = new util.Clock();
  TaskText = new visual.TextStim({
    win: psychoJS.window,
    name: 'TaskText',
    text: 'Complete The Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  TaskReady = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'TaskReady',
    text: 'Ready',
    fillColor: [0.3569, 1.0, (- 0.6314)],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.4, 0.2],
    depth: -1
  });
  TaskReady.clock = new util.Clock();
  
  // Initialize components for Routine "PostTaskSelfReport"
  PostTaskSelfReportClock = new util.Clock();
  SelfReportDone = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SelfReportDone',
    text: 'Done',
    fillColor: [0.3569, 1.0, (- 0.6314)],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.1],
    depth: 0
  });
  SelfReportDone.clock = new util.Clock();
  
  SelfReportSlider = new visual.Slider({
    win: psychoJS.window, name: 'SelfReportSlider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["Calm", "Agitated"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  SelfReportText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SelfReportText',
    text: 'How are you feeling?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Neutralize"
  NeutralizeClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 0.5, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  EndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndText',
    text: 'End Of Experiment\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var BaselineSelfReportComponents;
function BaselineSelfReportRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BaselineSelfReport' ---
    t = 0;
    BaselineSelfReportClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BaselineSlider.reset()
    // reset BaselineDone to account for continued clicks & clear times on/off
    BaselineDone.reset()
    // keep track of which components have finished
    BaselineSelfReportComponents = [];
    BaselineSelfReportComponents.push(BaselineSelfReportText);
    BaselineSelfReportComponents.push(BaselineSlider);
    BaselineSelfReportComponents.push(BaselineDone);
    
    BaselineSelfReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BaselineSelfReportRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BaselineSelfReport' ---
    // get current time
    t = BaselineSelfReportClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BaselineSelfReportText* updates
    if (t >= 0.0 && BaselineSelfReportText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BaselineSelfReportText.tStart = t;  // (not accounting for frame time here)
      BaselineSelfReportText.frameNStart = frameN;  // exact frame index
      
      BaselineSelfReportText.setAutoDraw(true);
    }

    
    // *BaselineSlider* updates
    if (t >= 0.0 && BaselineSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BaselineSlider.tStart = t;  // (not accounting for frame time here)
      BaselineSlider.frameNStart = frameN;  // exact frame index
      
      BaselineSlider.setAutoDraw(true);
    }

    
    // *BaselineDone* updates
    if (((BaselineSlider.getRating() != None)) && BaselineDone.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BaselineDone.tStart = t;  // (not accounting for frame time here)
      BaselineDone.frameNStart = frameN;  // exact frame index
      
      BaselineDone.setAutoDraw(true);
    }

    if (BaselineDone.status === PsychoJS.Status.STARTED) {
      // check whether BaselineDone has been pressed
      if (BaselineDone.isClicked) {
        if (!BaselineDone.wasClicked) {
          // store time of first click
          BaselineDone.timesOn.push(BaselineDone.clock.getTime());
          BaselineDone.numClicks += 1;
          // store time clicked until
          BaselineDone.timesOff.push(BaselineDone.clock.getTime());
        } else {
          // update time clicked until;
          BaselineDone.timesOff[BaselineDone.timesOff.length - 1] = BaselineDone.clock.getTime();
        }
        if (!BaselineDone.wasClicked) {
          // end routine when BaselineDone is clicked
          continueRoutine = false;
        }
        // if BaselineDone is still clicked next frame, it is not a new click
        BaselineDone.wasClicked = true;
      } else {
        // if BaselineDone is clicked next frame, it is a new click
        BaselineDone.wasClicked = false;
      }
    } else {
      // keep clock at 0 if BaselineDone hasn't started / has finished
      BaselineDone.clock.reset();
      // if BaselineDone is clicked next frame, it is a new click
      BaselineDone.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BaselineSelfReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BaselineSelfReportRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BaselineSelfReport' ---
    BaselineSelfReportComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BaselineSlider.response', BaselineSlider.getRating());
    psychoJS.experiment.addData('BaselineSlider.rt', BaselineSlider.getRT());
    psychoJS.experiment.addData('BaselineDone.numClicks', BaselineDone.numClicks);
    psychoJS.experiment.addData('BaselineDone.timesOn', BaselineDone.timesOn);
    psychoJS.experiment.addData('BaselineDone.timesOff', BaselineDone.timesOff);
    // the Routine "BaselineSelfReport" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ReadyCheckComponents;
function ReadyCheckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ReadyCheck' ---
    t = 0;
    ReadyCheckClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // reset ReadyCheckButton to account for continued clicks & clear times on/off
    ReadyCheckButton.reset()
    // keep track of which components have finished
    ReadyCheckComponents = [];
    ReadyCheckComponents.push(ReadyCheckButton);
    ReadyCheckComponents.push(ReadyCheckText);
    
    ReadyCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ReadyCheckRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ReadyCheck' ---
    // get current time
    t = ReadyCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ReadyCheckButton* updates
    if (t >= 0 && ReadyCheckButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ReadyCheckButton.tStart = t;  // (not accounting for frame time here)
      ReadyCheckButton.frameNStart = frameN;  // exact frame index
      
      ReadyCheckButton.setAutoDraw(true);
    }

    if (ReadyCheckButton.status === PsychoJS.Status.STARTED) {
      // check whether ReadyCheckButton has been pressed
      if (ReadyCheckButton.isClicked) {
        if (!ReadyCheckButton.wasClicked) {
          // store time of first click
          ReadyCheckButton.timesOn.push(ReadyCheckButton.clock.getTime());
          ReadyCheckButton.numClicks += 1;
          // store time clicked until
          ReadyCheckButton.timesOff.push(ReadyCheckButton.clock.getTime());
        } else {
          // update time clicked until;
          ReadyCheckButton.timesOff[ReadyCheckButton.timesOff.length - 1] = ReadyCheckButton.clock.getTime();
        }
        if (!ReadyCheckButton.wasClicked) {
          // end routine when ReadyCheckButton is clicked
          continueRoutine = false;
        }
        // if ReadyCheckButton is still clicked next frame, it is not a new click
        ReadyCheckButton.wasClicked = true;
      } else {
        // if ReadyCheckButton is clicked next frame, it is a new click
        ReadyCheckButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ReadyCheckButton hasn't started / has finished
      ReadyCheckButton.clock.reset();
      // if ReadyCheckButton is clicked next frame, it is a new click
      ReadyCheckButton.wasClicked = false;
    }
    
    // *ReadyCheckText* updates
    if (t >= 0.0 && ReadyCheckText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ReadyCheckText.tStart = t;  // (not accounting for frame time here)
      ReadyCheckText.frameNStart = frameN;  // exact frame index
      
      ReadyCheckText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ReadyCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ReadyCheckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ReadyCheck' ---
    ReadyCheckComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ReadyCheckButton.numClicks', ReadyCheckButton.numClicks);
    psychoJS.experiment.addData('ReadyCheckButton.timesOn', ReadyCheckButton.timesOn);
    psychoJS.experiment.addData('ReadyCheckButton.timesOff', ReadyCheckButton.timesOff);
    // the Routine "ReadyCheck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Trials;
function TrialsLoopBegin(TrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PsychoPyTest.xlsx',
      seed: undefined, name: 'Trials'
    });
    psychoJS.experiment.addLoop(Trials); // add the loop to the experiment
    currentLoop = Trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Trials.forEach(function() {
      snapshot = Trials.getSnapshot();
    
      TrialsLoopScheduler.add(importConditions(snapshot));
      TrialsLoopScheduler.add(StimuliRoutineBegin(snapshot));
      TrialsLoopScheduler.add(StimuliRoutineEachFrame());
      TrialsLoopScheduler.add(StimuliRoutineEnd(snapshot));
      TrialsLoopScheduler.add(TaskRoutineBegin(snapshot));
      TrialsLoopScheduler.add(TaskRoutineEachFrame());
      TrialsLoopScheduler.add(TaskRoutineEnd(snapshot));
      TrialsLoopScheduler.add(PostTaskSelfReportRoutineBegin(snapshot));
      TrialsLoopScheduler.add(PostTaskSelfReportRoutineEachFrame());
      TrialsLoopScheduler.add(PostTaskSelfReportRoutineEnd(snapshot));
      TrialsLoopScheduler.add(NeutralizeRoutineBegin(snapshot));
      TrialsLoopScheduler.add(NeutralizeRoutineEachFrame());
      TrialsLoopScheduler.add(NeutralizeRoutineEnd(snapshot));
      TrialsLoopScheduler.add(TrialsLoopEndIteration(TrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function TrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var StimuliComponents;
function StimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stimuli' ---
    t = 0;
    StimuliClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    StimuliText.setText(StimuliTextRandom);
    // keep track of which components have finished
    StimuliComponents = [];
    StimuliComponents.push(StimuliImage);
    StimuliComponents.push(StimuliText);
    
    StimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function StimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stimuli' ---
    // get current time
    t = StimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *StimuliImage* updates
    if (t >= 0.0 && StimuliImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StimuliImage.tStart = t;  // (not accounting for frame time here)
      StimuliImage.frameNStart = frameN;  // exact frame index
      
      StimuliImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (StimuliImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      StimuliImage.setAutoDraw(false);
    }
    
    // *StimuliText* updates
    if (t >= 0.0 && StimuliText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StimuliText.tStart = t;  // (not accounting for frame time here)
      StimuliText.frameNStart = frameN;  // exact frame index
      
      StimuliText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (StimuliText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      StimuliText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stimuli' ---
    StimuliComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TaskComponents;
function TaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Task' ---
    t = 0;
    TaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // reset TaskReady to account for continued clicks & clear times on/off
    TaskReady.reset()
    // keep track of which components have finished
    TaskComponents = [];
    TaskComponents.push(TaskText);
    TaskComponents.push(TaskReady);
    
    TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Task' ---
    // get current time
    t = TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TaskText* updates
    if (t >= 0.0 && TaskText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TaskText.tStart = t;  // (not accounting for frame time here)
      TaskText.frameNStart = frameN;  // exact frame index
      
      TaskText.setAutoDraw(true);
    }

    
    // *TaskReady* updates
    if (t >= 0 && TaskReady.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TaskReady.tStart = t;  // (not accounting for frame time here)
      TaskReady.frameNStart = frameN;  // exact frame index
      
      TaskReady.setAutoDraw(true);
    }

    if (TaskReady.status === PsychoJS.Status.STARTED) {
      // check whether TaskReady has been pressed
      if (TaskReady.isClicked) {
        if (!TaskReady.wasClicked) {
          // store time of first click
          TaskReady.timesOn.push(TaskReady.clock.getTime());
          TaskReady.numClicks += 1;
          // store time clicked until
          TaskReady.timesOff.push(TaskReady.clock.getTime());
        } else {
          // update time clicked until;
          TaskReady.timesOff[TaskReady.timesOff.length - 1] = TaskReady.clock.getTime();
        }
        if (!TaskReady.wasClicked) {
          // end routine when TaskReady is clicked
          continueRoutine = false;
        }
        // if TaskReady is still clicked next frame, it is not a new click
        TaskReady.wasClicked = true;
      } else {
        // if TaskReady is clicked next frame, it is a new click
        TaskReady.wasClicked = false;
      }
    } else {
      // keep clock at 0 if TaskReady hasn't started / has finished
      TaskReady.clock.reset();
      // if TaskReady is clicked next frame, it is a new click
      TaskReady.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Task' ---
    TaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('TaskReady.numClicks', TaskReady.numClicks);
    psychoJS.experiment.addData('TaskReady.timesOn', TaskReady.timesOn);
    psychoJS.experiment.addData('TaskReady.timesOff', TaskReady.timesOff);
    // the Routine "Task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PostTaskSelfReportComponents;
function PostTaskSelfReportRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PostTaskSelfReport' ---
    t = 0;
    PostTaskSelfReportClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // reset SelfReportDone to account for continued clicks & clear times on/off
    SelfReportDone.reset()
    SelfReportSlider.reset()
    // keep track of which components have finished
    PostTaskSelfReportComponents = [];
    PostTaskSelfReportComponents.push(SelfReportDone);
    PostTaskSelfReportComponents.push(SelfReportSlider);
    PostTaskSelfReportComponents.push(SelfReportText);
    
    PostTaskSelfReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PostTaskSelfReportRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PostTaskSelfReport' ---
    // get current time
    t = PostTaskSelfReportClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SelfReportDone* updates
    if (((BaselineSlider.getRating() != None)) && SelfReportDone.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SelfReportDone.tStart = t;  // (not accounting for frame time here)
      SelfReportDone.frameNStart = frameN;  // exact frame index
      
      SelfReportDone.setAutoDraw(true);
    }

    if (SelfReportDone.status === PsychoJS.Status.STARTED) {
      // check whether SelfReportDone has been pressed
      if (SelfReportDone.isClicked) {
        if (!SelfReportDone.wasClicked) {
          // store time of first click
          SelfReportDone.timesOn.push(SelfReportDone.clock.getTime());
          SelfReportDone.numClicks += 1;
          // store time clicked until
          SelfReportDone.timesOff.push(SelfReportDone.clock.getTime());
        } else {
          // update time clicked until;
          SelfReportDone.timesOff[SelfReportDone.timesOff.length - 1] = SelfReportDone.clock.getTime();
        }
        if (!SelfReportDone.wasClicked) {
          // end routine when SelfReportDone is clicked
          continueRoutine = false;
        }
        // if SelfReportDone is still clicked next frame, it is not a new click
        SelfReportDone.wasClicked = true;
      } else {
        // if SelfReportDone is clicked next frame, it is a new click
        SelfReportDone.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SelfReportDone hasn't started / has finished
      SelfReportDone.clock.reset();
      // if SelfReportDone is clicked next frame, it is a new click
      SelfReportDone.wasClicked = false;
    }
    
    // *SelfReportSlider* updates
    if (t >= 0.0 && SelfReportSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SelfReportSlider.tStart = t;  // (not accounting for frame time here)
      SelfReportSlider.frameNStart = frameN;  // exact frame index
      
      SelfReportSlider.setAutoDraw(true);
    }

    
    // *SelfReportText* updates
    if (t >= 0.0 && SelfReportText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SelfReportText.tStart = t;  // (not accounting for frame time here)
      SelfReportText.frameNStart = frameN;  // exact frame index
      
      SelfReportText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PostTaskSelfReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PostTaskSelfReportRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PostTaskSelfReport' ---
    PostTaskSelfReportComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SelfReportDone.numClicks', SelfReportDone.numClicks);
    psychoJS.experiment.addData('SelfReportDone.timesOn', SelfReportDone.timesOn);
    psychoJS.experiment.addData('SelfReportDone.timesOff', SelfReportDone.timesOff);
    psychoJS.experiment.addData('SelfReportSlider.response', SelfReportSlider.getRating());
    psychoJS.experiment.addData('SelfReportSlider.rt', SelfReportSlider.getRT());
    // the Routine "PostTaskSelfReport" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NeutralizeComponents;
function NeutralizeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Neutralize' ---
    t = 0;
    NeutralizeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    NeutralizeComponents = [];
    NeutralizeComponents.push(polygon);
    
    NeutralizeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function NeutralizeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Neutralize' ---
    // get current time
    t = NeutralizeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    NeutralizeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NeutralizeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Neutralize' ---
    NeutralizeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(EndText);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EndText* updates
    if (t >= 0.0 && EndText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EndText.tStart = t;  // (not accounting for frame time here)
      EndText.frameNStart = frameN;  // exact frame index
      
      EndText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
