$(document).ready(function() {
	var cw = document.getElementById("ifrm").contentWindow;
	cw.document.designMode="on";
	cw.document.close();
	cw.focus();
	
	
		$('#color').colorPicker();  //displays the color pallette
								//$('#color2').colorPicker();
		$("div.colorPicker-swatch").click(function() {
			
				var back_color = $(this).css("background-color"); //abstracts the color from the input form
				cw.document.execCommand("backColor",false,back_color);
				cw.focus();
				return false;
			
			/*else
			{
				var back_color = $(this).css("background-color"); //abstracts the color from the input form
				cw.document.execCommand("fontColor",false,back_color);
				cw.focus();
				return false;
			}*/
		});
		
	
	
		function CheckSelectedClass()
		{
				if($(this).children("button").hasClass("selected"))
				{
					$(this).removeClass("selected");
				}
				else
				{
					$(this).addClass("selected");
				}
		}
		
		$("a").click( function() {
			
			var id = $(this).attr("id");
			if(id==bold||italic||underline)
			{
				CheckSelectedClass();
				cw.document.execCommand(id,false,"");
				cw.focus();
				return false;
			}
			return false;
		});
		
		$("a#createlink").click(function() {
			var url = prompt("Provide the link");
			CheckSelectedClass();
			cw.document.execCommand("createLink",false,url);
			cw.focus();
			return false;
		});
		$("a#insertImage").click(function() {
			var url = prompt("Image link URL");
			CheckSelectedClass();
			cw.document.execCommand("insertImage",false,url);
			cw.focus();
			return false;
		});
		
	
});
