describe('ResponsiveTester', function() {

    it('should be a function', function() {
        expect(typeof ResponsiveTester).toBe('function');
    });

    var options = {
        htmlId: 'responsive-puta'
    };
    var screen = new ResponsiveTester(options);

    it('should create a html element', function() {
        expect($('#' + options.htmlId)[0]).toBeInDOM();
    });

    it('should set device type', function() {
        expect(screen.get().length).toBeGreaterThan(0);

    });
});