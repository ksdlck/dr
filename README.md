Dr
==

SYNOPSIS
--------

Dr is a small library that centers around a dependency-oriented task runner.
Also included are Qr, a runner that ensures only one task is executing at a time, and Sr, a runner that runs its arguments in the order they are given.
Both of these extend Dr, and may be mixed with each other or another Dr by giving that Dr as the first argument to their constructor.

FUTURE
------

Dr currently makes no assumptions about what the results of your computations are, which is moderately detrimental to its utility in the sense that one often wants to determine control flow based on a different set of conditions.
Consider that often a procedure either fails or succeeds, and what we want to do in terms of executing the next procedure generally depends on this classification.
In fact, the very idea that a callback needs to handle both errors and results is itself somewhat flawed; one can clearly imagine that it is merely necessary to define the constraints under which a path should be taken--the minimal requirements for it to proceed--and that otherwise the application should fail in some reasonable way.
What this reasonable way is depends heavily on circumstances; a sane strategy is to fail fatally for any unhandled error condition during development, while simply logging unhandled errors in production.

LICENSE
-------

Copyright (c) 2011 Karel Sedláček

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
