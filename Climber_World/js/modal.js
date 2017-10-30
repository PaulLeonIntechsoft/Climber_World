$(document).ready(function(){
    $("#produccion").click(function(){
        var v="";
        v = "<div id='exampleModalLive' class='modal fade show' tabindex='-1' role='dialog' aria-labelledby='exampleModalLiveLabel' style='display: block; padding-right: 15px;'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLiveLabel'>AVISO</h5><button onclick='cerrarModal()' type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button></div><div class='modal-body'><p>Acción no disponible. <br> Acción en producción.</p></div><div class='modal-footer'><button onclick='cerrarModal()' type='button' class='btn btn-primary'>Aceptar</button></div></div></div></div>";
        $("#pruebaModal").html(v);
    });
    
    $("#produccion2").click(function(){
        var v="";
        v = "<div id='exampleModalLive' class='modal fade show' tabindex='-1' role='dialog' aria-labelledby='exampleModalLiveLabel' style='display: block; padding-right: 15px;'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLiveLabel'>AVISO</h5><button onclick='cerrarModal()' type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button></div><div class='modal-body'><p>Acción no disponible. <br> Acción en producción.</p></div><div class='modal-footer'><button onclick='cerrarModal()' type='button' class='btn btn-primary'>Aceptar</button></div></div></div></div>";
        $("#pruebaModal").html(v);
    });
});

function cerrarModal() {
    $("#pruebaModal").html("");
}