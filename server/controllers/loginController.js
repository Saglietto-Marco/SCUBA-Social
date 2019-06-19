const loginTest = async function test(req, res) {
    let response = { 
        mesage:'recieved post req',
        req: req.body
    };
    console.log(response);
    await res.send(response);
};
module.exports.loginTest = loginTest;