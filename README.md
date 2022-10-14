<==  Stopwatch  ==>

Button 1 = Start
Button 1 = Stop
Button 1 = Start

Time is set to 0.
When I click on "start", the stopwatch starts running.
As soon as I click on stop, the stopwatch stops. Double stopping achieves nothing.
--When I click on start right after stopping, the stopwatch
--continues where it left off.
When I click on reset, the timer stops AND resets to 0.
----------------------------------------------------------------------
Analogy = How fast did the runner run a particular distance
starting form a particular point. The entire time, I want to
track the runners position.

<= Code =>
1. Clicking on "startBtn", defines the value of "start"
2.1 Clicking on "stop", defines the the value of "stop"
2.2 The difference between "start" and "stop" is
    calculated and stored into "timePassed"
2.3 The value of "timePassed" is now passed to "start"

3. If "startBtn" is clicked and the "start" value is already defined,
   we start measuring once again, this time with the prefix of the already
   defined value.

4. Clicking on "reset" while the timer is running stops the stopwatch
and resets the "start" to null.
4.1 Clicking on "reset" after the stopwatch was stopped resets resets the 
"start" to null.
