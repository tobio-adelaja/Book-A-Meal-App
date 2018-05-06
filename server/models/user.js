//var Sequelize = require('sequelize');
//var sequelize = new Sequelize('postgres://super_admin:null@localhost:5432/book_a_meal');
//var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNul: false        
    },
    email: {
        type: DataTypes.STRING,
        allowNul: false       
    },
    password: {
        type: DataTypes.STRING,
        allowNul: false       
    },
    userName: {
        type: DataTypes.STRING,
        allowNul: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNul: false
    }
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

/* var newUser = User.create({
  name: 'Tobi Adelaja',
  email: 'tobio.adelaja@gmail.com',
  password: 'Besi@2901',
  userName: 'oadelaja92'
})
.then(function() {
  console.log('User created successfully');
})
.catch(function() {
  console.log('User created failed');
}); */

/*User.findAll()
.then(function(users) {
  for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);
  }
})
.catch(function() {
  console.log('User created failed');
}); */

//export default User; 


