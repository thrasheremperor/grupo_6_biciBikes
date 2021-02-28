const fs = require('fs');
const path = require('path');

const users_db = path.join('data','users.json');

module.exports = {
    
    getUsuario : () => {
        return JSON.parse(fs.readFileSync(users_db,'utf-8'));
    },
    setUsuario : (data) => {
        fs.writeFileSync(users_db,JSON.stringify(data,null,2),'utf-8');

    }
}