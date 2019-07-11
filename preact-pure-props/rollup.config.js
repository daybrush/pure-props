
import builder from "@daybrush/builder";
const preact = require("rollup-plugin-preact");


const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "preact": "Preact",
        "preact-compat": "preact-compat",
        // "preact-....": "preact-....",
    },
    exports: "named",
    plugins: [
        preact({
            noPropTypes: true,
            noEnv: true,
            noReactIs: true,
            aliasModules: {
                // "react-....": "preact-....",
            },
        }),
    ],
};

export default builder([
    {
        ...defaultOptions,
        input: "src/preact-pure-props/PureProps.ts",
        output: "./dist/pure-props.esm.js",
        format: "es",
    },
    {
        ...defaultOptions,
        input: "src/preact-pure-props/PureProps.ts",
        output: "./dist/pure-props.cjs.js",
        format: "cjs",
    },
]);
