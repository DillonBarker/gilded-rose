var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].name).toEqual("foo");
  });

  it("should decrease quality twice (by 2) as fast once sell by date has reached", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 1, 20) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(19)
    gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(17)
  });

  it("quality should never go below 0", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 1) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(0)
    gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(0)
  });

  it("aged brie increases in quality as it gets older", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(1)
    gildedRose.aDayPasses();
    gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(4)
  });

  it("quality of an item does not exceed 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 49) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(50)
    gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(50)
  });

  it("sulfuras never changes in quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(80)
    gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(80)
  })

  it("backstage passes increase in quality as sellin approaches", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(21)
  });

  it("backstage passes increase in quality as sellin approaches (by 2 when there are 10 days or less)", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(47)
  });

  it("backstage passes increase in quality as sellin approaches (by 3 when there are 5 days or less)", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(48)
  })

  it("decreases quality twice as normal if the item is conjured", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(4)
  })

  it("decreases quality twice as normal if the item is conjured", function() {
    const gildedRose = new Shop([ new Item("Conjured Mushroom Stew", 6, 20) ]);
    const items = gildedRose.aDayPasses();
    expect(items[0].quality).toEqual(18)
  })
  
});