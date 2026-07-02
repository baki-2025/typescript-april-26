//numeric enum
enum RequestType {
    readData =1,
    saveData,
    deleteData,
}
// console.log(RequestType)
//string enum
enum RequestType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}
//console.log(RequestType2)

//hetergenous enum
enum RequestType3 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = "101"
}
console.log(RequestType3)
