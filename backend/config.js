

const configProd = {
    dbName: 'tester_db',
    dbURL: 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
}

const configDev = {
    // dbURL: 'mongodb://127.0.0.1:27017',
    dbName: 'tester_db',
    dbURL: 'mongodb://172.31.160.1:27017',
}

export var config

if (process.env.NODE_ENV === 'production') config = configProd
else config = configDev

config.isGuestMode = true

