"use strict";
var util = require("gulp-util");
var helix = {};

helix.header = function header() {
    util.log("O---o                                                            ");
    util.log(" O-o    _____ _ _                            _   _      _ _      ");
    util.log("  O    /  ___(_) |                          | | | |    | (_)     "); 
    util.log(" o-O   \\ `--. _| |_ ___  ___ ___  _ __ ___  | |_| | ___| |___  __");
    util.log("o---O   `--. \\ | __/ _ \\/ __/ _ \\| '__/ _ \\ |  _  |/ _ \\ | \\ \\/ /");
    util.log("O---o  /\\__/ / | ||  __/ (_| (_) | | |  __/ | | | |  __/ | |>  < ");
    util.log(" O-o   \\____/|_|\\__\\___|\\___\\___/|_|  \\___| \\_| |_/\\___|_|_/_/\\_\\");
    util.log("  O                                                              ");
    util.log(" o-O   -------------------- helix.sitecore.net ------------------");
    util.log("o---O                                                            "); 
};

module.exports = helix;