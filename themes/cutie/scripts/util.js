var Hashes = require('jshashes');
var striptags = require('striptags')
var https = require('https');
var jdenticon = require("jdenticon")
var fs = require("fs")
var path = require('path')


jdenticon.config = {
	lightness: {
			color: [0.55, 0.55],
			grayscale: [0.55, 0.55]
	},
	saturation: {
			color: 0.50,
			grayscale: 0.50
	},
	backColor: "#ffffffb3"
};

hexo.extend.helper.register("generate_post_icon", function(title){
  var id = new Hashes.SHA256().hex(title);
	var icon_name = id + '.png';
	var icon_path = './source/images/jdenticon/';
	var render_path = '/images/jdenticon/';
	if(!fs.existsSync(path.dirname(icon_path))){
		fs.mkdirSync(path.dirname(icon_path))
	}
	if(!fs.existsSync(icon_path)){
		fs.mkdirSync(icon_path)
	}
  var icon_path = path.join(icon_path, icon_name);
  var size = 200;
  if(!fs.existsSync(icon_path)){
		console.log('generating random post icon');
		png = jdenticon.toPng(title, size);
    fs.writeFileSync(icon_path, png);
  }
  return render_path + icon_name;
});

hexo.extend.helper.register("parse_config", function(items){
	for(var i in items){
		if(items[i] !== undefined && items[i] !== ""){
			return items[i];
		}
	}
	return undefined;
});

hexo.extend.helper.register("print_config", function(items){
	return items.join(",");
});

hexo.extend.helper.register("get_posts_by_year", function(posts, year){
	var result = posts.filter(function(post){
		if(post.date.year() === year) return true;
		else return false;
	});
	return result;
});

hexo.extend.helper.register("get_posts_in_json", function(posts){
	post_list = []
	for(var i in posts.data){
		var tag_names = posts.data[i].tags.map(function(tag){return tag.name});
		var external_link = "";
		if(posts.data[i].link){
			external_link = posts.data[i].link;
		}else if(posts.data[i].external_link){
			external_link = posts.data[i].external_link
		}

		post_list.push({
			"title": posts.data[i].title.replace(/["']/g, ''),
			"date": posts.data[i].date,
			"content": striptags(posts.data[i].content).replace(/["']/g, '').replace(/\//g, '').replace(/\\/g, ''),
			"author": posts.data[i].author,
			"tags": tag_names,
			"path": posts.data[i].path,
			"external_link": external_link
		})
	}
	return JSON.stringify(post_list)
})

hexo.extend.helper.register("strip_html_and_whitespaces", function(text){
	return striptags(text);
})

hexo.extend.helper.register("get_posts_by_year_count", function(posts, year){
	var result = posts.filter(function(post){
		if(post.date.year() === year) return true;
		else return false;
	});
	return result.size();
});

hexo.extend.helper.register("get_posts_by_year_month", function(posts, year_month){
	var result = posts.filter(function(post){
		if(post.date.year() + "-" + post.date.month() === year_month) return true;
		else return false;
	});
	return result;
});

hexo.extend.helper.register("get_posts_by_year_and_month", function(posts, year, month){
	var result = posts.filter(function(post){
		if(post.date.year() === year && post.date.month() === month) return true;
		else return false;
	});
	return result;
});

hexo.extend.helper.register('hashit', function(text){
	return 'hashit_' + new Hashes.SHA256().hex(text);
});

hexo.extend.helper.register("get_years", function(posts){
	var years = new Set();
	posts.forEach(function(post){
		years.add(post.date.year());
	});
	return Array.from(years);
});

hexo.extend.helper.register("get_year_months", function(posts){
	var year_months = new Set();
	posts.forEach(function(post){
		year_months.add(post.date.year() + '-' + post.date.month());
	});
	return Array.from(year_months);
});

hexo.extend.helper.register("get_months", function(posts){
	var months = new Set();
	posts.forEach(function(post){
		months.add(post.date.month());
	});
	return Array.from(months);
});

hexo.extend.helper.register("get_month_name", function(month_number){
	var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return month_names[month_number - 1];
});

hexo.extend.helper.register("get_intro", function(site){
	var result = site.pages.filter(function(page){
		if(page.title === "Intro") return true;
		else false;
	});
	return result;
});

hexo.extend.generator.register('search', function(locals){
	return {
	  path: 'search/index.html',
	  data: locals,
	  layout: ['search', 'page']
	}
});

hexo.extend.generator.register('page404', function(locals){
	return {
	  path: '404.html',
	  data: locals,
	  layout: ['404', 'page']
	}
});
