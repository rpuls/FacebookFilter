$(document).ready(function () {
    var filterWords = [];
    var cleanMode = false;

    let addToList = function () {        
        var wordToAdd = $('#wordTxt').val();
        if (wordToAdd != "" && !filterWords.includes(wordToAdd)) {
            filterWords.push(wordToAdd);
            setTags();
        }
    }

    let removeFromList = function (word) {
        var i = filterWords.indexOf(word);
        if (i != -1) {
            filterWords.splice(i, 1);
        }
        setTags();
    }

    let setTags = function () {
        $("#tagfield").empty();
        for (let word of filterWords) {
            appendTag($("#tagfield"), word);
        }
    }


    let appendTag = function (box, word) {
        const inlineDiv = $("<div>", { "class": "inline" });
        const badge = $("<span>", { "class": "badge right" });
        badge.text(word);
        inlineDiv.append(badge);
        const x = $("<button>", { "class": "badge left" });
        x.text("×");
        x.click(function () {
            removeFromList(word);
        })
        inlineDiv.append(x);
        box.append(inlineDiv);
    };

    let setCleanMode = function(mode){
        cleanMode = mode;
        if(cleanMode){
            $('#markOn').text("✔");
        }else{
            $('#markOn').text("⚠");
            console.log($('#markOn'));
        }
    }

    $('#addBtn').click(addToList);
    $('#normalRBtn').change(function(){
        setCleanMode(false)});
    $('#cleanRBtn').change(function(){
        setCleanMode(true)});


});