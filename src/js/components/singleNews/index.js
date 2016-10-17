import tmpl from './tmpl.js'

export default {
  bindings: {
      newsid: '@'
  },
  controller(vkNewsService, $sce) {
    let data = vkNewsService.getNews()[this.newsid];
    let date;    

    if(!data) return false;
    
    date = new Date(data.date * 1000);  
    this.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    this.authors =  (data.group)? data.group.name : 
      (data.user)? data.user.first_name + ' ' + data.user.last_name :
      false;
    this.text = $sce.trustAsHtml(data.text || '');
    this.likes = data.likes.count || '0';
    this.attachments = [];
    if(data.attachments) {
      for (let item of data.attachments) {
        item.type === "photo" && this.attachments.push({ src: item.photo.src_big });
      }
    }
  },
  template: tmpl(),
  controllerAs: '$ctrl',
}
