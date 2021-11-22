var express = require("express");
var router = express.Router();

const result = [
  {
    id: 1,
    title: '10 Great App Ideas That You Can Share With Your Friends',
    author: 'Joseph Watts',
    date: '2021-10-10T03:33:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis sed lectus et accumsan. Suspendisse scelerisque mauris et felis porttitor, et faucibus augue porta. Fusce tristique elit massa, id porttitor libero aliquam ac. Aliquam risus leo, hendrerit vitae tincidunt eget, pharetra vitae elit. Aliquam nec pulvinar odio.',
    image: 'https://source.unsplash.com/1600x900/?city',
  },
  {
    id: '2',
    title: 'Five Facts That Nobody Told You About React',
    author: 'Emily Torres',
    date: '2021-10-12T19:00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis sed lectus et accumsan. Suspendisse scelerisque mauris et felis porttitor, et faucibus augue porta. Fusce tristique elit massa, id porttitor libero aliquam ac. Aliquam risus leo, hendrerit vitae tincidunt eget, pharetra vitae elit. Aliquam nec pulvinar odio.',
    image: 'https://source.unsplash.com/1600x900/?moutain',
  },
  {
    id: '3',
    title: 'Seven Tips To Avoid Failure In Your Next React Interview',
    author: 'Joshua Blackwell',
    date: '2021-11-08T11:00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis sed lectus et accumsan. Suspendisse scelerisque mauris et felis porttitor, et faucibus augue porta. Fusce tristique elit massa, id porttitor libero aliquam ac. Aliquam risus leo, hendrerit vitae tincidunt eget, pharetra vitae elit. Aliquam nec pulvinar odio.',
    image: 'https://source.unsplash.com/1600x900/?office',
  },
  {
    id: '4',
    title: 'This Is Why React Is So Famous!',
    author: 'Courtney Jimenez',
    date: '2021-11-15T14:30:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis sed lectus et accumsan. Suspendisse scelerisque mauris et felis porttitor, et faucibus augue porta. Fusce tristique elit massa, id porttitor libero aliquam ac. Aliquam risus leo, hendrerit vitae tincidunt eget, pharetra vitae elit. Aliquam nec pulvinar odio.',
    image: 'https://source.unsplash.com/1600x900/?landscape',
  },
]

router.get("/articles", function(req, res, next) {
    res.json({ result });
});

router.get(`/articles/:query`, function(req, res, next) { /*TODO: Search by words*/
  const { query } = req.params;
  const data = result.find(article => article.title === query);
  res.json({ data });
});

router.get(`/articles/:id`, function(req, res, next) {
  const { id } = req.params;
  const result = result.find(x => x.id === id);
  res.json({ result });
});

module.exports = router;




