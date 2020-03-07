const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const url = "https://mrsoft.by/tz20";

const getData = async () => {
  const response = await fetch(`${url}/list.json`, {
    method: "GET",
    headers: defaultHeaders
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  return response.data;
};

const getInfo = async id => {
  const dataResponse = await fetch(`${url}/cats/${id}.json`, {
    method: "GET",
    headers: defaultHeaders
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  return dataResponse;
};

export { url, getData, getInfo };
