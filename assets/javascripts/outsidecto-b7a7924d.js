$(function(){$('input[type="checkbox"]').each(function(){var t=document.location.pathname,c=t+$(this).prop("id");$(this).prop("checked","true"==localStorage.getItem(c)),$(this).bind("click",function(){var t=document.location.pathname,c=t+$(this).prop("id");localStorage.setItem(c,$(this).prop("checked"))})})});