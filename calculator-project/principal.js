
    
        var accumulate = 0;
        var newNumber = false;
        var changeOp = "";	
    
        
        function numPressed(Num) {
            
            if (newNumber) {
                document.form.input.value  = Num;
                newNumber = false; 
               }
            else {
                if (document.form.input.value  = "0")
                    document.form.input.value = Num;
              else
              document.form.input.value += Num;    
                
               }
            
        }
    
        
        function calculate(Ca) {
            if (document.form.input.value == ""){
                alert("O Campo esta vázio digite um valor");
                document.form.input.value ="0"; }
            else{
                if (newNumber && changeOp != "=");
                else	{
                    newNumber = true;
                    if ( '+' == changeOp )
                        accumulate += parseFloat(document.form.input.value);
                        else if ( '-' == changeOp )
                        accumulate -= parseFloat(document.form.input.value);
                        else if ( '/' == changeOp )
                        accumulate /= parseFloat(document.form.input.value);
                        else if ( '*' == changeOp )
                        accumulate *= parseFloat(document.form.input.value);
                    else
                        accumulate = parseFloat(document.form.input.value);
                        document.form.input.value = accumulate;
                        changeOp = Ca;
                }
               }
        }
    
        
        function Ponto() {
            var point = document.form.input.value;
            if (newNumber) {
                point = "0.";
                newNumber = false;
               }
            else {
            if (point.indexOf(".") == -1)
                point += ".";
               }
            document.form.input.value = point;
        }
    
