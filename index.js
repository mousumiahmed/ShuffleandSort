function Suffle() {
    //console.log(array)
    var array=[1,2,3,4,5,6,7,8,9]
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    console.log(array)
    var display= document.querySelector(".grid-container");
   
    for(var k=0;k<array.length;k++){
      // var listItem = document.createElement("div");
      var listItem= document.querySelector(".grid-item");
     
      listItem.textContent=array[k]
       display.appendChild(listItem)
     
    }
  }
  
  function Sort() {
    //console.log(array)
    var array=[1,2,3,4,5,6,7,8,9]
   array.sort()
    console.log(array)
    var display= document.querySelector(".grid-container");
   
    for(var k=0;k<array.length;k++){
      // var listItem = document.createElement("div");
      var listItem= document.querySelector(".grid-item");
    
      listItem.textContent=array[k]
       display.appendChild(listItem)
    
     
    }
  }
  