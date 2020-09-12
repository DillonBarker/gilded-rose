class Shop {
  constructor(items=[]){
    this.items = items;
    this.BY_ONE = 1
    this.MAX_QUALITY = 50
    this.MIN_QUALITY = 0
    this.FIRST_RELEASE = 11
    this.SECOND_RELEASE = 6
    this.CONCERT_DONE = 0
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
      item.quality = item.quality - this.BY_ONE;
    }
  }

  increaseQuality(item) {
    if (item.quality < this.MAX_QUALITY) {
      item.quality = item.quality + this.BY_ONE;
    }
  };

  isAConjuredItem(item) {
    if (item.name.includes("Conjured")) {
      this.decreaseQuality(item)
    }
  };

  isQualityAtMin(item) {
    if (item.quality > this.MIN_QUALITY) {
      this.isAConjuredItem(item)
      this.decreaseQuality(item)
    }
  };

  isNotSulfurasDecreaseSellBy(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - this.BY_ONE;
    }
  };

  isSellInLessThan(item) {
    if(item.sellIn < this.FIRST_RELEASE) {
      this.increaseQuality(item)
    }
    if(item.sellIn < this.SECOND_RELEASE) {
      this.increaseQuality(item)
    }
  }

  isSellInLessThanZero(item) {
    if (item.sellIn < this.CONCERT_DONE) {
      this.isNotBrieOrBackstagePass(item)
    }
  };

  isBackstageSellInLessThan(item) {
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isSellInLessThan(item)
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
};

module.exports = {
  Shop
};
