// JavaScript Document

	function initial()
	{
		var lista = new Array();
		lista[0,0] = "0";
		lista[0,1] = "a";
		lista[1,0] = "2";
		lista[1,1] = "b";
		
		

	}
	
	function ascunde()
	{
		var lc11=0;
		if (document.getElementById("c11").checked==true)
			document.getElementById("c12").checked=true
		else
		{
			document.getElementById("c12").checked=false
			document.getElementById("l11").value="mihai"
			document.getElementById("l11").readOnly=true
		}	
	}
	
	function rezuItate()
	{
		document.getElementById("img1").width=(document.getElementById("img1").width==0?30:0)
		document.getElementById("img2").width=(document.getElementById("img1").width==0?30:0)
	}
	

	function ora()
	{
		var data = new Date();
		document.write(data.getTime());
		
	}






































	function rezultate()
	{
		document.getElementById("oktimer").value=0;
		var y = new Number(document.getElementById("cnt").value);
		document.getElementById("cnt").value=y+1;
		var rasptotal=0; var raspcorecte=0; var raspgresite=0; var punctaj=0;
		var temp=0;
		if(y > 0)
			return;

		var rez = new Array();
		rez[1]=2; rez[2]=8;rez[3]=9;rez[4]=16;rez[5]=5;rez[6]=18;rez[7]=28;rez[8]=16;rez[9]=27;rez[10]=20;
		rez[11]=11;rez[12]=48;rez[13]=26;rez[14]=42;rez[15]=15;rez[16]=48;rez[17]=51;rez[18]=54;rez[19]=57;rez[20]=20;
		
		document.getElementById("txtrasptotal").value= rez.length-1;
		rasptotal=rez.length-1;
		for(i=1;i<=rez.length-1;i++)
		{
			for (k=1;k<=4;k++)
			{
				if (k==rez[i]/i)
				{
					eval('document.getElementById("img'+String(i)+String(k)+'").src="/imagini/bine_mic.png"');
					if (eval('document.getElementById("rg'+String(i)+String(k)+'").checked==true') )
						raspcorecte=raspcorecte+1;
				}
				else
					if (eval('document.getElementById("rg'+String(i)+String(k)+'").checked==true') )
						eval('document.getElementById("img'+String(i)+String(k)+'").src="/imagini/gresit_mic.png"');
					
			}
		}
		
		raspgresite=rasptotal-raspcorecte;
		punctaj=raspcorecte*100/rasptotal;
		punctaj= Math.round(punctaj*100)/100;
		document.getElementById("txtrasptotal").value=rasptotal;
		document.getElementById("txtraspcorecte").value=raspcorecte;
		document.getElementById("txtraspgresite").value=raspgresite;
		document.getElementById("txtpunctaj").value=String(punctaj)+" %";
			
	}
