var ELEMENT_SELECTOR, ListItem, ListView;
ListView = infinity.ListView;
ListItem = infinity.ListItem;
ELEMENT_SELECTOR = '#test';

describe('ListItem', function() {
  var $el, lv;
  $el = $(ELEMENT_SELECTOR);
  lv = null;
  beforeEach(function() {
    return lv = new ListView($el);
  });
  afterEach(function() {
    return lv.remove();
  });
  it('should be returned from an append', function() {
    var $content, item;
    $content = $('<br>');
    item = lv.append($content);
    return expect(item).to.be.a(ListItem);
  });
  it('should be returned from a preppend', function() {
    var $content, item;
    $content = $('<br>');
    item = lv.prepend($content);
    return expect(item).to.be.a(ListItem);
  });
  return it('should remove itself from the parent ListView when removed', function() {
    var $content, find, item;
    $content = $('<br>');
    item = lv.append($content);
    item.remove();
    find = lv.find($content);
    return expect(find.length).to.be(0);
  });
});