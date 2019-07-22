/**
 * This pagination plug-in provides a `dt-tag select` menu with the list of the page
 * numbers that are available for viewing.
 *
 *  @name Select list
 *  @summary Show a `dt-tag select` list of pages the user can pick from.
 *  @author _jneilliii_
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable( {
 *            "sPaginationType": "listbox"
 *        } );
 *    } );
 */

$.fn.dataTableExt.oPagination.listbox = {
    /*
     * Function: oPagination.listbox.fnInit
     * Purpose:  Initalise dom elements required for pagination with listbox input
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *             node:nPaging - the DIV which contains this pagination control
     *             function:fnCallbackDraw - draw function which must be called on update
     */
    "fnInit": function (oSettings, nPaging, fnCallbackDraw) {
        var nInput = document.createElement('select');
        var nPage = document.createElement('span');
        var nOf = document.createElement('span');
        var nPrevious = document.createElement('div');
        var nNext = document.createElement('div');
        var nNpPaging = document.createElement('div');
        nOf.className = "paginate_of";
        nPage.className = "paginate_page";
        if (oSettings.sTableId !== '') {
            nPaging.setAttribute('id', oSettings.sTableId + '_paginate');
            nNpPaging.setAttribute('id', 'nextPrev_paginate');
            nPrevious.setAttribute('id', oSettings.sTableId + '_previous');
            nNext.setAttribute('id', oSettings.sTableId + '_next');
        } 
        nPrevious.title = "Previous";
        nNext.title = "Next";
        nNpPaging.className = "float-right";
        nPrevious.className = "paginationArrow float-right active previous";
        nNext.className = "paginationArrow float-right active next";
        $(nNext).html(">");
        $(nPrevious).html("<");

            nNpPaging.appendChild(nPrevious);
            nNpPaging.appendChild(nNext);
            nPaging.appendChild(nNpPaging);


        nInput.style.display = "inline";
        nPage.innerHTML = "Page ";
        nPaging.appendChild(nPage);
        nPaging.appendChild(nInput);
        nPaging.appendChild(nOf);
        $(nInput).change(function (e) { // Set DataTables page property and redraw the grid on listbox change event.
            window.scroll(0, 0); //scroll to top of page
            if (this.value === "" || this.value.match(/[^0-9]/)) { /* Nothing entered or non-numeric character */
                return;
            }
            var iNewStart = oSettings._iDisplayLength * (this.value - 1);
            if (iNewStart > oSettings.fnRecordsDisplay()) { /* Display overrun */
                oSettings._iDisplayStart = (Math.ceil((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength) - 1) * oSettings._iDisplayLength;
                fnCallbackDraw(oSettings);
                return;
            }
            oSettings._iDisplayStart = iNewStart;
            fnCallbackDraw(oSettings);
        }); /* Take the brutal approach to cancelling text selection */
        $('span', nPaging).bind('mousedown', function () {
            return false;
        });
        $('span', nPaging).bind('selectstart', function () {
            return false;
        });

        $(nPrevious).click(function () {
            /* Disallow paging event during a current paging event */
            if (typeof oSettings.iPagingLoopStart != 'undefined' && oSettings.iPagingLoopStart != -1) {
                return;
            }

            oSettings.iPagingLoopStart = oSettings._iDisplayStart;
            oSettings.iPagingEnd = oSettings._iDisplayStart - oSettings._iDisplayLength;

            /* Correct for underrun */
            if (oSettings.iPagingEnd < 0) {
                oSettings.iPagingEnd = 0;
            }

            var iTween = $.fn.dataTableExt.oPagination.iTweenTime;
            var innerLoop = function () {
                if (oSettings.iPagingLoopStart > oSettings.iPagingEnd) {
                    oSettings.iPagingLoopStart--;
                    oSettings._iDisplayStart = oSettings.iPagingLoopStart;
                    fnCallbackDraw(oSettings);
                    setTimeout(function () {
                        innerLoop();
                    }, iTween);
                } else {
                    oSettings.iPagingLoopStart = -1;
                }
            };
            innerLoop();
        });

        $(nNext).click(function () {
            /* Disallow paging event during a current paging event */
            if (typeof oSettings.iPagingLoopStart != 'undefined' && oSettings.iPagingLoopStart != -1) {
                return;
            }

            oSettings.iPagingLoopStart = oSettings._iDisplayStart;

            /* Make sure we are not over running the display array */
            if (oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay()) {
                oSettings.iPagingEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;
            }

            var iTween = $.fn.dataTableExt.oPagination.iTweenTime;
            var innerLoop = function () {
                if (oSettings.iPagingLoopStart < oSettings.iPagingEnd) {
                    oSettings.iPagingLoopStart++;
                    oSettings._iDisplayStart = oSettings.iPagingLoopStart;
                    fnCallbackDraw(oSettings);
                    setTimeout(function () {
                        innerLoop();
                    }, iTween);
                } else {
                    oSettings.iPagingLoopStart = -1;
                }
            };
            innerLoop();
        });

        /* Take the brutal approach to cancelling text selection */
        $(nPrevious).bind('selectstart', function () {
            return false;
        });
        $(nNext).bind('selectstart', function () {
            return false;
        });

    },

    /*
     * Function: oPagination.listbox.fnUpdate
     * Purpose:  Update the listbox element
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *             function:fnCallbackDraw - draw function which must be called on update
     */
    "fnUpdate": function (oSettings, fnCallbackDraw) {
        if (!oSettings.aanFeatures.p) {
            return;
        }
        var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
        var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1; /* Loop over each instance of the pager */
        var an = oSettings.aanFeatures.p;
        for (var i = 0, iLen = an.length; i < iLen; i++) {
            var spans = an[i].getElementsByTagName('span');
            var inputs = an[i].getElementsByTagName('select');
            var elSel = inputs[0];
            if (elSel.options.length != iPages) {
                elSel.options.length = 0; //clear the listbox contents
                for (var j = 0; j < iPages; j++) { //add the pages
                    var oOption = document.createElement('option');
                    oOption.text = j + 1;
                    oOption.value = j + 1;
                    try {
                        elSel.add(oOption, null); // standards compliant; doesn't work in IE
                    } catch (ex) {
                        elSel.add(oOption); // IE only
                    }
                    elSel.className = "form-control";
                }
                spans[1].innerHTML = "&nbsp;of&nbsp;" + "<strong class='pagescount'>" + iPages + "</strong>";
            }
            elSel.value = iCurrentPage;
            if ( an[i].childNodes[0].length !== 0 ){
                an[i].childNodes[0].childNodes[0].className =
                    ( oSettings._iDisplayStart === 0  ) ? "paginationArrow float-left disabled previous" :  "paginationArrow float-left active previous";
                
                an[i].childNodes[0].childNodes[1].className =
                    (oSettings.fnDisplayEnd() === oSettings.fnRecordsDisplay() ) ? "paginationArrow float-right disabled next" : "paginationArrow float-right active next" ;
            }


        }



    }
};
