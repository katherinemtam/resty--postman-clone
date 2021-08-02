const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

export const fetchApi = async (search, method, body) => {

  const headers = WITHOUT_BODY_METHODS.includes(method)
    ? {}
    : { 'Content-Type': 'application/json' };

  const res = await fetch(search, { 
    method,
    headers,
    body: WITHOUT_BODY_METHODS.includes(method)
      ? null
      : body
  });

  const json = await res.json();
  const stringyJson = JSON.stringify(json);

  return stringyJson;
};
