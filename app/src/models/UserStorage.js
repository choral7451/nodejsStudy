"use strict";

class UserStorage {
    static #users = {
        id: ["sj", "sj1", "sj2"],
        psword : ["1234", "1234", "1234"],
        name: ["성준", "임성준", "성준임"]
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;