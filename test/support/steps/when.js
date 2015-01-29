/**
 * when steps
 */

module.exports = function() {

    this.when(/^I (click|doubleclick) on the (link|button|element) "$string"$/, function(action, type, element, done) {
            var elem = type === 'link' ? '=' + element : element,
                method = action === 'click' ? 'click' : 'doubleClick';
            this.browser[method](elem).call(done);
        })

        .when(/^I (add|set) "$string" to the inputfield "$string"$/, function(method, text, element, done) {
            var command = method === 'add' ? 'addValue' : 'setValue';
            this.browser[command](element, text).call(done);
        })

        .when(/^I clear the inputfield "$string"$/, function(element, done) {
            this.browser.clearElement(element).call(done);
        })

        .when(/^I drag element "$string" to element "$string"$/, function(source, destination, done) {
            this.browser.dragAndDrop(source, destination, this.noError).call(done);
        })

        .when(/^I submit the form "$string"$/, function(form, done) {
            this.browser.submitForm(form).call(done);
        })

        .when(/^I wait on element "$string"( for (\d+)ms)*$/, function(elem, obsolete, ms, done) {
            ms = parseInt(ms, 10) || 3000;
            this.browser.waitFor(elem, ms).call(done);
        })

        .when(/^I pause for (\d+)ms$/, function(ms, done) {
            this.browser.pause(ms).call(done);
        })

        .when(/^I press "$string"$/, function(key, done) {
            this.browser.keys(key).call(done);
        })

        .when(/^I set a cookie "$string" with the content "$string"$/, function(name, content, done) {
            this.browser.setCookie({
                name: name,
                value: content
            }).call(done);
        })

        .when(/^I delete the cookie "$string"$/, function(name, done) {
            this.browser.deleteCookie(name).call(done);
        });

}
