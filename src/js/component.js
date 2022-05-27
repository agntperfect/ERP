function dataURItoBlob(dataURI) {
    var arr = dataURI.split(','), mime = arr[0].match(/:(.*?);/)[1];
    var b = new Blob([atob(arr[1])], { type: mime });
    var URI = URL.createObjectURL(b);
    return URI;
}
function createLogo(element, _src) {
    var _src = dataURItoBlob(_src);
    var _component = document.querySelector(element);
    var _width = (_component.getAttribute('width') !== null) ? _component.getAttribute('width') : '400px';
    var _height = (_component.getAttribute('height') !== null) ? _component.getAttribute('height') : '400px';
    var _alt = _component.getAttribute('alt');
    _component.value = _src;
    _component.setAttribute("value", _component.value);
    var style = document.createElement('style');
    
    
    style.innerHTML =  `${element} {
        background: url(${ _src}) no-repeat 100%;
        width: ${_width};
        height: ${_height};
    }`
    
    document.head.appendChild(style);
}
