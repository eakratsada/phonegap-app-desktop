function getTemplates() {
    var templates = require("./node_modules/phonegap/package.json").templates;
    addTemplates(templates);
}

function templateWidget(name, description) {
    var str = "";
    str += "<div class='template-widget'>";
    if (name === 'hello-world') {
        str += "<div class='template-list-item'><input type='radio' name='selectedTemplate' value='" + name + "' checked> " + name + "</div>";
    } else {
        str += "<div class='template-list-item'><input type='radio' name='selectedTemplate' value='" + name + "'> " + name + "</div>";
    }

    str += "<div class='template-list-item overlay-form-item-description'>" + description + "</div>";
    str +="</div>";
    return str;
}

function addTemplates(templates) {

    $.each(templates, function(key, value) {
        var templateDOM = templateWidget(key, value.description);
        $("#templateList").append(templateDOM);
    });

    var snotify = templateWidget("Snotify", "A full example app with words to add to the description.");
    $("#templateList").append(snotify);

    $("input[name='selectedTemplate']").change(function() {
        // Do something interesting here
        alert(this.value);
    });

}