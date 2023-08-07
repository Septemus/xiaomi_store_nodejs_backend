var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let nav_phone_list=require('../public/json/nav_phone.json')
  let nav_red_list=require('../public/json/nav_red.json')
  let left_phone_list=require('../public/json/left_side_phone.json')
  let swiper_list=require('../public/json/swiper_list.json')
  let products_list=require('../public/json/products_list.json')
  console.log('this is data1',nav_phone_list)
  console.log('this is data2',nav_red_list)
  console.log('this is data3',left_phone_list)
  console.log('this is data4',swiper_list)
  console.log('this is data5',products_list)
  res.render('index', { nav_phone_list,nav_red_list,left_phone_list,swiper_list ,products_list });
});

module.exports = router;
