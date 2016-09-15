import $ from 'jquery';
import User from '../models/user';
import router from '../router';


function renderRegister() {
  let $register = $(`
    <div class="login">
      <form class="login-form">
        <h2>Register</h2>
        <input type="text" name="first-name" placeholder="first name" id="first-name" />
        <input type="text" name="last-name" placeholder="last name" id="last-name" />
        <input type="text" name="street" placeholder="street" id="street" />
        <input type="text" name="city" placeholder="city" id="city" />
        <select>
        	<option value="AL">Alabama</option>
        	<option value="AK">Alaska</option>
        	<option value="AZ">Arizona</option>
        	<option value="AR">Arkansas</option>
        	<option value="CA">California</option>
        	<option value="CO">Colorado</option>
        	<option value="CT">Connecticut</option>
        	<option value="DE">Delaware</option>
        	<option value="DC">District Of Columbia</option>
        	<option value="FL">Florida</option>
        	<option value="GA">Georgia</option>
        	<option value="HI">Hawaii</option>
        	<option value="ID">Idaho</option>
        	<option value="IL">Illinois</option>
        	<option value="IN">Indiana</option>
        	<option value="IA">Iowa</option>
        	<option value="KS">Kansas</option>
        	<option value="KY">Kentucky</option>
        	<option value="LA">Louisiana</option>
        	<option value="ME">Maine</option>
        	<option value="MD">Maryland</option>
        	<option value="MA">Massachusetts</option>
        	<option value="MI">Michigan</option>
        	<option value="MN">Minnesota</option>
        	<option value="MS">Mississippi</option>
        	<option value="MO">Missouri</option>
        	<option value="MT">Montana</option>
        	<option value="NE">Nebraska</option>
        	<option value="NV">Nevada</option>
        	<option value="NH">New Hampshire</option>
        	<option value="NJ">New Jersey</option>
        	<option value="NM">New Mexico</option>
        	<option value="NY">New York</option>
        	<option value="NC">North Carolina</option>
        	<option value="ND">North Dakota</option>
        	<option value="OH">Ohio</option>
        	<option value="OK">Oklahoma</option>
        	<option value="OR">Oregon</option>
        	<option value="PA">Pennsylvania</option>
        	<option value="RI">Rhode Island</option>
        	<option value="SC">South Carolina</option>
        	<option value="SD">South Dakota</option>
        	<option value="TN">Tennessee</option>
        	<option value="TX">Texas</option>
        	<option value="UT">Utah</option>
        	<option value="VT">Vermont</option>
        	<option value="VA">Virginia</option>
        	<option value="WA">Washington</option>
        	<option value="WV">West Virginia</option>
        	<option value="WI">Wisconsin</option>
        	<option value="WY">Wyoming</option>
        </select>
        <input type="tel" name="phone" placeholder="phone number" id="phone" />
        <input type="text" name="email" placeholder="email" id="email"/>
        <input type="text" name="username" placeholder="username" id="username" />
        <input type="password" max-length=12 name="password" placeholder="password" id="password" />
        <input type="submit" name="submit" value="submit">
      </form>
      <a href="#login">Already a member? Login here!</a>
    </div>
  `);
  $('.container').empty();
  $('.container').append($register);
  $('.login').addClass('register');
  $register.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    var user = new User({
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      street: $('#street').val(),
      city: $('#city').val(),
      state: $('select').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
      username: $('#username').val(),
      password: $('#password').val()
    });
    user.save(null, {
      success: function(response) {
        console.log(response);
        router.navigate('read', {trigger: true});
      },
      error: function() {}
    });
  });

  return $register;
}

export default renderRegister;
