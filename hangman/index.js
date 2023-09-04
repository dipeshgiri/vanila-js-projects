displays=document.getElementById('answer');
blank=document.getElementById('blank');
let result=document.getElementById('result');
let choices=document.getElementById('choices');
let answer=["ball","manchester","apple","orange","printer","javascript","python"];
let choice=10;
let finalans=false;
index=Math.floor(Math.random()*answer.length);
let question=answer[index];
let leng=Number.parseInt(question.length);
let ans=[];
console.log(leng);
console.log(question);
blank.innerHTML="Total No Of letter in word is "+leng;

function display(guess,question,leng)
{
    if(finalans){
        result.innerHTML="Congrats! you won";
    }
    if(choice==0)
    {
        choices.innerHTML="Choice Remaining: "+choice;
        result.innerHTML="Game Over Please Try Again";
    }
    else{
        choice=choice-1;
        choices.innerHTML="Choice Remaining: "+choice;

            for(i=0; i<leng; i++)
        {
            if(guess==question[i])
            {
                if(ans[i]==guess)
                {
                    result.innerHTML="Please enter another letter";
                }
                else{
                    ans[i]=guess;
                }
                displays.innerHTML=ans;
            }
            if(ans[i]==question[i]){
                finalans=true;
            }
            else{
                finalans=false;
            }
        }
    }
}
