$(document).ready(()=>{

$(".new_todo_button").on("click",function(){
  var title=$(".new_todo").val();
  if(title=='')
  {
    window.alert("value required");
  }
  else{
  $(".todo-list").append(
    $("<li/>").append(
      $("<div class='list-item'/>").append(
        $(`<input type=text class='toodo' value='${title}'/>`).on("click",function(){
          $(this).toggleClass("cut");
          console.log("here");
        })
      ).append(
          $("<button type='button' class='upbutton'>UP</button>").on("click", (event)=>{
            var swap = $(event.currentTarget).parent().parent();
            swap.insertBefore(swap.prev());
          })
        ).append(
            $("<button type='button' class='downbutton'>DOWN</button>").on("click", (event)=>{
              var swap = $(event.currentTarget).parent().parent();
              swap.insertAfter(swap.next());
            })
          ).append(
              $("<button type='button' class='delete'>X</button>").on("click",(event)=>{
                $(event.currentTarget).parent().parent().fadeOut(()=>{
                  $(event.currentTarget).parent().parent().remove();
                });

              }))

    )
  )
  $(".new_todo").val("");
  }

})

$(".delete").on("click",function(){

})
})
