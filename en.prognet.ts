export const tr_resources = {
  'translation': {
    'common': {
      'server_url': 'Server Address',
      'refresh': 'Refresh',
      'username': 'User Name',
      'password': 'Password',
      'name': 'Name',
      'surname': 'Surname',
      'type': 'Type',
      'date': 'Date',
      'actions': 'Actions',
      'search': 'Search',
      'time_format': 'HH:mm',
      'date_format': 'YYYY.MM.DD',
      'date_format_short': 'YY.MM.DD',
      'datetime_format': 'YYYY.MM.DD HH:mm',
      'datetime_format_short': 'YY.MM.DD HH:mm',
      'units': {
        'bytes': 'bytes',
        'packets': {
          '0': 'pkts',
          '1': 'k',
          '2': 'm',
          '3': 'b',
          '4': 'tri'
        },
        'data_rate': {
          '0': 'b/s',
          '1': 'kb/s',
          '2': 'Mb/s',
          '3': 'Gb/s',
          '4': 'Tb/s'
        }
      },
      'buttons': {
        'tools': {
          'title': 'Tools',
          'icon': 'icon-wrench'
        },
        'print': {
          'title': 'Print',
          'icon': 'fa fa-print',
          'perm': '@print'//@ önce mevcut sayfanın permissionlarına bak eeğr yoksa common permissiona bak
        },
        'export_pdf': {
          'title': 'Export to PDF',
          'icon': 'fa fa-file-pdf-o',
          'perm': '@export_pdf'
        },
        'copy_clipboard': {
          'title': 'Copy to Clipboard',
          'icon': 'fa fa-files-o',
          'perm': '@export_pdf'
        },
        'export_excel': {
          'title': 'Export to Excel',
          'icon': 'fa fa-file-excel-o',
          'perm': '@export_excel'
        },
        'refresh': {
          'title': 'Refresh',
          'icon': 'icon-refresh',
          'perm': '@refresh'
        },
        'close': {
          'title': 'Close',
          'icon': 'fa fa-times',
        },
        'clear': {
          'title': 'Clear',
          'icon': 'fa fa-times',
        },
        'logout': {
          'title': 'Logout',
          'icon': 'fa fa-sign-out',
        },
        'change_pwd': {
          'title': 'Change Password',
          'icon': 'fa fa-key',
        },
        'help': {
          'title': 'Help',
          'icon': 'fa fa-question'
        },
        'graph': 'icon-graph',
        'dropdown_icon': 'fa fa-angle-down',
        'list_icon': 'fa fa-list-ul',
        'eye_icon': {'icon': 'fa fa-eye', 'title': 'Start Network Discovery'},
        'add_icon': 'fa fa-plus-circle',
        'level_up': {'icon': 'fa fa-level-up', 'title': 'Get Central Network'},
        'toggle_physical_button_title': 'Toggle Physical/Virtual Network'
      },
      'fields': {
        'actions': '',
        'actions_help': 'This column contains actions that could be applicable to each row.'
      },
      'messages': {
        'RETURN_STATUS': {
          'SUCCESS': 'Operation succesfully completed.',
          'ERROR': 'Operation failed; \n{{message}}',
          'SERVER_ERROR': 'An error occured during operation.\n Please try again later.',
          'ACCESS_DENIED': 'You don\'t have permission for this operation.',
          'ACCESS_LIMITED': 'Access is limited for this operation, please try again later.',
          'NOT_MODIFIED': 'Data not modified.',
          'NOT_IMPLEMENTED': 'This operation is not supported.',
          'DEPRECATED': 'This operation is deprecated.',
          'INVALID_SESSION': 'Your session is terminated, please relogin.'
        },
        'ERROR_CODES': {},
        'return_home': 'Home',
        'idle_timeout': 'You session will be locked in {{seconds}} seconds. Do you want to continue your session?',
        'idle_timeout_title': '{{seconds}} seconds until log out ',
        'no_tab': 'Tab name is invalid or no tab is present at this time. Try clicking on a tab and refresh',
        'data_load_error': 'An error occured while loading data. Please try again later.',
        'validation_error': 'Form fields have some errors or they are empty. Please check your input.',
        'ip_validation_error': 'Please enter valid ip',
        'ip_validation_error_without_subnet': 'IP Address Is Not Valid.Please enter a valid ip without subnet',
        'ip_validation_error_with_subnet': 'IP Address Is Not Valid.Please enter a valid ip with subnet',
        'ipv6_validation_error': 'IPV6 Address Is Not Valid.Please enter a valid ip',
        'save_error': 'Please save new config.',
        'same_ip_error': 'relay server with the same ip already exists!',
        'wan_selection_error': 'Please select at least 2 local domains.',
        'select_error': 'At least one proposal required',
        'certificate_error': 'Please add certificate authorities',
        'facility_error': 'Please select facility',

        'validation': {
          'badInput': 'Bad input.',
          'patternMismatch': 'Please enter appropriate value.',
          'rangeOverflow': 'You can enter at most "{{input.max}}" as a value.',
          'rangeUnderflow': 'You must enter at least "{{input.min}}" as a value.',
          'stepMismatch': 'Please enter appropriate step value.',
          'tooLong': 'You can enter at most {{input.maxLength}} characters.',
          'tooShort': 'You must enter at least {{input.minLength}} characters.',
          'typeMismatch': 'Please enter a valid \'{{input.type}}\' value.',
          'valueMissing': 'This field is required.',
          'vl_minlength_error': 'You must enter at least {{value}} characters.',
          'vl_maxlength_error': 'You can enter at most {{value}} characters.',
          'pm_error': 'Passwords do not match. Please check your password entries.',
          'cm_error': 'Password must be at least 6 characters in lenght and should contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).',
          'ip_format_error': 'Please enter a proper IP address',
          'mac_format_error': 'Enter proper mac address',
          'mobile_phone_error': 'Please enter a proper mobile phone number',
          'datapath_error': 'Please enter a correct data path'
        },
        'bandwidth_field_value_error_max': 'Please enter a bandwidth value max 1.000.000 kbps',
        'bandwidth_field_value_error_min': 'Please enter a bandwidth value min 100 kbps',
        'vlan_tag_value_error_max': 'ID can\'t be bigger than 4096',
        'switch_certificate_download': 'Switch certificate download process has been started',
        'controller_certificate_download': 'Controller certificate download process has been started',
        "ntp_save_success": "Ntp settings are successfully saved.",
        'switch_certificate_confirm': 'Are you sure to download the switch certificate?',
        'unsaved_data': 'You have unsaved changes, do you still want to continue?',
        'json_parse_error': 'JSON parse error, please fix the error and retry.',
        'file_type_error': 'JSON format error. Please upload a properly JSON formatted file',
        'default_integer_range': 'Integer fields must be between 1 and 2147483647'
      },
      'labels': {
        'loading': 'In progress, please wait...',
        'VIRTUAL': 'Virtual',
        'PHYSICAL': 'Physical',
        'input_type': {
          'color': 'Color',
          'date': 'Date',
          'datetime-local': 'Date Time',
          'email': 'E-mail',
          'month': 'Month',
          'number': 'Number',
          'range': 'Range',
          'tel': 'Phone Number',
          'time': 'Time',
          'url': 'URL',
          'week': 'Week'
        },
        'add_to_list': 'Add to List',
        'new': 'New',
        'save':'Save'
      },
      'datatables': {
        'zerorecords': 'No data available in table',
        'nomatch': 'No matching records found',
        'emptyTable': 'No data available in table',
        'loading': 'Loading...',
        'loadingRecords': 'Loading...',
        'first': '<span rel="tooltip" title="First"><i class=\'fa fa-step-backward\'></i></span>  ',
        'first_notext': '<i class=\'fa fa-step-backward\'></i>',
        'last': '<span rel="tooltip" title="Last"> <i class=\'fa fa-step-forward\'></i></span>',
        'last_notext': '<i class=\'fa fa-step-forward\'></i>',
        'prev_notext': '<i class=\'fa fa-chevron-left\'></i>',
        'next_notext': '<i class=\'fa fa-chevron-right\'></i>',
        'prev': '<i class=\'fa fa-chevron-left\'></i> Prev',
        'next': 'Next <i class=\'fa fa-chevron-right\'></i>',
        'search': '<i class=\'fa fa-search\'></i>',
        'lengthmenu': '_MENU_ ',
        'info': '',
        'infoFiltered': '(filtered from <span>_MAX_</span> total records)',
        'infoEmpty': '',
        'search_here': 'Search here...',
        'lengthMenu': {
          '5': '5',
          '10': '10',
          '15': '15',
          '20': '20',
          'All': '-1'
        },
        'search_parse_error': 'Syntax Error: Please check character at column {{error.location.start.column}}.'
      },
      'datetimerangepicker': {
        'locale': {
          'format': 'MM/DD/YYYY hh:mm',
          'separator': ' - ',
          'applyLabel': 'Apply',
          'cancelLabel': 'Clear',
          'fromLabel': 'From',
          'toLabel': 'To',
          'customRangeLabel': 'Custom',
          'weekLabel': 'W',
          'daysOfWeek': [
            'Su',
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa'
          ],
          'monthNames': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          'firstDay': 1
        },
        'ranges': {
          'today': 'Today',
          'yesterday': 'Yesterday',
          'last7days': 'Last 7 Days',
          'last30days': 'Last 30 Days',
          'thisMonth': 'This Month',
          'lastMonth': 'Last Month'
        }
      },
    },
    'enums': {
      'BOOLEAN': {
        'true': {icon: 'fa fa-check', color: 'black', title: 'Yes', bool_title: 'True'},
        'false': {icon: 'fa fa-minus', color: 'black', title: 'No', bool_title: 'False'}
      },
      'ACCESSACTIONTYPE': {
        'ACCESS': {icon: 'fa fa-check', color: 'black', title: 'Permitted'},
        'DENIED': {icon: 'fa fa-minus', color: 'black', title: 'Prohibited'}
      },
      'AAASTATUS': {
        ACTIVE: {icon: 'fa fa-power-off', color: 'yellow-gold', title: 'Active'},
        PASSIVE: {icon: 'fa fa-power-off', color: 'grey-silver', title: 'Passive'}
      },
      'NETWORKDEVICETYPE': {
        GATEWAY: {icon: 'fa fa-arrows-alt', color: 'blue', title: 'Gateway'},
        ACCESS_POINT: {icon: 'fa fa-wifi', color: 'green-jungle', title: 'Access Point'},
        DHCP_SERVER: {icon: 'fa fa-sitemap', color: 'yellow-mint', title: 'DHCP Server'},
        VIRTUAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'yellow-gold', title: 'Virtual Gateway'},
        VRR: {icon: 'fa fa-map-signs', color: 'blue-hoki', title: 'VRR Device'},
        NTOP: {icon: 'fa fa-fire', color: 'grey-gallery', title: 'NTOP Server'},
        FIREWALL: {icon: 'fa fa-shield', color: 'red-mint', title: 'Firewall'},
        INTERNAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'default', title: 'Internal Gateway'}
      },
      'NETWORKDEVICESTATUS': {
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
      },
      'SECURITYLEVELS': {
        LEVEL_1: 'Level 1',
        LEVEL_2: 'Level 2',
        LEVEL_3: 'Level 3',
        LEVEL_4: 'Level 4',
        LEVEL_5: 'Level 5',
        LEVEL_6: 'Level 6',
        LEVEL_7: 'Level 7'
      },
      'SECURITYMODE': {
        OFF: {icon: 'fa fa-unlock-alt', color: 'dark', title: 'No Encryption'},
        TLS: {icon: 'fa fa-lock', color: 'dark', title: 'TLS Encryption On'},
      },
      'LINKMEDIUM': {
        COPPER: 'Copper',
        OPTICAL: 'Optical',
        WIRELESS: 'Wireless'
      },
      'SEVERITY': {
        MINOR: {icon: 'fa fa-arrow-circle-down', color: 'grey-silver', title: 'Minor'},
        MAJOR: {icon: 'fa fa-arrow-circle-up', color: 'green-seagreen', title: 'Major'},
        CRITICAL: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Critical'},
        FATAL: {icon: 'fa fa-bomb', color: 'red-mint', title: 'Fatal'},
        NONE: {icon: 'fa fa-ban', color: 'default', title: 'None'}
      },
      'ALARMTYPE': {
        ALARM: 'Alarm',
        EVENT: 'Alarm Event'
      },
      'ALARMSTATUS': {
        ON: {icon: 'fa fa-flag', color: 'red-mint', title: 'On'},
        OFF: {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Off'},
        NONE: {icon: 'fa fa-minus', color: 'grey-steel', title: 'None'}
      },
      'ALARM_NAMES': { /*loaded from AlarmCodes.ts file under swagger folder */},
      'FLOWSTATE': {
        PENDING_ADD: {icon: 'fa fa-hourglass-half', color: 'yellow-soft', title: 'Pending Add'},
        ADDED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Added'},
        PENDING_REMOVE: {icon: 'fa fa-recycle', color: 'yellow-gold', title: 'Pending Remove'},
        REMOVED: {icon: 'fa fa-trash', color: 'dark', title: 'Removed'},
        FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-mint', title: 'Failed'}
      },
      'MVTNSTATUS': {
        SUBMITTED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Requested'},
        REJECTED: {icon: 'fa fa-thumbs-down', color: 'red-mint', title: 'Denied'},
        ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
        SUSPENDED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Suspended'},
        INVALID: {icon: 'fa fa-times', color: 'yellow', title: 'Invalid'}
      },
      'WANSTATUS': {
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
        DISABLED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Disabled'}
      },
      'MVTNREQUESTSTATUS': {
        CREATED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Requested'},
        CREATE_REJECTED: {icon: 'fa fa-thumbs-down', color: 'red-mint', title: 'Denied'},
        ACCEPTED: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
        EDIT_REJECTED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Invalid Edit'},
        EDITED: {icon: 'fa fa-times', color: 'yellow', title: 'Edit'}
      },
      'PORTSTATUS': {
        DEAD: {icon: 'fa fa-chain-broken', color: 'red-mint', title: 'Down'},
        PORT_DOWN: {icon: 'fa fa-warning', color: 'dark', title: 'Port Error'},
        BLOCKED: {icon: 'fa fa-ban', color: 'yellow-lemon', title: 'Blocked'},
        LIVE: {icon: 'fa fa-link', color: 'green-jungle', title: 'Up'},//exchange, signal
        NO_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No STP'},
        NO_RECV: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No Data Received'},
        NO_RECV_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No STP Received'},
        NO_FLOOD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Not Flooding'},
        NO_FWD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Not Forwarding'},
        NO_PACKET_IN: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No Packet Received'},
        LINK_DOWN: {icon: 'fa fa-times', color: 'red', title: 'Link Down'},
        STP_LISTEN: {icon: 'fa fa-assistive-listening-systems', color: 'purple', title: 'STP Listen'},
        STP_LEARN: {icon: 'fa fa-book', color: 'purple', title: 'STP Learn'},
        STP_FORWARD: {icon: 'fa fa-share', color: 'purple', title: 'STP Forward'},
        STP_BLOCK: {icon: 'fa fa-ban', color: 'purple', title: 'STP Block'},
        STP_MASK: {icon: 'fa fa-asterisk', color: 'purple', title: 'STP Mask'},
      },
      'PATHSTATE': {
        INSTALL_REQ: {icon: 'fa fa-gift', color: 'blue-sharp', title: 'Install Request'},
        COMPILING: {icon: 'fa fa-cogs', color: 'yellow-lemon', title: 'Compiling'},
        INSTALLING: {icon: 'fa fa-wrench', color: 'yellow-gold', title: 'Installing'},
        INSTALLED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Installed'},
        RECOMPILING: {icon: 'fa fa-cog', color: 'yellow-saffron', title: 'Recompiling'},
        WITHDRAW_REQ: {icon: 'fa fa-eraser', color: 'grey-cascade', title: 'Withdraw Request'},
        WITHDRAWN: {icon: 'fa fa-trash', color: 'dark', title: 'Withdrawn'},
        FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-thunderbird', title: 'Failed'},
        CORRUPT: {icon: 'fa fa-bug', color: 'purple-plum', title: 'Corrupt'},
        PURGE_REQ: {icon: 'fa fa-recycle', color: 'yellow-soft', title: 'Purge Request'},
      },
      'TRANSPORTPROTOCOL': {
        TCP: {text_icon: 'TCP', color: 'blue-steel', title: 'Transmission Control Protocol'},
        UDP: {text_icon: 'UDP', color: 'yellow-gold', title: 'User Datagram Protocol'}
      },
      'RESERVEDPATH': {
        NONE: 'None',
        ACTIVE: {icon: 'fa fa-bookmark', color: 'blue-sharp', title: 'Reserve Path'},
        DEACTIVE: {icon: 'fa fa-bookmark-o', color: 'red-mint', title: 'Do Not Reserve Path'},
      },
      'DOMAINSTATUS': {
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
        'false': {icon: 'fa fa-check-circle', color: 'blue', title: 'Up'},
        EMERGENCY: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Emergency'},
        POWER_SAVER: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Power Saver'},
        UNKNOWN: {icon: 'fa fa-question', color: 'dark', title: 'Unknown', fontCode: '\uf128'}

      },
      'TEMPLATESTATUS': {
        APPLIED: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'APPLIED'},
        APPLIED_SYNC: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'APPLIED_SYNC'},
        APPLIED_NO_SYNC: {icon:'fa fa-check-circle', color: 'green-jungle', title: 'APPLIED_NO_SYNC'},
        IN_PROGRESS: {icon: 'fa fa-spinner fa-spin', color: 'yellow-gold', title: 'IN_PROGRESS'},
        IN_EXECUTION: {icon: 'fa fa-spinner fa-spin', color: 'yellow-gold', title: 'IN_EXECUTION'},
        EDIT_FAILED: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'EDIT_FAILED'},
        FAILED: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'FAILED'},
        REMOVING:{icon: 'fa fa-minus-circle', color: 'red-soft', title: 'REMOVING'}
      },
      "NTPSTATUS": {
        ACTIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'ACTIVE'},
        INACTIVE: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'INACTIVE'},
      },
      'IPSECSTATUS': {
        UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'UP'},
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'DOWN'},
        CONNECTING: {icon: 'fa fa-spinner fa-spin', color: 'yellow-gold', title: 'CONNECTING'}
      },

      'CLISTATUS': {
        false: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'UNINSTALLED'},
        true: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'INSTALLED'}
      },

      'NATSTATUS': {
        false: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'INACTIVE'},
        true: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'ACTIVE'}

      },


      'NTOPROUTE': {
        ACTIVE: 'Using NTOP',
        DEACTIVE: 'Inactive',
      },
      'PPPSTATUS': {
        NONE: {icon: 'fa fa-times', color: 'yellow', title: 'None'},
        ON_HOLD: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'On Hold'},
        ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
        FINISHED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Finished'}
      },
      'IPVERSIONTYPE': {
        IPV4: 'IPv4',
        IPV6: 'IPV6'
      },
      'NODETYPE': {
        CONTROLLER: 'ControllerSettings',
        API_CORE: 'API Core',
        ALARM_MANAGER: 'Alarm System',
        STATISTICS_MANAGER: 'Statistics System',
        NAS: 'NAS System',
        DHCP: 'DHCP System',
        EDR: 'EDR System',
        SDNIP: 'BGP Settings',
        NFV_ADAPTER: 'NFV Adapter',
        DHCP_CENTRAL_WAN: 'Central DHCP System',
        SFC: 'SFC System'
      },
      'CONFIGVALUETYPE': {
        STRING: 'String',
        BYTE: 'Byte',
        INTEGER: 'Int',
        LONG: 'Long',
        FLOAT: 'Float',
        DOUBLE: 'Double',
        BOOLEAN: 'Boolean'
      },
      'LINKTYPE': {
        'COPPER': 'Copper',
        'FIBER': 'Fiber',
        'PACKET': 'Packet',
        'ODUCLT': 'ODUCLT',
        'OCH': 'OCH',
        'OMS': 'OMS',
        'VIRTUAL': 'Virtual',
        'OTU': 'OTU',
        'SECURE': 'Secure'
      },
      'WANPORTTYPE': {
        FIBER: 'Fiber',
        COPPER: 'Copper',
        RADIO: 'Radio',
        ENCRYPTED: 'Encrypted'
      },
      'LINKSTATUS': {
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        BLOCKED: {icon: 'fa fa-ban', color: 'red-mint', title: 'Blocked'},
        LIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Live'},
        LEGACY: {icon: 'fa fa-tty', color: 'default', title: 'Legacy'},
        INDIRECT: {icon: 'fa fa-random', color: 'purple', title: 'Indirect'}
      },
      'WANPORTINFOSTATUS': {
        UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
        DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        DISABLED: {icon: 'fa fa-ban', color: 'red-mint', title: 'Blocked'}
      },
      'ROUTERTYPE': {
        'SPEAKER': {icon: 'fa fa-bullhorn', color: 'purple-sharp', title: 'Speaker'},
        'PEER': {icon: 'fa fa-comments', color: 'yellow-casablanca', title: 'Peer'},
        'ROUTE_REFLECTOR': {icon: 'fa fa-rss', color: 'green-sharp', title: 'Route Reflector'},
      },
      'SFCSTATUS': {
        'ACTIVE': {icon: 'fa fa-circle', color: 'font-green-meadow', title: 'Active'},
        'FAILED': {icon: 'fa fa-exclamation-triangle', color: 'font-yellow-gold', title: 'Failed'},
        'INACTIVE': {icon: 'fa fa-circle-o', color: 'font-red-sunglo', title: 'Inactive'}
      },
      'SURICATAINTERFACESTATUS': {
        '0': {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
        '1': {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
        START: {icon: 'fa fa-play', color: 'uppercase green-meadow', title: 'Start'},
        STOP: {icon: 'fa fa-stop', color: 'blue-madison', title: 'Stop'}

      },
    },
    'dialogs': {
      'types': {
        'info': {
          'title': 'Info',
          'icon': 'fa fa-info-circle',
          'color': 'font-blue-steel',
        },
        'success': {
          'title': 'Success',
          'icon': 'fa fa-check-circle',
          'color': 'font-green-meadow bold'
        },
        'warning': {
          'title': 'Warning',
          'icon': 'fa fa-exclamation-triangle',
          'color': 'font-yellow-gold bold'
        },
        'error': {
          'title': 'Error',
          'icon': 'fa fa-exclamation-circle',
          'color': 'font-red-sunglo bold'
        },
        'question': {
          'title': 'Question',
          'icon': 'fa fa-question-circle',
          'color': 'font-blue-steel'
        },
      },
      'actions': {
        'ok': {
          'title': 'Ok',
          'title_short': 'Ok',
          'icon': 'fa fa-check-circle',
          'color': 'uppercase green-meadow',
          'perm': '@ok'
        },
        'cancel': {
          'title': 'Cancel',
          'title_short': 'Cncl',
          'icon': 'fa fa-ban',
          'color': 'btn-outline lowercase red-sunglo',
          'perm': '@cancel'
        },
        'abort': {
          'title': 'Abort',
          'title_short': 'Abrt',
          'icon': 'fa fa-times-circle',
          'color': 'btn-outline lowercase yellow-gold',
          'perm': '@abort'
        },
        'yes': {
          'title': 'Yes',
          'title_short': 'Yes',
          'icon': 'fa fa-thumbs-up',
          'color': 'uppercase green-meadow',
          'perm': '@yes'
        },
        'no': {
          'title': 'No',
          'title_short': 'No',
          'icon': 'fa fa-thumbs-down',
          'color': 'uppercase yellow-gold',
          'perm': '@no'
        },
        'close': {
          'title': 'Close',
          'title_short': 'Cls',
          'icon': 'fa fa-times-circle',
          'color': 'btn-default',
          'perm': '@close'
        },
        'save': {
          'title': 'Save',
          'title_short': 'Save',
          'icon': 'fa fa-floppy-o',
          'color': 'uppercase green-meadow',
          'perm': '@save'
        },
        'change': {
          'title': 'Change',
          'title_short': 'Chng',
          'icon': 'fa fa-floppy-o',
          'color': 'uppercase yellow-gold',
          'perm': '@change'
        },
        'add': {
          'title': 'Add',
          'title_short': 'Add',
          'icon': 'fa fa-plus',
          'color': 'uppercase yellow-gold',
          'perm': '@save'
        },
        'send': {
          'title': 'Send',
          'title_short': 'send',
          'icon': 'fa fa-paper-plane',
          'color': 'uppercase green-meadow',
          'perm': '@ok'
        },
        'start': {
          'title': 'Start',
          'title_short': 'start',
          'icon': 'fa fa-play',
          'color': 'uppercase green-meadow',
          'perm': '@change'
        }
      }
    },
    'login': {
      'title': 'MAYA SD-WAN MANAGER',
      'info': 'Please login with your username and password.',
      'remember_me': 'Remember Me',
      'rememberme': {
        'label': 'Remember Me"',
        'label_icon': '<i class=\'fa fa-bars\'></i>',
        'placeholder': '',
        'help_line': '',
        'help_block': '',
      },
      'username': {
        'label': 'Username',
        'placeholder': 'Username...',
      },
      'password': {
        'label': 'Password',
        'placeholder': 'Password..',
      },
      'activeServerAddress': {
        'label': 'Active Server Address'
      },
      'serverAdress': {
        'label': 'Server Address',
        'placeholder': 'Server Address',
      },
      'forgot_password': 'Forgot Password?',
      'sign_in': 'Login',
    },
    'top_menu': {
      'dashboard': {
        'title': 'Monitoring',
        'icon': 'fa fa-share-alt',
        'perm': 'common:view',
        'topology': {
          'title': 'Site Map',
          'icon': 'fa fa-wrench fa-sub fa-sub-gavel',
          'perm': 'moduleNodeConfig:view',
        },
        'logs': {
          'title': 'System Logs',
          'icon': 'fa fa-share-alt',
          'perm': 'logAnalyzer:view'
        },
        'controller_management': {
          'controller_settings': {
            'title': 'Kontrolcü Ayarları',
            'icon': 'fa fa-wrench fa-sub fa-sub-gavel',
            'perm': 'moduleNodeConfig:view',
          },
        },
        'management': {
          'title': 'Dashboard',
          'icon': 'fa fa-server',
          'perm': 'common:view',
        },
      },
      'configuration': {
        'title': 'Configuration',
        'icon': 'fa fa-cloud',
        'perm': 'common:view',
        'controller': {
          'title': 'SD-WAN Controller',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'controller_tls': {
            'title': 'Controller Certificate',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
        },
        'cpe': {
          'title': 'Edge Device',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'cpe_device': {
            'title': 'CPE Definition',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
        },
        'group': {
          'title': 'Group',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'create_group': {
            'title': 'Group Description',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
        },
        'ztp': {
          'title': 'ZTP Server',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'setup_mail': {
            'title': 'Setup Mail',
            'perm': 'common:view'
          },
          'pending_device': {
            'title': 'Pending Device',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
          'registered_device': {
            'title': 'Registered Device',
            'icon': 'fa fa-plug',
            'perm': 'common:view'
          },
          'flavor': {
            'title': 'Flavors',
            'icon': 'fa fa-paint-brush',
            'perm': 'common:view'
          },
          'image': {
            'title': 'Images',
            'icon': 'fa fa-download',
            'perm': 'common:view',
          },
          'vnf': {
            'title': 'Virtual Functions',
            'icon': 'fa fa-mixcloud',
            'perm': 'common:view',
          },
          'device_export': {
            'title': 'Export Devices',
            'icon': 'fa fa-info-circle',
            'perm': 'common:view',
          },
        },
        'templates': {
          'title': 'Overlay Templates',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'create_tunnel': {
            'title': 'Overlay Tunnel',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
          'flow_sfc': {
            'title': 'SFC ',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
          'flow_action': {
            'title': 'Traffic Action',
            'icon': 'fab fa-artstation',
            'perm': 'common:view'
          },
          'enduser_app': {
            'title': 'User Application',
            'icon': 'fab fa-artstation',
            'perm': 'common:view'
          },
          'flow_template': {
            'title': 'Traffic Rule',
            'icon': 'fa fa-qrcode',
            'perm': 'common:view'
          },
          'cpe_type_definition': {
            'title': 'Device Type',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
          'dpdk_version': {
            'title': 'DPDK Version',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          },
          'multicast': {
            'title': 'Multicast',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view'
          }
        },
        'vnf': {
          'title': 'VNF',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'create_dhcp': {
            'title': 'Create DHCP Server',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'nfv': {
            'title': 'Network Functions',
            'icon': 'fa fa-empire',
            'perm': 'common:view',
          },
          'vnf_template': {
            'title': 'VNF Template',
            'icon': 'fa fa-empire',
            'perm': 'common:view',
          },
          'create_function_type': {
            'title': 'Function Type',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'create_function_definition': {
            'title': 'VNF Configuration',
            'icon': 'fa fa-connectdevelop',
            'perm': 'common:view',
          },
          'create_cpe_relation': {
            'title': 'Template Relation',
            'icon': 'fa fa-connectdevelop',
            'perm': 'common:view',
          },
          'vnf_bundleList_title': {
            'title': 'VNF Bundle List',
            'icon': 'fa fa-connectdevelop',
            'perm': 'common:view',
          },
          'vnf_cli_template': {
            'title': 'CLI Template',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'vnf_cli_variable_template': {
            'title': 'Template Variables',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          "vnf_template_objects": {
            "title": "Template Objects",
            "icon": "fa fa-share-alt-square",
            "perm": "common:view",
          },
          'image_template': {
            'title': 'Image Template',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'vnf_templates': {
            'title': 'VNF Templates',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
        },
        'alarm': {
          'title': 'Alarm & Event',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
        },
      },
      'vnf': {
        'dhcp': {
          'title': 'DHCP Server',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
        },
        'routing': {
          'title': 'Routing',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'general_route': {
            'title': 'Routing Table',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'static_route': {
            'title': 'Static Route',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'bgp': {
            'title': 'BGP',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'ospf': {
            'title': 'OSPF',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'route_policy': {
            'title': 'Route Policy',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'isis': {
            'title': 'Isis',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'route_map': {
            'title': 'Routemap Policy',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },

        },
        'nat': {
          'title': 'NAT',
          'icon': 'fa fa-sitemap',
          'perm': 'common:view',
          'sourcenat': {
            'title': 'Source NAT',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'onetoonenat': {
            'title': '1-to-1 NAT',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'destinationnat': {
            'title': 'Destination NAT',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          }

        },
        'vpn': {
          'title': 'VPN',
          'icon': 'fa fa-lock',
          'perm': 'common:view',
          'ipsec': {
            'title': 'IPSEC',
            'icon': 'fa fa-lock',
            'perm': 'common:view',
          },
          'gre_tunnel': {
            'title': 'GRE TUNNEL',
            'icon': 'fas fa-archway',
            'perm': 'common:view',
          },
          'ssl_vpn': {
            'title': 'SSL VPN',
            'icon': 'fas fa-archway',
            'perm': 'common:view',
          },
          'vpn_objects': {
            'title': 'VPN Objects',
            'icon': 'fa fa-shield',
            'perm': 'common:view',
          },
        },
        'interface': {
          'title': 'Interfaces',
          'icon': 'fa fa-window-restore',
          'perm': 'common:view',
          'interface_status': {
            'title': 'Interface Status',
            'icon': 'fa fa-window-restore',
            'perm': 'common:view',
          },
          'ifb_create': {
            'title': 'Ifb(Input Interface)',
            'icon': 'fa fa-window-restore',
            'perm': 'common:view',
          },
        },
        'firewall': {
          'title': 'Firewall ',
          'icon': 'fa fa-fire',
          'perm': 'common:view',
          'rules': {
            'title': 'Policy Rules',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'policy_objects': {
            'title': 'Policy Objects',
            'icon': 'fa fa-shield',
            'perm': 'common:view',
            'address_group': {
              'title': 'Policy Objects',
              'icon': 'fa fa-shield',
              'perm': 'common:view',
            },
            'network_group': {
              'title': 'Policy Objects',
              'icon': 'fa fa-shield',
              'perm': 'common:view',
            },
            'protocol_group': {
              'title': 'Policy Objects',
              'icon': 'fa fa-shield',
              'perm': 'common:view',
            },
            'zone': {
              'title': 'Policy Objects',
              'icon': 'fa fa-shield',
              'perm': 'common:view',
            },
          },
        },
        'dhcp_tabs': {
          'title': 'DHCP',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'dhcp_server': {
            'title': 'DHCP Server',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'dhcp_lease': {
            'title': 'DHCP Lease',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'dhcp_relay': {
            'title': 'DHCP Relay',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
        },
        'service': {
          'title': 'Service ',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'proxy_tabs': {
            'title': 'Proxy',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'wpad': {
            'title': 'Whitelist Settings',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'url_filtering': {
            'title': 'URL Filter Settings',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'rule_config': {
            'title': 'Rule Configuration',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'web_proxy': {
            'title': 'Web Proxy',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
        },
        'qos': {
          'title': 'QoS ',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'qos_tabs': {
            'title': 'Traffic Policy',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'round_robin': {
            'title': 'Round Robin',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'traffic_shaper': {
            'title': 'Traffic Shaper',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'rate_control': {
            'title': 'Rate Control',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'priority_queue': {
            'title': 'Priority Queue',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'limiter': {
            'title': 'Traffic Limiter',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },


        },
        'wanLb': {
          'title': 'Load Balancing ',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'wanLb_tabs': {
            'title': 'Load Balancing',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'interface_health': {
            'title': 'Interface Health',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'wanLb_rules': {
            'title': 'WANLB Rules',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },
          'lbOpt': {
            'title': 'LB Options',
            'icon': 'fa fa-cog',
            'perm': 'common:view',
          },


        },
        'flowAccounting':{
          'title': 'Flow Accounting ',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'accounting':{
            'title': 'Flow Accounting',
            'icon': 'fa fa-window-restore',
            'perm': 'common:view',

          }

        },
        'log_management': {
          'title': 'Log Management',
          'icon': 'fa fa-cog',
          'perm': 'common:view',
          'syslog': {
            'title': 'Syslog',
            'icon': 'fa fa-window-restore',
            'perm': 'common:view',
          },
        },
        'dpi_management': {
          'title': 'DPI Management',
          'icon': 'fa fa-random',
          'perm': 'common:view',
          'dpi_class': {
            'title': 'DPI Class',
            'icon': 'fa fa-random',
            'perm': 'common:view',
          },
          'dpi': {
            'title': 'DPI',
            'icon': 'fa fa-random',
            'perm': 'common:view',
          },
        },
        'ntp': {
          'title': 'NTP',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'ntp_pages': {
            'title': 'Server',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'ntp_objects': {
            'title': 'NTP Objects',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          // 'listen_address': {
          //   'title': 'Listen Address',
          //   'icon': 'fa fa-share-alt-square',
          //   'perm': 'common:view',
          // },
          // 'allowed_clients': {
          //   'title': 'Allowed Clients',
          //   'icon': 'fa fa-share-alt-square',
          //   'perm': 'common:view',
          // },

        },
        'snmp': {
          'title': 'SNMP',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'snmp': {
            'title': 'SNMP',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },

        },
        'ips/ids': {
          'title': 'IPS/IDS',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
          'ips/ids': {
            'title': 'Interface List',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'blocks': {
            'title': 'Blocks',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },
          'alerts': {
            'title': 'Alerts',
            'icon': 'fa fa-share-alt-square',
            'perm': 'common:view',
          },

        },
      },
      "setting": {
        'title': 'Settings',
        'icon': 'fa fa-share-alt',
        'perm': 'common:view',
        "ntp_settings": {
          "title": "NTP",
          "icon": "fa fa-share-alt-square",
          "perm": "common:view",
        },
      },
      'maintenance': {
        'title': 'Maintenance',
        'icon': 'fa fa-share-alt',
        'perm': 'common:view',
      },
      'events': {
        'title': 'Alarm & Events',
        'icon': 'fa fa-share-alt',
        'perm': 'common:view',
        'notifications': {
          'title': 'Alarm Notifications',
          'icon': 'fa fa-flag',
          'perm': 'common:view',
        },
        'alarm_settings': {
          'title': 'Alarm Settings',
          'icon': 'fa fa-wrench fa-sub fa-sub-bell',
          'perm': 'moduleNodeConfig:list'
        },
        'alarms': {
          'title': 'Alarm',
          'icon': 'fa fa-flag',
          'perm': 'common:view',
        },
        'alarm_events': {
          'title': 'Alarm Events',
          'icon': 'fa fa-wrench fa-sub fa-sub-bell',
          'perm': 'moduleNodeConfig:view'
        },
        'alarm_logs': {
          'title': 'Alarm Logs',
          'icon': 'fa fa-wrench fa-sub fa-sub-bell',
          'perm': 'moduleNodeConfig:view'
        },
        'alarm_sources': {
          'title': 'Alarm Sources',
          'icon': 'fa fa-wrench fa-sub fa-sub-bell',
          'perm': 'moduleNodeConfig:view'
        },
      },
      'users': {
        'title': 'Users & Roles',
        'icon': 'fa fa-share-alt',
        'perm': 'common:view',
        'create_user': {
          'title': 'Users',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
        },
        'role': {
          'title': 'Roles',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
        },
        'tenant': {
          'title': 'Tenants',
          'icon': 'fa fa-share-alt-square',
          'perm': 'common:view',
        },
      },
    },
    "perms": {
      "common": {
        "title": "General Perms.",
        "perms": {
          "view": "View Screen",
          "print": "Print",
          "copy": "Copy to Clipboard",
          "export_pdf": "Export PDF",
          "export_excel": "Export Excel",
          "refresh": "Refresh",
        }
      },
      "users": {
        "title": "User Management",
        "perms": {
          "list": "List Users",
          'view': "View User",
          'edit': "Edit User",
          'delete': "Delete User",
          'create': "Add User",
          'change_pwd': "Change User Password",
          'set_pwd': "Set Password",
          'lost_pwd': "Remind Password"
        }
      },
      "roles": {
        "title": "Role Management",
        "perms": {
          "list": "List Roles",
          'view': "View Role",
          'edit': "Edit Role",
          'delete': "Delete Role",
          'create': "Add Role"
        }
      },
      "cpe_function_type": {
        "title": "CPE Function Management",
        "perms": {
          "list": "List CPE Function",
          'view': "View CPE Function",
          'edit': "Edit CPE Function",
          'delete': "Delete CPE Function",
          'create': "Add CPE Function"
        }
      },
      "cpe_function_definition": {
        "title": "Vnf Configuration Management",
        "perms": {
          "list": "List Vnf Configuration",
          'view': "View Vnf Configuration",
          'edit': "Edit Vnf Configuration",
          'delete': "Delete Vnf Configuration",
          'create': "Add Vnf Configuration"
        }
      },
      "cpe_sfc_definition": {
        "title": "SFC Management",
        "perms": {
          "list": "List SFC",
          'view': "View SFC",
          'edit': "Edit SFC",
          'delete': "Delete SFC",
          'create': "Add SFC"
        }
      },
      "cpe_function": {
        "title": "VNF-CPE Relation Management",
        "perms": {
          "list": "List VNF",
          'view': "View VNF",
          'edit': "Edit VNF",
          'delete': "Delete VNF",
          'create': "Add VNF"
        }
      },
      "cpe_tunnel": {
        "title": "Overlay Tunnel Management",
        "perms": {
          "list": "List Overlay Tunnel",
          'view': "View Overlay Tunnel",
          'edit': "Edit Overlay Tunnel",
          'delete': "Delete Overlay Tunnel",
          'create': "Add Overlay Tunnel"
        }
      },
      "ztp": {
        "title": "ZTP Management",
        "perms": {
          "list": "List ZTP",
          'view': "View ZTP",
          'edit': "Edit ZTP",
          'delete': "Delete ZTP",
          'create': "Add ZTP"
        }
      },
      "cpe_type_definition": {
        "title": "CPE Type Management",
        "perms": {
          "list": "List CPE Type ",
          'view': "View CPE Type ",
          'edit': "Edit CPE Type ",
          'delete': "Delete CPE Type ",
          'create': "Add CPE Type "
        }
      },
      "cpe_device_description": {
        "title": "CPE Management",
        "perms": {
          "list": "List CPE",
          'view': "View CPE",
          'edit': "Edit CPE",
          'delete': "Delete CPE",
          'create': "Add CPE"
        }
      },
      "cpe_policy_action": {
        "title": "Traffic Policy Action Management",
        "perms": {
          "list": "List Policy Action",
          'view': "View Policy Action",
          'edit': "Edit Policy Action",
          'delete': "Delete Policy Action",
          'create': "Add Policy Action"
        }
      },
      "cpe_policy_template": {
        "title": "Policy Template Management",
        "perms": {
          "list": "List Policy Template",
          'view': "View Policy Template",
          'edit': "Edit Policy Template",
          'delete': "Delete Policy Template",
          'create': "Add Policy Template"
        }
      },
      "cpe_policy": {
        "title": "Network Policy Management",
        "perms": {
          "list": "List Policy",
          'view': "View Policy",
          'edit': "Edit Policy",
          'delete': "Delete Policy",
          'create': "Add Policy"
        }
      },
      "vyos": {
        "title": "VNF Management",
        "perms": {
          "list": "List VNF",
          'view': "View VNF",
          'edit': "Edit VNF",
          'delete': "Delete VNF",
          'create': "Add VNF"
        }
      },
      "bundle": {
        "title": "Group Management",
        "perms": {
          "list": "List Group",
          'view': "View Group",
          'edit': "Edit Group",
          'delete': "Delete Group",
          'create': "Add Group"
        }
      },
      "tenant": {
        "title": "Tenant Management",
        "perms": {
          "list": "List Tenant",
          'view': "View Tenant",
          'edit': "Edit Tenant",
          'delete': "Delete Tenant",
          'create': "Add Tenant"
        }
      },
      "prometheus": {
        "title": "Dashboard Management",
        "perms": {
          "list": "List Dashboard",
          'view': "View Dashboard",
          'edit': "Edit Dashboard",
          'delete': "Delete Dashboard",
          'create': "Add Dashboard"
        }
      },
      "loganalyzer": {
        "title": "Log Management",
        "perms": {
          "list": "List Log",
          'view': "View Log",
          'edit': "Edit Log",
          'delete': "Delete Log",
          'create': "Add Log"
        }
      },
      "cpe_vnf_temp_relation": {
        "title": "Vnf Template Relation Management",
        "perms": {
          "list": "List Vnf Template Relation",
          'view': "View Vnf Template Relation",
          'edit': "Edit Vnf Template Relation",
          'delete': "Delete Vnf Template Relation",
          'create': "Add Vnf Template Relation"
        }
      },
      "permissions": {
        "title": "Permission Man.",
        "perms": {
          "list": "List Permissions",
        }
      },
      "phy_topo": {
        "title": "Physical Topology Management",
        "perms": {
          'view': "View P. Topology",
          'edit': "Edit P. Topology",
          'manage': "Manage Networks",
        }
      },
      "vir_topo": {
        "title": "Virtual Topology Management",
        "perms": {
          "create": "Create V. Network",
          "delete": "Delete V. Network",
          "list": "List V. Networks",
          'view': "View V. Network",
          'edit': "Edit V. Network",
          'delete_request': "Request 'Delete V. Topology'",
          'delete_approve': "Approve 'Delete V. Topology'",
          'create_request': "Request 'Add V. Topology'",
          'create_approve': "Approve 'Add V. Topology'",
          'suspend': "Suspend V. Topology",
          'toggle_state': "Toggle V. Topo. State",
        }
      },
      "flows": {
        "title": "Flow Management",
        "perms": {
          "list": "List Flows",
          'view': "View Flow",
          'edit': "Edit Flow",
          'delete': "Delete Flow",
          'create': "Add Flow"
        }
      },
      "ports": {
        "title": "Port Management",
        "perms": {
          "list": "List Ports",
          'view': "View Port"
        }
      },
      "paths": {
        "title": "Reactive Path Management",
        "perms": {
          "list": "List Reactive Paths",
          'view': "View Reactive Path",
          'edit': "Edit Reactive Path",
          'delete': "Delete Reactive Path",
          'create': "Add Reactive Path",
          'validate': "Validate Reactive Path"
        }
      },
      "variable_declaration": {
        "title": "Template Variables Management",
        "perms": {
          "list": "List Variable CLI Template",
          'view': "View Variable CLI Template",
          'edit': "Edit Variable CLI Template",
          'delete': "Delete Variable CLI Template",
          'create': "Add Variable CLI Template",
        }
      },
      "vnf_temp_definition": {
        "title": "CLI Template Management",
        "perms": {
          "list": "List CLI Template",
          'view': "View CLI Template",
          'edit': "Edit CLI Template",
          'delete': "Delete CLI Template",
          'create': "Add CLI Template",
        }
      },
      "version": {
        "title": "Version Management",
        "perms": {
          "list": "List Versions",
        }
      },
      "log": {
        "title": "Log Management",
        "perms": {
          "list": "List Log Levels",
          'edit': "Edit Log Levels",
        }
      },
      "nacusers": {
        "title": "NAC User Management",
        "perms": {
          "list": "List End Users",
          'view': "View End User",
          'edit': "Edit End User",
          'delete': "Delete End User",
          'create': "Add End User",
          'change_pwd': "Change End User Password",
          'set_pwd': "Set End User Password",
          'lost_pwd': "Remind End User Password",
          'statistics': 'View End User statistics'
        }
      },
      "nacgroup": {
        "title": "NAC Group Management",
        "perms": {
          "list": "List NAC Groups",
          'view': "View NAC Groups",
          'edit': "Edit NAC Groups",
          'delete': "Delete NAC Groups",
          'create': "Add NAC Groups"
        }
      },
      "nac_devices": {
        "title": "NAC Device Management",
        "perms": {
          "list": "List Devices",
          'view': "View Device",
          'edit': "Edit Device",
          'delete': "Delete Device",
          'create': "Add Device"
        }
      },
      "nac_userdevices": {
        "title": "User Device Management",
        "perms": {
          "list": "List User Devices",
          'view': "View User Device",
          'edit': "Edit User Device",
          'delete': "Delete User Device",
          'create': "Add User Device"
        }
      },
      "nac_access_ports": {
        "title": "NAC Access Port Man.",
        "perms": {
          "list": "List Access Ports",
          'view': "View Access Port",
          'edit': "Edit Access Port",
          'delete': "Delete Access Port",
          'create': "Add Access Port"
        }
      },
      "switches": {
        "title": "Switch Management",
        "perms": {
          "list": "List Switches",
          'view': "View Switch",
          'edit': "Edit Switch",
          'delete': "Delete Switch",
          'create': "Add Switch"
        }
      },
      "links": {
        "title": "Link Management",
        "perms": {
          "list": "List Links",
          'view': "View Link",
          'edit': "Edit Link",
          'delete': "Delete Link",
          'create': "Add Link"
        }
      },
      "alarms": {
        "title": "Alarm Management",
        "perms": {
          "list": "List Alarms",
          'view': "View Alarm",
          'edit': "Edit Alarm",
        }
      },
      "ntp_settings": {
        "title": "NTP",
        "perms": {
          "list": "List NTP",
          "view": "View NTP",
          "edit": "Edit NTP",
          "delete": "Delete NTP",
          "create": "Add NTP"
        }
      },
      "alarm_logs": {
        "title": "Event Management",
        "perms": {
          "list": "List Events",
          'view': "View Event",
        }
      },
      "stats": {
        "title": "Stats Management",
        "perms": {
          "list_port_stats": "List Port Stats",
          "list_switch_stats": "List Switch Stats",
          "list_meter_stats": "List Meter Stats",
        }
      },
      "tsdb_metric": {
        "title": "Metric Management",
        "perms": {
          "list": "List Metrics",
          "list_defs": "List Definitions",
          "list_tags": "List Tags",
        }
      },
      "access_policy": {
        "title": "Access Policy Management",
        "perms": {
          "list": "List Access Policies",
          'view': "View Access Policy",
          'edit': "Edit Access Policy",
          'delete': "Delete Access Policy",
          'create': "Add Access Policy"
        }
      },
      "service_quality": {
        "title": "Service Policy Management",
        "perms": {
          "list": "List Service Policies",
          'view': "View Service Policy",
          'edit': "Edit Service Policy",
          'delete': "Delete Service Policy",
          'create': "Add Service Policy"
        }
      },
      "traffic_class": {
        "title": "Traffic Class Management",
        "perms": {
          "list": "List Traffic Classes",
          'view': "View Traffic Class",
          'edit': "Edit Traffic Class",
          'delete': "Delete Traffic Class",
          'create': "Add Traffic Class"
        }
      },
      "server": {
        "title": "AAA Server Management",
        "perms": {
          "list": "List AAA Servers",
          'view': "View AAA Server",
          'edit': "Edit AAA Server",
          'delete': "Delete AAA Server",
          'create': "Add AAA Server"
        }
      },
      "flow_stats": {
        "title": "Flow Stats Management",
        "perms": {
          "list": "List Flow Stats",
        }
      },
      "networkdevice": {
        "title": "Network Device",
        "perms": {
          "list": "List Network Device",
          "view": "View Network Device",
          "edit": "Edit Network Device",
          "delete": "Delete Network Device",
          "create": "Add Network Device"
        }
      },
      "vir_topo_req": {
        "title": "Virtual Topology Request",
        "perms": {
          "list": "List Virtual Topology Request",
          "view": "View Virtual Topology Request",
          "edit": "Edit Virtual Topology Request",
          "delete": "Delete Virtual Topology Request",
          "create": "Add Virtual Topology Request",
          "toggle_state": "Toggle State"
        }
      },
      "moduleNodeConfig": {
        "title": "Module Node Config",
        "perms": {
          "list": "List Module Node Config",
          "view": "View Module Node Config",
          "edit": "Edit Module Node Config",
          "delete": "Delete Module Node Config",
          "create": "Add Module Node Config"
        }
      },
      "configDefinition": {
        "title": "Config Definition",
        "perms": {
          "list": "List Config Definition",
          "view": "View Config Definition",
          "edit": "Edit Config Definition",
          "delete": "Delete Config Definition",
          "create": "Add Config Definition"
        }
      },
      "moduleNodes": {
        "title": "Module Nodes",
        "perms": {
          "list": "List Module Nodes",
          "view": "View Module Nodes",
          "edit": "Edit Module Nodes",
          "delete": "Delete Module Nodes",
          "create": "Add Module Nodes"
        }
      },
      "nacsession": {
        "title": "NAC Session",
        "perms": {
          "list": "List NAC Sessions",
          "view": "View NAC Sessions",
          "edit": "Edit NAC Sessions",
          "delete": "Delete NAC Sessions",
          "create": "Add NAC Sessions"
        }
      },
      "alarm_def": {
        "title": "Alarm Definition",
        "perms": {
          "list": "List Alarm Definition",
          "view": "View Alarm Definition",
          "edit": "Edit Alarm Definition",
          "delete": "Delete Alarm Definition",
          "create": "Add Alarm Definition"
        }
      },
      "alarm_notif_conf": {
        "title": "Alarm Notifications Configuration",
        "perms": {
          "list": "List Alarm Notifications Configuration",
          "view": "View Alarm Notifications Configuration",
          "edit": "Edit Alarm Notifications Configuration",
          "delete": "Delete Alarm Notifications Configuration",
          "create": "Add Alarm Notifications Configuration"
        }
      },
      "alarm_notif": {
        "title": "Alarm Notifications",
        "perms": {
          "list": "List Alarm Notifications",
          "view": "View Alarm Notifications",
          "edit": "Edit Alarm Notifications",
          "delete": "Delete Alarm Notifications",
          "create": "Add Alarm Notifications"
        }
      },
      "dhcp": {
        "title": "DHCP",
        "perms": {
          "list": "List DHCP",
          "view": "View DHCP",
          "edit": "Edit DHCP",
          "delete": "Delete DHCP",
          "create": "Add DHCP"
        }
      },
      "pro_path_policy": {
        "title": "Proactive Path Policy",
        "perms": {
          "list": "List Proactive Path Policy",
          "view": "View Proactive Path Policy",
          "edit": "Edit Proactive Path Policy",
          "delete": "Delete Proactive Path Policy",
          "create": "Add Proactive Path Policy",
          "get": "Get Proactive Path Policy",
          'search': "Search Proactive Path Policy",
        }
      },
      "overlay_policy": {
        "title": "Overlay Policy",
        "perms": {
          "list": "List Overlay Policy",
          "view": "View Overlay Policy",
          "edit": "Edit Overlay Policy",
          "delete": "Delete Overlay Policy",
          "create": "Add Overlay Policy"
        }
      },
      "nfva_nsd": {
        "title": "Network Service Descriptor",
        "perms": {
          "list": "List Network Service Descriptors",
          "view": "View Network Service Descriptor",
          "edit": "Edit Network Service Descriptor",
          "delete": "Delete Network Service Descriptor",
          "create": "Add Network Service Descriptor",
        }
      },
      "nfva_nsr": {
        "title": "Network Service Record",
        "perms": {
          "list": "List Network Service Records",
          "view": "View Network Service Record",
          "edit": "Edit Network Service Record",
          "delete": "Delete Network Service Record",
          "create": "Add Network Service Record",
        }
      },
      "nfva_vim": {
        "title": "Virtual Infrastructure Manager",
        "perms": {
          "list": "List Virtual Infrastructure Managers",
        }
      },
      "apps": {
        "title": "3. Party App Management",
        "perms": {
          "list": "List Apps",
          'view': "View App",
          'edit': "Edit App",
          'delete': "Delete App",
          'create': "Add App"
        }
      },
      "bgp": {
        "title": "BGP Management",
        "perms": {
          "list": "List BGPs",
          'view': "View BGP",
          'edit': "Edit BGP",
          'delete': "Delete BGP",
          'create': "Add BGP"
        }
      },
      "certificate": {
        "title": "Certificate Management",
        "perms": {
          "generate": "Generate Certificate"
        }
      },
      "edr": {
        "title": "EDR Management",
        "perms": {
          "view": "View EDR"
        }
      },
      "cluster": {
        "title": "Cluster Management",
        "perms": {
          "list": "List Clusters",
          'view': "View Cluster",
          'edit': "Edit Cluster",
          'delete': "Delete Cluster",
          'create': "Add Cluster"
        }
      },
      "controller": {
        "title": "Controller Management",
        "perms": {
          "list": "List Controllers",
          'view': "View Controller",
          'edit': "Edit Controller",
          'delete': "Delete Controller",
          'create': "Add Controller"
        }
      },
      "end_user_app": {
        "title": "User App Management",
        "perms": {
          "list": "List Apps",
          'view': "View App",
          'edit': "Edit App",
          'delete': "Delete App",
          'create': "Add App"
        }
      },
      "vnf_template": {
        "title": "Vnf Template Management",
        "perms": {
          "list": "List vnf template",
          'view': "View vnf template",
          'edit': "Edit vnf template",
          'delete': "Delete vnf template",
          'create': "Add vnf template"
        }
      },
      "vnf_temp_bundle": {
        "title": "Vnf Template Group Management",
        "perms": {
          "list": "List vnf template",
          'view': "View vnf template",
          'edit': "Edit vnf template",
          'delete': "Delete vnf template",
          'create': "Add vnf template"
        }
      },
      "vnf_temp_def_bundle": {
        "title": "Vnf-Group Definition Template Management",
        "perms": {
          "list": "List vnf template",
          'view': "View vnf template",
          'edit': "Edit vnf template",
          'delete': "Delete vnf template",
          'create': "Add vnf template"
        }
      },
      "group_vnf_temp_relation": {
        "title": "Vnf-Group Template Relation Management",
        "perms": {
          "list": "List vnf template",
          'view': "View vnf template",
          'edit': "Edit vnf template",
          'delete': "Delete vnf template",
          'create': "Add vnf template"
        }
      },
      "cpe_port_names": {
        "title": " Cpe Port Management",
        "perms": {
          "list": "List port",
        }
      },
      "cpe_network_names": {
        "title": " Cpe Network Names Management",
        "perms": {
          "list": "List network",
        }
      },
      "cpe_device_config": {
        "title": " Cpe Device Config Management",
        "perms": {
          "list": "List config",
        }
      },
      // "feature": {
      //   "title": "Controller Feature Management",
      //   "perms": {
      //     "list": "List Features",
      //     'view': "View Feature",
      //     'edit': "Edit Feature",
      //     'delete': "Delete Feature",
      //     'create': "Add Feature"
      //   }
      // },
      // "ip_loc": {
      //   "title": "IP Location Management",
      //   "perms": {
      //     "list": "List Locations",
      //     'view': "View Location",
      //     'edit': "Edit Location",
      //     'delete': "Delete Location",
      //     'create': "Add Location"
      //   }
      // },
      // "nfva_vnf": {
      //   "title": "Virtual Network Function Management",
      //   "perms": {
      //     "list": "List Virtual Network Functions",
      //     'view': "View Virtual Network Function",
      //     'edit': "Edit Virtual Network Function",
      //     'delete': "Delete Virtual Network Function",
      //     'create': "Add Virtual Network Function"
      //   }
      // },
      // "ovsdb": {
      //   "title": "OVSDB Management",
      //   "perms": {}
      // },
      // "ovsdb_controller": {
      //   "title": "OVSDB Management",
      //   "perms": {
      //     "get": "Get OVSDB Details",
      //     'get_desc': "Get OVSDB Description",
      //     'get_number': "Get OVSDB Number",
      //     'delete': "Delete OVSDB",
      //     'create': "Add OVSDB"
      //   }
      // },
      // "ovsdb_bridge": {
      //   "title": "OVSDB Management",
      //   "perms": {
      //     'add': "Add OVSDB Bridge"
      //   }
      // },
      "ports:list": {
        "title": "Port Management",
        "perms": {}
      },
      "proactivePathPolicy": {
        "title": "ProActive Path Policy Management",
        "perms": {}
      },
      "prognet_device": {
        "title": "Network Device Management",
        "perms": {
          "list": "List Devices",
          'view': "View Device",
          'edit': "Edit Device",
          'delete': "Delete Device",
          'create': "Add Device"
        }
      },
      "wanPortInfo": {
        "title": "WAN Link Management",
        "perms": {
          "list": "List WAN Links",
          'view': "View WAN Link",
          'edit': "Edit WAN Link",
          'delete': "Delete WAN Link",
          'create': "Add WAN Link"
        }
      },
      "dhcpcentralwan": {
        "title": "Central DHCP Management",
        "perms": {
          "list": "List Central DHCP Records",
          'view': "View Central DHCP",
          'edit': "Edit Central DHCP",
          'delete': "Delete Central DHCP",
          'create': "Add Central DHCP"
        }
      },
      "monitor": {
        "title": "Net Monitor Management",
        "perms": {
          'view': "View Monitor",
          'create': "Add Monitor"
        }
      },
      "sfc": {
        "title": "Service Function Chaining (SFC) Management",
        "perms": {
          "list": "List SFCs",
          'view': "View SFC",
          'get': "View SFC",
          'edit': "Edit SFC",
          'delete': "Delete SFC",
          'create': "Add SFC"
        }
      },
      "cpe": {
        "title": "CPE Management",
        "perms": {
          "list": "List SFCs",
          'view': "View SFC",
          'get': "View SFC",
          'edit': "Edit SFC",
          'delete': "Delete SFC",
          'create': "Add SFC"
        }
      },
      "sfcType": {
        "title": "SFC Types Management",
        "perms": {
          "list": "List SFC Types"
        }
      },
      "sfcVnfd": {
        "title": "SFC VNF Definition Management",
        "perms": {
          "list": "List SFC VNF Definitions"
        }
      },
      "sfcVnfr": {
        "title": "SFC Virtual Network Function Records Management",
        "perms": {
          "list": "List SFC Virtual Network Function Records",
          'view': "View SFC Virtual Network Function Record",
          'get': "View SFC Virtual Network Function Record",
          'edit': "Edit SFC Virtual Network Function Record",
          'delete': "Delete SFC Virtual Network Function Record",
          'create': "Add SFC Virtual Network Function Record"
        }
      },
      "wan_alarm": {
        "title": "WAN Alarm Management",
        "perms": {
          "view": "View WAN Alarms"
        }
      },
      "wanDomainInfo": {
        "title": "WAN Domain Management",
        "perms": {
          "list": "List WAN Domains",
          'view': "View WAN Domain",
          'edit': "Edit WAN Domain",
          'delete': "Delete WAN Domain",
          'create': "Add WAN Domain"
        }
      },
      "wanMvtn": {
        "title": "WAN Virtual Network Management",
        "perms": {}
      },
      "wan_mvtn": {
        "title": "WAN Virtual Network Management",
        "perms": {
          "list": "List WAN Virtual Networks",
          'view': "View WAN Virtual Network",
          'edit': "Edit WAN Virtual Network",
          'delete': "Delete WAN Virtual Network",
          'create': "Add WAN Virtual Network"
        }
      },
      "emergency_pol": {
        "title": "Emergency Policy Management",
        "perms": {
          "list": "List Emergency Policies",
          'view': "View Emergency Policy",
          'edit': "Edit Emergency Policy",
          'delete': "Delete Emergency Policy",
          'create': "Add Emergency Policy",
          'start_stop_vnf': "Start/Stop VNF"
        }
      },
      "spr_topo": {
        "title": "Central Topology Management",
        "perms": {
          'view': "View Central Topology",
        }
      },
      "enable_discovery": {
        "title": "Enable Discovery",
        "perms": {
          'view': "Enable Discovery",
        }
      }
    },
    "user_management": {
      "title": "User Management",
      "icon": "fa fa-user",
      "perm": "common:view",
      "roles": {
        "list": {
          "title": "Roles",
          "icon": "fa fa-shield",
          "basePerm": "roles",
          "perm": "#list",
          "actions": {
            "create_role": {
              "title": "Add Role",
              "title_short": "New",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create"
            },
            "view_role": {
              "title": "Role Details",
              "title_short": "Details",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view"
            },
            "edit_role": {
              "title": "Edit Role",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit"
            },
            "delete_role": {
              "title": "Delete Role",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            }
          },
          "fields": {
            "status": "Status",
            "name": "Role Name",
            "securityLevel": "Security Level",
            "created": "Created",
            "modified": "Modified"
          },
          "messages": {
            "delete_confirm": "Do you want to delete '{{dto.name}}' role?",
            "delete_success": "'{{dto.name}}' role is succesfully deleted!"
          }
        },
        "edit": {
          "basePerm": "roles",
          "modes": {
            "edit": {
              "title": "Edit Role",
              "icon": "fa fa-pencil",
              "perm": "#edit",
            },
            "create": {
              "title": "Add Role",
              "icon": "fa fa-plus",
              "perm": "#create",
            }
          },
          "actions": {
            "create_role": {
              "title": "Add Role",
              "title_short": "Add",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create"
            },
            "view_role": {
              "title": "Role Details",
              "title_short": "Details",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view"
            },
            "edit_role": {
              "title": "Edit Role",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit"
            },
            "delete_role": {
              "title": "Delete Role",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            }
          },
          "fields": {
            "status": {
              "label": "Role Status",
              "placeholder": "--select--",
              "help_line": "",
              "help_block": "",
            },
            "name": {
              "label": "Role Name",
              "placeholder": "Enter role name...",
              "help_line": "Please enter a unique username with at least 5 characters.",
              "help_block": "Please enter a unique username with at least 5 characters.",
            },
            "notes": {
              "label": "Notes",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "securityLevel": {
              "label": "Security Level",
              "placeholder": "--select--",
              "help_line": "",
              "help_block": "",
            },
            "created": {
              "label": "Created Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "modified": {
              "label": "Modified Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "permList": {
              "label": "Permissions",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
              "selectableHeader": "Available Perm.",
              "selectionHeader": "Assigned Perm.",
            },
            'save':{
              "label":"SAVE"
            },
          },
          "messages": {
            "save_success": "'{{dto.name}}' role is successfully updated.",
            "create_success": "'{{dto.name}}' role is succesfully created.",
          },
          "labels": {
            "permissions": "All Permissions"
          }
        },
        "create": {
          "title": "Add Role",
          "icon": "fa fa-plus",
          "basePerm": "roles",
          "perm": "#create",
        }
      },
      "users": {
        "list": {
          "title": "Users",
          "icon": "fa fa-user",
          "basePerm": "users",
          "perm": "#list",
          "actions": {
            "create_user": {
              "title": "Add User",
              "title_short": "New",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create",
            },
            "view_user": {
              "title": "User Details",
              "title_short": "Details",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            "edit_user": {
              "title": "Edit User",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit",
            },
            "delete_user": {
              "title": "Delete User",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete",
            },
            "set_pwd": {
              "title": "Set Password",
              "title_short": "Set Pwd",
              "icon": "fa fa-key",
              "color": "yellow-gold",
              "perm": "#set_pwd", //page handles the permission check
            },
            "set_username": {
              "title": "Edit Username",
              "title_short": "Edit Username",
              "icon": "fa fa-user",
              "color": "default",
              "perm": "#create",
            },
            "reports": {
              "title": "Call Reports",
              "title_short": "Reports",
              "icon": "fa-file-text",
              "color": "blue-steel",
              "perm": "#view"
            }
          },
          "fields": {
            "status": "Status",
            "username": "User Name",
            "name": "Name",
            "surname": "Surname",
            "email": "E-mail",
            "created": "Created",
            "modified": "Modified",
            "lastAccessed": "L. Access",
            "tcNo": "ID Number",
            "accessDateStart": "First Accessibility Date",
            "accessDateEnd": "Last Accessibility Date",
            "userType": "User Type",
            "AccessGroup": "Access Group",
            "byodGroup": "BYOD Group",
            "tenantName": "Tenant Name",
            "tenantType": "Tenant Type"
          },
          "messages": {
            "delete_confirm": "Do you want to delete user '{{dto.username}}'?",
            "delete_success": "User '{{dto.username}}' is succesfully deleted!",
            "delete_self_not_allowed": "You cannot delete your own user!"
          }
        },
        "edit": {
          "basePerm": "users",
          "perm": "#list",
          "help_page": "http://www.google.com",
          "modes": {
            "edit": {
              "title": "Edit User",
              "icon": "fa fa-pencil",
              "perm": "#edit",
            },
            "create": {
              "title": "Add User",
              "icon": "fa fa-plus",
              "perm": "#create",
            }
          },
          "actions": {},
          "fields": {
            "status": {
              "label": "Account Status",
              "placeholder": "--select--",
              "help_line": "",
              "help_block": "",
            },
            "username": {
              "label": "User Name",
              "placeholder": "Enter username...",
              "help_line": "Please enter a unique username with at least 5 characters.",
              "help_block": "",
            },
            "password": {
              "label": "Password",
              "placeholder": "Enter password...",
              "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
              "help_block": "",
            },
            "passwordRetype": {
              "label": "Password (Retype)",
              "placeholder": "Retype password...",
              "help_line": "Please enter the password once more for security purposes.",
              "help_block": "",
            },
            "name": {
              "label": "Name",
              "placeholder": "Enter name...",
              "help_line": "",
              "help_block": "",
            },
            "surname": {
              "label": "Surname",
              "placeholder": "Enter surname...",
              "help_line": "",
              "help_block": "",
            },
            "email": {
              "label": "E-mail Address",
              "placeholder": "Please enter an e-mail address.",
              "help_line": "",
              "help_block": "",
            },
            "notes": {
              "label": "Notes",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "securityLevel": {
              "label": "Security Level",
              "placeholder": "--select--",
              "help_line": "",
              "help_block": "",
            },
            "created": {
              "label": "Created Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "modified": {
              "label": "Modified Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "lastAccessed": {
              "label": "Last Access Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "roleList": {
              "label": "Roles",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
              "selectableHeader": "Available Roles",
              "selectionHeader": "Assigned Roles",
            },
            "tcNo": {
              "label": "ID No",
              "placeholder": "Enter Id No",
              "help_line": "",
              "help_block": "",
            },
            "accessDateStart": {
              "label": "First Accessibility Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "accessDateEnd": {
              "label": "Last Accessibility Date",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "userType": {
              "label": "User Type",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "nacGroup": {
              "label": "Access Group",
              "placeholder": "Select Access Group",
              "help_line": "",
              "help_block": "",
            },
            "tenantName": {
              "label": "Tenant Name",
              "placeholder": "Select Tenant Name",
            },
            "tenantType": {
              "label": "User Type",
              "placeholder": "Select Usert Type",
            },
            "byodGroup": {
              "label": "Auto BYOD Access Group",
              "placeholder": "Select Auto BYOD Access Group",
              "help_line": "",
              "help_block": "",
            },
            "thirdparty": {
              "label": "3th Party App"
            },
            "save": {
              "label": "SAVE"
            },
            "cancel": {
              "label": "Cancel"
            }
          },
          "messages": {
            "save_success": "User '{{dto.username}}' is succesfully updated.",
            "create_success": "User '{{dto.username}}' is succesfully created.",
            "unmatched_passwords": "Passwords must match",
            "change_username": "'{{dto.username}}' is succesfully updated."
          },
          "labels": {
            "accessDateSettings": "Set Access Time",
            "personalDevices": "Personnal Devices"
          }
        },
        "create": {
          "title": "Add User",
          "icon": "fa fa-plus",
          "basePerm": "users",
          "perm": "#create",
        },
        "change_pwd": {
          "title": "Users",
          "icon": "fa fa-user",
          "basePerm": "users",
          "perm": "#change_pwd",
          "actions": {},
          "fields": {
            "currentPassword": {
              "label": "Current Password",
              "placeholder": "Please enter your current password...",
              "help_line": "",
              "help_block": "",
            },
            "newPassword": {
              "label": "New Password",
              "placeholder": "Please enter your new password...",
              "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
              "help_block": "",
            },
            "newPasswordRetype": {
              "label": "New Password (Retype)",
              "placeholder": "Please re-enter your new password...",
              "help_line": "Please enter the password once more for security purposes.",
              "help_block": "",
            },
            "save": {
              "label": "SAVE",
            },
            "cancel": {
              "label": "Cancel",
            },

          },
          "messages": {
            "change_success": "Your password has been succesfully updated.",
            "passwords_mismatch": "Your new passwords mismatch. Please re-enter your new password.",
          },
          "labels": {}
        },
        "set_pwd": {
          "title": "Users",
          "icon": "fa fa-user",
          "basePerm": "users",
          "perm": "#set_pwd",
          "actions": {},
          "fields": {
            "username": {
              "label": "User Name",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "newPassword": {
              "label": "New Password",
              "placeholder": "Enter new password...",
              "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
              "help_block": "",
            },
            "newPasswordRetype": {
              "label": "New Password (Retype)",
              "placeholder": "Re-enter password.",
              "help_line": "Please re-enter password again for security purposes.",
              "help_block": "",
            },
            "save": {
              "label": "SAVE",
            },
            "cancel": {
              "label": "Cancel",
            },
          },
          "messages": {
            "change_success": "Password of user '{{dto.username}}' is succesfully updated.",
            "passwords_mismatch": "Password do not match, please re-enter again.",
          },
          "labels": {}
        },
      },
      "user_logs": {
        "title": "Query User Activities",
        "icon": "fa fa-list-alt",
        "perm": "common:view",
        "query_criteria": "Query Criteria",
        "query": "Query",
        "list": {
          "title": "Query User Activities",
          "icon": "fa fa-list-alt",
          "basePerm": "alarm_logs",
          "perm": "#list",
          "actions": {
            "view": {
              "title": "Details",
              "title_short": "Detail",
              "icon": "fa fa-info-circle",
              "color": "default",
              "perm": "#view"
            }
          },
          "fields": {
            "status": "Status",
            "severity": "Severity",
            "name": "Name",
            "surname": "Surname",
            "source": "Module",
            "resource": "Unit",
            "time": "Date",
            "ip": "IP",
            "description": "Description",
            "type": "Type",
            "alarmStatus": "User Status",
            "sourceHost": "Source Host",
            "sourceInstance": "Source Instance",
            "vtnName": "Virtual Name",
            "srcIP": "Source",
            "dstIP": "Target",
            "device": "Device",
            "user": "User",
            "begin_time": "Begin Time",
            "end_time": "End Time",
            "bytes": "Bytes",
            "life": "Life",
            "packets": "Packets",
            "rate": "Rate",
            "protocol": "Protocol"
          },
          "messages": {
            "select_item": "Lütfen detaylar için listeden bir günlük kaydı seçiniz. ",
            "no_user": "User could not be found",
            "no_ip": "IP could not be found.",
            "select_user": "Please select a user",
            "write_ip": "Please enter an IP",
            "no_data": "Couldn't find any logs for this user",
            "select_date": "Please select a date"
          },
          "labels": {
            "all": "Hepsi"
          }
        },
        "details": {
          "title": "'{{dto.name}}' Details",
          "title_no_selection": "Details",
          "icon": "fa fa-list-alt",
          "basePerm": "alarm_logs",
          "perm": "#view",
          "actions": {},
          "fields": {
            "status": "Status",
            "severity": "Severity",
            "name": "Name",
            "source": "Module",
            "resource": "Unit",
            "time": "Date",
            "description": "Description",
            "type": "Type",
            "alarmStatus": "User Status",
            "sourceHost": "Source Host",
            "sourceInstance": "Source Instance",
            "srcIP": "Source",
            "dstIP": "Target",
            "device": "Device",
            "vtnName": "Virtual Name"
          },
          "messages": {},
        },
      },
      "third_party": {
        "list": {
          "title": "3. Party Applications",
          "icon": "fa fa-puzzle-piece",
          "basePerm": "apps",
          "perm": "#list",
          "actions": {
            "create": {
              "title": "Add Application",
              "title_short": "Add",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create",
            },
            "view": {
              "title": "Application Details",
              "title_short": "Detail",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            "edit": {
              "title": "Edit Application",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit",
            },
            "delete": {
              "title": "Delete Application",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete",
            },
            "reports": {
              "title": "Call Reports",
              "title_short": "Reports",
              "icon": "fa-file-text",
              "color": "blue-steel",
              "perm": "tsdb_metric:list"
            }
          },
          "fields": {
            "status": "Status",
            "name": "Name",
            "roleList": "Roles",
            "userCount": "User Count",
            "call_count": "Call Count (Denied/Allowed)"
          },
          "messages": {
            "delete_confirm": "Do you want to delete '{{dto.name}}' application?",
            "delete_success": "Application '{{dto.name}}' successfully deleted!",
          }
        },
        "edit": {
          "basePerm": "apps",
          "modes": {
            "edit": {
              "title": "Edit Application",
              "icon": "fa fa-pencil",
              "perm": "#edit",
            },
            "create": {
              "title": "Add Application",
              "icon": "fa fa-plus",
              "perm": "#create",
            }
          },
          "fields": {
            "status": "Status",
            "name": "Applicaiton Name",
            "authorizedRoles": "Authorized Roles",
            "maxUserCount": "Max User Count",
            "maxPolicyPriority": "Max. Policy Priority",
            "select": "Select",
            "roles": "Roles",
            "type": "Type",
            "editable": "Editable",
            "noneditable": "Not Editable",
            "active": "Active",
            "passive": "Passive"
          },
          "messages": {
            "save_success": "Applicaiton '{{dto.name}}' is updated successfully",
            "create_success": "Applicaiton '{{dto.name}}' is created successfully",
          }
        },
        "call_reports": {
          "title": "Call Reports",
          "basePerm": "tsdb_metric",
          "perm": "#list",
          "icon": "fa fa-pencil",
          "fields": {
            "method": "API Method",
            "allowed": "Allowed",
            "denied": "Denied",
            "call_reports": "Call Reports"
          },
          "messages": {
            "save_success": "Applicaiton '{{dto.name}}' is updated successfully",
            "create_success": "Applicaiton '{{dto.name}}' is created successfully",
          }
        }
      },
    },
    "controller_management": {
      "title": "Controller Management",
      "req_title": "Controller Management",
      "icon": "fa fa-gavel",
      "basePerm": "cluster",
      "perm": "#view",
      "controllerSettings": {
        "title": "Controller Settings",
        "clusterTree": {
          "title": "Controller Clusters",
          "basePerm": "cluster",
          "perm": "#view",
          "parameters": "Parameters",
          "tasks": "Tasks",
          "switches": "Switches",
          "passiveController": "(Passive)"
        },
        "controllerList": {
          "title": "Network Cluster Controllers",
          "icon": "fa fa-sitemap",
          "basePerm": "cluster",
          "perm": "#view",
          "actions": {
            "tls": {
              "title": "Create TLS Certificate",
              "title_short": "Create Certificate",
              "icon": "fa fa-download",
              "color": "blue-madison",
              "perm": "#view"
            },
            "edit": {
              "title": "Edit Controller",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit"
            },
            "parameters": {
              "title": "Parameters",
              "title_short": "Parameters",
              "icon": "fa fa-sliders",
              "color": "yellow-casablanca",
              "perm": "#view"
            },
            "tasks": {
              "title": "Tasks",
              "title_short": "Tasks",
              "icon": "fa fa-tasks",
              "color": "blue-hoki",
              "perm": "#view"
            },
            "switches": {
              "title": "Switches",
              "title_short": "Switch",
              "icon": "fa fa-exchange",
              "color": "red-sunglo",
              "perm": "#view"
            }
          },
          "fields": {
            "status": "Status",
            "controllerName": "Controller Name",
            "nm": "Linked NM",
            "ip": "IP Address",
            "port": "Port",
            "ofVersion": "OF Version"
          }
        },
        "tls": {
          "title": "Controller Certificate",
          "icon": "fa fa-download",
          "basePerm": "certificate",
          "perm": "#generate",
          "fields": {
            "name": {
              "label": "Controller Name",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "nodeType": {
              "label": "Node Type",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "mac": {
              "label": "MAC Address",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
            "ip": {
              "label": "IP Address",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            }
          }
        },
        "controller": {
          "icon": "fa fa-gavel",
          "title": "Controller Details",
          "basePerm": "cluster",
          "perm": "#view",
          "fields": {
            "id": "Controller ID",
            "clusterId": "Cluster ID",
            "name": "Controller Name",
            "ip": "IP Address",
            "port": "Port",
            "location": "Location",
            "ofVersion": "OF Version",
            "edit": "Edit",
            "parameters": "Parameters",
            "tasks": "Tasks",
            "switches": "Switches",
            "settings": "Settings"
          }
        },
        "controllerEdit": {
          "title": "Network Cluster Controllers",
          "icon": "fa fa-users",
          "basePerm": "cluster",
          "modes": {
            "edit": {
              "title": "Edit Controller",
              "icon": "fa fa-pencil",
              "perm": "#view",
            },
            "create": {
              "title": "Add Controller",
              "icon": "fa fa-plus",
              "perm": "#view",
            }
          },
          "fields": {
            "name": "Controller Name",
            "ip": "IP Address",
            "port": "Port",
            "location": "Location",
            "edit": "Edit",
            "parameters": "Parameters",
            "tasks": "Tasks",
            "switches": "Switches"
          },
          "messages": {
            "save_success": "'{{dto.name}}' isimli kontrolcü başarıyla güncellenmiştir.",
            "create_success": "'{{dto.name}}' isimli kontrolcü başarıyla oluşturulmuştur.",
          }
        },
        "parameters": {
          "title": "Parameters",
          "icon": "fa fa-sliders",
          "basePerm": "cluster",
          "perm": "#view",
          "actions": {
            "edit": {
              "title": "Edit Parameter",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit"
            },
          },
          "fields": {
            "componentName": "Component Name",
            "configKey": "Config Key",
            "nodeVersion": "Version",
            "configValue": "Config Value",
          }
        },
        "tasks": {
          "title": "Tasks",
          "icon": "fa fa-tasks",
          "basePerm": "cluster",
          "perm": "#view",
          "fields": {
            "workStatus": "Work Status",
            "actionStatus": "Action Status",
            "name": "Task Name",
            "version": "Version",
            "startTime": "Start Time"
          },
          "messages": {
            "save_success": "The task '{{dto.name}}' successfully updated."
          }
        },
        "switches": {
          "title": "Switches",
          "icon": "fa fa-exchange",
          "basePerm": "cluster",
          "perm": "#view",
          "actions": {
            "edit": {
              "title": "Edit Switch",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#view"
            },
            "link": {
              "title": "Assign the switch",
              "title_short": "Assign",
              "icon": "fa fa-link",
              "color": "blue-madison",
              "perm": "#view"
            },
            "unlink": {
              "title": "Unassign the switch",
              "title_short": "Unassign",
              "icon": "fa fa-unlink",
              "color": "red-flamingo",
              "perm": "#view"
            }
          },
          "fields": {
            "status": "Status",
            "type": "Type",
            "name": "Controller Name",
            "controller": "Controller",
            "mac": "MAC Address"
          },
          "messages": {
            "unlink_confirm": "Do you want to unassign the switch from controller '{{dto.name}}'?",
            "unlink_success": "The switch successfully unassigned from the controller '{{dto.name}}'!"
          },
          "link": {
            "basePerm": "cluster",
            "modes": {
              "edit": {
                "title": "Assign Controller",
                "icon": "fa fa-plus",
                "perm": "#view",
              },
            },
            "fields": {
              "name": "Controller Name",
              "switches": "Switch"
            },
            "messages": {
              "link_success": "The switch successfully assigned to the controller '{{dto.name}}'."
            }
          }
        }
      },
    },
    'tenant': {
      'title': 'Tenant',
      'icon': 'fa fa-bell',
      'perm': 'common:view',
      "basePerm": "tenant",
      'list': {
        'title': 'Tenant',
        'icon': 'fa fa-bell',
        'basePerm': 'tenant', //todo change perm
        'perm': '#list',
        'actions': {
          'create': {
            'title': 'New Create Tenant',
            'title_short': 'New',
            'icon': 'fa fa-plus-circle',
            'color': 'blue-madison',
            'perm': '#create',
          },
          'edit': {
            'title': 'Edit Tenant Definition',
            'title_short': 'Edit',
            'icon': 'fa fa-pencil',
            'color': 'green-meadow',
            'perm': '#edit'
          },
          'delete': {
            'title': 'Delete Tenant',
            'title_short': 'Delete      ',
            'icon': 'fa fa-trash-o',
            'color': 'btn-outline uppercase red-sunglo',
            'perm': '#delete'
          }
        },
        'fields': {
          'tenantName': 'Name',
          'tenantDomain': 'Domain',
          'tenantType': 'Type',
          'tunnelStartId': 'Tunnel ID Range Start',
          'tunnelEndId': 'Tunnel ID Range End',
          'tenantDescription': 'Description',
        },
        'messages': {
          'delete_confirm': 'Do you want to delete selected  \'{{dto.tenantName}}\'?',
          'delete_success': 'Selected \'{{dto.tenantName}}\' is succesfully deleted!',
          'delete_warning': 'Administrator is cannot be deleted ',

        },
      },
      'create': {},
      'edit': {
        'basePerm': 'tenant',//todo change perm
        'modes': {
          'edit': {
            'title': 'Edit Tenant',
            'icon': 'fa fa-pencil',
            'perm': '#edit',
          },
          'create': {
            'title': 'Create Tenant',
            'icon': 'fa fa-plus',
            'perm': '#create',
          },
        },
        'actions': {
          'create': {
            'title': '',
            'title_short': 'New',
            'icon': 'fa fa-plus-circle',
            'color': 'blue-madison',
            'perm': '#create',
          },
          'view': {
            'title': '',
            'title_short': 'Detail',
            'icon': 'fa fa-eye',
            'color': 'default',
            'perm': '#view'
          },
          'delete': {
            'title': '',
            'title_short': 'Delete',
            'icon': 'fa fa-trash-o',
            'color': 'btn-outline uppercase red-sunglo',
            'perm': '#delete'
          }
        },
        'fields': {
          'tenantName': {
            'label': 'Name',
            'placeholder': 'Please enter tenant name...',
          },
          'tenantDomain': {
            'label': 'Domain',
            'placeholder': 'Please enter tenant domain...',
          },
          'tenantType': {
            'label': 'Type',
            'placeholder': 'Please enter tenant type...',
          },
          'tenantConfigs': {
            'label': 'Configs',
            'placeholder': 'Please enter tenant configs...',
          },
          'overlayTunnelSegmentStart': {
            'label': 'Overlay Segment Start',
            'placeholder': '',

          },
          'overlayTunnelSegmentEnd': {
            'label': 'Overlay Segment End',
            'placeholder': '',
          },
          'tenantDescription': {
            'label': 'Description',
            'placeholder': '',
          },
          'tenantLogo': {
            'label': 'Logo',
            'placeholder': '',
          },
          'save':{
            'label':'Save'
          }
        },
        'messages': {
          'save_success': '\'{{dto.tenantName}}\' tenant is successfully updated.',
          'create_success': '\'{{dto.tenantName}}\' tenant is successfully created.',
        },
      },
    },
    "ntp_settings": {
      "title": "NTP",
      "icon": "fa fa-list-alt",
      "basePerm": "prognet_nm_ntp_settings",
      "perm": "common:view",
      "actions": {
        "view": {
          "title": "Details",
          "title_short": "Details",
          "icon": "fa fa-info-circle",
          "color": "default",
          "perm": "#view"
        },
      },
      "fields": {
        "system": "System",
        "time_zone": "Time Zone",
        "ntp_server": "NTP Server1",
        "ntp_server2": "NTP Server2",
        "controller_ip": "Controller NTP IP",
        "ntp_help_line": "Drag and drop to change order",
        "devices": "Devices",
        "gw_settings": "GW Settings",
        "cpe_settings": "CPE Settings",
      },
      "messages": {
        "save_ntp": "Do you want to assign ntp settings to all devices?"

      },
      "labels": {
        "all": "All"
      },
      "edit": {
        "basePerm": "prognet_nm_ntp_settings",
        "modes": {
          "edit": {
            "title": "Edit NTP",
            "icon": "fa fa-pencil",
            "perm": "#edit",
          },
          "create": {
            "title": "Add NTP",
            "icon": "fa fa-plus",
            "perm": "#create",
          },
        },
        "actions": {
          "create": {
            "title": "",
            "title_short": "Ekle",
            "icon": "fa fa-plus-circle",
            "color": "blue-madison",
            "perm": "#create",
          },
          "view": {
            "title": "",
            "title_short": "Detay",
            "icon": "fa fa-eye",
            "color": "default",
            "perm": "#view"
          },
          "delete": {
            "title": "",
            "title_short": "Sil",
            "icon": "fa fa-trash-o",
            "color": "btn-outline uppercase red-sunglo",
            "perm": "#delete"
          }
        },


        "fields": {
          "system": {
            "label": "System",


          },
          "time_zone": {
            "label": "Time Zone",
            "placeholder": "Please enter Time Zone",
          },
          "ntp_server": {
            "label": "NTP Server1",
            "placeholder": "Please enter valid ip",
          },
          "controller_ip": {
            "label": "Controller NTP IP",
            "placeholder": "Please enter valid ip",
          },
          "ntp_help_line": {
            "label": "Drag and drop to change order",
            "placeholder": "Drag and drop to change order",
          },
          "select": {
            "label": "select",
            "placeholder": "Please put in order",
          },
          "save": {
            "label": "Save",
            "placeholder": "",
            "help_line": "",
            "help_block": "",
          },

          "back": {
            "label": "Back",
            "placeholder": "",
            "help_line": "",
            "help_block": "",
          },

        },
        "messages": {
          "save_success": "'{{dto.name}}' is successfully saved.",
          "create_success": "'{{dto.name}}' is successfully created",
          "delete_confirm": "Do you want to delete selected criteria ?",
          "delete_message": "Do you want to delete '{{dto}}'?",
        },

      },

    },
    "ntp_settings_show_status": {
      "title": "NTP",
      "icon": "fa fa-list-alt",
      "basePerm": "prognet_nm_ntp_settings",
      "perm": "common:view",
      "actions": {
        "view": {
          "title": "Details",
          "title_short": "Details",
          "icon": "fa fa-info-circle",
          "color": "default",
          "perm": "#view"
        },
        "reinstall_ntp_status_list": {
          "title": "Reinstall",
          "title_short": "Reinstall",
          "icon": "fa fa-caret-square-o-down",
          "color": "default",
          "perm": "#view"
        },
      },
      "fields": {
        "configTime": "Configuration Time",
        "ip": "IP",
        "templatename": "Template Name",
        "name": "Device Name",
        "status": "Status",
        "updatedBy": "Updated By",
        "actions": "Actions",
      },
      "messages": {
        "save_ntp": "Do you want to assign ntp settings to all devices?",
        "reconfigure_ntp": "Do you want to reconfigure ntp settings for this device?",
        "reinstall_success": "Ntp settings are successfully reconfigured for this device!",


      },
      "labels": {
        "all": "All"
      },
      "edit": {
        "basePerm": "prognet_nm_ntp_settings",
        "modes": {
          "edit": {
            "title": "Edit NTP",
            "icon": "fa fa-pencil",
            "perm": "#edit",
          },
          "create": {
            "title": "Add NTP",
            "icon": "fa fa-plus",
            "perm": "#create",
          },
        },
        "actions": {
          "create": {
            "title": "",
            "title_short": "Ekle",
            "icon": "fa fa-plus-circle",
            "color": "blue-madison",
            "perm": "#create",
          },
          "view": {
            "title": "",
            "title_short": "Detay",
            "icon": "fa fa-eye",
            "color": "default",
            "perm": "#view"
          },
          "delete": {
            "title": "",
            "title_short": "Sil",
            "icon": "fa fa-trash-o",
            "color": "btn-outline uppercase red-sunglo",
            "perm": "#delete"
          }
        },


        "fields": {
          "system": {
            "label": "System",


          },
          "time_zone": {
            "label": "Time Zone",
            "placeholder": "Please enter Time Zone",
          },
          "ntp_server": {
            "label": "NTP Server1",
            "placeholder": "Please enter valid ip",
          },
          "controller_ip": {
            "label": "Controller NTP IP",
            "placeholder": "Please enter valid ip",
          },
          "select": {
            "label": "select",
            "placeholder": "Please put in order",
          },
          "save": {
            "label": "Save",
            "placeholder": "",
            "help_line": "",
            "help_block": "",
          },

          "back": {
            "label": "Back",
            "placeholder": "",
            "help_line": "",
            "help_block": "",
          },

        },
        "messages": {
          "save_success": "'{{dto.name}}' is successfully saved.",
          "create_success": "'{{dto.name}}' is successfully created",
          "delete_confirm": "Do you want to delete selected criteria ?",
          "delete_message": "Do you want to delete '{{dto}}'?",
        },

      },

    },
    'cpe': {
      'cpe_device_description': 'Site Configuration',
      'cpe_bridge_title': 'Network Configuration',
      'cpe_function_title': 'VNF',
      'cpe_group_title': 'CPE Group',
      'cpe_assign_title': 'Network Policy',
      'icon': 'fa fa-cubes',
      'perm': 'common:view',
      'cpe_device': {
        'list': {
          'title': 'CPE Definition',
          'icon': 'fa fa-hdd-o',
          'basePerm': 'cpe_device_description',
          'perm': '#list',
          'actions': {
            'create_access_control_cpe': {
              'title': 'Create New Cpe',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'report': {
              'title': 'Report',
              'title_short': 'Report',
              'icon': 'fa fa-file-text',
              'color': 'blue-madison',
              'perm': '#view',
            },
            'view_access_control_cpe': {
              'title': 'Detail Cpe',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'show_cpe_dashboard': {
              'title': 'Show Device Dashboard',
              'title_short': 'Dashboard',
              'icon': 'fa fa-tachometer',
              'color': 'blue-madison',
              'perm': '#show_device_dashboard'
            },
            'edit_cpe': {
              'title': 'Edit CPE',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_cpe': {
              'title': 'Delete CPE',
              'title_short': 'Delete      ',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'reach_cpe': {
              'title': 'Device Console',
              'title_short': 'Console',
              'icon': 'fa fa-binoculars',
              'color': 'blue-madison',
              'perm': '#device_console'
            },
            'enable_ansible_connection': {
              'title': 'Enable ZTP Connection',
              'title_short': 'Enable Ansible Connection',
              'icon': 'fa fa-key',
              'color': 'blue-madison',
              'perm': '#enable_ztp',
            },
            'reboot_cpe': {
              'title': 'Reboot Device',
              'title_short': 'Reboot Device',
              'icon': 'fa fa-repeat',
              'color': 'blue-madison',
              'perm': '#reboot',
            }
          },
          'fields': {
            'cpeDeviceId': 'Id',
            'cpeDeviceName': 'Site Name',
            'controllerIps': 'Controller Ip',
            'centralCpe': 'Site Type',
            'deviceType': 'Device Model',
            'dpdkSupported': 'DPDK Supported',
            'dpdkVersion': 'Dpdk Version',
            'deviceStatus': 'Configuration Status',
            "tenantName": "Tenant Name",
            'back': 'Back',
            'nextSave': 'Next&Save'
          },
          'messages': {

            'delete_confirm': 'Do you want to delete selected  \'{{dto.cpeDeviceName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeDeviceName}}\' is succesfully deleted!',
            'enable_confirm': 'Are You Sure That You Want to Enable Ansible Connection to Device?',
            'enable_sent': 'Ansible Can Connect to Device Successfully',
            'reboot_confirm': 'Are You Sure That You Want to Reboot Device \'{{dto.cpeDeviceName}}\'?',
            'reboot_sent': 'Reboot Request Sent to Device \'{{dto.cpeDeviceName}}\' Successfully',
            'empty_wan_ip': 'WAN IP of Device Is Empty',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_device_description',
          'modes': {
            'edit': {
              'title': 'Edit CPE Device',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create CPE Device',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'deviceName': {
              'label': 'Site Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'deviceControlIp': {
              'label': 'Controller IP',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'deviceType': {
              'label': 'Type',
              'placeholder': 'Please enter device type...',
              'help_line': '',
              'help_block': '',
            },
            'dpdkVersion': {
              'label': 'DPDK Version',
            },
            'centralCpe': {
              'label': 'SD-WAN Gateway',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'dpdkSupported': {
              'label': 'DPDK Support',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'nextSave': {
              'label': 'Next&Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': '\'{{dto.cpeDeviceName}}\' device is successfully updated.',
            'create_success': '\'{{dto.cpeDeviceName}}\' device is successfully created.',
          },
        },
        'report':{
          'basePerm': 'cpe_device_description',
          'fields': {
            'available': 'Available',
            'selectedDevice': 'Selected',
            'deviceUuid': 'UUID',
            'siteName': 'Site Name',
            'serialNumber': 'Serial Number',
            'save': 'Apply',
          },
          'messages': {
            'save_success': 'successfully appyled.',
          },
        },
      },
      'cpe_bridge': {
        'list': {
          'title': 'CPE Bridge',
          'icon': 'fa fa-hdd-o',
          'basePerm': 'cpe_device_description',
          'perm': '#list',
          'fields': {
            'deviceName': 'Devices Name',
            'portNumber': 'Interface Port Number',
            'interfaceName': 'Interface Type',
            'generalIp': 'Public Ip',
            'subInterfaceId': 'Subinterface ID',
            'bridgeVlanId': 'VLAN Id',
            'subIfNetwork': 'Network',
            'tunelRequirement': 'SD-WAN Overlay',
            'tunnelIp': 'Interface IP',
            'username': 'Username',
            'password': 'Password',
            'dhcp': 'DHCP',
            'ppoe': 'PPPoE',
            'static': 'MANUEL',
            'back': 'Back',
            'nextSave': 'Next&Save',
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.cpeDeviceName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeDeviceName}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'access_policy',
          'modes': {
            'edit': {
              'title': 'Edit CPE Bridge ',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create CPE Bridge',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {},
          'fields': {
            'deviceName': {
              'label': 'Device Name',
            },
            'portNumber': {
              'label': 'Device Interface Layout',
            },
            'interfaceName': {
              'label': 'Interface Type',
              'placeholder': 'Please select network name',
            },
            'generalIp': {
              'label': 'Public IP',
              'placeholder': 'Ip with subnet mask',
            },
            'gateway': {
              'label': 'Gateway IP',
              'placeholder': 'Ip with subnet mask',
            },
            'username': {
              'label': 'Username',
              'placeholder': 'Please enter username',
            },
            'password': {
              'label': 'Password',
              'placeholder': 'Please enter password',
            },
            'dhcp': {
              'label': 'DHCP',

            },
            'ppoe': {
              'label': 'PPPoE',
            },
            'static': {
              'label': 'MANUEL',
            },
            'subInterfaceId': {
              'label': 'Subinterface ID',
              'placeholder': '1-4094',
            },
            'bridgeVlanId': {
              'label': 'VLAN Id',
              'placeholder': 'Please enter vlan id',
            },
            'lteApnName': {
              'label': 'Apn Name',
              'placeholder': 'Please enter apn name',
            },
            'lteApnType': {
              'label': 'Apn Type',
              'placeholder': 'Please enter apn type',
            },
            'subIfNetwork': {
              'label': 'Network',
              'placeholder': 'Please enter network subnet',
            },
            'tunelRequirement': {
              'label': 'SD-WAN Overlay',
            },
            'tunnelIp': {
              'label': 'Network Subnet',
              'placeholder': 'Ip with subnet mask',
            },
            'lanNetworks': 'Lan Networks',
            'ssid': {
              'label': 'SSID',
            },
            'isWifiMacControl': {
              'label': 'Mac Control',
            },
            'wifiConfig': {
              'label': 'Wifi',
            },
            'wifiChannel': {
              'label': 'Channel',
            },
            'wpaPersonalKey': {
              'label': 'Personel Key',
            },
            'isWifiUp': {
              'label': 'Wifi Up',
              'placeholder': 'Ip with subnet mask',
            },
            'back': {
              'label': 'Back',

            }, 'nextSave': {
              'label': 'Next&Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': ' is successfully updated.',
            'create_success': ' is successfully created',
            'delete_success': ' is successfully deleted',
            'delete_confirm': 'Do you want to delete port \'{{dto}}\'?',
            'public_ip_error': 'IP Address is required',
            'interfaceIp_error': 'interface ip is required',
            'vlanId_error': 'VlanId should be between 1 and 4094',
            'userName_error': 'Username is required',
            'password_error': 'Password is required',
            'subInterface_error':'Subinterface id must be 1-4094'
          },
        },
      },
      'cpe_function': {
        'list': {
          'title': 'Available VNF',
          'icon': 'fa fa-hdd-o',
          'basePerm': 'cpe_device_description',
          'perm': '#list',
          'fields': {
            'title': 'Available VNF *',
            'cpeFunctionName': 'Function Name',
            'back': 'Back',
            'nextSave': 'Next&Save',

          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.cpeFunctionName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeFunctionName}}\' is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'access_policy',

          'modes': {
            'edit': {},
            'create': {
              'title': {},
            },
          },
          'actions': {},
          'fields': {
            'selectedVnf': {
              'label': 'Selected VNF',
              'placeholder': 'Please enter name',
            },
            'selectApplication': {
              'label': 'Select Application',
              'placeholder': 'Please enter name',
            },
            'selectApp': {
              'label': 'Select Application *',
              'placeholder': 'Please enter name',
            },
            'selectedApplication': {
              'label': 'Selected Application',
              'placeholder': 'Please enter application',
            },
            'deviceName': {
              'label': 'Device Name',
            },
            'addVnfConf': {
              'label': 'Add Vnf Configuraiton',
            },
            'add': {
              'label': 'Add',
            },
            'cpeFunctionName': {
              'label': 'Function Name'
            },
            'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'nextSave': {
              'label': 'Next&Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {

            'error_add_same_vnf': 'Same VNF cannot be added multiple times.',
            'error_add_same_vnf_application': 'Same VNF Application cannot be added multiple times. Duplicate applications: ',
            'save_success': 'selected function successfully updated.',
            'create_success': 'selected function is successfully created',

          },

        },
      },
      'cpe_group': {
        'list': {
          'title': 'Available Group',
          'icon': 'fa fa-hdd-o',
          'basePerm': 'cpe_device_description',
          'perm': '#list',
          'fields': {
            'cpeAssignName': 'Assign Name',
            'back': 'Back',
            'nextSave': 'Next&Save',
            'grouplist': 'Group List',
            'cpegrouptree': 'Organization Topology',

          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.cpeDeviceName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeDeviceName}}\' is succesfully deleted!',

          }
        },
        'create': {},
        'edit': {
          'basePerm': 'access_policy',
          'modes': {
            'edit': {},
            'create': {
              'title': {}
            },

            'actions': {},
            'fields': {
              'cpeAssignName': {
                'label': 'Assign Name'
              }
            }
          },

          'fields': {
            'deviceName': {
              'label': 'Device Name',
            },
            'assignGroupName': {
              'label': 'Assign Group Name:',
            },
            'cpeFunctionName': {
              'label': 'Function Name'
            },
            'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'nextSave': {
              'label': 'Next&Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': 'selected group successfully updated.',
            'create_success': 'selected group is successfully created'
          },
        }
      },
      'cpe_tunnel_status_list': {
        'list': {
          'title': 'CPE Tunnel Status List',
          'icon': 'fa fa-random',
          'basePerm': 'cpe_tunnel',
          'perm': '#list',
          'actions': {
            'cpe_tunnel_status_list': {
              'title': 'CPE Tunnel Status List',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'reinstall_cpe_tunnel_status_list': {
              'title': 'Reinstall',
              'title_short': 'Reinstall',
              'icon': 'fa fa-caret-square-o-down',
              'color': 'default',
              'perm': '#view'
            },
          },
          'fields': {
            'name': 'Device Name',
            'status': 'Status',
            'tunnelEncapsulation': 'Tunnel Encapsulation',
            'installationTimer': 'Installation Time',
            'resultMessage': 'Result Message',
            'actions': 'Actions',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',
            'reinstall_confirm': 'Do you want to reinstall tunnel status?',
            'reinstall_success': 'Selected tunnel status is successfully reinstall!',
            'stop_confirm': 'Do you want to stopped selected device?',
            'stop_success': 'Selected device is successfully stopped!',
            'sync_confirm': 'Do you want to sync selected device?',
            'sync_success': 'Selected device is successfully sync!',
            'all_sync_confirm': 'Do you want to all sync devices?',
            'all_sync_success': 'Devices are successfully all sync!',

          },
        },

      },
      'cpe_tunnel': {
        'list': {
          'title': 'CPE Tunnel Management',
          'icon': 'fa fa-share-alt-square',
          'basePerm': 'cpe_tunnel',
          'perm': '#list',
          'actions': {
            'create_access_tunnel': {
              'title': 'Create New Tunnel',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_access_tunnel': {
              'title': 'Tunnel Detail',
              'title_short': 'Details',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_tunnel': {
              'title': 'Edit Tunnel',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_tunnel': {
              'title': 'Delete Tunnel',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'tunnel_status_list': {
              'title': 'Status List',
              'title_short': 'Tunnel Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#view'
            },
          },
          'fields': {
            'srcAllCpes': 'All Cpe used?',
            'srcCpes': 'Source Cpe List',
            'name': 'Site Name',
            'description': 'Description',
            'vxlanTunnelId': 'VxLAN Tunnel ID',
            'cpeTunnelId': 'Id',
            'srcGroups': 'Source Groups',
            'dstGroups': 'Destination Groups',
            'srcCpePorts': 'Source Port',
            'dstCpePorts': 'Destination Port',
            'dstAllCpes': 'Select all destination cpe',
            'dstCpes': 'Destination list',
            'overlayNetworkUsed': 'Enable overlay network',
            'overlayNetworkSubnet': 'Overlay network ',
            'overlayFunctionDefId': 'Cpe Function',
            'sourceOverlayFunctionDefId': 'Source Cpe Function',
            'destinationOverlayFunctionDefId': 'Destination Cpe Function',
            'overlayFunctionPort': 'Cpe Function Port',
            'sourceOverlayFunctionPort': 'Source Cpe Function Port',
            'destinationOverlayFunctionPort': 'Destination Cpe Function Port',
            'vmManagementTunnel': 'Use VM Management from source ',
            "tenantName": "Tenant Name",
            'tunnelActive': 'Active Tunnel',
          },
          'messages': {
            'delete_confirm': 'Do you want to delete the tunnel \'{{dto.name}}\'?',
            'delete_success': 'The tunnel is successfully deleted.',
            'tunnel_status': 'Tunnel status is successfully changed',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_tunnel',
          'modes': {
            'edit': {
              'title': 'Tunnel Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Tunnel Create',
              'icon': 'fa fa-plus',
              'perm': '#create',
            }
          },
          'actions': {},
          'fields': {
            'srcAllCpes': {
              'label': 'Any source Device',
              'placeholder': 'Function description ID...',
              'help_line': '',
              'help_block': ''
            },
            'srcCpes': {
              'label': 'Source list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'description': {
              'label': 'Tunnel Description',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'name': {
              'label': 'Tunnel Name',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'vxlanTunnelId': {
              'label': 'Vxlan Tunnel Id',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'cpeTunnelId': {
              'label': 'Cpe tunnel id',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'srcCpePorts': {
              'label': 'Source interface list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'srcGroupPorts': {
              'label': 'Source group list',
            },
            'dstGroupPorts': {
              'label': 'Destination group list',
            },
            'tunnelEncapsulationMethod': {
              'label': 'Tunnel Encapsulation Method',
            },
            'ipsec': {
              'label': 'IPSec',
            },
            'gre': {
              'label': 'GRE',
            },
            'createProfile': {
              'label': 'Create New IPSec Profile',
            },
            'ipsecProfile': {
              'label': 'IPSec Profile',
            },
            'autoRouteEnabled': {
              'label': 'IPSec Auto Route Enabled',
            },
            'greAutoRoute': {
              'label': 'GRE Auto Route Enabled',
            },
            'dstCpePorts': {
              'label': 'Destination interface list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'dstAllCpes': {
              'label': 'Any destination Device',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'dstCpes': {
              'label': 'Destination list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'overlayNetworkUsed': {
              'label': 'Enable overlay network',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'tunnelActive': {
              'label': 'Active Tunnel',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'overlayNetworkSubnet': {
              'label': 'Overlay network',
              'placeholder': 'Ip with subnet mask',
              'help_line': '',
              'help_block': ''
            },
            'overlayFunctionDefId': {
              'label': 'VNF Function',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'sourceOverlayFunctionDefId': {
              'label': 'Source VNF function list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'destinationOverlayFunctionDefId': {
              'label': 'Destination VNF function list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'overlayFunctionPort': {
              'label': 'VNF port list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'sourceOverlayFunctionPort': {
              'label': 'Source VNF port list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'destinationOverlayFunctionPort': {
              'label': 'Destination VNF port list',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'vmManagementTunnel': {
              'label': 'Use VM management from source',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
          },
          'messages': {
            'save_success': 'Tunnel is successfully updated.',
            'create_success': 'Tunnel is successfully created',
            'select_cpe': 'Please select item in destination group list',
            'select_source': 'Please select item in source group list',
            'select_source_interface': 'Please select item in source interface list',
            'select_dest_interface': 'Please select item in destination interface list',
            'destination_error': 'Please select item in destination list ',
            'interval_error': 'Vxlan id should be between 0-2147483647',
            'select_source_vnf_port': 'Please select item in source VNF port list',
            'select_dest_vnf_port': 'Please select item in destination VNF port list',
            'select_source_vnf_function': 'Please select item in source VNF function list',
            'select_dest_vnf_function': 'Please select item in destination VNF function list',
            'enter_overlay_network': 'Please enter overlay network',
            'enter_valid_overlay_network': 'Please enter a valid overlay network',
            'ipsecProfile_selected':'Please select ipsec profile',
          },

        }
      },
      'user_password': {
        'header': 'Password',
        'title': 'CPE Definition',
        'icon': 'fa fa-empire',
        'fields': {
          'user': {
            'label': 'User',
            'placeholder': 'Enter User'
          },
          'pass': {
            'label': 'Password',
            'placeholder': 'Enter Password'
          }
        },
        'messages': {
          'request_sent': 'Request Sent to Device Successfully',
          'enable_sent': 'Ansible Can Connect to Device Successfully',
        },
        'buttons': {
          'save': 'Console',
          'cancel': 'Cancel',
        },
      },
      'root_password': {
        'header': 'Password',
        "title": "Network Functions",
        'icon': 'fa fa-empire',
        'fields': {
          'pass': {
            'label': 'Password for User \'root\'',
            'placeholder': 'Enter Password for User \'root\''
          }
        },
        'messages': {
          'request_sent': 'Request Sent to Device Successfully',
          'enable_sent': 'Ansible Can Connect to Device Successfully',
        },
        'buttons': {
          'save': 'Save',
          'cancel': 'Cancel',
        },
      },
    },
    'group': {
      'create_new_group': 'Device Group',
      'assigned_to_group': 'Group Topology',
      'assigned_to_device': 'Assign Device',
      'group_policy_assignment': 'Policy',
      'group_vnf_template': 'Group Vnf Template',
      'icon': 'fa fa-ball-pile',
      'perm': 'common:view',
      'create_group': {
        'list': {
          'title': 'Group Configuration',
          'icon': 'fa fa-object-group',
          'basePerm': 'bundle',
          'perm': '#list',
          'actions': {
            'create_access_control_group': {
              'title': 'Create New Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_access_control_group': {
              'title': 'Detail Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_group': {
              'title': 'Edit Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_group': {
              'title': 'Delete Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'group_topology': {
              'title': 'Group Topology',
              'title_short': 'Group Topology',
              'color': 'blue-madison',
              'perm': '#create',
            },

          },
          'fields': {
            'title': 'Group Topology',
            'cancel': 'Cancel',
            'groupName': 'Name',
            'groupLocation': 'Location',
            'groupType': 'Group Type',
            'groupDescription': 'Description',
            "tenantName": "Tenant Name",
            'back': 'Back',
            'nextSave': 'Next&Save',
            'save': 'Save',
            'deviceList': 'Device List',
            'selectedDevices':'Selected Devices'
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\'?',
            'delete_success': ' Selected \'{{dto.name}}\' is deleted successfully',
            'deviceSelected':'Devices successfully selected',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'bundle',
          'modes': {
            'edit': {
              'title': 'Edit Group',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add Group',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'groupName': {
              'label': 'Group Name',
              'placeholder': 'Please enter group name...',
              'help_line': '',
              'help_block': '',
            },
            'assignGroup': {
              'label': 'Group List',
              'placeholder': 'Please enter group name...',
              'help_line': '',
              'help_block': '',
            },
            'groupLocation': {
              'label': 'Group Location',
              'placeholder': 'Please enter location...',
              'help_line': '',
              'help_block': '',
            },
            'groupType': {
              'label': 'Group Type',
              'placeholder': 'Please enter group type...',
              'help_line': '',
              'help_block': '',
            },
            'groupDescription': {
              'label': 'Description',
              'placeholder': 'Please enter description...',
              'help_line': '',
              'help_block': '',
            },
            'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            }, 'nextSave': {
              'label': 'Next&Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': ' \'{{dto.name}}\' is successfully updated.',
            'create_success': ' \'{{dto.name}}\' is successfully created.',
            'assigned_success': ' is successfully assigned.',
            'error_assign': 'group cannot be assigned.',
            'delete_success': ' is deleted successfully.',
          },
        },
      },
      'vnf_template': {
        'list': {
          'title': 'VNF Template',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'vnf_temp_definition',
          'perm': '#list',
          'actions': {
            'create_vnf': {
              'title': 'New Vnf Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            "view_category": {
              "title": "View Category",
              "title_short": "View Category",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            "view_vnf": {
              "title": "View Vnf Template",
              "title_short": "View Vnf Template",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            'view_access_control_policy': {
              'title': 'Detail Function Type',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf': {
              'title': 'Edit Vnf Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf': {
              'title': 'Delete Vnf Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'create_function_type': {
              'title': 'Create Function Type',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'status_cli_template_list': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#view'
            },
            'clone_vnf_template': {
              'title': 'Clone Template',
              'title_short': 'Clone Template',
              'icon': 'fa fa-clone',
              'color': 'blue-madison',
              'perm': '#clone'
            },
            'delete_function_type': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'install_cpe': {
              'title': 'Install Template',
              'title_short': 'install',
              'icon': 'fa fa-arrow-down',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'open_child': {
              'title': 'Open',
              'title_short': 'Open',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison btn-circle',
              'perm': '#delete'
            },
            'close_child': {
              'title': 'Close',
              'title_short': 'Close',
              'icon': 'fa fa-minus-circle',
              'color': 'red-soft btn-circle',
              'perm': '#delete'
            },
          },
          'fields': {
            'selectedApplication': {
              'label':'Selected Vnf Template List'
            },
            'selectApplication': {
              'label':'Select Vnf Template List'
            },
            'name': 'Name',
            'description': 'Description',
            'vnf_provider': 'VNF Provider',
            'back': {
              'label':'Back'
            },
            'save': {
            'label':'Save'
          },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\'  is succesfully deleted!',
            'create_success': 'Successfully assigned',
          },

        },
        'create': {},
        'edit': {
          'title': 'VNF Template',
          'basePerm': 'vnf_temp_definition',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'selectedApplication': {
              'label':'Selected Vnf Template List'
            },
            'selectApplication': {
              'label':'Select Vnf Template List'
            },
            'back': 'Back',
            'nextSave': 'Next&Save',
            'typeName': {
              'label': ' Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'typeDescription': {
              'label': 'Description',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.typeName}}\' successfully updated',
            'create_success': '\'{{dto.typeName}}\' successfully created',
          },
        },
      },
    },
    'topology': {
      'list': {
        'basePerm': 'phy_topo',
        'perm': '#list',
        'messages': {
          'delete_confirm': 'Are You Sure That You Want to Delete DPDK Version \'{{dto.typeName}}\'?',
          'delete_success': '\'{{dto.typeName}}\'  Deleted Successfully',
        },
      },
    },
    'logs': {
      'list': {
        'title': 'System Logs',
        'icon': 'fa fa-dashboard',
        'basePerm': 'loganalyzer',
        'messages': {
          'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\'?',
          'delete_success': ' \'{{dto.name}}\' is succesfully deleted!',

        },
      },
    },
    'dashboard': {
      'main-dashboard': {
        'title': 'Dashboard',
        'icon': 'fa fa-dashboard',
        'basePerm': 'prometheus',
        'perm': '#list',
        'tooltips': {
          'startDashboard': 'Start Dashboard',
          'stopRefresh': 'Stop Refresh',
          'refreshDashboard': 'Refresh Dashboard',
          'updateInterval': 'Update Interval'
        },
        'labels': {
          'titles': {
            'controllerStatus': 'Controller Status',
            'gwStatus': 'SD-WAN GW Status'
          },
        }
      },
      'site-dashboard': {
        'title': 'Site Dashboard',
        'icon': 'fa fa-dashboard',
        'basePerm': 'prometheus',
        'perm': '#list',
      },
      'system-usage': {
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'cpuUsage': "CPU Usage",
          'memoryUsage': "Memory Usage",
          'diskUsage': "Disk Usage",
          'systemUptime': "System Uptime",
          'lte_signal': "Signal Strength",
        }
      },
      'sites': {
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'activeSites': 'Active Sites',
          'downSites': 'Down Sites',
          'pendingSites': 'Pending Sites',
          'showDevices': 'Show Devices',
        },
      },
      'controller': {
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'activeControllers': 'Active',
          'downControllers': 'Down'
        },
        'tooltips': {
          'showControllers': 'Show Controllers'
        }
      },
      'site-list': {
        'basePerm': 'prometheus',
        'perm': '#list',
        'actions': {
          'show_traffic_graph': {
            'title': 'Show Device Dashboard',
            'title_short': 'Dashboard',
            'icon': 'fa fa-tachometer',
            'color': 'blue-madison',
            'perm': '#view'
          }
        },
        'labels': {
          'activeSites': 'Active Sites',
          'downSites': 'Down Sites',
          'pendingSites': 'Pending Sites'
        }
      },
      'controllers': {
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'activeControllers': 'Active Controllers',
          'downControllers': 'Down Controllers',
          'showController': 'Show Controller',
        },
      },
      'tunnel-status': {
        'cardTitle': 'Tunnel Status [ SD-WAN GW ]',
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'ipsecTunnels': 'Ipsec Tunnels',
          'vxlanTunnels': 'Vxlan Tunnels'
        }
      },
      'tunnel-status-list': {},
      'gw-traffic-graph': {
        'cardTitle': 'SD-WAN GW Traffic',
        'basePerm': 'prometheus',
        'perm': '#list',
        'tooltips': {
          'selectRange': 'Select a range for specific usage between dates'
        },
        'labels': {
          'selectRange': 'Select a time range'
        }
      },
      'topApplications': {
        'cardTitle': 'Top Protocols',
        'basePerm': 'prometheus',
        'perm': '#list',
        'tooltips': {
          'selectDevice': 'Select a device for individual results',
          'selectRange': 'Select a range for specific usage between dates'
        },
        'labels': {
          'selectDevice': 'Select a Device',
          'selectRange': 'Select a time range'
        }
      },
      'topSites': {
        'cardTitle': 'Top Sites',
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'numberOfSites': 'Number of sites'
        },
        'list': {
          'title': 'Top Sites',
          'icon': 'fa fa-life-ring',
          'basePerm': 'prometheus',
          'perm': '#list',
          'fields': {
            'deviceIp': 'IP',
            'address': 'Address',
            'deviceName': 'Device Name ',
            'trafficData': 'Traffic Data(Byte)',
          },
        },

      },
      'deviceDomainList': {
        'cardTitle': 'Device Domain List',
        'basePerm': 'prometheus',
        'perm': '#list',
        'labels': {
          'deviceName': 'Device Name',
          'uuid': 'UUID',
          'tenant':'Tenant',
          'trafficData':'Traffic Data(Byte)',
          'domainName':'Address',
          'mac':'MAC',
          'download':'Download',
          'upload':'Upload',
          'ip':'IP',

        }
      },
    },
    'template': {
      'flow_action': {
        'list': {
          'title': 'Traffic Action',
          'icon': 'fa fa-life-ring',
          'basePerm': 'cpe_policy_action',
          'perm': '#list',
          'actions': {
            'create_access_flow_action': {
              'title': 'New Create SFC',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'view_flow_action': {
              'title': 'Detail SFC',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_flow_action': {
              'title': 'Edit TrafficAction',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_flow_action': {
              'title': 'New Create Traffic Action',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_action': {
              'title': 'Delete Traffic Action',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'actionName': 'Name',
            'sfcDefinition': 'SFC ',
            'headerChanges': 'Header Modification',
            'srcMac': 'SRC-MAC',
            'srcIp': 'SRC-IP',
            'popVlan': 'POP-VLAN',
            'dscpMarking': 'DSCP-MARKING',
            'dstMac': 'DST-MAC',
            'dstIp': 'DST-IP',
            'pushVlan': 'PUSH-VLAN',
            "tenantName": "Tenant Name",
            'save': 'Save',
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_policy_action',
          'modes': {
            'edit': {
              'title': 'Edit Traffic Action',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add Traffic Action',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'actionName': {
              'label': 'Name',
              'placeholder': 'Please enter Action Name '


            },
            'sfcDefinition': {
              'label': 'SFC ',
              'placeholder': 'Please select SFC Definition '

            },
            'headerChanges': {
              'label': 'Header Modification'
            },
            'srcMac': {
              'label': 'Source MAC',
              'placeholder': 'Please enter SRC-MAC'
            },
            'srcIp': {
              'label': 'Source IP',
              'placeholder': 'Please enter SRC-IP'
            },
            'popVlan': {
              'label': 'Pop Vlan',
              'placeholder': 'Between 0-4096'
            },
            'dscpMarking': {
              'label': 'DSCP Marking',
              'placeholder': 'Please enter DSCP-MARKING'
            },
            'dstMac': {
              'label': 'Destination MAC',
              'placeholder': 'Please enter DST-MAC'
            },
            'dstIp': {
              'label': 'Destination IP',
              'placeholder': 'Please enter DST-IP'
            },
            'pushVlan': {
              'label': 'Push Vlan',
              'placeholder': 'Between 0-4096'
            },
            'delete_link':
              {
                'label': 'Delete Link'
              },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': ' \'{{dto.name}}\' successfully updated.',
            'create_success': ' \'{{dto.name}}\'  successfully created',
            'mac_control': 'Please add valid mac address',

          },
        },
      },
      'flow-template': {
        'list': {
          'title': 'Traffic Rule',
          'icon': 'fa fa-qrcode',
          'basePerm': 'cpe_policy_template',
          'perm': '#list',
          'actions': {
            'create_access_template': {
              'title': 'Create New Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_access_control_template': {
              'title': 'Detail Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_template': {
              'title': 'Edit Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_template': {
              'title': 'Create Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_template': {
              'title': 'Delete Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'groupName': 'Group Name',
            'policyTemplates': 'Traffic Templates',
            'selectApplication': 'Select Application',
            'selectedApplication': 'Selected Application:',
            'flowTemplateName': 'Name',
            'flowTemplateCriteria': 'Details',
            'criteriaList': 'Criteria List',
            'action': 'Actions',
            'criteriaName': 'Criteria Name',
            'priority': 'Priority',
            'access': 'Allow',
            'denny': 'Deny',
            'flowAction': 'Policy Action',
            'ethCriteria': 'Layer2',
            'sourceMac': 'Source MAC',
            'destinationMac': 'Destination MAC',
            'ipCriteria': 'Ip Criteria Layer3',
            'sourceNetwork': 'Source IP/Network',
            'destinationNetwork': 'Destination IP/Network',
            'L4portCriteria': 'Layer4 Port Criteria',
            'sourcePort': 'Source Port',
            'destinationPort': 'Destination Port',
            'vlanId': 'VLAN-ID',
            'protocol': 'PROTOCOL',
            'mplsId': 'MPLS-ID',
            'vxlan-ıd': 'VXLAN-ID',
            'endUserApplications': 'User Application',
            'activePeriod': 'Active Period',
            'deviceName': 'Device Name',
            "tenantName": "Tenant Name",
            'save': 'Save',
            'back': 'Back'
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\'?',
            'delete_success': ' \'{{dto.name}}\' is succesfully deleted!',
            'delete_relation_confirm': 'This template is used in a cpe device policy. You can still delete this template but cpe device policy relation will be lost.Do you want to delete selected  \'{{dto.name}}\'?',

          },

        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_policy_template',
          'modes': {
            'edit': {
              'title': 'Edit Traffic Template ',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add Traffic Template',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },


          'fields': {
            'policyTemplates': {
              'label': 'Traffic Templates',

            },
            'selectApplication': {
              'label': 'Select Application',
              'placeholder': 'Please enter name',
            },
            'flowTemplateName': {
              'label': 'Name',
              'placeholder': 'Please enter name',
            },
            'details': {
              'label': 'Details',
              'placeholder': 'Please enter details',
            },
            'criteria': {
              'label': 'Criteria',
              'placeholder': 'Please enter criteria',
            },
            'trafficAction': {
              'label': 'Traffic Action',
              'placeholder': 'Please enter traffic action',
            },
            'groupPolicy': {
              'label': 'Group Policy',
              'placeholder': 'Please enter group policy',
            },
            'selectedApplication': {
              'label': 'Selected Application:',
              'placeholder': 'Please enter name',
            },
            'deviceName': {
              'label': 'Device Name',
            },
            'templateName': {
              'label': 'Template Name',
            },
            'flowTemplateCriteria': {
              'label': 'Details',
            },
            'criteriaList': {
              'label': 'Criteria List',

            },
            'criteriaName': {
              'label': 'Criteria Name',
              'placeholder': 'Please enter criteria name',
            },
            'priority': {
              'label': 'Priority',
              'placeholder': 'Please enter priority',

            },
            'groupName': {
              'label': 'Group Name',
              'placeholder': 'Please enter priority',

            },
            'state': {
              'label': 'Status'
            },
            'access': {
              'label': 'Allow',

            },
            'deny': {
              'label': 'Deny',

            },
            'flowAction': {
              'label': 'Policy Action',
              'placeholder': 'Please select flow action',
            },
            'ethCriteria': {
              'label': 'Layer2',

            },
            'action': {
              'label': 'Actions',
            },

            'sourceMac': {
              'label': 'Source MAC',
              'placeholder': 'Please enter source mac',
            },
            'destinationMac': {
              'label': 'Destination MAC',
              'placeholder': 'Please enter destination mac',
            },
            'ipCriteria': {
              'label': 'Ip Criteria Layer3',
            },
            'sourceNetwork': {
              'label': 'Source IP/Network',
              'placeholder': 'Please enter source network',
            },
            'destinationNetwork': {
              'label': 'Destination IP/Network',
              'placeholder': 'Please enter destination network'
            },

            'sourcePort': {
              'label': 'Source Port',
              'placeholder': 'Please enter source port',
            },
            'destinationPort': {
              'label': 'Destination Port',
              'placeholder': 'Please enter destination port',
            },
            'L4portcriteria': {
              'label': 'Layer4 Port Criteria',
            },
            'vlanId': {
              'label': 'VLAN-ID',
              'placeholder': 'Please enter vlanId',
            },
            'protocol': {
              'label': 'PROTOCOL',
              'placeholder': 'Please enter protocol',
            },
            'mplsId': {
              'label': 'MPLS-ID',
              'placeholder': 'Please enter mpls-ıd',
            },
            'vxlan-ıd': {
              'label': 'VXLAN-ID',
              'placeholder': 'Please enter vxlan-ıd',
            },
            'endUserApplications': {
              'label': 'User Application',
              'placeholder': 'Please select user application',
            },
            'editCriteria': {
              'label': 'Edit Criteria'
            },
            'activePeriod': {
              'label': 'Active Period'
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

            'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.name}}\' is successfully saved.',
            'create_success': '\'{{dto.name}}\' is successfully created',
            'delete_confirm': 'Do you want to delete selected criteria ?',
            'delete_message': 'Do you want to delete \'{{dto}}\'?',
            'delete_assign': 'Do you want to delete \'{{dto}}\' criteria?',
            'delete_success': ' \'{{dto.name}}\' is succesfully deleted!',
            'cpe_assign_save': 'assign policy is successfully updated',
            'cpe_assign_create': 'assign policy is successfully created',
            'flow_assign_save': 'Policy is successfully created.',
            'flow_assign_create': 'Policy is successfully updated.',
            'criteria_save': ' is successfully updated',
            'mac_control': 'Please add valid mac address',
            'criteria_create': ' is successfully created',
            'criteria_delete': ' is successfully deleted',
            'vlanId_error': 'VlanID should be between 0-4096',
            'port_error': 'Port number should be between 0-65536',
            'same_criteria': 'Criteria with the same name already exists!',
          },

        },

      },
      'multicast': {
        'list': {
          'title': 'Multicast',
          'icon': 'fa fa-qrcode',
          'basePerm': 'vyos',//to do
          'perm': '#list',
          'actions': {
            'create_multicast': {
              'title': 'Create New Multicast',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_multicast': {
              'title': 'Detail Multicast',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_multicast': {
              'title': 'Edit Multicast',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_multicast': {
              'title': 'Delete Multicast',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'cpe_status_list': {
              'title': 'Status List',
              'title_short': 'Device Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#edit'
            },
          },
          'fields': {
            'secureUnsecure': 'Secure/Unsecure',
            'center': 'Center Device',
            'interface': 'Interface',
            'multicast': 'Multicast',
            'tunnel': 'Tunnel',
            'ipAddress': 'Group Ip',
            'sender': 'Sender',
            'reciever': 'Reciever',
            'save': 'Save',
            'deviceName':'Device Name',
            'deviceType':'Device Type',
            'rendezvousPoint':'Rendezvous Point',
            'rendezvousNetwork':'Rendezvous Network',
            'status':'Status',
            'appliedDate':'Applied Date',
            'failReason':'Fail Reason',

          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.rendezvousPoint}}\'?',
            'delete_success':'Successfully deleted',
            'delete_relation_confirm': 'This template is used in a cpe device policy. You can still delete this template but cpe device policy relation will be lost.Do you want to delete selected  \'{{dto.name}}\'?',

          },

        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',//to do
          'modes': {
            'edit': {
              'title': 'Edit Multicast ',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add Multicast',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },


          'fields': {
            'secureUnsecure': {
              'label': 'Secure/Unsecure',
            },
            'rendezvousPoint': {
              'label': 'Rendezvous Point',
            },
            'rendezvousNetwork': {
              'label': 'Rendezvous is in network',
            },
            'center': {
              'label': 'Center Device',

            },
            'interfaceName': {
              'label': 'Interface Name',

            },
            'interfaceIp': {
              'label': 'Interface IP',

            },
            'multicast': {
              'label': 'Multicast'
            },
            'tunnel': {
              'label': 'Tunnel',

            },
            'ipAddress': {
              'label': 'Group Ip',

            },
            'sender': {
              'label': 'Sender',
            },
            'ipAdresses': {
              'label': 'IP Address',
            },
            'deviceName': {
              'label': 'Device Name',
            },
            'panelDescriptionSender': {
              'label': 'Click to configure sender',
            },
            'panelDescriptionReciever': {
              'label': 'Click to configure reciever',
            },
            'multicastInterface': {
              'label': 'Multicast Interface',
            },
            'tunnelInterface': {
              'label': 'Tunnel Interface',
            },
            'reciever': {
              'label': 'Reciever',

            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },


          },
          'messages': {
            'interface_length': 'Interface list length must be 2',
            'tunnel':'Tunnel cannot be added multiple times',
            'multicast':'Multicast cannot be added multiple times',
            'same_interface':'Same interface can not be added multiple times',
            'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
            'tunnel_required':'Each device must have a tunnel',
            'multicast_required':'Each device must have at least one multicast',
            'central_device':'central device cannot be the same as sender or receiver device',
            'tunnel_error':'Tunnel from one device to the central device cannot be established over two different interfaces.',
            'center_error':'Please add center device',
            'device_not_up':'Device is not up',
            'center_device_not_up':'Center device is not up',
            'save_success':'Successfully created',
            'update_success':'Successfully updated',
            'delete_success':'Successfully deleted',
            'configuration_error':'Please add at least 1 sender and receiver device'

          },

        },

      },
      'flow_sfc': {
        'title': 'Service Function Chaining',
        'icon': 'fa fa-i-cursor',
        'perm': 'common:view',
        'list': {
          'title': 'Service Function Chaining',
          'icon': 'fa fa-i-cursor',
          'basePerm': 'cpe_sfc_definition',
          'perm': '#list',
          'actions': {
            'create_sfc': {
              'title': 'New Create Sfc',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'view_sfc_control_action': {
              'title': 'Detail Sfc',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_sfc': {
              'title': 'Edit Sfc',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_sfc': {
              'title': 'Delete Sfc',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': 'Name',
            'description':'Description',
            'one-way': 'Bidirectional',
            "tenantName": "Tenant Name",
            'save': 'Save'
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_sfc_definition',
          'modes': {
            'edit': {
              'title': 'Edit Sfc',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Sfc',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': {
              'label': 'Sfc-Name'
            },
            'description': {
              'label': 'Description'
            },
            'one-way': {
              'label': 'One-way'
            },
            'two-way': {
              'label': 'Both Directions'
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'vxlanTunnelId': {
              'label': 'Vxlan Tunnel',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'connectionType': {
              'label': 'Connection Type',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'overlayIp': {
              'label': 'Overlay Network',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'dhcpHeader': {
              'label': 'Dscp Header',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\' ?',
            'create_success': '\'{{dto.name}}\' Created Successfully!',
            'save_success': '\'{{dto.name}}\' Created Successfully',
            'error_master': 'must be master link type!',
            'error_null': 'Please definition link type'
          }
        },
      },
      'cpe-template': {
        'cpe-type-definition': {
          'list': {
            'title': 'Device Type',
            'icon': 'fa fa-tasks',
            'basePerm': 'cpe_type_definition',
            'perm': '#list',
            'actions': {
              'create_cpe_type': {
                'title': 'New Device Type',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_cpe_type': {
                'title': 'Edit Device Type',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_cpe_type': {
                'title': 'Delete Device Type',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'manufacturer': 'Brand',
              'deviceModel': 'Model',
              'cpu': 'CPU <span rel="tooltip" title="CPU Model Type"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              'memory': 'Memory <span rel="tooltip" title="Memory Size"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              'storage': 'Storage <span rel="tooltip" title="Disk Size"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              // 'rj45': 'RJ45 <span rel="tooltip" title="Number of Copper Interfaces"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              // 'fiberOptic': 'Fiber Optic <span rel="tooltip" title="Number of F/O Interfaces"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              // 'lte5g': 'LTE/5G <span rel="tooltip" title="Mobile Data Interfaces"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              // 'wifi': 'WiFi <span rel="tooltip" title="Wireless Interfaces"><i class=\'fa fa-question-circle font-green-meadow\'></i></span>',
              "tenantName": "Tenant Name",
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected  \'{{dto.manufacturer}}\'-\'{{dto.deviceModel}}\'?',
              'delete_success': 'Selected \'CPE Type \'{{dto.deviceBrand}}\'-\'{{dto.deviceModel}}\' is succesfully deleted!',

            },
          },
          'create': {},
          'edit': {
            'basePerm': 'cpe_type_definition',
            'title': 'Device Type',
            'icon': 'fa fa-tasks',
            'fields': {
              'manufacturer': {
                'label': 'Brand',
                'placeholder': 'Enter Brand...',
              },
              'deviceModel': {
                'label': 'Model',
                'placeholder': 'Enter Model...',
              },
              'cpu': {
                'label': 'Cpu Model',
                'placeholder': 'Enter Cpu Model...',
              },
              'memory': {
                'label': 'Memory(GB)',
                'placeholder': 'Enter Memory...',
              },
              'storage': {
                'label': 'Storage(GB)',
                'placeholder': 'Enter Storage...',
              },
              // 'rj45Interface': {
              //   'label': 'RJ45',
              //   'placeholder': 'Enter RJ45...',
              // },
              // 'fiberPorts': {
              //   'label': 'Fiber Optic',
              //   'placeholder': 'Enter Fiber Optic...',
              // },
              'usbInterface': {
                'label': 'USB Port',
                'placeholder': 'Enter USB Port...',
              },
              'displayPort': {
                'label': 'Display Port',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Enter Description...',
              },
              // 'wifi': {
              //   'label': 'WiFi',
              // },
              // 'lte': {
              //   'label': 'LTE/5G',
              // },
              'usbPort': {
                'label': 'USB Port',
              },
              'managementConsole': {
                'label': 'Management Console',
              },
              'numberOfPorts': {
                'label': 'Number of Network Interfaces',
              },
              'portNumber': {
                'label': 'Port Number',
              },
              'interfaceName': {
                'label': 'Interface Name',
                'placeholder': 'Enter Interface Name...',
              },
              'dpdkDevargs': {
                'label': 'DPDK devargs',
                'placeholder': 'Enter DPDK devargs...',
              },
              'deleteRow': {
                'label': 'Delete'
              },
            },
            'messages': {
              'save_success': '\'CPE Type \'{{dto.manufacturer}}\'-\'{{dto.deviceModel}}\' Updated Successfully',
              'create_success': '\'CPE Type \'{{dto.manufacturer}}\'-\'{{dto.deviceModel}}\' Created Successfully',
              'warning': 'After the Entrance of Interface Name and Devargs, You Can Click the + Button and Add Port Information To the Table\n' +
                'Below',
              'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
              'no_port': 'Ports Should Be Added',
              'no_equal_numberofports': 'Ports number and number of ports in the image should be equal',
              'no_if_name': 'Interface Name Should Be Entered',
              'no_devargs': 'DPDK devargs Should Be Entered',
              'multiple_if_name': 'Same Interface Name Cannot Be Added Multiple Times',
              'multiple_devargs': 'Same DPDK devargs Cannot Be Added Multiple Times',
              'devargs_regex': 'DPDK devargs Should Consist of Numbers and Characters(.:)',
              'port_number_exists': 'Port Number Is Already Added',
              'exceeds_sum_of_fiber_rj45': 'Number of Ports on List Cannot Exceed Sum of RJ45 and Fiber Ports',
              'select_port': 'Port Should Be Selected to Add to List',

            },

          },
        },
        'dpdk-version': {
          'list': {
            'title': 'DPDK Version Management',
            'icon': 'fa fa-level-up',
            'basePerm': 'ztp', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_dpdk_version': {
                'title': 'New Create DPDK Version',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_dpdk_version': {
                'title': 'Edit DPDK Version',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_dpdk_version': {
                'title': 'Delete DPDK Version',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'dpdkVersion': 'DPDK Version',
              'isDevargsRequired': 'Are Devargs Parameters Required?',
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.dpdkVersion}}\'?',
              'delete_success': 'Selected \'DPDK Version \'{{dto.dpdkVersion}}\' is succesfully deleted!',

            },
          },
          'create': {},
          'edit': {
            'basePerm': 'ztp',
            'title': 'DPDK Version Management',
            'icon': 'fa fa-level-up',
            'fields': {
              'dpdkVersion': {
                'label': 'DPDK Version',
                'placeholder': 'Enter DPDK Version...',
              },
              'isDpdkDevargsRequired': {
                'label': 'Are Devargs Parameters Required?',
              },
            },
            'messages': {
              'save_success': '\'DPDK Version \'{{dto.dpdkVersion}}\' Updated Successfully',
              'create_success': '\'DPDK Version \'{{dto.dpdkVersion}}\' Created Successfully',
              'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
              // "warning": "Aşağıdaki Parametreleri Girdikten Sonra + Butonuna Tıklayarak Aşağıdaki Listeye Port Ekleyebilirsiniz",
            },

          },
        }

      },
      'end_user_app': {
        'list': {
          'title': 'User Application',
          'icon': 'fa fa-server',
          'basePerm': 'end_user_app',
          'perm': '#list',
          'actions': {
            'create_nac_user_app': {
              'title': 'Create End User Application',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'edit_nac_user_app': {
              'title': 'Edit End User Application',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_nac_user_app': {
              'title': 'Delete End User Application',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'nac_app_name': 'Name',
            'ports': 'Ports',
            'priority': 'Priority',
            "tenantName": "Tenant Name",
          },
          'messages': {
            'delete_confirm': 'Do you want to delete end user app. \'{{dto.name}}\'?',
            'delete_success': '\'{{dto.name}}\' is succesfully deleted!',
            'protocol_status': 'Selected \'{{dto.name}}\' is successfully change status ',
          }
        },
        'edit': {
          'basePerm': 'end_user_app',
          'perm': '#edit',
          'modes': {
            'edit': {
              'title': 'Edit End User Application',
              'icon': 'fa fa-pencil',
              'perm': '#edit'
            },
            'create': {
              'title': 'Create End User Application',
              'icon': 'fa fa-plus',
              'perm': '#create'
            }
          },
          'actions': {},
          'fields': {
            'app_name': {
              'label': 'Application Name',
              'placeholder': '',
              'help_line': '',
              'help_block': ''
            },
            'destinationIp': {
              'label': 'Destination Ip',
            },
            'protocol': {
              'label': 'Protocol',
            },
            'add': {
              'label': 'Add Criteria',
            },
            'edit': {
              'label': 'Edit Criteria',
            },
            'delete': {
              'label': 'Delete'
            },
            'action': {
              'label': 'Action'
            },
            'ports': {
              'label': 'Port',
              'placeholder': '',
              'help_line': '',
              'help_block': 'Enter a port and ip address at each line separately. \'*\' ' +
                'character is wild card. Ex: 192.168.1.1:* ' +
                'or *:80 or 192.168.1.1:80'
            },
          },
          'messages': {
            'save_success': '\'{{dto.name}}\' is succesfully updated.',
            'create_success': '\'{{dto.name}}\' is succesfully created.',
            'criteria_create_success': 'critearia is succesfully created.',
            'criteria_save_success': 'critearia is succesfully updated.',
            'delete_success': 'critearia succesfully deleted.',
            'invalid_ip': 'invalid ip',
            'notify': "please enter criteria",
            'last_bridge': 'Can not delete last criteria',
            'delete_confirm': 'Do you want to delete criteria ?',
          },
          'labels': {
            'info': 'Write one port per line.'
          }
        }
      },
    },
    'function': {

      'cpe_function_type': {
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'cpe_function_type',
          'perm': '#list',
          'actions': {
            'create_access_control_function_type': {
              'title': 'New Create Function Type',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_access_control_policy': {
              'title': 'Detail Function Type',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_function_type': {
              'title': 'Edit Function Type',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_function_type': {
              'title': 'Create Function Type',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_function_type': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': 'Name',
            'typeDescription': 'Description',
            'save': 'Save',
            'name': 'Name',
            'create': 'Create Function Type',
            'vnfTitle': 'VNF Type',


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.typeName}}\'?',
            'delete_success': 'Selected \'{{dto.typeName}}\'  is succesfully deleted!',

          },

        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_function_type',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': {
              'label': ' Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'typeDescription': {
              'label': 'Description',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.typeName}}\' successfully updated',
            'create_success': '\'{{dto.typeName}}\' successfully created',
          },
        },
      },
      'vnf_application_provider': {
        'list': {
          'title': 'VNF Applications&Providers',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'cpe_function_type',
          'perm': '#list',
          'actions': {
            'create_vnf_application_provider': {
              'title': 'New Create VNF Applications&Providers',
              'title_short': 'Create',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_vnf_application_provider': {
              'title': 'Detail VNF Applications&Providers',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf_application_provider': {
              'title': 'Edit VNF Applications&Providers',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf_application_provider': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': 'Name',
            'typeDescription': 'Description',
            'save': 'Save',
            'name': 'Name',
            'vnfName': 'VNF Name',
            'create': 'Create VNF Application',
            'vnfTitle': 'VNF Applications&Providers',
            'vnfAppDescription': 'Description',


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.cpeFunctionAppName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeFunctionAppName}}\'  is succesfully deleted!',

          },

        },
        'create': {},
        'edit': {
          'basePerm': 'vnf_application_provider',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'vnfName': {
              'label': ' Name',
              'placeholder': 'Please enter vnf name...',
              'help_line': '',
              'help_block': '',
            },
            'vnfAppDescription': {
              'label': 'Description',
              'placeholder': 'Please enter vnf name...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.cpeFunctionAppName}}\' successfully updated',
            'create_success': '\'{{dto.cpeFunctionAppName}}\' successfully created',
          },
        },
      },

      'cpe_function_definition': {
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'cpe_function_definition',
          'perm': '#list',
          'actions': {
            'create_function_definition': {
              'title': 'New Create Function Definition',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_function_definition': {
              'title': 'Detail Function',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_function_definition': {
              'title': 'Edit Function',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_definition': {
              'title': 'Create Definition',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_function_definition': {
              'title': 'Delete Function Definition',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'portNames': 'Port Names',
            'functionVersion': 'Version',
            'functionName': 'Name',
            'functionDescription': 'Description',
            'functionType': 'Function Type',
            'typeName': 'Type Name',
            'providers': 'VNF Providers',
            'save': 'Save'


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.portNames}}\'?',
            'delete_success': 'Selected \'{{dto.portNames}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_function_definition',
          'modes': {
            'edit': {
              'title': 'Function Definiton Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Function Definition Create',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_function_definition': {
              'title': 'Detail Function',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'portNames': {
              'label': ' Interfaces Names',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'functionVersion': {
              'label': 'VNF Version',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'functionName': {
              'label': 'VNF Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'dpdkSupported': {
              'label': 'Supported DPDK ',
              'placeholder': 'Please enter name',
            },
            'functionDescription': {
              'label': 'VNF Description',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'providers': {
              'label': 'VNF Providers',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'functionType': {
              'label': 'Function Type',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            }, 'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.portNames}}\' successfully updated ',
            'create_success': '\'{{dto.portNames}}\'successfully created',
            'delete_confirm_typeName': 'Do you want to delete selected \'{{dto}}\'?',
            'delete_success_typeName': '\'{{dto}}\' is succesfully deleted!',
            'missing_portName': 'Port names should end with either -wan or -lan. Ex: maya-wan or maya-lan',
            'dublicate_values': 'Same interface name cannot be added multiple times.',


          },
        },
      }
    },
    'vnf_template': {
      'vnf_template': {
        'list': {
          'title': 'VNF Template',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'vnf_temp_definition',
          'perm': '#list',
          'actions': {
            'create_vnf': {
              'title': 'New Vnf Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            "view_category": {
              "title": "View Category",
              "title_short": "View Category",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            "view_vnf": {
              "title": "View Vnf Template",
              "title_short": "View Vnf Template",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            'view_access_control_policy': {
              'title': 'Detail Function Type',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf': {
              'title': 'Edit Vnf Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf': {
              'title': 'Delete Vnf Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'create_function_type': {
              'title': 'Create Function Type',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'status_cli_template_list': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#view'
            },
            'clone_vnf_template': {
              'title': 'Clone Template',
              'title_short': 'Clone Template',
              'icon': 'fa fa-clone',
              'color': 'blue-madison',
              'perm': '#clone'
            },
            'delete_function_type': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'install_cpe': {
              'title': 'Install Template',
              'title_short': 'install',
              'icon': 'fa fa-arrow-down',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'open_child': {
              'title': 'Open',
              'title_short': 'Open',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison btn-circle',
              'perm': '#delete'
            },
            'close_child': {
              'title': 'Close',
              'title_short': 'Close',
              'icon': 'fa fa-minus-circle',
              'color': 'red-soft btn-circle',
              'perm': '#delete'
            },
            'rollback_template_list': {
              'title': 'Rollback',
              'title_short': 'Rollback',
              'icon': 'fa fa-undo',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete_vnf_version': {
              'title': 'Delete VNF Version',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'uninstall_cpe': {
              'title': 'Uninstall Template',
              'title_short': 'uninstall',
              'icon': 'fa fa-arrow-up',
              'color': 'red-soft',
              'perm': '#edit'
            },

          },
          'fields': {
            'name': 'Name',
            'description': 'Description',
            'vnf_provider': 'VNF Provider',
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\'  is succesfully deleted!',
            'rollback_confirm': 'Do you want to rollback selected device?',
            'rollback_success': 'Selected device is successfully rollback!',
          },

        },
        'create': {},
        'edit': {
          'title': 'VNF Template',
          'basePerm': 'vnf_temp_definition',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': {
              'label': ' Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'typeDescription': {
              'label': 'Description',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.typeName}}\' successfully updated',
            'create_success': '\'{{dto.typeName}}\' successfully created',
          },
        },
      },
      'vnf_application_provider': {
        'list': {
          'title': 'VNF Applications',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'cpe_function_type',
          'perm': '#list',
          'actions': {
            'create_vnf_application_provider': {
              'title': 'New Create VNF Applications',
              'title_short': 'Create',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_vnf_application_provider': {
              'title': 'Detail VNF Applications',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf_application_provider': {
              'title': 'Edit VNF Applications',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf_application_provider': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': 'Name',
            'typeDescription': 'Description',
            'save': 'Save',
            'name': 'Name',
            'vnfName': 'VNF Name',
            'create': 'Create VNF Application',
            'vnfTitle': 'VNF Applications',
            'vnfAppDescription': 'Description',


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.cpeFunctionAppName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeFunctionAppName}}\'  is succesfully deleted!',

          },

        },
        'create': {},
        'edit': {
          'basePerm': 'vnf_application_provider',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'vnfName': {
              'label': ' Name',
              'placeholder': 'Please enter vnf name...',
              'help_line': '',
              'help_block': '',
            },
            'vnfAppDescription': {
              'label': 'Description',
              'placeholder': 'Please enter vnf name...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.cpeFunctionAppName}}\' successfully updated',
            'create_success': '\'{{dto.cpeFunctionAppName}}\' successfully created',
          },
        },
      },
      'template_object': {
        'list': {
          'title': 'Template Objects',
          'icon': 'fa fa-random',
          'basePerm': 'vnf_temp_definition',
          'perm': '#list',
          'actions': {
            'create_vnf': {
              'title': 'New Template Object',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            "view_category": {
              "title": "View Category",
              "title_short": "View Category",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            "view_vnf": {
              "title": "View Template Object",
              "title_short": "View Template Object",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view",
            },
            'view_access_control_policy': {
              'title': 'Detail Function Type',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf': {
              'title': 'Edit Template Object',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf': {
              'title': 'Delete Template Object',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'create_function_type': {
              'title': 'Create Function Type',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'status_cli_template_list': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#view'
            },
            'clone_vnf_template': {
              'title': 'Clone Template',
              'title_short': 'Clone Template',
              'icon': 'fa fa-clone',
              'color': 'blue-madison',
              'perm': '#clone'
            },
            'delete_function_type': {
              'title': 'Delete Function Type',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'install_cpe': {
              'title': 'Install Template',
              'title_short': 'install',
              'icon': 'fa fa-arrow-down',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'open_child': {
              'title': 'Open',
              'title_short': 'Open',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison btn-circle',
              'perm': '#delete'
            },
            'close_child': {
              'title': 'Close',
              'title_short': 'Close',
              'icon': 'fa fa-minus-circle',
              'color': 'red-soft btn-circle',
              'perm': '#delete'
            },
            'rollback_template_list': {
              'title': 'Rollback',
              'title_short': 'Rollback',
              'icon': 'fa fa-undo',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete_vnf_version': {
              'title': 'Delete VNF Version',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'uninstall_cpe': {
              'title': 'Uninstall Template',
              'title_short': 'uninstall',
              'icon': 'fa fa-arrow-up',
              'color': 'red-soft',
              'perm': '#edit'
            },

          },
          'fields': {
            'name': 'Name',
            'description': 'Description',
            'vnf_provider': 'VNF Provider',
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\'  is succesfully deleted!',
            'rollback_confirm': 'Do you want to rollback selected device?',
            'rollback_success': 'Selected device is successfully rollback!',
          },

        },
        'create': {},
        'edit': {
          'title': 'Template Object',
          'basePerm': 'vnf_temp_definition',
          'modes': {
            'edit': {
              'title': 'Edit Function Type',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Function Type',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'typeName': {
              'label': ' Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'typeDescription': {
              'label': 'Description',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.typeName}}\' successfully updated',
            'create_success': '\'{{dto.typeName}}\' successfully created',
          },
        },
      },
      'cpe_function_definition': {
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-connectdevelop',
          'basePerm': 'cpe_function_definition',
          'perm': '#list',
          'actions': {
            'create_function_definition': {
              'title': 'New Create Function Definition',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_function_definition': {
              'title': 'Detail Function',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_function_definition': {
              'title': 'Edit Function',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_definition': {
              'title': 'Create Definition',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_function_definition': {
              'title': 'Delete Function Definition',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'portNames': 'Port Names',
            'functionVersion': 'Version',
            'functionName': 'Name',
            'functionDescription': 'Description',
            'typeName': 'Type Name',
            'functionType': 'Function Type',
            'providers': 'VNF Applications',
            'save': 'Save'


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.portNames}}\'?',
            'delete_success': 'Selected \'{{dto.portNames}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'cpe_function_definition',
          'modes': {
            'edit': {
              'title': 'Function Definiton Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Function Definition Create',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_function_definition': {
              'title': 'Detail Function',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'portNames': {
              'label': ' Interfaces Names',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'functionVersion': {
              'label': 'VNF Version',
              'placeholder': 'Please enter device control Ip...',
              'help_line': '',
              'help_block': '',
            },
            'functionName': {
              'label': 'VNF Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'dpdkSupported': {
              'label': 'Supported DPDK ',
              'placeholder': 'Please enter name',
            },
            'functionDescription': {
              'label': 'VNF Description',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'providers': {
              'label': 'VNF Applications',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'functionType': {
              'label': 'Function Type',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            }, 'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.portNames}}\' successfully updated ',
            'create_success': '\'{{dto.portNames}}\'successfully created',
            'delete_confirm_typeName': 'Do you want to delete selected \'{{dto}}\'?',
            'delete_success_typeName': '\'{{dto}}\' is succesfully deleted!',
            'missing_portName': 'Port names should end with either -wan or -lan. Ex: maya-wan or maya-lan',


          },
        },
      },
      'load_balancing': {
        'interface_health': {
          'title': 'Interface Health'
        },
        'lb_options': {
          'title': 'LB Options'
        },
        'wanlb_rules': {
          'title': 'WANLB Rules'
        },
        'messages': {
          'no_interface_health': 'Interface health should be added'
        }
      },
      'snmp': {
        'title': 'SNMP',
        'icon': 'fa fa-cogs',
        'view': {
          'title': 'View',
          'info' : 'Click for Adding View'
        },
        'group': {
          'title': 'Group',
          'info' : 'Click for Adding Group'
        },
        'user': {
          'title': 'User',
          'info' : 'Click for Adding User'
        },
        'listen_address': {
          'title': 'Listen Address',
          'info' : 'Click for Adding Listen Address'
        },
        'engine_id': {
          'label': 'Engine Id',
          'placeholder' : 'Enter Engine ID...',
          'tool_tip' : 'Engine id must contain an even number (from 2 to 36) of hex digits',
        },
        'messages': {
          'engine_id': 'Engine id must contain an even number (from 2 to 36) of hex digits'
        }
      },
      'nat': {
        'src': {
          'title': 'Source NAT',
          'info' : 'Click to Configure Source NAT'
        },
        'dst': {
          'title': 'Destination NAT',
          'info' : 'Click to Configure Destination NAT'
        },
        '121': {
          'title': 'One to One NAT',
          'info' : 'Click to Configure One to One NAT'
        },
      },
      'image_template': {
        'list': {
          'title': 'Image Template',
          'icon': 'fa fa-download',
          'basePerm': 'image_temp_definition',
          'perm': '#list',
          'actions': {
            'add_image': {
              'title': 'New Image Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'edit_template': {
              'title': 'Edit Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'install_template': {
              'title': 'Install Devices',
              'title_short': 'Install',
              'icon': "fa fa-arrow-down",
              'color': 'blue-madison',
              'perm': '#view'
            },
            'status_template': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete_template': {
              'title': 'Delete Template',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
          },
          'fields': {
            'name': 'Name',
            'description': 'Description',
            'status': 'Status',
            'vnf_provider': 'Vnf Provider',
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\'  is succesfully deleted!',

          },

        },
        'edit': {
          'basePerm': 'image_temp_definition',
          'actions': {
          },
          'fields': {
            'templateName': {
              'label': 'Template Name ',
              'placeholder': 'Please enter template name ',
            },
            'description': {
              'label': 'Description',
            },
            'image': {
              'label': 'Image',
            },
            'save_config': {
              'label': 'Save Current Configuration',
            },
          },
          'messages': {
            'save_success': '\'{{dto.typeName}}\' successfully updated',
            'create_success': '\'{{dto.typeName}}\' successfully created',
          },
        },
      },
    },
    'ztp': {
      'setup-mail': {
        'list': {
          'title': 'ZTP Setup Mail Management',
          'icon': 'fa fa-cogs',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'send_mail': {
              'title': 'Send New Setup Email',
              'title_short': 'Send New Setup Email',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            // 'delete_mail': {
            //   'title': 'Delete Flavor',
            //   'title_short': 'Delete',
            //   'icon': 'fa fa-trash-o',
            //   'color': 'btn-outline uppercase red-sunglo',
            //   'perm': '#delete'
            // }
          },
          'fields': {
            'recipientEmail': 'Recipient Email Address',
            'dateTimeSent': 'Date Time Sent',
            'uuid': 'UUID',
            'deviceName': 'Device Name',
            'urlInfo': 'url Info',
            'serverIP': 'Server IP',
            'dpdkSupported': 'DPDK Support',
            'bridgeName': 'Bridge Name',
            'howBridgeGetsIP': 'How Bridge Gets IP',
            'bridgeInterface': 'Bridge Interface',
            'bridgeIP': 'Bridge IP',
          },
          'messages': {
            // 'delete_success': '\'Flavor \'{{dto.name}}\' Deleted Successfully',
            // 'delete_confirm': 'Are You Sure That You Want to Delete Flavor \'{{dto.name}}\'?',
          },
        },
        'create': {
          'basePerm': 'ztp',
          'title': 'ZTP Setup Mail Management',
          'icon': 'fa fa-cogs',
          'fields': {
            'recipientEmail': {
              'label': 'Recipient Email Address',
              'placeholder': 'Enter Recipient Email Address...',
            },
            'cpeDevice': {
              'label': 'CPE Device',
            },
            'serverIP': {
              'label': 'Server IP',
            },
            'dpdkSupported': {
              'label': 'DPDK Support',
            },
            'bridge': {
              'label': 'Communication Bridge',
            },
            'howBridgeGetsIP': {
              'label': 'How Bridge Gets IP',
            },
            'bridgeInterface': {
              'label': 'Bridge Interface',
            },
            'bridgeIP': {
              'label': 'Bridge IP',
            },
          },
          'messages': {
            'send_success': 'Email for Setup CPE Sent Successfully',
            'static_ip': 'If Bridge Would Get IP Statically, IP Should Be Defined on CPE Port Config',
            'dhcp_interface': 'If Bridge Would Get IP with DHCP Bridge Interface Should Be Defined on CPE Type Definition',
          },
        },
      },
      'pending-device': {
        'list': {
          'title': 'ZTP Pending Device Management',
          'icon': 'fa fa-level-up',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'register': {
              'title': 'Register & Create Network',
              'title_short': 'Register & Create Network',
              'icon': 'fa fa-power-off',
              'color': 'blue-madison',
              'perm': '#edit',
            },
            'enable_ansible_connection': {
              'title': 'Enable Ansible Connection',
              'title_short': 'Enable Ansible Connection',
              'icon': 'fa fa-key',
              'color': 'blue-madison',
              'perm': '#edit',
            },
            'delete_pending_device': {
              'title': 'Delete Device',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'uuid': 'UUID',
            'status': 'Status',
            'registrationDateTime': 'Registration Date&Time'
          },
          'messages': {
            'registration_confirm': 'Are You Sure You Want to Register Device \'{{dto.uuid}}\' and Create Its Network?',
            'registration_sent': 'Registration & Network Creation Request Sent to Device \'{{dto.uuid}}\' Successfully',
            'enable_confirm': 'Are You Sure That You Want to Enable Ansible Connection to Device \'{{dto.uuid}}\'?',
            'enable_sent': 'Ansible Can Connect to Device \'{{dto.uuid}}\' Successfully',
            'deletion_confirm': 'Are You Sure You Want to Delete Pending Device \'{{dto.uuid}}\' and All Related Information?',
            'deletion_success': 'Pending Device \'{{dto.uuid}}\' and All Related Information Deleted Successfully',
            // 'delete_confirm': '\'{{dto.cpeDeviceName}}\' isimli CPE cihazını silmek istediğinize emin misiniz?',
            // 'delete_success': '\'{{dto.cpeDeviceName}}\' isimli CPE cihazı başarıyla silinmiştir!',
          },
        },
      },
      'registered-device': {
        'list': {
          'title': 'ZTP Registered Device Management',
          'icon': 'fa fa-plug',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'choose': {
              'title': '-Choose Action',
              'perm': '#create',
            },
            'recreate_network': {
              'title': 'Recreate Network',
              'perm': '#create',
            },
            'display_ansible_commands': {
              'title': 'Display Ansible Commands',
              'perm': '#create',
            },
            'enable_ansible_connection': {
              'title': 'Enable Ansible Connection',
              'perm': '#create',
            },
          },
          'fields': {
            'cpename': 'CPE Name',
            'uuid': 'UUID',
            'publicIp': 'IP',
            'networkStatus': 'Network Status',
          },
          'messages': {
            'recreate_confirm': 'Are You Sure That You Want to Recreate Network of Device \'{{dto.uuid}}\'?',
            'recreate_sent': 'Network Recreation Request Sent to Device \'{{dto.uuid}}\' Successfully',
            'enable_confirm': 'Are You Sure That You Want to Enable Ansible Connection to Device \'{{dto.uuid}}\'?',
            'enable_sent': 'Ansible Can Connect to Device \'{{dto.uuid}}\' Successfully',
          },
        },
      },
      'flavor': {
        'list': {
          'title': 'ZTP Flavor Management',
          'icon': 'fa fa-paint-brush',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'create_flavor': {
              'title': 'Add Flavor',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'edit_flavor': {
              'title': 'Edit Flavor',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_flavor': {
              'title': 'Delete Flavor',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': 'Name',
            'rootDisk': 'Disk Size',
            'vcpus': 'Number of Virtual CPUs',
            'ram': 'Memory',
          },
          'messages': {
            'delete_success': '\'Flavor \'{{dto.name}}\' Deleted Successfully',
            'delete_confirm': 'Are You Sure That You Want to Delete Flavor \'{{dto.name}}\'?',
          },
        },
        'edit': {
          'basePerm': 'ztp',
          'title': 'ZTP Flavor Management',
          'icon': 'fa fa-paint-brush',
          'fields': {
            'name': {
              'label': 'Name',
              'placeholder': 'Enter Name...',
            },
            'rootDisk': {
              'label': 'Disk Size(GB)',
              'placeholder': 'Enter Disk Size...',
            },
            'vcpus': {
              'label': 'Number of Virtual CPUs',
              'placeholder': 'Enter Number of Virtual CPUs...',
            },
            'ram': {
              'label': 'Memory(MB)',
              'placeholder': 'Enter Memory...',
            },
          },
          'messages': {
            'save_success': '\'Flavor \'{{dto.name}}\' Updated Successfully',
            'create_success': '\'Flavor \'{{dto.name}}\' Created Successfully',
            'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
          },
        },
      },
      'image': {
        'list': {
          'title': 'ZTP Image Management',
          'icon': 'fa fa-download',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'create_image': {
              'title': 'Add Image',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'delete_image': {
              'title': 'Delete Image',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'filename': 'File Name',
            'filepath': 'File Path',
          },
          'messages': {
            'delete_success': 'Image \'{{dto.filename}}\' Deleted Successfully',
            'delete_confirm': 'Are You Sure That You Want to Delete Image \'{{dto.filename}}\'?',
          },
        },
        'edit': {
          'basePerm': 'ztp',
          'title': 'ZTP Image Management',
          'icon': 'fa fa-download',
          'fields': {
            'file': {
              'label': 'File',
              'placeholder': 'Choose File...',
            },
          },
          'messages': {
            'create_success': '\'Image \'{{dto.name}}\' Uploaded Successfully',
            'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
            'size_exceeded': 'Maximum File Size Exceeded',
          },
        },
      },
      'vnf': {
        'list': {
          'title': 'Ztp Virtual Function Management',
          'icon': 'fa fa-mixcloud',
          'basePerm': 'ztp',
          'perm': '#list',
          'actions': {
            'add_vnf': {
              'title': 'Add VNF',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'delete_vnf': {
              'title': 'Delete VNF',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
          },
          'fields': {
            'vmName': 'Virtual Machine',
            'rootDisk': 'Storage Size',
            'vcpus': 'CPU Core',
            'ram': 'Memory Size',
            'cpe': {
              'label': 'CPE',
            },
          },
          'messages': {
            'warning': 'Choose CPE From the List Below to List Its Virtual Functions',
            'delete_success': 'Deletion Request of VNF \'{{dto.vmName}}\' Sent to Device Successfully',
            'delete_confirm': 'Are You Sure That You Want to Delete VNF \'{{dto.vmName}}\'?',
          },
        },
        'add': {
          'basePerm': 'ztp',
          'title': 'Ztp Virtual Function Management',
          'icon': 'fa fa-mixcloud',
          'fields': {
            'cpe': {
              'label': 'CPE',
            },
            'vm_name': {
              'label': 'Virtual Machine Name',
              'placeholder': 'Enter Virtual Machine Name...',
            },
            'image': {
              'label': 'Image',
            },
            'flavor': {
              'label': 'Flavor',
            },
            'function_definition': {
              'label': 'Function Definition',
            },
            'vnc_pass': {
              'label': 'VNC Password',
              'placeholder': 'Enter VNC Password...',
            },
          },
          'messages': {
            'request_success': '\'VNF Addition Request Sent Successfully',
            'validation_error': 'Form Fields Are Empty or Have Errors. Please Check Form Elements.',
          },
        },
      },
      'device_export': {
        'list': {
          'title': 'Export Devices',
          'icon': 'fa fa-info-circle',
          'basePerm': 'ztp',
          'perm': '#list',
          // 'actions': {
          //   'register': {
          //     'title': 'Register & Create Network',
          //     'title_short': 'Register & Create Network',
          //     'icon': 'fa fa-power-off',
          //     'color': 'blue-madison',
          //     'perm': '#edit',
          //   },
          // },
          'fields': {
            'uuid': 'UUID',
            'name': 'DeviceName',
            'controllerIps': 'ControllerIPs',
            'bridgeInfo': 'BridgeInfo',
            'functionInfo': 'FunctionInfo'
          },
          'messages': {
            // 'registration_confirm': 'Are You Sure That You Want to Register Device \'{{dto.uuid}}\' and Create Its Network?',
            // 'registration_sent': 'Registration & Network Creation Request Sent to Device \'{{dto.uuid}}\' Successfully',
            // 'delete_confirm': '\'{{dto.cpeDeviceName}}\' isimli CPE cihazını silmek istediğinize emin misiniz?',
            // 'delete_success': '\'{{dto.cpeDeviceName}}\' isimli CPE cihazı başarıyla silinmiştir!',
          },
          'buttons': {
            'select_all': 'Select All',
            'unselect_all': 'Unselect All',
            'export_excel': 'Export to Excel',
            'with_mac': 'Generate Mac Addresses',
          },
        },
      },
    },
    'vnf': {
      'zone_title': 'Zone',
      'protocol_title': 'Protocol Group',
      'network_title': 'Network Group',
      'address_title': 'Address Group',
      'dhcp_server_title': 'DHCP Server',
      'dhcp_relay_title': 'DHCP Relay',
      'web_proxy_title': 'Web Proxy',
      'wpad_settings_title': 'Whitelist Settings',
      'url_filtering_title': 'URL Filtering',
      'vpn_objects_title': 'VPN Objects',
      'group_configuration_title': 'Group Configuration',
      'rule_configuration_title': 'Rule Configuration',
      'vnf': 'VNF Device Description',
      'icon': 'fa fa-cubes',
      'perm': 'common:view',
      'nfv': {
        'list': {
          'title': 'Network Functions',
          'icon': 'fa fa-empire',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_function_nfv_automatic_backup': {
              'title': 'Create New Automatic Backup',
              'title_short': 'New',
              'icon': 'fa fa-database',
              'color': 'blue-madison',
              'perm': '#create_automatic_backup',
            },
            'create_function_nfv_manual_backup': {
              'title': 'Create New Manual Backup',
              'title_short': 'New',
              'icon': 'fa fa-cloud-download',
              'color': 'blue-madison',
              'perm': '#create_manuel_backup',
            },
            'create_function_nfv_restore_backup': {
              'title': 'Restore Backup',
              'title_short': 'New',
              'icon': 'fa fa-undo',
              'color': 'blue-madison',
              'perm': '#restore_backup',
            },
            'enable_ansible_connection': {
              'title': 'Enable ZTP Connection',
              'title_short': 'Enable Ansible Connection',
              'icon': 'fa fa-key',
              'color': 'blue-madison',
              'perm': '#enable_ztp',
            },
            'stop_nfv': {
              'title': 'Stop Network Function',
              'title_short': 'Stop Network Function',
              'icon': 'fa fa-stop',
              'color': 'blue-madison',
              'perm': '#stop_network_function',
            },
            'start_nfv': {
              'title': 'Start Network Function',
              'title_short': 'Start Network Function',
              'icon': 'fa fa-play',
              'color': 'blue-madison',
              'perm': '#start_network_function',
            },
            'reboot_nfv': {
              'title': 'Reboot Network Function',
              'title_short': 'Reboot Network Function',
              'icon': 'fa fa-repeat',
              'color': 'blue-madison',
              'perm': '#edit',
            },
            'view_function_nfv': {
              'title': 'Detail Network Functions',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_function_nfv': {
              'title': 'Edit Network Functions',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_definition': {
              'title': 'Create Network Function',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_function_nfv': {
              'title': 'Delete Network Functions',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'cpeDeviceId': 'Devices Id',
            'cpeDeviceName': 'Devices Name',
            'controllerIps': 'Controller Ip',
            'centralCpe': 'SD-WAN Gateway',
            'dpdkSupported': 'DPDK Supported',
            'dpdkVersion': 'Dpdk Version',
            'back': 'Back',
            'nextSave': 'Next&Save'
          },
          'messages': {
            'save_success': 'successfully selected',
            'assign_vnf_app': 'Vnf Application should be assigned to the device',
            'no_running_vnf': 'There Is No VNF Stated as "Running" on Device',
            'no_shut_off_vnf': 'There Is No VNF Stated as "Shut Off" on Device',
            "stop": "Do you want to stop Network Function?",
            "start": "Do you want to start Network Function?",
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Nfv',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Nfv',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create_function_nfv': {
              'title': 'Create New Backup',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'deviceName': {
              'label': 'Device Name',
              'placeholder': 'Please enter device name...',
              'help_line': '',
              'help_block': '',
            },
            'deviceControlIp': {
              'label': 'Controller IP',
              'placeholder': 'Please enter controller Ip...',
              'help_line': '',
              'help_block': '',
            },
            'deviceType': {
              'label': 'Device Type',
              'placeholder': 'Please enter device type...',
              'help_line': '',
              'help_block': '',
            },
            'dpdkVersion': {
              'label': 'DPDK Version',
            },
            'centralCpe': {
              'label': 'SD-WAN Gateway',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
            'dpdkSupported': {
              'label': 'DPDK Support',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            }, 'back': {
              'label': 'Back',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            }, 'nextSave': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': '\'{{dto.cpeDeviceName}}\' device is successfully updated.',
            'create_success': '\'{{dto.cpeDeviceName}}\' device is successfully created.',
          },
        },
      },
      'automatic_backup': {
        'title': 'Network Functions',
        'icon': 'fa fa-empire',
        'list': {
          'title': 'Automatic Backup',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_automatic_backup': {
              'title': 'Create Automatic Backup ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_automatic_backup': {
              'title': 'Detail Automatic Backup',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_automatic_backup': {
              'title': 'Edit Automatic Backup',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_automatic_backup': {
              'title': 'Delete Automatic Backup',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'title': 'Automatic Backup Interval',
            'description': 'Description',
            'delete': 'delete',
            'save': 'Save',
          },

          'messages': {
            'delete_confirm': 'This will reset the entire Automatic Backup configuration, are you sure?',
            'delete_success': 'Selected  Automatic Backup Settings are succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Automatic Backup',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Automatic Backup',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'value': {
              'label': 'Value'
            },
            'unit': {
              'label': 'Unit'
            }, 'delete': {
              'label': 'Delete'
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'delete_confirm': 'This will reset the entire Manual Backup configuration, are you sure?',
            'delete_success': 'Selected  Manual Backup Settings are succesfully deleted!',
            'save_success': 'Automatic Backup  is successfully created.',
            'save_relay_success': 'Automatic Backup  is succesfully created.',
            'create_success': 'Automatic Backup  is successfully created.',
            'limit_value': 'Value must be range 1-999.',

          },
        },
      },
      'manual_backup': {
        'title': 'Network Functions',
        'icon': 'fa fa-empire',
        'list': {
          'title': 'Manual Backup',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_manual_backup': {
              'title': 'Create Manual Backup',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_manual_backup': {
              'title': 'Detail Manual Backup',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_manual_backup': {
              'title': 'Edit Manual Backup',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_manual_backup': {
              'title': 'Delete Manual Backup',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'title': 'Manual Backup',
            'save': 'Save',
          },

          'messages': {
            'delete_confirm': 'This will reset the entire Manual Backup configuration, are you sure?',
            'delete_success': 'Selected  Manual Backup Settings are succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Web Proxy',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Web Proxy',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'description': {
              'label': 'Description',
            },

            'value': {
              'label': 'Value'
            },
            'unit': {
              'label': 'Unit'
            },
            'delete': {
              'label': 'Delete'
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'delete_confirm': 'This will reset the entire Manual Backup configuration, are you sure?',
            'delete_success': 'Selected  Manual Backup Settings are succesfully deleted!',
            'save_success': 'Manual Backup is successfully created.',
            'save_relay_success': 'Manual Backup is succesfully created.',
            'create_success': 'Manual Backup is successfully created.',
          },
        },
      },
      'restore_backup': {
        'title': 'Network Functions',
        'icon': 'fa fa-empire',
        'list': {
          'title': 'Network Functions',
          'icon': 'fa fa fa-empire',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_restore_backup': {
              'title': 'Create Restore Backup',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_restore_backup': {
              'title': 'Detail Restore Backup',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'restore_backup': {
              'title': 'Restore Backup',
              'title_short': 'Restore',
              'icon': 'fa fa-undo',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'template_backup': {
              'title': 'Template Backup',
              'title_short': 'Restore',
              'icon': 'fa fa-window-restore',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_backup': {
              'title': 'Delete Restore Backup',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'title': 'Restore Backup',
            'save': 'Save',
          },

          'messages': {
            'restore_confirm': 'Restoring backup will require a reboot for this VNF Function, this may take up to 2 minutes to complete...',
            'restore_success': 'Selected Backup Settings are succesfully restored!',
            'delete_confirm': 'Selected Backup configuration will delete , are you sure?',
            'delete_success': 'Selected Backup Setting is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Restore Backup',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Restore Backup',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'description': {
              'label': 'Description',
            },
            'title': {
              'label': 'Restore Backup'
            },
            'template_title': {
              'label': 'Template Backup'
            },
            'value': {
              'label': 'Value'
            },
            'unit': {
              'label': 'Unit'
            },
            'name': {
              'label': 'name'
            },
            'delete': {
              'label': 'Delete'
            },
            'template_list': {
              'label': 'Template List'
            },
            'device_list': {
              'label': 'Device List'
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'delete_confirm': 'This will reset the entire Restore Backup configuration, are you sure?',
            'delete_success': 'Selected  Restore Backup Settings are succesfully deleted!',
            'save_success': 'Restore Backup is successfully created.',
            'save_relay_success': 'Restore Backup is succesfully created.',
            'create_success': 'Restore Backup is successfully created.',
            'same_error': 'Please select different template!',
          },
        },
      },
      'virsh_list': {
        'header': 'Vnf Selection',
        'title': 'Network Functions',
        'icon': 'fa fa-empire',
        'fields': {
          'vnf': {
            'label': 'VNF',
            'placeholder': 'Select VNF'
          },
          'device_name': {
            'label': 'Device Name',
          },
          'operation': {
            'label': 'Operation',
          }
        },
        'messages': {
          'request_sent': 'Request Sent to Device Successfully',
        },
      },

      'dhcp_server': {
        'title': 'DHCP',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'DHCP',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_dhcp_server': {
              'title': 'Create New DHCP Server ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'restart_dhcp_server': {
              'title': 'Restart',
              'title_short': 'Restart',
              'icon': 'fa fa-refresh',
              'color': 'default',
              "perm": "#list"
            },
            'view_dhcp_server': {
              'title': 'View DHCP Server',
              'title_short': 'View',
              'icon': 'fa fa-eye',
              'color': 'default',
              "perm": "#list"
            },
            'edit_dhcp_server': {
              'title': 'Edit DHCP Server',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_dhcp_server': {
              'title': 'Delete DHCP Server',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'sharedNetworkName': 'Scope Name',
            'start': 'Range First Ip',
            'end': 'Range Last Ip',
            'vlanId': 'Network Calculator',
            'networkIp': 'Scope Network',
            'wpadUrl': 'Wpad Url',
            'enableMapping': 'Reserved IP',
            'mappingName': 'Host Name',
            'mappingIp': 'Host IP Address',
            'mappingMac': 'Host MAC Address',
            'rangeId': 'Range ID',
            'relayInterface': 'Relay Interface',
            'relayServer': 'Server Ip',
            'enableStatic': 'DHCP Static Route',
            'staticRouteRouter': 'Nexthop',
            'staticRouteSubnet': 'Destination Subnet Ip',
            'staticSubnetPrefix': 'Subnet Prefix',
            'interfaceMTUSize': 'Mtu Size',
            'relayInterfaces': 'Relay Interface',
            'leases': 'Leases',
            'available': 'Available',
            'usage': 'Usage',
            'save': 'Next&Save',
          },

          'messages': {
            'delete_confirm': ' ' + '<br>' + 'Caution!\n' +
              '\n' +
              'Before delete subnet make sure it is not in use, also make sure there is at least one Scope with real interface remains in case of having many subnets still active. if this is the only configured scope preceed to delete.\n' +
              '\n' +
              'Do you want to proceed ?',
            'delete_success': 'Selected  \'{{dto.networkName}}\' is succesfully deleted!',
            'delete_relay_confirm': 'Do you want to delete dhcp-relay?',
            'restart_success': 'DHCP server is restarted successfully'

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Dhcp Server',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Dhcp Server',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              "perm": "#list"
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'networkIp': {
              'label': 'Scope Network',
              'placeholder': 'Please enter ip (x.x.x.x)...',
            },
            'networkSubnet': {
              'label': 'Shared Network Subnet',
              'placeholder': 'Please enter network mask /x...',
            },
            'defaultGateway': {
              'label': 'Default Gateway',
              'placeholder': 'Please enter gateway ip...',
              'help_line': '',
              'help_block': '',
            },
            'dnsServer': {
              'label': 'Dns Server',
              'placeholder': 'Please enter dns server ip...',
            },
            'Option51Lease': {
              'label': 'Lease Time',
              'placeholder': 'DHCP lease time in seconds (0-4294967295)',
            },
            'sharedNetworkName': {
              'label': 'Scope Name',
              'placeholder': 'DHCP shared network name [REQUIRED]',
            },
            'relayInterfaces': {
              'label': 'Relay Interface',
              'placeholder': 'DHCP Relay Interface Nme [REQUIRED]',
            },
            'day': {
              'label': 'Day',
            },
            'reserved': {
              'label': 'Reserved',
            },
            'mtuSize': {
              'label': 'Interface MTU Size',
            },
            'hour': {
              'label': 'HH',
            },
            'minute': {
              'label': 'MM',
            },
            'relayIsEnable': {
              'label': 'DHCP Relay ',
            },
            'relayInterface': {
              'label': 'Relay Interface',
              'placeholder': 'Min 2 Relay Interface Needed [REQUIRED]',
            },
            'relayServer': {
              'label': 'Server Ip',
              'placeholder': 'Relay server address',
            },
            'enableWpad': {
              'label': 'DHCP Wpad-Url',
            },
            'rangeId': {
              'label': 'Range ID',

            },
            'start': {
              'label': 'Range First Ip'
            },
            'end': {
              'label': 'Range Last Ip'
            },
            'enableMapping': {
              'label': 'Reserved Ip'

            },
            'mappingName': {
              'label': 'Mapping Name'

            },
            'mappingIp': {
              'label': 'IP address'
            },
            'mappingMac': {
              'label': 'MAC address'
            },
            'enableStatic': {
              'label': 'DHCP Static Route'
            },
            'staticRouteRouter': {
              'label': 'Nexthop'
            },
            'staticRouteSubnet': {
              'label': 'Destination Subnet Ip'

            },
            'staticSubnetPrefix': {
              'label': 'Subnet Prefix'
            },
            'wpadUrl': {
              'label': 'Wpad Url',
              'placeholder': 'ex: http://your.web.server/wpad.dat',
            },
            'interfaceMTUSize': {
              'label': 'Mtu Size'

            },
            'dhcpStatus': {
              'label': 'Dhcp Status(Enable)'

            },
            'dhcpStatusDisable': {
              'label': 'Dhcp Status(Disable)'

            },
            'leaseTime': {
              'label': 'Lease Time'
            },
            'outboundInterface': {
              'label': 'Inbound & Outbound Interface'
            },


            'leases': {
              'label': 'Leases'
            },
            'available': {
              'label': 'Available'
            },
            'usage': {
              'label': 'Usage'
            },
            'vlanId': {
              'label': 'Network Calculator'
            },
            'enableDhcp': {
              'label': 'DHCP SERVER',
            }, 'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.networkName}}\' is successfully updated.',
            'save_relay_success': 'dhcp-relay is succesfully created',
            'create_success': '\'{{dto.networkName}}\' is successfully created',
            'delete_success': 'dhcp-relay is deleted succesfully',
            'relay_confirm': 'Do you want to delete selected server?',
            'interface_confirm': 'Do you want to delete selected interface?',
            'same_range_address': 'Same Range Address cannot be added multiple times',
            'empty_field_error': 'Form fields have some errors or they are empty. Please check your input.',
            'same_ip_address': 'Same Ip & mac address cannot be added multiple times',
            'relay_server_deleted': 'Selected server succesfully deleted',
            'interface_deleted': 'Selected interface succesfully deleted',
            'nexthopError': 'Please enter nexthop ip',
            'destinationError': 'Please enter destination subnet ip',
            'unique_name':'Please enter unique scope name'

          },
        },
      },
      'dhcp_lease': {
        'title': 'DHCP',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'DHCP',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_dhcp_lease': {
              'title': 'New Create DHCP Lease ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_dhcp_lease': {
              'title': 'Restart',
              'title_short': 'Restart',
              'icon': 'fa fa-refresh',
              'color': 'default',
              'perm': '#view'
            },
            'edit_dhcp_lease': {
              'title': 'Reserve',
              'title_short': 'Edit',
              'icon': 'fa fa-angle-double-down ',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_dhcp_lease': {
              'title': 'Delete',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },

          },
          'fields': {
            'hostName': 'Host Name',
            'macAddress': 'Mac Address ',
            'leaseExpirationTime': 'Lease Expiration Time',
            'ipAddress': 'Ip Address',
            'leaseStartTime': 'Lease Start',
            'leaseExpirationDate': 'Lease Expiration',
            'leaseFromPool': 'Lease From Pool',
            'leaseRemainingTime': 'Lease Remaining Time',
            'leaseState': 'Lease State',
            'leaseStartDate': 'Lease Start Date',
            'assignTo': 'Reserve'

          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected  dhcp server ',
            'delete_success': 'Selected  dhcp is succesfully deleted!',
            'assign_success': ' IP address reserved successfully',
            'assign_delete': 'Reserved IP successfully deleted',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Dhcp Lease',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Dhcp Lease',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'hostName': {
              'label': 'Host Name',
              'placeholder': 'Please enter ip (x.x.x.x)...',
            },
            'macAddress': {
              'label': 'Mac Address',
              'placeholder': 'Please enter network mask /x...',
            },
            'leaseExpirationTime': {
              'label': 'Lease Expiration Time',
              'placeholder': 'Please enter gateway ip...',
              'help_line': '',
              'help_block': '',
            },
            'ipAddress': {
              'label': 'Ip Address',
              'placeholder': 'Please enter dns server ip...',
            },
            'assignTo': {
              'label': 'Assign to Mac Address',
              'placeholder': 'Please enter dns server ip...',
            },
            'leaseStartTime': {
              'label': 'Lease Start Time',
              'placeholder': 'DHCP lease time in seconds (0-4294967295)',
            },
            'leaseExpirationDate': {
              'label': 'Lease Expiration Date',
              'placeholder': 'DHCP shared network name [REQUIRED]',
            },
            'leaseFromPool': {
              'label': 'Lease From Pool',
              'placeholder': 'DHCP Relay Interface Nme [REQUIRED]',
            },
            'leaseRemainingTime': {
              'label': 'Lease Remaining Time ',
            },
            'leaseState': {
              'label': 'Lease State',
              'placeholder': 'Min 2 Relay Interface Needed [REQUIRED]',
            },
            'leaseStartDate': {
              'label': 'Lease Start Date',
              'placeholder': 'Relay server address',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Dhcp is successfully updated.',
            'save_relay_success': 'dhcp-relay is succesfully created',
            'create_success': 'Dhcp is successfully created',
            'delete_success': 'dhcp-relay is deleted succesfully',

          },
        },
      },

      'web_proxy': {
        'title': 'VNF Configuration',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_web_proxy': {
              'title': 'Create Web Proxy ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_web_proxy': {
              'title': 'Detail Web Proxy',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_web_proxy': {
              'title': 'Edit Web Proxy',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_web_proxy': {
              'title': 'Delete Web Proxy',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'web_proxy_helpLine': 'When the web proxy settings are saved, URL Filtering tab will be active. ',
            'web_proxy_title': 'Web Proxy',
            'whitelist_title': 'Whitelist Settings',
            'whitelist_description': 'Click to configure whitelist settings',
            'web_proxy_description': 'Click to configure web proxy',
            'listenAddressIp': 'Listen Address',
            'listenAddressPort': 'Port',
            'cacheSize': 'Cache Size',
            'transparentProxyActivated': 'Transparent',
            'ldapAuthenticationActivated': 'LDAP',
            'authentication': 'Authentication',
            'baseDn': 'Base-DN',
            'bindDn': 'Bind-DN',
            'filterExpression': 'Filter Expression',
            'ldapPassword': 'Password',
            'ldapServer': 'Server',
            'ldapPort': 'Port',
            'usernameAttribute': 'Username Attribute',
            'useSsl': 'USE SSL',
            'bypassProxies': 'Bypass Proxy',
            'bypassSide': 'Criteria',
            'bypassAddress': 'Address',
            'save': 'Next&Save',
          },

          'messages': {
            'delete_confirm': 'This will reset the entire web proxy configuration, are you sure?',
            'delete_success': 'Selected  Web Proxy Settings is succesfully deleted!',
            'delete_rule_confirm':'Do you want to delete selected rule?',
            'rule_delete_success':'Selected rule is succesfully deleted',
            'used_rule_messages':'Selected group is used in rule configuration'

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Web Proxy',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Web Proxy',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'listenAddressIp': {
              'label': 'Listen Address',
              'placeholder': 'Please enter ip (x.x.x.x)...',
            },
            'listenAddressPort': {
              'label': 'Port',
              'placeholder': 'Between 1025-65535 ',
            },
            'cacheSize': {
              'label': 'Cache Size',

            },
            'transparentProxyActivated': {
              'label': 'Transparan Proxy',
            },
            'ldapAuthenticationActivated': {
              'label': 'LDAP',
            },
            'baseDn': {
              'label': 'Base-DN',
            },
            'bindDn': {
              'label': 'Bind-Dn',
            },
            'filterExpression': {
              'label': 'Filter Expression ',
            },
            'ldapPassword': {
              'label': 'Password',
            },
            'ldapServer': {
              'label': 'Server',
            },
            'ldapPort': {
              'label': 'Port',
            },
            'usernameAttribute': {
              'label': 'Username Attribute',

            },
            'usessl': {
              'label': 'USE SS'
            },
            'bypassProxies': {
              'label': 'Bypass Proxy'
            },
            'bypassSide': {
              'label': 'Criteria'

            },
            'bypassAddress': {
              'label': 'Address'

            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Web Proxy  is successfully created.',
            'save_relay_success': 'Web Proxy is succesfully created.',
            'create_success': 'Web Proxy is successfully created.',
            'delete_success': 'Web Proxy is deleted succesfully.',
            'error_same_port': 'Same listen address ip cannot be added multiple times.',
            'subnetMask_messages': 'Subnet mask value must be range 1025-65535',
            'port_messages': 'listen port will be set as default port:3128',
            'ipAddressPortList': 'Enter Listen Address and Port to create Web Proxy',
            'ipAddressPort': 'In order to delete this, please create a new one and select that in whitelist settings Listen Address IP field',
            'proxy_error': 'Please add Listen Address-Port pair and select Listen Address IP together to create Web Proxy with Whitelist Settings.'

          },
        },
      },
      'wpad_settings': {
        'title': 'VNF Configuration',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_wpad_settings': {
              'title': 'Create Whitelist Settings ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_wpad_settings': {
              'title': 'Detail Whitelist Settings',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_wpad_settings': {
              'title': 'Edit Whitelist Settings',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_wpad_settings': {
              'title': 'Delete Whitelist Settings',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'urlTitle': 'URL to Bypass Proxy',
            'ip': 'Source Address',
            'mask': 'Subnet Mask',
            'url': 'URL',
            'save': 'Next&Save',
            'listUrl': 'Whitelist URL *',
            'listenAddress': 'Listen Address IP',
            'port': 'Port',
            "urlInvalid": "Please enter valid url without turkish characters."



          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.networkName}}\' ',
            'delete_success': 'Selected  \'{{dto.networkName}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Whitelist Settings',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Whitelist Settings',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Create Whitelist Settings',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'WPAD Details',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'WPAD Delete',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'urlTitle': {
              'label': 'URL to Bypass Proxy',
            },
            'url': {
              'label': 'URL',
            },
            'ip': {
              'label': 'Ip',

            },
            'mask': {
              'label': 'Mask',
              'placeholder': 'Between 1-32',
            },
            'port': {
              'label': 'Port',
              'placeholder': 'Between 1025-65535',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'WPAD is successfully created.',
            'save_relay_success': 'WPAD is succesfully created.',
            'create_success': 'WPAD is successfully created.',
            'delete_success': 'WPAD is deleted succesfully',
            'url_messages': ' Same url cannot be added multiple times.',
            'mask_messages': ' Same ip and mask value cannot be added multiple times.',
            'networkMask_messages': 'Subnet mask value must be range 1-32',
            'port_messages': 'Port value must be range 1025-65535',
            "port_range": "Port range: <1025-65535>",
            'selectedVyosIp': 'Select Listen Address Ip to create Whitelist Settings',
            'url_message': 'Add at least one whitelist url',
            'delete_url': 'In order to delete this, please add new url',



          },
        },
      },
      'url_filtering': {
        'title': 'VNF Configuration',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_url_filtering': {
              'title': 'Create URL Filtering ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_url_filtering': {
              'title': 'Detail URL Filtering',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_url_filtering': {
              'title': 'Edit URL Filtering',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_url_filtering': {
              'title': 'Delete URL Filtering',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'listOfSourceGroups': 'Source Group',
            'listOfRules': 'URL Filter Rules',
            'redirectUrl': 'Redirect URL',
            'defaultActionIsAllow': 'Default Action',
            'autoUpdateTime': 'Time',
            'time': 'Time',
            'blacklistUrl': 'Blacklist URL',
            'ruleId': 'Rule Id',
            'belongsToGroup': 'Source Group',
            'actionToPerform': 'Action To Perform',
            'targetToFilter': 'Target To Filter',
            'groupName': 'Group Name',
            'groupAddress': 'Group Address',
            'groupType': 'Group Type',
            'updateNow': 'Update Now',
            'action': 'Action',
            'enableUrlFilter': 'Enable Url Filter',
            'enableAutoUpdate': 'Auto Update',
            'enableRedirectUrl': 'Redirect URL',
            'save': 'Next&Save',
            'urlFilterSettings':'URL Filter Settings',
            'panelDesc':'Click to configure url filter settings',
            'ruleConf':'Rule Configuration',
            "ruleDesc": "Click to configure rule configuration",
            "urlInvalid": "Please enter valid url without turkish characters."

          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected url',
            'delete_success': 'Selected  url is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Url Filter',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Url Filter',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'listOfSourceGroups': {
              'label': 'Source Group',
            },
            'listOfRules': {
              'label': 'URL Filter Rules',
            },
            'redirectUrl': {
              'label': 'Redirect URL',

            },
            'defaultActionIsAllow': {
              'label': 'Default Action',
            },
            'autoUpdateTime': {
              'label': 'Auto Update',
            },
            'enableRedirectUrl': {
              'label': 'Redirect URL',
            },
            'time': {
              'label': 'Time',
            },
            'blacklistUrl': {
              'label': 'Blacklist URL',
            },
            'ruleId': {
              'label': 'Rule Id',
            },
            'belongsToGroup': {
              'label': 'Source Group',
            },
            'actionToPerform': {
              'label': 'Action To Perform',
            },
            'targetToFilter': {
              'label': 'Target To Filter',
            },
            'groupName': {
              'label': 'Group Name',

            },
            'groupAddress': {
              'label': 'Group Address',
              'placeholder':'Ip with subnet mask'
            },
            'groupType': {
              'label': 'Group Type'
            },
            'updateNow': {
              'label': 'Update Now'

            },
            'action': {
              'label': 'Action'

            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'url-filtering  is successfully updated.',
            'save_relay_success': 'url-filtering is succesfully created.',
            'create_success': 'url-filtering is successfully created.',
            "delete_success": "url-filtering is deleted succesfully.",
            "redirectUrl": "Please enter valid url without turkish characters. Ex:https://example.com"
          },
        },
      },
      'group_configuration': {
        'title': 'VNF Configuration',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_group_configuration': {
              'title': 'Create Group Configuration ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_group_configuration': {
              'title': 'Detail Group Configuration',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_group_configuration': {
              'title': 'Edit Group Configuration',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_group_configuration': {
              'title': 'Delete Group Configuration',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'groupName': 'Name',
            'groupAddress': 'Address',
            'address': 'Address',
            'name': 'Name',
            'create': 'New Group',
            'addToList':'Add To List',
            'cancel':'Cancel',
            'save': 'Add To List',
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.groupName}}\' ',
            'delete_success': 'Selected  \'{{dto.groupName}}\' is succesfully deleted!',


          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Group Configuration',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Group Configuration',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'groupName': {
              'label': 'Group Name',
            },
            'groupAddress': {
              'label': 'Group Address *',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.groupName}}\'  is successfully updated.',
            'save_relay_success': 'group is succesfully updated',
            'create_success': '\'{{dto.groupName}}\' is successfully created.',
            'delete_success': '\'{{dto.groupName}}\' is deleted succesfully',
            'adress_messages': ' Same Address Value cannot be added multiple times.',
            'unique_name':'Please enter unique group name',
            'case_sensitive_name':'Please enter unique group name due to case-sensitive',
            'groupName_error':'Do not use "user" as group name,it is a reserved keyword.',


          },
        },
      },
      'rule_configuration': {
        'title': 'VNF Configuration',
        'icon': 'fa fa-cog',
        'list': {
          'title': 'VNF Configuration',
          'icon': 'fa fa-cog',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_rule_configuration': {
              'title': 'Create Rule Configuration ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_rule_configuration': {
              'title': 'Detail Rule Configuration',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_rule_configuration': {
              'title': 'Edit Rule Configuration',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_rule_configuration': {
              'title': 'Delete Rule Configuration',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'targetToFilter': 'Target To Filter',
            'belongsToGroup': 'Source Group',
            'actionToPerform': 'Action To Perform',
            'ruleId': 'Rule Id',
            'ruleList': 'Rule List:',
            'addToList':'Add To List',
            'save': 'Next&Save',
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.belongsToGroup}}\' ? ',
            'delete_success': 'Please save the rule list, after deleting.',
            'edit_success': 'Please save the rule list, after editing.',
            'add_success': 'Please save the rule list, after adding.',


          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Rule Configuration',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Rule Configuration',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'targetToFilter': {
              'label': 'Target To Filter',
            },
            'belongsToGroup': {
              'label': 'Source Group',
            },
            'actionToPerform': {
              'label': 'Action To Perform',

            },
            'ruleId': {
              'label': 'Rule Id',

            },
            'refreshTheList': {
              'label': 'Refresh Rule Configuration',
            },
            'noMatch': {
              'label': 'No matching records found',
            },
            'actions': {
              'label': 'Actions',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Rule is successfully updated.',
            'save_relay_success': 'Rule is succesfully created.',
            'create_success': 'Rule is successfully created.',
            'delete_success': 'Rule is deleted succesfully.',
            'delete_confirm_groupName': 'Do you want to delete selected \'{{dto}}\'?',
            'delete_success_groupName': '\'{{dto}}\' is succesfully deleted!',
            'error_add_actionToTarget': 'Same Action and Target cannot be added multiple times.',
            'errorSameRule': 'Same Source Group cannot be added multiple times.',
            'add_success': 'Please save the rule list, after adding.',
            'sameSource': 'Same Source Group cannot be added multiple times.',


          },
        },
      },
      'interface-config': {
        'list': {
          'title': 'Address Range',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_dhcp_server': {
              'title': 'Create New Interface',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_dhcp_server': {
              'title': 'Detail Interface',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              "perm": "#list"
            },
            'edit_dhcp_server': {
              'title': 'Edit Interface',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },

          },
          'fields': {
            'interfaceName': {
              'label': 'select interface name',
              'placeholder': 'Please enter first ip...',
            },
            'interfaceIpAdress': {
              'label': ' Ip addres',
              'placeholder': 'Please enter last ip...',
            },
            'interfaceSubnetMask': {
              'label': 'interface Subnet Mask',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.cpeDeviceName}}\'?',
            'delete_success': 'Selected \'{{dto.cpeDeviceName}}\' is successfully deleted',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'interfaceName': {
              'label': 'selected interface name',
              'placeholder': 'Please enter first ip...',
            },
            'interfaceIpAdress': {
              'label': ' Ip addres',
              'placeholder': 'Please enter last ip...',
            },
            'isVlan': {
              'label': 'Enable Vlan Config'
            },
            'interfaceSubnetMask': {
              'label': 'interface Subnet Mask',
            },
            'vlanId': {
              'label': 'Vlan Id',
            },
            'type': {
              'label': 'Vlan Type',
            },
            'description': {
              'label': 'Vlan desc',
            },
            'ipAddress': {
              'label': 'Ip Adress',
            },
            'subnetMask': {
              'label': 'Subnet mask',
            },
            'deleteVlan': {
              'label': 'Delete Vlan',
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
        },
      },
      'vyos-nat': {
        'list': {
          'title': 'NAT Configuration',
          'icon': 'fa fa-sitemap',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_nat_config': {
              'title': 'Create New Nat Rule',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_nat_config': {
              'title': 'Nat Interface Config',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_nat_config': {
              'title': 'Edit Nat Interface Config',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_nat_config': {
              'title': 'Delete Nat Interface Config',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'src_title' : 'Source NAT',
            'dst_title' : 'Destination NAT',
            'ruleId': 'Rule ID',
            'destinationIp': 'Destination IP',
            'enableExclude': 'Enable Exclude',
            'enableDisableStatus': 'Status',
            'ruleInterfaceName': 'Interface Name',
            'ruleDescription': 'Description',
            'protocols': 'Protocols',
            'sourceIp': 'Source IP',
            'sourceIpAddress': 'Source IP address',
            'sourcePort': 'Source Port',
            'natList': 'NAT List:',
            'destinationIpAddress': 'Destination IP Address',
            'destinationPort': 'Destination Port',
            'translationIp': 'Translation IP',
            'translationIpAddress': 'Translation IP',
            'translationPort': 'Translation Port',
            'exclude': 'Exclude?',
            'logging': 'Logging?',
            'noMatch': 'No matching records found',
            'actions': 'Actions',
            'refreshTheList': 'Refresh The List',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected NAT rule?\n',
            'delete_success': 'Please save the rule list, after deleting.',
            'save_success': '\'{{dto.ruleId}}\'NAT rule is successfully saved',
            'edit_success': '\'{{dto.ruleId}}\' NAT rule is successfully saved',
            'add_success': 'Please save the rule list, after adding.',
            'disable_confirm': 'Do you want to disable selected \'{{dto.ruleId}}\' ?',
            'enable_confirm': 'Do you want to enable selected \'{{dto.ruleId}}\' ?',
            'disable_success': 'Selected \'{{dto.ruleId}}\' is succesfully disabled!',
            'enable_success': 'Selected \'{{dto.ruleId}}\' is succesfully enabled!',
            'add_disable_success': 'First save the rule list to create ruleId.',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'NAT Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'NAT Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'ruleId': {
              'label': 'NAT Rule ID',
              'placeholder': 'Please enter Rule ID',
            },

            'ruleInterfaceName': {
              'label': 'Interface Variable',
              'placeholder': 'Please enter Interface name',
            },
            'ruleDescription': {
              'label': 'Description',
              'placeholder': 'Please enter NAT rule description',
            },
            'sourceIpAddress': {
              'label': 'Source IP',
              'placeholder': 'Please enter source Address',
            },
            'destinationIpAddress': {
              'label': 'Destination IP',
              'placeholder': 'Please enter Destination Ip Address',
            },
            'translationIpAddress':
              {
                'label': 'Translation IP',
                'placeholder': 'Please enter translation Ip Address',
              },
            'translationPort':
              {
                'label': 'Trans. Port (0-65535)',
                'placeholder': 'Please enter translation Port',
              },
            'sourcePort': {
              'label': 'Src Port (0-65535)',
              'placeholder': 'Please enter Port',
            },
            'destinationPort': {
              'label': 'Dst Port (0-65535)',
              'placeholder': 'Please enter Destination Port',
            },
            'refreshTheList': {
              'label': 'Refresh The Rules',
            },

            'protocolName': {
              'label': 'protocolName',
            },
            'enableExclude': {
              'label': 'Enable exclude',
            },
            'enableDisableStatus': {
              'label': 'Status',
            },
            'enableLogging': {
              'label': 'Enable logging',
            },
            'masqueradeEnabled': {
              'label': 'Enable masquerade',
            },
            'protocols': {
              'label': 'Protocols',
              'placeholder': 'Please enter Protocol declaration',
            },
            'actions': {
              'label': 'Actions',
            },
            'noMatch': {
              'label': 'No matching records found',
            },
            'select_protocol': {
              'label': '-Select Protocol-'
            }


          },
          'messages': {
            'iface_null': 'Interface Should Be Entered',
            'translation_or_masquerade': 'Enter Translation IP Address or Enable Masquerade',
            'translation_ip': 'Enter Translation IP Address',
          },
          'save': {
            'label': 'Save',
            'placeholder': '',
            'help_line': '',
            'help_block': '',
          },

        },
      },
      'vyos-one-to-one-nat': {
        'list': {
          'title': 'One to One NAT Configuration',
          'icon': 'fa fa-sitemap',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_nat_config': {
              'title': 'Create New Nat Rule',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_nat_config': {
              'title': 'NAT Interface Config',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_nat_config': {
              'title': 'Edit NAT Interface Config',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_nat_config': {
              'title': 'Delete NAT Config',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'disablenable_nat_config': {
              'title': 'Disable/Enable Nat Interface Config',
              'title_short': 'Disable',
              'icon': 'fa fa-key',
              'color': 'btn-outline uppercase blue-madison',
              'perm': '#edit',
            }

          },
          'fields': {
            'title': "One to One NAT",
            'ruleId': 'Rule ID',
            'insideIp': 'Source IP',
            'insideEth': 'Inbound Interface',
            'outsideIp': 'Destination IP',
            'outsideEth': 'Outbound Interface',
            'status': 'Status',
            'actions': 'Actions',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected rule ?',
            'disable_confirm': 'Do you want to disable selected \'{{dto.ruleId}}\' ?',
            'enable_confirm': 'Do you want to enable selected \'{{dto.ruleId}}\' ?',
            'delete_success': 'Selected rule is succesfully deleted!',
            'disable_success': 'Selected \'{{dto.ruleId}}\' is succesfully disabled!',
            'enable_success': 'Selected \'{{dto.ruleId}}\' is succesfully enabled!',
            'save_success': 'One-to-One NAT rule is successfully created',
            'edit_success': 'One-to-One NAT rule is successfully updated',
            'ruleId_messages': 'Rule ID value must be range 1-999',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Address Group Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Address Group Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'ruleId': {
              'label': 'Rule ID',
              'placeholder': 'Please enter Rule Id',
            },

            'insideIp': {
              'label': 'Source IP',
              'placeholder': 'Please enter inside IP',
            },

            'insideEth': {
              'label': 'Inbound Interface',
              'placeholder': 'Please enter an inbound interface variable',
            },

            'outsideIp': {
              'label': 'Destination IP',
              'placeholder': 'Please enter outside IP',
            },

            'outsideEth': {
              'label': 'Outbound Interface',
              'placeholder': 'Please enter an outbound interface variable',
            },
          },


          'save': {
            'label': 'Save',
            'placeholder': '',
            'help_line': '',
            'help_block': '',
          },

        },
      },
      'protocol_group': {
        'title': 'Service Group',
        'icon': 'fa fa-shield',
        'list': {
          'title': 'Firewall Ruleset',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_protocol_group': {
              'title': 'Create New Protocol Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_protocol_group': {
              'title': 'Detail Protocol Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_protocol_group': {
              'title': 'Edit Protocol Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_protocol_group': {
              'title': 'Delete Protocol Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'zone': 'Zone',
            'networkGroup': 'Network Group',
            'addressGroup': 'Address Group',
            'serviceGroup': 'Service Group',
            'protocolGroupName': 'Name',
            'protocolGroupDescription': 'Description',
            'protocolNumber': 'Port Number',
            'protocolRangeStart': 'Port Range Start',
            'protocolRangeEnd': 'Port Range End',
            'protocolPortName': 'Protocol Name',
            'create': 'Create Zone',
            'name': 'Name',
            'portTitle': 'Port Group',
            'createPort': 'Create Port',

            'save': 'Save'
          },
          'messages': {

            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\' ?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',
            'delete_fail':'Selected service used by another rule'
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Protocol Group',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Create Protocol Group',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'zone': {
              'label': 'Zone',
            },
            'networkGroup': {
              'label': 'Network Group',
            },
            'addressGroup': {
              'label': 'Address Group',
            },
            'serviceGroup': {
              'label': 'Service Group',
            },


            'protocolGroupName': {
              'label': 'Name',
              'placeholder': 'Please enter group name',
            },
            'protocolGroupDescription': {
              'label': 'Description',
              'placeholder': 'Please enter description',
            },
            'protocolNumber': {
              'label': 'Port Number',
              'placeholder': 'Please enter protocol number',

            },
            'protocolRangeStart': {
              'label': 'Port Range Start',
              'placeholder': 'Please enter range start',
            },
            'protocolRangeEnd': {
              'label': 'Port Range End',
              'placeholder': 'Please enter range end',
            },
            'protocolPortName': {
              'label': 'Protocol Name',
              'placeholder': 'Please enter port name',
            },
            'portTitle': {
              'label': 'Port Group',
            },
            'range': {
              'label': 'Port Range',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'portName_error': 'Please enter port name',
            'portName_access': 'Please valid select port name',
            'portNumber_error': 'Please enter port number',
            'portRange_error': 'Please enter port range',
            'save_success': 'is successfully updated.',
            'create_success': ' is successfully created',
            'delete_port': 'Do you want to delete select port?',
            'delete_port_success': 'Succesfully deleted',
            'portEnd_error': 'Please enter port range end ',
            'portStart_error': 'Please enter port range start',
          },


        },
      },
      'address_group': {
        'title': 'Network and Address Group',
        'icon': 'fa fa-shield',
        'list': {
          'title': 'Firewall Ruleset',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_address_group': {
              'title': 'Create New Address Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_address_group': {
              'title': 'Detail Adress Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_address_group': {
              'title': 'Edit Adress Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_address_group': {
              'title': 'Delete Address Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'addressGroupName': 'Group name',
            'addressGroupDescription': 'Group Description',
            'ipAddress': 'IP Address',
            'addressStartIp': 'Start Range',
            'networkIp': 'Network IP',
            'addressEndIp': 'End Range',
            'create': 'Create Address',
            'title': 'Address&Network Groups',
            'name': 'Name',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\'?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',
            'unique_name':'Please enter unique group name',
            'delete_fail':'Selected group used by another rule'
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Address Group Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Address Group Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'addressGroupName': {
              'label': 'Group Name',
              'placeholder': 'Please enter address group name',
            },
            'addressGroupDescription': {
              'label': 'Group Description',
              'placeholder': 'Please enter address group description',
            },
            'ipAddress': {
              'label': 'IP Address',
              'placeholder': 'Please enter ip address',
              'help_line': '',
              'help_block': '',
            },
            'addressStartIp': {
              'label': 'Start Range',
              'placeholder': 'Please enter start ip',
            },
            'addressEndIp': {
              'label': 'End Range',
              'placeholder': 'Please enter end ip',
            },
            'range': {
              'label': 'Ip Range',
            },
            'networkIp': {
              'label': 'Network IP',
              'placeholder': 'Ip with subnet mask',
              'help_line': '',
              'help_block': '',
            },
            'network_prefix': {
              'label': 'Network Prefix',
            },
            'address_range': {
              'label': 'IP Address Range',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': ' is successfully updated.',
            'create_success': ' is successfully created',
            'delete_ip': 'Do you want to delete select ip or range?',
            'delete_success': 'Successfully deleted',
            'endIp_error': 'Please enter end ip',
            'ip_error': 'Please enter ip address',
            'startIp_error': 'Please enter start ip ',
            'group_table':'Please enter group table'
          },
        },
      },
      'network_group': {
        'list': {
          'title': 'Network Group',
          'icon': 'fa fa-hdd-o',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_network_group': {
              'title': 'Create New Network Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_network_group': {
              'title': 'Detail Network Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_network_group': {
              'title': 'Edit Network Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_network_group': {
              'title': 'Delete Network Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'networkGroupName': 'Name',
            'networkGroupDescription': 'Description',
            'networkIp': 'Network IP',
            'networkSubnet': 'Network Subnet(0-32)',
            'create': 'Create Network',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {

            'delete_confirm': 'Do you want to delete selected  \'{{dto.name}}\' ?',
            'delete_success': 'Selected \'{{dto.networkGroupName}}\' is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'access_policy',
          'modes': {
            'edit': {
              'title': 'Network Group Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Network Group Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'networkGroupName': {
              'label': 'Name',
              'placeholder': 'Please enter network group name',
            },
            'networkGroupDescription': {
              'label': 'Description',
              'placeholder': 'Please enter network group description',
            },
            'networkIp': {
              'label': 'Network IP',
              'placeholder': 'Ip with subnet mask',
              'help_line': '',
              'help_block': '',
            },
            'networkSubnet': {
              'label': 'Subnet(0-32)',
              'placeholder': 'Please enter network subnet',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': ' is successfully updated.',
            'create_success': ' is successfully created',
            'delete_ip': 'Do you want to delete \'{{dto}}\'',
            'delete_success': 'Successfully deleted!'
          },
        },
      },
      'static_route': {

        'list': {
          'title': 'Static Route',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_static_route': {
              'title': 'Create New Static Route',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_static_route': {
              'title': 'Detail Static Route',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#edit'
            },
            'edit_static_route': {
              'title': 'Edit Static Route',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_static_route': {
              'title': 'Delete Static-Route',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'routingtype': 'Type',
            'networkAddress': 'Network Address',
            'networkSubnet': 'Subnet(1-32)',
            'routerIp': 'Router Ip',
            'nextHopType': 'Next Hop Type',
            'nextHopInterfaces': 'Next Hop Interface',
            'interfaceList': 'Next Hop Interface List',
            'distance': 'Distance',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.networkValue}}\' ?',
            'delete_success': 'Selected \'{{dto.networkValue}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Static Route Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Static Route Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'routingtype': {
              'label': 'Routing Type',
              'placeholder': 'Please enter routing type',
            },
            'networkAddress': {
              'label': 'Network Address',
              'placeholder': 'Ip with subnet mask',
            },
            'networkSubnet': {
              'label': 'Subnet(1-32)',
              'placeholder': 'Please enter network subnet(1-32)',
              'help_line': '',
              'help_block': '',
            },
            'routerIp': {
              'label': 'Router Ip',

            },
            'nextHopType': {
              'label': 'Next Hop Type',
              'placeholder': 'Please select next hop type',
            },
            'nextHopInterface': {
              'label': 'Next Hop Interface',
              'placeholder': 'Please select next hop type',
            },
            'interfaceList': {
              'label': 'NextHop Interface',
              'placeholder': 'Please select next hop type',
            },

            'distance': {
              'label': 'Distance',
              'placeholder': 'Please enter distance',
            },

            'save': {
              'label': 'Save',
            },
            'addToList':{
              'label':'Add to List',
            },
            'cancel':{
              'label':'Cancel',
            }

          },
          'messages': {
            'save_success': '\'{{dto.networkValue}}\' is succesfully updated.',
            'create_success': '\'{{dto.networkValue}}\' is succesfully created.',
            'warning': 'Please enter router ip',
            'unique_ip':'Please enter a unique network address',
          },
        },
      },
      'policy-route': {

        'list': {
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_policy_route': {
              'title': 'New Create Policy Route',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_policy_route': {
              'title': 'Detail Policy Route',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_policy_route': {
              'title': 'Edit Policy Route',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_policy_route': {
              'title': 'Delete Policy-Route',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'routeMapName': 'Name',
            'routeMapDescription': 'Description',
            'ruleId': 'Rule Id',
            'action': 'Rule action',
            'interface ': 'Apply Rule Interface',
            'policyType': 'Policy Type',
            'ipConfig': 'Apply Rule Type',
            'aclIdorPrefName': 'Access List Id/Prefix List Name',
            'localPreference': 'Match Local Preference Value',
            'metric ': 'Metric Value',
            'tag': 'Network Package Tag Value',
            'adValue': 'Administrative Distance  Value',
            'nextHopValue': 'Next Hop  Ip Value',
            'metricType': 'Metric Type(1,2)',
            'weight': 'Weigth',
            'name': 'Name',
            'title': 'Policy Route Map',


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.routeMapName}}\' ?',
            'delete_success': 'Selected \'{{dto.routeMapName}}\' is succesfully deleted!',
            'routemap_messages':'Selected route map is used in redistribution.',
            'routemap_isis_messages':'Selected route map is used in distribution options.',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Route Map Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Route Map Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Policy-Route',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Policy-Route',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Policy-Route',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'routeMapName': {
              'label': 'Name',
              'placeholder': 'Please enter route map name',
            },
            'routePolicy': {
              'label': 'Route Policy',
              'placeholder': 'Please select next hop type',
            },
            'routeMapDescription': {
              'label': 'Description',
              'placeholder': 'Please enter route map description',
            },
            'policyType': {
              'label': 'Policy Type',
              'placeholder': 'Please select next hop type',
            },
            'ruleId': {
              'label': 'Rule Id',
              'placeholder': 'Please enter rule id',
              'help_line': '',
              'help_block': '',
            },
            'action': {
              'label': 'Rule Action',
              'placeholder': 'Please select rule action',

            },
            'interface': {
              'label': 'Rule Apply Interface ',
              'placeholder': 'Please select interface name ',
            },
            'ipConfig': {
              'label': 'Rule Ip Config ',
              'placeholder': 'Please select ip config value',
            },
            'create': {
              'label': 'Policy Route Map',
            },

            'aclIdorPrefName': {
              'label': 'Access List Id/Prefix List Name ',
              'placeholder': 'Please enter acces list id or prefix list name ',
            },
            'localPreference': {
              'label': 'Local Preference',
              'placeholder': 'Please enter localPreference',

            },
            'asPathValue': {
              'label': 'AS-Path',
              'placeholder': 'Please enter AS-Path value ',
            },
            'metric': {
              'label': 'Metric Value ',
              'placeholder': 'Please enter metric value ',
            },
            'tag': {
              'label': 'Tag Value',
              'placeholder': 'Please enter tag value',
            },
            'adValue': {
              'label': 'Administrative Distance Values ',
              'placeholder': 'Please enter administrative distance value',
            },

            'nextHopValue': {
              'label': 'Next Hop Value',
              'placeholder': 'Please enter next  ip  hop',
            },
            'metricType': {
              'label': 'Metric Type Value',
              'placeholder': 'Enter 1 or 2',
            },
            'accessOrPrefixValues': {
              'label': 'Match   access/prefix Values',
              'placeholder': 'Please select access/prefix list value',
            },
            'prefixNameList': {
              'label': 'Match  prefix list values Value',
              'placeholder': 'Please select prefix name',
            },
            'weight': {
              'label': 'Weigth Value',
              'placeholder': 'Please enter weight value',
            },
            'isSet': {
              'label': 'Rule Set Enable ',
            },
            'isMatch': {
              'label': 'Rule Match Enable ',
            },
            'isAcces': {
              'label': 'Accest list Enable ',
            },
            'isPrefix': {
              'label': 'Prefix List Enable ',
            },

            'values': {
              'label': 'Prefix or Access List Value',
            },
            'name': {
              'label': 'Name',
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.routeMapName}}\' route map is successfully updated.',
            'create_success': '\'{{dto.routeMapName}}\' route map  is successfully created',
            'error_add_same_ruleList': 'Same Rule ID and Rule Action cannot be added multiple times.',
            'error_add_same_rule': 'Same Rule config cannot be added multiple times.',
            'add_success': 'Please save the rule list, after adding.',


          },
        },
      },
      'ospf': {
        'title': 'OSPF',
        'icon': 'fa fa-random',
        'list': {
          'title': 'OSPF',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_ospf': {
              'title': 'Create New OSPF',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_ospf': {
              'title': 'Detail OSPF',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_ospf': {
              'title': 'Edit OSPF',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_ospf': {
              'title': 'Delete OSPF',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'useDistanceValue': 'Change OSPF Package ',
            'alwaysInformation': 'Always Information ',
            'metric': 'Metric Value',
            'areaValues': 'Area Values',
            'isEdit': 'Edit',
            'routerId': 'Router ID',
            'isDefaultInformationChange': 'Default Information Originate',
            'defaultInformation': 'Default Information',
            'redistributeList': 'Redistribute List',
            'areaNetworkValue': 'Add Network',
            'ospfAreaName': 'Area ID',
            'ospfAreaType': 'Area Type',
            "area_tooltip": "Area settings are not required for ospf registration.",
            'authType': 'Authentication Type',
            'ospfAuthKeyId': 'Key ID',
            'ospfAuthKeyValue': 'Key Value',
            'virtualLink': 'Virtual Link',
            'virtuallink': 'Virtual Link',
            'ospfAuthPlainText': 'Key',
            'ospfAreaValue': 'Network Value',
            'subnetMask': 'Subnet Mask',
            'redistribution': 'Redistribution',
            'interface': 'Interface Variable',
            'from': 'From',
            'metricSpace': 'Metric(1-16)',
            'metricArea': 'Metric',
            'metricTypeValue': 'Metric Type',
            'metricType': 'Metric Type(1-2)',
            'routeMap': 'Route Map',
            'createRouteMap': 'Create Route Map',
            'greTunnelName': 'gre Tunnel name',
            'greLocalIp': 'gre local ',
            'greAddress': 'gre Addres',
            'greRemoteIp': 'gre Remote IP',
            'excludePassiveInterface': 'Exclude Passive Interface',
            'passiveInterface': 'Passive Interface',
            'passiveInterfaceList': 'Passive Interface Variable List',
            'addRouteMap': 'Add Route Map',
            'showRouteMap': {
              'label': 'Show Route Map',
              'icon': 'fa fa-eye',
            },
            'deleteOspf': 'Delete OSPF ',
            'isAlways': {
              'label': 'Defaul originate is always',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected ospf ?',
            'delete_success': 'Selected \'{{dto.ospf}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit OSPF ',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add OSPF ',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add OSPF',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail OSPF',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete OSPF',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'useDistanceValue': {
              'label': 'Distance Value',
            },
            'alwaysInformation': {
              'label': 'Always Information ',
            },

            'metric': {
              'label': 'metric',
              'placeholder': 'Between 1-16',

            },

            'metricType': {
              'label': 'Metric Type',
              'placeholder': '1-2',

            },

            'areaValues': {
              'label': 'Area Values',

            },
            'isEdit': {
              'label': 'Edit',

            },
            'routerId': {
              'label': 'Router ID',
            },
            'isDefaultInformationChange': {
              'label': 'Default Information Originate',
            },
            'ospfAreaValue': {
              'label': 'Network Value',
              'placeholder': 'Ip with subnet mask',

            },
            'gciTunnelName': {
              'label': 'gciTunnelName',
            },
            'gciTunnelRemoteIp': {
              'label': 'gciTunnelName',
            },
            'gciTunnelLocalIp': {
              'label': 'gciTunnelName',
            },
            'gciTunnelAddress': {
              'label': 'gciTunnelName',
            },

            'defaultInformation': {
              'label': 'Default Information',
            },
            'redistributeList': {
              'label': 'Redistribute List',
            },
            'excludePassiveInterface': {
              'label': 'Exclude Passive Interface',
            },
            'interface': {
              'label': 'Interface Variable',
              'placeholder': 'Interface Variable',

            },
            'virtuallink': {
              'label': 'Virtual Link*',
              'placeholder': 'Ip with subnet mask',

            },
            'passiveInterface': {
              'label': 'Passive Interface',
            },
            'passiveInterfaceList': {
              'label': 'Passive Interface List',
            },
            'deleteOspf': {
              'label': 'Delete OSPF',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'area_error': 'You need to set the ospf area value as the same as GRI tunnel address value . Please check your input.',
            'network_prefix_error': 'You need to set the ospf area value as the simular as "X.X.X.X/X" . Please check your input.',
            'gri_warning': 'if you want to apply ospf to ipsec that you have configured you need to add GRI tunnel.',
            'save_success': 'Ospf is successfully created.',
            'create_success': ' Ospf is successfully created',
            'delete_success': ' Ospf is successfully deleted',
            'areaNameValue_messages': ' Same Area and Network Value cannot be added multiple times.',
            'error_area': ' Same Area configuration cannot be added.',
            'error_virtualLink': 'Area 0 cannot be added virtual link.',


          },
        },
      },
      'route_policy': {
        'list': {
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_route_policy': {
              'title': 'New Create Route Policy',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_route_policy': {
              'title': 'Detail Route Policy',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_route_policy': {
              'title': 'Edit Route Policy',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_route_policy': {
              'title': 'Delete Route Policy',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'accessList': 'Access List ',
            'prefixList': 'Prefix List',
            'aclId': 'ACL ID',
            'accessDescription': 'Description',
            'accessRuleId': 'Rule ID',
            'accessAction': 'Action',
            'accessDestination': 'Destination',
            'accessSource': 'Source',
            'redistributeList': 'Redistribute List',
            'prefixName': 'Name',
            'prefixDescription': 'Description',
            'prefixRuleId': 'Rule ID',
            'prefixAction': 'Action',
            'maxPrefixValue': 'Ge(0-32)',
            'leastPrefixValue': 'Le(0-32)',
            'networkValue': 'Network Value',
            'networkValues': 'Network Value',
            'hostIP': 'Host IP',
            'inverseMask': 'Inverse Mask',
            'network': 'Network',


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected route policy ?',
            'delete_success': 'Selected route policy is succesfully deleted!',
            'delete_message': 'Please save route policy, after deleting.',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Edit Route Policy',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Add Route Policy ',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Route Policy ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Route Policy',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Route Policy',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'useDistanceValue': {
              'label': 'Distance Value',
            },
            'alwaysInformation': {
              'label': 'Always Information ',
            },
            'metric': {
              'label': 'Metric',

            },
            'areaValues': {
              'label': 'Area Values',

            },
            'networkValue': {
              'placeholder': 'Ip with subnet mask',

            },
            'isEdit': {
              'label': 'Edit',

            },
            'routerId': {
              'label': 'Router ID *',
            },
            'isDefaultInformationChange': {
              'label': 'Default Information Change',
            },

            'defaultInformation': {
              'label': 'Default Information',
            },
            'redistributeList': {
              'label': 'Redistribute List',
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Route Policy is successfully saved.',
            'create_success': 'Route Policy is successfully saved.',
            'error_add_same_addressList': 'Same Acl ID and Rule ID cannot be added multiple times.',
            'error_add_same_prefixList': 'Same Name and Rule ID cannot be added multiple times.',
            'emptyAccessSource': 'Please select destination and source information together.',
            'emptyAccessDestination': 'Please select destination and source information together.',
            'alreadyInUseAclId': 'Acl Id already In Use',
            'alreadyInUsePrefixRule': 'Prefix name already In Use',

          },
        },
      },
      'ipsec': {
        'list': {
          'title': 'IPSEC',
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_ipsec': {
              'title': 'Create New Ipsec',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },

            'view_ipsec': {
              'title': ' Restart Ipsec',
              'title_short': ' Restart Ipsec',
              'icon': 'fa fa-refresh',
              'color': 'default',
              'perm': '#view'
            },
            'show_ipsec': {
              'title': ' View Ipsec',
              'title_short': ' View Ipsec',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_ipsec': {
              'title': 'Edit Ipsec',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_ipsec': {
              'title': 'Delete Ipsec',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'ikeGroup': 'IKE Group',
            'espGroup': 'ESP Group',
            'caCertFile': 'Ca-Cert-File',
            'certFile': 'Cert-File',
            'key': 'Key',
            'ipsecSelection': 'Ipsec Peer Selection',
            'peerName': 'Peer Name',
            'isVtiBased': 'Vti Based',
            'peerIp': 'Peer Ip',
            'authenticationMode': 'Authentication Mode',
            'localIp': 'Local Peer Ip',
            'tunnelId': 'Peer Tunnel ID',
            'localSubnet': 'Local Subnet *',
            'peerSubnet': 'Remote Subnet *',
            'localSubnetPrefix': 'Prefix(0-32)',
            'peerSubnetPrefix': 'Remote Subnet Prefix',
            'interface': 'Local Interfaces',
            'save': 'Save',
            'status': 'Status',
            'tunnelInBytes': 'In Bytes',
            'tunnelOutBytes': 'Out Bytes',
            'tunnelInPackets': 'Tunnel In Packets',
            'tunnelOutPackets': 'Tunnel Out Packets',
            'addVti':'Add VTI',
            'bindVti':'Bind VTI',
            'addIkeGroup':'Add New IKE Group',
            'addEspGroup':'Add New Esp Group',
            'passthroughTunnel':'PASSTHROUGH TUNNEL',
            'createNewCertificate':'Create New Certificate',
            'signCertificate':'Sign Certificate',
            'activeDevices':'Active Devices',


          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.peerIp}}\'? ',
            'delete_success': 'Selected \'{{dto.peerIp}}\' is successfully deleted!'
          },
          'messages_esp': {

            'delete_confirm': 'Do you want to delete selected group ? ',
            'delete_success': 'Selected \'{{dto.name}}\' is successfully deleted!',
          },
          'messages_ike': {

            'delete_confirm': 'Do you want to delete selected group ? ',
            'delete_success': 'Selected \'{{dto.name}}\' is successfully deleted!',
          },
          'messages_certificate': {
            'save_success': 'ipsec certificate successfully created.',
            'sign_success':'ipsec sign certificate successfully',
            'restart_success': 'ipsec is successfully restarted.',
            'create_sign':'You are creating a new certificate. If a signed certificate is used in the current ipsec tunnel configuration, it will be replaced with the newly created one and you will need to sign the newly created certificate again.'
          },

        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': ' ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'ikeGroup': {
              'label': 'IKE Group',
            },
            'espGroup': {
              'label': 'ESP Group',
            },
            'caCertFile': {
              'label': 'Ca-Cert-File',
            },
            'certFile': {
              'label': 'Cert-File',
            },
            'key': {
              'label': 'Key',
            },
            'addVti': {
              'label': 'Add VTI',
            },
            'ipsecSelection': {
              'label': 'Ipsec Peer Selection',
            },
            'peerName': {
              'label': 'Peer Name',
            },
            'bindVti': {
              'label': 'Bind VTI',

            },
            'isVtiBased': {
              'label': 'Vti Based'
            },
            'authenticationMode': {
              'label': 'Authentication Mode',
            },
            'peerIp': {
              'label': 'Peer Ip',
              'placeholder': 'Please enter ip (x.x.x.x)...',
            },
            'localIp': {
              'label': 'Local Peer Ip',
              'placeholder': 'Please enter ip (x.x.x.x)...',
            },
            'tunnelId': {
              'label': 'Peer Tunnel ID',
              'placeholder': 'Please enter Tunnel Id..',
            },
            'localSubnet': {
              'label': 'Local Subnet *',
              'placeholder': 'Please enter ip (x.x.x.x)..',
            },
            'peerSubnet': {
              'label': 'Remote Subnet *',
              'placeholder': 'Please enter ip (x.x.x.x)..',
            },
            'localSubnetPrefix': {
              'label': 'Prefix(0-32)',
              'placeholder': 'Local Subnet Prefix',
            },
            'interface': {
              'label': 'Local Interface',
              'placeholder': 'Select interface'
            },
            'peerSubnetPrefix': {
              'label': 'Remote Subnet Prefix',
              'placeholder': '',
            },

            'status': {
              'label': 'Status',
              'placeholder': '',
            },
            'tunnelInBytes': {
              'label': 'In Bytes'
            },
            'tunnelOutBytes': {
              'label': 'Out Bytes'
            },
            'tunnelInPackets': {
              'label': 'Tunnel In Packets',
            },
            'tunnelOutPackets': {
              'label': 'Tunnel Out Packets'
            },
            'addIkeGroup': {
              'label': 'Add New IKE Group',
            },
            'addEspGroup': {
              'label': 'Add New Esp Group',
            },
            'passthroughTunnel':{
              'label':'PASSTHROUGH TUNNEL'
            },
            'createNewCertificate':{
              'label':'Create New Certificate',
            },
            'signCertificate':{
              'label':'Sign Certificate'
            },
            'activeDevices':{
              'label':'Peer Device'
            },



          },
          'messages': {
            'duplicate_tunnel': 'Same peer device and ipsec interface tunnel cannot be added multiple times',
            'interface_name_include_spaces': 'Local Interface should not have spaces',
            'vti_or_normal_tunnel': 'Tunnel addition failed. Tunnels should be either vti based or not for each template',
            'save_success': ' \'{{dto.peerIp}}\' is successfully updated.',
            'create_success': ' \'{{dto.peerIp}}\' is successfully created',
            'save_local_peer_success': ' Ipsec tunnel between peer ',
            'create_local_peer_success': 'Ipsec tunnel between peer \'{{dto.peerIp}}\' is successfully created',
            'save_remote_peer_success': 'Ipsec tunnel configuration on remote peer',
            'create_remote_peer_success': ' successfully created',
          },

        },
      },
      'vti': {

        'list': {
          'title': 'VTI',
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_vti': {
              'title': 'Create New Vti',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },

            'view_vti': {
              'title': ' View VTI',
              'title_short': ' Restart Ipsec',
              'icon': 'fa fa-refresh',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vti': {
              'title': 'Edit VTI',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vti': {
              'title': 'Delete VTI',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'vtiName': 'VTI Name',
            'description': 'Description',
            'ipAddress': 'Ip Address',
            'mtuSize': 'Mtu Size',
            'save':'Save',
          },

          'messages': {


            'delete_confirm': 'Do you want to delete selected   \'{{dto.peerIp}}\'? ',
            'delete_success': 'Selected \'{{dto.peerIp}}\' is successfully deleted!',
          },


        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': ' ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'vtiName': {
              'label': 'VTI Name',
            },
            'description': {
              'label': 'Description',

            },
            'ipAddress': {
              'label': 'Ip Address',

            },
            'mtuSize': {
              'label': 'MTU Size',

            },
            'save': {
              'label': 'Save',

            },

          },
          'messages': {

            'save_success': ' \'{{dto.interfaceName}}\' is successfully created.',
            'nameControl_message':'name must be vti* '
          },
        },
      },
      'firewall': {
        'list': {
          'title': 'Firewall Ruleset',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_firewall': {
              ' title': 'New Create Firewall',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'view_firewall': {
              'title': 'Detail Firewall',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_firewall': {
              'title': 'Edit CPE',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_firewall_edit': {
              'title': 'Edit Firewall',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_firewall': {
              'title': 'Delete Firewall',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected rule ?',
            'delete_confirm_interface': 'Do you want to delete selected  \'{{dto.applyInterface}}\'  ?',
            'delete_success': 'Please save the rule list, after deleting.',
            'edit_success': 'Please save the rule list, after editing.',
            'add_success': 'Please save the rule list, after adding.',


          },
          'messages_port': {
            'delete_confirm': 'Do you want to delete selected \'{{dto}}\'?',
            'delete_success': 'Selected port group is successfully deleted'
          }, 'messages_address': {
            'delete_confirm': 'Do you want to delete selected \'{{dto}}\'?',
            'delete_success': 'Selected address group is successfully deleted'
          },
          'messages_network': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto}}\'?',
            'delete_success': 'Selected network group is successfully deleted'
          }, 'messages_zone': {
            'delete_confirm': 'Do you want to delete selected  \'{{dto}}\'?',
            'delete_success': 'Selected zone is successfully deleted'
          },

          'create': {},
          'edit': {
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'CPE Cihazı Düzenle',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'CPE Cihazı Ekle',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': '',
                'title_short': 'Add',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': '',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': '',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'sessions': {
                'label': ' Sessions',
              },
              'matchedPacketsToRule': {
                'label': ' Packet',
              },
              'addZone': {
                'label': ' Add New Zone',
              },
              'selectrGroup': {
                'label': '-- Select group --',
              },
              'selectService': {
                'label': '-- Select service --',
              },
              'addGroup': {
                'label': ' Add New Group',
              },
              'matchedPacketsToRuleInBytes': {
                'label': ' Bytes',
              },
              'limitBurst': {
                'label': 'Limit Burst',
              },
              'fromZone': {
                'label': 'From Zone',
                'placeholder': 'Please enter rule id ',
              },
              'applyInterface': {
                'label': 'Apply Interface',
                'placeholder': 'Please enter general ip adress',
              },
              'isScheduleEnable': {
                'label': 'is Schedule Enable',
              },
              'ruleset': {
                'label': 'Ruleset',
              },
              'rulesetNames': {
                'label': 'Ruleset Names',
                'placeholder': 'Please enter vlan id',
              },
              'fromGroup': {
                'label': 'From Address',
                'placeholder': 'Please enter network subnet',
              },
              'ruleStatus': {
                'label': 'Rule Status',
              },
              'limitRate': {
                'label': 'Limit Rate',
              },
              'ruleDescription': {
                'label': 'Rule Description',
              },
              'log': {
                'label': 'Log',
              },
              'source': {
                'label': 'Source Address',
              },
              'destination': {
                'label': 'Destination Address',
              },
              'action': {
                'label': 'Action',
              },
              'status': {
                'label': 'Status',
              },
              'interface': {
                'label': 'Interface',
              },
              'isVtiBased': {
                'label': 'Vti Based'
              },
              'interfaceDirection': {
                'label': 'Interface Direction',
              },
              'actions': {
                'label': 'Actions',
              },
              'addToList': {
                'label': 'Add To List',
              },
              'firewallList': {
                'label': 'Firewall Rule List:',
              },
              'enablePolicy': {
                'label': 'Enable Policy',
              },
              'loggingEnable': {
                'label': 'Enable Logging',
              },
              'icmpToogle': {
                'label': 'ICMP',
              },
              'timeUnit': {
                'label': 'Time Unit ',
              },
              'limitRateFirewall': {
                'label': ' Limit Rate: ',
              },
              'limitBurstFirewall': {
                'label': 'Limit Burst',
              },
              'state': {
                'label': 'State',
              },
              'actionFirewall': {
                'label': 'Action',
              },
              'serviceFirewall': {
                'label': 'Service',
              },
              'serviceAddNew': {
                'label': ' Add New Service',
              },
              'ruleProtocol': {
                'label': 'Rule Protocol',
              },
              'code': {
                'label': 'Type Code',
                'placeholder': 'Between 0-255',
              },
              'type': {
                'label': 'Type Number',
                'placeholder': 'Between 0-255',
              },
              'typeName': {
                'label': 'Type Name',
                'placeholder': 'Please enter tunnel ip',
              },
              'service': {
                'label': 'Service',
                'placeholder': 'Please enter tunnel ip',
              },
              'isEdit': {
                'label': 'Edit',
                'placeholder': 'Please enter tunnel ip',
              },
              'applyInterfaceDirection': {
                'label': 'Apply Interface Direction',
                'placeholder': 'Please enter tunnel ip',
              },
              'schedule': {
                'label': 'Schedule',
                'placeholder': 'Please enter tunnel ip',
              },
              'ruleID': {
                'label': 'Rule ID',
                'placeholder': 'Please enter tunnel ip',
              },
              'addFromZone': {
                'label': 'Add New Zone',
                'placeholder': 'Please enter tunnel ip',
              },
              'addSource': {
                'label': 'Add New Source',
                'placeholder': 'Please enter tunnel ip',
              },
              'addDestination': {
                'label': 'Add New Destination',
                'placeholder': 'Please enter tunnel ip',
              },

              'interfaceAdd': {
                'label': 'Interface',
                'placeholder': 'Please enter tunnel ip',
              },
              'noMatch': {
                'label': 'No matching records found',
              },

              'addService': {
                'label': 'Add New Service',
              },
              'ipsecMatch': {
                'label': 'Ipsec Match',
                'placeholder': 'Please enter tunnel ip',
              },
              'toZone': {
                'label': 'To Zone',
                'placeholder': 'Please enter tunnel ip',
              }, 'cancel': {
                'label': 'Cancel',
                'placeholder': 'Please enter tunnel ip',
              },
              'addToListFirewall': {
                'label': 'Add To List',
                'placeholder': 'Please enter tunnel ip',
              },
              'ruleAction': {
                'label': ' Rule Action',
              },
              'bytes': {
                'label': 'Bytes',
              },
              'packets': {
                'label': 'Packets',
              },
              'refreshTheList': {
                'label': 'Refresh The Rules',
              },
              'create': {
                'label': 'New',
              },
              'utc': {
                'label': 'UTC',
              },
              'monthday': {
                'label': 'Choose Month Days',
              },
              'weekday': {
                'label': 'Choose Weekday',
              },
              'startDate': {
                'label': 'Start Date',
              },
              'endDate': {
                'label': 'End Date',
              },
              'startTime': {
                'label': 'Select Start Time:',
              },
              'stopTime': {
                'label': 'Select Stop Time:',
              },
              'saveSchedule': {
                'label': 'Save',
              },
              'cancelSchedule': {
                'label': 'Cancel',
              },
              'clearSchedule': {
                'label': 'CLEAR',
              },

              'back': {
                'label': 'Back',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              }, 'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
              'remove': {
                'label': 'Remove',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },

            },
            'messages': {
              'save_success': 'Firewall is successfully saved.',
              'create_success': 'Firewall is successfully saved.',
              'error_limitRateValue': 'Limit rate value should be between 1-999999',
              'same_zone': 'from-zone and to-zone cannot be assigned to itself',

            },
          },
        },
      },
      'vpn_objects': {
        'list': {
          'title': 'VPN Objects',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
        }
      },
      'zone': {
          'title': 'Zone Group',
          'icon': 'fa fa-shield',
        'list': {
          'title': 'Firewall Ruleset',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_zone': {
              'title': 'Create New Zone',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_zone': {
              'title': 'Detail Zone',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_zone': {
              'title': 'Edit Zone',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_zone': {
              'title': 'Delete Zone',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'zoneName': 'Name',
            'zoneDescription': 'Description',
            'interfaces': 'Interfaces Variable',
            'interfaceNames': 'Interface Names',
            'localzone': 'Localzone',
            'defaultAction': 'Default Action',
            'name': 'Name',
            'zoneTitle': 'Zone Group',
            'create': 'Create Zone',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.zoneName}}\'?',
            'delete_success': 'Selected \'{{dto.zoneName}}\' is succesfully deleted!',
            'unique_name':'Please enter a unique zone name',
            'unique_interface':'Please enter a unique interface variables',
            'delete_fail':'Selected zone used by another rule'
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Zone Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Zone Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'zoneName': {
              'label': 'Name',
              'placeholder': 'Please enter zone name',
            },
            'zoneDescription': {
              'label': 'Description',
              'placeholder': 'Please enter zone description',
            },
            'interfaces': {
              'label': 'Interface Variable',
              'placeholder': 'Please select interface variable',
              'help_line': '',
              'help_block': '',
            },
            'interfaceNames': {
              'label': 'Interface Names',
              'placeholder': 'Please select interface variable',
              'help_line': '',
              'help_block': '',
            },
            'localzone': {
              'label': 'Localzone',

            },
            'name': {
              'label': 'Name',

            },
            'zoneTitle': {
              'label': 'Zone Group',

            },

            'defaultAction': {
              'label': 'Default Action',
              'placeholder': 'Please select default action',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '  is successfully updated.',
            'interfaceName': ' Same interface name cannot be added multiple times.',
            'create_success': '  is successfully created',
          },
        },
      },
      'create_interface': {
        'list': {
          'title': 'Interface Configuration',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_interface_config': {
              'title': 'Create New Interface',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_interface_config': {
              'title': 'Detail interface Config',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_interface_config': {
              'title': 'Edit interface Config',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_interface_config': {
              'title': 'Delete interface Config',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'interfaceName': 'Name',
            'interfaceStatus': 'Status',
            'interfaceType': 'Type',
            'vlanId': 'Vlan ID',
            'ipAddress': 'IP Address',
            'subnet': 'Subnet Mask',
            'mac': 'Mac Address',
            'description': 'Description',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.interfaceName}}\' ?',
            'delete_success': 'Selected \'{{dto.interfaceName}}\' is deleted successfully',
            'save_success': '\'{{dto.interfaceName}}\'interface is successfully created',
            'edit_success': '\'{{dto.interfaceName}}\' interface is successfully updated',
            'mtu_size': 'Mtu size value must be range 68-1500',
            'ip_address': 'The dhcp field must be selected or the ip address must be entered',
            'vlanIdOrPort': 'The vlan id must be entered or the port name must be selected',
            'subnetMask_value': 'Subnet mask value must be range 0-32',
            'vlanId_value': 'Vlan ID value must be range 0-4094',


          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Interface Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Interface Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'interfaceName': {
              'label': 'Name',
              'placeholder': 'Please enter Interface name',
            },
            "portName": {
              "label": "Port Name",
              "placeholder": "--select port--",
            },
            'bridgeName': {
              'label': 'Bridge Name',
              'placeholder': 'Please enter Bridge name',
            },
            "select": {
              "label": "Select",
            },
            'vti': {
              'label': 'Vti Name',
              'placeholder': 'Please enter Vti name',
            },
            'interfaceType': {
              'label': 'Type',
              'placeholder': 'Please enter Interface Type ',
            },
            'dhcp': {
              'label': 'Enable Dhcp',
              'placeholder': 'Please enter Interface Type ',
            },
            'vlanId': {
              'label': 'Vlan Id',
              'placeholder': 'Please enter vlanId',
              'help_line': '',
              'help_block': '',
            },
            'ipAddress': {
              'label': 'Ip Address',
              "placeholder": "Ip with subnet mask",
            },
            'subnet': {
              'label': 'Subnet Mask',
              'placeholder': 'Please enter  Subnet Mask',
            },
            'mtuSize': {
              'label': 'MTU Size',
              'placeholder': 'Between 68-1500',
            },
            'description': {
              'label': ' Description',
              'placeholder': 'Please enter  description',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
        },
      },
      'gre_tunnel': {
        'list': {
          'title': 'GRE Tunnel',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_greTunnel_config': {
              'title': 'Create New GRE Tunnel',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_interface_config': {
              'title': 'Detail interface Config',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_greTunnel_config': {
              'title': 'Edit interface Config',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_greTunnel_config': {
              'title': 'Delete interface Config',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'tunnelName': 'Tunnel Name ',
            'tunnelAddress': 'Tunnel Address',
            'localIp': 'Tunnel Local Ip',
            'remoteIp': 'Tunnel Remote Ip',
            'description': 'Description',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.tunnelName}}\' ?',
            'delete_success': 'Selected \'{{dto.tunnelName}}\' is deleted successfully',
            'save_success': '\'{{dto.tunnelName}}\' interface is successfully \'{{type}}\'',
            'tunnel_name': 'Tunnel name must start with "tun"',
            'tunnel_name_endswith': 'Tunnel name must continue with a number after "tun" keyword',
            "same_variable": "Same variable can not be used.Select different variable value."


          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Gre Tunnel Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Gre Tunnel  Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'tunnelName': {
              'label': 'Tunnel Name',
              'placeholder': 'Please enter tunnel name',
            },
            'tunnelAddress': {
              'label': 'Tunnel Address',
              'placeholder': 'Ip with subnet mask',
            },
            'vpnLocalIp': {
              'label': 'Useful Local Ip Block',
            },
            'localIp': {
              'label': 'Local Ip',
              'placeholder': 'Please enter tunnel local ip address ',
            },
            'remoteIp': {
              'label': 'Remote Ip',
              'placeholder': 'Please enter  Remote Ip',
            },
            'description': {
              'label': ' Description',
              'placeholder': 'Please enter  description',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
        },
      },
      'ssl_vpn': {
        'list': {
          'title': 'SSL VPN',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_ssl_vpn': {
              'title': 'Create New',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_ssl_vpn': {
              'title': 'Detail Client/Server',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_ssl_vpn': {
              'title': 'Edit Client/Server',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_ssl_vpn': {
              'title': 'Delete Client/Server',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'vtunName': 'Open Vpn Interface Variable',
            'subnet': 'Server Subnet',
            'caCertFile': 'Ca-cert File',
            'certFile': 'Cert File',
            'dhFile': 'Dh File',
            'keyFile': 'Key File',
            'clientName': 'Client Name',
            'localPort': 'Port',
            'protocol': 'Protocol',
            'authentication': 'Authentication',
            'keepAliveInterval': 'Keep Alive Interval',
            'keepAliveFailureCount': 'Keep Alive Failure Count',
            'pushRoute': 'Client Subnet',
            'recipientEmail': 'Recipient Email',
            'ipAddress': 'Server IP Adress',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.vtunName}}\' ?',
            'delete_success': 'Selected \'{{dto.vtunName}}\' is deleted successfully',
            'save_success': '\'{{dto.vtunName}}\'interface is successfully created',
            'edit_success': '\'{{dto.vtunName}}\' interface is successfully updated',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Gre Tunnel Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Gre Tunnel  Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'vtunName': {
              'label': 'Open Vpn Interface Variable',
              'placeholder': 'Please enter interface variable',
            },
            'subnet': {
              'label': 'Server Subnet',
              'placeholder': 'Ip with subnet mask',
            },
            'caCertFile': {
              'label': 'Ca Cert File',
            },
            'certFile': {
              'label': 'Cert File',
            },
            'dhFile': {
              'label': 'Dh File',
              'placeholder': 'Please enter  Remote Ip',
            },
            'keyFile': {
              'label': 'Key File',
            },
            'clientName': {
              'label': 'Client Name',
            },
            'localPort': {
              'label': 'Port',
            },
            'authentication': {
              'label': 'Authentication',
            },
            'protocol': {
              'label': 'Protocol',
            },
            'ldapOption': {
              'label': 'LDAP Option',
            },
            'isDisabled': {
              'label': 'Disable Remote Access Server',
            },
            'pushRoute': {
              'label': 'Client Subnet',
              'placeholder': 'Ip with subnet mask',
            },
            'serverSubnet': {
              'label': 'Server Subnet',
              'placeholder': 'Ip with subnet mask',
            },
            'recipientEmail': {
              'label': 'Recipient Email'
            },
            'ipAddress': {
              'label': 'Server IP Adress'
            },
            'ldapConfFile': {
              'label': 'LDAP Configuration File:'
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.vtunName}}\' ?',
            'delete_success': 'Selected \'{{dto.vtunName}}\' is deleted successfully',
            'save_success': ' \'{{dto.vtunName}}\ is successfully updated',
            'create_success': ' \'{{dto.vtunName}}\ is successfully created',
            'delete_route': 'Do you want to delete selected subnet?',
            'delete_route_success': 'Selected route is successfully deleted',
            'interval_error': 'KeepAliveInterval should be between 0-600',
            'failure_error': 'KeepAliveFailureCount should be between 0-1000',
            'localport_error': 'LocalPort should be beetween 1-65535',
            'certificate_save': 'Certificate is Successfully Generated',
            'certificate_success': 'To Successfully Setup VPN Tunnel for This Client, Server Port Number Should Be the Same as Client Port Number',
            'vtun_name': 'Interface name must start with "vtun"',
            'same_subnet': 'Same subnet cannot be added multiple times',
            'client_Name': 'Please Enter Client Name, Recipient E-mail and IP Address',

          },
        },
      },
      'general_route': {
        'list': {
          'title': 'Routing Table',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Gre Tunnel Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Gre Tunnel  Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': '',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'vtunName': {
              'label': 'Open Vpn Interface Variable',
              'placeholder': 'Please enter interface variable',
            },
            'subnet': {
              'label': 'Server Subnet',
              'placeholder': 'Please enter subnet',
            },
            'caCertFile': {
              'label': 'Ca Cert File',
            },
            'certFile': {
              'label': 'Cert File',
            },
            'dhFile': {
              'label': 'Dh File',
              'placeholder': 'Please enter  Remote Ip',
            },
            'keyFile': {
              'label': 'Key File',
            },
            'clientName': {
              'label': 'Client Name',
            },
            'localPort': {
              'label': 'Port',
            },
            'authentication': {
              'label': 'Authentication',
            },
            'protocol': {
              'label': 'Protocol',
            },
            'ldapOption': {
              'label': 'LDAP Option',
            },
            'isDisabled': {
              'label': 'Disable Remote Access Server',
            },
            'pushRoute': {
              'label': 'Client Subnet',
            },
            'serverSubnet': {
              'label': 'Server Subnet',
              'placeholder': 'Ip with subnet mask',
            },
            'recipientEmail': {
              'label': 'Recipient Email'
            },
            'ipAddress': {
              'label': 'Server IP Adress'
            },
            'ldapConfFile': {
              'label': 'LDAP Configuration File:'
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.vtunName}}\' ?',
            'delete_success': 'Selected \'{{dto.vtunName}}\' is deleted successfully',
            'save_success': ' \'{{dto.vtunName}}\ is successfully updated',
            'create_success': ' \'{{dto.vtunName}}\ is successfully created',
            'delete_route': 'Do you want to delete selected subnet?',
            'delete_route_success': 'Selected route is successfully deleted',
            'interval_error': 'KeepAliveInterval should be between 0-600',
            'failure_error': 'KeepAliveFailureCount should be between 0-1000',
            'localport_error': 'LocalPort should be beetween 1-65535',
            'certificate_save': 'Certificate is Successfully Generated',
            'certificate_success': 'To Successfully Setup VPN Tunnel for This Client, Server Port Number Should Be the Same as Client Port Number'
          },
        },
      },
      'ikegroup': {
        'list': {
          'title': 'VPN Objects',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_ike_group': {
              'title': 'Create New IKE Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_ike_group': {
              'title': 'Detail IKE Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_ike_group': {
              'title': 'Edit IKE Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_ike_group': {
              'title': 'Delete IKE Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'name': 'Name',
            'encription': 'Encription',
            'hash': 'Hash',
            'dhGroup': 'DH Group',
            'lifeTime': 'Life Time',
            'mode': 'Mode',
            'keyExchange': 'IKE',
            'ikev2-reauth': 'ikev2-reauth',
            'deadPeerDetection': 'Dead-Peer-Detection',
            'action': 'Action',
            'interval': 'Interval(2-86400)',
            'timeout': 'TimeOut(2-86400)',


          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected   \'{{dto.groupName}}\'? ',
            'delete_success': '  \'{{dto.groupName}}\'  is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'title': 'Create Ike Group',
          'icon': 'fa fa-user-secret',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': {
              'label': 'Name',

            },
            'encryption': {
              'label': 'Encryption',

            },
            'hash': {
              'label': 'Hash',

            },
            'dhGroup': {
              'label': 'DH Group',

            },
            'lifeTime': {
              'label': 'Life Time',

            },
            'mode': {
              'label': 'Mode',

            },
            'keyExchange': {
              'label': 'IKE',

            },

            'ikev2-reauth': {
              'label': 'ikev2-reauth',

            },

            'deadPeerDetection': {
              'label': 'Dead-Peer-Detection',

            },
            'action': {
              'label': 'Action'
            },
            'interval': {
              'label': 'Interval'
            },
            'timeout': {
              'label': 'Timeout',
            },


          },
          'messages': {
            'save_success': '\'{{dto.groupName}}\' is successfully updated.',
            'create_success': '\'{{dto.groupName}}\' is successfully created',
          },
        },
      },
      'esp_group': {
        'list': {
          'title': 'VPN Objects',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_esp_group': {
              'title': 'Create New   ESP Group',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_esp_group': {
              'title': 'Detail ESP Group',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_esp_group': {
              'title': 'Edit ESP Group',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_esp_group': {
              'title': 'Delete ESP Group',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'name': 'Name',
            'encryption': 'Encryption',
            'hash': 'Hash',
            'pfs': 'PFS',
            'dhGroup': 'DH Group',
            'lifeTime': 'Life Time',
            'mode': 'Mode',
            'comperssion': 'Compression'


          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.groupName}}\'? ',
            'delete_success': '\'{{dto.groupName}}\' is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': {
              'label': 'Name',

            },
            'encryption': {
              'label': 'Encryption',

            },
            'hash': {
              'label': 'Hash',

            },
            'dhGroup': {
              'label': 'DH Group',

            },
            'lifeTime': {
              'label': 'Life Time',

            },
            'mode': {
              'label': 'Mode',

            },
            'pfs': {
              'label': 'PFS',

            },

            'comperssion': {
              'label': 'Compression',

            },
            'timeout': {
              'label': 'Timeout',
            },


          },
          'messages': {
            'save_success': '\'{{dto.groupName}}\' is successfully updated.',
            'create_success': '\'{{dto.groupName}}\' is successfully created',
          },
        },
      },
      'certificate': {
        'list': {
          'title': 'IPSEC',
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_certificate': {
              'title': 'Create New Certificate',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_esp_group': {
              'title': 'Detail Certificate',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_esp_group': {
              'title': 'Edit Certificate',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_esp_group': {
              'title': 'Delete Certificate',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'commonName': 'Common Name',
            'countryName': 'Country Name',
            'caExpire': 'Ca Expire',
            'keySize': 'Key Size',
            'province': 'Province',
            'organizationName': 'Organization Name',
            'city': 'City',
            'organizationUnit': 'Organization Unit',
            'email': 'E-mail',
            'keyExpire': 'Key Expire',

          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.commonName}}\'? ',
            'delete_success': 'Certificate is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'CPE Cihazı Düzenle',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CPE Cihazı Ekle',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'commonName': {
              'label': 'Common Name',

            },
            'countryName': {
              'label': 'Country Name',
              'placeholder': 'Enter country name(TR,EN etc.)',

            },
            'caExpire': {
              'label': 'Ca Expire',

            },
            'keySize': {
              'label': 'Key Size',

            },
            'province': {
              'label': 'Province',

            },
            'organizationName': {
              'label': 'Organization Name',

            },
            'city': {
              'label': 'City',

            },

            'organizationUnit': {
              'label': 'Organization Unit',

            },
            'email': {
              'label': 'E-mail',
            },
            'keyExpire': {
              'label': 'Key Expire',
            },

          },
          'messages': {
            'save_success': 'Certificate is successfully updated.',
            'create_success': 'Certificate is successfully created',
          },
        },
      },
      'qos': {
        'title': 'QoS',
        'icon': 'fa fa-window-restore',
        'traffic_shaping': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_traffic_shaping': {
                'title': 'Create New Traffic Shapping',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view_traffic_shaping': {
                'title': 'Detail traffic_shaping ',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
              'edit_traffic_shaping': {
                'title': 'Edit traffic_shaping',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_traffic_shaping': {
                'title': 'Delete traffic_shaping',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'policyNode': 'Policy Name',
              'policyDescription': 'Policy Description ',
              'interface': 'Interface',

              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
            },
            'messages': {

              'delete_confirm': 'Do you want to delete selected   \'{{dto.name}}\'? ',
              'delete_success': 'Selected policy is succesfully deleted!',
              'shaper_required': 'please add 1 shaper',

            },
            'messages_ifb': {
              'delete_confirm': 'Do you want to delete selected   \'{{dto}}\'? ',
              'delete_success': 'Selected  is successfully deleted!',
              'save_success': ' is successfully updated',
              'create_success': ' is successfully created',
              'delete_ifb_success': '\'{{dto.name}}\' is succesfully deleted!',


            }
          },
          'edit': {
            'qos_title': 'Shaper',
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'Address Group Edit',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'Address Group Add',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': 'Servis Zinciri Ekle',
                'title_short': 'Ekle',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'Servis Zinciri Detayları',
                'title_short': 'Detay',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': 'Servis Zinciri Sil',
                'title_short': 'Sil',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'policyNode': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy node',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'policyBandwidth': {
                'label': 'Policy Bandwidth',
                'placeholder': 'Please enter policy bandwidth',
                'help_line': '',
                'help_block': '',
              },
              'bandwidth': {
                'label': 'Bandwidth',
                'placeholder': 'Please enter bandwidth',
              },
              'burst': {
                'label': 'Burst',
                'placeholder': 'Please enter burst',
              },
              'ceiling': {
                'label': 'Ceiling',
                'placeholder': 'Please enter ceiling',
              },
              'priority': {
                'label': 'Priority',
                'placeholder': 'Please enter priority',
              },

              'queueLimit': {
                'label': 'Queue Limit',
                'placeholder': 'Please enter queue limit',
              },
              'bandwidthType': {
                'label': 'Bandwidth Type',
                'placeholder': 'Please enter queue limit',
              },
              'selectType': {
                'label': 'Select Type',
                'placeholder': 'Please enter queue limit',
              },
              'queueType': {
                'label': 'Queue Type',
                'placeholder': 'Please enter queue type',
              },
              'dscp': {
                'label': 'DSCP',
              },
              'application': {
                'label': 'Application',
              },
              'classId': {
                'label': 'Class Id'
              },
              'match': {
                'label': 'Match',
              },
              'ruleName': {
                'label': 'Rule Name',
                'placeholder': 'Please enter rule name',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Please enter description',
              },
              'interface': {
                'label': 'Interface',
                'placeholder': 'Please enter interface',
              },
              'vlan': {
                'label': 'VLAN',
                'placeholder': 'Please enter vlan',
              },
              'ip': {
                'label': 'IP',
              },
              'bandwidthTooltip': {
                "label": "Unit can be in bit or bps ex. 10mbit,10mbps or Bandwith can be entered without unit like 10 and it will correspond to 10 kbit",
              },
              'priorityTooltip': {
                'label': 'Priority must be between 0 and 7',
              },
              'queueLimitTooltip': {
                'label': 'Queue-limit must be between 0 and 4294967295',
              },
              'selectQueue': {
                'label': '--Select Queue Type--',
              },
              'selectDscp': {
                'label': '--select dscp--',
              },
              'addClass':{
                'label':'Add Class'
              },
              'updateClass':{
                'label':'Update Class'
              },
              'matchClass':{
                'label':'Match'
              },
              'panelDescription':{
                'label':' Click to configure match to class'
              },
              'classIdTooltip':{
                'label':'Class Id Should Be Between 2 and 4095'
              },
              'sourceAddress': {
                'label': 'Source Address',
                'placeholder': 'Please enter source address',
              },
              'sourcePort': {
                'label': 'Source Port',
                'placeholder': 'Please enter source port',
              },
              'destinationAddress': {
                'label': 'Destination Address',
                'placeholder': 'Please enter destination address',
              },
              'destPort': {
                'label': 'Dest. Port',
                'placeholder': 'Please enter dest port',
              },
              'protocol': {
                'label': 'Protocol',
                'placeholder': 'Please enter protocol',
              },

              'outBoundInterface': {
                'label': 'Out Bound Interface',
                'placeholder': 'Please enter out bound interface',

              },
              'defaultPolicy': {
                'label': 'Default Policy',
              },
              'classPolicy': {
                'label': 'Class Policy',
              },
              'classList': {
                'label': 'Class List',
              },
              'addList': {
                'label': 'Save',
              },


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },

            },
            'messages': {
              'save_success': ' \'{{dto.name}}\ is successfully updated.',
              'create_success': ' \'{{dto.name}}\ is successfully created',
              'no_class_id': 'Class Id Should Be Between 2 and 4095',
              'empty_class_id': 'Please enter class id.Class Id should be between 1 and 4096',
              'object_class': 'you can add at most one class',
              'save_object_class':'you must enter a class',
              'select_bandwidthType':'Please enter bandwidth and select bandwidth type',
              'multiple_class_id': 'Same Class Id Cannot Be Added Multiple Times',
              'queue_limit_interval': 'Queue Limit Should Be Between 1 and 2147483647',
              'priority_interval': 'Priority Should Be Between 0 and 7',
              'delete_confirm': 'Do you want to delete selected class?',
              'delete_success': 'Selected class is succesfully deleted.',
              'addMatch':'Please click add to class button before adding to list',
              'unique_name':'Please enter unique policy name',
              'bandwidth_message':'Bandwidth can be in mbit or mbps '
            },
          },
        },
        'round_robin': {

          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_round_robin': {
                'title': 'Create New Round Robin',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_round_robin': {
                'title': 'Edit Round Robin',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'view_round_robin': {
                'title': 'View Round Robin',
                'title_short': 'View',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
              'delete_round_robin': {
                'title': 'Delete Round Robin',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'policyName': 'Policy Name',
              'policyDescription': 'Policy Description',
              'interface': 'Interface'
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected traffic policy?',
              'delete_success': 'Selected policy is succesfully deleted!',
              'shaper_required': 'please add 1 shaper',
            },
          },
          'edit': {
            'qos_title': 'Round Robin',
            'basePerm': 'vyos',
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'defaultFields': {
                'header': 'Default Policy',
              },
              'match': {
                'label': 'Match',
              },
              'selectQueue': {
                'label': '--Select Queue Type--',
              },
              'queueLimit': {
                'label': 'Queue Limit',
                'placeholder': 'Please enter queue limit',
              },
              'addClass': {
                'label': 'Add Class',
              },
              'updateClass': {
                'label': 'Update Class',
              },
              'addList': {
                'label': 'Save',
              },
              'panelDescription': {
                'label': 'Click to configure match to class'
              },
              'queueLimitTooltip':{
                'label':'Queue-limit must be between 0 and 4294967295'
              },
              'quantumTooltip':{
                'label':'Quantum must be between 0 and 4294967295'
              },
              'classIdTooltip':{
                'label':'Class Id should be between 1 and 4096'
              },

              'queueType': {
                'label': 'Queue Type',
                'placeholder': 'Please enter queue type',
              },
              'quantum': {
                'label': 'Quantum',
                'placeholder': 'Please enter quantum',
              },
              'interface': {
                'label': 'Interface',
              },
              'class': {
                'label': 'Class',
              },
              'classFields': {
                'header': 'Class Policy',
              },
              'classList': {
                'header': 'Class List',
              },
              'classId': {
                'label': 'Class Id',
                'placeholder': 'Please enter class id',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Please enter description',
              },
            },
            'messages': {
              'no_class_id': 'Class Id Should Be Between 1 and 4095',
              'empty_class_id': 'Please enter class id.Class Id should be between 1 and 4096',
              'multiple_class_id': 'Same Class Id Cannot Be Added Multiple Times',
              'save_success': ' \'{{dto.name}}\ is successfully updated',
              'create_success': ' \'{{dto.name}}\ is successfully created',
              'queue_limit_interval': 'Queue Limit Should Be Between 1 and 2147483647',
              'quantum_interval': 'Quantum Should Be Between 1 and 2147483647',
              'delete_confirm': 'Do you want to delete selected class?',
              'delete_success': 'Selected class is successfully deleted',
              'addMatch':'Please click add to class button before adding to list',
              'unique_name':'Please enter unique policy name'
            },
          },
        },
        'traffic_limit': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_traffic_limit': {
                'title': 'Create New Traffic Limiter',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_traffic_limit': {
                'title': 'Edit Traffic Limiter',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'view_traffic_limit': {
                'title': 'View Traffic Limiter',
                'title_short': 'View',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },

              'delete_traffic_limit': {
                'title': 'Delete Traffic Limiter',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'policyName': 'Policy Name',
              'policyDescription': 'Policy Description',
              'interface': 'Interface'
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected traffic policy ? ',
              'delete_success': 'Selected policy  is succesfully deleted!',
              'shaper_required': 'please add 1 shaper',
            },
          },
          'edit': {
            'qos_title': 'Limiter',
            'basePerm': 'vyos',
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'interfaceList': {
                'label': 'Interface List',
              },
              'bandwidthTooltip': {
                "label": "Unit can be in bit or bps ex. 10mbit,10mbps or Bandwith can be entered without unit like 10 and it will correspond to 10 kbit",
              },
              'priorityTooltip': {
                'label': 'Priority must be between 0 and 20',
              },

              'defaultFields': {
                'header': 'Default Policy',
              },
              'bandwidth': {
                'label': 'Bandwidth',
                'placeholder': 'Please enter bandwidth',
              },
              'bandwidthType': {
                'label': 'Bandwidth Type',
                'placeholder': 'Please enter bandwidth',
              },
              'selectBandwidthType': {
                'label': 'Select Bandwidth Type',
                'placeholder': 'Please enter bandwidth',
              },
              'addClass': {
                'label': 'Add Class',
              },
              'updateClass': {
                'label': 'Update Class',
              },
              'classIdTooltip':{
                'label':'Class Id should be between 1 and 7 '
              },
              'matchClass':{
                'label':'Match'
              },
              'panelDescription':{
                'label':' Click to configure match to class'
              },
              'burst': {
                'label': 'Burst',
                'placeholder': 'Please enter burst',
              },
              'priority': {
                'label': 'Priority',
                'placeholder': 'Please enter priority',
              },
              'interface': {
                'label': 'Interface',
              },
              'addList': {
                'label': 'Save',
              },
              'class': {
                'label': 'Class',
              },
              'classFields': {
                'header': 'Class Policy',
              },
              'classList': {
                'header': 'Class List',
              },
              'classId': {
                'label': 'Class Id',
                'placeholder': 'Please enter class id',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Please enter description',
              },
            },
            'messages': {
              'no_class_id': 'Class Id Should Be Between 1 and 7',
              'empty_class_id': 'Please enter class id & bandwidth.Class Id should be between 1 and 7',
              'multiple_class_id': 'Same Class Id Cannot Be Added Multiple Times',
              'save_success': ' \'{{dto.name}}\ is successfully updated',
              'create_success': ' \'{{dto.name}}\ is successfully created',
              'priority_interval': 'Priority Should Be Between 0 and 20',
              'delete_confirm': 'Do you want to delete selected class?',
              'delete_success': 'Selected class is succesfully deleted',
              'addMatch':'Please click add to class button before adding to list',
              'unique_name':'Please enter unique policy name',
              'bandwidth_control':'Please select bandwidth type & enter bandwidth',
              'select_bandwidthType':'Please enter bandwidth and select bandwidth type',
            },
          },
        },
        'priority_queue': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_priority_queue': {
                'title': 'Create New Priority Queue',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view_priority_queue': {
                'title': 'Detail New Priority Queue',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
              'edit_priority_queue': {
                'title': 'Edit Priority Queue',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_priority_queue': {
                'title': 'Delete Priority Queue',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'policyName': 'Policy Name',
              'policyDescription': 'Policy Description ',
              'interface': 'Interface',


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\?',
              'delete_success': 'Selected policy is successfully deleted',
              'shaper_required': 'please add 1 shaper',


            },
          },
          'create': {},
          'edit': {
            'qos_title': 'Priority Queue',
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'Address Group Edit',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'Address Group Add',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': 'Servis Zinciri Ekle',
                'title_short': 'Ekle',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'Servis Zinciri Detayları',
                'title_short': 'Detay',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': 'Servis Zinciri Sil',
                'title_short': 'Sil',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'policyDescription': {
                'label': 'PolicyDescription',
                'placeholder': 'Please enter policy description',
              },
              'queueLimit': {
                'label': 'Queue Limit',
                'placeholder': 'Please enter queue limit'
              },
              'queueLimitTooltip': {
                'label': 'Queue-limit must be between 0 and 4294967295',
              },
              'matchClass':{
                'label':'Match'
              },
              'panelDescription':{
                'label':' Click to configure match to class'
              },
              'selectQueue': {
                'label': '--Select Queue Type--',
              },
              'addClass': {
                'label': 'Add Class ',
              },
              'updateClass': {
                'label': 'Update Class ',
              },
              'classList': {
                'label': 'Class List ',
              },
              'addList': {
                'label': 'Save',
              },
              'queueType': {
                'label': 'Queue Type',
                'placeholder': 'Please enter  queue type',
              },
              'ruleName': {
                'label': 'Rule Name',
                'placeholder': 'Please enter rule name',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Please enter description',
              },
              'classIdTooltip': {
                'label': 'Class Id should be between 1 and 7',
                'placeholder': 'Please enter class id',
              },
              'classId': {
                'label': 'Class Id',
                'placeholder': 'Please enter class id',
              },
              'interface': {
                'label': 'Interface ',
                'placeholder': 'Please enter interface',
              },
              'vlan': {
                'label': 'Vlan ',
                'placeholder': 'Please enter vlan',
              },
              'sourceAddress': {
                'label': 'Source Address',
                'placeholder': 'Please enter source address',
              },
              'sourcePort': {
                'label': 'Source Port',
                'placeholder': 'Please enter source port',
              },
              'destinationAddress': {
                'label': 'Destination Address',
                'placeholder': 'Please enter destinationAddress',
              },
              'destPort': {
                'label': 'Destination Port',
                'placeholder': 'Please enter destPort',
              },
              'protocol': {
                'label': 'Protocol ',
                'placeholder': 'Please enter protocol',
              },
              'dscp': {
                'label': 'DSCP',
                'placeholder': 'Please enter dscp',
              },
              'application': {
                'label': 'Application',
                'placeholder': 'Please enter dscp',
              },
              'ip': {
                'label': 'Policy Node',
                'placeholder': 'Please enter ip',
              },
              'inboundInterface': {
                'label': 'Inbound Interface',
                'placeholder': 'Please enter outboundInterface',
              },
              'defaultPolicy': {
                'label': 'Default Policy',
              },
              'classPolicy': {
                'label': 'Class Policy',
              },


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },


            },
            'messages': {
              'no_class_id': 'Class Id Should Be Between 1 and 7',
              'empty_class_id': 'Please enter class id.Class Id should be between 1 and 7',
              'multiple_class_id': 'Same Class Id Cannot Be Added Multiple Times',
              'save_success': '\'{{dto.name}}\' is successfully updated',
              'create_success': '\'{{dto.name}}\'  is successfully created',
              'queue_limit_interval': 'Queue Limit Should Be Between 1 and 2147483647',
              'delete_confirm': 'Do you want to delete selected class?',
              'delete_success': 'Selected class is succesfully deleted.',
              'addMatch':'Please click add to class button before adding to list',
              'unique_name':'Please enter unique policy name'
            },
          },
        },
        'rate_control': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_rate_control': {
                'title': 'Create New Rate Control',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view_rate_control': {
                'title': 'Detail Rate Control',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
              'edit_rate_control': {
                'title': 'Edit Rate Control',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_rate_control': {
                'title': 'Delete Rate Control',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'policyName': 'Policy Name',
              'policyDescription': 'Policy Description ',
              'bandwidth': 'Bandwidth',
              'latency': 'Latency(ms)',
              'burst': 'Burst',
              'inputInterface': 'Input Interface',
              'interfaceNumber': 'Interface Number',
              'interface': 'Interface',
              'redirect': 'Redirect',
              'outboundInterface': 'Outbound Interface',

              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\?',
              'delete_success': 'Selected policy is successfully deleted',
              'save_success': '\'{{dto.name}}\' is successfully created',
              'edit_success': '\'{{dto.name}}\'  is successfully updated',
              'shaper_required': 'please add 1 shaper',
            },


          },
          'create': {},
          'edit': {
            'qos_title': 'Rate Control',
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'Address Group Edit',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'Address Group Add',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': 'Servis Zinciri Ekle',
                'title_short': 'Ekle',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'Servis Zinciri Detayları',
                'title_short': 'Detay',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': 'Servis Zinciri Sil',
                'title_short': 'Sil',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'bandwidth': {
                'label': 'Bandwidth',
                'placeholder': 'Please enter bandwidth',

              },
              'ifb': {
                'label':'Input Functional Block',
              },
              'addNewIfb': {
                'label': 'Add New Ifb',
              },
              'viewIfb': {
                'label': 'View Ifb',
              },
              'addList': {
                'label': 'Save',
              },
              'bandwidthTooltip': {
                "label": "Unit can be in bit or bps ex. 10mbit,10mbps or Bandwith can be entered without unit like 10 and it will correspond to 10 kbit",

              },
              'latency': {
                'label': 'Latency(ms)',
                'placeholder': 'Please enter latency',
              },
              'bandwidthType': {
                'label': 'Bandwidth Type',
                'placeholder': 'Please enter latency',
              },
              'selectBandwithType': {
                'label': 'Select Bandwidth Type',
                'placeholder': 'Please enter latency',
              },
              'burst': {
                'label': 'Burst',
                'placeholder': 'Please enter burst',
              },
              'inputInterface': {
                'label': 'Input Interface',
                'placeholder': 'Please enter input interface',
              },
              'interfaceNumber': {
                'label': 'Interface Number',
                'placeholder': 'Please enter interface number',
              },

              'interface': {
                'label': 'Interface',
                'placeholder': 'Please enter interface',
              },

              'redirect': {
                'label': 'Redirect',
              },
              'outBoundInterface': {
                'label': 'Outbound Interface',
                'placeholder': 'Please enter outbound interface',
              },


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },

            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\?',
              'delete_success': 'Selected ifb is successfully deleted',
              'delete_ifb': 'Do you want to delete selected test?',
              'delete_success_ifb': 'Ifb is successfully deleted',
              'save_success': '\'{{dto.name}}\' is successfully created',
              'edit_success': '\'{{dto.name}}\'  is successfully updated',
              'unique_name':'Please enter unique policy name',
              'ifb_name':'Ifb name must start with ifb ',
              'bandwidth_control':'Please select bandwidth type & enter bandwidth',


            },
            'messages_ifb': {
              'delete_confirm': 'Do you want to delete selected ifb?',
              'delete_success': 'Selected \'{{dto}}\'  is successfully deleted!',
              'save_success': 'Ifb is successfully created',
              'delete_ifb_success': 'Ifb is succesfully deleted!',

            }

          },
        },
        'ifb_create': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_rate_control': {
                'title': 'Create New Rate Control',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view_rate_control': {
                'title': 'Detail Rate Control',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'edit_rate_control': {
                'title': 'Edit Rate Control',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_rate_control': {
                'title': 'Delete Rate Control',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'ifbName': 'Ifb Name',
              'interface': 'Interface List  ',
              'nameTooltip':'name must be (ifb0-ifb999)',
              'cancel':'Cancel',


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\?',
              'delete_success': '\'{{dto.name}}\' Deleted Successfully',
              'save_success': '\'{{dto.name}}\' is successfully created',
              'edit_success': '\'{{dto.name}}\'  is successfully updated',
              'unique_name':'Please enter unique ifb name'
            },
            'messages_ifb': {
              'delete_confirm': 'Do you want to delete selected   \'{{dto}}\'? ',
              'delete_success': 'Selected  is successfully deleted!',
              'save_success': ' is successfully updated',
              'create_success': ' is successfully created',
              'delete_ifb_success': '\'{{dto.name}}\' is succesfully deleted!',


            }


          },
          'create': {},
          'edit': {
            'qos_title': 'Rate Control',
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'Address Group Edit',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'Address Group Add',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': 'Servis Zinciri Ekle',
                'title_short': 'Ekle',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'Servis Zinciri Detayları',
                'title_short': 'Detay',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': 'Servis Zinciri Sil',
                'title_short': 'Sil',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'ifbNameTooltip': {
                'label': 'name must be (ifb0-ifb999)',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'bandwidth': {
                'label': 'Bandwidth',
                'placeholder': 'Please enter bandwidth',

              },
              'latency': {
                'label': 'Latency(ms)',
                'placeholder': 'Please enter latency',
              },
              'burst': {
                'label': 'Burst',
                'placeholder': 'Please enter burst',
              },
              'inputInterface': {
                'label': 'Input Interface',
                'placeholder': 'Please enter input interface',
              },
              'interfaceNumber': {
                'label': 'Interface Number',
                'placeholder': 'Please enter interface number',
              },

              'interface': {
                'label': 'Interface',
                'placeholder': 'Please enter interface',
              },

              'redirect': {
                'label': 'Redirect',
              },
              'outBoundInterface': {
                'label': 'Outbound Interface',
                'placeholder': 'Please enter outbound interface',
              },


              'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },

            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\?',
              'delete_success': 'Selected ifb is successfully deleted',
              'save_success': '\'{{dto.name}}\' is successfully created',
              'edit_success': '\'{{dto.name}}\'  is successfully updated',

            },
            'messages_ifb': {
              'delete_confirm': 'Do you want to delete selected \'{{dto}}\?',
              'delete_success': 'Selected \'{{dto}}\'  is successfully deleted!',
              'save_success': 'Ifb is successfully created',
              'delete_ifb_success': 'Ifb is succesfully deleted!',

            }

          },
        },
        'qos_match_list': {
          'fields': {
            'match': {
              'label': 'Match',
              'header': 'Match List',
            },
            'service': {
              'label': 'Service',
              'placeholder': 'Please enter tunnel ip',
            },
            'fromGroup': {
              'label': 'From Group',
              'placeholder': 'Please enter network subnet',
            },
            'toGroup': {
              'label': 'To Group',
              'placeholder': 'Please enter network subnet',
            },
            'selectrGroup': {
              'label': '-- Select group --',
            },
            'selectService': {
              'label': '-- Select service --',
            },
            'index': {
              'label': 'Index',
            },
            'name': {
              'label': 'Match Name',
              'placeholder': 'Enter Name...',
            },
            'vlanTooltip': {
              'label': 'Match VLAN ID must be between 0 and 4095',
            },
            'selectDscp': {
              'label': '--select dscp--',
            },
            'selectPort': {
              'label': '--Select Port--',
            },
            'addMatch': {
              'label': 'Add Match',
            },
            'updateMatch': {
              'label': 'Update Match',
            },
            'description': {
              'label': 'Description',
              'placeholder': 'Enter Description...',
            },
            'interface': {
              'label': 'Interface',
            },
            'vif': {
              'label': 'Vlan Id',
              'placeholder': 'Enter Virtual Local Area Network (VLAN) tag...',
            },
            'ip': {
              'label': 'IP',
            },
            'dscp': {
              'label': 'DSCP',
            },
            'application': {
              'label': 'Application',
            },
            'protocol': {
              'label': 'Protocol',
            },
            'src_ip': {
              'label': 'Source IP',
              'placeholder': 'Ip with subnet mask',
            },
            'src_port': {
              'label': 'Source Port',
              'placeholder': 'Enter Source Port...',
            },
            'dst_ip': {
              'label': 'Destination IP',
              'placeholder': 'Ip with subnet mask',
            },
            'dst_port': {
              'label': 'Destination Port',
              'placeholder': 'Enter Destination Port...',
            },
            'matches': {
              'label': 'Match Name',
            },
            'direction': {
              'label': 'Direction',
            },
            'qosObjects': {
              'label': 'QoS Object',
            },
            'next': {
              'label': 'Next',
            },

          },
          'messages': {
            'no_match_name': 'Match Name Should Be Typed To Save Match',
            'differentObjName': 'Please select different object name',
            'isDefault' : 'You can add a match with is default selected',
            'add_match': 'You must add at least one match',
            'multiple_match_name': 'Same Match Name Cannot Be Added Multiple Times',
            'checkSecondStep':'Please enter first step(Interface-Direction)',
            'checkFirstStep':'Please enter second step(Qos Object)',
            'vif_interval': 'VIF Should Be Between 0 and 4095',
            'delete_confirm': 'Do you want to delete selected match?',
            'delete_success': 'Selected match successfully deleted.',

          },
        },
        'qos-template': {

          'list': {
            'title': 'QoS Template',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'create_qos_template': {
                'title': 'Create New Template',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_qos_template': {
                'title': 'Edit Template',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'view_qos_template': {
                'title': 'View Template',
                'title_short': 'View',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
              'delete_qos_template': {
                'title': 'Delete Template',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }

            },
            'fields': {
              'matches': 'Match Name',
              'interface':'Interface',
              'direction':'Direction',
              'qosObjects':'QoS Object',
              'sourceDestIp': 'Source Group',
              'sourceDestPort': 'Destination Group',
              'application': 'Application',
              'next':'Next',
            },
            'messages': {
              'delete_confirm': 'Do you want to delete selected traffic policy? ',
              'delete_success': 'Selected policy is succesfully deleted!',
              'shaper_required': 'please add 1 shaper',
              'shaper_default': 'please add  a default isDefault shaper for every interface',
              'pq_default': 'please add  a default isDefault priority queue for every interface',
            },
          },
          'edit': {
            'qos_title': 'Round Robin',
            'basePerm': 'vyos',
            'fields': {
              'policyName': {
                'label': 'Policy Name',
                'placeholder': 'Please enter policy name',
              },
              'policyDescription': {
                'label': 'Policy Description',
                'placeholder': 'Please enter policy description',
              },
              'defaultFields': {
                'header': 'Default Policy',
              },
              'match': {
                'label': 'Match',
              },
              'selectQueue': {
                'label': '--Select Queue Type--',
              },
              'queueLimit': {
                'label': 'Queue Limit',
                'placeholder': 'Please enter queue limit',
              },
              'addClass': {
                'label': 'Add Class',
              },
              'updateClass': {
                'label': 'Update Class',
              },
              'addList': {
                'label': 'Save',
              },
              'panelDescription': {
                'label': 'Click to configure match to class'
              },
              'queueLimitTooltip':{
                'label':'Queue-limit must be between 0 and 4294967295'
              },
              'quantumTooltip':{
                'label':'Quantum must be between 0 and 4294967295'
              },
              'classIdTooltip':{
                'label':'Class Id should be between 1 and 4096'
              },

              'queueType': {
                'label': 'Queue Type',
                'placeholder': 'Please enter queue type',
              },
              'quantum': {
                'label': 'Quantum',
                'placeholder': 'Please enter quantum',
              },
              'interface': {
                'label': 'Interface',
              },
              'class': {
                'label': 'Class',
              },
              'classFields': {
                'header': 'Class Policy',
              },
              'classList': {
                'header': 'Class List',
              },
              'classId': {
                'label': 'Class Id',
                'placeholder': 'Please enter class id',
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Please enter description',
              },
              'sourceDestIp': {
                'label': 'Source Ip-Destination Ip',
              },
              'sourceDestPort': {
                'label': 'Source Port-Destination Port',
              },
              'application': {
                'label': 'Application',
              },
            },
            'messages': {
              'no_class_id': 'Class Id Should Be Between 1 and 4095',
              'empty_class_id': 'Please enter class id.Class Id should be between 1 and 4096',
              'multiple_class_id': 'Same Class Id Cannot Be Added Multiple Times',
              'save_success': ' \'{{dto.name}}\ is successfully updated',
              'create_success': ' \'{{dto.name}}\ is successfully created',
              'queue_limit_interval': 'Queue Limit Should Be Between 1 and 2147483647',
              'quantum_interval': 'Quantum Should Be Between 1 and 2147483647',
              'delete_confirm': 'Do you want to delete selected class?',
              'delete_success': 'Selected class is successfully deleted',
              'addMatch':'Please click add to class button before adding to list',
              'unique_name':'Please enter unique policy name'
            },
          },
        },
        'qos-nf': {
          'list': {
            'title': 'QoS',
            'icon': 'fa fa-window-restore',
            'basePerm': 'vyos', // TODO change base perm
            'perm': '#list',
            'actions': {
              'view_qos_nf': {
                'title': 'View Template',
                'title_short': 'View',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
            },
            'fields': {
              'policyName': 'Policy Name',
              'interface':'Interface',
              'defaultFields':'Default Fields',
              'defaultBandwidth':'Default Bandwidth',
              'defaultQueueLimit':'Default Queue Limit',
              'defaultQueueType':'Default Queue Type',
              'defaultQuantum':'Default Quantum',
              'defaultBurst':'Default Ceiling',
              'defaultPriority':'Default Priority',
              'defaultDscp':'Default Dscp',
              'latency':'Latency',
              'ifb':'Ifb',
              'classFields':'Class Fields',
              'classBandwidth':'Class Bandwidth',
              'classQueueLimit':'Class Queue Limit',
              'classQueueType':'Class Queue Type',
              'classQuantum':'class Quantum',
              'classBurst':'Class Ceiling',
              'classPriority':'Class Priority',
              'classDscp':'Class Dscp',
              'matchFields':'Match Fields',
              'matchName':'Match Name',
              'matchInterface': 'Match Interface',
              'vlanId': 'Vlan Id',
              'dscp': 'DSCP',
              'application': 'Application',
              'protocol': 'Protocol',
              'src_ip': 'Source IP',
              'src_port': 'Source Port',
              'dst_ip': 'Destination IP',
              'dst_port': 'Destination Port',
            },
            'messages': {
            },
          },
        },
      },
      'bgp': {
          'title': 'BGP',
          'icon': 'fa fa-random',
        'list': {
          'title': 'BGP',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_bgp': {
              'title': 'Create New BGP',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_bgp': {
              'title': 'Detail Static Route',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_bgp': {
              'title': 'Edit Static Route',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_bgp': {
              'title': 'Static Route Tanımını Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'bgpAsNumber': 'As Number',
            'routerId': 'Router ID *',
            'sourceIp': 'Source IP',
            'aggregate': 'Aggregate',
            'addNeighbour': 'Add Neighbour',

            'aggregateNetworkValue': 'aggregateNetworkValue',
            'isSummaryOnly': 'isSummaryOnly',
            'neigbors': 'Neighbors',
            'redistributeFromVAlues': 'redistributeFromVAlues',
            'password': 'password',
            'peerGroups': 'Peer Groups',
            'isNextHopSelf': 'isNextHopSelf',
            'updateSource': 'updateSource',
            'ebgpMultiHop': 'ebgpMultiHop',
            'localAs': 'localAs',
            'remoteAs': 'Remote As',
            'weight': 'weight',
            'isAllowIn': 'isAllowIn',
            'ipAddress': 'Ip Address*',
            'interfaceName': 'Interface Variable',
            'from': 'From',
            'redistribution': 'Redistribution',
            'isDefaultOrigin': 'isDefaultOrigin',
            'metricSpace': 'Metric(1-16)',
            'metricArea': 'Metric(1-16)',
            'metricTypeValue': 'Metric Type',
            'metricType': 'Metric Type',
            'routeMap': 'Route Map',
            'createRouteMap': 'Create Route Map',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected bgp?',
            'delete_success': 'Selected \'{{dto.staticRouteType}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'Bgp Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Static Route Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Static Route Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'bgpAsNumber': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addPeerGroup': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addNewPeerGroup': {
              'label': 'Add Peer Group',
            },
            'showPeerGroup': {
              'icon': 'fa fa-eye',
              'label': 'Show Peer Groups',
            },
            'addroutemap': {
              'label': 'Add Route Map',
            },
            'show': {
              'label': 'Show Route Map',
              'icon': 'fa fa-eye',
            },
            'routerId': {
              'label': 'Router ID',
              'placeholder': 'Please enter external bgp routerId ',
            },
            'sourceIp': {
              'label': 'Source IP',
              'placeholder': 'Please enter source ip ',
              'help_line': '',
              'help_block': '',
            },
            'aggregate': {
              'label': ' Aggregate',

            },

            'aggregateNetworkValue': {
              'label': 'Network Value ',
              'placeholder': 'Ip with subnet mask',

            },
            'isSummaryOnly': {
              'label': 'Summary Only',
            },
            'neigbors': {
              'label': 'Neighbors',
              'placeholder': 'Please enter Neighbors',
            },
            'metricType': {
              'label': 'Metric Type(1-2)',
              'placeholder': '1-2',

            },
            'addNeighbour': {
              'label': 'Add Neighbour',
            },
            'routeMap': {
              'label': 'Route Map',
            },
            'metric': {
              'label': 'metric',
              'placeholder': 'Between 1-16',

            },
            'redistributeFromVAlues': {
              'label': 'redistributeFromVAlues',
            },
            'password': {
              'label': 'password',
            }, 'peerGroups': {
              'label': 'Peer Groups',
            },
            'isNextHopSelf': {
              'label': 'isNextHopSelf',
            },
            'ebgpMultiHop': {
              'label': 'ebgpMultiHop',
            }, 'localAs': {
              'label': 'Local AS',
            }, 'remoteAs': {
              'label': 'Remote AS',
            },
            'weight': {
              'label': 'weight',
            },
            'ipAddress': {
              'label': 'Ip Address',
            }, 'interfaceName': {
              'label': 'Interface Variable',
              'placeholder': 'Interface Variable',

            }, 'redistribution': {
              'label': 'Redistribution',
            }, 'metricArea': {
              'label': 'Metric',
            },

            'metricTypeValue': {
              'label': 'Metric Type',
            },
            'from': {
              'label': 'From',
            },
            'metricSpace': {
              'label': 'Metric(1-16)',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Bgp is successfully updated.',
            'create_success': ' Bgp is successfully created',
            'delete_confirm': 'Do you want to delete selected bgp?',
            'delete_success': 'Bgp is succesfully deleted!',
            'networkValue_messages': 'Same Network Value cannot be added multiple times.',
            'error_add_neighbour': 'Same Ip Address or Interface Name cannot be added multiple times.',
            'error_add_bgpAsNumber': 'Bgp As Number can be added between 1-4294967294',
            'errorPearMessage': 'Bgp As Number and Local As values should be different',

          },
        },
      },
      'syslog': {
        'title': 'Syslog',
        'icon': 'fa fa-random',

        'list': {
          'title': 'Syslog',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_syslog': {
              'title': 'Create New Syslog',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_syslog': {
              'title': 'Detail Syslog',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_syslog': {
              'title': 'Edit Syslog',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_syslog': {
              'title': 'Delete Syslog',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'remotesyslog': 'Remote Server',
            'remotesyslogIp': 'Remote Syslog Server IP',
            'port': 'Port',
            'facility': 'Facility',
            'protocol': 'Protocol',
            'level': 'Level',
            'selectFacility':'--select facility--',
            'selectLevel':'--select level--',
            'selectProtocol':'--select protocol--',
            'addList':'Add to List',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected host? ',
            'delete_success': 'Selected host is succesfully deleted!',
            'unique_host':'Please enter a unique remote syslog server ',

          },
        },
        'create': {},
        'edit': {
          'title': 'Syslog Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Syslog Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Syslog Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'remotesyslog': {
              'label': 'Remote Server',
              'placeholder': 'Please enter bgp number',
            },
            'remotesyslogIp': {
              'label': 'Remote Syslog Server IP',
              'placeholder': 'Please enter bgp number',
            },
            'port': {
              'label': 'Port',
              'placeholder': '<1-65535>',
            },
            'facility': {
              'label': 'Facility',
              'placeholder': 'Please enter facility',

            },
            'level': {
              'label': 'Level',
              'placeholder': 'Please enter level',

            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Syslog is successfully updated.',
            'create_success': ' Syslog is successfully created',
            'delete_confirm': 'Do you want to delete selected syslog?',
            'delete_success': 'Syslog is succesfully deleted!',
            'error_facility': 'Same Facility value cannot be added multiple times.',
            'syslog_confirm': 'Do you want to delete selected facility?',
            'syslog_deleted': 'Selected facility succesfully deleted',
            'facility_error': 'Please select facility'


          },
        },
      },
      'dpi_class': {
        'list': {
          'title': 'DPI',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_dpi_class': {
              'title': 'Create New DPI Class',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_dpi_class': {
              'title': 'Detail DPI Class',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_dpi_class': {
              'title': 'Edit DPI Class',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_dpi_class': {
              'title': 'Delete DPI Class',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'description': 'Description',
            'bandwidth': 'Bandwidth',
            'ceiling': 'Ceiling',
            'queueLimit': 'Queue Limit',
            'priority': 'Priority',
            'queueType': 'Queue Type',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.description}}\'?',
            'delete_success': 'Selected class: \'{{dto.description}}\' is succesfully deleted!',
            'delete_error': 'Selected class has been used for dpi configuration',


          },
        },
        'create': {},
        'edit': {
          'title': 'DPI',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'DPI Class Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'DPI Class Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add DPI Class',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'View DPI Class',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete DPI Class',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'description': {
              'label': 'Description',
              'placeholder': 'Please enter description',
            },
            'bandwidth': {
              'label': 'Bandwidth',
              'placeholder': 'Please enter bandwidth',
            },
            'ceiling': {
              'label': 'Ceiling',
              'placeholder': 'kbps ',
            },
            'queueLimit': {
              'label': 'Queue Limit',
              'placeholder': 'Please enter queue limit',

            },
            'queueType': {
              'label': 'Queue Type',
              'placeholder': '< 1-4294967295>',

            },
            'priority': {
              'label': 'Priority',
              'placeholder': '<0-7>',

            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.description}}\' is successfully updated.',
            'create_success': ' \'{{dto.description}}\' is successfully created',
            'delete_confirm': 'Do you want to delete selected \'{{dto.description}}\'?',
            'delete_success': '\'{{dto.description}}\' is succesfully deleted!',
            'error_facility': 'Same Facility value cannot be added multiple times.',
            'error_priority': 'Priority value should be between 0-7',
            'error_same_class': 'Same description cannot be added multiple times.',




          },
        },
      },
      'dpi': {
        'list': {
          'title': 'DPI',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_dpi': {
              'title': 'Create New DPI ',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_dpi': {
              'title': 'Detail DPI',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_dpi': {
              'title': 'Edit DPI',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_dpi': {
              'title': 'Delete DPI',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'actionType': 'Action Type',
            'interfaceName': 'Interface Variable',
            'protocolNameList': 'Protocol Name List',
            'description': 'Description',
            'bandwidth': 'Bandwidth',
            'ceiling': 'Ceiling',
            'queueLimit': 'Queue Limit',
            'queueType': 'Queue Type',
            'priority': 'Priority',
            'classList': 'Class List',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected DPI?',
            'delete_success': 'Selected DPI is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'DPI',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'DPI Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'DPI Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add DPI',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'View DPI',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete DPI',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'actionType': {
              'label': 'Action Type',
            },
            'interfaceName': {
              'label': 'Interface Variable',
              'placeholder': 'Interface Variable',
            },
            'protocolNameList': {
              'label': 'Protocol Name List',
            },
            'classList': {
              'label': 'Class List',
            },
            'description': {
              'label': 'Description',
            },
            'bandwidth': {
              'label': 'Bandwidth',
            },
            'ceiling': {
              'label': 'Ceiling',
            },
            'queueLimit': {
              'label': 'Queue Limit',
            },
            'queueType': {
              'label': 'Queue Type',
            },
            'priority': {
              'label': 'Priority',
            },
            'addClass': {
              'label': 'Add Class ',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'DPI is successfully updated.',
            'create_success': ' DPI is successfully created',
            'delete_confirm': 'Do you want to delete selected dpi?',
            'delete_success': 'DPI is succesfully deleted!',
            'error_facility': 'Same Facility value cannot be added multiple times.',


          },
        },
      },
      "application_dpi": {
        "title": "Application DPI",
        "icon": "fa fa-cog",
        "list": {
          "title": "Application DPI",
          "icon": "fa fa-cog",
          "basePerm": "vyos",
          "perm": "#list",
          "actions": {
            "create_application": {
              "title": "Create Application ",
              "title_short": "New",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create",
            },
            "view_application": {
              "title": "Detail URL Filtering",
              "title_short": "Detail",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view"
            },
            "edit_application": {
              "title": "Edit URL Filtering",
              "title_short": "Edit",
              "icon": "fa fa-pencil",
              "color": "green-meadow",
              "perm": "#edit"
            },
            "delete_application": {
              "title": "Delete URL Filtering",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            }

          },
          "fields": {
            "name": "Name",
            "description": "Description",
            "appList": "Select Application",
            "tagList": "Select Category",
            "selectedApplication": "Selected Categories & Applications",
            "save": "Next&Save",

          },

          "messages": {
            "delete_confirm": "Do you want to delete selected application",
            "delete_success": "Selected  application is succesfully deleted!",

          },
        },
        "create": {},
        "edit": {
          "basePerm": "vyos",
          "modes": {
            "edit": {
              "title": "Edit Application",
              "icon": "fa fa-pencil",
              "perm": "#edit",
            },
            "create": {
              "title": "Create Application",
              "icon": "fa fa-plus",
              "perm": "#create",
            },
          },
          "actions": {
            "create": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create",
            },
            "view": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view"
            },
            "delete": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            }
          },
          "fields": {
            "name": {
              "label": "Name",
            },
            "description": {
              "label": "Description",
            },
            "tag": {
              "label": "Tag List",

            },
            "app": {
              "label": "Application List",
            },
            "tagAppList": {
              "label": "Selected App List",
            },
            "save": {
              "label": "Save",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },

          },
          "messages": {
            "save_success": "Application  is successfully updated.",
            "save_relay_success": "Application is succesfully created.",
            "create_success": "Application is successfully created.",
            "delete_success": "Application is deleted succesfully."
          },
        },
      },
      "sla_group": {
        "title": "SLA Rule",
        "icon": "fa fa-cog",
        "edit": {
          "title": "SLA Rule",
          "icon": "fa fa-cog",
          "basePerm": "vyos",
          "perm": "#list",
          "fields": {
            "name": "SLA Rule Name",
            "maxDelay": "Max Delay(ms)",
            "maxJitter": "Max Jitter(ms)",
            "packageLoss": "Package Loss(%)",
            "packageLossPlaceholder": "%",
            "maxDelayPlaceholder": "ms",
            "maxJitterPlaceholder": "ms",
            "save": "Save",

          },
          "messages": {
            "sla_warning": "max delay,max jitter or packet loss must have at least one.",
          },
        },

      },
      "category_dpi": {
        "title": "Category DPI",
        "icon": "fa fa-cog",
        "list": {
          "title": "Category DPI",
          "icon": "fa fa-cog",
          "basePerm": "vyos",
          "perm": "#list",
          "fields": {
            "name": "Name",
            "selectCategory": "Select",
            "description": "Description",
            "mainTag": "Category",
            "idNo": "Id No",
            "longName": "Long Name",
            "save": "Next&Save",

          },

        },
        "create": {},
        "edit": {
          "basePerm": "vyos",
          "modes": {
            "edit": {
              "title": "Edit Application",
              "icon": "fa fa-pencil",
              "perm": "#edit",
            },
            "create": {
              "title": "Create Application",
              "icon": "fa fa-plus",
              "perm": "#create",
            },
          },
          "actions": {
            "create": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-plus-circle",
              "color": "blue-madison",
              "perm": "#create",
            },
            "view": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-eye",
              "color": "default",
              "perm": "#view"
            },
            "delete": {
              "title": "",
              "title_short": "",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            }
          },
          "fields": {
            "name": {
              "label": "Name",
            },
            "description": {
              "label": "Description",
            },
            "mainTag": {
              "label": "Category",

            },
            "idNo": {
              "label": "Id No",
            },
            "longName": {
              "label": "Long Name",
            },
            "save": {
              "label": "Save",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },

          },

        },
      },

      'peer_groups': {

        'list': {
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_peer_groups': {
              'title': 'New Create Peer Groups',
              'title_short': 'New',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_peer_groups': {
              'title': 'Detail Peer Groups',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_peer_groups': {
              'title': 'Edit Peer Groups',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_peer_groups': {
              'title': 'Delete Peer Groups ',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'password': 'Password',
            'isNextHopSelf': 'Next Hop Self',
            'updateSource': 'Update Source',
            'ebgpMultiHop': 'EBGP Multi Hop',
            'localAs': 'Local AS',

            'remoteAs': 'Remote AS',
            'weight': 'Weight',
            'isAllowIn': 'Allowas-in',
            'isDefaultOrigin': 'Default Origin',
            'peerGroupName': 'Name',
            'peerGroups': 'Peer Groups',
            'value': 'Value',
            'policyType': 'Policy Type',
            'accessValues': 'Access List',
            'distributeList': 'Distribute List',
            'title': 'Peer Group',
            'name': 'Name',


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',
            'peergroup_messages':'Selected peer group is used in add neighbour.'

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Peer Groups Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Peer Groups Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Peer Groups ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of Peer Groups',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Peer Groups',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'password': {
              'label': 'Password',
              'placeholder': 'Please enter password',
            },
            'bgpAsNumber': {
              'label': 'bgpAsNumber',
              'placeholder': 'Please enter bgpAsNumber',
            },
            'isNextHopSelf': {
              'label': 'Next Hop Self',
            },
            'create': {
              'label': 'Peer Group',
            },
            'updateSource': {
              'label': 'Update Source',
              'placeholder': 'Please enter Update Source ',
              'help_line': '',
              'help_block': '',
            },
            'ebgpMultiHop': {
              'label': 'EBGP Multi Hop',

            },
            'distributeList': {
              'label': 'Distribute List',

            },

            'localAs': {
              'label': 'Local As',

            },
            'remoteAs': {
              'label': 'Remote AS',
            },
            'weight': {
              'label': 'Weight',
              'placeholder': 'Please enter weight',
            },
            'isAllowIn': {
              'label': 'Allowas-in',
            },
            'isDefaultOrigin': {
              'label': 'Default Origin',
            },
            'peerGroupName': {
              'label': 'Name',
            },
            'peerGroups': {
              'label': 'Peer Groups',
            },
            'value': {
              'label': 'Access Value',
            },
            'policyType': {
              'label': 'Policy Type',
            },
            'accessValues': {
              'label': 'Access List',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.peerGroupName}}\' is successfully updated.',
            'create_success': ' \'{{dto.peerGroupName}}\' is successfully created',
          },
        },
      },
      'interface_health': {
        'list': {
          'title': 'Interface Health',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_interface_health': {
              'title': 'Create New Interface Health',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_interface_health': {
              'title': 'View Interface Health',
              'title_short': 'View',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'edit_interface_health': {
              'title': 'Edit Interface Health',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_interface_health': {
              'title': 'Delete Interface Health ',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'interface': 'Interface',
            'nextHopIp': 'Next Hop IP',
            'target': 'Target',
            'testId': 'Test ID',
            'testType': 'Test Type',
            'ttlLimit': 'TTL Limit',
            'testScript': 'Test Script',
            'failureCount': 'Failure Count',
            'successCount': 'Success Count',
            'interfaceStatus': 'Interface Status',
            'lastStatusChange': 'Last Status Change',
            'lastInterfaceSuccess': 'Last Interface Success',
            'lastInterfaceFailure': 'Last Interface Failure',
            'interfaceFailure': 'Interface Failure',


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected interface ?',
            'delete_success': 'Selected interface is successfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Peer Groups Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Peer Groups Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Peer Groups ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of Peer Groups',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Peer Groups',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'interface': {
              'label': 'Interface Variable',
              'placeholder': 'Please enter password',
            },
            'nextHopIp': {
              'label': 'Next Hop IP',
              'placeholder': 'Please enter nextHopIp',
            },
            'nextHopDhcp': {
              'label': 'NextHop-DHCP',
            },
            'ipAddress': {
              'label': 'IP-Address',
            },
            'target': {
              'label': 'Target Address',
            },
            'testId': {
              'label': 'Test ID',
              'placeholder': 'Please enter Update Source ',
              'help_line': '',
              'help_block': '',
            },
            'testType': {
              'label': 'Test Type',

            },
            'ttlLimit': {
              'label': 'TTL Limit',

            },

            'testScript': {
              'label': 'Test Script',

            },
            'failureCount': {
              'label': 'Failure Count',
            },
            'successCount': {
              'label': 'Success Count',
              'placeholder': 'Please enter weight',
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.interfaceName}}\' is successfully updated.',
            'create_success': ' \'{{dto.interfaceName}}\' is successfully created',
            'delete_test': 'Do you want to delete selected test?',
            'delete_success': 'Test is successfully deleted',
            'notify': 'Form fields have some errors or they are empty. Please check your input',
            'test_id': 'Please enter test id',
            'target_address': 'Please enter target address',
            'test_type': 'Please select test type',
            'invalid_target_address': 'Target address is invalid',
            'invalid_next_hop_ip': 'Next Hop IP is invalid',
            'no_next_hop_ip': 'Next Hop IP should be entered',
            'null_ttl_limit': 'Please enter ttl limit',
            'null_test_script': 'Please enter test script',
            'failure_count_error':'failure count must be (1-10)',
            'success_count_error':'success count must be (1-10)',

          },
        },
      },
      'wanlb_rules': {

        'list': {
          'title': 'WANLB Rules',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_wanlb_rules': {
              'title': 'Create New WANLB Rules',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_wanlb_rules': {
              'title': 'Detail WANLB Rules',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_wanlb_rules': {
              'title': 'Edit WANLB Rules',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_wanlb_rules': {
              'title': 'Delete WANLB Rules ',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'ruleId': 'Rule ID',
            'description': 'Rule Description',
            'interface': 'interface',
            'inboundInterface': 'Inbound Interface',
            'weight': 'Weight',
            'destinationIp': 'Destination IP',
            'destinationPort': 'Destination Port',
            'sourceIP': 'Source IP',
            'sourcePort': 'Source Port',
            'protocol': 'Protocol',
            'burst': 'Burst',
            'period': 'Period',
            'rate': 'Rate',
            'threshold': 'Threshold',
            'perPacketBalancing': 'Per-packet Balancing',
            'exclude': 'Exclude',
            'failover': 'Failover',
            'monitoringPacket': 'Packet',
            'monitoringInInterface': 'In Interface',
            'monitoringOutInterface': 'Out Interface',
            'monitoringLimit': 'Limit',


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected rule ?',
            'delete_success': 'Selected rule is succesfully deleted!',


          },
        },
        'create': {},
        'edit': {
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'WANLB Rules Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'WANLB Rules Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add WANLB Rules ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of WANLB Rules',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete WANLB Rules',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'ruleId': {
              'label': 'Rule ID',
              'placeholder': 'Please enter rule id',
            },
            'description': {
              'label': 'Rule Description',
              'placeholder': 'Please enter description',
            },
            'interface': {
              'label': 'Interface Variable',
            },
            'inboundInterface': {
              'label': 'Inbound Interface',
              'placeholder': 'Please enter  inbound Interface ',

            },
            'weight': {
              'label': 'Weight',

            },
            'destinationIp': {
              'label': 'Destination IP',

            },
            'monitoringPacket': {
              'label': 'Packet',

            },
            'monitoringInInterface': {
              'label': 'In Interface',

            },
            'monitoringOutInterface': {
              'label': 'Out Interface',

            },
            'monitoringLimit': {
              'label': 'Limit',

            },

            'destinationPort': {
              'label': 'Destination Port',

            },
            'sourceIP': {
              'label': 'Source IP',
            },
            'sourcePort': {
              'label': 'Source Port',
              'placeholder': 'Please enter source port',
            },
            'protocol': {
              'label': 'Protocol',
              'placeholder': 'Please enter protocol',
            },
            'burst': {
              'label': 'Burst',
              'placeholder': 'Please enter burst',
              'tooltip' : 'Limit burst must be (0-4294967295)',
            },
            'period': {
              'label': 'Period',
              'placeholder': 'Please enter period',
              'select_option': '--select period--',
            },
            'rate': {
              'label': 'Rate',
              'placeholder': 'Please enter rate',
              'tooltip': 'Limit rate must be (0-4294967295)',
            },
            'threshold': {
              'label': 'Threshold',
              'placeholder': 'Please enter threshold',
              'select_option': '--select threshold--',
            },
            'perPacketBalancing': {
              'label': 'Per-packet Balancing',
              'tooltip': 'Option to match traffic per-packet instead of the default, per-flow',
            },

            'exclude': {
              'label': 'Exclude',
              'tooltip': 'Exclude packets matching this rule from wan load balance',
            },
            'failover': {
              'label': 'Failover',
              'placeholder': 'Please enter period',
              'tooltip': 'Enable failover for packets matching this rule from wan load balance',
            },
            'rate_option': {
              'label': 'Rate Option',
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Rule is successfully saved.',
            'create_success': ' Rule is successfully saved',
            'edit_success': 'Please save the rule list, after editing.',
            'warning': ' inbound interface is the same as the outbound interface',
            'burst_error': 'Burst must be 0-4294967295',
            'ip_not_valid': 'There Is An Invalıd IP on Page',
            'delete_iface_confirm': 'Do you want to delete selected interface?',
            'delete_iface_success': 'Interface is successfully deleted',
          },
        },
      },
      'lb_options': {
        'list': {
          'title': 'Load Balancing',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_lb_options': {
              'title': 'Create New LB Options',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_wanlb_rules': {
              'title': 'Detail LB Options',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_wanlb_rules': {
              'title': 'Edit LB Options',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_wanlb_rules': {
              'title': 'Delete LB Options ',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'sourceNat': 'Source NAT',
            'localTraffic': 'Local Traffic',
            'interface': 'interface',
            'flushConnections': 'Flush Connections',
            'stickConnection': 'Weight',
            'hook': 'Hook',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'LB Options',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'WANLB Rules Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'WANLB Rules Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add WANLB Rules ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of WANLB Rules',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete WANLB Rules',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'sourceNat': {
              'label': 'Source Nat',
              'placeholder': 'Please enter source nat',
            },
            'localTraffic': {
              'label': 'Local Traffic',
              'placeholder': 'Please enter local traffic',
            },
            'interface': {
              'label': 'Interface',
            },
            'flushConnections': {
              'label': 'Flush Connections',
              'placeholder': 'Please enter flush connections ',

            },
            'stickConnection': {
              'label': 'Stick Connection',

            },
            'hook': {
              'label': 'Hook',

            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.peerGroupName}}\' is successfully updated.',
            'create_success': 'Main settings is successfully saved',
          },
        },
      },

      'suricata_categories': {
        'list': {
          'title': 'Suricata',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'select_all': {
              'title': 'Select All',
              'title_short': 'Select All',
              'icon': '',
              'color': 'green-meadow',
              'perm': '#create',
            },
            'unselect_all': {
              'title': 'Unselect All',
              'title_short': 'Unselect All',
              'icon': '',
              'color': 'default',
              'perm': '#view'
            },
            'apply': {
              'title': 'Apply',
              'title_short': 'Apply',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'save': {
              'title': 'Save',
              'title_short': 'Save',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#delete'
            }

          },
          'fields': {

            'selectAll': 'Select All',
            'unselectAll':'Unselect All',
            'apply':'Apply',
            "startTime": "Update Start Time: ",
            "updateSettings": "Rules Update Settings",
            "updateInterval": "Update Interval",



            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',
            'save_success':'Rules successfully saved',
            'success_reload':'Successfully applied.',
            'unsuccess_reload':'Suricata process is not running.Could not applied.',

          },
        },

      },
      'suricata_blocks': {
        'list': {
          'title': 'Suricata',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'delete': {
              'title': 'Delete',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'unselect_all': {
              'title': 'Unselect All',
              'title_short': 'Unselect All',
              'icon': '',
              'color': 'default',
              'perm': '#view'
            },
            'apply': {
              'title': 'Apply',
              'title_short': 'Apply',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'save': {
              'title': 'Save',
              'title_short': 'Save',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#delete'
            }

          },
          'fields': {
            'blockedHosts':'Blocked Hosts Log View Settings',
            'saveOrRemoveHosts':'Save or Remove Hosts',
            'download': 'Download',
            'saveSetting':'Save Settings',
            'clear':'Clear',
            'number':'Number of blocked entries to view.',
            'blockedIp':'Blocked IP',
            'alertDescription':'Alert Description',
            'lastHosts':'Last 500 Hosts Blocked by Suricata',
            "entryCountDefault": 'Default entry : 250',
            "entryCount": 'Entry Count',
            "date" : 'Date',
            "action" : 'Action',
            "priority": 'Priority',
            "protocol": 'Protocol',
            "classification": 'Classification',
            "sourceIpAddress": 'Source Ip Address',
            "sourcePort": 'Source Port',
            "destinationIpAddress": 'Destination Ip Address',
            "destinationPort": 'Destination Port',
            "gidSID" : 'GID:SID',
            "description" : 'Description',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Are you sure wish to clear?',
            'delete_blocks_confirm': 'Do you want to delete block rules?',
            'delete_success': 'Succesfully deleted!',
            'save_success':'Rules successfully saved',
            'success_reload':'Successfully applied.',
            'unsuccess_reload':'Suricata process is not running.Could not applied.',

          },
        },

      },
      "suricata_rule_action": {
        "list": {
          "title": "Suricata",
          "icon": "fa fa-random",
          "basePerm": "vyos",
          "perm": "#list",
          "actions": {
            "delete": {
              "title": "Delete",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            },
            "save": {
              "title": "Save",
              "title_short": "Save",
              "icon": "",
              "color": "blue-madison",
              "perm": "#delete"
            }

          },
          "fields": {
            "ruleAction": "Rule Action",
            "selectRuleAction": "Select Rule Action",
            "clear": "Clear",
            "cancel": "Cancel",
            "apply": "Apply",

            "save": {
              "label": "Save",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
          },
          "messages": {
            "delete_confirm": "Are you sure wish to clear?",
            "delete_blocks_confirm": "Do you want to delete block rules?",
            "delete_success": "Succesfully deleted!",
            "save_success": "Rule with sid: '{{dto.SID}}' has changed its action to '{{dto.action}}' .",
            "create_success": "Rule with sid: '{{dto.SID}}' has changed its action to '{{dto.action}}' .",
            "success_reload": "Successfully applied.",

          },
        },

      },
      "select_suricata_qos": {
        "list": {
          "title": "Suricata",
          "icon": "fa fa-random",
          "basePerm": "vyos",
          "perm": "#list",
          "actions": {
            "delete": {
              "title": "Delete",
              "title_short": "Delete",
              "icon": "fa fa-trash-o",
              "color": "btn-outline uppercase red-sunglo",
              "perm": "#delete"
            },
            "save": {
              "title": "Save",
              "title_short": "Save",
              "icon": "",
              "color": "blue-madison",
              "perm": "#delete"
            }

          },
          "fields": {
            "mark": "Mark",
            "selectMark": "Select Mark",
            "clear": "Clear",
            "save": {
              "label": "Save",
              "placeholder": "",
              "help_line": "",
              "help_block": "",
            },
          },
          "messages": {
            "delete_confirm": "Are you sure wish to clear?",
            "delete_blocks_confirm": "Do you want to delete block rules?",
            "delete_success": "Succesfully deleted!",
            "save_success": "Rule with sid: '{{dto.SID}}' has changed its action to '{{dto.action}}' .",
            "create_success": "Rule with sid: '{{dto.SID}}' has changed its action to '{{dto.action}}' .",
            "success_reload": "Successfully applied.",

          },
        },

      },

      'server': {
        'list': {
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_server': {
              'title': 'Create New Server',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_server': {
              'title': 'Detail Server',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_server': {
              'title': 'Edit Server',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_server': {
              'title': 'Delete Server',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'server': {
              'label': 'Server',
              'placeholder': 'Server IP/Host Name'
            },
            'serverTypeTableHeader': {
              'label': 'Server  Type',
              'placeholder': 'Server IP/Host Name'
            },
            'ntpServerTypes': {
              'placeholder': '--- Server type ---'
            },


            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected server?',
            'delete_success': '\'{{dto.serverIdentifier}}\' is successfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'Server Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Server Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Server Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'server': {
              'label': 'Server',
              'placeholder': 'Please enter an IP or name',
            },
            'unused': {
              'label': 'unused',
            },
            'prefer': {
              'label': 'Prefer',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.serverIdentifier}}\' is successfully saved.',
            'create_success': ' \'{{dto.serverIdentifier}}\' is successfully saved',
            'delete_confirm': 'Do you want to delete selected ntp?',
            'delete_success': '\'{{dto.serverIdentifier}}\' is successfully deleted!',


          },
        },
      },
      'listen_address': {
        'list': {
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_listen_address': {
              'title': 'Create New Listen Address',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_listen_address': {
              'title': 'Detail Listen Address',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#edit'
            },
            'edit_listen_address': {
              'title': 'Edit Listen Address',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_listen_address': {
              'title': 'Delete Listen Address',
              'title_short': 'delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'listen_address': {
              'label': 'Listen Address',
              'placeholder': 'X.X.X.X',
            },
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected listen address?',
            'delete_success': '\'{{dto.listenAddress}}\' is successfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'Bgp Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Static Route Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Static Route Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'listen_address': 'Listen Address'
          },
          'messages': {
            'save_success': '\'{{dto.listenAddress}}\' is successfully saved.',
            'create_success': '\'{{dto.listenAddress}}\' is successfully saved',
            'delete_confirm': 'Do you want to delete selected listen address?',
            'delete_success': '\'{{dto.listenAddress}}\' is successfully deleted!',
            'networkValue_messages': 'Same Network Value cannot be added multiple times.',
            'error_add_neighbour': 'Same Ip Address or Interface Name cannot be added multiple times.',
            'error_add_bgpAsNumber': 'Bgp As Number can be added between 1-4294967294',


          },
        },
      },
      'allowed_clients': {
        'list': {
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_client_address': {
              'title': 'Create Allowed Clients',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_client_address': {
              'title': 'Detail Allowed Clients',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_client_address': {
              'title': 'Edit Allowed Clients',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_client_address': {
              'title': 'Delete Allowed Clients',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'allowed_clients': {
              'label': 'Client Address',
              'placeholder': 'Ip with subnet mask'
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'save_success': '\'{{dto.clientAddress}}\' is successfully saved.',
            'create_success': '\'{{dto.clientAddress}}\' is successfully saved',
            'delete_confirm': 'Do you want to delete selected client address?',
            'delete_success': '\'{{dto.clientAddress}}\' is successfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'Bgp Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Static Route Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Static Route Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'bgpAsNumber': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addPeerGroup': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addNewPeerGroup': {
              'label': 'Add Peer Group',
            },
            'addroutemap': {
              'label': 'Add Route Map',
            },
            'routerId': {
              'label': 'Router ID *',
              'placeholder': 'Please enter external bgp routerId ',
            },
            'sourceIp': {
              'label': 'Source IP',
              'placeholder': 'Please enter source ip ',
              'help_line': '',
              'help_block': '',
            },
            'aggregate': {
              'label': ' Aggregate',

            },

            'aggregateNetworkValue': {
              'label': 'Network Value ',
              'placeholder': 'Ip with subnet mask',

            },
            'isSummaryOnly': {
              'label': 'Summary Only',
            },
            'neigbors': {
              'label': 'Neighbors',
              'placeholder': 'Please enter Neighbors',
            },
            'metricType': {
              'label': 'Metric Type(1-2)',
              'placeholder': '1-2',

            },
            'addNeighbour': {
              'label': 'Add Neighbour',
            },
            'routeMap': {
              'label': 'Route Map',
            },
            'metric': {
              'label': 'metric',
              'placeholder': 'Between 1-16',

            },
            'redistributeFromVAlues': {
              'label': 'redistributeFromVAlues',
            },
            'password': {
              'label': 'password',
            }, 'peerGroups': {
              'label': 'Peer Groups',
            },
            'isNextHopSelf': {
              'label': 'isNextHopSelf',
            },
            'ebgpMultiHop': {
              'label': 'ebgpMultiHop',
            }, 'localAs': {
              'label': 'Local AS',
            }, 'remoteAs': {
              'label': 'Remote AS',
            },
            'weight': {
              'label': 'weight',
            },
            'ipAddress': {
              'label': 'Ip Address*',
            }, 'interfaceName': {
              'label': 'Interface Name',
            }, 'redistribution': {
              'label': 'Redistribution',
            }, 'metricArea': {
              'label': 'Metric',
            },

            'metricTypeValue': {
              'label': 'Metric Type',
            },
            'from': {
              'label': 'From',
            },
            'metricSpace': {
              'label': 'Metric(1-16)',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.clientAddress}}\' is successfully created.',
            'create_success': ' \'{{dto.clientAddress}}\' is successfully created',
            'delete_confirm': 'Do you want to delete selected bgp?',
            'delete_success': '\'{{dto.clientAddress}}\' is successfully deleted!',
            'networkValue_messages': 'Same Network Value cannot be added multiple times.',
            'error_add_neighbour': 'Same Ip Address or Interface Name cannot be added multiple times.',
            'error_add_bgpAsNumber': 'Bgp As Number can be added between 1-4294967294',


          },
        },
      },
      'ntp_pages': {
        'list': {
          'title': 'NTP Objects',
          'icon': 'fa fa-random',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_client_address': {
              'title': 'Create Allowed Clients',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_client_address': {
              'title': 'Detail Allowed Clients',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_client_address': {
              'title': 'Edit Allowed Clients',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_client_address': {
              'title': 'Delete Allowed Clients',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'server': 'Server',
            'server_description': 'Click to configure server',
            'listenAddress_description': 'Click to configure listen address',
            'allowed_Clients_description': 'Click to configure allowed clients',
            'listenAddress': 'Listen Address',
            'allowed_Clients': 'Allowed Clients',
            'allowed_clients': {
              'label': 'Client Address',
              'placeholder': 'X.X.X.X/X'
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected client address?',
            'delete_success': 'Selected \'{{dto.clientAddress}}\' is successfully deleted!',
            'server_error': 'At least one Ntp server should be added',


          },
        },
        'create': {},
        'edit': {
          'title': 'Bgp Config',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Static Route Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Static Route Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Servis Zinciri Ekle',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Servis Zinciri Detayları',
              'title_short': 'Detay',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Servis Zinciri Sil',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'bgpAsNumber': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addPeerGroup': {
              'label': 'AS Number ',
              'placeholder': 'Please enter bgp number',
            },
            'addNewPeerGroup': {
              'label': 'Add Peer Group',
            },
            'addroutemap': {
              'label': 'Add Route Map',
            },
            'routerId': {
              'label': 'Router ID *',
              'placeholder': 'Please enter external bgp routerId ',
            },
            'sourceIp': {
              'label': 'Source IP',
              'placeholder': 'Please enter source ip ',
              'help_line': '',
              'help_block': '',
            },
            'aggregate': {
              'label': ' Aggregate',

            },

            'aggregateNetworkValue': {
              'label': 'Network Value ',
              'placeholder': 'Ip with subnet mask',

            },
            'isSummaryOnly': {
              'label': 'Summary Only',
            },
            'neigbors': {
              'label': 'Neighbors',
              'placeholder': 'Please enter Neighbors',
            },
            'metricType': {
              'label': 'Metric Type(1-2)',
              'placeholder': '1-2',

            },
            'addNeighbour': {
              'label': 'Add Neighbour',
            },
            'routeMap': {
              'label': 'Route Map',
            },
            'metric': {
              'label': 'metric',
              'placeholder': 'Between 1-16',

            },
            'redistributeFromVAlues': {
              'label': 'redistributeFromVAlues',
            },
            'password': {
              'label': 'password',
            }, 'peerGroups': {
              'label': 'Peer Groups',
            },
            'isNextHopSelf': {
              'label': 'isNextHopSelf',
            },
            'ebgpMultiHop': {
              'label': 'ebgpMultiHop',
            }, 'localAs': {
              'label': 'Local AS',
            }, 'remoteAs': {
              'label': 'Remote AS',
            },
            'weight': {
              'label': 'weight',
            },
            'ipAddress': {
              'label': 'Ip Address*',
            }, 'interfaceName': {
              'label': 'Interface Name',
            }, 'redistribution': {
              'label': 'Redistribution',
            }, 'metricArea': {
              'label': 'Metric',
            },

            'metricTypeValue': {
              'label': 'Metric Type',
            },
            'from': {
              'label': 'From',
            },
            'metricSpace': {
              'label': 'Metric(1-16)',
            },

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Client address is successfully created.',
            'create_success': ' Client address is successfully created',
            'delete_confirm': 'Do you want to delete selected bgp?',
            'delete_success': 'Client address is successfully deleted!',
            'networkValue_messages': 'Same Network Value cannot be added multiple times.',
            'error_add_neighbour': 'Same Ip Address or Interface Name cannot be added multiple times.',
            'error_add_bgpAsNumber': 'Bgp As Number can be added between 1-4294967294',


          },
        },
      },
      'snmp': {
        'v3': {
          'view': {
            'list': {
              'basePerm': 'vyos',
              "perm": "#list",
              'actions': {
                'create_snmp_view': {
                  'title': 'Add SNMP View',
                  'title_short': 'New',
                  'icon': 'fa fa-plus-circle',
                  'color': 'blue-madison',
                  'perm': '#create',
                },
                'edit_snmp_view': {
                  'title': 'Edit SNMP View',
                  'title_short': 'Edit',
                  'icon': 'fa fa-pencil',
                  'color': 'green-meadow',
                  'perm': '#edit'
                },
                'delete_snmp_view': {
                  'title': 'Delete SNMP View',
                  'title_short': 'Delete',
                  'icon': 'fa fa-trash-o',
                  'color': 'btn-outline uppercase red-sunglo',
                  'perm': '#delete'
                },
                'view_snmp_view': {
                  'title': 'View SNMP View',
                  'title_short': 'View',
                  'icon': 'fa fa-eye',
                  'color': 'default',
                  'perm': '#edit'
                },
              },
              'fields': {
                'viewName': 'View Name',
              },
              'messages': {
                'delete_success': '\'View \'{{dto.viewName}}\' Deleted Successfully',
                'delete_confirm': 'Are You Sure You Want to Delete View \'{{dto.viewName}}\'?',
                'view_used': 'View Cannot Be Deleted Because It Is Selected on a Group',
              },
            },
            'edit': {
              'basePerm': 'vyos',
              'fields': {
                'viewName': {
                  'label': 'Name',
                  'placeholder': 'Enter Name...',
                },
                'oidName': {
                  'label': 'Oid Name',
                  'placeholder': 'Enter Oid Name...',
                },
                'cancel': {
                  'label': 'Cancel',
                },
                'maskProperty': {
                  'label': 'Mask Property',
                  'placeholder': 'Enter Mask Property...',
                },
                'excludeProperty': {
                  'label': 'Exclude Property',
                  'placeholder': 'Enter Exclude Property...',
                },
              },
              // 'buttons': {
              // 'add_to_list': 'Add to List',
              // },
              'messages': {
                'delete_confirm': 'Are You Sure You Want to Delete Oid \'{{dto.oidName}}\'?',
                'delete_success': 'Oid \'{{dto.oidName}}\' Deleted Successfully',
                'oid_name_int': 'Oid Name Should Be a Positive Integer',
                'oid_name_exists': 'Oid with Same Name Already Exists',
                'unique_view_name': 'Please enter a unique view name',
                'empty_oid': 'Oid List Cannot Be Empty',
              },
            },
          },
          'group': {
            'list': {
              'basePerm': 'vyos',
              "perm": "#list",
              'actions': {
                'create_group': {
                  'title': 'Add Group',
                  'title_short': 'New',
                  'icon': 'fa fa-plus-circle',
                  'color': 'blue-madison',
                  'perm': '#create',
                },
                'edit_group': {
                  'title': 'Edit Group',
                  'title_short': 'Edit',
                  'icon': 'fa fa-pencil',
                  'color': 'green-meadow',
                  'perm': '#edit'
                },
                'delete_group': {
                  'title': 'Delete Group',
                  'title_short': 'Delete',
                  'icon': 'fa fa-trash-o',
                  'color': 'btn-outline uppercase red-sunglo',
                  'perm': '#delete'
                },
                'view_group': {
                  'title': 'View Group',
                  'title_short': 'View',
                  'icon': 'fa fa-eye',
                  'color': 'default',
                  'perm': '#edit'
                },
              },
              'fields': {
                'groupName': 'Group Name',
              },
              'messages': {
                'delete_success': '\'Group \'{{dto.groupName}}\' Deleted Successfully',
                'delete_confirm': 'Are You Sure You Want to Delete Group \'{{dto.groupName}}\'?',
                'group_used': 'Group Cannot Be Deleted Because It Is Selected on a User',
              },
            },
            'edit': {
              'basePerm': 'vyos',
              'fields': {
                'groupName': {
                  'label': 'Name',
                  'placeholder': 'Enter Name...',
                },
                'view': {
                  'label': 'View',
                  'select_option': 'select view',
                },
                'mode': {
                  'label': 'Mode',
                  'select_option': 'select mode',
                },
                'sec_level': {
                  'label': 'Security Level',
                  'select_option': 'select security level',
                },
                'cancel': {
                  'label': 'Cancel',
                },
              },
              // 'buttons': {
              //   'add_to_list': 'Add to List',
              // },
              'messages': {
                'unique_group_name': 'Please enter a unique group name',
                'view_required': 'View selection required',
              },
            },
          },
          'user': {
            'list': {
              'basePerm': 'vyos',
              "perm": "#list",
              'actions': {
                'create_user': {
                  'title': 'Add User',
                  'title_short': 'New',
                  'icon': 'fa fa-plus-circle',
                  'color': 'blue-madison',
                  'perm': '#create',
                },
                'edit_user': {
                  'title': 'Edit User',
                  'title_short': 'Edit',
                  'icon': 'fa fa-pencil',
                  'color': 'green-meadow',
                  'perm': '#edit'
                },
                'delete_user': {
                  'title': 'Delete User',
                  'title_short': 'Delete',
                  'icon': 'fa fa-trash-o',
                  'color': 'btn-outline uppercase red-sunglo',
                  'perm': '#delete'
                },
                'view_user': {
                  'title': 'View User',
                  'title_short': 'View',
                  'icon': 'fa fa-eye',
                  'color': 'default',
                  'perm': '#edit'
                },
              },
              'fields': {
                'userName': 'User Name',
              },
              'messages': {
                'delete_success': '\' User \'{{dto.userName}}\' Deleted Successfully',
                'delete_confirm': 'Are You Sure You Want to Delete User \'{{dto.userName}}\'?',
              },
            },
            'edit': {
              'basePerm': 'vyos',
              'fields': {
                'userName': {
                  'label': 'Name',
                  'placeholder': 'Enter Name...',
                },
                'group': {
                  'label': 'Group',
                  'select_option': 'select group',
                },
                'mode': {
                  'label': 'Mode',
                  'select_option': 'select mode',
                },
                // 'privacy_header': 'Privacy',
                'privacy_value': {
                  'label': 'Privacy Value',
                  'placeholder': 'Enter Privacy Value...',
                },
                'privacy_type': {
                  'label': 'Privacy Type',
                  'select_option': 'select privacy type',
                },
                'privacy_enc_type': {
                  'label': 'Privacy Encryption Type',
                  'select_option': 'select privacy encryption type',
                },
                // 'auth_header': 'Authorization',
                'auth_value': {
                  'label': 'Authorization Value',
                  'placeholder': 'Enter Authorization Value...',
                },
                'auth_type': {
                  'label': 'Authorization Type',
                  'select_option': 'select authorization type',
                },
                'auth_enc_type': {
                  'label': 'Authorization Encryption Type',
                  'select_option': 'select auth. encryption type',
                },
              },
              // 'buttons': {
              //   'add_to_list': 'Add to List',
              // },
              'messages': {
                'unique_user_name': 'Please enter a unique user name',
                'auth_type_req': 'Authorization Type Selection Is Required',
                'privacy_type_req': 'Privacy Type Selection Is Required',
                'auth_value_length': 'Authorization Value Should Consist of at Least 8 Characters',
                'privacy_value_length': 'Privacy Value Should Consist of at Least 8 Characters',
                'auth_value_hex': 'Authorization Value Can Only Contain Hex Digits',
                'privacy_value_hex': 'Privacy Value Can Only Contain Hex Digits',
              },
            },
          },
        },
        'listen_address': {
          'list': {
            'basePerm': 'vyos',
            "perm": "#list",
            'actions': {
              'create_listen_address': {
                'title': 'Add Listen Address',
                'title_short': 'New',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'edit_listen_address': {
                'title': 'Edit Listen Address',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#edit'
              },
              'delete_listen_address': {
                'title': 'Delete Listen Address',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              },
              'view_listen_address': {
                'title': 'View Listen Address',
                'title_short': 'View',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#edit'
              },
            },
            'fields': {
              'port': 'Port',
              'address': 'Address',
            },
            'messages': {
              'delete_success': 'Listen Address Deleted Successfully',
              'delete_confirm': 'Are You Sure You Want to Delete Selected Listen Address?',
            },
          },
          'edit': {
            'basePerm': 'vyos',
            'fields': {
              'port': {
                'label': 'Port',
                'placeholder': 'Enter Port...',
              },
              'address': {
                'label': 'Address',
                'placeholder': 'Enter Address',
              },
              'cancel': {
                'label': 'Cancel',
              }
            },
            // 'buttons': {
            //   'add_to_list': 'Add to List',
            // },
            'messages': {
              'ip_not_valid': 'IP Address Is Not Valid',
              // 'delete_success': 'Oid \'{{dto.oidName}}\' Deleted Successfully',
              // 'oid_name_required': 'Oid Name Should Be Entered',
              // 'oid_name_exists': 'Oid with Same Name Ald',
            },
          },
        },
      },
      'isis': {
        'list': {
          'title': 'Vnf Isis',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_isis': {
              'title': 'Create New Isis',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'edit_isis': {
              'title': 'Edit Isis',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_isis': {
              'title': 'Delete Isis',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'view_isis': {
              'title': 'Detail Isis',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            }
          },
          'fields': {
            'systemId': 'System Id',
            'level': 'Level',
            'interfaceName': 'Interface Name',
            'state': 'State',
            'snmpa': 'Snmpa',
            'holdTime':'Hold Time',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.zoneName}}\'?',
            'delete_success': 'Selected \'{{dto.zoneName}}\' is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {
          'title': 'Vnf Isis',
          'basePerm': 'vyos',
          'icon': 'fa fa-shield',
          'modes': {
            'edit': {
              'title': 'Isis Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Isis Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': '',
              'title_short': 'add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': '',
              'title_short': 'detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': '',
              'title_short': 'delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'networkEntity': {
              'label': 'Network Title',
            },
            'systemID': {
              'label': 'System Id',
            },
            'areaID': {
              'label': 'Area Id',
            },
            'afiValue': {
              'label': 'Afi Id',
            },
            'areaPassword': {
              'label': 'Area Password',

            },
            'areaTag': {
              'label': 'Area Tag',

            },
            'netSelector': {
              'label': 'Net Selector',

            },
            'password': {
              'label': 'Password',
            },
            'metric': {
              'label': 'Metric',
            },
            'interfaceName': {
              'label': 'Interface Name',
            },
            'priority': {
              'label': 'Priority',
            },
            'passive': {
              'label': 'Passive',
            },
            'p2p': {
              'label': 'P-2-P Network',
            },
            'routeMap': {
              'label': 'Route Map',

            },
            'from': {
              'label': 'From',

            },
            'level': {
              'label': 'Level',
            },
            'metric_des': {
              'label': 'Metric',
            },
            'type': {
              'label': 'Type',
            },
            'routemap_list': {
              'label': 'Route Map List',
            },
            'interface_options': {
              'label': 'Interface Options',
            },
            'routing_options': {
              'label': 'Routing Options',
            },
            'destribution_options': {
              'label': 'Distribution Options',
            },
            'attachedBit': {
              'label': 'Attached Bit',
            },
            'metricStyle': {
              'label': 'Metric Style',
            },
            'defaulOriginLevel': {
              'label': 'Level',
            },
            'isDefaultInformation': {
              'label': 'Default Information Originat',
            }
          },
          'messages': {
            'save_success': '  is successfully updated.',
            'create_success': '  is successfully created',
            'same_from': 'Please select diffrent from',
            'error_afiValue':'Please enter 47 or 49 afi id or add variable',
            'error_systemId' :'Please check your system id. Ex: 0000.0000.0000 or add variable ',
            'routingOption':'Please enter routing Option List',
            'interfaceOption':'Please enter interface Option List'
          },
        },
      },
      'interface': {
        'list': {
          'title': 'Interface',
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'edit_interface': {
              'title': 'Edit Interface',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_interface': {
              'title': 'Delete Interface',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'start_interface': {
              'title': 'Start Interface',
              'title_short': 'Start',
              'icon': 'fa fa-play',
              'color': 'blue-madison',
              'perm': '#delete'
            },
            'stop_interface': {
              'title': 'Stop Interface',
              'title_short': 'Stop',
              'icon': 'fa fa-stop',
              'color': 'blue-madison',
              'perm': '#delete'
            },
            'reload_interface': {
              'title': 'Reload Interface',
              'title_short': 'Reload',
              'icon': 'fa fa-undo',
              'color': 'blue-madison',
              'perm': '#delete'
            },
            'up_interface': {
              'title': 'Up Interface',
              'title_short': 'Up',
              'icon': 'fa fa-check-circle',
              'color': 'green-jungle',
              'perm': '#delete'
            },
            'down_interface': {
              'title': 'Down Interface',
              'title_short': 'Down',
              'icon': 'fa fa-minus-circle',
              'color': 'red-soft',
              'perm': '#delete'
            },

          },
          'fields': {
            'select': 'Select',
            'interface': 'Interface',
            'status': 'Suricata Status',
            'patternMatch': 'Pattern Match',
            'blockingMode': 'Blocking Mode',
            'description': 'Description',
          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.interfaceName}}\'? ',
            'delete_success': 'Selected \'{{dto.interfaceName}}\' is successfully deleted!',
            'start_interface_confirm': 'Do you want to start selected   \'{{dto.name}}\'? ',
            'start_interface_success': 'Selected \'{{dto.name}}\' is successfully started!',
            'stop_interface_confirm': 'Do you want to stop selected   \'{{dto.name}}\'? ',
            'stop_interface_success': 'Selected \'{{dto.name}}\' is successfully stoped!',
            'reload_interface_confirm': 'Do you want to reload selected   \'{{dto.name}}\'? ',
            'reload_interface_success': 'Selected \'{{dto.name}}\' is successfully reloaded!',
          },

        }
      },
      'wanrules': {
        'list': {
          "title": "IPS/IDS",
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'edit_wanrules': {
              'title': 'Edit WAN Rules',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_wanrules': {
              'title': 'Delete WAN Rules',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'enable_rule': {
              'title': 'Enable Rules',
              'title_short': 'Enable',
              'icon': 'fa fa-check-circle',
              'color': 'btn-outline uppercase green-jungle',
              'perm': '#delete'
            },
            'disable_rule': {
              'title': 'Disable Rules',
              'title_short': 'Disable',
              'icon': 'fa fa-ban',
              'color': 'btn-outline uppercase red-mint',
              'perm': '#delete'
            },
            'alert_rule': {
              'title': 'Alert',
              'title_short': 'Alert',
              'icon': 'fa fa-exclamation-triangle',
              'color': 'btn-outline uppercase yellow-gold',
              'perm': '#delete'
            },
            "by_user": {
              "title": "User changed rule",
              "title_short": "User changerd rule",
              "icon": "fa fa-user",
              "color": "btn-outline uppercase blue-madison",
              "perm": "#delete"
            }


          },
          'fields': {
            'state': 'State',
            'action': 'Action',
            'gid': 'GID',
            'sid': 'SID',
            'proto': 'Proto',
            'source': 'Source',
            'sPort': 'SPort',
            'destination': 'Destination',
            'dPort': 'DPort',
            'message': 'Message',
            "byUser": "By User",
            "mark": "Mark",

          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.SID}}\'? ',
            'delete_success': 'Selected \'{{dto.SID}}\' is successfully deleted!',
            'disable_rule_confirm':'Do you want to enable selected  \'{{dto.SID}}\'? ',
            'disable_rule_success': 'Successfully enabled!',
            'enable_rule_confirm':'Do you want to disable selected   \'{{dto.SID}}\'? ',
            'enable_rule_success': 'Successfully disabled!',
            'disable_all_rule_confirm':'Do you want to enable ? ',
            'enable_all_rule_confirm':'Do you want to disable ? ',
            "reset_all_rule_confirm": "Do you want to reset all rule ? ",
            'success_reload':'Successfully applied.',
            'unsuccess_reload':'Suricata process is not running.Could not applied.',
            "setAction": "Do you want to change the action value of rule ''{{dto.SID}}' to '{{dto.action}} ?",
            "setMark": "Do you want to change the mark value of rule ''{{dto.SID}}' to '{{dto.mark}}' ?",
            "setActionSuccess": "Successfully changed the action.",
            "setMarkSuccess": "Successfully changed the mark.",
            "disable_rule_success_enabled": "Successfully enabled!",




          },

        }
      },
      'suricataSettings': {
        'list': {
          "title": "IPS/IDS",
          'icon': 'fa fa-user-secret',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'edit_settings': {
              'title': 'Edit Settings',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
          },
          'fields': {
            'interface': 'Interface',
            'interfaceHint': 'Choose which interface this Suricata instance applies to. In most cases, you will want to use WAN here if this is the first Suricata-configured interface.',
            'loggingSettings': 'Logging Settings',
            'sendAlertsToSystemLog': 'Send Alerts to System Log',
            'logFacility': 'Log Facility',
            'logPriority': 'Log Priority',
            'enableStatsCollection ': 'Enable Stats Collection ',
            'statsUpdateInterval ': 'Stats Update Interval ',
            'enableStatsLog': 'Enable Stats Log',
            'appendStatsLog': 'Append Stats Log',
            'enableTelegrafStats':'Enable Telegraf Stats',
            'telegrafUnixSocket': 'Telegraf Unix Socket',
            'enableHTTPLog': 'Enable HTTP Log',
            'appendHTTPLog': 'Append HTTP Log',
            'logExtendedHTTPLog': 'Log Extended HTTP Log',
            'enableTLSLog':'Enable TLS Log',
            'enableTLSStore': 'Enable TLS Store',
            'logExtendedTLSInfo': 'Log Extended TLS Info',
            'enableFileStore': 'Enable File-Store',
            'fileStoreLoggingDirectory': 'File Store Logging Directory',
            'enablePacketLog':'Enable Packet Log',
            'maxPacketLogFileSize': 'Max Packet Log File Size',
            'maxPacketLogSize': 'Max Packet Log Size',
            'alertandBlockSettings': 'Alert and Block Settings',
            'blockOffenders': 'Block Offenders',
            'killStates':'Kill States',
            'whichIPtoBlock': 'Which IP to Block',
            'blockOnDROPOnly': 'Block On DROP Only',
            'performanceandDetectionEngineSettings': 'Performance and Detection Engine Settings',
            'runMode': 'Run Mode',
            'maxPendingPackets':'Max Pending Packets',
            'detectEngineProfile': 'Detect-Engine Profile',
            'patternMatcherAlgorithm': 'Pattern Matcher Algorithm',
            'signatureGroupHeaderMPMContext': 'Signature Group Header MPM Context',
            'inspectionRecursionLimit': 'Inspection Recursion Limit',
            'delayedDetect':'Delayed Detect',
            'promiscuousMode':'Promiscuous Mode',
            'interfacePCAPSnaplen':'Interface PCAP Snaplen',
          },

          'messages': {

            'delete_confirm': 'Do you want to delete selected   \'{{dto.SID}}\'? ',
            'delete_success': 'Selected \'{{dto.SID}}\' is successfully deleted!',
          },

        }
      },
      'alerts': {
        'list': {
          'title': 'Alerts',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'select_all': {
              'title': 'Select All',
              'title_short': 'Select All',
              'icon': '',
              'color': 'green-meadow',
              'perm': '#create',
            },
            'unselect_all': {
              'title': 'Unselect All',
              'title_short': 'Unselect All',
              'icon': '',
              'color': 'default',
              'perm': '#view'
            },
            'apply': {
              'title': 'Apply',
              'title_short': 'Apply',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'save': {
              'title': 'Save',
              'title_short': 'Save',
              'icon': '',
              'color': 'blue-madison',
              'perm': '#delete'
            }

          },
          'fields': {

            'alertSettings': 'Alert Log View Settings',
            'alertFilter': 'Alert Log View Filter',
            'instanceView': 'Instance to View',
            'saveOrRemove': 'Save or Remove Logs',
            'saveSetting': 'Save Settings',
            'number': 'Number of alerts to display',
            'download': 'Download',
            'clear': 'Clear',
            'delete': 'Delete',
            'defaultOn': 'Default is ON',
            'date': 'Date',
            'sourceIpAddress': 'Source IP Address',
            'sourcePort': 'Source Port',
            'description': 'Description',
            'gid': 'GID',
            'priority': 'Priority',
            'destinationIpAddress': 'Destination IP Address',
            'destinationPort': 'Destination Port',
            'classification': 'Classification',
            'sid': 'SID',
            'protocol': 'Protocol',
            'exactMatch': 'Exact Match',
            'applyFilter': 'APPLY FILTER',
            'clearFilter': 'Clear Filter',
            'action': 'Action',
            'gidSID': 'GID:SID',
            "entryCountDefault": "Default entry : 250",
            "entryCount": "Entry Count",





            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Succesfully deleted!',
            'save_success':'Rules successfully saved',
            'success_reload':'Successfully applied.',
            'unsuccess_reload':'Suricata process is not running.Could not applied.',
            'delete_alerts_confirm': 'Do you want to delete alert rules?',


          },
        },
        'create': {},
        'edit': {
          'title': 'Alerts',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'Alerts Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Alerts Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Alerts ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of Alerts',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Alerts',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': '\'{{dto.peerGroupName}}\' is successfully updated.',
            'create_success': 'Main settings is successfully saved',
          },
        },
      },
      'template_interface_list': {
        'list': {
          'title': 'IPS/IDS',
          'icon': 'fa fa-window-restore',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_interface': {
              'title': 'Create New Interface',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'edit_interface': {
              'title': 'Edit Interface',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_interface': {
              'title': 'Delete Interface',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'clone_rule_interface': {
              'title': 'Clone Rule',
              'title_short': 'Clone',
              'icon': 'fa fa-clone',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'view_template_interface': {
              'title': 'View Interface',
              'title_short': 'View',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#edit'
            },
          },
          'fields': {
            'interface': 'Interface'
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected interface ? ',
            'delete_success': 'Selected interface is succesfully deleted!',
          },
        },
        'create': {},
        'edit': {},
      },
      'route_rule': {
        'list': {
          'title': 'Route Rule Templates',
          'icon': 'fa fa-shield',
          'basePerm': 'vyos', // TODO change base perm
          'perm': '#list',
          'actions': {
            'create_route_rule': {
              ' title': 'New Create Route Rule',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create'
            },
            'view_route_rule': {
              'title': 'Detail Route Rule',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_route_rule': {
              'title': 'Edit Route Rule',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'create_route_rule_edit': {
              'title': 'Edit Route Rule',
              'title_short': 'Ekle',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#edit'
            },
            'delete_route_rule': {
              'title': 'Delete Route Rule',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'ruleOrder': 'Rule Order',
            'routeName': 'Route Name',
            'slaRule': 'SLA Rule',
            'overlayNetworks': 'Overlay Networks',
            'preemtive': 'Preemtive'
          },

          'messages': {
            'delete_confirm': 'Do you want to delete selected  route: \'{{dto.routeName}}\'  ?',
            'delete_confirm_interface': 'Do you want to delete selected  \'{{dto.applyInterface}}\'  ?',
            'delete_success': 'Please save the rule list, after deleting.',
            'edit_success': 'Please save the rule list, after editing.',
            'add_success': 'Please save the rule list, after adding.',


          },

          'create': {},
          'edit': {
            'basePerm': 'vyos',
            'modes': {
              'edit': {
                'title': 'CPE Cihazı Düzenle',
                'icon': 'fa fa-pencil',
                'perm': '#edit',
              },
              'create': {
                'title': 'CPE Cihazı Ekle',
                'icon': 'fa fa-plus',
                'perm': '#create',
              },
            },
            'actions': {
              'create': {
                'title': '',
                'title_short': 'Add',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': '',
                'title_short': 'Detail',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view'
              },
              'delete': {
                'title': '',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete'
              }
            },
            'fields': {
              'name': {
                'label': 'name',
              },
              'qualityProfile': {
                'label': 'Quality Profile',
              },
              'trafficDistProfile': {
                'label': 'Traffic Distribution Profile',
              },
              'selected': {
                'label': 'Selected',
              },
              'select': {
                'label': '--select--',
              },
              'srcAddress': {
                'label': 'Address Group Objects',
              },
              'dstAddress': {
                'label': 'Address Group Objects',
              },
              'dstService': {
                'label': 'Service Group Objects',
              },
              'appGroup': {
                'label': 'Application Group Objects',
              },
              'slaUsed': {
                'label': 'is SLAUsed',
              },
              'slaRule': {
                'label': 'SLA Rule Objects',
              },
              'isPreemptive': {
                'label': 'is Preemptive',
              },
              'overlayNetworks': {
                'label': 'Overlay Networks',
              },
              'order': {
                'label': 'ORDER',
              },
              'overlayName': {
                'label': 'Overlay Name',
              },
              'addRule': {
                'label': 'Add Rule',
              },
              'next': {
                'label': 'NEXT',
              },
              'slaRuleName': {
                'label': 'SLA Rule Name',
              },
              'maxDelay': {
                'label': 'Max Delay(ms)',
              },
              'maxJitter': {
                'label': 'Max Jitter(ms)',
              },
              'packageLoss': {
                'label': 'Package Loss(%)',
                'placeholder': '%',
              },
              'add': {
                'label': 'ADD',
              },
              'back': {
                'label': 'Back',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              }, 'save': {
                'label': 'Save',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },
              'remove': {
                'label': 'Remove',
                'placeholder': '',
                'help_line': '',
                'help_block': '',
              },

            },
            'messages': {
              'save_success': 'Route rule is successfully saved.',
              'create_success': 'Route rule is successfully saved.',
              'error_overlay_messages': 'Same Overlay cannot be added multiple times.',
              'error_slaUsed': 'Since SLA is not selected, you can only add one network to the list.',

            },
          },
        },
      },

    },

    'vnf-template': {
      'vnf_bundle_title': 'VNF Bundle Template',
      'vnf_template_title': 'Bundle-Template Relation',

      'icon': 'fa fa-cubes',
      'perm': 'common:view',
      'vnf_bundle_template': {
        'list': {
          'title': 'VNF Bundle List',
          'icon': 'fa fa-random',
          'basePerm': 'vnf_temp_bundle',
          'perm': '#list',
          'actions': {
            'create_vnf_bundle_template': {
              'title': 'Create New VNF Bundle Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_vnf_bundle_template': {
              'title': 'Detail VNF Bundle Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'edit_vnf_bundle_template': {
              'title': 'Edit VNF Bundle Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'vnf_bundle_template': {
              'title': 'Install Devices',
              'title_short': 'Install',
              'icon': "fa fa-arrow-down",
              'color': 'blue-madison',
              'perm': '#install'
            },
            'status_template_list': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#status'
            },

            'delete_vnf_bundle_template': {
              'title': 'Delete VNF Bundle Template',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'tempName': 'VNF Bundle Name',
            'description': 'Description',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\' ?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',

          },
        },
        'create': {
          'messages': {
            'save_success': '\'{{dto.name}}\' is successfully updated.',
            'create_success': '\'{{dto.name}}\' is successfully saved',
          },
        },
        'edit': {
          'title': 'VNF Bundle',
          'icon': 'fa fa-random',
          'basePerm': 'vnf_temp_bundle',
          'modes': {
            'edit': {
              'title': 'VNF Bundle Template Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'VNF Bundle Template Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add VNF Bundle Template ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of VNF Bundle Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete VNF Bundle Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'tempName': {
              'label': 'VNF Bundle Name',
              'placeholder': 'Please enter VNF Bundle  Name ',
            },
            'description': {
              'label': 'Description',
              'placeholder': 'Description',
            },
            'tempList': {
              'label': 'Vnf App List',
              'placeholder': 'Please Select Vnf Template ',
            },
            'bundleTempList': {
              'label': 'Vnf Template List',
              'placeholder': 'Please Select Vnf Template ',
            },

            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

            'selectedVnfTemp': {
              'label': 'Selected Vnf Application Name',
              'placeholder': 'Please enter Vnf Application Name ',
            },

            'selectedVnfBundleTemp': {
              'label': 'Selected Vnf Template Name',
              'placeholder': 'Please enter Vnf Template Name ',
            },

          },
          'messages': {
            'save_success': '\'{{dto.name}}\' is successfully updated.',
            'create_success': '\'{{dto.name}}\' is successfully saved',
            'dublicateApplication': ' Same VNF Application cannot be added multiple times. Duplicate application:',
          },
        },
      },
      'vnf_bundle_assign': {
        'list': {
          'title': 'VNF Bundle',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_vnf_bundle_assign': {
              'title': 'Create New VNF Bundle Assign',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_vnf_bundle_assign': {
              'title': 'Detail VNF Bundle Assign',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf_bundle_assign': {
              'title': 'Edit VNF Bundle Assign',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf_bundle_assign': {
              'title': 'Delete VNF Bundle Assign',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'bundleTempList': 'Bundle Template List',
            'vnfTempList': 'Vnf App List',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'VNF Bundle',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'VNF Bundle Template Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'VNF Bundle Template Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add VNF Bundle Template ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of VNF Bundle Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete VNF Bundle Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'bundleTempList': {
              'label': 'Bundle Template List ',
              'placeholder': 'Please enter  Bundle Template List ',
            },
            'vnfTempList': {
              'label': 'Vnf App List',

            },


            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
          },
        },
      },
      'cpe_vnf_template': {
        'list': {
          'title': 'VNF Template Relation',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_vnf_temp_relation': {
              'title': 'Create New Vnf Template Relation',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_vnf_temp_relation': {
              'title': 'Detail Vnf Template Relation',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_vnf_temp_relation': {
              'title': 'Edit Vnf Template Relation',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_vnf_temp_relation': {
              'title': 'Delete Vnf Template Relation',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {

            'device': 'Device',
            'templateBundle': 'Template Bundle',
            'templateDefinition': 'Template Definition',

            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'VNF Template Relation',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'modes': {
            'edit': {
              'title': 'VNF Template Relation Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'VNF Template Relation Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add VNF Template Relation',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of VNF Template Relation',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete VNF Template Relation',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'device': {
              'label': 'Device ',
              'placeholder': 'Please select device ',
            },
            'templateBundle': {
              'label': 'Template Bundle',

            },
            'templateDefinition': {
              'label': 'Template Definition',

            },


            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
          },
        },
      },
      'cli_template_list': {
        'list': {
          'title': 'CLI Template',
          'icon': 'fa fa-random',
          'basePerm': 'cli_temp_definition',
          'perm': '#list',
          'actions': {
            'create_cli_template_list': {
              'title': 'Add New Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'clone_cli_template_list': {
              'title': 'Clone Template ',
              'title_short': 'Detail',
              'icon': 'fa fa-clone',
              'color': 'blue-madison',
              'perm': '#clone'
            },
            'edit_cli_template_list': {
              'title': 'Edit Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'view_cli_template_list': {
              'title': 'View Template',
              'title_short': 'View',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete_cli_template_list': {
              'title': 'Delete Template',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'install_cli_template_list': {
              'title': 'Install Devices',
              'title_short': 'Install',
              'icon': "fa fa-arrow-down",
              'color': 'blue-madison',
              'perm': '#install'
            },
            'status_cli_template_list': {
              'title': 'Status List',
              'title_short': 'Template Status',
              'icon': "fa fa-bars",
              'color': 'blue-madison',
              'perm': '#status'
            }

          },
          'fields': {

            'name': 'Name',
            'description': 'Description',
            'type': 'Type',
            'templateVersion': 'Version',
            'vnfName': 'VNF Name',
            'deviceInstalled': 'Device Installed',
            'lastUpdate': 'Last Update',
            'actions': 'Actions',
            'templateName': 'Template Name',
            'cliCommands': 'CLI Commands',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\' ?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'CLI Template List',
          'icon': 'fa fa-random',
          'basePerm': 'cli_temp_definition',
          'modes': {
            'edit': {
              'title': 'CLI Template Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CLI Template Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add CLI Template ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of CLI Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete CLI Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': {
              'label': 'Name ',
              'placeholder': 'Please enter template name ',
            },
            'description': {
              'label': 'Description',
            },
            'type': {
              'label': 'Type',
            },
            'deviceInstalled': {
              'label': 'Device Installed',
            },
            'lastUpdate': {
              'label': 'Last Update',
            },
            'templateName': {
              'label': 'Template Name ',
              'placeholder': 'Please enter template name ',
            },
            'vnfName': {
              'label': 'VNF Name',
            },
            'cliCommands': {
              'label': 'CLI Commands',
            },


            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
            'install_success': 'Selected devices sucessfully installed'

          },
        },
      },
      'install_cli_temp': {
        'list': {
          'title': 'Install Devices Template',
          'icon': 'fa fa-random',
          'basePerm': 'cpe_vnf_temp_relation',
          'perm': '#list',
          'actions': {
            'create_install_cli_temp': {
              'title': 'Add New Template',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },

            'edit_install_cli_temp': {
              'title': 'Edit Template',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'view_install_cli_temp': {
              'title': 'View Template',
              'title_short': 'View',
              'icon': 'fa fa-eye',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'delete_install_cli_temp': {
              'title': 'Delete Template',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },

          },
          'fields': {

            'name': 'Template Name:',
            'availableDevice': 'Available Devices',
            'selectedDevices': 'Selected Devices',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.name}}\' ?',
            'delete_success': 'Selected \'{{dto.name}}\' is succesfully deleted!',

          },
        },
        'create': {},
        'edit': {
          'title': 'Install Devices Template',
          'icon': 'fa fa-random',
          'basePerm': 'cpe_vnf_temp_relation',
          'modes': {
            'edit': {
              'title': 'CLI Template Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'CLI Template Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add CLI Template ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of CLI Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete CLI Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'name': {
              'label': 'Template Name ',
              'placeholder': 'Please enter template name ',
            },
            'availableDevice': {
              'label': 'Available Devices',
            },
            'selectedDevices': {
              'label': 'Selected Devices',
            },


            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
            'install_success': 'Selected devices successfully installed'

          },
        },
      },
      'template_status_list': {
        'list': {
          'title': 'Template Status List',
          'icon': 'fa fa-random',
          'basePerm': 'vnf_temp_definition',
          'perm': '#list',
          'actions': {
            'template_status_list': {
              'title': 'Template Status List',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'reinstall_template_status_list': {
              'title': 'Reinstall',
              'title_short': 'Reinstall',
              'icon': 'fa fa-caret-square-o-down',
              'color': 'default',
              'perm': '#view'
            },
            'stop_template_status_list': {
              'title': 'Stop',
              'title_short': 'Stop',
              'icon': 'fa fa-stop',
              'color': 'default',
              'perm': '#view'
            },
            'edit_template_status_list': {
              'title': 'Edit Template Status List',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_template_status_list': {
              'title': 'Delete Template Status List',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'sync_template_status_list': {
              'title': 'Sync',
              'title_short': 'Sync',
              'icon': 'fa fa-exchange',
              'color': 'blue-madison',
              'perm': '#view'
            },
            'all_sync_template_status_list': {
              'title': 'All Sync',
              'title_short': 'All Sync',
              'icon': 'fa fa-exchange',
              'color': 'blue-madison',
              'perm': '#view'
            },

          },
          'fields': {

            'templatename': 'Template Name',
            'name': 'Device Name',
            'version' : 'Version',
            'status': 'Status',
            'installationTimer': 'Installation Time',
            'resultMessage': 'Result Message',
            'updatedBy': 'Updated By',
            'actions': 'Actions',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',
            'reinstall_confirm': 'Do you want to reinstall variable selected device?',
            'reinstall_success': 'Selected device is successfully reinstall!',
            'stop_confirm': 'Do you want to stopped selected device?',
            'stop_success': 'Selected device is successfully stopped!',
            'sync_confirm': 'Do you want to sync selected device?',
            'sync_success': 'Selected device is successfully sync!',
            'all_sync_confirm': 'Do you want to all sync devices?',
            'all_sync_success': 'Devices are successfully all sync!',

          },
        },

      },
      'variable_cli_template': {
        'list': {
          'title': 'Template Variables',
          'icon': 'fa fa-random',
          'basePerm': 'variable_declaration',
          'perm': '#list',
          'actions': {
            'create_variable_cli_template': {
              'title': 'Create New Vnf Variable',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_variable_cli_template': {
              'title': 'Detail Vnf Variable',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_variable_cli_template': {
              'title': 'Edit Vnf Variable',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_variable_cli_template': {
              'title': 'Delete Vnf Variable',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },
            'assign_devices_to_variable': {
              'title': 'Assign Variable to Devices',
              'title_short': 'New',
              'icon': 'fa fa-cloud-download',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'assigned_devices': {
              'title': 'Assigned Variable to Devices',
              'title_short': 'New',
              'icon': 'fa fa-th-large',
              'color': 'blue-madison',
              'perm': '#create',
            },

          },
          'fields': {

            'localOrGlobal': 'Local or Global Variable',
            'variableName': 'Variable Name',
            'variableValue': 'Value',
            'deviceUuid': 'Available Devices',



            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.variableName}}\' ?',
            'delete_success': 'Selected \'{{dto.variableName}}\' is succesfully deleted!',
            'variableAlias_messages': ' Same variable-alias pairs cannot be added multiple times.',

          },
        },
        'create': {},
        'edit': {
          'icon': 'fa fa-random',
          'basePerm': 'variable_declaration',
          'modes': {
            'edit': {
              'title': 'VNF Variable Template Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'VNF Variable Template Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add VNF Variable Template ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of VNF Variable Template',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete VNF Variable Template',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'localOrGlobal': {
              'label': 'Local or Global Variable ',
              'placeholder': 'Please select',
            },
            'variableName': {
              'label': 'Variable Name ',

            },
            'variableValue': {
              'label': 'Value:',

            },
            'deviceUuid': {
              'label': 'Available Devices',

            },
            'assignDevice': {
              'label': 'Assign Devices to Variable',

            },
            'deviceName': {
              'label': 'Device Name:',

            },
            'deviceList': {
              'label': 'Assigned Devices',

            },


            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
            'variableAlias_messages': ' Same variable-alias pairs cannot be added multiple times.',
          },
        },
      },
      'attach_variable_template': {
        'list': {
          'title': 'Variable Cli Template',
          'icon': 'fa fa-random',
          'basePerm': 'vyos',
          'perm': '#list',
          'actions': {
            'create_variable_cli_template': {
              'title': 'Create New Vnf Variable',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_variable_cli_template': {
              'title': 'Detail Vnf Variable',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_variable_cli_template': {
              'title': 'Edit Vnf Variable',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_variable_cli_template': {
              'title': 'Delete Vnf Variable',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }

          },
          'fields': {
            'localOrGlobal': 'Local or Global Value',
            'variableValue': 'Variable',
            'aliasValue': 'Value',
            'variableAliasValuePairs': 'Variable Alias Value',
            'deviceUuid': 'Available Devices',
            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.peerGroupName}}\' ?',
            'delete_success': 'Selected \'{{dto.peerGroupName}}\' is succesfully deleted!',
            'variableAlias_messages': ' Same variable-alias pairs cannot be added multiple times.',
            'variable_success': 'variable is succesfully updated!.',
            'reinstall_success': 'All devices is succesfully reinstall!',
            'reinstall_confirm': 'Do you want to reinstall all devices?',

          },
        },
        'create': {},
      },
      'flow_accounting': {
        'list': {
          'title': 'Flow Accounting',
          'icon': 'fa fa-random',
          "basePerm": "vyos",
          'perm': '#list',
          'actions': {
            'create_flow_accounting': {
              'title': 'Create Flow Accounting',
              'title_short': 'New',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view_flow_accounting': {
              'title': 'Detail Flow Accounting',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'edit_flow_accounting': {
              'title': 'Edit Flow Accounting',
              'title_short': 'Edit',
              'icon': 'fa fa-pencil',
              'color': 'green-meadow',
              'perm': '#edit'
            },
            'delete_flow_accounting': {
              'title': 'Delete Flow Accounting',
              'title_short': 'Sil',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            },

          },
          'fields': {

            'localOrGlobal': 'Local or Global Variable',
            'variableName': 'Variable Name',
            'variableValue': 'Value',
            'deviceUuid': 'Available Devices',



            'save': {
              'label': 'Save',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },
          },
          'messages': {
            'delete_confirm': 'Do you want to delete selected \'{{dto.variableName}}\' ?',
            'delete_success': 'Selected \'{{dto.variableName}}\' is succesfully deleted!',
            'variableAlias_messages': ' Same variable-alias pairs cannot be added multiple times.',


          },
        },
        'create': {},
        'edit': {
          'title': 'Flow Accounting',
          'icon': 'fa fa-random',
          "basePerm": "vyos",
          'modes': {
            'edit': {
              'title': 'Flow Accounting Edit',
              'icon': 'fa fa-pencil',
              'perm': '#edit',
            },
            'create': {
              'title': 'Flow Accounting Add',
              'icon': 'fa fa-plus',
              'perm': '#create',
            },
          },
          'actions': {
            'create': {
              'title': 'Add Flow Accounting ',
              'title_short': 'Add',
              'icon': 'fa fa-plus-circle',
              'color': 'blue-madison',
              'perm': '#create',
            },
            'view': {
              'title': 'Detail Of Flow Accounting',
              'title_short': 'Detail',
              'icon': 'fa fa-eye',
              'color': 'default',
              'perm': '#view'
            },
            'delete': {
              'title': 'Delete Flow Accounting',
              'title_short': 'Delete',
              'icon': 'fa fa-trash-o',
              'color': 'btn-outline uppercase red-sunglo',
              'perm': '#delete'
            }
          },
          'fields': {
            'interface': {
              'label': 'Interface ',
              'placeholder': 'Please enter interface',
            },
            'bufferSize': {
              'label': 'Buffer Size ',
            },
            'syslogFacility': {
              'label': 'Syslog Facility',
            },
            'flowAccounting': {
              'label': 'Flow Accounting',
            },
            'bufferSizeTooltip': {
              'label': 'Buffer size must be(0-4294967295 MIB)',
            },
            'panelDescriptionFlow': {
              'label': 'Click to configure flow accounting',
            },
            'selectFacility': {
              'label': '--Select Syslog Facility--',
            },
            'netflowVersion': {
              'label': 'Netflow Version',
            },
            'serverIp': {
              'label': 'Server IP',
            },
            'port': {
              'label': 'Port',
            },
            'engineId': {
              'label': 'Engine-ID',
            },
            'maxFlow': {
              'label': 'Max-Flow',
            },
            'sourceIp': {
              'label': 'Source IP',
            },
            'timeOut': {
              'label': 'Timeout',
            },
            'interval': {
              'label': 'Interval',
            },
            'disableImt': {
              'label': 'Disable-IMT',
            },
            'samplingRate': {
              'label': 'Sampling Rate',
            },
            'auto': {
              'label': 'Auto',
            },
            'agentAddress': {
              'label': 'Agent Address',
            },
            'netFlow': {
              'label': 'Netflow',
            },
            'panelDescriptionNetFlow': {
              'label': 'Click to configure netflow',
            },
            'portTooltip': {
              'label': 'Port number must be(1025-65535)',
            },
            'selectNetflowVersion': {
              'label': '--Select Netflow Version--',
            },
            'maxFlowTooltip': {
              'label': 'max flow must be(0-42949672295)',
            },
            'samplingTooltip': {
              'label': 'sampling rate must be(0-42949672295)',
            },
            'selectTimeout': {
              'label': '--Select Timeout--',
            },
            'intervalTooltip': {
              'label': 'Interval must be(0-2147483647)',
            },
            'sflow': {
              'label': 'SFlow',
            },
            'panelDescriptionSflow': {
              'label': 'Click to configure sflow',
            },
            'samplingRateTooltip': {
              'label': 'Sampling rate must be(0-4294967295)',
            },



            'save': {
              'label': 'SAVE',
              'placeholder': '',
              'help_line': '',
              'help_block': '',
            },

          },
          'messages': {
            'save_success': 'Template is successfully updated.',
            'create_success': 'Template is successfully saved',
            'variableAlias_messages': ' Same variable-alias pairs cannot be added multiple times.',
            'serverIp_messages':'Please enter server ip',
            'timeOut_messages':'Please enter timeout & interval',
            'interface_messages':'Please enter interface',
            'engineId_messages':'If netflow version is a version-5,engine-id must be(0-255)',
            'port_message':'Port must be(1025-65535)',
            'same_ip':'Same Server IP Cannot Be Added Multiple Times'
          },
        },
      },
    },
    'alarms': {
      'title': 'Alarms',
      'icon': 'fa fa-bell',
      'perm': 'common:view',
      'list': {
        'title': 'Alarms',
        'icon': 'fa fa-bell',
        'basePerm': 'alarms',
        'perm': '#list',
        'actions': {
          'view': {
            'title': 'View Alarm Details',
            'title_short': 'View',
            'icon': 'fa fa-eye',
            'color': 'default',
            'perm': '#view'
          },
          'view_logs': {
            'title': 'Alarm Logs',
            'title_short': 'Logs',
            'icon': 'fa fa-list-alt',
            'color': 'default',
            "perm": "#show_logs"
          },
          'resolve': {
            'title': 'Resolve',
            'title_short': 'Resolve',
            'icon': 'fa fa-gavel',
            'color': 'green-turquoise',
            "perm": "#resolve"
          },
          'edit': {
            'title': 'Edit Alarm Definition',
            'title_short': 'Edit',
            'icon': 'fa fa-pencil',
            'color': 'green-meadow',
            'perm': '#edit'
          },
          'emergency': {
            'title': 'Use Policy Actions',
            'title_short': 'Use Policy Actions',
            'icon': 'fa fa-medkit',
            'color': 'red-sunglo',
            'perm': 'emergency_pol:start_stop_vnf'
          },
          'controller': {
            'title': 'Turn Off the Controller',
            'title_short': 'Turn Off the Controller',
            'icon': 'fa fa-stop-circle',
            'color': 'red-sunglo',
            'perm': 'controller:view'
          }
        },
        'fields': {
          'id': 'Alarm ID',
          'id_short': 'ID',
          'status_short': 'Status',
          'severity_short': 'Severity',
          'name': 'Name',
          'sourceHost': 'Source Host',
          'resource': 'Resource',
          'time': 'Time',
          'vtnname': 'VTN Name'
        },
        'messages': {
          'emergency': 'Emergency Scenario \'{{dto.vtnName}}\' has been created. Do you want to start Policy Actions?',
          'emergency_confirm': 'Policy Actions have been started.',
          'emergency_deny': 'Politika Aksiyonları uygulanmayacaktır.',
          'controller': 'Controller \'{{dto.sourceInstance}}\' hasn\'t been used for a long time. Do you want to turn it off?',
          'controller_confirm': 'Controller is turned off successfully.'
        }
      },
      'notify': {
        'title': 'Alarms',
        'labels': {
          'alarm_on': '{{count}} {{iconOptions.title}} Alarm(s) On!',
          'alarm_off': '{{count}} {{iconOptions.title}} Alarm(s) Off!',
          'view_all': 'view all',
          'alarm_count': '<span class="bold">{{count}}</span> notifications'
        }
      },
      'notify_event': {
        'title': 'Alarm Events',
        'labels': {
          'alarm_on': '{{count}} {{iconOptions.title}} Alarm Event(s) On!',
          'alarm_off': '{{count}} {{iconOptions.title}} Alarm Event(s) Off!',
          'view_all': 'view all',
          'alarm_count': '<span class="bold">{{count}}</span> notifications'
        }
      }
    },
    'alarm_events': {
      'title': 'Alarm Events',
      'icon': 'fa fa-warning',
      'perm': 'common:view',
      'list': {
        'title': 'Alarm Events',
        'icon': 'fa fa-warning',
        "basePerm": "alarm_events",
        'perm': '#list',
        'actions': {
          'view': {
            'title': 'View Alarm Events',
            'title_short': 'View',
            'icon': 'fa fa-eye',
            'color': 'default',
            'perm': '#view'
          },
          'view_logs': {
            'title': 'Alarm Event Logs',
            'title_short': 'Events',
            'icon': 'fa fa-list-alt',
            'color': 'default',
            "perm": "#show_logs"
          },
          'edit': {
            'title': 'Edit Alarm Event',
            'title_short': 'Edit',
            'icon': 'fa fa-pencil',
            'color': 'green-meadow',
            'perm': '#edit'
          },
          'resolve': {
            'title': 'Resolve',
            'title_short': 'Resolve',
            'icon': 'fa fa-gavel',
            'color': 'green-turquoise',
            "perm": "#resolve"
          }
        },
        'fields': {
          'id': 'Alarm ID',
          'id_short': 'ID',
          'status_short': 'Status',
          'severity_short': 'Severity',
          'name': 'Name',
          'sourceHost': 'Source Host',
          'resource': 'Resource',
          'time': 'Time',
          'vtnname': 'VTN Name'
        },
        'messages': {}
      },
    },
    'alarm_logs': {
      'title': 'Alarm Logs',
      'icon': 'fa fa-list-alt',
      'perm': 'common:view',
      'list': {
        'title': 'Alarm Logs',
        'icon': 'fa fa-list-alt',
        'basePerm': 'alarm_logs',
        'perm': '#list',
        'actions': {
          'view': {
            'title': 'Details',
            'title_short': 'Details',
            'icon': 'fa fa-info-circle',
            'color': 'default',
            'perm': '#view'
          },
          'archive': {
            'title_short': 'Archive',
            'icon': 'fa fa-archive',
            'color': 'blue-madison',
            'perm': '#view'
          },
          'current': {
            'title_short': 'Current',
            'icon': 'fa fa-calendar',
            'color': 'blue-madison',
            'perm': '#view'
          }
        },
        'fields': {
          'id': 'Alarm ID',
          'id_short': 'ID',
          'status_short': 'Status',
          'severity_short': 'Severity',
          'name': 'Name',
          'source': 'Source',
          'resource': 'Resource',
          'time': 'Time',
          'description': 'Description',
          'type': 'Type',
          'alarmStatus': 'Status',
          'sourceHost': 'Source Host',
          'sourceInstance': 'Source Instance',
          'vtnName': 'VTN Name',
          'solveTime': 'Resolution Time',
          'reportingMethod': 'Reporting Method',
          'resolver': 'Resolver',
          'resolveNote': 'Resolution Notes',
          'correctionAction': 'Correction Action'
        },
        'messages': {
          'select_item': 'Please select an Alarm Log from the list, to see details. '
        },
        'labels': {
          'all': 'All'
        }
      },
      'details': {
        'title': '{{type}} : {{name}}',
        'title_no_selection': 'No Details',
        'icon': 'fa fa-list-alt',
        'basePerm': 'alarm_logs',
        "perm": "#list",
        'actions': {},
        'fields': {
          'id': 'Alarm ID',
          'id_short': 'ID',
          'status': 'Status',
          'status_short': 'Status',
          'severity': 'Severity',
          'severity_short': 'Severity',
          'name': 'Name',
          'source': 'Source',
          'resource': 'Resource',
          'time': 'Created',
          'solveTime': 'Solve Time',
          'description': 'Description',
          'type': 'Type',
          'alarmStatus': 'Alarm Status',
          'sourceHost': 'Source Host',
          'targetHost': 'Target Host',
          'sourceInstance': 'Source Instance',
          'vtnName': 'VTN Name',
          'reportingMethod': 'Reporting Method',
          'resolver': 'Resolver',
          'detail': 'Detail',
          'resolveNote': 'Resolution Note'
        },
        'messages': {},
      },
      'resolve': {
        'title': 'Resolve Alarm',
        'icon': 'fa fa-gavel',
        "basePerm": "alarm_events",
        "perm": "#resolve",
        'fields': {
          'resolveNote': 'Resolution Notes'
        },
        'messages': {
          'save_success': 'Resolutin note is successfully added.',
        }
      }
    },
    'alarm_notif': {
      'title': 'Alarm Notifications',
      'icon': 'fa fa-envelope',
      'perm': 'common:view',
      'list': {
        'title': 'Alarm Notifications',
        'icon': 'fa fa-envelope',
        'basePerm': 'alarm_notif',
        "perm": "#view",
        'actions': {
          'edit_notif': {
            'title': 'Edit Alarm Notification',
            'title_short': 'Edit',
            'icon': 'fa fa-pencil',
            'color': 'green-meadow',
            "perm": "#edit"
          },
          'create_notif': {
            'title': 'Create Alarm Notification',
            'title_short': 'New',
            'icon': 'fa fa-plus-circle',
            'color': 'blue-madison',
            "perm": "#create"
          },
          'delete_notif': {
            'title': 'Delete Alarm Notification',
            'title_short': 'Sil',
            'icon': 'fa fa-trash-o',
            'color': 'btn-outline uppercase red-sunglo',
            "perm": "#delete"
          }
        },
        'fields': {
          'source': 'Alarm Sources',
          'severity': 'Alarm Degrees',
          'mvtn': 'Virtual Networks',
          'email': 'E-mail List'
        },
        'messages': {
          'delete_confirm': 'Do you want to delete selected alarm notification?',
          'delete_success': 'Selected notification is succesfully deleted!',
        },
      },
      'edit': {
        "basePerm": "alarm_notif",
        'modes': {
          'create': {
            'title': 'Create Alarm Notification',
            'icon': 'fa fa-plus',
            'perm': '#view',
          },
          'edit': {
            'title': 'Edit Alarm Notification',
            'icon': 'fa fa-pencil',
            'perm': '#view',
          },
          'delete': {
            'title': 'Delete Alarm Notification',
            'title_short': 'Delete',
            'icon': 'fa fa-trash-o',
            'color': 'btn-outline uppercase red-sunglo',
            'perm': '#delete'
          }
        },
        'actions': {},
        'fields': {
          'alarm_source': {
            'label': 'Alarm Sources',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
          'mvtn': {
            'label': 'Virtual Networks',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
          'alarm_severity': {
            'label': 'Alarm Degrees',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
          'email': {
            'label': 'E-mail List',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
        },
        'messages': {
          'save_success': 'Alarm notification is succesfully updated!',
        },
        'labels': {
          'emails_help': 'Write one e-mail address per line.',
        }
      },
    },
    'alarm_sources': {
      'title': 'Alarm Sources',
      'icon': 'fa fa-database',
      'perm': 'common:view',
      'list': {
        'title': 'Alarm Sources',
        'icon': 'fa fa-database',
        "basePerm": "moduleNodeConfig",
        'perm': '#list',
        'actions': {
          'edit_source': {
            'title': 'Edit Alarm Source',
            'title_short': 'Edit',
            'icon': 'fa fa-pencil',
            'color': 'green-meadow',
            'perm': '#view'
          }
        },
        'fields': {
          'source': 'Alarm Source Name',
          'severity': 'Alarm Severity',
          'correction': 'Correction Action',
        },
      },
      'edit': {
        "basePerm": "moduleNodeConfig",
        'modes': {
          'edit': {
            'title': 'Edit Alarm Source',
            'icon': 'fa fa-pencil',
            'perm': '#view',
          },
        },
        'actions': {},
        'fields': {
          'name': {
            'label': 'Component Name',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
          'alarm_severity': {
            'label': 'Severity',
            'placeholder': '--select--',
            'help_line': '',
            'help_block': ''
          },
          'alarm_correction': {
            'label': 'Correction Action',
            'placeholder': '',
            'help_line': '',
            'help_block': ''
          },
        },
        'messages': {
          'save_success': '\'{{dto.name}}\' is succesfully updated.',
        },
        'labels': {}
      },
    },
    'settings': {
      'system': {
        'definitions': {
          'title': 'System Config Definitions',
          'perm': 'common:view',
          'list': {
            'basePerm': 'alarms',
            'title': 'System Config Definitions',
            'icon': 'fa fa-puzzle-piece',
            'perm': '#view',
            'actions': {
              'create': {
                'title': 'Add System Config Definition',
                'title_short': 'Add',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'System Configs',
                'title_short': 'Details',
                'icon': 'fa fa-wrench',
                'color': 'default',
                'perm': '#view',
              },
              'edit': {
                'title': 'Edit System Config Definition',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#create',
              },
              'delete': {
                'title': 'Delete System Config Definition',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete',
              }
            },
            'fields': {
              'nodeType': 'Module',
              'componentName': 'Component',
              'configKey': 'Parameter',
              'valueType': 'Parameter Type',
              'valueType_short': 'P. Type',
              'defaultValue': 'Default Value',
              'defaultValue_short': 'D. Value',
              'description': 'Description'
            },
            'messages': {
              'delete_confirm': 'Do you want to delete System Config Definition?',
              'delete_success': 'System Config Definition is deleted successfully',
              'save_error': 'Error occured while saving System Config Definition',
              'save_success': 'System Config Definition is added successfully.'
            }
          },
          'create': {},
          'edit': {
            'basePerm': 'configDefinition',
            'modes': {
              'edit': {
                'title': 'Edit System Config Definition',
                'icon': 'fa fa-pencil',
                'perm': '#create',
              },
              'create': {
                'title': 'Add System Config Definition',
                'icon': 'fa fa-plus',
                'perm': '#create',
              }
            },
            'actions': {},
            'fields': {
              'nodeType': {
                'label': 'Module',
                'help_line': 'Select a Module.',
              },
              'componentName': {
                'label': 'Component',
                'placeholder': 'Enter the Component name...',
                'help_line': 'Enter the Component name.',
                'help_block': ''
              },
              'configKey': {
                'label': 'Parameter Name',
                'placeholder': 'Enter the Parameter name...',
                'help_line': 'Enter the Parameter name.',
                'help_block': ''
              },
              'valueType': {
                'label': 'Parameter Type',
                'help_line': 'Select a Parameter Type.',
              },
              'defaultValue': {
                'label': 'Default Value',
                'placeholder': 'Enter the Default Value...',
                'help_line': 'Enter the Default Value.',
                'help_block': ''
              },
              'description': {
                'label': 'Description',
                'placeholder': 'Enter a Description...',
                'help_line': 'Enter a Description.',
                'help_block': ''
              }
            },
            'messages': {
              'save_success': 'System Config Definition is saved successfully.',
              'create_success': 'System Config Definition is added successfully.',
            },
            'labels': {}
          }
        },
        'parameters': {
          'title': 'System Config',
          'perm': 'alarm:list',
          'list': {
            'basePerm': 'moduleNodeConfig',
            'title': 'List of System Configs',
            'icon': 'fa fa-cogs',
            'perm': '#list',
            'actions': {
              'create': {
                'title': 'Add System Config',
                'title_short': 'Add',
                'icon': 'fa fa-plus-circle',
                'color': 'blue-madison',
                'perm': '#create',
              },
              'view': {
                'title': 'System Config Details',
                'title_short': 'Details',
                'icon': 'fa fa-eye',
                'color': 'default',
                'perm': '#view',
              },
              'edit': {
                'title': 'Edit System Config',
                'title_short': 'Edit',
                'icon': 'fa fa-pencil',
                'color': 'green-meadow',
                'perm': '#create',
              },
              'delete': {
                'title': 'Delete System Config',
                'title_short': 'Delete',
                'icon': 'fa fa-trash-o',
                'color': 'btn-outline uppercase red-sunglo',
                'perm': '#delete',
              }
            },
            'fields': {
              'nodeType': 'Module',
              'componentName': 'Component',
              'nodeVersion': 'Version',
              'nodeId': 'Node',
              'configKey': 'Parameter Name',
              'configValue': 'Parameter Value'
            },
            'messages': {
              'delete_confirm': 'Do you want to delete System Config?',
              'delete_success': 'System Config is deleted successfully',
              'save_error': 'Error occured while saving System Config',
              'save_success': 'System Config is added successfully.'
            },
            'labels': {
              'ALL': 'All'
            }
          },
          'create': {},
          'edit': {
            'basePerm': 'moduleNodeConfig',
            'modes': {
              'edit': {
                'title': 'Edit System Config',
                'icon': 'fa fa-pencil',
                'perm': '#create',
              },
              'create': {
                'title': 'Add System Config',
                'icon': 'fa fa-plus',
                'perm': '#create',
              }
            },
            'actions': {},
            'fields': {
              'nodeType': {
                'label': 'Module',
              },
              'componentName': {
                'label': 'Component',
              },
              'configKey': {
                'label': 'Parameter Name',
              },
              'nodeVersion': {
                'label': 'Version'
              },
              'nodeId': {
                'label': 'Node',
              },
              'configValue': {
                'label': 'Parameter Value',
                'placeholder': 'Enter the Parametre Value...',
                'help_line': 'Enter the Parametre Value.',
                'help_block': ''
              }
            },
            'messages': {
              'save_success': 'System Config is saved successfully.',
              'create_success': 'System Config is added successfully.',
            },
            'labels': {
              'ALL': 'All'
            }
          }
        },
      },
    },
  }
};
