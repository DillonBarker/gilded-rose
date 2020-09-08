# Gilded rose tech test

## Specification

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting. 

#### Requirements
* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* “Aged Brie” actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
* “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

## How to use
* Firstly clone this repo
* Run `npm install` to get dependancies
* Use `npm test` to run the tests

## Technologies used
* NPM
* JavaScript
* Jasmine

## What I did
* To go about this challenge, I started by drawing up a rough [plan](notes.txt) 
* I then worked through the requirements, creating a test for each and making sure it passes.
* I noticed all the functionality in the code was there, it was just messy, so there was no failing tests.
* I started by trying to extract parts of code that I saw had little interaction with other parts, and put these into their own methods.
* Doing this over and over again until the code started to build up in each method rather than all in the updateQuality method
* After this I worked on the next step, Conjured Items. Which I just used a `.includes("Conjured")` string method.
* Then I wanted to remove the for loop and change it for a forEach, which looks a lot better and reads well, as there is no need to continuously reference `items[i]`, instead I could call attributes like name and quality on the item directly like `item.name`.


