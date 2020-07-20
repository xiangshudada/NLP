require("@babel/polyfill");
const formHandler = require('../client/js/formHandler');

// test if handleSubmit function is defined
test('Test if function that handles Submit is defined', async () => {
	expect(formHandler.handleSubmit)
	.toBeDefined();
});