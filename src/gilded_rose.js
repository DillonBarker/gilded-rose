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

  decreaseQuality(item) {
    item.quality = item.quality - 1;
  }

  isNotSulfurasDecreaseQuality(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      this.decreaseQuality(item)
    }
  };

  isAConjuredItem(item) {
    if (item.name.includes("Conjured")) {
      this.decreaseQuality(item)
    }
  }

  isQualityAtMin(item) {
    if (item.quality > 0) {
      this.isAConjuredItem(item)
      this.isNotSulfurasDecreaseQuality(item)
    }
  };

  isQualityAtMax(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  };

  isNotSulfurasDecreaseSellBy(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
  };

  isSellInLessThanEleven(item) {
    if (item.sellIn < 11) {
      this.isQualityAtMax(item)
    }
  };

  isSellInLessThanSix(item) {
    if (item.sellIn < 6) {
      this.isQualityAtMax(item)
    }
  };

  isSellInLessThanZero(item) {
    if (item.sellIn < 0) {}
  }

  isBackstageSellInLessThan(item) {
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.isSellInLessThanEleven(item)
      this.isSellInLessThanSix(item)
      this.isSellInLessThanZero(item)
    }
  }

  isNotBrieOrBackstagePass(item) {
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.isQualityAtMin(item)
    } else {
      this.isQualityAtMax(item) 
    }
  }
  
  isBrieOrBackstagePass(item) {
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          this.isQualityAtMin(item)
        } 
      } else {
        this.isQualityAtMax(item)
      }
    }
  }

  updateQuality(){
    this.items.forEach(item => this.update(item))
    return this.items;
  }
 
  update(item) {
      this.isNotBrieOrBackstagePass(item)
      this.isBackstageSellInLessThan(item)
      this.isNotSulfurasDecreaseSellBy(item)
      this.isBrieOrBackstagePass(item) 
  }
}
module.exports = {
  Item,
  Shop
}
