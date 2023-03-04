import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${builderFolder}/js/`,
        images: `${builderFolder}/img/`,
        css: `${builderFolder}/css/`,
        html: `${builderFolder}/`,
        files: `${builderFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: { 
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: builderFolder,
    builderFolder,
    srcFolder:srcFolder,
    rootFolder: rootFolder,
};