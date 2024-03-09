const welcomeText = document.getElementById('welcomeText');
const flag = document.getElementById('flag');
const changeTextButton = document.getElementById('changeTextButton');

let currentLanguageIndex = 0;
const languages = [
    { text: 'Welcome', flag: 'url("https://img.freepik.com/free-photo/flag-kenya_1401-145.jpg?t=st=1709981307~exp=1709984907~hmac=442ae769d10f6909da7d077d187dc06ba9c6ceb9472014a651f5bba4e62f2ad8&w=740")' },
    { text: 'Karibu', flag: 'url("https://img.freepik.com/free-photo/flag-tanzania_1401-238.jpg?t=st=1709978724~exp=1709982324~hmac=3f057e092b1ae514fb56eaa1abca8af5cef05f5af0eeb6955a4e85cf56b58ce9&w=740")' },
    { text: 'Tukusanyukidde', flag: 'url("https://img.freepik.com/free-photo/flag-uganda_1401-248.jpg?t=st=1709978905~exp=1709982505~hmac=45b9fcea1fd21bd79dc3c5efabaa2baffc554fea0735bc522c8976922ad08b59&w=740")' },
    { text: 'Irasshaimase', flag: 'url("https://img.freepik.com/free-photo/flag-japan_1401-141.jpg?t=st=1709978975~exp=1709982575~hmac=2a79dc215e6442aec5fdfd259de32de2dbae984d24706d68450d366ffd5f8e54&w=740")' },
    { text: 'Bienvenue', flag: 'url("https://img.freepik.com/free-photo/flag-france_1401-114.jpg?t=st=1709979027~exp=1709982627~hmac=810284e99488862564c02d9b5f9b4a32dc3e18e90b39bf9a7ee7d66faa083526&w=740")' },
  ];
  

changeTextButton.addEventListener('click', () => {
  currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  welcomeText.textContent = languages[currentLanguageIndex].text;
  flag.style.backgroundImage = languages[currentLanguageIndex].flag;
});