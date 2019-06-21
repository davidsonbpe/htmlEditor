var editboxHTML =
    '<html class="expand close">' +
    '<head>' +
    '<style type="text/css">' +
    '.expand { width: 100%; height: 100%; }' +
    '.close { border: none; margin: 0px; padding: 0px; }' +
    'html,body { overflow: hidden; }' +
    '<\/style>' +
    '<\/head>' +
    '<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
    '<form class="expand close" name="f">' +
    '<textarea class="expand close" style="background: #303233;color: #27d020;" name="ta" wrap="hard" spellcheck="false">' +
    '<\/textarea>' +
    '<\/form>' +
    '<\/body>' +
    '<\/html>';
var defaultStuff =
    /*'<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">' +
    /*'HTML Editor' +*
    '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>' +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>' +
    '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>'*/
    'HTML Editor';

var extraStuff = '<div style="position:absolute; margin:.3em; bottom:0em; right:0em;"><small>\n <a href="" target="_top"><\/a> <a href="" target="_top"><\/a>.\n<\/small><\/div>';
var old = '';

function init() {
    window.editbox.document.write(editboxHTML);
    window.editbox.document.close();
    window.editbox.document.f.ta.value = defaultStuff;
    update();
}

function update() {
    var textarea = window.editbox.document.f.ta;
    var d = dynamicframe.document;
    if (old != textarea.value) {
        old = textarea.value;
        d.open();
        d.write(old);
        if (old.replace(/[\r\n]/g, '') == defaultStuff.replace(/[\r\n]/g, ''))
            d.write(extraStuff);
        d.close();
    }
    window.setTimeout(update, 150);
}
