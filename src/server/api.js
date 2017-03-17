const fs = require("fs")

module.exports = function(app){

  app.get("/api/categories", function(req, res) {
    fs.readFile(__dirname + '/categories.json', 'utf8', function(err, data){
	  if(err) throw err
	  res.end( data )
    })
  })

  app.get("/api/categories/:category", function(req, res) {
    fs.readFile(__dirname + '/dishes.json', 'utf8', function(err, data){
      if(err) throw err
      let dishes = JSON.parse( data );
      dishes = dishes.filter((dish) => dish.category == req.params.category )
      res.end( JSON.stringify(dishes) )
    })
  })

  app.get("/api/dishes/:id", function(req, res) {
    fs.readFile(__dirname + '/dishes.json', 'utf8', function(err, data){
      if(err) throw err
      let dishes = JSON.parse( data );
      let dish = dishes.filter((dish) => dish.id == req.params.id )[0]
      res.end( JSON.stringify(dish) );
    })
  })

};