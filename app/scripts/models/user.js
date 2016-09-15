import $ from 'jquery';
import Backbone from 'backbone';

const apiURLUsers = 'https://tiny-za-server.herokuapp.com/collections/gabeBlog';

const User = Backbone.Model.extend({
  urlRoot: apiURLUsers
});

export default User;
