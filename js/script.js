/* 1 step - to create variables that will point (represent) 
to those HTML elements so we can manipulate it*/
/*2 step - Link range's value to the display*/

const frequencyDisplay = document.querySelector('#frequencyDisplay');
const frequencyRange = document.querySelector('#frequencyRange');
const podocastDiv = document.querySelector('#podcastDiv');

const start = () => {
  const handleFrequencyInput = (event) => {
    currentFrequency = event.target.value;
    frequencyDisplay.value = currentFrequency;

    const findPodcast = (rangeValue) => {
      const podcastTitle = document.querySelector('#podcastTitle');
      const podcastImg = document.querySelector('#podcastImg');
      const podcastDescription = document.querySelector(
        '#podcastDescription'
      );

      const podcastSwitch = (title, description, imgSrc) => {
        podcastTitle.textContent = title;
        podcastDescription.textContent = description;
        podcastImg.src = imgSrc;
      }

      for (var i = 0; i < realPodcasts.length; i++) {
        var currentPodcast = realPodcasts[i];
        
        if (currentPodcast.id === rangeValue) {
          var imgFile = currentPodcast.img;
          imgSrc = './img/' + imgFile;
          podcastSwitch(currentPodcast.title,currentPodcast.description,imgSrc);
          return;
        } else {
          podcastSwitch('No Podcasts found','','#');
        }
      }
    }
    findPodcast(currentFrequency);
  }
  // function handleFrequencyInput() {
  //   rangeValue = rangeFrequencies.value;
  //   frequencyDisplay.value = rangeValue;
  // }
  frequencyRange.focus();
  frequencyRange.addEventListener('input', handleFrequencyInput);
}
start();
