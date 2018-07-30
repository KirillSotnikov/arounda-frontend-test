

var timer = null;

function hideError() {
    // очистка таймера
    if (timer != null){
        window.clearTimeout(timer);
    }

    // таймер на 5 секунд
    timer = window.setTimeout(function() {
        $('.error-holder').fadeOut();
    }, 4000);
}

// Показывает об ошибке
function showError (text, top) {
    $('.error-holder').removeClass('error-holder-success');
    $('.error-holder').css({"top":"" + top + "px", "z-index":"999999"});
    $('.error-holder span').text(text);

    $('.error-holder').fadeIn(function() {
        hideError();
    });
}

// Сообщает об успехе
function showSuccess(text, top) {
    $('.error-holder').addClass('error-holder-success');
    $('.error-holder').css({"top":"" + top + "px", "z-index":"999999"});
    $('.error-holder span').text(text);

    $('.error-holder').fadeIn(function() {
        hideError();
    });
} 

// Скрывает сообщение по клику
$(document).ready(function() {
    $('.error-holder').on("click", function() {
        $(this).fadeOut();
    });
});