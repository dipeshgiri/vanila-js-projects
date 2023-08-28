const display = document.getElementById('inp');

    function appendToDisplay(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
        displaydata=Array.from(display.value);
        let operator=1;
        let value1="";
        let value2="";
        for(i=0;i<displaydata.length;i++){
            if(displaydata[i]=="+"|| displaydata[i]=="-" ||displaydata[i]=="*" || displaydata[i]=="/")
            {
                operator=displaydata[i];
            }
            else if(operator=='+'||operator=='-'||operator=='*'||operator=='/'){
                value2+=displaydata[i];
       
            }
            else{
                value1+=displaydata[i];

            }
        }
        value1=Number.parseInt(value1);
        value2=Number.parseInt(value2);
        if(operator =='+')
        {
            display.value=(value1+value2);
        }
        else if(operator=="-")
        {
            display.value=(value1-value2);
        }
        else if(operator=="*")
        {
            display.value=(value1*value2);
        }
        else if(operator=="/")
        {
            display.value=(value1/value2);
        } 
        else{
            display.value="Error";
        }
 }
    

    
    
    