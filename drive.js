(function() {
    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEVHcEwYgDgYgDgwnW8imUoWfjYYgDgCfTm3px35pw80qFNXjDD+wAD7vAQ0qVAwo1Ddsg/8vAP8vgMrijuGmCg0qFP7vAQ0qFP7vAQ0qFP7vAQhqFX9vgISplr7vAT7vAT7vAQ1q0oedL4jfq4hfawzhcdAhfa1gI30bhnwcCjtWS8XY9cYZdVChfU2h/nrQTTpOjcXZtEYZ9I0eueUa7DyPRjqQzUlb9ssif/XTFUZZ9Jme9m+WX3qQzXwPyU/hvVChfRChfRBhfQoFiIiAAAAQ3RSTlMAQEkl//////4a////63v///9p//+xmdvPVz2rvQqlUPn/hP//3azf//+SSf////9A3v/////Q////qf//bt15t7a2ajpqkQAAAQZJREFUeAGsz9WawjAQBeCDQ9DB3VZxd3j/19pmmsk2X3vJfzt68F6xOIshWiKZSrNMNocoSqW5I5MvFBGhpFTZb6gQVRGmPDWvI1MvEBFCGkrTDaQ1Qx8qlkxlsgXScnC1lC9dKxBrw9FRRrJiGqiLICV6fTKKbkQxyJGowhooUQKaJJyIBjwkhk5E1oGnSiJnIxotsCIZbYkoEmBdEiM3YgOGjTrmiBMBqyB01OmH7/Pr2/r5nfnmABZLY/VvvTG28Oz27BBsOJ64foaW2GuXVdD1xg05sLtdYK0fesUcBi9wXZ9eA8R0v1+FnDYvWDvngPnzb3bICcLewcERBTg42TPQCwAAp2s7XGwIAYMAAAAASUVORK5CYII=';
    document.getElementsByTagName('head')[0].appendChild(l);
    document.title = 'DisAcess';
})();