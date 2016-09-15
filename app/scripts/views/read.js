import $ from 'jquery';
import getPosts from './read-nav';
import moment from 'moment';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/gabeBlog';

function renderPost () {
  $('container').empty();
  getPosts();
  $.ajax(apiURL + '/' + location.hash.slice(6))
  .then(function(response) {
    console.log(response);
    let $individualPost = $(`
      <article class="individual-post">
        <h2>${response.title}</h2>
        <ul class="post-meta-data">
          <li>by ${response.author}</li>
          <li>${moment(new Date(response.timestamp)).fromNow()}</li>
          <li><i class="fa fa-heart-o" aria-hidden="true"></i></li>
        </ul>
        <div class="post-content">
          <span>${response.body}</span>
        </div>
      </article>
      `);
      $('.container').append($individualPost);
  });
}

export default renderPost;
