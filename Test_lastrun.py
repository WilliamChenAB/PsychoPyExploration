#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.2),
    on June 13, 2023, at 14:32
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.2'
expName = 'Test1'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\William Chen\\Desktop\\PsychoPyExploration\\Test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "BaselineSelfReport" ---
BaselineSelfReportText = visual.TextStim(win=win, name='BaselineSelfReportText',
    text='How are you feeling today?',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
BaselineSlider = visual.Slider(win=win, name='BaselineSlider',
    startValue=None, size=(1.0, 0.1), pos=(0, 0), units=win.units,
    labels=("Calm","Agitated"), ticks=(1, 2, 3, 4, 5), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, ori=0.0, depth=-1, readOnly=False)
BaselineDone = visual.ButtonStim(win, 
    text='Done', font='Open Sans',
    pos=(0.5, -0.4),
    letterHeight=0.05,
    size=(0.2, 0.1), borderWidth=0.0,
    fillColor=[0.3569, 1.0000, -0.6314], borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='BaselineDone',
    depth=-2
)
BaselineDone.buttonClock = core.Clock()

# --- Initialize components for Routine "ReadyCheck" ---
ReadyCheckButton = visual.ButtonStim(win, 
    text='Ready', font='Open Sans',
    pos=(0, 0),
    letterHeight=0.05,
    size=(0.4, 0.2), borderWidth=0.0,
    fillColor=[0.3569, 1.0000, -0.6314], borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='ReadyCheckButton',
    depth=0
)
ReadyCheckButton.buttonClock = core.Clock()
ReadyCheckText = visual.TextStim(win=win, name='ReadyCheckText',
    text='Press the Ready button once you are ready to start the trials',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "Stimuli" ---
StimuliImage = visual.ImageStim(
    win=win,
    name='StimuliImage', 
    image='SPINlogo.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=256.0, interpolate=True, depth=0.0)
StimuliText = visual.TextStim(win=win, name='StimuliText',
    text='',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "Task" ---
TaskText = visual.TextStim(win=win, name='TaskText',
    text='Complete The Task',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
TaskReady = visual.ButtonStim(win, 
    text='Ready', font='Open Sans',
    pos=(0, 0),
    letterHeight=0.05,
    size=(0.4, 0.2), borderWidth=0.0,
    fillColor=[0.3569, 1.0000, -0.6314], borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='TaskReady',
    depth=-1
)
TaskReady.buttonClock = core.Clock()

# --- Initialize components for Routine "PostTaskSelfReport" ---
SelfReportDone = visual.ButtonStim(win, 
    text='Done', font='Open Sans',
    pos=(0.5, -0.4),
    letterHeight=0.05,
    size=(0.2, 0.1), borderWidth=0.0,
    fillColor=[0.3569, 1.0000, -0.6314], borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='SelfReportDone',
    depth=0
)
SelfReportDone.buttonClock = core.Clock()
SelfReportSlider = visual.Slider(win=win, name='SelfReportSlider',
    startValue=None, size=(1.0, 0.1), pos=(0, 0), units=win.units,
    labels=("Calm","Agitated"), ticks=(1, 2, 3, 4, 5), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, ori=0.0, depth=-1, readOnly=False)
SelfReportText = visual.TextStim(win=win, name='SelfReportText',
    text='How are you feeling?',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "Neutralize" ---
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',
    size=(0.5, 0.5),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=0.5,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# --- Initialize components for Routine "End" ---
EndText = visual.TextStim(win=win, name='EndText',
    text='End Of Experiment\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "BaselineSelfReport" ---
continueRoutine = True
# update component parameters for each repeat
BaselineSlider.reset()
# reset BaselineDone to account for continued clicks & clear times on/off
BaselineDone.reset()
# keep track of which components have finished
BaselineSelfReportComponents = [BaselineSelfReportText, BaselineSlider, BaselineDone]
for thisComponent in BaselineSelfReportComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "BaselineSelfReport" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *BaselineSelfReportText* updates
    
    # if BaselineSelfReportText is starting this frame...
    if BaselineSelfReportText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        BaselineSelfReportText.frameNStart = frameN  # exact frame index
        BaselineSelfReportText.tStart = t  # local t and not account for scr refresh
        BaselineSelfReportText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(BaselineSelfReportText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'BaselineSelfReportText.started')
        # update status
        BaselineSelfReportText.status = STARTED
        BaselineSelfReportText.setAutoDraw(True)
    
    # if BaselineSelfReportText is active this frame...
    if BaselineSelfReportText.status == STARTED:
        # update params
        pass
    
    # *BaselineSlider* updates
    
    # if BaselineSlider is starting this frame...
    if BaselineSlider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        BaselineSlider.frameNStart = frameN  # exact frame index
        BaselineSlider.tStart = t  # local t and not account for scr refresh
        BaselineSlider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(BaselineSlider, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'BaselineSlider.started')
        # update status
        BaselineSlider.status = STARTED
        BaselineSlider.setAutoDraw(True)
    
    # if BaselineSlider is active this frame...
    if BaselineSlider.status == STARTED:
        # update params
        pass
    # *BaselineDone* updates
    
    # if BaselineDone is starting this frame...
    if BaselineDone.status == NOT_STARTED and BaselineSlider.getRating() != None:
        # keep track of start time/frame for later
        BaselineDone.frameNStart = frameN  # exact frame index
        BaselineDone.tStart = t  # local t and not account for scr refresh
        BaselineDone.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(BaselineDone, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'BaselineDone.started')
        # update status
        BaselineDone.status = STARTED
        BaselineDone.setAutoDraw(True)
    
    # if BaselineDone is active this frame...
    if BaselineDone.status == STARTED:
        # update params
        pass
        # check whether BaselineDone has been pressed
        if BaselineDone.isClicked:
            if not BaselineDone.wasClicked:
                # if this is a new click, store time of first click and clicked until
                BaselineDone.timesOn.append(BaselineDone.buttonClock.getTime())
                BaselineDone.timesOff.append(BaselineDone.buttonClock.getTime())
            elif len(BaselineDone.timesOff):
                # if click is continuing from last frame, update time of clicked until
                BaselineDone.timesOff[-1] = BaselineDone.buttonClock.getTime()
            if not BaselineDone.wasClicked:
                # end routine when BaselineDone is clicked
                continueRoutine = False
            if not BaselineDone.wasClicked:
                # run callback code when BaselineDone is clicked
                pass
    # take note of whether BaselineDone was clicked, so that next frame we know if clicks are new
    BaselineDone.wasClicked = BaselineDone.isClicked and BaselineDone.status == STARTED
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in BaselineSelfReportComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "BaselineSelfReport" ---
for thisComponent in BaselineSelfReportComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('BaselineSlider.response', BaselineSlider.getRating())
thisExp.addData('BaselineSlider.rt', BaselineSlider.getRT())
thisExp.addData('BaselineDone.numClicks', BaselineDone.numClicks)
if BaselineDone.numClicks:
   thisExp.addData('BaselineDone.timesOn', BaselineDone.timesOn)
   thisExp.addData('BaselineDone.timesOff', BaselineDone.timesOff)
else:
   thisExp.addData('BaselineDone.timesOn', "")
   thisExp.addData('BaselineDone.timesOff', "")
# the Routine "BaselineSelfReport" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ReadyCheck" ---
continueRoutine = True
# update component parameters for each repeat
# reset ReadyCheckButton to account for continued clicks & clear times on/off
ReadyCheckButton.reset()
# keep track of which components have finished
ReadyCheckComponents = [ReadyCheckButton, ReadyCheckText]
for thisComponent in ReadyCheckComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ReadyCheck" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # *ReadyCheckButton* updates
    
    # if ReadyCheckButton is starting this frame...
    if ReadyCheckButton.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        ReadyCheckButton.frameNStart = frameN  # exact frame index
        ReadyCheckButton.tStart = t  # local t and not account for scr refresh
        ReadyCheckButton.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ReadyCheckButton, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ReadyCheckButton.started')
        # update status
        ReadyCheckButton.status = STARTED
        ReadyCheckButton.setAutoDraw(True)
    
    # if ReadyCheckButton is active this frame...
    if ReadyCheckButton.status == STARTED:
        # update params
        pass
        # check whether ReadyCheckButton has been pressed
        if ReadyCheckButton.isClicked:
            if not ReadyCheckButton.wasClicked:
                # if this is a new click, store time of first click and clicked until
                ReadyCheckButton.timesOn.append(ReadyCheckButton.buttonClock.getTime())
                ReadyCheckButton.timesOff.append(ReadyCheckButton.buttonClock.getTime())
            elif len(ReadyCheckButton.timesOff):
                # if click is continuing from last frame, update time of clicked until
                ReadyCheckButton.timesOff[-1] = ReadyCheckButton.buttonClock.getTime()
            if not ReadyCheckButton.wasClicked:
                # end routine when ReadyCheckButton is clicked
                continueRoutine = False
            if not ReadyCheckButton.wasClicked:
                # run callback code when ReadyCheckButton is clicked
                pass
    # take note of whether ReadyCheckButton was clicked, so that next frame we know if clicks are new
    ReadyCheckButton.wasClicked = ReadyCheckButton.isClicked and ReadyCheckButton.status == STARTED
    
    # *ReadyCheckText* updates
    
    # if ReadyCheckText is starting this frame...
    if ReadyCheckText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ReadyCheckText.frameNStart = frameN  # exact frame index
        ReadyCheckText.tStart = t  # local t and not account for scr refresh
        ReadyCheckText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ReadyCheckText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ReadyCheckText.started')
        # update status
        ReadyCheckText.status = STARTED
        ReadyCheckText.setAutoDraw(True)
    
    # if ReadyCheckText is active this frame...
    if ReadyCheckText.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ReadyCheckComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ReadyCheck" ---
for thisComponent in ReadyCheckComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('ReadyCheckButton.numClicks', ReadyCheckButton.numClicks)
if ReadyCheckButton.numClicks:
   thisExp.addData('ReadyCheckButton.timesOn', ReadyCheckButton.timesOn)
   thisExp.addData('ReadyCheckButton.timesOff', ReadyCheckButton.timesOff)
else:
   thisExp.addData('ReadyCheckButton.timesOn', "")
   thisExp.addData('ReadyCheckButton.timesOff', "")
# the Routine "ReadyCheck" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('PsychoPyTest.xlsx'),
    seed=None, name='Trials')
thisExp.addLoop(Trials)  # add the loop to the experiment
thisTrial = Trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in Trials:
    currentLoop = Trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "Stimuli" ---
    continueRoutine = True
    # update component parameters for each repeat
    StimuliText.setText(StimuliTextRand00)
    # keep track of which components have finished
    StimuliComponents = [StimuliImage, StimuliText]
    for thisComponent in StimuliComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Stimuli" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *StimuliImage* updates
        
        # if StimuliImage is starting this frame...
        if StimuliImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            StimuliImage.frameNStart = frameN  # exact frame index
            StimuliImage.tStart = t  # local t and not account for scr refresh
            StimuliImage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(StimuliImage, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'StimuliImage.started')
            # update status
            StimuliImage.status = STARTED
            StimuliImage.setAutoDraw(True)
        
        # if StimuliImage is active this frame...
        if StimuliImage.status == STARTED:
            # update params
            pass
        
        # if StimuliImage is stopping this frame...
        if StimuliImage.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > StimuliImage.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                StimuliImage.tStop = t  # not accounting for scr refresh
                StimuliImage.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'StimuliImage.stopped')
                # update status
                StimuliImage.status = FINISHED
                StimuliImage.setAutoDraw(False)
        
        # *StimuliText* updates
        
        # if StimuliText is starting this frame...
        if StimuliText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            StimuliText.frameNStart = frameN  # exact frame index
            StimuliText.tStart = t  # local t and not account for scr refresh
            StimuliText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(StimuliText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'StimuliText.started')
            # update status
            StimuliText.status = STARTED
            StimuliText.setAutoDraw(True)
        
        # if StimuliText is active this frame...
        if StimuliText.status == STARTED:
            # update params
            pass
        
        # if StimuliText is stopping this frame...
        if StimuliText.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > StimuliText.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                StimuliText.tStop = t  # not accounting for scr refresh
                StimuliText.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'StimuliText.stopped')
                # update status
                StimuliText.status = FINISHED
                StimuliText.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in StimuliComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Stimuli" ---
    for thisComponent in StimuliComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    
    # --- Prepare to start Routine "Task" ---
    continueRoutine = True
    # update component parameters for each repeat
    # reset TaskReady to account for continued clicks & clear times on/off
    TaskReady.reset()
    # keep track of which components have finished
    TaskComponents = [TaskText, TaskReady]
    for thisComponent in TaskComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Task" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *TaskText* updates
        
        # if TaskText is starting this frame...
        if TaskText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            TaskText.frameNStart = frameN  # exact frame index
            TaskText.tStart = t  # local t and not account for scr refresh
            TaskText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TaskText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'TaskText.started')
            # update status
            TaskText.status = STARTED
            TaskText.setAutoDraw(True)
        
        # if TaskText is active this frame...
        if TaskText.status == STARTED:
            # update params
            pass
        # *TaskReady* updates
        
        # if TaskReady is starting this frame...
        if TaskReady.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            TaskReady.frameNStart = frameN  # exact frame index
            TaskReady.tStart = t  # local t and not account for scr refresh
            TaskReady.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TaskReady, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'TaskReady.started')
            # update status
            TaskReady.status = STARTED
            TaskReady.setAutoDraw(True)
        
        # if TaskReady is active this frame...
        if TaskReady.status == STARTED:
            # update params
            pass
            # check whether TaskReady has been pressed
            if TaskReady.isClicked:
                if not TaskReady.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    TaskReady.timesOn.append(TaskReady.buttonClock.getTime())
                    TaskReady.timesOff.append(TaskReady.buttonClock.getTime())
                elif len(TaskReady.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    TaskReady.timesOff[-1] = TaskReady.buttonClock.getTime()
                if not TaskReady.wasClicked:
                    # end routine when TaskReady is clicked
                    continueRoutine = False
                if not TaskReady.wasClicked:
                    # run callback code when TaskReady is clicked
                    pass
        # take note of whether TaskReady was clicked, so that next frame we know if clicks are new
        TaskReady.wasClicked = TaskReady.isClicked and TaskReady.status == STARTED
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TaskComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Task" ---
    for thisComponent in TaskComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Trials.addData('TaskReady.numClicks', TaskReady.numClicks)
    if TaskReady.numClicks:
       Trials.addData('TaskReady.timesOn', TaskReady.timesOn)
       Trials.addData('TaskReady.timesOff', TaskReady.timesOff)
    else:
       Trials.addData('TaskReady.timesOn', "")
       Trials.addData('TaskReady.timesOff', "")
    # the Routine "Task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "PostTaskSelfReport" ---
    continueRoutine = True
    # update component parameters for each repeat
    # reset SelfReportDone to account for continued clicks & clear times on/off
    SelfReportDone.reset()
    SelfReportSlider.reset()
    # keep track of which components have finished
    PostTaskSelfReportComponents = [SelfReportDone, SelfReportSlider, SelfReportText]
    for thisComponent in PostTaskSelfReportComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "PostTaskSelfReport" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *SelfReportDone* updates
        
        # if SelfReportDone is starting this frame...
        if SelfReportDone.status == NOT_STARTED and BaselineSlider.getRating() != None:
            # keep track of start time/frame for later
            SelfReportDone.frameNStart = frameN  # exact frame index
            SelfReportDone.tStart = t  # local t and not account for scr refresh
            SelfReportDone.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SelfReportDone, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'SelfReportDone.started')
            # update status
            SelfReportDone.status = STARTED
            SelfReportDone.setAutoDraw(True)
        
        # if SelfReportDone is active this frame...
        if SelfReportDone.status == STARTED:
            # update params
            pass
            # check whether SelfReportDone has been pressed
            if SelfReportDone.isClicked:
                if not SelfReportDone.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    SelfReportDone.timesOn.append(SelfReportDone.buttonClock.getTime())
                    SelfReportDone.timesOff.append(SelfReportDone.buttonClock.getTime())
                elif len(SelfReportDone.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    SelfReportDone.timesOff[-1] = SelfReportDone.buttonClock.getTime()
                if not SelfReportDone.wasClicked:
                    # end routine when SelfReportDone is clicked
                    continueRoutine = False
                if not SelfReportDone.wasClicked:
                    # run callback code when SelfReportDone is clicked
                    pass
        # take note of whether SelfReportDone was clicked, so that next frame we know if clicks are new
        SelfReportDone.wasClicked = SelfReportDone.isClicked and SelfReportDone.status == STARTED
        
        # *SelfReportSlider* updates
        
        # if SelfReportSlider is starting this frame...
        if SelfReportSlider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SelfReportSlider.frameNStart = frameN  # exact frame index
            SelfReportSlider.tStart = t  # local t and not account for scr refresh
            SelfReportSlider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SelfReportSlider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'SelfReportSlider.started')
            # update status
            SelfReportSlider.status = STARTED
            SelfReportSlider.setAutoDraw(True)
        
        # if SelfReportSlider is active this frame...
        if SelfReportSlider.status == STARTED:
            # update params
            pass
        
        # *SelfReportText* updates
        
        # if SelfReportText is starting this frame...
        if SelfReportText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SelfReportText.frameNStart = frameN  # exact frame index
            SelfReportText.tStart = t  # local t and not account for scr refresh
            SelfReportText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SelfReportText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'SelfReportText.started')
            # update status
            SelfReportText.status = STARTED
            SelfReportText.setAutoDraw(True)
        
        # if SelfReportText is active this frame...
        if SelfReportText.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PostTaskSelfReportComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "PostTaskSelfReport" ---
    for thisComponent in PostTaskSelfReportComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Trials.addData('SelfReportDone.numClicks', SelfReportDone.numClicks)
    if SelfReportDone.numClicks:
       Trials.addData('SelfReportDone.timesOn', SelfReportDone.timesOn)
       Trials.addData('SelfReportDone.timesOff', SelfReportDone.timesOff)
    else:
       Trials.addData('SelfReportDone.timesOn', "")
       Trials.addData('SelfReportDone.timesOff', "")
    Trials.addData('SelfReportSlider.response', SelfReportSlider.getRating())
    Trials.addData('SelfReportSlider.rt', SelfReportSlider.getRT())
    # the Routine "PostTaskSelfReport" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Neutralize" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    NeutralizeComponents = [polygon]
    for thisComponent in NeutralizeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Neutralize" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon* updates
        
        # if polygon is starting this frame...
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon.started')
            # update status
            polygon.status = STARTED
            polygon.setAutoDraw(True)
        
        # if polygon is active this frame...
        if polygon.status == STARTED:
            # update params
            pass
        
        # if polygon is stopping this frame...
        if polygon.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'polygon.stopped')
                # update status
                polygon.status = FINISHED
                polygon.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in NeutralizeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Neutralize" ---
    for thisComponent in NeutralizeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'Trials'


# --- Prepare to start Routine "End" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
EndComponents = [EndText]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "End" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *EndText* updates
    
    # if EndText is starting this frame...
    if EndText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        EndText.frameNStart = frameN  # exact frame index
        EndText.tStart = t  # local t and not account for scr refresh
        EndText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(EndText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'EndText.started')
        # update status
        EndText.status = STARTED
        EndText.setAutoDraw(True)
    
    # if EndText is active this frame...
    if EndText.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "End" ---
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "End" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
