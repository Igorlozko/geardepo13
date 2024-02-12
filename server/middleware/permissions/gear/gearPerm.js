import checkOwner from "./checkOwner.js";


const gearPerm = {
    update:{
        roles:['admin', 'editor', 'basic'],
        owner: checkOwner,
    },
    delete:{
        roles:['admin', 'editor', 'basic'],
        owner: checkOwner,
    },
    create:{
        roles:['admin', 'editor', 'basic'],
        owner: checkOwner,
    },
}

export default gearPerm;