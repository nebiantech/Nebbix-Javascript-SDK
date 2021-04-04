const Nebbix = require("../dist/Nebbix");
let nebbix = new Nebbix("SUstLcEqsoNVxi7", "c3e45968-8b3f-42a6-8873-6fedf5194150");
// nebbix.initialize("SUstLcEqsoNVxi7", "c3e45968-8b3f-42a6-8873-6fedf5194150");


let reference_code = "4EWG5rUdClaw7HS";
nebbix.paymentQuery(reference_code).then(e => console.log(e.data)).catch(e => {
    console.log(e)
});