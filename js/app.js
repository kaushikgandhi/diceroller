/**
 * Main app js
 * Created by uxjulia on 12/28/15. Modified by mekaushik.com @ May 2018
 */
 
 
(function ($, window, document) {
    'use strict';
    var rolls1 = [];
    var rolls2 = [];
    function logHistory(button) {
        var iden, target, $el, val;
        $el = $(button);
        val = $el.text();
        iden = $el.attr("id");
        target = $("div#rolls");
        var idx = function () {
            return $("span.history-text").length;
        };
       
        var p = $("<span/>", {
            "class": "history-text ic-"+(parseInt(iden)+1),
            id: (parseInt(iden)-1)
        });
        $(p).data("arrayId", {id: iden});
        $(p).prependTo(target);
      try{
        rolls1.push((parseInt(iden)+1));
      }catch(e){
        rolls1 = [];
        rolls1.push((parseInt(iden)+1));
      }
    }

    function arrangeRolls(){
      try{
      $('#total-txt').text('Total Rolls: '+rolls1.length);
      var target = $("div#rolls");
         $("div#rolls").empty();
        $.each(rolls1,function(id,iden){
         var p = $("<span/>", {
                  "class": "history-text ic-"+(parseInt(iden)),
                  id: iden
              });
        $(p).data("arrayId", {id: iden});
              $(p).prependTo(target);
      });
      }catch(e){
          $('#total-txt').text('Total Rolls: 0');
      }
         

        try{
      $('#total-txt1').text('Total Rolls: '+rolls2.length);
       var target1 = $("div#rolls1");
        $("div#rolls1").empty();
        $.each(rolls2,function(id,iden){
         var p = $("<span/>", {
                  "class": "history-text ic-"+(parseInt(iden)),
                  id: iden
              });
        $(p).data("arrayId", {id: iden});
              $(p).prependTo(target1);
      });
      }catch(e){
          $('#total-txt1').text('Total Rolls: 0');
      }
       
        


    }

    function logHistory1(button) {
        var iden, target, $el, val;
        $el = $(button);
        val = $el.text();
        iden = $el.attr("id");
        target = $("div#rolls1");
        var idx = function () {
            return $("span.history-text").length;
        };
       
        var p = $("<span/>", {
            "class": "history-text ic-"+(parseInt(iden)+1),
            id: (parseInt(iden)-1)
        });
        $(p).data("arrayId", {id: iden});
        $(p).prependTo(target);
        try{
        rolls2.push((parseInt(iden)+1));
      }catch(e){
        rolls2 = [];
        rolls2.push((parseInt(iden)+1));
      }
    }

    function displayUsers(n) {
        if (n == 0) {
            nextUp(0);
        } else {
            var i;
            for (i = 0; i < n; i++) {
                var span = $("<span/>", {
                    "class": "glyphicon glyphicon-user",
                    id: i + 1
                });
                var target = $("div.user-icons");
                $(span).appendTo(target);
            }
        }
    }

    function displayUserInputs(n) {
        var target = $("div#playerNameInputs");
        $(target).empty();
        if (n == 0) {
            console.log("No Players");
        } else {
            var i;
            for (i = 0; i < n; i++) {
                var ix = i + 1;
                var input = $("<input/>", {
                    "class": "input-sm form-control",
                    id: ix
                });
                var label = $("<label/>", {
                    "class": "control-label",
                    "for": input.id,
                    text: "Player " + ix + "'s Name"
                });
                var group = $("<div/>", {
                    "class": "form-group"
                });
                $(label).appendTo(group);
                $(input).appendTo(group);
                $(group).appendTo(target);
            }
        }
    }

    function highlightUser() {
        var currentUser = $(".turn");
        var next;
        var removeTurn = function (x) {
            $(x).removeClass('turn');
        };
        if ($(currentUser).length == "0") {
            $("span.glyphicon-user:first-child").addClass('turn');
        } else {
            if ($(currentUser).attr("id") == $(".glyphicon-user").length) {
                removeTurn(currentUser);
                next = "1";
            } else {
                var u = parseFloat(($(currentUser).attr("id")));
                removeTurn(currentUser);
                next = (u + 1);
            }
        }
        $("span#" + next + ".glyphicon-user").addClass('turn');
        if ($("span.glyphicon-user").length != "0") {
            nextUp(next);
        }
    }

    function nextUp(x) {
        if ($("span.glyphicon-user").length != "0") {
            var label = $("label#nextUp");
            if (x == undefined || null) {
                x = "1";
            }
            if (x == "0") {
                $("div#nextUpContainer").attr("style", "display:none");
                return;
            }
            var inputVal = $("#playerNameInputs").find("input#" + x).val();
            var name;
            if ((inputVal == "" || undefined || null)) {
                name = "Player " + x;
            } else {
                name = inputVal;
            }
            $(label)
                .parent().attr("style", "display:block")
                .end()
                .text("Next up: " + name);
        }
    }

    function setUser(elem) {
        $("span.turn").removeClass('turn');
        $(elem).addClass('turn');
    }
    function saveSettings(btn) {
        var $btn = $(btn);
        var activeUser = $('div.user-icons').find('span.turn');
        var revertButton = function(){
            setTimeout(function(){
                $btn.html('Save');
                $btn.attr("style", "background-color: inherit");
            }, 2000);
        };
        $(activeUser).trigger('click');
        $btn.html('Saved!');
        $btn.attr("style", "background-color: #DCEACE");
        revertButton();
    }

    $(document).ready(function () {
        $.material.init();
        var data = {
            labels: ["", "", "", "", "", ""],
            datasets: [
                {
                    label: "1",
                    fillColor: "rgba(114,166,202,0.2)",
                    strokeColor: "rgba(114,166,202,.8)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [0, 0, 0, 0, 0, 0]
                }
            ]
        };
        var data1 = {
            labels: ["", "", "", "", "", ""],
            datasets: [
                {
                    label: "1",
                    fillColor: "rgba(114,166,202,0.2)",
                    strokeColor: "rgba(114,166,202,.8)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [0, 0, 0, 0, 0, 0]
                }
            ]
        };
        var ctx = $("#diceChart").get(0).getContext("2d");
        var ctx2 = $("#diceChart2").get(0).getContext("2d");
        var lineChart = new Chart(ctx).Bar(data, {
            responsive: true,
            tooltipTemplate: "Total: <%= value %>"
        });
        var lineChart1 = new Chart(ctx2).Bar(data1, {
            responsive: true,
            tooltipTemplate: "Total: <%= value %>"
        });
        var resetOneChart = function(whichbar){
            console.log(whichbar);
            $("#rolls span.history-text.ic-"+(whichbar+1)).remove();
            lineChart.datasets[0].bars[whichbar].value = 0;
            lineChart.update();
            postData();
            

        };
        var resetOneChart1 = function(whichbar){
            console.log(whichbar);
            $("#rolls1 span.history-text.ic-"+(whichbar+1)).remove();
            lineChart1.datasets[0].bars[whichbar].value = 0;
            lineChart1.update();
            postData();
        };
        var resetData = function () {
            var bar = lineChart.datasets[0].bars;
            $.each(bar, function (idx, el) {
                el.value = 0;
            });
            lineChart.update();

            $("#rolls span.history-text").remove();
            rolls1 = [];
            $("span#total-txt").empty();
            postData();
            
        };

        var resetData1 = function () {
            var bar = lineChart1.datasets[0].bars;
            $.each(bar, function (idx, el) {
                el.value = 0;
            });
            lineChart1.update();
            $("#rolls1 span.history-text").remove();
            $("span#total-txt1").empty();
            rolls2 = [];
            postData();
            
        };
        var calcTotal = function (id) {
            var current = lineChart.datasets[0].bars[id].value;
            return parseInt(current) + 1;
        };
        var calcTotal1 = function (id) {
            var current = lineChart1.datasets[0].bars[id].value;
            return parseInt(current) + 1;
        };

        var deleteOne = function (id) {
            var current = lineChart.datasets[0].bars[id].value;
            lineChart.datasets[0].bars[id].value = current - 1;
            lineChart.update();
            rolls1.pop();
            postData();
        };
        var deleteOne1 = function (id) {
            var current = lineChart1.datasets[0].bars[id].value;
            lineChart1.datasets[0].bars[id].value = current - 1;
            lineChart1.update();
            rolls2.pop()
            postData();
        };

        var logDiceRoll = function (button) {
            var $el = $(button);
            var id = $($el).attr("id");
            lineChart.datasets[0].bars[id].value = calcTotal(id);
            lineChart.update();
            postData();

        };
        var logDiceRoll1 = function (button) {
            var $el = $(button);
            var id = $($el).attr("id");
            lineChart1.datasets[0].bars[id].value = calcTotal1(id);
            lineChart1.update();
            postData();
        };

        var setTotalRolls = function () {
            var count = $("#rolls span.history-text").length;
            $("span#total-txt").html("Total Rolls: " + count);
        };
        var setTotalRolls1 = function () {
            var count = $("#rolls1 span.history-text").length;
            $("span#total-txt1").html("Total Rolls: " + count);
        };

        var numbers = $("button.digit");

        $(numbers).on('click', function () {
          var _this = this;
             $.get( "handler.php",function(data){ 

                console.log(data);

                var bar1 = lineChart.datasets[0].bars;
                  $.each(bar1, function (idx, el) {
                      el.value = data['data1'][idx];
                  });
                 var bar2 = lineChart1.datasets[0].bars;
                    $.each(bar2, function (idx, el) {
                    el.value = data['data2'][idx];
                    });
                lineChart.update();
                lineChart1.update();
                logHistory(_this);
                setTotalRolls();
                logDiceRoll(_this);
               
                highlightUser();

            });

        });

        //table 2
        var numbers1 = $("button.digit1");

        $(numbers1).on('click', function () {
            var _this = this;

            $.get( "handler.php",function(data){ 

                console.log(data);

                var bar1 = lineChart.datasets[0].bars;
                  $.each(bar1, function (idx, el) {
                      el.value = data['data1'][idx];
                  });
                 var bar2 = lineChart1.datasets[0].bars;
                    $.each(bar2, function (idx, el) {
                    el.value = data['data2'][idx];
                    });
                lineChart.update();
                lineChart1.update();
                 logHistory1(_this);
                setTotalRolls1();
                logDiceRoll1(_this);
               
                highlightUser();

            });
            
        });

        //reset button 
        $('button.resetbutton').on('click',function(){
            var id = parseInt(this.id);
            resetOneChart(id);

        });
        $('button.resetbutton1').on('click',function(){
            var id = parseInt(this.id);
            resetOneChart1(id);
        });
        $("button#settingsBtn").on('click', function () {
            var settingsBtnSpan = $("span#settingsText");
            if (settingsBtnSpan.html() == "Settings") {
                settingsBtnSpan.html("Hide Settings");
            } else {
                settingsBtnSpan.html("Settings");

            }
        });
        $("button#reset").on('click', function () {
            resetData();
            setUser($("span.glyphicon-user:first-child"));
            nextUp("1");
        });
        $("button#reset1").on('click', function () {
            resetData1();
            setUser($("span.glyphicon-user:first-child"));
            nextUp("1");
        });

        $(".user-icons").on('click', 'span.glyphicon-user', function () {
            setUser(this);
            nextUp(this.id);
        });

        $("button#undo").on('click', function () {
            var target = $("#rolls span.history-text:first-child");
            var v = target.data("arrayId");
            var arrayId = $.map(v, function (idx, el) {
                return idx;
            });
            deleteOne(arrayId);
            target.remove();
            setTotalRolls();
        });

        $("button#undo1").on('click', function () {
            var target = $("#rolls1 span.history-text:first-child");
            var v = target.data("arrayId");
            var arrayId = $.map(v, function (idx, el) {
                return idx;
            });
            deleteOne1(arrayId);
            target.remove();
            setTotalRolls1();
        });

        $("select#users").on('change', function () {
            var target = $("div.user-icons");
            $(target).empty();
            var n = $(this).val();
            if (n == "0") {
                $("div#nextUpContainer").attr("style", "display:none");
            }
            displayUserInputs(n);
            displayUsers(n);
            highlightUser();
        });


        $('button#saveSettingsBtn').on('click', function () {
            var $btn = $(this);
            saveSettings($btn);
        });

        function displayTimer() {
            var selection = 2; //TODO: tie this to UI selection
            var newTimer = selection * 1000;
            // TODO: create selection of timer length and display timer in minutes.
            // TODO: change div color to red when time is up.

            function timer() {
                if (newTimer == 0) {
                } else {
                    var d = newTimer - 1;
                    $(".timer").html(d);
                    newTimer--;
                }
            }

            var startTimer = function () {
                setInterval(timer, 1000);
            };

            function stopTimer() {
                clearInterval(startTimer());
                $(".timer").empty();
            }

            $("input#timerSel").on('click', function () {
                if ($(this).prop('checked') === true) {
                    setInterval(timer, 1000);
                }
                if ($(this).prop('checked') === false) {
                    stopTimer();
                }
            });
        }

        //displayTimer();
        var syncData = function(){

            $.get( "handler.php",function(data){ 

                console.log(data);

                var bar1 = lineChart.datasets[0].bars;
                  $.each(bar1, function (idx, el) {
                      el.value = data['data1'][idx];
                  });
                 var bar2 = lineChart1.datasets[0].bars;
                    $.each(bar2, function (idx, el) {
                    el.value = data['data2'][idx];
                    });
                rolls1 = data['rolls1'];
                rolls2 = data['rolls2'];
                lineChart.update();
                lineChart1.update();
                arrangeRolls();

            });

        };
        syncData();
        $('.refresh').on('click',syncData);
        var postData = function(){
          var data1=[];
          var data2 = [];
            var bar1 = lineChart.datasets[0].bars;
                  $.each(bar1, function (idx, el) {
                      data1.push(el.value);
                  });
                 var bar2 = lineChart1.datasets[0].bars;
                    $.each(bar2, function (idx, el) {
                    data2.push(el.value);
                    });
            var post_data = {'data':{'data1':data1,'data2':data2,'rolls1':rolls1,'rolls2':rolls2}};
            $.post( "handler.php",post_data).done(function(data){ 
                console.log(data);

            });

        };

    });
})(jQuery);
