class Shop {
  constructor(items=[]){
    this.items = items;
  }

  aDayPasses(){
    this.items.forEach(item => this.update(item))
    return this.items;
  };
 
  update(item) {
      this.isNotBrieOrBackstagePass(item)
      this.isNotSulfurasDecreaseSellBy(item)
      this.isBackstageSellInLessThan(item)
      this.isSellInLessThanZero(item) 
  };

  decreaseQuality(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.quality = item.quality - 1;
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  };

  isAConjuredItem(item) {
    if (item.name.includes("Conjured")) {
      this.decreaseQuality(item)
    }
  };

  isQualityAtMin(item) {
    if (item.quality > 0) {
      this.isAConjuredItem(item)
      this.decreaseQuality(item)
    }
  };

  isNotSulfurasDecreaseSellBy(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
  };

  isSellInLessThanEleven(item) {
    if (item.sellIn < 11) {
      this.increaseQuality(item)
    }
  };

  isSellInLessThanSix(item) {
    if (item.sellIn < 6) {
      this.increaseQuality(item)
    }
  };

  isSellInLessThanZero(item) {
    if (item.sellIn < 0) {}
  };

  isBackstageSellInLessThan(item) {
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isSellInLessThanEleven(item)
      this.isSellInLessThanSix(item)
      this.isSellInLessThanZero(item)
    }
  };

  isNotBrieOrBackstagePass(item) {
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.isQualityAtMin(item)
    } else {
      this.increaseQuality(item) 
    }
  };
  
  isSellInLessThanZero(item) {
    if (item.sellIn < 0) {
      this.isNotBrieOrBackstagePass(item)
    }
  };
};

module.exports = {
  Shop
};
