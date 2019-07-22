var jElement = null;
jElement = $(element);
function gridResize() {
     var jElement = $scope.getJElement();
     var remainingWidthInContainer = jElement.find(".custom-data-grid-top-wrapper").width() - jElement.find(".table1-wrapper").width() - jElement.find(".table3-wrapper").width() - 1;
     var wrapperObjs = jElement.find(".table2-wrapper,.table2-inner-wrapper1,.table2-inner-wrapper2");
     wrapperObjs.css({
         "width": remainingWidthInContainer + "px",
         "max-width": remainingWidthInContainer + "px"
     });
     jElement.find(".table2-wrapper").css({
         "margin-left": (jElement.find(".table1-wrapper").width() - 1) + "px"
     });
     jElement.find(".table2-inner-wrapper2 .wrap-message").width(remainingWidthInContainer - 20); //To avoid message displaying to the edge of the container
     jElement.find(".table2-inner-div2,.table2").css("width", "auto"); //reset previously set pixel widths to auto
     var table2FullWidth = jElement.find(".table2").width();
     var table2InnerDiv2FullWidth = jElement.find(".table2-inner-div2").width();
     if (table2FullWidth < table2InnerDiv2FullWidth) { //expand to full width of top container
         jElement.find(".table2").width(table2InnerDiv2FullWidth);
         table2FullWidth = table2InnerDiv2FullWidth;
     }
     jElement.find(".table2-inner-div1").width(table2FullWidth);
     //var shadhowHeight = jElement.find(".table1").height();
     //jElement.find(".grid-shadow").css({"height": shadhowHeight});
     if ($(".table2-inner-wrapper2 th:visible").length == 2) {
         $(".table2-inner-div2").addClass('twoCol');
     }
     $scope.adjustRowHeights();
 }

 function adjustRowHeights() {
     var table1TRs = $scope.getJElement().find(".table1 tr");
     var table2TRs = $scope.getJElement().find(".table2 tr");
     var table3TRs = $scope.getJElement().find(".table3 tr");
     var dragTableTRs = $scope.getJElement().find(".dragTable tr");
     for (var i = 0; i < table1TRs.size(); i++) {
         table1TRs.eq(i).css("height", "auto");
         table2TRs.eq(i).css("height", "auto");
         table3TRs.eq(i).css("height", "auto");
         if (i === 0) {
             table1TRs.eq(i).find("th, .th-wrapper").css("height", "auto");
             table2TRs.eq(i).find("th, .th-wrapper").css("height", "auto");
             table3TRs.eq(i).find("th, .th-wrapper").css("height", "auto");
         }
         var maxRowHeight = Math.max(Math.max(table1TRs.eq(i).height(), table2TRs.eq(i).height(), table3TRs.eq(i).height()), 45);
         //maxRowHeight = maxRowHeight;
         if (i === 0) {
             table1TRs.eq(i).find("th, .th-wrapper").outerHeight(maxRowHeight);
             table2TRs.eq(i).find("th, .th-wrapper").outerHeight(maxRowHeight);
             table3TRs.eq(i).find("th, .th-wrapper").outerHeight(maxRowHeight + 1);
         } else {
             table1TRs.eq(i).height(maxRowHeight);
             table2TRs.eq(i).height(maxRowHeight);
             table3TRs.eq(i).height(maxRowHeight);
         }
         dragTableTRs.eq(i).height(maxRowHeight);
     }
 }

 function adjustColumnWidths(view) {
     var table1Column = $scope.getJElement().find(".table1-wrapper");
     var table1 = $scope.getJElement().find(".table1");
     var table2 = $scope.getJElement().find(".table2");
     if (view == 'condensedView') {
         table1Column.css("width", "50%");
         table1.addClass('condensed');
         table2.addClass('condensed');
     } else {
         table1Column.css("width", "70%");
         table1.removeClass('condensed');
         table2.removeClass('condensed');
     }
     $scope.gridResize();
 }
