
    var script = document.createElement("script"); //Make a script DOM node
    script.src = "https://api.apiary.io/seeds/embed.js"; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

  var embed = new Apiary.Embed({
    subdomain: 'linkpluspublicapi',
    element: '#embedHere'
  });

