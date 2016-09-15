import $ from 'jquery';
import Backbone from 'backbone';

const apiURLLinks = 'https://tiny-za-server.herokuapp.com/collections/gabeBlog';

const Links = Backbone.Model.extend({
  url: '',
  category: '',
  title: ''
});

export default Links;
