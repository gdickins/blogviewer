import $ from 'jquery';
import renderPost from './read';
import router from '../router';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/gabeBlog';

function getPosts () {
  $('.container').empty();
  let $postList = $(`
    <aside>
      <h3>Old Posts</h3>
      <ul id="post-list">
      </ul>
    </aside>
    `);
  $('.container').append($postList);
  $.ajax(apiURL)
  .then(function(response) {
    console.log(response);
    response.forEach(function(post) {
    let $postLink = $(`
      <li data-id="${post._id}">${post.title}</li>
      `);
    $('#post-list').prepend($postLink);
    $('#post-list').children('li').on('click', function(evt){
      let id = $(this).attr('data-id');
      router.navigate(`read/${id}`, {trigger: true});
    });
      });
  }).fail(function() {
    console.log('failed fetching data');
  }).done(function() {
    console.log('all done!');
  });
}

export default getPosts;
