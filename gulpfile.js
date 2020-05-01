const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

// logs message
gulp.task("message", (done) => {
  console.log("Gulp is running ...");
  done();
});

// copy all html files
gulp.task("copyHtml", (done) => {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
  done();
});

// optimize images
gulp.task("imageMin", (done) => {
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
  done();
});

// minify js
gulp.task("sass", (done) => {
  gulp.src("src/sass/*.scss").pipe(sass()).on("error", sass.logError).pipe(gulp.dest("dist/css"));
  done();
});

// scripts
gulp.task("scripts", (done) => {
  gulp.src("src/js/*.js").pipe(concat("main.js")).pipe(uglify()).pipe(gulp.dest("dist/js"));
  done();
});

gulp.task(
  "default",
  gulp.parallel("message", "copyHtml", "imageMin", "scripts", "sass", (done) => {
    done();
  })
);

gulp.task("watch", () => {
  gulp.watch("src/js/*.js", gulp.task("scripts"));
  gulp.watch("src/images/*", gulp.task("imageMin"));
  gulp.watch("src/sass/*.scss", gulp.task("sass"));
  gulp.watch("src/*.html", gulp.task("copyHtml"));
});
