var nbr, btn, randval, reponse, etape, max, num1, num2 , nivGame, test, tmp, test0, test1, test2, test3, test4, etape0, etape1, etape2, etape3;
alert('bienvenu sur le projet')

//programm Attmpt 

etape0=document.getElementById('etape0');
etape1=document.getElementById('etape1');
etape2=document.getElementById('etape2');
etape3=document.getElementById('etape3');

var tmp = teste;
max=30;

function randomize(){
	return Math.floor(Math.random()*max+1);
}
	randval=randomize();
	//alert('sopapa = '+randval, 'test'); 

	nbr=document.getElementById('nbr');
	btn=document.getElementById('btn');
	reponse=document.getElementById('reponse');
	

	btn.onclick=function (){
					if (nbr.value.trim() !=''){

						test();

					}
					else{
								reponse.innerHTML='mahazo manoratra ra efa nisafidy dingana';
									}

							if (etape1.checked){
							alert('etape1 pour tester 5 fois');
							test=5;
							etape1.checked=true;
							etape1.checked=false;
							etape1.checked=false;
							etape2.checked=false;
							etape3.checked=false;
							etape1.checked=false;} 

							if (etape2.checked){
							alert('etape2 pour tester 3 fois');
							test=3;
							etape1.checked=false;
							etape3.checked=false;
							etape2.checked=true;
							etape2.checked=false
							etape2.checked=false}

							if (etape3.checked){
							alert ('etape3 pour tester 2 fois');
							test=2;
							etape1.checked=false;
							etape2.checked=false;
							etape3.checked=true;
							etape3.checked=false;
							etape3.checked=false;
							}
						  }		


					function num1(){
						if (nbr.value>randval) {
						reponse.innerHTML +='<br>'+'-il y a de rest '+test+' fois mais le  '+ nbr.value + ' est tres grand';test--;
						}
						else if (nbr.value<randval){
						reponse.innerHTML +='<br>'+'-il y a de rest° '+test+'fois mais le '+ nbr.value + ' est tres petit';test--;
						}
						else{
							   num2();
						}
					}

					function num2(){
						if(nbr.value=randval){
								reponse.innerHTML=reponse.innerHTML='tu est gaigner, felicitation!';
								Alert('le'+randval+'est vrai'); }
						else if (tmp==0){
								reponse.innerHTML='fin';
								alert(randval+' est le reponse');
							}
						}