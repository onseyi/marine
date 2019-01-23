//////////////////////////////////////////////////////////////////
//	- ACTIVE CONTENT -											//
//////////////////////////////////////////////////////////////////
//	Created By ;												//
// 	SARFRAZ AHMED CHANDIO										//
//	sarfraznawaz2005@gmail.com									//
//																//
//	Create Date: 30 Jan 2009									//
//	Last Update Date: N/A										//
//////////////////////////////////////////////////////////////////
//	Please keep this notice intact if you are using this file.	//
//////////////////////////////////////////////////////////////////

	addLoadListener	(init_dynamic_tabs);

	function init_dynamic_tabs()
	{
		var items = getElementsByAttribute("class", "active_content");
		var counter = 0;
		for (var i = 0; i < items.length; i++)
		{
			counter++;
			// make all items invisible except for the first one
			if (counter != 1)
			{
				items[i].style.display = "none";
			}
		}
	}

	function show_content(id)
	{
		var items = getElementsByAttribute("class", "active_content");

		// hide all items
		for (var i = 0; i < items.length; i++)
		{
			items[i].style.display = "none";
		}

		// show required item now
		document.getElementById(id).style.display = "block";
	}

	/* Very useful function for getting elements by their attributes */
	function getElementsByAttribute(attribute, attributeValue)
	{
	  var elementArray = new Array();
	  var matchedArray = new Array();
	  if (document.all)
	  {
		elementArray = document.all;
	  }
	  else
	  {
		elementArray = document.getElementsByTagName("*");
	  }
	  for (var i = 0; i < elementArray.length; i++)
	  {
		if (attribute == "class")
		{
		  var pattern = new RegExp("(^| )" +
			  attributeValue + "( |$)");
		  if (pattern.test(elementArray[i].className))
		  {
			matchedArray[matchedArray.length] = elementArray[i];
		  }
		}
		else if (attribute == "for")
		{
		  if (elementArray[i].getAttribute("htmlFor") ||
			  elementArray[i].getAttribute("for"))
		  {
			if (elementArray[i].htmlFor == attributeValue)
			{
			  matchedArray[matchedArray.length] = elementArray[i];
			}
		  }
		}
		else if (elementArray[i].getAttribute(attribute) ==
			attributeValue)
		{
		  matchedArray[matchedArray.length] = elementArray[i];
		}
	  }
	  return matchedArray;
	}

	// this will run the specified function on document load
	function addLoadListener(fn)
	{
	  if (typeof window.addEventListener != 'undefined')
	  {
		window.addEventListener('load', fn, false);
	  }
	  else if (typeof document.addEventListener != 'undefined')
	  {
		document.addEventListener('load', fn, false);
	  }
	  else if (typeof window.attachEvent != 'undefined')
	  {
		window.attachEvent('onload', fn);
	  }
	  else
	  {
		var oldfn = window.onload;
		if (typeof window.onload != 'function')
		{
		  window.onload = fn;
		}
		else
		{
		  window.onload = function()
		  {
			oldfn();
			fn();
		  };
		}
	  }
	}
