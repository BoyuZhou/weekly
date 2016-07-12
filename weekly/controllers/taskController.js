mainModule.controller('taskController', ['$scope', '$filter', '$state', 'mainService', function ($scope, $filter, $state, mainService) {
    var vm = this;

    //团队周报模拟数据
    vm.dayDaily = {
        department1: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department6: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department2: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department3: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department4: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department5: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: '已',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        }
    };
    //周报时间日期
    vm.daydate = new Date();
    //团队周报模拟日期模型
    vm.dayDate = $filter('xcjFormatDate')(vm.daydate, 'day');
    //当前标签
    vm.dayTagIndex = '2';
    //切换标签
    vm.changeTag = function (num) {
        vm.dayTagIndex = num;
    };


    //团队周报模拟数据
    vm.weekDaily = {
        department1: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: false,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department6: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: true,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department2: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: false,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department3: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: true,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department4: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: false,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        department5: {
            name: 'java',
            descriptionNum: '20',
            manHour: '400',
            state: false,
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        }
    };
    //周报时间日期
    vm.weekdate = new Date();
    //团队周报模拟日期模型
    vm.weekDate = $filter('xcjFormatDate')(vm.weekdate, 'week');
    //当前标签
    vm.weekTagIndex = '1';
    //切换标签
    vm.changeWeekTag = function (num) {
        vm.weekTagIndex = num;
    };

    //审核及修改按钮显示参数
    vm.checkBtnState = true;
    vm.checkBtn = '审核';
    vm.modifiedBtnState = true;
    //审核按钮点击
    vm.check = function () {
        vm.checkBtn = '已审核';
        vm.modifiedBtnState = false;
    };


    //修改页面选择的时间
    vm.choiceDay = '6月15日';

    vm.teamDaily = {
        user1: {
            name: '周博宇',
            descriptionNum: '20',
            descriptions:'hahahahaha',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user2: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user3: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user4: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user5: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user6: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        }
    };
    vm.teamWeekDaily = {
        user1: {
            name: '周博宇',
            descriptionNum: '20',
            descriptions:'hahahahaha',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user2: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user3: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user4: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user5: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        },
        user6: {
            name: '周博宇',
            descriptionNum: '20',
            tasks: [
                {
                    name: '测试平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: 'demo平台',
                    schedule: '20%',
                    manHour: '20'
                },
                {
                    name: '内容平台',
                    schedule: '20%',
                    manHour: '20'
                }
            ]
        }
    };
vm.status = {
        title: '拖拽到下面改变任务进度',
        thead: [],
        tbody: [
            ['未开始'],
            ['10%'],
            ['20%'],
            ['30%'],
            ['40%'],
            ['50%'],
            ['60%'],
            ['70%'],
            ['80%'],
            ['90%'],
            ['100%']
        ],
        control: false
    };
    $('#side-menu').metisMenu();

    vm.changePassword = function () {
        var html = '<div class="form-group col-lg-10 col-lg-offset-1"><label>新密码</label><input class="form-control"> </div><div class="form-group col-lg-10 col-lg-offset-1"><label>再次输入</label><input class="form-control"></div>';
        vm.mainService.promp = true;
        $('#clude').html($compile(html)($scope));

    };



    //个人工作台任务状态选择
    vm.screen = 'continue';
    //个人工作台tag
    vm.personalIndex = '1';
    //筛选是否完成状态的任务
    vm.screenTask = function (tag) {
        vm.screen = tag;
    };

    //个人工作台默认时间
    vm.personaldate = new Date();
    //当前标签
    vm.personalTagIndex = '2';
    //切换标签
    vm.changepersonalTag = function (num) {
        vm.personalTagIndex = num;
    };

    vm.targetSchelude = "";


    //个人工作台数据
    vm.personalTask = [
      {
          name: '用户权限功能',
          date: '7.4-7.6',
          state: 'beforeBegin',
          description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
      },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: '10%',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: '20%',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: 'complete',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: '30%',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: '20%',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: 'complete',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        },
        {
            name: '用户权限功能',
            date: '7.4-7.6',
            state: '30%',
            description: '这是一段很长的描述，你猜她有多长，就有多长，长到你无可想象'
        }
    ];
    vm.personalDate = $filter('xcjFormatDate')(vm.personaldate, 'day');


    

    // 个人工作台添加描述

    vm.addDescription=function () {

    };

    //点击团队名称跳页
    vm.enterTeamPage = function (name, type) {

    };
    vm.changeTeamWeekDaily = function (data){
        console.log(111);
        mainService.modifterData = data;
        mainService.prompSrc = 'view/promp/changeWeekTask.html';
        mainService.promp = true;
    };

    //个人工作台填写周报数据
    vm.personalWorkBench = {
        tasks: [
            {
                name: '内容平台',
                schedule: '20%',
                manHour: ''
            },
            {
                name: '权限管理',
                schedule: '20%',
                manHour: ''
            }
        ],
        descriptions: [
            {
                description: 'goodgoodstudy，daydayup',
                manHour: ''
            }
        ]
    }

}]);

//分配任务控制器
mainModule.controller('allotController', ['$scope', function($scope){
    var vm = this;
    $('#startTime').datetimepicker({
        language:  'zh-CN',
        weekStart: 0,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 1,
        forceParse: 0,
        showMeridian: 1
    });
    $('#startTime').datetimepicker('setStartDate', '2016-02-01');
    $('#startTime').datetimepicker('setEndDate', '2016-11-01');
    $('#startTime').datetimepicker('setDaysOfWeekDisabled', [0,6]);
    $('#endTime').datetimepicker({
        language:  'zh-CN',
        weekStart: 0,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 1,
        forceParse: 0,
        showMeridian: 1
    });
    $('#endTime').datetimepicker('setStartDate', '2016-02-01');
    $('#endTime').datetimepicker('setEndDate', '2016-11-01');
    $('#endTime').datetimepicker('setDaysOfWeekDisabled', [0,6]);

}]);