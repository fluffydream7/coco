$("#birth").datepicker({
    changeYear: true,
    yearRange: '1900:2022',
    changeMonth: true
});

$('#form1').on('submit', function(){
    const idbox = $('.joinBox #idbox').val()
    if (!idbox) {
        $('.joinBox #idbox').focus().css({
            borderColor: '#f00'
        })
        return false
    }
})