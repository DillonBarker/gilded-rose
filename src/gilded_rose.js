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

  decreaseQuality(i) {
    this.items[i].quality = this.items[i].quality - 1;
  }

  isQualityAtMax(i) {
    if (this.items[i].quality < 50) {
    this.items[i].quality = this.items[i].quality + 1;
    }
  };

  isNotSulfurasDecreaseQuality(i) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.decreaseQuality(i)
    }
  };

  isAConjuredItem(i) {
    if (this.items[i].name.includes("Conjured")) {
      this.decreaseQuality(i)
    }
  }

  isNotSulfurasDecreaseSellBy(i) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  };

  isQualityAtMin(i) {
    if (this.items[i].quality > 0) {
      this.isAConjuredItem(i)
      this.isNotSulfurasDecreaseQuality(i)
    }
  };

  isSellInLessThanEleven(i) {
    if (this.items[i].sellIn < 11) {
      this.isQualityAtMax(i)
    }
  };

  isSellInLessThanSix(i) {
    if (this.items[i].sellIn < 6) {
      this.isQualityAtMax(i)
    }
  };

  isSellInLessThanZero(i) {
    if (this.items[i].sellIn < 0) {}
  }

  isSellInLessThan(i) {
    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isSellInLessThanEleven(i)
      this.isSellInLessThanSix(i)
      this.isSellInLessThanZero(i)
    }
  }

  isNotBrieOrBackstagePass(i) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.isQualityAtMin(i)
    } else {
      this.isQualityAtMax(i) 
    }
  }
  
  isBrieOrBackstagePass(i) {
    if (this.items[i].sellIn < 0) {
      if (this.items[i].name != 'Aged Brie') {
        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          this.isQualityAtMin(i)
        } 
      } else {
        this.isQualityAtMax(i)
      }
    }
  }

  // Their method (with my refactors)
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.isNotBrieOrBackstagePass(i)

      this.isSellInLessThan(i)

      this.isNotSulfurasDecreaseSellBy(i)

      this.isBrieOrBackstagePass(i)
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
