Dr
==

SYNOPSIS
--------

Dr runs tasks for you in an order based on their dependencies.
For this to work, you must assign each task a string tag which is used to identify it, which is then used for dependencies.
Also included are Qr, a runner that ensures only one task is executing at a time, and Sr, a runner that runs its arguments in the order they are given.
Both of these extend Dr, and may be mixed with each other or another Dr by passing them as the first argument at instantiation.

PATTERNS
--------

Dr:

Dependency runner.
The starting point for everything.
Every task will be run as soon as its dependencies have run.
`Dr` takes string tags, procedures, and string tag dependencies, and executes each procedure as soon as all its dependencies have executed.

Sr:

Single runner.
Each task will be run as soon as its dependencies are satisfied, except no two tasks will be allowed to run simultaneously.
This is useful, e.g., for log output to a file, where one may have no particular desires about the order in which log entries appear, but wants to ensure that log entries' contents are not interleaved.

Qr:

Queue runner.
Each task will be run in the order it is added, in addition to the satisfaction of any explicitly-stated dependencies.

FUTURE
------

Dr currently makes no assumptions about what the results of your computations are, which is moderately detrimental to its utility in the sense that one often wants to determine control flow based on a different set of conditions.
Consider that often a procedure either fails or succeeds, and what we want to do in terms of executing the next procedure generally depends on this classification.
In fact, the very idea that a callback needs to handle both errors and results is itself somewhat flawed; one can clearly imagine that it is merely necessary to define the constraints under which a path should be taken--the minimal requirements for it to proceed--and that otherwise the application should fail in some reasonable way.

There's a good chance that I will write a successor to Dr in the near future that is a little more general.
That said, the interface provided by this slightly more monolithic construct is hard to beat in terms of structure and succinctness.

Depending on the scale at which this would be used, a component that provides dependency and tag namespacing might also be useful.

LICENSE
-------

Copyright (c) 2011 Karel Sedláček

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
