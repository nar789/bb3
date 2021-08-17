;(function(){
	module.exports=function(_g){

		var app = _g.app;		

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(8818,function(){
			  console.log('BB3! Server listen on *:8818');
			});
		}

		return {
			route:route,
		};
	}

})();



