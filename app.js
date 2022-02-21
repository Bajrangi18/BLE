const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
  navigator.bluetooth.requestDevice({
  filters: [{
    name: 'ESP32NEW'
  }],
  optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] // Required to access service later.
})
.then(device => {
     console.log(device.name);

     return device.gatt.connect();
})
.then(characteristic => {
  // Reading Battery Level…
  return characteristic.readValue();
})
.then(value => {
  document.getElementById('boldStuff').innerHTML = value;

})
.catch(error => { console.error(error); });

});
