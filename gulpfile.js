const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

// logs message
gulp.task("message", () => {
  return console.log("Gulp is running ...");
});

// copy all html files
gulp.task("copyHtml", () => {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// optimize images
gulp.task("imageMin", () => {
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
});

gulp.task("default", () => {
  return console.log("Gulp is running ...");
});
