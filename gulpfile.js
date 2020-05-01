const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

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
gulp.task("minify", (done) => {
  gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
  done();
});

// minify js
gulp.task("sass", (done) => {
  gulp.src("src/sass/*.scss").pipe(sass()).on("error", sass.logError).pipe(gulp.dest("dist/css"));
  done();
});

gulp.task(
  "default",
  gulp.parallel("message", "copyHtml", "imageMin", "minify", "sass", (done) => {
    done();
  })
);
