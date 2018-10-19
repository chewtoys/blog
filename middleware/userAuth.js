export default ({ store, redirect }) => {
  let isClient = process.client;
  if(isClient){
    let token = sessionStorage.getItem('token');
    if (!token) {
      return redirect('/login')
    }
  }
}
