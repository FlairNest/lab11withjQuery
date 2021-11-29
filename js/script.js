$('#reg').submit(function (e) {
    e.preventDefault();

    //getting elements
    var name = $('.nameinput').val();
    var psw = $('.pswinput').val();

    //validating
    try {
        //all Fields are Required.
        $(".required").each(function () {
            if ($(this).val().length == 0) {
                $(this).focus();
                throw "You forgot to write something";
            }
        });
        
        if( psw.length < 6 )
			throw "Password must contain at least 6 characters";
		
    } catch (emsg) {
        $(".alert").html(emsg).show().fadeOut(2000);;
        return false;
    }
    window.location.href = 'index3.html';
});
