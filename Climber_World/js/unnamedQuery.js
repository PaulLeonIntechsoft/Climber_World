$(document).ready(function(){
    resizeForm();
    $(window).resize(resizeForm);
});

function resizeForm(){

    // Change container size
    alterClassRemove(992,"#containerPadre", "container");
    alterClassAdd(992,"#containerPadre", "container-fluid");

    // Change col size (whole form container)
    alterClassRemove(767, 829, "#emptyPlace", "col-md-4");
    alterClassAdd(767, 829, "#emptyPlace", "col-md-3");
    
    alterClassAdd(767, 829, "#formContainer", "col-md-9");
    alterClassRemove(767, 829, "#formContainer", "col-md-8");

};
