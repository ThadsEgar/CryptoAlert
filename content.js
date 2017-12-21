//variables that will be updated
var inputAmount;
var currency;
var aboveOrBelow;

//API DEMO
var coinData;
var coinWebsite;
var urlBase = "https://api.coinmarketcap.com/v1/ticker/";
var urlCoin;

//Chrome storage set
function setStorage(){
	//store all var
	chrome.storage.local.set("inputAmount":inputAmount);
	chrome.storage.local.set("currency":currency);
	chrome.storage.local.set("aboveOrBelow":aboveOrBelow);
	chrome.storage.local.set("coinData":coinData);
	chrome.storage.local.set("urlBase":urlBase);
	chrome.storage.local.set("urlCoin":urlCoin);
}
//Chrome storage get
function getStorage(){
	chrome.storage.local.get("inputAmount", function(result)
	{
		inputAmount = result.inputAmount;
	});
	chrome.storage.local.get("currency", function(result)
	{
		currency = result.currency;
	});
	chrome.storage.local.

}





//button
$(document).ready(function(){
	$("#inputAmountB").click(function() {
		//update inputAmount : get currency type : get option above or below
		inputAmount = $("#inputAmount").val();
		currency = $("#currency").val();
		aboveOrBelow = $("#aboveOrBelow").val();
		$("#amountN").html(inputAmount + " USD");

		//update URL based on current coin being used
		urlCoin = urlBase + currency + "/";

		//JSON
		$.ajax(
		{
			dataType: "json",
			url: urlCoin,
			success: success
		});
	});
});

function success(e)
{
	var result = "";
	$.each(e,function(index,value)
	{
		result += value.price_usd;

	});

	//update USD
	$("#amountC").html("Current: " + result + " USD");
}



