define('tableController', [], function() {

  var tableController = function() {
    

    var nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'], familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    this.itemsByPage=9;

    this.rowCollection = [];
    for (var j = 0; j < 200; j++) {
        this.rowCollection.push(createRandomItem());
    }

  }

  return tableController;
});