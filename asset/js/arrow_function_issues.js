//ES5
let boxDiv = document.querySelector('.es5');
let box = {
    color: 'Red',
    clickMe: function () {
        var self = this;

        function es5() {
            boxDiv.innerHTML = "have its own this value so we need to store it  || " + self.color + " * value is with another var"
        }
        es5()
    }
}

box.clickMe();

//ES6
let boxDiv2 = document.querySelector('.es6');
let box2 = {
    color: 'Red',
    clickMe: function () {

        let es6 = () => {
            boxDiv2.innerHTML = "arrow functions does not have their own \"this\" || " + this.color + " * value is using this keyword "
        }

        es6()
    }

}

box2.clickMe();