var ELEMENT_SELECTOR, ListView;
ListView = infinity.ListView;
ELEMENT_SELECTOR = '#test';

describe('ListView', function() {
	var $el, lv;
	$el = $(ELEMENT_SELECTOR);
	lv = null;
	beforeEach(function() {
		return lv = new ListView($el);
	});
	afterEach(function() {
		return lv.remove();
	});
	it('should be able to be added and removed from an element', function() {
		lv.remove();
		expect($(ELEMENT_SELECTOR).length).to.be(1);
		return expect($(ELEMENT_SELECTOR).children().length).to.be(0);
	});
	it('should be initialized with no height', function() {
		expect(lv.height).to.be(0);
		return expect($el.height()).to.be(0);
	});
	it('should find things appended to it with a CSS selector', function() {
		var $content, find;
		$content = $('<div class=test></div>');
		lv.append($content);
		find = lv.find('.test');
		return expect(find[0].$el).to.be($content);
	});
	it('should find things prepended to it with a CSS selector', function() {
		var $content, find;
		$content = $('<div class=test></div>');
		lv.prepend($content);
		find = lv.find('.test');
		return expect(find[0].$el).to.be($content);
	});
	it('should find things appended to it given a jQuery element', function() {
		var $content, find;
		$content = $('<div></div>');
		lv.append($content);
		find = lv.find($content);
		return expect(find[0].$el).to.be($content);
	});
	it('should find things prepended to it given a jQuery element', function() {
		var $content, find;
		$content = $('<div></div>');
		lv.prepend($content);
		find = lv.find($content);
		return expect(find[0].$el).to.be($content);
	});
	it('should find things appended to it given a different jQuery element wrapping the same DOM node', function() {
		var $content, $contentFromJQ, find;
		$content = $('<div id=hello></div>');
		lv.append($content);
		$contentFromJQ = $('#hello');
		find = lv.find($contentFromJQ);
		return expect(find[0].$el.is($content)).to.be.ok();
	});
	return it('should find things prepended to it given a different jQuery element wrapping the same DOM node', function() {
		var $content, $contentFromJQ, find;
		$content = $('<div id=hello></div>');
		lv.prepend($content);
		$contentFromJQ = $('#hello');
		find = lv.find($contentFromJQ);
		return expect(find[0].$el.is($content)).to.be.ok();
	});
});