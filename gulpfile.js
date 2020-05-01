const gulp = require("gulp");

// logs message
gulp.task("message", () => {
  return console.log("Gulp is running ...");
});

// copy all html files
gulp.task("copyHtml", () => {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("default", () => {
  return console.log("Gulp is running ...");
});
