const functions = {
    add: (num1, num2) => num1 + num2,
    // add: function(num1, num2) {
    //     return num1 + num2;
    // }
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Pitt';
        return user;
    }
};

module.exports = functions;