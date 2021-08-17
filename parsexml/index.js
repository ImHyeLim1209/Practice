import fs from "fs";
import path from "path";
import xml2js from "xml2js";

const __dirname = path.resolve();

const parser = new xml2js.Parser();
fs.readFile(__dirname + "/document.xml", function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result["w:document"]["w:body"][0]["w:p"]);
        console.log("End!");
    })
});
