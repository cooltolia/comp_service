var adress;
adress = [59.9315411964636,30.351687840589967];

ymaps.ready(function () {
  var myMap;
  
  ymaps.geocode(adress).then(function (res) {
      myMap = new ymaps.Map('map', {
          center: res.geoObjects.get(0).geometry.getCoordinates(),
          zoom : 16
      });
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pointer_tr.png',
            // Размеры метки.
            iconImageSize: [30,40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -40]
        });
    
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    });
  
});