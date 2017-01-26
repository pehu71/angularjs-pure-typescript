var gulp = require('gulp');
var rollup = require('rollup');
var fs = require('fs');
var typescript = require('rollup-plugin-typescript');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

gulp.task('bundle-js', function () {

    rollup.rollup({
        // The bundle's starting point. This file will be
        // included, along with the minimum necessary code
        // from its dependencies
        entry: 'app/app.ts',

        plugins: [
            typescript(),
            nodeResolve({module:true, jsnext:true, browser: true, preferBuiltins: false}),
            commonjs({
                include: 'node_modules/**'
            })

        ]
    }).then(function (bundle) {
        // Generate bundle + sourcemap
        var result = bundle.generate({
            // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
            format: 'cjs'
        });


        fs.writeFileSync('dist/bundle.js', result.code);
    })
});

gulp.task('default', ['bundle-js']);