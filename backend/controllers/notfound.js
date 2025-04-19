const notFoundApi =(req, res, next) =>{

    res.status(404).json({
        code: 404,
        status:false,
        message: "Api Not Found"
    });
}

const notFoundWeb =(req, res, next) =>{
    res.status(404).send("Page Not Found");
    // res.status(404).render('notfound', {title: 'Not Found'});
}

module.exports = {notFoundApi, notFoundWeb};