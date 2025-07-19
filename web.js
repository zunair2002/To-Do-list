$(document).ready(function() {
    function updateCount() {
        $("#taskCount").text($("#taskList li").length);
    }
    
    $("#addTask").click(function() {
        let task = $("#taskInput").val().trim();
        if (task === "") {
            $("#error").fadeIn().delay(2000).fadeOut();
        } else {
            let newTask = $("<li></li>").text(task).hide().fadeIn();
            $("#taskList").append(newTask);
            $("#taskInput").val("");
            updateCount();
        }
    });

    // Optional: Add task on Enter key press
    $("#taskInput").keypress(function(e) {
        if (e.which === 13) { // Enter key
            $("#addTask").click();
        }
    });

    $("#clearAll").click(function() {
        $("#taskList").fadeOut(function() {
            $(this).empty().show();
            updateCount();
        });
    });

    // Add task deletion on click
    $("#taskList").on("click", "li", function() {
        $(this).fadeOut(function() {
            $(this).remove();
            updateCount();
        });
    });

    $(".imgs").click(function() {
        let src = $(this).attr("src");
        $("#largeImage").attr("src", src).fadeIn();
    });
});