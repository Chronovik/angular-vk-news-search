export default ($http) => {
  let searchQuery = '';
  let news = [];
  let count = 15;
  const offsetValue = 15;
  let offset = 0;
  let page = 0;

  function sendRequest(query, count = 15, offset = 0) {
   return new Promise((resolve, reject) => {
     $http.jsonp('https://api.vk.com/method/newsfeed.search?' + 
     $.param({'q': query, 'count': count, 'offset': offset}) + "&callback=JSON_CALLBACK")
     .then(
      result =>{
        let data = result.data.response;
          if(data && data.length >= 2) {
            searchQuery = query; 
            news = data.splice(1);
            resolve(news);
          } else if ('error' in r) {
            reject(data.error.error_msg);
          }
      });
    });
  };

  function back() {  
    return sendRequest(searchQuery, count, offset)
    .then(
      ()=>{
        if (offset >= offsetValue ) {
          offset -= offsetValue;
          page--;           
        }
      },
       error => {
        console.log(error)
      }
    );
  };

  function next() {
    return sendRequest(searchQuery, count, offset)
    .then(
      () =>{
        offset += offsetValue;
        page++;        
      },
      error => {
        console.log(error)
    });
  };

  function getNews() {
    return news;
  };

  function getCurrentPage() {
    return page;
  };
  
  function reset() {
    news = [];
    offset = 0;
    page = 0;
  };

  return {
    getNews,
    sendRequest,
    back,
    next,
    getCurrentPage,
    reset,
  };
}
