var valArray = [];
for (var i = 0; i < 1000; i++){
	if(i%3 === 0){
		var position = valArray.length;
		valArray[position] = i;	
	}
	else if(i%5 === 0){
		var position = valArray.length;
		valArray[position] = i;
	}
}

for(var i = 0; i < valArray.length; i++)
{
	print(valArray[i]);
}



