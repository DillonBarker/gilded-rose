class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  // My methods
  isQualityAtMax(i) {
    if (this.items[i].quality < 50) {
    this.items[i].quality = this.items[i].quality + 1;
    }
  };

  isNotSulfurasDecreaseQuality(i) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = this.items[i].quality - 1;
    }
  };

  isNotSulfurasDecreaseSellBy(i) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  };

  isQualityAtMin(i) {
    if (this.items[i].quality > 0) {
      this.isNotSulfurasDecreaseQuality(i)
    }
  };

  isBackstageSellInLessThanEleven(i) {
    if (this.items[i].sellIn < 11) {
      this.isQualityAtMax(i)
    }
  };

  isBackstageSellInLessThanSix(i) {
    if (this.items[i].sellIn < 6) {
      this.isQualityAtMax(i)
    }
  };

  BackstageSellInLessThan(i) {
    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isBackstageSellInLessThanEleven(i)
      this.isBackstageSellInLessThanSix(i)
    }
  }

  // Their method (with my refactors)
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.isQualityAtMin(i)
      } else {
        this.isQualityAtMax(i)
          this.BackstageSellInLessThan(i)
      }
      this.isNotSulfurasDecreaseSellBy(i)
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            this.isQualityAtMin(i)
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          this.isQualityAtMax(i)
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
