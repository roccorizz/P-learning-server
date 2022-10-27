const express = require('express');
const app = express();
var cors = require('cors');
const router = express.Router();
const port = process.env.PORT || 5000;
app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('Plearning Platform server side!')

})

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '7') {
        res.send(courses);
    } else {
        const category = courses.filter(n => n.category_id === id);
        res.send(category);
    }
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n._id === id);
    res.send(selectedCourse);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find(n => n.id === id);
    res.send(category);
})
app.listen(port, () => {
    console.log(`Demo app listening on port ${port}`)
})