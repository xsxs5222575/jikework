window.onload = function() {
    changeColor(localStorage.color);
}
    //选择颜色改变localStorage存储的主题颜色
    var colors = document.getElementById('colors');
    colors.addEventListener('click', function(e) {
        var selectedColor = e.target.value;
        switch (selectedColor) {
            case 'blue':
                changeColor("#2196F3");
                break;
            case 'cheng':
                changeColor("#FF9800");
                break;
            case 'zi':
                changeColor("#EF79E9");
                break;
            default:
                return;
        }
    });
var changeColors = document.getElementsByClassName("nav_botton1");
    function changeColor(color) {
        document.getElementById('q1').style.background = color;
        for (var i = 0; i < changeColors.length; i++) {
            changeColors[i].style.color = color;
        }
        localStorage.color = color;
    }

