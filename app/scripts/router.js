import $ from 'jquery';
import Backbone from 'backbone';
import postForm from './views/new-post';
import getPosts from './views/read-nav';
import renderPost from './views/read';
import renderLogin from './views/login';
import renderRegister from './views/register';

const Router = Backbone.Router.extend({
  routes: {
    register: 'registerFunction',
    login: 'loginFunction',
    read: 'listPostsFunction',
    'read/:id': 'readFunction',
    post: 'postFunction',
    '/*': 'loginFunction'
  },
  registerFunction: function() {
    $('#navigation').hide();
    renderRegister();
  },
  loginFunction: function() {
    $('.container').empty();
    $('#navigation').hide();
    renderLogin();
  },
  listPostsFunction: function() {
    $('#navigation').show();
    $('container').empty();
    getPosts();
  },
  readFunction: function() {
    $('#navigation').show();
    renderPost();
    console.log('hi');
  },
  postFunction: function () {
    $('#navigation').show();
    let $newPost = postForm;
    $('.container').append($newPost);
  }
});

const router = new Router();

export default router;
