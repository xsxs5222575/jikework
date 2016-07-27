function score() {
    var x = document.getElementById("userScore").value;
    switch (true) {
        case x <= 100 && x > 90:
            {
                alert("恭喜您，你是1等生，继续努力");
            }
            break;
        case x <= 90 && x > 80:
            {
                alert("恭喜您，你是2等生，继续努力");
            }
            break;
        case x <= 80 && x > 70:
            {
                alert("恭喜您，你是3等生，继续努力");
            }
            break;
        case x <= 70 && x > 60:
            {
                alert("恭喜您，你是4等生，继续努力");
            }
            break;
        case x <= 60 && x > 50:
            {
                alert("很遗憾，你是5等生，继续努力");
            }
            break;
        case x <= 50 && x > 40:
            {
                alert("很遗憾，你是6等生，继续努力");
            }
            break;
        case x <= 40 && x > 30:
            {
                alert("很遗憾，你是7等生，继续努力");
            }
            break;
        case x <= 30 && x > 20:
            {
                alert("很遗憾，你是8等生，继续努力");
            }
            break;
        case x <= 20 && x > 10:
            {
                alert("很遗憾，你是9等生，继续努力");
            }
            break;
        case x <= 10 && x >= 0:
            {
                alert("很遗憾，你是10等生，继续努力");
            }
            break;
        case x > 100 || x < 0:
            {
                alert("请输入0-100之内数字,谢谢");
            }
            break;
        case isNaN(x):
            {
                alert("请输入0-100之内数字");

            }
            break;
    }
}