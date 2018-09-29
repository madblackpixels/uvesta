const pattern_letters_only = new RegExp(/^([А-яA-z ]+)$/i);
const pattern_mail_check   = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const pattern_text_check   = new RegExp(/^([^><`]+)$/i);
const pattern_phone_check  = new RegExp(/^([+][7][ ][(][0-9]{3}[)][ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2})$/i);


//RegExp(/^([+][7][ ][(][9][0-9]{2}[ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2})$/i);

// validate simple Text
export function validateInput__Text(input_text) {
    if (input_text.match(pattern_letters_only)) return 'success';
    else return null
}


// validate mail field
export function validateInput__Mail(input_text) {
    if (input_text.match(pattern_mail_check)) return 'success';
    else return null
}


// validate text field
export function validateInput__TextField(input_text) {
    if (input_text.match(pattern_text_check)) return 'success';
    else return null
}


// validate phone number
export function validateInput__Phone(input_text) {
    if (input_text.match(pattern_phone_check)) return 'success';
    else return null
}
