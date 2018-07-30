$(document).ready(function() {
    var filterUsername = /^([a-zA-Z_\ \-])+$/;
    var filterCode = /^([0-9])+$/;

    $('.card_button').on("click", function() {

        var data = {};
        data.owner = $('#owner').val();
        data.num1 = $('#num1').val();
        data.num2 = $('#num2').val();
        data.num3 = $('#num3').val();
        data.num4 = $('#num4').val();
        data.cvv = $('#cvv').val();
        data.cvv2 = $('#cvv2').val();


        // проверка условий
        if (!filterCode.test(data.num1) || !filterCode.test(data.num2) || !filterCode.test(data.num3) || !filterCode.test(data.num4) && $('.input-box_item').length > 1) {
            $('.input-box_item').css({"border-bottom-color":"red"});
            showError('Недопустимые символы в поле ввода Номер карты!', 30);
        } else {
            $('.input-box_item').css({"border-bottom-color":"#e4e9ee"});
        }
        if (data.num1.length !== 4 || data.num2.length !== 4 || data.num3.length !== 4 || data.num4.length !== 4){
            $('.input-box_item').css({"border-bottom-color":"red"});
        } else{
            $('.input-box_item').css({"border-bottom-color":"#e4e9ee"});
        }
        if (data.cvv.length !== 3){
            $('#cvv').css({"border-bottom-color":"red"});
        } else{
            $('#cvv').css({"border-bottom-color":"#e4e9ee"});
        }
        if (data.cvv2.length !== 3){
            $('#cvv2').css({"border-bottom-color":"red"});
        } else{
            $('#cvv2').css({"border-bottom-color":"#e4e9ee"});
        }
        if (!filterUsername.test(data.owner)) {
            $('#owner').css({"border-bottom-color":"red"});
            showError('Недопустимые символы в поле ввода Держатель!', 30);
        } else {
            $('#owner').css({"border-bottom-color":"#e4e9ee"});
        } 
        if (data.owner.length < 4) {
            $('#owner').css({"border-bottom-color":"red"});
        } else {
            $('#owner').css({"border-bottom-color":"#e4e9ee"});
        } 
        
        // Отправка ( все условия соблюдаются)
        if(data.num1.length == 4 && data.num2.length == 4 && data.num3.length == 4 && data.num4.length == 4 && data.cvv.length == 3 && data.owner.length >= 4 && filterUsername.test(data.owner)){
            showSuccess('Done!', 30);
        } else if (data.num1.length == 4 && data.num2.length == 4 && data.num3.length == 4 && data.num4.length == 4 && data.cvv2.length == 3 && data.owner.length >= 4 && filterUsername.test(data.owner)){
            showSuccess('Done!', 30);
        }
    });
    
    $('.menu-btn').click(function() {
        $('.menu-container').addClass('active');
    });
    $('.menu_close').click(function() {
        $('.menu-container').removeClass('active');
    });
});