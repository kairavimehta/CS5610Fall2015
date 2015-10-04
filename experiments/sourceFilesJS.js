    var a = 2;
    var b = 4;
    var c = a + b;
    var fact =1;
    for (var i=1;i<=5;i++)
    {
        fact = fact * i;
    }
   var arr = [2,5,456,64,6,23,87,78]
   var min = arr[0];
   var max = arr[0];
   for(var j=0;j<arr.length;j++)
   {
        if(arr[j]>max)
            max = arr[j];
        if(arr[j]<min)
            min = arr[j];
   }
   //alert("min: "+ min);
   //alert("max: " + max);
   var min2=minFunc(arr);
   alert("Min2= "+min2);
   function minFunc(arr)
   {
       var min = arr[0];
       for(var j=0;j<arr.length;j++)
       {
            console.log(arr[j]);
            if(arr[j]<min)
                min = arr[j];
       }
       return min;
   }