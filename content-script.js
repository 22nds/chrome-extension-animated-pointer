'use strict';

function getMousePosition( e ) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}

function getRandomName() {
    return 'pointer_' + Math.floor( Math.random() * 1000001 );
}


function generate( e ) {

    const RADIUS = 50;
    const COLOR = '#ffff01';
    const STARTOPACITY = 1;
    const ENDOPACITY = 0.6;
    const DURATION = 500;

    var mousecoords = getMousePosition( e );
    var randomName = getRandomName();

    // create a pointer div#randomName
    var newPointer = document.createElement( 'div' );
    newPointer.setAttribute( 'id', randomName );
    document.getElementsByTagName( 'body' )[ 0 ].appendChild( newPointer );

    // create style element with animation
    var style = document.createElement( 'style' );
    style.type = 'text/css';
    var keyFrames = '\
        @keyframes ' + randomName + ' {\
            0% {\
                width: 5px;\
                height: 5px;\
                left: ' + mousecoords.x + 'px;\
                top: ' + mousecoords.y + 'px;\
                display: block;\
                opacity: ' + `${STARTOPACITY}` + ';\
            }\
            99% {\
                width: ' + `${RADIUS}` + 'px;\
                height: ' + `${RADIUS}` + 'px;\
                left: ' + `${mousecoords.x - RADIUS/2}` + 'px;\
                top: ' + `${mousecoords.y - RADIUS/2}` + 'px;\
                display: block;\
                opacity: ' + `${ENDOPACITY}` + ';\
            }\
            100% {\
                display: none;\
            }\
            }\
        @-webkit-keyframes ' + randomName + ' {\
            0% {\
                    width: 0;\
                    height: 0;\
                    left: ' + mousecoords.x + 'px;\
                    top: ' + mousecoords.y + 'px;\
                    display: block;\
                    opacity: ' + `${STARTOPACITY}` + ';\
            }\
            99% {\
                width: 60px;\
                height: 60px;\
                left: ' + `${mousecoords.x - RADIUS/2}` + 'px;\
                top: ' + `${mousecoords.y - RADIUS/2}` + 'px;\
                display: block;\
                opacity: ' + `${ENDOPACITY}` + ';\
            }\
            100% {\
                display: none;\
            }\
}';

    style.innerHTML = keyFrames;
    // append style element
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );

    // add custom styles to pointer
    // var pointer = document.getElementById( randomName ).classList;

    document.getElementById( randomName ).style.left = mousecoords.x + 'px';
    document.getElementById( randomName ).style.top = mousecoords.y + 'px';
    document.getElementById( randomName ).style.position = 'absolute';
    document.getElementById( randomName ).style.background = COLOR;
    document.getElementById( randomName ).style.width = 0;
    document.getElementById( randomName ).style.height = 0;
    document.getElementById( randomName ).style.borderRadius = RADIUS + 'px';
    document.getElementById( randomName ).style[ 'animation-name' ] = randomName;
    document.getElementById( randomName ).style[ 'animation-duration' ] = DURATION + 'ms';
    document.getElementById( randomName ).style[ 'animation-timing-function' ] = 'linear';
    document.getElementById( randomName ).style[ 'animation-fill-mode' ] = 'forwards';
    document.getElementById( randomName ).style[ '-webkit-animation-name' ] = randomName;
    document.getElementById( randomName ).style[ '-webkit-animation-duration' ] = DURATION + 'ms';
    document.getElementById( randomName ).style[ '-webkit-animation-timing-function' ] = 'linear';
    document.getElementById( randomName ).style[ '-webkit-animation-fill-mode' ] = 'forwards';

    setTimeout( function () {
        // clean up pointer
        var pointer = document.getElementById( randomName );
        pointer.parentNode.removeChild( pointer );

        // clean up styles
        style.parentNode.removeChild( style );
    }, DURATION );

}


// document.onclick = function ( e ) {
//     generate( e );
// };

window.addEventListener( 'click', function ( e ) {
    generate( e );
} );
