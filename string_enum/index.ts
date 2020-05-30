enum MediaTypes {
  BASE_URL = 'jsonplaceholder.typicode.com/',
  USERS = 'users',
  TODOS = 'todos',
  PHOTOS = 'photos'
}
fetch(`https://${MediaTypes.BASE_URL}${MediaTypes.USERS}`)
.then(res => res.json())
.then(data => console.log(data))