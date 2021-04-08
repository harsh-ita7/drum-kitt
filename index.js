for(var i=0;i<document.querySelectorAll(".drum").length;++i)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  var p=this.innerHTML;
  detect(p);
  buttonAnimation(p);
});
}
document.addEventListener("keypress",function(e){
  detect(e.key);
  buttonAnimation(e.key);
});
function detect(p)
{
  switch (p) {
    case "w":
         var t=new Audio('sounds/tom-1.mp3');
         t.play();
      break;

      case "a":
           var t=new Audio('sounds/tom-2.mp3');
           t.play();
        break;

        case "s":
             var t=new Audio('sounds/tom-3.mp3');
             t.play();
          break;

          case "d":
               var t=new Audio('sounds/tom-4.mp3');
               t.play();
            break;

            case "j":
                 var t=new Audio('sounds/crash.mp3');
                 t.play();
              break;

              case "k":
                   var t=new Audio('sounds/snare.mp3');
                   t.play();
                break;

                case "l":
                     var t=new Audio('sounds/kick-bass.mp3');
                     t.play();
                  break;
    default:
      console.log(p);
    }
}
function buttonAnimation(p)
{
  document.querySelector('.'+p).classList.add("pressed");
  setTimeout(function()
{
  document.querySelector('.'+p).classList.remove("pressed");
},100);
}
