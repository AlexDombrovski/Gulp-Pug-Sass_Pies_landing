// opening of pies blocks
var showMore = document.querySelector('.show-more');
var piesCardsHidden = document.querySelector('.pies-cards-hidden');
var showMoreSecondHidden = document.querySelector('.show-more-second-hidden');

showMore.addEventListener('click', function() {
  showMore.classList.toggle('show-more-hidden');
  piesCardsHidden.classList.remove('pies-cards-hidden');
  piesCardsHidden.classList.add('pies-cards-second');
  showMoreSecondHidden.classList.remove('show-more-second-hidden');
  showMoreSecondHidden.classList.add('show-more-second');
});

showMoreSecondHidden.addEventListener('click', function() {
  piesCardsHidden.classList.toggle('pies-cards-hidden');
  showMore.classList.remove('show-more-hidden');
  showMoreSecondHidden.classList.toggle('show-more-second-hidden');
});



// opening of sweet-pies blocks
var sweetShowMore = document.querySelector('.sweet-show-more');
var sweetPiesCardsHidden = document.querySelector('.sweet-pies-cards-hidden');
var sweetShowMoreSecondHidden = document.querySelector('.sweet-show-more-second-hidden');

sweetShowMore.addEventListener('click', function() {
  sweetShowMore.classList.toggle('show-more-hidden');
  sweetPiesCardsHidden.classList.remove('sweet-pies-cards-hidden');
  sweetPiesCardsHidden.classList.add('sweet-pies-cards-second');
  sweetShowMoreSecondHidden.classList.remove('sweet-show-more-second-hidden');
  sweetShowMoreSecondHidden.classList.add('sweet-show-more-second');
});

sweetShowMoreSecondHidden.addEventListener('click', function() {
  sweetShowMoreSecondHidden.classList.toggle('sweet-show-more-second-hidden');
  sweetPiesCardsHidden.classList.toggle('sweet-pies-cards-hidden');
  sweetShowMore.classList.remove('show-more-hidden');
});



// opening of delivery blocks
var deliveryStickerDelivery = document.querySelector('.delivery-sticker-delivery');
var deliveryStickerPrice = document.querySelector('.delivery-sticker-price');
var deliveryPrice = document.querySelector('.delivery-price');
var delivery = document.querySelector('.delivery-delivery');

deliveryStickerDelivery.addEventListener('click', function() {
  deliveryStickerDelivery.classList.remove('not-active');
  deliveryPrice.classList.add('hidden');
  deliveryStickerPrice.classList.remove('active');
  delivery.classList.remove('hidden');
});

deliveryStickerPrice.addEventListener('click', function() {
  deliveryPrice.classList.remove('hidden');
  deliveryStickerPrice.classList.add('active');
  deliveryStickerDelivery.classList.add('not-active');
  delivery.classList.add('hidden');
});

// day offers block
var dayOfferButton = document.querySelector('.dayoffer');
var firstScreenWrapper = document.querySelector('.first-screen-wrapper');
var dayOfferWrapper = document.querySelector('.day-offer-wrapper');

dayOfferButton.addEventListener('click', function() {
  firstScreenWrapper.classList.add('hidden');
  dayOfferWrapper.classList.remove('hidden');
});