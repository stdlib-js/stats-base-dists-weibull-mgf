<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Weibull][weibull-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \sum_{n=0}^\infty \frac{t^n\lambda^n}{n!}\Gamma\left(1+\frac{n}{k}\right)" alt="Moment-generating function (MGF) for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \sum_{n=0}^\infty \frac{t^n\lambda^n}{n!}\Gamma\left(1+\frac{n}{k}\right)" data-equation="eq:weibull_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/weibull/mgf/docs/img/equation_weibull_mgf.svg" alt="Moment-generating function (MGF) for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the scale paramater and `k > 0` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-weibull-mgf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-weibull-mgf' );
```

#### mgf( t, k, lambda )

Evaluates the [moment-generating function][mgf] (MGF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = mgf( 1.0, 1.0, 0.5);
// returns ~2.0

y = mgf( -1.0, 4.0, 4.0 );
// returns ~0.019
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, -1.0, 0.5 );
// returns NaN

y = mgf( 0.2, 0.0, 0.5 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 0.5, -1.0 );
// returns NaN

y = mgf( 0.2, 0.5, 0.0 );
// returns NaN
```

#### mgf.factory( k, lambda )

Returns a function for evaluating the [moment-generating function][mgf] of a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var myMGF = mgf.factory( 8.0, 10.0 );

var y = myMGF( 0.8 );
// returns ~3150.149

y = myMGF( 0.08 );
// returns ~2.137
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var mgf = require( '@stdlib/stats-base-dists-weibull-mgf' );

var lambda;
var k;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 5.0;
    lambda = ( randu() * 10.0 ) + EPS;
    k = ( randu() * 10.0 ) + EPS;
    y = mgf( t, lambda, k );
    console.log( 'x: %d, k: %d, ??: %d, M_X(t;k,??): %d', t.toFixed( 4 ), k.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull-mgf/main/LICENSE

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
