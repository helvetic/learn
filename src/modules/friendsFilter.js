export default class VKFriends{
  constructor(){
    new Promise((resolve, reject) => {
      VK.init({apiId: 5575450});
      VK.Auth.login(function(response) {
         if (response.session) {
           resolve(response);
         } else {
           reject('Не удалось авторизоваться');
         }
       }, 2);


    }).then(responseObj => {
      console.log('Статус',responseObj);
      return new Promise(resolve => {
        VK.api('friends.get',
           {
             fields: 'bdate, city, country, photo_100'
           },
           response => {
             resolve(response);
           }
        );
      })


    }).then(friendsList => {
      this.response = friendsList.response;
      this.inList = JSON.parse(localStorage.getItem('inList')) || [];
      this.outList = JSON.parse(localStorage.getItem('outList')) || this.response;

      this.displayList(vk_friends, friends_template, this.outList);
      this.displayList(vk_friends_list, friends_template, this.inList);

      this.drag = null;

      filter_lists.addEventListener('dragstart', e => this.handleDragStart(e));
      filter_lists.addEventListener('dragover', e => this.handleDragOver(e));
      filter_lists.addEventListener('drop', e => this.handleDrop(e));

      filter_lists.addEventListener('click', e => this.moveFromList(e));

      document.querySelectorAll('.filter-input').forEach(el => {
        el.addEventListener('keyup', e => this.filterList(e));
      });

      save_list.addEventListener('click',  e => this.saveList(e));
    });

  }



  displayList(container,template,list = this){
    let source = template.innerHTML;
    let compileTemplate = Handlebars.compile(source);
    container.innerHTML = compileTemplate(list);
  }

  // events
  filterList(e){
    let list = e.target.parentNode.parentNode.querySelector('.col-main');
    let value = e.target.value;
    list.querySelectorAll('.friend').forEach(item => {
      let fullname = item.querySelector('.fullname').textContent;
      if(!fullname.toLowerCase().includes(value.toLowerCase())){
        item.classList.add('hidden');
      }else if(item.classList.contains('hidden')){
        item.classList.remove('hidden');
      }
    });
  }
  handleDragStart(e){
    this.drag = e.target.closest('.friend');
    this.drag.classList.add('moving');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.drag);
    return true;
  }
  handleDragOver(e) {
    e.preventDefault();
    if(!e.target.classList.contains('neighbor')){
      if(e.target.parentNode.querySelector('.neighbor')){
        e.currentTarget.querySelectorAll('.neighbor').forEach(el => {
          el.classList.remove('neighbor');
        });
      }
      e.target.classList.add('neighbor');
    }
  }
  handleDrop(e){
    let neighbor = e.target.closest('.friend');
    let container = e.target.closest('.col-main');

    this.updateLists(this.drag.parentNode.dataset.role, this.drag.dataset.uid);
    if(neighbor){
      container.insertBefore(this.drag, neighbor);
      neighbor.classList.remove('neighbor');
    }else{
      container.appendChild(this.drag);
    }
    this.drag.classList.remove('moving');
  }

  moveFromList(e, target){
    if( e.target.dataset.action == 'move' ){
      let container = e.target.closest('.col-main');
      let neighbor = container.parentNode.nextElementSibling ||
                     container.parentNode.previousElementSibling;
      let neighborContainer = neighbor.querySelector('.col-main');
      let item = e.target.parentNode;
      let uid = item.dataset.uid;
      let role = container.dataset.role;

      if (this.updateLists(role, uid)) neighborContainer.appendChild(item);
    }
  }

  updateLists(role, uid){
    console.log(role, uid);
    if( role == 'add'){
      let friendIn = this.response.find(el => el.uid == uid);
      let friendOut = this.outList.findIndex(el => el.uid == uid);
      this.inList.push(friendIn);
      this.outList.splice(friendOut, 1);
      return true;
    }

    if( role == 'remove' ){
      let friendIn = this.inList.findIndex(el => el.uid == uid);
      let friendOut = this.response.find(el => el.uid == uid);
      this.outList.push(friendOut);
      this.inList.splice(friendIn, 1);
      return true;
    }
  }

  saveList(e){
    localStorage.setItem('inList', JSON.stringify(this.inList));
    localStorage.setItem('outList', JSON.stringify(this.outList));
  }
}
