$(document).ready(function() {
	var cw = document.getElementById("ifrm").contentWindow;
	cw.document.designMode="on";
	cw.document.close();
	cw.focus();
	
		//$('button').each().addClasss('btn btn-small');
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
				if($(this).children("button").hasClass("btn-primary"))
				{
					$(this).removeClass("btn-primary");
				}
				else
				{
					$(this).addClass("btn-primary");
				}
		}
		
		$("a.common").click( function() {
			
			var id = $(this).attr("id");
			CheckSelectedClass();
			cw.document.execCommand(id,false,"");
			cw.focus();
			return false;
		});
		
		$("a#delete").click( function() {
			cw.document.execCommand("delete",false,"");
			cw.focus();
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
		$("a#paste").click(function() {
			//var cp = $(this).attr("id");
			cw.document.execCommand("paste",false,"");
			cw.focus();
			return false;
		});
	
});
