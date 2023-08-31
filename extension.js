const fetchData = async () => {

  const response = await fetch('url');

  const data = await response.json();

  console.log(data);

};

