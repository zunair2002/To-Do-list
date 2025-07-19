$(document).ready(function() {
    function updateCount() {
        $("#taskCount").text($("#taskList li").length);
    }
    
    $("#addTask").click(function() {
        let task = $("#taskInput").val();
        if (task === "") {
            $("#error").fadeIn().delay(2000).fadeOut();
        } else {
            let newTask = $("<li></li>").text(task).hide().fadeIn();
            $("#taskList").append(newTask);
            $("#taskInput").val("");
            updateCount();
        }
    });

    $("#clearAll").click(function() {
        $("#taskList").fadeOut(function() { $(this).empty().show(); updateCount(); });
    });

    $(".imgs").click(function() {
        $("#largeImage").attr("src", $(this).attr("src")).fadeIn();
    });
});
