const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

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

// minify js
gulp.task("minify", () => {
  gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

// minify js
gulp.task("sass", () => {
  gulp.src("src/sass/*.scss").pipe(sass()).on("error", sass.logError).pipe(gulp.dest("dist/css"));
});

gulp.task("default", () => {
  return console.log("Gulp is running ...");
});
