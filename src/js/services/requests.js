const sendRequest = async (url, data) => {
    let respond = await fetch(url, {
       method: "POST",
       body: data
   });
   return await respond.text();
};

const getRequest = async (url) => {
    let respond = await fetch(url);
    if (!respond.ok) {
        throw new Error(`Could not fetch ${url}, status: ${respond.status}`);
    }
   return await respond.json();
};

export {sendRequest, getRequest};
