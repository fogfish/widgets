(function()
{

function kanbanWidth()
{
   var cols = $('.panel-body')
   var size = parseInt(cols.length)
   $('.container-fluid').css('min-width', (size * 350) + 'px')  
}
kanbanWidth()

function kanbanDrag()
{
   var sourceId

   $('[draggable=true]').bind('dragstart', 
      function(event)
      {
         elementId = event.target.getAttribute('id')
         sourceId  = $(this).parent().attr('id')
         event.originalEvent.dataTransfer.setData("text/plain", elementId)
      }
   )

   $('.panel-body').bind('dragover', 
      function(event)
      {
         event.preventDefault()
      }
   )

   $('.panel-body').bind('drop', 
      function(event) 
      {
         var children = $(this).children()
         var targetId = children.attr('id')

         if (sourceId != targetId)
         {
            var elementId = event.originalEvent.dataTransfer.getData("text/plain")
            // pre-post data

            // Post data 
            setTimeout(
               function() 
               {
                  // post successful
                  var element = document.getElementById(elementId)
                  children.prepend(element)
               }, 
               500
            );
         }
         event.preventDefault()
      }
   )
}
kanbanDrag() 
 
})();