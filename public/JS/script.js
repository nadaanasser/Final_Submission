

 $(document).ready( function () {

    maxLength = $("textarea#comment").attr("maxlength");
        $("textarea#comment").after("<div><span id='remainingLengthTempId'>" 
                  + maxLength + "</span> remaining</div>");
        
        $("textarea#comment").bind("keyup change", function(){checkMaxLength(this.id,  maxLength); } )

        


    });

    function checkMaxLength(textareaID, maxLength){
    
        currentLengthInTextarea = $("#"+textareaID).val().length;
        $(remainingLengthTempId).text(parseInt(maxLength) - parseInt(currentLengthInTextarea));
        
        if (currentLengthInTextarea > (maxLength)) { 
            
            // Trim the field current length over the maxlength.
            $("textarea#comment").val($("textarea#comment").val().slice(0, maxLength));
            $(remainingLengthTempId).text(0);
            
        }
    }
    


 



 



