const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
  navigator.bluetooth.requestDevice({
  filters: [{
    name: 'ESP32NEW'
  }],
  optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] // Required to access service later.
})
.then(device => { /* … */ })
.catch(error => { console.error(error); });
// navigator.bluetooth.requestDevice({
//   acceptAllDevices: true,
//   optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] // Required to access service later.
// })
// .then(device => { /* … */ })
// .catch(error => { console.error(error); });
});
