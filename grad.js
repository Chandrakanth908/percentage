console.log("js start")

var a='';
var b='';
function PG(){
    a = document.getElementById('text1').value;
    b = document.getElementById('text2').value;
    c = (a/b)*100;

  document.getElementById('result').value=c;
  
  if(c<=100 && c>=90){
      console.log("O");
      document.getElementById('grade').value = 'O';
  }
  else if ( c<=90 && c>=65)
  {
      console.log("A");
      document.getElementById('grade').value = 'A';
  }
  
  else if ( c<=65 && c>=50)
  {
      console.log("B");
      document.getElementById('grade').value = 'B';
  }
  else if ( c<=50 && c>=35)
  {
      console.log("c");
      document.getElementById('grade').value = 'c';
  }

  else  {
      console.log("fail");
      document.getElementById('grade').value = 'fail';
  }
  return false;
}