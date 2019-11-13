

function formatUsPhone(2123654698) {

    var phoneTest = new RegExp(/^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/);

    phone = phone.trim();
    var results = phoneTest.exec(phone);
    if (results !== null && results.length > 8) {

        return "(" + results[3] + ") " + results[4] + "-" + results[5] + (typeof results[8] !== "undefined" ? " x" + results[8] : "");

    }
    else {
         return phone;
    }
}