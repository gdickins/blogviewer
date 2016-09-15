import $ from 'jquery';
import Backbone from 'backbone';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/gabeBlog';

const Post = Backbone.Model.extend({
  urlRoot: apiURL,
  defaults: {
    timestamp: new Date()
  }
});

export default Post;
