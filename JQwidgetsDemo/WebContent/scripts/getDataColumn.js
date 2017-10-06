function getDataColumns(paraMethod) {
	var columns;
	if (paraMethod == "getZonSet") {
		columns = [ {
			text : 'zone',
			datafield : 'zone',
			width : 100
		}, {
			text : 'zone_name',
			datafield : 'zone_name',
			width : 100
		}, {
			text : 'clinic_flag',
			datafield : 'clinic_flag',
			width : 180
		}, {
			text : 'hospsid',
			datafield : 'hospsid',
			width : 180
		}, {
			text : 'ip_address',
			datafield : 'ip_address',
			width : 180
		} ];
	}

	if (paraMethod == "getPatinpListInp") {
		columns = [ {
            text: '#', sortable: false, filterable: false, editable: false,
            groupable: false, draggable: false, resizable: false,
            datafield: '', columntype: 'number', width: 50,
            cellsrenderer: function (row, column, value) {
                return "<div style='margin:4px;'>" + (value + 1) + "</div>";
            }
        },{
			text : 'chart_no',
			datafield : 'chart_no',
			columntype: 'textbox', 
			filtertype: 'textbox',
			width : 60			
		}, {
			text : 'serno',
			datafield : 'serno',
			width : 60
		}, {
			text : 'pt_name',
			datafield : 'pt_name',
			width : 100
		}, {
			text : 'pt_type',
			datafield : 'pt_type',
			width : 50
		}, {
			text : 'type_name',
			datafield : 'type_name',
			width : 100
		}, {
			text : 'price_type',
			datafield : 'price_type',
			width : 50
		}, {
			text : 'sex',
			datafield : 'sex',
			width : 50
		}, {
			text : 'sex_name',
			datafield : 'sex_name',
			width : 50
		}, {
			text : 'bed_no',
			datafield : 'bed_no',
			width : 50
		}, {
			text : 'ns',
			datafield : 'ns',
			width : 50
		}, {
			text : 'dept_name',
			datafield : 'dept_name',
			width : 100
		}, {
			text : 'ckin_date',
			datafield : 'ckin_date',
			width : 60
		}, {
			text : 'ckin_time',
			datafield : 'ckin_time',
			width : 60
		}, {
			text : 'op_date',
			datafield : 'op_date',
			width : 60
		}, {
			text : 'op_days',
			datafield : 'op_days',
			width : 60
		}, {
			text : 'vs',
			datafield : 'vs',
			width : 50
		}, {
			text : 'division',
			datafield : 'division',
			width : 50
		}, {
			text : 'div_name',
			datafield : 'div_name',
			width : 100
		}, {
			text : 'discharge_reason',
			datafield : 'discharge_reason',
		}, {
			text : 'discharge_date',
			datafield : 'discharge_date',
		}, {
			text : 'discharge_time',
			datafield : 'discharge_time',
		}, {
			text : 'emg_days',
			datafield : 'emg_days',
		}, {
			text : 'chronic_day',
			datafield : 'chronic_day',
		}, {
			text : 'part_no',
			datafield : 'part_no',
		}, {
			text : 'card_seq',
			datafield : 'card_seq',
		}, {
			text : 'brain_flag',
			datafield : 'brain_flag',
		}, {
			text : 'status',
			datafield : 'status',
		}, {
			text : 'close_acnt_date',
			datafield : 'close_acnt_date',
		}, {
			text : 'zone',
			datafield : 'zone',
		}, {
			text : 'zone_name',
			datafield : 'zone_name',
		}, {
			text : 'spec_list',
			datafield : 'spec_list',
		}, {
			text : 'appoint_discharge_date',
			datafield : 'appoint_discharge_date',
		}, {
			text : 'status_result',
			datafield : 'status_result',
		}, {
			text : 'acnt_date',
			datafield : 'acnt_date',
		}, {
			text : 'inpspec_name',
			datafield : 'inpspec_name',
		}, {
			text : 'discharge_name',
			datafield : 'discharge_name',
		} ];
	}
	return columns;
}