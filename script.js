$(document).ready(function() {
    var firstCard = null;
    var secondCard = null;
    var lockBoard = false;

    $('.card').click(function() {
        if (lockBoard) return;
        if ($(this).hasClass('flipped')) return;

        // $(this).text($(this).data('signal'));
        $(this).html('<img src="./img/' + $(this).data('signal') + '">');
        $(this).addClass('flipped');

        if (!firstCard) {
            firstCard = $(this);
        } else {
            secondCard = $(this);
            lockBoard = true;

            if (firstCard.data('signal') === secondCard.data('signal')) {
                $('#memory-result').text('¡Correcto! Has encontrado una pareja.');
                $('#memory-result').css('color', 'green');
                resetCards(true);
            } else {
                $('#memory-result').text('Incorrecto. Inténtalo de nuevo.');
                $('#memory-result').css('color', 'red');
                setTimeout(resetCards, 1000, false);
            }
        }
    });

    function resetCards(isMatch) {
        if (!isMatch) {
            firstCard.text('❓').removeClass('flipped');
            secondCard.text('❓').removeClass('flipped');
        }
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }
});
