const homepage = async function (req, res) {
    return res.render('homepage.ejs')
}

const redirect = async function (req, res) {
    return res.json('redirect')
}

const create_url = async function (req, res) {
    let orignal_url = req.body
    return res.render('homepage.ejs')
}
module.exports = { homepage, redirect, create_url }