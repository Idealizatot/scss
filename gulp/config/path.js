import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: `${builderFolder}/css/`,
        html: `${builderFolder}/`,
        files: `${builderFolder}/files/`,
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: { 
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: builderFolder,
    builderFolder,
    srcFolder:srcFolder,
    rootFolder: rootFolder,
};