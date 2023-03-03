import gulp from "gulp";
import { path } from './gulp/config/path.js'
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js"

global.app = {
    path,
    gulp,
    plugins
}

function watch() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(copy, html, scss);

const dev = gulp.series(reset, mainTasks,  gulp.parallel(watch, server))

gulp.task('default', dev);