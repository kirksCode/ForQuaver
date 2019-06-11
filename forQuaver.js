
function wordSearcher(){
	var example = "We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.";
	
    var mySplitter = /\W+/; //This is my condition (only wanting words) for splitting the text.
    var exampleEdited = example.split(mySplitter);//Creating an array of just words.
    
	var rule1 = /^t/i; //begins with a "t", not case sensitive
	var rule2 = /e$/; //ends with an "e"
	
	var totalFor1 = 0;
	var totalFor2 = 0;
	var totalFor3 = 0;
        
    for(var i = 0; i < exampleEdited.length; i++){

        
        //Let's count the words that follow the rules.

        if(exampleEdited[i].match(rule1)){
            totalFor1++;
        }

        if(exampleEdited[i].match(rule2)){
        	totalFor2++;
        }

        if(exampleEdited[i].match(rule1) && exampleEdited[i].match(rule2)){
        	totalFor3++;
        }
    } // end of for loop


var theResults = "How many words satisfy rule one? " + totalFor1 + "<br>" + "How many words satisfy rule two? " + totalFor2 + "<br>" + "How many words satisfy rule three? " + totalFor3; 
document.getElementById("demo").innerHTML = theResults;	//display the results

}

//wordSearcher();//execute function
