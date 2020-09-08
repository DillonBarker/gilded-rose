var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should decrease quality twice as fast once sell by date has reached", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 1, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19)
    gildedRose.updateQuality();
    expect(items[0].quality).toEqual(17)

  })

});
