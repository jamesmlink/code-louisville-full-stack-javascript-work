function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");
<<<<<<< HEAD
    var ulList = document.getElementById("menu").getElementsByTagName("li")
=======
>>>>>>> upstream/master

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
<<<<<<< HEAD

    block.style.display = "block";

    // TODO: remove the "active" class from all of the li elements inside the menu
    for (var y = 0; y < ulList.length; y++) {
        ulList[y].className = "";
    }
    // TODO: add the "active" class to the li element that contains the link that was clicked
}

var home = document.getElementById("menu_item_home");
var about = document.getElementById("menu_item_about");
var plans = document.getElementById("menu_item_plans");
var cat = document.getElementById("menu_item_cat");
var blog = document.getElementById("menu_item_blog");
var contact = document.getElementById("menu_item_contact");


home.addEventListener("click", function(){openBlock("home"); this.parentNode.className = "active";});
about.addEventListener("click", function(){openBlock("about"); this.parentNode.className = "active";});
plans.addEventListener("click", function(){openBlock("plans"); this.parentNode.className = "active";});
blog.addEventListener("click", function(){openBlock("blog"); this.parentNode.className = "active";});
cat.addEventListener("click", function(){openBlock("cat"); this.parentNode.className = "active";});
contact.addEventListener("click", function(){openBlock("contact"); this.parentNode.className = "active";});

// TODO: add the "hover" class to the menu items when you hover over them
$("#menu li a").hover(
  function(){$(this).addClass("hover")},
  function(){$(this).removeClass("hover")});

// TODO: set up the tooltip plugin on all of the links in the menu

$('#menu a').tooltip({
  delay:1000
});
=======
    block.style.display = "block";
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}

// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu

>>>>>>> upstream/master
