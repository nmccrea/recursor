# Recursor

A fractal creator. A side project built for fun and practice using TypeScript, React and Redux. Try it [here](https://recursor.nickmccrea.com).

![Recursor Tree Fractal Creator](docs/images/v1.0-demo.gif)

## Notes

Recursive rendering is achieved via the [`<Recursion />`](https://github.com/nmccrea/recursor/blob/master/src/components/TreeFractal/FractalView/Recursion/index.tsx) component, which renders a single [similarity](https://github.com/nmccrea/recursor/blob/master/src/models/similarity.ts) and then all active similarities as recursive children.

Futher musings [here](https://github.com/nmccrea/recursor/issues/1).
