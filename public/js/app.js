function runAjax() {
    let path = "http://localhost:8080/domain/amigoenergy.com";
    axios.get(path, {
    }).then(function (r) {
        console.log(r);
    }).catch(function (e) {
        console.log(e);
    });
}
