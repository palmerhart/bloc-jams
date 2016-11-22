var animatePoints = function () {
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(indexnum) {
        points[indexnum].style.opacity = 1;
        points[indexnum].style.transform = "scaleX(1) translateY(0)";
        points[indexnum].style.msTransform = "scaleX(1) translateY(0)";
        points[indexnum].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    
    for (var i = 0; i < points.length; i++) {
        revealPoint(i);            
        }           
};        
