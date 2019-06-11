window.onload = () => {
  const getIP = (json) => {
    return json.ip;
  }
  const ipPlaceHolder = document.getElementById('ipAddress');
  const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch('https://api.ipify.org?format=json', fetchOptions)
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((json) => {
      console.log(json);
      ipPlaceHolder.value = getIP(json);
    })
    .catch((error) => {
      console.log(error);
      ipPlaceHolder.value = error;
    });
}
