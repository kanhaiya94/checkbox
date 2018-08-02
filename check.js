// $(document).ready(function(){
//     $('input[type="checkbox"]').click(function(){
//         var inputValue = $(this).attr("value");
//         $("." + inputValue).toggle();
//     });
// });

$(document).ready(function(){
	$('.chkbox').click(function(){
		var text = "" ;
		$('.chkbox:checked').each(function()
		{
			text+=$(this).val()+ ',';
		});
		// text=text.substring(0,text.length-1);
		$("#selectedtext").val(text + " is selected");
		$('#count').val($("[type='checkbox']:checked").length);
	});
});