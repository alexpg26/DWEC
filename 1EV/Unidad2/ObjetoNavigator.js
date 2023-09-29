let options={
    enableLightaccuracy:true,
    timeout:5000,
    maximumAge:0            //al definir un objeto, el último no lleva coma (significa que va a haber algo mas abajo)
}

function success(pos){
    let crd = pos.coord;

    console.log('Your current position is: ');
    console.log('Latitude:'+crd.latitude);
    console.log('Longitude:'+crd.longitude);
};

function error(err){
    console.warn('ERROR('+err.code+'):'+err.message);
};

console.log(navigator.userAgent);
navigator.geolocation.getCurrentPosition(success, error, options);