mainModule.directive('departmentTaskPage', function () {
   return {
       restrict: 'EA',
       scope: {
         data: '='
       },
       link: function(scope, element, attrs){

       },
       templateUrl: 'template/dtaskTemplate.html'
   }
});

mainModule.directive('teamTaskPage', function () {
    return {
        restrict: 'EA',
        //scope: {
        //    data: '=',
        //    type: '='
        //},
        controller: 'taskController',
        link: function(scope, element, attrs){
            scope.data = scope.$eval(attrs.data);
            scope.type = scope.$eval(attrs.type);
//点击团队周报页面修改按钮

        },
        templateUrl: 'template/ttaskTemplate.html'
    }
});

mainModule.directive('choiceWeek', function ($filter) {
   return {
       restrict: 'A',
       controller: 'taskController',
       link: function (scope, element, attrs) {
           $('#data_week').datetimepicker({
               language:  'zh-CN',
               weekStart: 0,
               todayBtn:  1,
               autoclose: 1,
               todayHighlight: 1,
               startView: 2,
               minView: 2,
               forceParse: 0,
               showMeridian: 1,
               format: 'yyyy-mm-dd'
           });
           $('#data_week').datetimepicker('setStartDate', '2016-02-01');
           $('#data_week').datetimepicker('setEndDate', '2016-11-01');
           $('#data_week').datetimepicker('setDaysOfWeekDisabled', [0,6]);
           scope.$watch(function () {
               return scope.vm.weekdate;
           }, function (newVal) {
               scope.vm.weekDate = $filter('xcjFormatDate')(newVal, 'week');
           });

       }
   }
});

mainModule.directive('choiceDay', function ($filter) {
    return {
        restrict: 'A',
        controller: 'taskController',
        link: function (scope, element, attrs) {
            $('#data_day').datetimepicker({
                language:  'zh-CN',
                weekStart: 0,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0,
                showMeridian: 1,
                format: 'yyyy-mm-dd'
            });
            $('#data_day').datetimepicker('setStartDate', '2016-02-01');
            $('#data_day').datetimepicker('setEndDate', '2016-11-01');
            $('#data_day').datetimepicker('setDaysOfWeekDisabled', [0,6]);
            scope.$watch(function () {
                return scope.vm.daydate;
            }, function (newVal) {
                scope.vm.dayDate = $filter('xcjFormatDate')(newVal, 'day');
            });

        }
    }
});

mainModule.directive('choicePersonalDay', function ($filter) {
    return {
        restrict: 'A',
        controller: 'taskController',
        link: function (scope, element, attrs) {
            $('#personal_date').datetimepicker({
                language:  'zh-CN',
                weekStart: 0,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0,
                showMeridian: 1,
                format: 'yyyy-mm-dd'
            });
            $('#personal_date').datetimepicker('setStartDate', '2016-02-01');
            $('#personal_date').datetimepicker('setEndDate', '2016-11-01');
            $('#personal_date').datetimepicker('setDaysOfWeekDisabled', [0,6]);
            scope.$watch(function () {
                return scope.vm.personaldate;
            }, function (newVal) {
                scope.vm.personalDate = $filter('xcjFormatDate')(newVal, 'day');
            });
        }
    }
});

mainModule.directive('modified', function () {
   return {
       restrict: 'EA',
       transclude: true,
       scope: {
           data: '=',
           footer: '@'
       },
       link: function (scope,element, attrs){
           console.log($(element).children());
       },
       templateUrl: 'template/modifiedTemplate.html'
   }
});


//mainModule.directive('modifter', function (mainService) {
//    return {
//        restrict: 'A',
//        scope: {
//           data: '='
//        },
//        link: function (scope, element, attrs) {
//
//
//        }
//    }
//});

//个人任务模板组件
mainModule.directive('personalTaskPage', function () {
    return {
        restrict: 'EA',
        //controller: 'taskController',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/ptaskTemplate.html'
    }
});



//增加描述指令
mainModule.directive('addDescription', function () {
   return {
       restrict: 'A',
       link: function (scope, element, attrs) {

       }
   }
});

//进度可拖放指令

mainModule.directive('scheduleDroppable', function () {
   return {
       restrict: 'A',
       controller: 'taskController',
       link: function (scope, element, attrs) {
           $(element).droppable({
               tolerance: "pointer",
               over: function (event, ui) {
                   $(this).addClass('background-color-blue');
               },
               out: function (event, ui) {
                   $(this).removeClass('background-color-blue');
               },
               drop: function( event, ui ) {

                   $(ui.draggable[0]).find("#percent").html(attrs.schedule);
                   $(this).removeClass('background-color-blue');
               }
           });
       }
   }
});

//增加可拖拽指令
mainModule.directive('taskDraggable', function () {
   return {
       restrict: 'A',
       link: function (scope, element, attrs) {
           $(element).draggable({
               revert: true,
               delay: 100,
               opacity: 0.65,
               zIndex:999,
               scroll: false,//不出现滚动条
               iframeFix: true,//不受iframe的影响
               cursor: "move"//拖动的鼠标样式
           });
       }
   }
});

mainModule.directive('personalReport', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            scope.description = "";
            /**
             * 添加描述
             */
            scope.addDescription = function () {
                if(scope.description == "")return;
                  var description = {};
                  description.description = scope.description;
                  description.manHour = "";
                  scope.data.descriptions.push(description);
                  scope.description = "";
              };
            /**
             * 删除方法
             * @param type
             * @param index
             */
            scope.deleteTask = function (type, index) {
                scope.data[type].splice(index,1);
            };
            /**
             * 提交到后台
             */
            scope.submit = function () {

            };
        },
        templateUrl: 'template/personalReportTemplate.html'
    }
});