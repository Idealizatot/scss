import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${builderFolder}/`,
        files: `${builderFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: builderFolder,
    builderFolder,
    srcFolder:srcFolder,
    rootFolder: rootFolder,
};