var monthCtrl = function ($scope, $rootScope, underscore, SweetAlert, $filter) {
    $scope.annualReport = {
        oral: [],
        colorectal: [],
        coach: [],
        goal: []
    };

    var area = [
        '苗栗市',
        '通霄鎮',
        '苑裡鎮',
        '西湖鄉',
        '頭屋鄉',
        '公館鄉',
        '銅鑼鄉',
        '三義鄉',
        '竹南鎮',
        '頭份鎮',
        '後龍鎮',
        '造橋鄉',
        '三灣鄉',
        '南庄鄉',
        '大湖鄉',
        '卓蘭鎮',
        '獅潭鄉',
        '泰安鄉'
    ];

    var detial = {
        store: 0,
        school: 0,
        workplace: 0,
        normal: 0,
        prevent: 0
    };

    function initReport() {
        for(var i = 0; i < 12; i++) {
            $scope.annualReport.oral[i] = {
                filter: {
                    count: 0,
                    man: 0,
                    female: 0,
                    teenager: {
                        man: 0,
                        female: 0
                    },
                    abor: {
                        man: 0,
                        female: 0
                    }
                },
                lectures: {
                    school: {
                        count: 0,
                        man: 0,
                        female: 0
                    },
                    count: 0,
                    man: 0,
                    female: 0
                },
                media: {
                    newspaper: 0,
                    column:0,
                    publication:0,
                    magazine:0,
                    other:0
                },
                tv: {
                    adv: 0,
                    report:0,
                    interview:0,
                    other:0
                },
                ads: {
                    car: 0,
                    board: 0,
                    wall: 0,
                    buman: 0,
                    other: 0
                },
                marquee: 0,
                cloth: 0,
                other:0,
                area: 0,
            };

            $scope.annualReport.colorectal[i] = {
                filter: {
                    count: 0,
                    man: 0,
                    female: 0,
                    workplace: {
                        count: 0,
                        oral: 0,
                        blood: 0,
                    }
                },
                lectures: {
                    count: 0,
                    man: 0,
                    female: 0
                },
            };

            $scope.annualReport.coach[i] = {
                count: 0,
                data: []
            }
        }
        underscore.each(area, function (value) {
            $scope.annualReport.goal.push({
                name: value,
                data: underscore.clone(detial)
            });
        });
    }

    $scope.init = function () {
        initReport();
    }

    $scope.analytics = function () {
        if ($('#source1').val() === '' || $('#source2').val() === '') {
            swal("請選擇檔案", "發生錯誤", "error");
            return;
        }
        oralSource(colorectalSource);
    }

    var oralSource = function (callback) {
        $('#source1').parse({
            config: {
                complete: function (results) {
                    results.data.shift();
                    if (results.data.length == 0) {
                        callback();
                        return;
                    }
                    console.log(results.data);
                    underscore.each(results.data, function (item, key) {
                        if (underscore.size(item) === 1) {
                            return;
                        }
                        var month = item[2] - 1;
                        var entity = underscore.findWhere($scope.annualReport.goal, {name: item[1]});
                        // filter
                        $scope.annualReport.oral[month].filter.count += parseIntFilterEmpty(item[3]);
                        $scope.annualReport.oral[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.oral[month].filter.female += parseIntFilterEmpty(item[5]);
                        // teenage
                        $scope.annualReport.oral[month].filter.teenager.man += parseIntFilterEmpty(item[6]);
                        $scope.annualReport.oral[month].filter.teenager.female += parseIntFilterEmpty(item[7]);
                        // abor
                        $scope.annualReport.oral[month].filter.abor.man += parseIntFilterEmpty(item[8]);
                        $scope.annualReport.oral[month].filter.abor.female += parseIntFilterEmpty(item[9]);

                        // lectures
                        for (var i = 10; i < 22; i+=4) {
                            if (item[i] !== '') {
                                $scope.annualReport.oral[month].lectures.school.count++;
                                $scope.annualReport.oral[month].lectures.school.man += parseIntFilterEmpty(item[i + 1]);
                                $scope.annualReport.oral[month].lectures.school.female += parseIntFilterEmpty(item[i + 2]);
                                entity.data.school++;
                            }
                        }

                        for (var i = 22; i < 40; i+=6) {
                            if (item[i] !== '') {
                                $scope.annualReport.oral[month].lectures.count++;
                                $scope.annualReport.oral[month].lectures.man += parseIntFilterEmpty(item[i + 2]);
                                $scope.annualReport.oral[month].lectures.female += parseIntFilterEmpty(item[i + 3]);
                                entity.data.normal++;
                            }
                        }

                        for (var i = 40; i < 58; i+=6) {
                            if (item[i] !== '') {
                                var entity = underscore.findWhere($scope.annualReport.goal, {name: item[1]});
                                entity.data.workplace++;
                            }
                        }

                        // media
                        $scope.annualReport.oral[month].media.newspaper += parseIntFilterEmpty(item[58]);
                        $scope.annualReport.oral[month].media.column += parseIntFilterEmpty(item[60]);
                        $scope.annualReport.oral[month].media.publication += parseIntFilterEmpty(item[62]);
                        $scope.annualReport.oral[month].media.magazine += parseIntFilterEmpty(item[64]);
                        $scope.annualReport.oral[month].media.other += parseIntFilterEmpty(item[66]);

                        // tv
                        $scope.annualReport.oral[month].tv.adv += parseIntFilterEmpty(item[68]);
                        $scope.annualReport.oral[month].tv.report += parseIntFilterEmpty(item[70]);
                        $scope.annualReport.oral[month].tv.interview += parseIntFilterEmpty(item[72]);
                        $scope.annualReport.oral[month].tv.other += parseIntFilterEmpty(item[74]);

                        // ads
                        $scope.annualReport.oral[month].ads.car += parseIntFilterEmpty(item[76]);
                        $scope.annualReport.oral[month].ads.board += parseIntFilterEmpty(item[78]);
                        $scope.annualReport.oral[month].ads.wall += parseIntFilterEmpty(item[80]);
                        $scope.annualReport.oral[month].ads.buman += parseIntFilterEmpty(item[82]);
                        $scope.annualReport.oral[month].ads.other += parseIntFilterEmpty(item[84]);

                        // marquee
                        $scope.annualReport.oral[month].marquee += parseIntFilterEmpty(item[86]);

                        // cloth
                        $scope.annualReport.oral[month].cloth += parseIntFilterEmpty(item[88]);

                        // other
                        $scope.annualReport.oral[month].other += parseIntFilterEmpty(item[90]);

                        // area
                        $scope.annualReport.oral[month].area += parseIntFilterEmpty(item[92]);

                        if (parseIntFilterEmpty(item[92]) > 0) {
                            entity.data.store += parseIntFilterEmpty(item[92]);
                        }
                        // coach
                        processCoach(month, item[95]);
                    });
                    callback();
                }
            }
        });
    }

    var colorectalSource = function (callback) {
        $('#source2').parse({
            config: {
                complete: function (results) {
                    results.data.shift();
                    if (results.data.length == 0) {
                        analyticsComplete();
                        return;
                    }
                    underscore.each(results.data, function (item, key) {
                        if (underscore.size(item) === 1) {
                            return;
                        }
                        var month = item[2] - 1;
                        var entity = underscore.findWhere($scope.annualReport.goal, {name: item[1]});
                        // fiter
                        $scope.annualReport.colorectal[month].filter.count += parseIntFilterEmpty(item[3]);
                        $scope.annualReport.colorectal[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.colorectal[month].filter.female += parseIntFilterEmpty(item[5]);
                        for (var i = 6; i < 15; i+=3) {
                            if (item[6] !== '') {
                                $scope.annualReport.colorectal[month].filter.workplace.count++;
                                $scope.annualReport.colorectal[month].filter.workplace.oral += parseIntFilterEmpty(item[i + 1]);
                                $scope.annualReport.colorectal[month].filter.workplace.blood += parseIntFilterEmpty(item[i + 2]);
                            }
                        }

                        // lectures
                        $scope.annualReport.colorectal[month].lectures.count += parseIntFilterEmpty(item[15]);
                        for (var i = 16; i < 28; i+=4) {
                            if (item[i] !== '') {
                                $scope.annualReport.colorectal[month].lectures.man += parseIntFilterEmpty(item[i + 2]);
                                $scope.annualReport.colorectal[month].lectures.female += parseIntFilterEmpty(item[i + 3]);
                                entity.data.prevent++;
                            }
                        }

                        // coach
                        processCoach(month, item[63]);
                    });
                    analyticsComplete();
                }
            }
        });
    }

    var processCoach = function (month, item) {
        if (item !== '') {
            var report = [];
            underscore.each(item.split('\n'), function (value, index) {
                var match = value.match(/(\d{2,3}\.\d{1,2}\.\d{1,2}),?(.*)/);
                if (match !== null) {
                    report.push({
                        date: new Date(match[1]),
                        name: match[2]
                    })
                }
            });

            underscore.each(report, function (value, index) {
                if (underscore.where($scope.annualReport.coach[month].data, value).length === 0) {
                    $scope.annualReport.coach[month].count++;
                    $scope.annualReport.coach[month].data.push(value);
                }
            });
        }
    }

    var analyticsComplete = function () {
        console.log($scope.annualReport);
        SweetAlert.swal("Good job!", "分析完成!", "success");
        // $scope.$apply();
    };
}

var parseIntFilterEmpty = function (value) {
  return parseInt(value) || 0;
}

app.controller('monthCtrl', monthCtrl);